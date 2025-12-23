import { useState } from 'react';

export function DilationExplorer() {
  const [point, setPoint] = useState({ x: 3, y: 2 });
  const [scale, setScale] = useState(2);

  const scaledPoint = { x: point.x * scale, y: point.y * scale };

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
  const scaledSvg = toSvg(scaledPoint.x, scaledPoint.y);

  const handleDrag = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left - centerX) / gridScale);
    const y = Math.round(-(e.clientY - rect.top - centerY) / gridScale);
    setPoint({ x: Math.max(-6, Math.min(6, x)), y: Math.max(-6, Math.min(6, y)) });
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Dilation Explorer
      </h3>

      {/* Scale slider */}
      <div className="mb-4">
        <label className="block text-sm text-dark-400 mb-2">
          Scale factor: <span className="text-primary-400 font-mono">{scale}</span>
        </label>
        <input
          type="range"
          min={-3}
          max={3}
          step={0.5}
          value={scale}
          onChange={(e) => setScale(Number(e.target.value))}
          className="w-full accent-primary-500"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>-3</span>
          <span>0</span>
          <span>3</span>
        </div>
      </div>

      {/* Coordinate plane */}
      <div className="flex justify-center mb-4">
        <svg
          width={width}
          height={height}
          className="bg-dark-800 rounded-xl cursor-crosshair"
          onClick={handleDrag}
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

          {/* Ray from origin through point */}
          {scale !== 0 && (
            <line
              x1={centerX}
              y1={centerY}
              x2={centerX + point.x * gridScale * 8}
              y2={centerY - point.y * gridScale * 8}
              stroke="#4b5563"
              strokeWidth={1}
              strokeDasharray="4,4"
            />
          )}

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

          {/* Scaled point */}
          {Math.abs(scaledPoint.x) <= 8 && Math.abs(scaledPoint.y) <= 8 && (
            <>
              <circle
                cx={scaledSvg.x}
                cy={scaledSvg.y}
                r={8}
                fill="#10b981"
              />
              <text
                x={scaledSvg.x + 12}
                y={scaledSvg.y - 8}
                fill="#10b981"
                fontSize={12}
                fontWeight="bold"
              >
                {scale}P
              </text>
            </>
          )}
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
          <div className="text-xs text-emerald-400 mb-1">Scaled Point {scale}P</div>
          <div className="font-mono text-emerald-300">
            ({scaledPoint.x}, {scaledPoint.y})
          </div>
        </div>
      </div>

      <p className="text-dark-500 text-xs mt-3 text-center">
        Click on the grid to move point P. Adjust the scale factor with the slider.
      </p>
    </div>
  );
}
