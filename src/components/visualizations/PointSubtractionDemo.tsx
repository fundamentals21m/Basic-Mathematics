import { useState } from 'react';

export function PointSubtractionDemo() {
  const [pointA, setPointA] = useState({ x: 2, y: 1 });
  const [pointB, setPointB] = useState({ x: 5, y: 4 });

  const diff = { x: pointB.x - pointA.x, y: pointB.y - pointA.y };

  const width = 320;
  const height = 320;
  const centerX = width / 2;
  const centerY = height / 2;
  const gridScale = 20;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * gridScale,
    y: centerY - y * gridScale,
  });

  const originSvg = toSvg(0, 0);
  const aSvg = toSvg(pointA.x, pointA.y);
  const bSvg = toSvg(pointB.x, pointB.y);
  const diffSvg = toSvg(diff.x, diff.y);

  const isInBounds = (p: { x: number; y: number }) =>
    Math.abs(p.x) <= 7 && Math.abs(p.y) <= 7;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Point Subtraction: Displacement Vector
      </h3>

      {/* Point inputs */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <div className="text-xs text-blue-400 mb-2">Point A (start)</div>
          <div className="flex items-center gap-2">
            <span className="text-dark-400 text-sm">x:</span>
            <input
              type="number"
              value={pointA.x}
              onChange={(e) => setPointA({ ...pointA, x: Number(e.target.value) })}
              className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-blue-300 text-sm"
              min={-6}
              max={6}
            />
            <span className="text-dark-400 text-sm">y:</span>
            <input
              type="number"
              value={pointA.y}
              onChange={(e) => setPointA({ ...pointA, y: Number(e.target.value) })}
              className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-blue-300 text-sm"
              min={-6}
              max={6}
            />
          </div>
        </div>
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <div className="text-xs text-emerald-400 mb-2">Point B (end)</div>
          <div className="flex items-center gap-2">
            <span className="text-dark-400 text-sm">x:</span>
            <input
              type="number"
              value={pointB.x}
              onChange={(e) => setPointB({ ...pointB, x: Number(e.target.value) })}
              className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-emerald-300 text-sm"
              min={-6}
              max={6}
            />
            <span className="text-dark-400 text-sm">y:</span>
            <input
              type="number"
              value={pointB.y}
              onChange={(e) => setPointB({ ...pointB, y: Number(e.target.value) })}
              className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-emerald-300 text-sm"
              min={-6}
              max={6}
            />
          </div>
        </div>
      </div>

      {/* Coordinate plane */}
      <div className="flex justify-center mb-4">
        <svg width={width} height={height} className="bg-dark-800 rounded-xl">
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

          {/* Arrow markers */}
          <defs>
            <marker id="arrowPurple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#a855f7" />
            </marker>
            <marker id="arrowGray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
            </marker>
          </defs>

          {/* Displacement vector from A to B (the main visual) */}
          <line
            x1={aSvg.x}
            y1={aSvg.y}
            x2={bSvg.x}
            y2={bSvg.y}
            stroke="#a855f7"
            strokeWidth={3}
            markerEnd="url(#arrowPurple)"
          />

          {/* Same vector from origin (to show B - A) */}
          {isInBounds(diff) && (
            <line
              x1={originSvg.x}
              y1={originSvg.y}
              x2={diffSvg.x}
              y2={diffSvg.y}
              stroke="#6b7280"
              strokeWidth={2}
              strokeDasharray="4,4"
              markerEnd="url(#arrowGray)"
            />
          )}

          {/* Origin */}
          <circle cx={originSvg.x} cy={originSvg.y} r={4} fill="#6b7280" />
          <text x={originSvg.x - 15} y={originSvg.y + 15} fill="#6b7280" fontSize={10}>
            O
          </text>

          {/* Point A */}
          <circle cx={aSvg.x} cy={aSvg.y} r={7} fill="#3b82f6" />
          <text x={aSvg.x - 15} y={aSvg.y - 10} fill="#3b82f6" fontSize={12} fontWeight="bold">
            A
          </text>

          {/* Point B */}
          <circle cx={bSvg.x} cy={bSvg.y} r={7} fill="#10b981" />
          <text x={bSvg.x + 10} y={bSvg.y - 8} fill="#10b981" fontSize={12} fontWeight="bold">
            B
          </text>

          {/* B - A as a point */}
          {isInBounds(diff) && (
            <>
              <circle cx={diffSvg.x} cy={diffSvg.y} r={5} fill="#a855f7" />
              <text x={diffSvg.x + 10} y={diffSvg.y - 8} fill="#a855f7" fontSize={11} fontWeight="bold">
                B-A
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Result */}
      <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
        <div className="text-sm text-purple-400 mb-2 text-center">Displacement from A to B</div>
        <div className="font-mono text-purple-300 text-center">
          B - A = ({pointB.x}, {pointB.y}) - ({pointA.x}, {pointA.y}) = ({diff.x}, {diff.y})
        </div>
        <div className="text-xs text-dark-400 mt-2 text-center">
          Move {diff.x >= 0 ? `${diff.x} right` : `${-diff.x} left`} and{' '}
          {diff.y >= 0 ? `${diff.y} up` : `${-diff.y} down`} to go from A to B.
        </div>
      </div>

      <div className="mt-3 p-3 rounded-lg bg-dark-800/50 border border-dark-700">
        <p className="text-dark-400 text-xs text-center">
          <strong>Key insight:</strong> A + (B - A) = B — adding the displacement to A gives B.
        </p>
      </div>
    </div>
  );
}
