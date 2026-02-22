import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const MAX_RIPPLES = 20;

interface GridUniforms {
    uTime: { value: number };
    uMouse: { value: THREE.Vector2 };
    uRippleTimes: { value: number[] };
    uRippleCenters: { value: THREE.Vector2[] };
}

const Scene: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const { viewport } = useThree();
    const mouseRef = useRef(new THREE.Vector2(0, 0));
    const rippleIdx = useRef(0);

    const GRID_SIZE_W = 40; 
    const GRID_SIZE_H = 40;
    const SEGMENTS = 150;

    const uniforms = useMemo<GridUniforms>(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uRippleTimes: { value: new Array(MAX_RIPPLES).fill(-999.0) },
        uRippleCenters: { value: new Array(MAX_RIPPLES).fill(0).map(() => new THREE.Vector2(0, 0)) }
    }), []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        const handleMouseDown = () => {
            const idx = rippleIdx.current;
            uniforms.uRippleCenters.value[idx].copy(uniforms.uMouse.value);
            uniforms.uRippleTimes.value[idx] = uniforms.uTime.value;
            rippleIdx.current = (rippleIdx.current + 1) % MAX_RIPPLES;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, [viewport, uniforms]);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            uniforms.uTime.value = clock.getElapsedTime();
            const targetX = (mouseRef.current.x * viewport.width) / 2;
            const targetY = (mouseRef.current.y * viewport.height) / 2;
            uniforms.uMouse.value.x = THREE.MathUtils.lerp(uniforms.uMouse.value.x, targetX, 0.01);
            uniforms.uMouse.value.y = THREE.MathUtils.lerp(uniforms.uMouse.value.y, targetY, 0.01);
        }
    });

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 5, 0, 0]}>
            <planeGeometry args={[GRID_SIZE_W, GRID_SIZE_H, SEGMENTS, SEGMENTS]} />
            <shaderMaterial
  wireframe
  transparent
  uniforms={uniforms}
  vertexShader={`
    varying float vZ;
    varying vec4 vScreenPos;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uRippleTimes[20];
    uniform vec2 uRippleCenters[20];
                  
    float random(in vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
                  
    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec2 noiseCoords = modelPosition.xy * 0.4; 
      
      float elevation = noise(noiseCoords + uTime * 0.1) * 1.5;
      
      for(int i = 0; i < 20; i++) {
          float distToRipple = distance(modelPosition.xy, uRippleCenters[i]);
          float timeSinceClick = uTime - uRippleTimes[i];
          
          if(timeSinceClick > 0.0 && timeSinceClick < 6.0) {
              float wavePos = timeSinceClick * 2.0; 
              float ripple = sin((distToRipple - wavePos) * 1.5);
              
              float strength = smoothstep(3.0, 0.0, distToRipple - wavePos);
              strength *= smoothstep(-3.0, 0.0, wavePos - distToRipple);
              
              float fadeIn = smoothstep(0.0, 0.5, timeSinceClick);
              
              strength *= (6.0 - timeSinceClick) * 0.1; 
              elevation += ripple * strength * 1.2 * fadeIn; 
          }
      }
                  
      float distToMouse = distance(modelPosition.xy, uMouse);
      float mouseInfluence = smoothstep(3.0, 0.0, distToMouse);
      elevation += pow(mouseInfluence, 2.0) * 1.5; 
                  
      modelPosition.z += elevation;
      vZ = elevation;

      vec4 projectedPosition = projectionMatrix * viewMatrix * modelPosition;
      vScreenPos = projectedPosition;
      gl_Position = projectedPosition;
    }
  `}
  fragmentShader={`
    varying float vZ;
    varying vec4 vScreenPos;

    void main() {
      float screenX = (vScreenPos.x / vScreenPos.w) * 0.5 + 0.5;

      vec3 colorLeft = vec3(0.263,0.71,0.953);
      vec3 colorRight = vec3(0.63, 0.12, 0.94);

      vec3 finalColor = mix(colorLeft, colorRight, screenX);
      
      float brightness = smoothstep(-1.0, 3.0, vZ);
      
      gl_FragColor = vec4(finalColor, 0.15 + brightness * 0.6);
    }
  `}
/>
        </mesh>
    );
};

const InteractiveGrid: React.FC = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Scene />
            </Canvas>
        </div>
    );
};

export default InteractiveGrid;