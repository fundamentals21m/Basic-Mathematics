import { useState } from 'react';

export function CentroidDemo() {
  const [pointA, setPointA] = useState({ x: 0, y: 0 });
  const [pointB, setPointB] = useState({ x: 4, y: 0 });
  const [pointC, setPointC] = useState({ x: 2, y: 4 });
  const [showMedians, setShowMedians] = useState(true);

  const centroid = {
    x: (pointA.x + pointB.x + pointC.x) / 3,
    y: (pointA.y + pointB.y + pointC.y) / 3,
  };

  // Midpoints of each side
  const midAB = { x: (pointA.x + pointB.x) / 2, y: (pointA.y + pointB.y) / 2 };
  const midBC = { x: (pointB.x + pointC.x) / 2, y: (pointB.y + pointC.y) / 2 };
  const midCA = { x: (pointC.x + pointA.x) / 2, y: (pointC.y + pointA.y) / 2 };

  const width = 340;
  const height = 340;
  const centerX = width / 2;
  const centerY = height / 2;
  const gridScale = 30;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * gridScale,
    y: centerY - y * gridScale,
  });

  const aSvg = toSvg(pointA.x, pointA.y);
  const bSvg = toSvg(pointB.x, pointB.y);
  const cSvg = toSvg(pointC.x, pointC.y);
  const gSvg = toSvg(centroid.x, centroid.y);
  const midABSvg = toSvg(midAB.x, midAB.y);
  const midBCSvg = toSvg(midBC.x, midBC.y);
  const midCASvg = toSvg(midCA.x, midCA.y);

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Centroid of a Triangle
      </h3>

      {/* Point inputs */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <div className="text-xs text-blue-400 mb-1">A</div>
          <div className="flex items-center gap-1">
            <input
              type="number"
              value={pointA.x}
              onChange={(e) => setPointA({ ...pointA, x: Number(e.target.value) })}
              className="w-10 px-1 py-0.5 bg-dark-700 border border-dark-600 rounded text-blue-300 text-xs"
              min={-4}
              max={4}
            />
            <span className="text-dark-500">,</span>
            <input
              type="number"
              value={pointA.y}
              onChange={(e) => setPointA({ ...pointA, y: Number(e.target.value) })}
              className="w-10 px-1 py-0.5 bg-dark-700 border border-dark-600 rounded text-blue-300 text-xs"
              min={-4}
              max={4}
            />
          </div>
        </div>
        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
          <div className="text-xs text-amber-400 mb-1">B</div>
          <div className="flex items-center gap-1">
            <input
              type="number"
              value={pointB.x}
              onChange={(e) => setPointB({ ...pointB, x: Number(e.target.value) })}
              className="w-10 px-1 py-0.5 bg-dark-700 border border-dark-600 rounded text-amber-300 text-xs"
              min={-4}
              max={4}
            />
            <span className="text-dark-500">,</span>
            <input
              type="number"
              value={pointB.y}
              onChange={(e) => setPointB({ ...pointB, y: Number(e.target.value) })}
              className="w-10 px-1 py-0.5 bg-dark-700 border border-dark-600 rounded text-amber-300 text-xs"
              min={-4}
              max={4}
            />
          </div>
        </div>
        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
          <div className="text-xs text-purple-400 mb-1">C</div>
          <div className="flex items-center gap-1">
            <input
              type="number"
              value={pointC.x}
              onChange={(e) => setPointC({ ...pointC, x: Number(e.target.value) })}
              className="w-10 px-1 py-0.5 bg-dark-700 border border-dark-600 rounded text-purple-300 text-xs"
              min={-4}
              max={4}
            />
            <span className="text-dark-500">,</span>
            <input
              type="number"
              value={pointC.y}
              onChange={(e) => setPointC({ ...pointC, y: Number(e.target.value) })}
              className="w-10 px-1 py-0.5 bg-dark-700 border border-dark-600 rounded text-purple-300 text-xs"
              min={-4}
              max={4}
            />
          </div>
        </div>
      </div>

      {/* Toggle medians */}
      <div className="flex justify-center mb-4">
        <label className="flex items-center gap-2 text-sm text-dark-300">
          <input
            type="checkbox"
            checked={showMedians}
            onChange={(e) => setShowMedians(e.target.checked)}
            className="rounded"
          />
          Show medians
        </label>
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

          {/* Triangle fill */}
          <polygon
            points={`${aSvg.x},${aSvg.y} ${bSvg.x},${bSvg.y} ${cSvg.x},${cSvg.y}`}
            fill="rgba(99, 102, 241, 0.15)"
            stroke="#6366f1"
            strokeWidth={2}
          />

          {/* Medians */}
          {showMedians && (
            <>
              {/* Median from A to midpoint of BC */}
              <line
                x1={aSvg.x}
                y1={aSvg.y}
                x2={midBCSvg.x}
                y2={midBCSvg.y}
                stroke="#10b981"
                strokeWidth={1.5}
                strokeDasharray="4,3"
              />
              {/* Median from B to midpoint of CA */}
              <line
                x1={bSvg.x}
                y1={bSvg.y}
                x2={midCASvg.x}
                y2={midCASvg.y}
                stroke="#10b981"
                strokeWidth={1.5}
                strokeDasharray="4,3"
              />
              {/* Median from C to midpoint of AB */}
              <line
                x1={cSvg.x}
                y1={cSvg.y}
                x2={midABSvg.x}
                y2={midABSvg.y}
                stroke="#10b981"
                strokeWidth={1.5}
                strokeDasharray="4,3"
              />

              {/* Midpoints */}
              <circle cx={midABSvg.x} cy={midABSvg.y} r={4} fill="#6b7280" />
              <circle cx={midBCSvg.x} cy={midBCSvg.y} r={4} fill="#6b7280" />
              <circle cx={midCASvg.x} cy={midCASvg.y} r={4} fill="#6b7280" />
            </>
          )}

          {/* Vertex A */}
          <circle cx={aSvg.x} cy={aSvg.y} r={7} fill="#3b82f6" />
          <text x={aSvg.x - 15} y={aSvg.y + 18} fill="#3b82f6" fontSize={12} fontWeight="bold">
            A
          </text>

          {/* Vertex B */}
          <circle cx={bSvg.x} cy={bSvg.y} r={7} fill="#f59e0b" />
          <text x={bSvg.x + 10} y={bSvg.y + 18} fill="#f59e0b" fontSize={12} fontWeight="bold">
            B
          </text>

          {/* Vertex C */}
          <circle cx={cSvg.x} cy={cSvg.y} r={7} fill="#a855f7" />
          <text x={cSvg.x + 10} y={cSvg.y - 8} fill="#a855f7" fontSize={12} fontWeight="bold">
            C
          </text>

          {/* Centroid G */}
          <circle cx={gSvg.x} cy={gSvg.y} r={8} fill="#10b981" />
          <text x={gSvg.x + 10} y={gSvg.y - 8} fill="#10b981" fontSize={12} fontWeight="bold">
            G
          </text>
        </svg>
      </div>

      {/* Result */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
        <div className="text-sm text-emerald-400 mb-2 text-center">Centroid Formula</div>
        <div className="font-mono text-emerald-300 text-center text-sm">
          G = ⅓(A + B + C)
        </div>
        <div className="font-mono text-emerald-300 text-center text-sm mt-1">
          = ⅓(({pointA.x}, {pointA.y}) + ({pointB.x}, {pointB.y}) + ({pointC.x}, {pointC.y}))
        </div>
        <div className="font-mono text-emerald-300 text-center mt-1">
          = ({centroid.x.toFixed(2)}, {centroid.y.toFixed(2)})
        </div>
      </div>

      <p className="text-dark-500 text-xs mt-3 text-center">
        The centroid G lies on all three medians (dashed lines), dividing each in ratio 2:1.
      </p>
    </div>
  );
}
