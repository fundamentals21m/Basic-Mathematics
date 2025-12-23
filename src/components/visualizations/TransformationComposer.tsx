import { useState } from 'react';

type TransformType = 'identity' | 'reflect-x' | 'reflect-y' | 'rotate-90' | 'rotate-180' | 'translate';

interface Point {
  x: number;
  y: number;
}

export function TransformationComposer() {
  const [first, setFirst] = useState<TransformType>('reflect-x');
  const [second, setSecond] = useState<TransformType>('reflect-y');

  // Original square vertices
  const original: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 1, y: 2 },
  ];

  // Add a marker point to show orientation
  const marker: Point = { x: 1.5, y: 1.3 };

  const applyTransform = (p: Point, type: TransformType): Point => {
    switch (type) {
      case 'identity':
        return { ...p };
      case 'reflect-x':
        return { x: p.x, y: -p.y };
      case 'reflect-y':
        return { x: -p.x, y: p.y };
      case 'rotate-90':
        return { x: -p.y, y: p.x };
      case 'rotate-180':
        return { x: -p.x, y: -p.y };
      case 'translate':
        return { x: p.x + 2, y: p.y + 1 };
      default:
        return p;
    }
  };

  const afterFirst = original.map((p) => applyTransform(p, first));
  const afterSecond = afterFirst.map((p) => applyTransform(p, second));
  const markerFirst = applyTransform(marker, first);
  const markerSecond = applyTransform(markerFirst, second);

  // Determine the composed transformation
  const getComposedType = (): string => {
    const compositions: Record<string, Record<string, string>> = {
      'identity': {
        'identity': 'Identity',
        'reflect-x': 'Reflect across x-axis',
        'reflect-y': 'Reflect across y-axis',
        'rotate-90': 'Rotate 90° CCW',
        'rotate-180': 'Rotate 180°',
        'translate': 'Translate (2, 1)',
      },
      'reflect-x': {
        'identity': 'Reflect across x-axis',
        'reflect-x': 'Identity',
        'reflect-y': 'Rotate 180°',
        'rotate-90': 'Reflect across y = -x',
        'rotate-180': 'Reflect across y-axis',
        'translate': 'Glide reflection',
      },
      'reflect-y': {
        'identity': 'Reflect across y-axis',
        'reflect-x': 'Rotate 180°',
        'reflect-y': 'Identity',
        'rotate-90': 'Reflect across y = x',
        'rotate-180': 'Reflect across x-axis',
        'translate': 'Glide reflection',
      },
      'rotate-90': {
        'identity': 'Rotate 90° CCW',
        'reflect-x': 'Reflect across y = x',
        'reflect-y': 'Reflect across y = -x',
        'rotate-90': 'Rotate 180°',
        'rotate-180': 'Rotate 90° CW',
        'translate': 'Rotation + Translation',
      },
      'rotate-180': {
        'identity': 'Rotate 180°',
        'reflect-x': 'Reflect across y-axis',
        'reflect-y': 'Reflect across x-axis',
        'rotate-90': 'Rotate 90° CW',
        'rotate-180': 'Identity',
        'translate': 'Rotation + Translation',
      },
      'translate': {
        'identity': 'Translate (2, 1)',
        'reflect-x': 'Glide reflection',
        'reflect-y': 'Glide reflection',
        'rotate-90': 'Translation + Rotation',
        'rotate-180': 'Translation + Rotation',
        'translate': 'Translate (4, 2)',
      },
    };
    return compositions[first]?.[second] || 'Composed isometry';
  };

  // SVG coordinate transforms
  const toSvg = (p: Point) => ({
    x: 200 + p.x * 35,
    y: 150 - p.y * 35,
  });

  const transformLabels: Record<TransformType, string> = {
    'identity': 'Identity',
    'reflect-x': 'Reflect x-axis',
    'reflect-y': 'Reflect y-axis',
    'rotate-90': 'Rotate 90°',
    'rotate-180': 'Rotate 180°',
    'translate': 'Translate (2,1)',
  };

  const renderPolygon = (points: Point[], fill: string, stroke: string, markerPt: Point) => {
    const svgPoints = points.map(toSvg);
    const svgMarker = toSvg(markerPt);
    return (
      <>
        <polygon
          points={svgPoints.map((p) => `${p.x},${p.y}`).join(' ')}
          fill={fill}
          stroke={stroke}
          strokeWidth={2}
        />
        {/* Orientation marker */}
        <circle cx={svgMarker.x} cy={svgMarker.y} r={4} fill={stroke} />
      </>
    );
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Transformation Composer
      </h3>

      {/* Selectors */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-dark-500 mb-2 text-center">First Transformation (F)</label>
          <div className="flex flex-wrap justify-center gap-1">
            {(Object.keys(transformLabels) as TransformType[]).map((type) => (
              <button
                key={type}
                onClick={() => setFirst(type)}
                className={`px-2 py-1 rounded text-xs transition-all ${
                  first === type
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
                }`}
              >
                {transformLabels[type]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-2 text-center">Second Transformation (G)</label>
          <div className="flex flex-wrap justify-center gap-1">
            {(Object.keys(transformLabels) as TransformType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSecond(type)}
                className={`px-2 py-1 rounded text-xs transition-all ${
                  second === type
                    ? 'bg-cyan-500 text-white'
                    : 'bg-dark-700 text-dark-400 hover:bg-dark-600'
                }`}
              >
                {transformLabels[type]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Composition formula */}
      <div className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 mb-4 text-center">
        <span className="text-dark-400">Composition: </span>
        <span className="font-mono text-cyan-400">G</span>
        <span className="text-dark-400"> ∘ </span>
        <span className="font-mono text-primary-400">F</span>
        <span className="text-dark-400"> = </span>
        <span className="font-mono text-emerald-400">{getComposedType()}</span>
      </div>

      {/* Visualization */}
      <div className="flex justify-center mb-4">
        <svg width="400" height="300" className="bg-dark-800 rounded-xl">
          {/* Grid */}
          {Array.from({ length: 11 }, (_, i) => i - 5).map((i) => (
            <g key={i}>
              <line
                x1={200 + i * 35}
                y1={0}
                x2={200 + i * 35}
                y2={300}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={0}
                y1={150 - i * 35}
                x2={400}
                y2={150 - i * 35}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Original (blue) */}
          {renderPolygon(original, 'rgba(59, 130, 246, 0.2)', '#3b82f6', marker)}

          {/* After first (orange, lighter) */}
          {renderPolygon(afterFirst, 'rgba(251, 146, 60, 0.2)', '#fb923c', markerFirst)}

          {/* After second (green) */}
          {renderPolygon(afterSecond, 'rgba(16, 185, 129, 0.3)', '#10b981', markerSecond)}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-500/30 border-2 border-blue-500" />
          <span className="text-dark-400">Original</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-orange-400/30 border-2 border-orange-400" />
          <span className="text-dark-400">After F</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-emerald-500/30 border-2 border-emerald-500" />
          <span className="text-dark-400">After G∘F</span>
        </div>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-300 space-y-1">
          <p><span className="text-primary-400">F:</span> {transformLabels[first]}</p>
          <p><span className="text-cyan-400">G:</span> {transformLabels[second]}</p>
          <p><span className="text-emerald-400">G∘F:</span> Apply F first, then G</p>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        The dot in each shape shows orientation (direct vs. opposite isometries).
      </p>
    </div>
  );
}
