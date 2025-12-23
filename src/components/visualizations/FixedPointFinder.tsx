import { useState } from 'react';

type TransformType = 'identity' | 'translation' | 'rotation' | 'reflect-x' | 'reflect-y' | 'reflect-yx' | 'glide';

interface Point {
  x: number;
  y: number;
}

export function FixedPointFinder() {
  const [transformType, setTransformType] = useState<TransformType>('rotation');
  const [testPoint, setTestPoint] = useState<Point>({ x: 2, y: 1 });

  const applyTransform = (p: Point): Point => {
    switch (transformType) {
      case 'identity':
        return { ...p };
      case 'translation':
        return { x: p.x + 2, y: p.y + 1 };
      case 'rotation':
        // 90° rotation about origin
        return { x: -p.y, y: p.x };
      case 'reflect-x':
        return { x: p.x, y: -p.y };
      case 'reflect-y':
        return { x: -p.x, y: p.y };
      case 'reflect-yx':
        // Reflect across y = x
        return { x: p.y, y: p.x };
      case 'glide':
        // Reflect across x-axis, then translate by (2, 0)
        return { x: p.x + 2, y: -p.y };
      default:
        return p;
    }
  };

  const transformedPoint = applyTransform(testPoint);
  const isFixed = Math.abs(transformedPoint.x - testPoint.x) < 0.01 &&
                  Math.abs(transformedPoint.y - testPoint.y) < 0.01;

  // Fixed point information for each transform
  const getFixedPointInfo = (): { type: string; description: string; points: 'none' | 'one' | 'line' | 'all' } => {
    switch (transformType) {
      case 'identity':
        return { type: 'Identity', description: 'Every point is fixed', points: 'all' };
      case 'translation':
        return { type: 'Translation', description: 'No fixed points (unless (0,0) translation)', points: 'none' };
      case 'rotation':
        return { type: 'Rotation 90°', description: 'Only the center (origin) is fixed', points: 'one' };
      case 'reflect-x':
        return { type: 'Reflect across x-axis', description: 'All points on the x-axis are fixed', points: 'line' };
      case 'reflect-y':
        return { type: 'Reflect across y-axis', description: 'All points on the y-axis are fixed', points: 'line' };
      case 'reflect-yx':
        return { type: 'Reflect across y = x', description: 'All points on y = x are fixed', points: 'line' };
      case 'glide':
        return { type: 'Glide reflection', description: 'No fixed points', points: 'none' };
      default:
        return { type: '', description: '', points: 'none' };
    }
  };

  const info = getFixedPointInfo();

  // SVG coordinate transforms
  const toSvg = (p: Point) => ({
    x: 200 + p.x * 40,
    y: 150 - p.y * 40,
  });

  const testSvg = toSvg(testPoint);
  const transformedSvg = toSvg(transformedPoint);

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const svgX = e.clientX - rect.left;
    const svgY = e.clientY - rect.top;
    const x = Math.round((svgX - 200) / 40 * 2) / 2;
    const y = Math.round((150 - svgY) / 40 * 2) / 2;
    setTestPoint({ x: Math.max(-4, Math.min(4, x)), y: Math.max(-3, Math.min(3, y)) });
  };

  const transformLabels: Record<TransformType, string> = {
    'identity': 'Identity',
    'translation': 'Translate (2,1)',
    'rotation': 'Rotate 90°',
    'reflect-x': 'Reflect x-axis',
    'reflect-y': 'Reflect y-axis',
    'reflect-yx': 'Reflect y=x',
    'glide': 'Glide reflection',
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Fixed Point Finder
      </h3>

      {/* Transform selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {(Object.keys(transformLabels) as TransformType[]).map((type) => (
          <button
            key={type}
            onClick={() => setTransformType(type)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              transformType === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {transformLabels[type]}
          </button>
        ))}
      </div>

      {/* Visualization */}
      <div className="flex justify-center mb-4">
        <svg
          width="400"
          height="300"
          className="bg-dark-800 rounded-xl cursor-crosshair"
          onClick={handleSvgClick}
        >
          {/* Grid */}
          {Array.from({ length: 9 }, (_, i) => i - 4).map((i) => (
            <g key={i}>
              <line
                x1={200 + i * 40}
                y1={0}
                x2={200 + i * 40}
                y2={300}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
              <line
                x1={0}
                y1={150 - i * 40}
                x2={400}
                y2={150 - i * 40}
                stroke={i === 0 ? '#4b5563' : '#374151'}
                strokeWidth={i === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Fixed point set visualization */}
          {transformType === 'reflect-x' && (
            <line x1={0} y1={150} x2={400} y2={150} stroke="#10b981" strokeWidth={3} />
          )}
          {transformType === 'reflect-y' && (
            <line x1={200} y1={0} x2={200} y2={300} stroke="#10b981" strokeWidth={3} />
          )}
          {transformType === 'reflect-yx' && (
            <line x1={40} y1={260} x2={360} y2={-60} stroke="#10b981" strokeWidth={3} />
          )}
          {transformType === 'rotation' && (
            <circle cx={200} cy={150} r={8} fill="none" stroke="#10b981" strokeWidth={3} />
          )}

          {/* Arrow from test point to transformed point */}
          {!isFixed && (
            <line
              x1={testSvg.x}
              y1={testSvg.y}
              x2={transformedSvg.x}
              y2={transformedSvg.y}
              stroke="#f59e0b"
              strokeWidth={2}
              strokeDasharray="5,3"
              markerEnd="url(#arrow)"
            />
          )}

          {/* Test point */}
          <circle
            cx={testSvg.x}
            cy={testSvg.y}
            r={8}
            fill={isFixed ? '#10b981' : '#3b82f6'}
            stroke="white"
            strokeWidth={2}
          />

          {/* Transformed point (if different) */}
          {!isFixed && (
            <circle
              cx={transformedSvg.x}
              cy={transformedSvg.y}
              r={8}
              fill="#ef4444"
              stroke="white"
              strokeWidth={2}
            />
          )}

          {/* Labels */}
          <text x={testSvg.x + 12} y={testSvg.y - 8} fill="#6b7280" fontSize={11}>
            P({testPoint.x}, {testPoint.y})
          </text>
          {!isFixed && (
            <text x={transformedSvg.x + 12} y={transformedSvg.y - 8} fill="#6b7280" fontSize={11}>
              F(P)
            </text>
          )}

          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Status */}
      <div className={`p-4 rounded-xl border mb-4 ${
        isFixed
          ? 'bg-emerald-500/10 border-emerald-500/30'
          : 'bg-dark-800/50 border-dark-700'
      }`}>
        <div className="text-center">
          <div className="mb-2">
            <span className="font-mono text-primary-400">F({testPoint.x}, {testPoint.y})</span>
            <span className="text-dark-400 mx-2">=</span>
            <span className="font-mono text-cyan-400">({transformedPoint.x.toFixed(1)}, {transformedPoint.y.toFixed(1)})</span>
          </div>
          <div className={isFixed ? 'text-emerald-400 font-semibold' : 'text-dark-400'}>
            {isFixed ? '✓ This is a fixed point!' : 'Not a fixed point (P ≠ F(P))'}
          </div>
        </div>
      </div>

      {/* Fixed point info */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-center mb-2">
          <span className="text-dark-400">Fixed points of </span>
          <span className="text-primary-400 font-semibold">{info.type}</span>
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className={`px-3 py-1 rounded-full text-sm ${
            info.points === 'all' ? 'bg-emerald-500/20 text-emerald-400' :
            info.points === 'line' ? 'bg-cyan-500/20 text-cyan-400' :
            info.points === 'one' ? 'bg-amber-500/20 text-amber-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {info.points === 'all' ? 'All points' :
             info.points === 'line' ? 'A line' :
             info.points === 'one' ? 'One point' :
             'No fixed points'}
          </span>
        </div>
        <p className="text-dark-300 text-sm text-center">{info.description}</p>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Click on the grid to test different points. Green indicates fixed points.
      </p>
    </div>
  );
}
