import { useState } from 'react';

export function ShearingDemo() {
  const [shearAmount, setShearAmount] = useState(0);
  const [base] = useState(5);
  const [height] = useState(4);

  const scale = 30;
  const offsetX = 100;
  const offsetY = 130;

  // Calculate vertices based on shear
  const shearOffset = shearAmount * scale;

  const A = { x: offsetX, y: offsetY };
  const B = { x: offsetX + base * scale, y: offsetY };
  const C = { x: offsetX + base * scale + shearOffset, y: offsetY - height * scale };
  const D = { x: offsetX + shearOffset, y: offsetY - height * scale };

  const area = base * height;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Shearing Preserves Area
      </h3>

      {/* Shear control */}
      <div className="max-w-md mx-auto mb-4">
        <label className="block text-xs text-dark-500 mb-1 text-center">Shear Amount</label>
        <input
          type="range"
          min="-3"
          max="3"
          step="0.25"
          value={shearAmount}
          onChange={(e) => setShearAmount(Number(e.target.value))}
          className="w-full accent-primary-500"
        />
        <div className="flex justify-between text-xs text-dark-500">
          <span>Left</span>
          <span className="font-mono text-primary-400">{shearAmount}</span>
          <span>Right</span>
        </div>
      </div>

      {/* Visualization */}
      <div className="flex justify-center mb-4">
        <svg width="400" height="180" className="bg-dark-800 rounded-xl">
          {/* Grid */}
          {Array.from({ length: 13 }, (_, i) => (
            <line
              key={`v${i}`}
              x1={40 + i * scale}
              y1={20}
              x2={40 + i * scale}
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
              x2={380}
              y2={offsetY - i * scale}
              stroke="#374151"
              strokeWidth={1}
            />
          ))}

          {/* Base line (fixed) */}
          <line
            x1={A.x}
            y1={A.y}
            x2={B.x}
            y2={B.y}
            stroke="#10b981"
            strokeWidth={3}
          />

          {/* Parallelogram */}
          <polygon
            points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`}
            fill="rgba(59, 130, 246, 0.3)"
            stroke="#3b82f6"
            strokeWidth={2}
          />

          {/* Vertices */}
          <circle cx={A.x} cy={A.y} r={4} fill="#10b981" />
          <circle cx={B.x} cy={B.y} r={4} fill="#10b981" />
          <circle cx={C.x} cy={C.y} r={4} fill="#3b82f6" />
          <circle cx={D.x} cy={D.y} r={4} fill="#3b82f6" />

          {/* Height indicator */}
          <line
            x1={A.x - 20}
            y1={A.y}
            x2={A.x - 20}
            y2={A.y - height * scale}
            stroke="#06b6d4"
            strokeWidth={2}
            markerEnd="url(#heightArrow)"
            markerStart="url(#heightArrow)"
          />
          <text x={A.x - 35} y={A.y - height * scale / 2 + 4} fill="#06b6d4" fontSize={12}>h</text>

          {/* Base label */}
          <text x={(A.x + B.x) / 2} y={A.y + 18} fill="#10b981" fontSize={12} textAnchor="middle">base (fixed)</text>

          {/* Top edge label */}
          <text x={(C.x + D.x) / 2} y={D.y - 10} fill="#3b82f6" fontSize={11} textAnchor="middle">slides parallel</text>

          {/* Shear arrows */}
          {shearAmount !== 0 && (
            <>
              <line
                x1={offsetX + base * scale / 2}
                y1={offsetY - height * scale}
                x2={offsetX + base * scale / 2 + shearOffset}
                y2={offsetY - height * scale}
                stroke="#f59e0b"
                strokeWidth={2}
                markerEnd="url(#shearArrow)"
              />
            </>
          )}

          <defs>
            <marker id="heightArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <circle cx="3" cy="3" r="2" fill="#06b6d4" />
            </marker>
            <marker id="shearArrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0,0 8,3 0,6" fill="#f59e0b" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Properties */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
          <div className="text-xs text-dark-500 mb-1">Base</div>
          <div className="font-mono text-lg text-emerald-400">{base}</div>
          <div className="text-xs text-emerald-400">fixed</div>
        </div>
        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
          <div className="text-xs text-dark-500 mb-1">Height</div>
          <div className="font-mono text-lg text-cyan-400">{height}</div>
          <div className="text-xs text-cyan-400">fixed</div>
        </div>
        <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/30 text-center">
          <div className="text-xs text-dark-500 mb-1">Area</div>
          <div className="font-mono text-lg text-primary-400">{area}</div>
          <div className="text-xs text-primary-400">preserved!</div>
        </div>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h4 className="font-semibold text-dark-200 mb-2">Shear Transformation</h4>
        <ul className="text-sm text-dark-300 space-y-1">
          <li>• The base stays fixed in place</li>
          <li>• The top edge slides parallel to the base</li>
          <li>• The height (perpendicular distance) stays constant</li>
          <li>• Therefore, <span className="text-primary-400">Area = base × height</span> is unchanged</li>
        </ul>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Drag the slider to shear the parallelogram. The area stays constant!
      </p>
    </div>
  );
}
