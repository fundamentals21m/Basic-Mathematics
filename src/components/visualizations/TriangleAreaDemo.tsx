import { useState } from 'react';

export function TriangleAreaDemo() {
  const [base, setBase] = useState(6);
  const [height, setHeight] = useState(4);
  const [showDouble, setShowDouble] = useState(false);

  const scale = 25;
  const offsetX = 80;
  const offsetY = 140;

  // Triangle vertices (with apex shifted for visual interest)
  const A = { x: offsetX, y: offsetY };
  const B = { x: offsetX + base * scale, y: offsetY };
  const C = { x: offsetX + base * scale * 0.3, y: offsetY - height * scale };

  // Doubled triangle (rotated 180°, forming parallelogram)
  const D = { x: offsetX + base * scale + base * scale * 0.3, y: offsetY - height * scale };

  const area = 0.5 * base * height;
  const parallelogramArea = base * height;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Triangle Area: ½ × base × height
      </h3>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-dark-500 mb-1">Base</label>
          <input
            type="range"
            min="3"
            max="8"
            step="0.5"
            value={base}
            onChange={(e) => setBase(Number(e.target.value))}
            className="w-full accent-primary-500"
          />
          <div className="text-center font-mono text-primary-400">{base}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1">Height</label>
          <input
            type="range"
            min="2"
            max="5"
            step="0.5"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-cyan-400">{height}</div>
        </div>
      </div>

      {/* Show parallelogram toggle */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowDouble(!showDouble)}
          className={`px-4 py-2 rounded-lg transition-all ${
            showDouble
              ? 'bg-emerald-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          {showDouble ? 'Show Triangle Only' : 'Double to Parallelogram'}
        </button>
      </div>

      {/* Visualization */}
      <div className="flex justify-center mb-4">
        <svg width="380" height="180" className="bg-dark-800 rounded-xl">
          {/* Grid */}
          {Array.from({ length: 14 }, (_, i) => (
            <line
              key={`v${i}`}
              x1={30 + i * scale}
              y1={20}
              x2={30 + i * scale}
              y2={160}
              stroke="#374151"
              strokeWidth={1}
            />
          ))}
          {Array.from({ length: 6 }, (_, i) => (
            <line
              key={`h${i}`}
              x1={20}
              y1={offsetY - i * scale}
              x2={360}
              y2={offsetY - i * scale}
              stroke="#374151"
              strokeWidth={1}
            />
          ))}

          {/* Original triangle */}
          <polygon
            points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
            fill="rgba(59, 130, 246, 0.4)"
            stroke="#3b82f6"
            strokeWidth={2}
          />

          {/* Second triangle (for parallelogram) */}
          {showDouble && (
            <polygon
              points={`${B.x},${B.y} ${D.x},${D.y} ${C.x},${C.y}`}
              fill="rgba(16, 185, 129, 0.4)"
              stroke="#10b981"
              strokeWidth={2}
            />
          )}

          {/* Height indicator */}
          <line
            x1={C.x}
            y1={C.y}
            x2={C.x}
            y2={offsetY}
            stroke="#06b6d4"
            strokeWidth={2}
            strokeDasharray="4,2"
          />
          <circle cx={C.x} cy={offsetY} r={3} fill="#06b6d4" />
          <text x={C.x - 20} y={(C.y + offsetY) / 2} fill="#06b6d4" fontSize={12}>h</text>

          {/* Base indicator */}
          <line
            x1={A.x}
            y1={offsetY + 15}
            x2={B.x}
            y2={offsetY + 15}
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <text x={(A.x + B.x) / 2} y={offsetY + 28} fill="#3b82f6" fontSize={12} textAnchor="middle">b</text>

          {/* Vertices */}
          <circle cx={A.x} cy={A.y} r={4} fill="#3b82f6" />
          <circle cx={B.x} cy={B.y} r={4} fill="#3b82f6" />
          <circle cx={C.x} cy={C.y} r={4} fill="#3b82f6" />

          {/* Labels */}
          <text x={A.x - 10} y={A.y + 15} fill="#9ca3af" fontSize={11}>A</text>
          <text x={B.x + 5} y={B.y + 15} fill="#9ca3af" fontSize={11}>B</text>
          <text x={C.x - 10} y={C.y - 5} fill="#9ca3af" fontSize={11}>C</text>
        </svg>
      </div>

      {/* Area display */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 text-center">
          <div className="text-dark-400 text-sm mb-1">Triangle Area</div>
          <div className="font-mono text-dark-300 text-sm">
            ½ × <span className="text-primary-400">{base}</span> × <span className="text-cyan-400">{height}</span>
          </div>
          <div className="text-2xl font-bold text-primary-400 mt-1">{area}</div>
        </div>
        <div className={`p-4 rounded-xl border text-center transition-all ${
          showDouble
            ? 'bg-emerald-500/10 border-emerald-500/30'
            : 'bg-dark-800/50 border-dark-700'
        }`}>
          <div className="text-dark-400 text-sm mb-1">Parallelogram Area</div>
          <div className="font-mono text-dark-300 text-sm">
            <span className="text-primary-400">{base}</span> × <span className="text-cyan-400">{height}</span>
          </div>
          <div className={`text-2xl font-bold mt-1 ${showDouble ? 'text-emerald-400' : 'text-dark-500'}`}>
            {parallelogramArea}
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-500 text-center">
        Triangle = ½ × Parallelogram. Click "Double" to see why!
      </p>
    </div>
  );
}
