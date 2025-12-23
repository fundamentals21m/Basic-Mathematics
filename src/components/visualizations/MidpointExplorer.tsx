import { useState } from 'react';

export function MidpointExplorer() {
  const [pointP, setPointP] = useState({ x: 1, y: 2 });
  const [pointQ, setPointQ] = useState({ x: 5, y: 6 });

  const midpoint = {
    x: (pointP.x + pointQ.x) / 2,
    y: (pointP.y + pointQ.y) / 2,
  };

  const width = 320;
  const height = 320;
  const centerX = width / 2;
  const centerY = height / 2;
  const gridScale = 25;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * gridScale,
    y: centerY - y * gridScale,
  });

  const pSvg = toSvg(pointP.x, pointP.y);
  const qSvg = toSvg(pointQ.x, pointQ.y);
  const midSvg = toSvg(midpoint.x, midpoint.y);

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Midpoint Explorer
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
              min={-5}
              max={5}
            />
            <span className="text-dark-400 text-sm">y:</span>
            <input
              type="number"
              value={pointP.y}
              onChange={(e) => setPointP({ ...pointP, y: Number(e.target.value) })}
              className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-blue-300 text-sm"
              min={-5}
              max={5}
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
              min={-5}
              max={5}
            />
            <span className="text-dark-400 text-sm">y:</span>
            <input
              type="number"
              value={pointQ.y}
              onChange={(e) => setPointQ({ ...pointQ, y: Number(e.target.value) })}
              className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-amber-300 text-sm"
              min={-5}
              max={5}
            />
          </div>
        </div>
      </div>

      {/* Coordinate plane */}
      <div className="flex justify-center mb-4">
        <svg width={width} height={height} className="bg-dark-800 rounded-xl">
          {/* Grid */}
          {Array.from({ length: 13 }, (_, i) => i - 6).map((n) => (
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

          {/* Line segment PQ */}
          <line
            x1={pSvg.x}
            y1={pSvg.y}
            x2={qSvg.x}
            y2={qSvg.y}
            stroke="#6b7280"
            strokeWidth={2}
          />

          {/* Segment P to M */}
          <line
            x1={pSvg.x}
            y1={pSvg.y}
            x2={midSvg.x}
            y2={midSvg.y}
            stroke="#10b981"
            strokeWidth={3}
          />

          {/* Segment M to Q */}
          <line
            x1={midSvg.x}
            y1={midSvg.y}
            x2={qSvg.x}
            y2={qSvg.y}
            stroke="#10b981"
            strokeWidth={3}
          />

          {/* Point P */}
          <circle cx={pSvg.x} cy={pSvg.y} r={7} fill="#3b82f6" />
          <text x={pSvg.x - 18} y={pSvg.y - 10} fill="#3b82f6" fontSize={12} fontWeight="bold">
            P
          </text>

          {/* Point Q */}
          <circle cx={qSvg.x} cy={qSvg.y} r={7} fill="#f59e0b" />
          <text x={qSvg.x + 10} y={qSvg.y - 8} fill="#f59e0b" fontSize={12} fontWeight="bold">
            Q
          </text>

          {/* Midpoint M */}
          <circle cx={midSvg.x} cy={midSvg.y} r={8} fill="#10b981" />
          <text x={midSvg.x + 10} y={midSvg.y - 10} fill="#10b981" fontSize={12} fontWeight="bold">
            M
          </text>
        </svg>
      </div>

      {/* Result */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
        <div className="text-sm text-emerald-400 mb-2 text-center">Midpoint Formula</div>
        <div className="font-mono text-emerald-300 text-center">
          M = ½(P + Q) = ½({pointP.x} + {pointQ.x}, {pointP.y} + {pointQ.y})
        </div>
        <div className="font-mono text-emerald-300 text-center mt-1">
          = ({midpoint.x}, {midpoint.y})
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="p-2 rounded-lg bg-dark-800/50 text-center">
          <div className="text-dark-400">Distance P to M</div>
          <div className="font-mono text-dark-300">
            {Math.sqrt(Math.pow(midpoint.x - pointP.x, 2) + Math.pow(midpoint.y - pointP.y, 2)).toFixed(2)}
          </div>
        </div>
        <div className="p-2 rounded-lg bg-dark-800/50 text-center">
          <div className="text-dark-400">Distance M to Q</div>
          <div className="font-mono text-dark-300">
            {Math.sqrt(Math.pow(pointQ.x - midpoint.x, 2) + Math.pow(pointQ.y - midpoint.y, 2)).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
