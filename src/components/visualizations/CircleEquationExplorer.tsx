import { useState } from 'react';

export function CircleEquationExplorer() {
  const [center, setCenter] = useState({ x: 2, y: 1 });
  const [radius, setRadius] = useState(3);
  const [dragging, setDragging] = useState(false);

  const scale = 25;
  const width = 360;
  const height = 320;
  const centerX = width / 2;
  const centerY = height / 2;
  const gridRange = 6;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale,
  });

  const toMath = (svgX: number, svgY: number) => ({
    x: Math.round((svgX - centerX) / scale * 2) / 2,
    y: Math.round((centerY - svgY) / scale * 2) / 2,
  });

  const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!dragging) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const mathCoords = toMath(e.clientX - rect.left, e.clientY - rect.top);
    mathCoords.x = Math.max(-gridRange + 1, Math.min(gridRange - 1, mathCoords.x));
    mathCoords.y = Math.max(-gridRange + 1, Math.min(gridRange - 1, mathCoords.y));
    setCenter(mathCoords);
  };

  const circleSvg = toSvg(center.x, center.y);
  const radiusPx = radius * scale;

  // Format equation
  const formatH = center.x === 0 ? 'x' : center.x > 0 ? `(x - ${center.x})` : `(x + ${-center.x})`;
  const formatK = center.y === 0 ? 'y' : center.y > 0 ? `(y - ${center.y})` : `(y + ${-center.y})`;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Circle Equation Explorer
      </h3>

      {/* Radius slider */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="text-dark-400 text-sm">Radius:</span>
        <input
          type="range"
          min="1"
          max="5"
          step="0.5"
          value={radius}
          onChange={(e) => setRadius(parseFloat(e.target.value))}
          className="w-32"
        />
        <span className="text-primary-400 font-mono w-8">{radius}</span>
      </div>

      <div className="flex justify-center mb-4">
        <svg
          width={width}
          height={height}
          className="bg-dark-800 rounded-xl"
          onMouseMove={handleMove}
          onMouseUp={() => setDragging(false)}
          onMouseLeave={() => setDragging(false)}
        >
          {/* Grid */}
          {Array.from({ length: gridRange * 2 + 1 }, (_, i) => i - gridRange).map((n) => (
            <g key={n}>
              <line
                x1={centerX + n * scale}
                y1={10}
                x2={centerX + n * scale}
                y2={height - 10}
                stroke={n === 0 ? '#6b7280' : '#374151'}
                strokeWidth={n === 0 ? 2 : 0.5}
              />
              <line
                x1={10}
                y1={centerY - n * scale}
                x2={width - 10}
                y2={centerY - n * scale}
                stroke={n === 0 ? '#6b7280' : '#374151'}
                strokeWidth={n === 0 ? 2 : 0.5}
              />
            </g>
          ))}

          {/* Axis labels */}
          {Array.from({ length: gridRange * 2 + 1 }, (_, i) => i - gridRange).map(
            (n) =>
              n !== 0 &&
              n % 2 === 0 && (
                <g key={`label-${n}`}>
                  <text
                    x={centerX + n * scale}
                    y={centerY + 14}
                    fill="#6b7280"
                    fontSize={9}
                    textAnchor="middle"
                  >
                    {n}
                  </text>
                  <text
                    x={centerX - 10}
                    y={centerY - n * scale + 3}
                    fill="#6b7280"
                    fontSize={9}
                    textAnchor="middle"
                  >
                    {n}
                  </text>
                </g>
              )
          )}

          {/* Circle */}
          <circle
            cx={circleSvg.x}
            cy={circleSvg.y}
            r={radiusPx}
            fill="rgba(59, 130, 246, 0.1)"
            stroke="#3b82f6"
            strokeWidth={2}
          />

          {/* Radius line */}
          <line
            x1={circleSvg.x}
            y1={circleSvg.y}
            x2={circleSvg.x + radiusPx}
            y2={circleSvg.y}
            stroke="#f59e0b"
            strokeWidth={2}
            strokeDasharray="4,2"
          />
          <text
            x={circleSvg.x + radiusPx / 2}
            y={circleSvg.y - 8}
            fill="#f59e0b"
            fontSize={11}
            textAnchor="middle"
          >
            r = {radius}
          </text>

          {/* Center point */}
          <circle
            cx={circleSvg.x}
            cy={circleSvg.y}
            r={dragging ? 10 : 8}
            fill="#8b5cf6"
            stroke="white"
            strokeWidth={2}
            style={{ cursor: 'grab' }}
            onMouseDown={() => setDragging(true)}
          />
          <text
            x={circleSvg.x + 12}
            y={circleSvg.y - 10}
            fill="#8b5cf6"
            fontSize={11}
            fontWeight="bold"
          >
            ({center.x}, {center.y})
          </text>
        </svg>
      </div>

      {/* Equation display */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 text-center">
        <div className="text-dark-400 text-sm mb-2">Circle Equation</div>
        <div className="text-xl font-mono text-primary-400">
          {formatH}² + {formatK}² = {radius * radius}
        </div>
        <div className="text-dark-500 text-sm mt-2">
          Center: ({center.x}, {center.y}) | Radius: {radius} | r² = {radius * radius}
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Drag the center point and adjust the radius slider
      </p>
    </div>
  );
}
