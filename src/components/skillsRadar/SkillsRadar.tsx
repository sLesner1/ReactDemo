import React, { useEffect, useRef } from 'react';
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

const radarGridGlowPlugin = {
  id: 'radarGridGlow',

  beforeDraw(chart: any) {
    const scale = chart.scales.r;
    if (!scale) return;

    const ctx = chart.ctx;
    ctx.save();

    ctx.shadowColor = '#6DF9FB66';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  },

  afterDraw(chart: any) {
    chart.ctx.restore();
  },
};

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
Chart.register(radarGridGlowPlugin);

const SkillsRadar: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const isSmall = window.innerWidth < 1200;
  const isXs = window.innerWidth < 768;

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = './gradient.png';
    img.onload = () => {
      const pattern = ctx.createPattern(img, 'repeat');
      const matrix = new DOMMatrix();
      matrix.scaleSelf(0.58, 0.58);
      matrix.translateSelf(
        120,
        700
      );

      pattern.setTransform(matrix);

      if (chartRef.current) chartRef.current.destroy();

      chartRef.current = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: !isXs ? [
            'Web Development',
            'Mobile Development',
            'Component Systems',
            'Performance Optimization',
            'TypeScript Mastery'
          ] : [
            'Web Development',
            ['Mobile', 'Development'],
            ['Component', 'Systems'],
            ['Performance', 'Optimization'],
            ['TypeScript', 'Mastery']
          ],
          datasets: [
            {
              label: 'Skills Overview',
              data: [4, 5, 3.5, 3.5, 4.5],
              fill: true,
              // backgroundColor: 'rgba(109, 249, 251, 0.2)',
              borderColor: '#E2F8FF',
              borderWidth: 2,
              pointBackgroundColor: '#cf71fa',
              pointBorderColor: '#E2F8FF',
              pointHoverRadius: 6,
              pointRadius: 5,
              pointHoverBackgroundColor: '#6DF9FB',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              backgroundColor: pattern,
              suggestedMin: 0,
              suggestedMax: 5,
              ticks: {
                stepSize: 1,
                color: '#E2F8FF',
                backdropColor: 'transparent',
                padding: 0,
              },
              grid: {
                color: '#6DF9FB',
                circular: true,
                lineWidth: 1
              },
              angleLines: {
                color: '#6DF9FB',
                lineWidth: 1,
              },
              pointLabels: {
                color: '#E2F8FF',
                padding: isXs ? 6 : 12,
                font: {
                  size: isXs ? 10 : isSmall ? 12 : 14,
                  weight: '600',
                },
              },
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.8)',
              titleColor: '#E2F8FF',
              bodyColor: '#E2F8FF',
              borderColor: '#E2F8FF',
              borderWidth: 1
            }
          }
        },
      });
    };

    return () => chartRef.current?.destroy();
  }, []);

  return (
    <div style={{ width: '100%', height: 350 }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default SkillsRadar;