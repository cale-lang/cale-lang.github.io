import { useMemo } from 'react';

const nodes = [
  { label: 'SIR', angle: 10, radius: 41 },
  { label: 'FIR', angle: 74, radius: 58 },
  { label: 'BCIR', angle: 158, radius: 47 },
  { label: 'Sol', angle: 236, radius: 60 },
  { label: 'Lacail', angle: 306, radius: 50, warm: true },
];

export default function OrbitSignal() {
  const points = useMemo(
    () =>
      nodes.map((node) => {
        const rad = (node.angle * Math.PI) / 180;
        return {
          ...node,
          x: 50 + Math.cos(rad) * node.radius * 0.72,
          y: 50 + Math.sin(rad) * node.radius * 0.48,
        };
      }),
    []
  );

  return (
    <div className="orbit-signal" aria-hidden="true">
      <div className="orbit-core">
        <span>C</span>
      </div>
      <div className="orbit-ring orbit-ring-a" />
      <div className="orbit-ring orbit-ring-b" />
      {points.map((point) => (
        <div
          key={point.label}
          className={point.warm ? 'orbit-node is-warm' : 'orbit-node'}
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
        >
          {point.label}
        </div>
      ))}
      <div className="orbit-scanline" />
    </div>
  );
}
