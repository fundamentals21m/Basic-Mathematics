import { useState } from 'react';

export function PointAdditionExplorer() {
  const [pointP, setPointP] = useState({ x: 3, y: 2 });
  const [pointQ, setPointQ] = useState({ x: 2, y: 3 });

  const sum = { x: pointP.x + pointQ.x, y: pointP.y + pointQ.y };

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
  const pSvg = toSvg(pointP.x, pointP.y);
  const qSvg = toSvg(pointQ.x, pointQ.y);
  const sumSvg = toSvg(sum.x, sum.y);

  const isInBounds = (p: { x: number; y: number }) =>
    Math.abs(p.x) <= 7 && Math.abs(p.y) <= 7;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Point Addition Explorer
      </h3>

      {/* Point inputs */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <div className="text-xs text-blue-400 mb-2">Point P</div>
          <div className="flex items-center gap-2">
            <span className="text-dark-400 text-sm">x:</span>
            <input
              type="number"
              value={pointP.x}
              onChange={(e) => setPointP({ ...pointP, x: Number(e.target.value) })}
              className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-blue-300 text-sm"
              min={-6}
              max={6}
            />
            <span className="text-dark-400 text-sm">y:</span>
            <input
              type="number"
              value={pointP.y}
              onChange={(e) => setPointP({ ...pointP, y: Number(e.target.value) })}
              className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-blue-300 text-sm"
              min={-6}
              max={6}
            />
          </div>
        </div>
        <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
          <div className="text-xs text-amber-400 mb-2">Point Q</div>
          <div className="flex items-center gap-2">
            <span className="text-dark-400 text-sm">x:</span>
            <input
              type="number"
              value={pointQ.x}
              onChange={(e) => setPointQ({ ...pointQ, x: Number(e.target.value) })}
              className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-amber-300 text-sm"
              min={-6}
              max={6}
            />
            <span className="text-dark-400 text-sm">y:</span>
            <input
              type="number"
              value={pointQ.y}
              onChange={(e) => setPointQ({ ...pointQ, y: Number(e.target.value) })}
              className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-amber-300 text-sm"
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

          {/* Vector P from origin */}
          <line
            x1={originSvg.x}
            y1={originSvg.y}
            x2={pSvg.x}
            y2={pSvg.y}
            stroke="#3b82f6"
            strokeWidth={2}
            markerEnd="url(#arrowBlue)"
          />

          {/* Vector Q from origin (dashed, to show starting position) */}
          <line
            x1={originSvg.x}
            y1={originSvg.y}
            x2={qSvg.x}
            y2={qSvg.y}
            stroke="#f59e0b"
            strokeWidth={2}
            strokeDasharray="4,4"
            opacity={0.5}
          />

          {/* Vector Q translated to tip of P */}
          <line
            x1={pSvg.x}
            y1={pSvg.y}
            x2={sumSvg.x}
            y2={sumSvg.y}
            stroke="#f59e0b"
            strokeWidth={2}
            markerEnd="url(#arrowAmber)"
          />

          {/* Parallelogram outline */}
          {isInBounds(sum) && (
            <polygon
              points={`${originSvg.x},${originSvg.y} ${pSvg.x},${pSvg.y} ${sumSvg.x},${sumSvg.y} ${qSvg.x},${qSvg.y}`}
              fill="rgba(16, 185, 129, 0.1)"
              stroke="#10b981"
              strokeWidth={1}
              strokeDasharray="4,4"
            />
          )}

          {/* Arrow markers */}
          <defs>
            <marker id="arrowBlue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
            </marker>
            <marker id="arrowAmber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
            </marker>
          </defs>

          {/* Origin */}
          <circle cx={originSvg.x} cy={originSvg.y} r={4} fill="#6b7280" />

          {/* Point P */}
          <circle cx={pSvg.x} cy={pSvg.y} r={7} fill="#3b82f6" />
          <text x={pSvg.x + 10} y={pSvg.y - 8} fill="#3b82f6" fontSize={12} fontWeight="bold">
            P
          </text>

          {/* Point Q (at origin position) */}
          <circle cx={qSvg.x} cy={qSvg.y} r={5} fill="#f59e0b" opacity={0.5} />

          {/* Sum P + Q */}
          {isInBounds(sum) && (
            <>
              <circle cx={sumSvg.x} cy={sumSvg.y} r={7} fill="#10b981" />
              <text x={sumSvg.x + 10} y={sumSvg.y - 8} fill="#10b981" fontSize={12} fontWeight="bold">
                P+Q
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Result */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
        <div className="text-sm text-emerald-400 mb-1">Sum P + Q</div>
        <div className="font-mono text-emerald-300 text-lg">
          ({pointP.x}, {pointP.y}) + ({pointQ.x}, {pointQ.y}) = ({sum.x}, {sum.y})
        </div>
      </div>

      <p className="text-dark-500 text-xs mt-3 text-center">
        P + Q forms a parallelogram with the origin, P, and Q as three vertices.
      </p>
    </div>
  );
}
