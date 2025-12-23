import { useState } from 'react';

export function SquaresOnSidesDemo() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);

  const c = Math.sqrt(a * a + b * b);
  const scale = 20;
  const offsetX = 120;
  const offsetY = 180;

  // Triangle vertices
  const A = { x: offsetX, y: offsetY };
  const B = { x: offsetX + a * scale, y: offsetY };
  const C = { x: offsetX, y: offsetY - b * scale };

  // Square on side a (bottom)
  const sqA = [
    { x: A.x, y: A.y },
    { x: B.x, y: B.y },
    { x: B.x, y: B.y + a * scale },
    { x: A.x, y: A.y + a * scale },
  ];

  // Square on side b (left)
  const sqB = [
    { x: A.x, y: A.y },
    { x: C.x, y: C.y },
    { x: C.x - b * scale, y: C.y },
    { x: A.x - b * scale, y: A.y },
  ];

  // Square on side c (hypotenuse) - rotated
  const angle = Math.atan2(b, a);
  const sqC = [
    { x: B.x, y: B.y },
    { x: C.x, y: C.y },
    { x: C.x + c * scale * Math.sin(angle), y: C.y - c * scale * Math.cos(angle) },
    { x: B.x + c * scale * Math.sin(angle), y: B.y - c * scale * Math.cos(angle) },
  ];

  const toPoints = (pts: { x: number; y: number }[]) =>
    pts.map(p => `${p.x},${p.y}`).join(' ');

  const areaA = a * a;
  const areaB = b * b;
  const areaC = c * c;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Squares on the Sides
      </h3>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-dark-500 mb-1">Leg a</label>
          <input
            type="range"
            min="2"
            max="5"
            step="0.5"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-primary-500"
          />
          <div className="text-center font-mono text-primary-400">{a}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1">Leg b</label>
          <input
            type="range"
            min="2"
            max="5"
            step="0.5"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-cyan-400">{b}</div>
        </div>
      </div>

      {/* Visualization */}
      <div className="flex justify-center mb-4">
        <svg width="380" height="280" className="bg-dark-800 rounded-xl">
          {/* Square on a (bottom) */}
          <polygon
            points={toPoints(sqA)}
            fill="rgba(59, 130, 246, 0.3)"
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <text
            x={(sqA[0].x + sqA[2].x) / 2}
            y={(sqA[0].y + sqA[2].y) / 2}
            fill="#3b82f6"
            fontSize={14}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            a² = {areaA}
          </text>

          {/* Square on b (left) */}
          <polygon
            points={toPoints(sqB)}
            fill="rgba(6, 182, 212, 0.3)"
            stroke="#06b6d4"
            strokeWidth={2}
          />
          <text
            x={(sqB[0].x + sqB[2].x) / 2}
            y={(sqB[0].y + sqB[2].y) / 2}
            fill="#06b6d4"
            fontSize={14}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            b² = {areaB}
          </text>

          {/* Square on c (hypotenuse) */}
          <polygon
            points={toPoints(sqC)}
            fill="rgba(16, 185, 129, 0.3)"
            stroke="#10b981"
            strokeWidth={2}
          />
          <text
            x={(sqC[0].x + sqC[2].x) / 2}
            y={(sqC[0].y + sqC[2].y) / 2}
            fill="#10b981"
            fontSize={14}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            c² = {areaC.toFixed(1)}
          </text>

          {/* Triangle */}
          <polygon
            points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
            fill="rgba(251, 191, 36, 0.4)"
            stroke="#fbbf24"
            strokeWidth={2}
          />

          {/* Right angle marker */}
          <path
            d={`M ${A.x + 10} ${A.y} L ${A.x + 10} ${A.y - 10} L ${A.x} ${A.y - 10}`}
            fill="none"
            stroke="#fbbf24"
            strokeWidth={1.5}
          />

          {/* Side labels */}
          <text
            x={(A.x + B.x) / 2}
            y={A.y - 8}
            fill="#3b82f6"
            fontSize={14}
            fontWeight="bold"
            textAnchor="middle"
          >
            a = {a}
          </text>
          <text
            x={A.x + 12}
            y={(A.y + C.y) / 2}
            fill="#06b6d4"
            fontSize={14}
            fontWeight="bold"
          >
            b = {b}
          </text>
          <text
            x={(B.x + C.x) / 2 + 15}
            y={(B.y + C.y) / 2}
            fill="#10b981"
            fontSize={14}
            fontWeight="bold"
          >
            c = {c.toFixed(2)}
          </text>
        </svg>
      </div>

      {/* Area comparison */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="text-center text-dark-300 font-mono">
          <span className="text-primary-400">a²</span> + <span className="text-cyan-400">b²</span> = <span className="text-emerald-400">c²</span>
        </div>
        <div className="text-center text-dark-300 font-mono mt-2">
          <span className="text-primary-400">{areaA}</span> + <span className="text-cyan-400">{areaB}</span> = <span className="text-emerald-400">{areaC.toFixed(1)}</span>
        </div>
        <div className="text-center text-dark-400 mt-2">
          {areaA} + {areaB} = {areaA + areaB} ✓
        </div>
      </div>

      <p className="text-sm text-dark-500 text-center">
        The square on the hypotenuse equals the sum of squares on the legs
      </p>
    </div>
  );
}
