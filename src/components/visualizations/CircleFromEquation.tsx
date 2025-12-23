import { useState } from 'react';

export function CircleFromEquation() {
  const [h, setH] = useState('3');
  const [k, setK] = useState('-2');
  const [rSquared, setRSquared] = useState('16');

  const hVal = parseFloat(h) || 0;
  const kVal = parseFloat(k) || 0;
  const r2Val = parseFloat(rSquared) || 1;
  const rVal = Math.sqrt(Math.max(0, r2Val));

  const scale = 20;
  const width = 320;
  const height = 280;
  const centerX = width / 2;
  const centerY = height / 2;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale,
  });

  const circleSvg = toSvg(hVal, kVal);
  const radiusPx = rVal * scale;

  // Check if circle fits in view
  const isVisible = radiusPx > 0 && radiusPx < 200;

  // Format the equation parts
  const formatX = hVal === 0 ? 'x' : hVal > 0 ? `(x - ${hVal})` : `(x + ${-hVal})`;
  const formatY = kVal === 0 ? 'y' : kVal > 0 ? `(y - ${kVal})` : `(y + ${-kVal})`;

  const presets = [
    { label: 'Unit Circle', h: 0, k: 0, r2: 1 },
    { label: 'Origin r=5', h: 0, k: 0, r2: 25 },
    { label: 'Center (3,-2)', h: 3, k: -2, r2: 16 },
    { label: 'Center (-2, 3)', h: -2, k: 3, r2: 9 },
  ];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Circle from Equation
      </h3>

      {/* Equation input */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-lg">
        <span className="text-dark-300">(x -</span>
        <input
          type="number"
          value={h}
          onChange={(e) => setH(e.target.value)}
          className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-dark-200 text-center"
        />
        <span className="text-dark-300">)² + (y -</span>
        <input
          type="number"
          value={k}
          onChange={(e) => setK(e.target.value)}
          className="w-14 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-dark-200 text-center"
        />
        <span className="text-dark-300">)² =</span>
        <input
          type="number"
          value={rSquared}
          onChange={(e) => setRSquared(e.target.value)}
          className="w-16 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-dark-200 text-center"
        />
      </div>

      {/* Presets */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => {
              setH(preset.h.toString());
              setK(preset.k.toString());
              setRSquared(preset.r2.toString());
            }}
            className="px-2 py-1 rounded text-xs bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-4">
        <svg width={width} height={height} className="bg-dark-800 rounded-xl">
          {/* Grid */}
          {Array.from({ length: 15 }, (_, i) => i - 7).map((n) => (
            <g key={n}>
              <line
                x1={centerX + n * scale}
                y1={0}
                x2={centerX + n * scale}
                y2={height}
                stroke={n === 0 ? '#6b7280' : '#374151'}
                strokeWidth={n === 0 ? 2 : 0.5}
              />
              <line
                x1={0}
                y1={centerY - n * scale}
                x2={width}
                y2={centerY - n * scale}
                stroke={n === 0 ? '#6b7280' : '#374151'}
                strokeWidth={n === 0 ? 2 : 0.5}
              />
            </g>
          ))}

          {/* Circle */}
          {isVisible && (
            <>
              <circle
                cx={circleSvg.x}
                cy={circleSvg.y}
                r={radiusPx}
                fill="rgba(59, 130, 246, 0.15)"
                stroke="#3b82f6"
                strokeWidth={2}
              />
              {/* Center */}
              <circle
                cx={circleSvg.x}
                cy={circleSvg.y}
                r={5}
                fill="#8b5cf6"
              />
            </>
          )}

          {/* Labels */}
          {isVisible && (
            <>
              <text
                x={circleSvg.x + 8}
                y={circleSvg.y - 8}
                fill="#8b5cf6"
                fontSize={10}
              >
                ({hVal}, {kVal})
              </text>
            </>
          )}

          {!isVisible && r2Val > 0 && (
            <text
              x={width / 2}
              y={height / 2}
              fill="#f59e0b"
              fontSize={12}
              textAnchor="middle"
            >
              Circle too large to display
            </text>
          )}

          {r2Val <= 0 && (
            <text
              x={width / 2}
              y={height / 2}
              fill="#ef4444"
              fontSize={12}
              textAnchor="middle"
            >
              r² must be positive
            </text>
          )}
        </svg>
      </div>

      {/* Info display */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2 rounded-lg bg-dark-800/50 border border-dark-700">
          <div className="text-dark-500 text-xs">Center</div>
          <div className="text-purple-400 font-mono">({hVal}, {kVal})</div>
        </div>
        <div className="p-2 rounded-lg bg-dark-800/50 border border-dark-700">
          <div className="text-dark-500 text-xs">Radius</div>
          <div className="text-primary-400 font-mono">
            {Number.isInteger(rVal) ? rVal : `√${r2Val}`}
          </div>
        </div>
        <div className="p-2 rounded-lg bg-dark-800/50 border border-dark-700">
          <div className="text-dark-500 text-xs">r²</div>
          <div className="text-amber-400 font-mono">{r2Val}</div>
        </div>
      </div>

      {/* Formatted equation */}
      <div className="mt-3 p-2 rounded-lg bg-primary-500/10 border border-primary-500/30 text-center">
        <span className="text-primary-400 font-mono">
          {formatX}² + {formatY}² = {r2Val}
        </span>
      </div>
    </div>
  );
}
