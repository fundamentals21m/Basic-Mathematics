import { useState } from 'react';

type ReflectionType = 'x-axis' | 'y-axis' | 'origin';

export function ReflectionExplorer() {
  const [point, setPoint] = useState({ x: 3, y: 2 });
  const [reflectionType, setReflectionType] = useState<ReflectionType>('x-axis');

  const getReflectedPoint = () => {
    switch (reflectionType) {
      case 'x-axis':
        return { x: point.x, y: -point.y };
      case 'y-axis':
        return { x: -point.x, y: point.y };
      case 'origin':
        return { x: -point.x, y: -point.y };
    }
  };

  const reflected = getReflectedPoint();

  const width = 320;
  const height = 320;
  const centerX = width / 2;
  const centerY = height / 2;
  const gridScale = 20;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * gridScale,
    y: centerY - y * gridScale,
  });

  const pointSvg = toSvg(point.x, point.y);
  const reflectedSvg = toSvg(reflected.x, reflected.y);

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left - centerX) / gridScale);
    const y = Math.round(-(e.clientY - rect.top - centerY) / gridScale);
    setPoint({ x: Math.max(-6, Math.min(6, x)), y: Math.max(-6, Math.min(6, y)) });
  };

  const reflectionButtons: { type: ReflectionType; label: string; formula: string }[] = [
    { type: 'x-axis', label: 'x-axis', formula: '(x, y) → (x, −y)' },
    { type: 'y-axis', label: 'y-axis', formula: '(x, y) → (−x, y)' },
    { type: 'origin', label: 'Origin', formula: '(x, y) → (−x, −y)' },
  ];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Reflection Explorer
      </h3>

      {/* Reflection type selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {reflectionButtons.map(({ type, label, formula }) => (
          <button
            key={type}
            onClick={() => setReflectionType(type)}
            className={`px-3 py-2 rounded-lg text-sm transition-all ${
              reflectionType === type
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            <div className="font-medium">{label}</div>
            <div className="text-xs opacity-75 font-mono">{formula}</div>
          </button>
        ))}
      </div>

      {/* Coordinate plane */}
      <div className="flex justify-center mb-4">
        <svg
          width={width}
          height={height}
          className="bg-dark-800 rounded-xl cursor-crosshair"
          onClick={handleClick}
        >
          {/* Grid */}
          {Array.from({ length: 17 }, (_, i) => i - 8).map((n) => (
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

          {/* Highlight axis of reflection */}
          {reflectionType === 'x-axis' && (
            <line
              x1={0}
              y1={centerY}
              x2={width}
              y2={centerY}
              stroke="#f59e0b"
              strokeWidth={3}
              opacity={0.6}
            />
          )}
          {reflectionType === 'y-axis' && (
            <line
              x1={centerX}
              y1={0}
              x2={centerX}
              y2={height}
              stroke="#f59e0b"
              strokeWidth={3}
              opacity={0.6}
            />
          )}
          {reflectionType === 'origin' && (
            <circle
              cx={centerX}
              cy={centerY}
              r={8}
              fill="none"
              stroke="#f59e0b"
              strokeWidth={3}
              opacity={0.6}
            />
          )}

          {/* Dashed line connecting point and reflection */}
          <line
            x1={pointSvg.x}
            y1={pointSvg.y}
            x2={reflectedSvg.x}
            y2={reflectedSvg.y}
            stroke="#6b7280"
            strokeWidth={1}
            strokeDasharray="4,4"
          />

          {/* Origin */}
          <circle cx={centerX} cy={centerY} r={4} fill="#6b7280" />

          {/* Original point */}
          <circle
            cx={pointSvg.x}
            cy={pointSvg.y}
            r={8}
            fill="#3b82f6"
            className="cursor-move"
          />
          <text
            x={pointSvg.x + 12}
            y={pointSvg.y - 8}
            fill="#3b82f6"
            fontSize={12}
            fontWeight="bold"
          >
            P
          </text>

          {/* Reflected point */}
          <circle
            cx={reflectedSvg.x}
            cy={reflectedSvg.y}
            r={8}
            fill="#10b981"
          />
          <text
            x={reflectedSvg.x + 12}
            y={reflectedSvg.y - 8}
            fill="#10b981"
            fontSize={12}
            fontWeight="bold"
          >
            P'
          </text>
        </svg>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <div className="text-xs text-blue-400 mb-1">Original Point P</div>
          <div className="font-mono text-blue-300">
            ({point.x}, {point.y})
          </div>
        </div>
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <div className="text-xs text-emerald-400 mb-1">Reflected Point P'</div>
          <div className="font-mono text-emerald-300">
            ({reflected.x}, {reflected.y})
          </div>
        </div>
      </div>

      <p className="text-dark-500 text-xs mt-3 text-center">
        Click on the grid to move point P. Select a reflection type above.
      </p>
    </div>
  );
}
