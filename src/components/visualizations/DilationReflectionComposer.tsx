import { useState } from 'react';

type TransformationType = 'dilate' | 'reflect-x' | 'reflect-y' | 'reflect-origin';

interface Transformation {
  type: TransformationType;
  scale?: number;
}

export function DilationReflectionComposer() {
  const [startPoint, setStartPoint] = useState({ x: 2, y: 3 });
  const [transformations, setTransformations] = useState<Transformation[]>([
    { type: 'dilate', scale: 2 },
    { type: 'reflect-x' },
  ]);

  const applyTransformation = (point: { x: number; y: number }, t: Transformation) => {
    switch (t.type) {
      case 'dilate':
        return { x: point.x * (t.scale || 1), y: point.y * (t.scale || 1) };
      case 'reflect-x':
        return { x: point.x, y: -point.y };
      case 'reflect-y':
        return { x: -point.x, y: point.y };
      case 'reflect-origin':
        return { x: -point.x, y: -point.y };
    }
  };

  const getTransformationLabel = (t: Transformation) => {
    switch (t.type) {
      case 'dilate':
        return `×${t.scale}`;
      case 'reflect-x':
        return 'Reflect x';
      case 'reflect-y':
        return 'Reflect y';
      case 'reflect-origin':
        return 'Reflect O';
    }
  };

  // Compute all intermediate points
  const steps: { x: number; y: number }[] = [startPoint];
  let current = startPoint;
  for (const t of transformations) {
    current = applyTransformation(current, t);
    steps.push(current);
  }

  const width = 320;
  const height = 320;
  const centerX = width / 2;
  const centerY = height / 2;
  const gridScale = 15;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * gridScale,
    y: centerY - y * gridScale,
  });

  const isInBounds = (p: { x: number; y: number }) =>
    Math.abs(p.x) <= 10 && Math.abs(p.y) <= 10;

  const addTransformation = (type: TransformationType) => {
    if (transformations.length >= 4) return;
    const newT: Transformation = type === 'dilate' ? { type, scale: 2 } : { type };
    setTransformations([...transformations, newT]);
  };

  const removeTransformation = (index: number) => {
    setTransformations(transformations.filter((_, i) => i !== index));
  };

  const updateScale = (index: number, scale: number) => {
    const updated = [...transformations];
    updated[index] = { ...updated[index], scale };
    setTransformations(updated);
  };

  const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Dilation & Reflection Composer
      </h3>

      {/* Starting point controls */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-dark-400 text-sm">Start:</span>
        <div className="flex items-center gap-2">
          <span className="text-dark-500 text-sm">x:</span>
          <input
            type="number"
            value={startPoint.x}
            onChange={(e) => setStartPoint({ ...startPoint, x: Number(e.target.value) })}
            className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-dark-200 text-sm"
            min={-6}
            max={6}
          />
          <span className="text-dark-500 text-sm">y:</span>
          <input
            type="number"
            value={startPoint.y}
            onChange={(e) => setStartPoint({ ...startPoint, y: Number(e.target.value) })}
            className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-dark-200 text-sm"
            min={-6}
            max={6}
          />
        </div>
      </div>

      {/* Transformation chain */}
      <div className="flex flex-wrap items-center gap-2 mb-4 p-3 bg-dark-800/50 rounded-lg">
        <div
          className="px-2 py-1 rounded text-xs font-mono"
          style={{ backgroundColor: `${colors[0]}20`, color: colors[0] }}
        >
          ({startPoint.x}, {startPoint.y})
        </div>
        {transformations.map((t, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className="text-dark-500">→</span>
            <div className="flex items-center gap-1">
              <span
                className="px-2 py-1 rounded text-xs"
                style={{ backgroundColor: `${colors[i + 1]}20`, color: colors[i + 1] }}
              >
                {getTransformationLabel(t)}
              </span>
              {t.type === 'dilate' && (
                <input
                  type="number"
                  value={t.scale}
                  onChange={(e) => updateScale(i, Number(e.target.value))}
                  className="w-12 px-1 py-0.5 bg-dark-700 border border-dark-600 rounded text-dark-200 text-xs"
                  step={0.5}
                  min={-3}
                  max={3}
                />
              )}
              <button
                onClick={() => removeTransformation(i)}
                className="w-5 h-5 flex items-center justify-center rounded bg-dark-700 text-dark-400 hover:bg-red-500/20 hover:text-red-400 text-xs"
              >
                ×
              </button>
            </div>
          </div>
        ))}
        {isInBounds(steps[steps.length - 1]) && (
          <>
            <span className="text-dark-500">=</span>
            <div
              className="px-2 py-1 rounded text-xs font-mono font-bold"
              style={{
                backgroundColor: `${colors[Math.min(transformations.length, colors.length - 1)]}20`,
                color: colors[Math.min(transformations.length, colors.length - 1)],
              }}
            >
              ({steps[steps.length - 1].x}, {steps[steps.length - 1].y})
            </div>
          </>
        )}
      </div>

      {/* Add transformation buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => addTransformation('dilate')}
          disabled={transformations.length >= 4}
          className="px-3 py-1.5 bg-dark-700 text-dark-300 rounded text-sm hover:bg-dark-600 disabled:opacity-50"
        >
          + Dilate
        </button>
        <button
          onClick={() => addTransformation('reflect-x')}
          disabled={transformations.length >= 4}
          className="px-3 py-1.5 bg-dark-700 text-dark-300 rounded text-sm hover:bg-dark-600 disabled:opacity-50"
        >
          + Reflect x
        </button>
        <button
          onClick={() => addTransformation('reflect-y')}
          disabled={transformations.length >= 4}
          className="px-3 py-1.5 bg-dark-700 text-dark-300 rounded text-sm hover:bg-dark-600 disabled:opacity-50"
        >
          + Reflect y
        </button>
        <button
          onClick={() => addTransformation('reflect-origin')}
          disabled={transformations.length >= 4}
          className="px-3 py-1.5 bg-dark-700 text-dark-300 rounded text-sm hover:bg-dark-600 disabled:opacity-50"
        >
          + Reflect O
        </button>
      </div>

      {/* Coordinate plane */}
      <div className="flex justify-center mb-4">
        <svg
          width={width}
          height={height}
          className="bg-dark-800 rounded-xl"
        >
          {/* Grid */}
          {Array.from({ length: 21 }, (_, i) => i - 10).map((n) => (
            <g key={n}>
              <line
                x1={centerX + n * gridScale}
                y1={0}
                x2={centerX + n * gridScale}
                y2={height}
                stroke={n === 0 ? '#6b7280' : '#374151'}
                strokeWidth={n === 0 ? 2 : 0.5}
              />
              <line
                x1={0}
                y1={centerY - n * gridScale}
                x2={width}
                y2={centerY - n * gridScale}
                stroke={n === 0 ? '#6b7280' : '#374151'}
                strokeWidth={n === 0 ? 2 : 0.5}
              />
            </g>
          ))}

          {/* Draw arrows between steps */}
          {steps.slice(0, -1).map((step, i) => {
            const nextStep = steps[i + 1];
            if (!isInBounds(step) || !isInBounds(nextStep)) return null;
            const from = toSvg(step.x, step.y);
            const to = toSvg(nextStep.x, nextStep.y);
            return (
              <line
                key={`arrow-${i}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={colors[i + 1]}
                strokeWidth={2}
                strokeDasharray="4,4"
                opacity={0.6}
              />
            );
          })}

          {/* Origin */}
          <circle cx={centerX} cy={centerY} r={4} fill="#6b7280" />

          {/* Draw all points */}
          {steps.map((step, i) => {
            if (!isInBounds(step)) return null;
            const svg = toSvg(step.x, step.y);
            return (
              <g key={`point-${i}`}>
                <circle
                  cx={svg.x}
                  cy={svg.y}
                  r={i === 0 ? 8 : i === steps.length - 1 ? 8 : 5}
                  fill={colors[Math.min(i, colors.length - 1)]}
                />
                {i === 0 && (
                  <text
                    x={svg.x + 10}
                    y={svg.y - 10}
                    fill={colors[i]}
                    fontSize={11}
                    fontWeight="bold"
                  >
                    P
                  </text>
                )}
                {i === steps.length - 1 && i > 0 && (
                  <text
                    x={svg.x + 10}
                    y={svg.y - 10}
                    fill={colors[Math.min(i, colors.length - 1)]}
                    fontSize={11}
                    fontWeight="bold"
                  >
                    P'
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <p className="text-dark-500 text-xs text-center">
        Build a sequence of transformations and watch the point move through each step.
      </p>
    </div>
  );
}
