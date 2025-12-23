import { useState } from 'react';

export function CoordinatePlaneExplorer() {
  const [point, setPoint] = useState({ x: 3, y: 2 });
  const [showGrid, setShowGrid] = useState(true);

  const scale = 25;
  const width = 320;
  const height = 320;
  const centerX = width / 2;
  const centerY = height / 2;
  const gridRange = 6;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale,
  });

  const toMath = (svgX: number, svgY: number) => ({
    x: Math.round((svgX - centerX) / scale),
    y: Math.round((centerY - svgY) / scale),
  });

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const svgX = e.clientX - rect.left;
    const svgY = e.clientY - rect.top;
    const mathCoords = toMath(svgX, svgY);

    // Clamp to grid range
    mathCoords.x = Math.max(-gridRange, Math.min(gridRange, mathCoords.x));
    mathCoords.y = Math.max(-gridRange, Math.min(gridRange, mathCoords.y));

    setPoint(mathCoords);
  };

  const svgPoint = toSvg(point.x, point.y);

  const getQuadrant = (x: number, y: number) => {
    if (x === 0 || y === 0) return 'On axis';
    if (x > 0 && y > 0) return 'Quadrant I';
    if (x < 0 && y > 0) return 'Quadrant II';
    if (x < 0 && y < 0) return 'Quadrant III';
    return 'Quadrant IV';
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Coordinate Plane Explorer
      </h3>

      {/* Controls */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setShowGrid(!showGrid)}
          className={`px-3 py-1 rounded text-sm transition-all ${
            showGrid ? 'bg-primary-500 text-white' : 'bg-dark-700 text-dark-300'
          }`}
        >
          {showGrid ? 'Hide Grid' : 'Show Grid'}
        </button>
      </div>

      {/* Coordinate Plane */}
      <div className="flex justify-center mb-4">
        <svg
          width={width}
          height={height}
          className="bg-dark-800 rounded-xl cursor-crosshair"
          onClick={handleClick}
        >
          {/* Grid lines */}
          {showGrid &&
            Array.from({ length: gridRange * 2 + 1 }, (_, i) => i - gridRange).map(
              (n) => (
                <g key={n}>
                  {/* Vertical lines */}
                  <line
                    x1={centerX + n * scale}
                    y1={10}
                    x2={centerX + n * scale}
                    y2={height - 10}
                    stroke={n === 0 ? '#6b7280' : '#374151'}
                    strokeWidth={n === 0 ? 2 : 1}
                  />
                  {/* Horizontal lines */}
                  <line
                    x1={10}
                    y1={centerY - n * scale}
                    x2={width - 10}
                    y2={centerY - n * scale}
                    stroke={n === 0 ? '#6b7280' : '#374151'}
                    strokeWidth={n === 0 ? 2 : 1}
                  />
                </g>
              )
            )}

          {/* Axes (always visible) */}
          <line
            x1={10}
            y1={centerY}
            x2={width - 10}
            y2={centerY}
            stroke="#9ca3af"
            strokeWidth={2}
          />
          <line
            x1={centerX}
            y1={10}
            x2={centerX}
            y2={height - 10}
            stroke="#9ca3af"
            strokeWidth={2}
          />

          {/* Axis arrows */}
          <polygon
            points={`${width - 15},${centerY - 5} ${width - 5},${centerY} ${width - 15},${centerY + 5}`}
            fill="#9ca3af"
          />
          <polygon
            points={`${centerX - 5},15 ${centerX},5 ${centerX + 5},15`}
            fill="#9ca3af"
          />

          {/* Axis labels */}
          <text x={width - 15} y={centerY + 20} fill="#9ca3af" fontSize={14} fontWeight="bold">
            x
          </text>
          <text x={centerX + 10} y={20} fill="#9ca3af" fontSize={14} fontWeight="bold">
            y
          </text>

          {/* Tick marks and numbers */}
          {Array.from({ length: gridRange * 2 + 1 }, (_, i) => i - gridRange).map(
            (n) =>
              n !== 0 && (
                <g key={n}>
                  <text
                    x={centerX + n * scale}
                    y={centerY + 18}
                    fill="#6b7280"
                    fontSize={10}
                    textAnchor="middle"
                  >
                    {n}
                  </text>
                  <text
                    x={centerX - 12}
                    y={centerY - n * scale + 4}
                    fill="#6b7280"
                    fontSize={10}
                    textAnchor="middle"
                  >
                    {n}
                  </text>
                </g>
              )
          )}

          {/* Origin label */}
          <text x={centerX - 12} y={centerY + 15} fill="#6b7280" fontSize={10}>
            O
          </text>

          {/* Dashed lines from point to axes */}
          <line
            x1={svgPoint.x}
            y1={svgPoint.y}
            x2={svgPoint.x}
            y2={centerY}
            stroke="#3b82f6"
            strokeWidth={1}
            strokeDasharray="4,2"
          />
          <line
            x1={svgPoint.x}
            y1={svgPoint.y}
            x2={centerX}
            y2={svgPoint.y}
            stroke="#3b82f6"
            strokeWidth={1}
            strokeDasharray="4,2"
          />

          {/* Point */}
          <circle
            cx={svgPoint.x}
            cy={svgPoint.y}
            r={8}
            fill="#3b82f6"
            stroke="white"
            strokeWidth={2}
          />

          {/* Point label */}
          <text
            x={svgPoint.x + 12}
            y={svgPoint.y - 12}
            fill="#3b82f6"
            fontSize={14}
            fontWeight="bold"
          >
            ({point.x}, {point.y})
          </text>

          {/* Quadrant labels */}
          <text x={width - 50} y={40} fill="#4b5563" fontSize={11}>I</text>
          <text x={30} y={40} fill="#4b5563" fontSize={11}>II</text>
          <text x={30} y={height - 30} fill="#4b5563" fontSize={11}>III</text>
          <text x={width - 50} y={height - 30} fill="#4b5563" fontSize={11}>IV</text>
        </svg>
      </div>

      {/* Point info */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 text-center">
          <div className="text-xs text-dark-500 mb-1">x-coordinate</div>
          <div className="font-mono text-xl text-primary-400">{point.x}</div>
        </div>
        <div className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 text-center">
          <div className="text-xs text-dark-500 mb-1">y-coordinate</div>
          <div className="font-mono text-xl text-cyan-400">{point.y}</div>
        </div>
        <div className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 text-center">
          <div className="text-xs text-dark-500 mb-1">Location</div>
          <div className="font-mono text-sm text-emerald-400">{getQuadrant(point.x, point.y)}</div>
        </div>
      </div>

      <p className="text-sm text-dark-500 text-center">
        Click anywhere on the plane to place a point
      </p>
    </div>
  );
}
