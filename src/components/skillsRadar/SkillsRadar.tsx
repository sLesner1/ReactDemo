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

// Rejestracja wymaganych elementów
Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillsRadar: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = './chart_gradient.png';
    img.onload = () => {
      const pattern = ctx.createPattern(img, 'repeat');
      const matrix = new DOMMatrix();
      matrix.translateSelf(
        25,
        120
      );

      pattern.setTransform(matrix);

      if (chartRef.current) chartRef.current.destroy();

      chartRef.current = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: [
            'Frontend Engineering',
            'Mobile Development',
            'UI / UX Engineering',
            'Performance',
            'Architecture',
            'Product Thinking'
          ],
          datasets: [
            {
              label: 'Skills Overview',
              data: [5, 4, 4, 3, 3, 4],
              fill: true,
              backgroundColor: 'rgba(109, 249, 251, 0.2)',
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
                backdropColor: 'transparent'
              },
              grid: {
                color: 'rgba(255,255,255,0.1)',
                circular: true
              },
              angleLines: { color: 'rgba(255,255,255,0.15)' },
              pointLabels: { color: '#E2F8FF', font: { size: 14, weight: '600' } }
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
    <div style={{ width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default SkillsRadar;