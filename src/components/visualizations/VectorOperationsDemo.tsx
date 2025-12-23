import { useState } from 'react';

type Operation = 'add' | 'subtract' | 'scale' | 'combine';

export function VectorOperationsDemo() {
  const [pointP, setPointP] = useState({ x: 2, y: 3 });
  const [pointQ, setPointQ] = useState({ x: 3, y: 1 });
  const [scalar, setScalar] = useState(2);
  const [operation, setOperation] = useState<Operation>('add');

  const computeResult = () => {
    switch (operation) {
      case 'add':
        return { x: pointP.x + pointQ.x, y: pointP.y + pointQ.y };
      case 'subtract':
        return { x: pointP.x - pointQ.x, y: pointP.y - pointQ.y };
      case 'scale':
        return { x: scalar * pointP.x, y: scalar * pointP.y };
      case 'combine':
        // c(P + Q)
        return { x: scalar * (pointP.x + pointQ.x), y: scalar * (pointP.y + pointQ.y) };
    }
  };

  const result = computeResult();

  const getFormula = () => {
    switch (operation) {
      case 'add':
        return `P + Q = (${pointP.x} + ${pointQ.x}, ${pointP.y} + ${pointQ.y}) = (${result.x}, ${result.y})`;
      case 'subtract':
        return `P - Q = (${pointP.x} - ${pointQ.x}, ${pointP.y} - ${pointQ.y}) = (${result.x}, ${result.y})`;
      case 'scale':
        return `${scalar}P = ${scalar}(${pointP.x}, ${pointP.y}) = (${result.x}, ${result.y})`;
      case 'combine':
        return `${scalar}(P + Q) = ${scalar}(${pointP.x + pointQ.x}, ${pointP.y + pointQ.y}) = (${result.x}, ${result.y})`;
    }
  };

  const width = 320;
  const height = 320;
  const centerX = width / 2;
  const centerY = height / 2;
  const gridScale = 18;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * gridScale,
    y: centerY - y * gridScale,
  });

  const isInBounds = (p: { x: number; y: number }) =>
    Math.abs(p.x) <= 8 && Math.abs(p.y) <= 8;

  const originSvg = toSvg(0, 0);
  const pSvg = toSvg(pointP.x, pointP.y);
  const qSvg = toSvg(pointQ.x, pointQ.y);
  const resultSvg = toSvg(result.x, result.y);

  const operations: { key: Operation; label: string }[] = [
    { key: 'add', label: 'P + Q' },
    { key: 'subtract', label: 'P - Q' },
    { key: 'scale', label: 'cP' },
    { key: 'combine', label: 'c(P + Q)' },
  ];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Vector Operations Demo
      </h3>

      {/* Operation selector */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {operations.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setOperation(key)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              operation === key
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <div className="text-xs text-blue-400 mb-1">P</div>
          <div className="flex items-center gap-1">
            <input
              type="number"
              value={pointP.x}
              onChange={(e) => setPointP({ ...pointP, x: Number(e.target.value) })}
              className="w-12 px-1 py-0.5 bg-dark-700 border border-dark-600 rounded text-blue-300 text-sm"
              min={-6}
              max={6}
            />
            <span className="text-dark-500">,</span>
            <input
              type="number"
              value={pointP.y}
              onChange={(e) => setPointP({ ...pointP, y: Number(e.target.value) })}
              className="w-12 px-1 py-0.5 bg-dark-700 border border-dark-600 rounded text-blue-300 text-sm"
              min={-6}
              max={6}
            />
          </div>
        </div>
        {operation !== 'scale' && (
          <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
            <div className="text-xs text-amber-400 mb-1">Q</div>
            <div className="flex items-center gap-1">
              <input
                type="number"
                value={pointQ.x}
                onChange={(e) => setPointQ({ ...pointQ, x: Number(e.target.value) })}
                className="w-12 px-1 py-0.5 bg-dark-700 border border-dark-600 rounded text-amber-300 text-sm"
                min={-6}
                max={6}
              />
              <span className="text-dark-500">,</span>
              <input
                type="number"
                value={pointQ.y}
                onChange={(e) => setPointQ({ ...pointQ, y: Number(e.target.value) })}
                className="w-12 px-1 py-0.5 bg-dark-700 border border-dark-600 rounded text-amber-300 text-sm"
                min={-6}
                max={6}
              />
            </div>
          </div>
        )}
        {(operation === 'scale' || operation === 'combine') && (
          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
            <div className="text-xs text-purple-400 mb-1">Scalar c</div>
            <input
              type="number"
              value={scalar}
              onChange={(e) => setScalar(Number(e.target.value))}
              className="w-16 px-2 py-0.5 bg-dark-700 border border-dark-600 rounded text-purple-300 text-sm"
              step={0.5}
              min={-3}
              max={3}
            />
          </div>
        )}
      </div>

      {/* Coordinate plane */}
      <div className="flex justify-center mb-4">
        <svg width={width} height={height} className="bg-dark-800 rounded-xl">
          {/* Grid */}
          {Array.from({ length: 19 }, (_, i) => i - 9).map((n) => (
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
            <marker id="arrowBlue2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#3b82f6" />
            </marker>
            <marker id="arrowAmber2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#f59e0b" />
            </marker>
            <marker id="arrowGreen2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
            </marker>
          </defs>

          {/* Vector P */}
          <line
            x1={originSvg.x}
            y1={originSvg.y}
            x2={pSvg.x}
            y2={pSvg.y}
            stroke="#3b82f6"
            strokeWidth={2}
            markerEnd="url(#arrowBlue2)"
          />

          {/* Vector Q (if applicable) */}
          {operation !== 'scale' && (
            <line
              x1={originSvg.x}
              y1={originSvg.y}
              x2={qSvg.x}
              y2={qSvg.y}
              stroke="#f59e0b"
              strokeWidth={2}
              markerEnd="url(#arrowAmber2)"
            />
          )}

          {/* Result vector */}
          {isInBounds(result) && (
            <line
              x1={originSvg.x}
              y1={originSvg.y}
              x2={resultSvg.x}
              y2={resultSvg.y}
              stroke="#10b981"
              strokeWidth={3}
              markerEnd="url(#arrowGreen2)"
            />
          )}

          {/* Origin */}
          <circle cx={originSvg.x} cy={originSvg.y} r={4} fill="#6b7280" />

          {/* Point P */}
          <circle cx={pSvg.x} cy={pSvg.y} r={6} fill="#3b82f6" />
          <text x={pSvg.x + 8} y={pSvg.y - 8} fill="#3b82f6" fontSize={11} fontWeight="bold">
            P
          </text>

          {/* Point Q (if applicable) */}
          {operation !== 'scale' && (
            <>
              <circle cx={qSvg.x} cy={qSvg.y} r={6} fill="#f59e0b" />
              <text x={qSvg.x + 8} y={qSvg.y - 8} fill="#f59e0b" fontSize={11} fontWeight="bold">
                Q
              </text>
            </>
          )}

          {/* Result point */}
          {isInBounds(result) && (
            <>
              <circle cx={resultSvg.x} cy={resultSvg.y} r={7} fill="#10b981" />
              <text x={resultSvg.x + 8} y={resultSvg.y - 8} fill="#10b981" fontSize={11} fontWeight="bold">
                Result
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Formula */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
        <div className="font-mono text-emerald-300">{getFormula()}</div>
      </div>
    </div>
  );
}
