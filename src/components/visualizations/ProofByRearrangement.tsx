import { useState } from 'react';

export function ProofByRearrangement() {
  const [arrangement, setArrangement] = useState<1 | 2>(1);

  const a = 3;
  const b = 4;
  const scale = 25;
  const size = (a + b) * scale;

  // Arrangement 1: Four triangles around c² square
  const triangles1 = [
    // Top-left triangle
    { points: `0,${b * scale} ${a * scale},${b * scale} 0,0`, fill: 'rgba(59, 130, 246, 0.5)' },
    // Top-right triangle
    { points: `${a * scale},0 ${size},0 ${size},${b * scale}`, fill: 'rgba(6, 182, 212, 0.5)' },
    // Bottom-right triangle
    { points: `${size},${b * scale} ${size},${size} ${a * scale},${size}`, fill: 'rgba(251, 191, 36, 0.5)' },
    // Bottom-left triangle
    { points: `0,${size} 0,${b * scale} ${a * scale},${size}`, fill: 'rgba(16, 185, 129, 0.5)' },
  ];

  // Arrangement 2: Four triangles leaving a² and b² squares
  const triangles2 = [
    // Top-left triangle (vertical orientation)
    { points: `0,0 ${a * scale},0 0,${b * scale}`, fill: 'rgba(59, 130, 246, 0.5)' },
    // Top-right (bottom of a² square) triangle
    { points: `${a * scale},0 ${size},0 ${size},${b * scale}`, fill: 'rgba(6, 182, 212, 0.5)' },
    // Bottom-right triangle
    { points: `${a * scale},${b * scale} ${size},${b * scale} ${size},${size}`, fill: 'rgba(251, 191, 36, 0.5)' },
    // Bottom-left triangle
    { points: `0,${b * scale} ${a * scale},${size} 0,${size}`, fill: 'rgba(16, 185, 129, 0.5)' },
  ];

  const triangles = arrangement === 1 ? triangles1 : triangles2;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Proof by Two Arrangements
      </h3>

      {/* Toggle buttons */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setArrangement(1)}
          className={`px-4 py-2 rounded-lg transition-all ${
            arrangement === 1
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Arrangement 1 (c²)
        </button>
        <button
          onClick={() => setArrangement(2)}
          className={`px-4 py-2 rounded-lg transition-all ${
            arrangement === 2
              ? 'bg-emerald-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Arrangement 2 (a² + b²)
        </button>
      </div>

      {/* Visualization */}
      <div className="flex justify-center mb-4">
        <svg width={size + 40} height={size + 40} className="bg-dark-800 rounded-xl">
          <g transform="translate(20, 20)">
            {/* Outer square */}
            <rect
              x={0}
              y={0}
              width={size}
              height={size}
              fill="none"
              stroke="#6b7280"
              strokeWidth={2}
            />

            {/* Triangles */}
            {triangles.map((tri, i) => (
              <polygon
                key={i}
                points={tri.points}
                fill={tri.fill}
                stroke="#374151"
                strokeWidth={1}
                className="transition-all duration-500"
              />
            ))}

            {/* Inner shapes based on arrangement */}
            {arrangement === 1 ? (
              // c² square (tilted)
              <polygon
                points={`0,${b * scale} ${a * scale},0 ${size},${b * scale} ${a * scale},${size}`}
                fill="rgba(139, 92, 246, 0.3)"
                stroke="#8b5cf6"
                strokeWidth={2}
                className="transition-all duration-500"
              />
            ) : (
              // a² and b² squares
              <>
                <rect
                  x={0}
                  y={0}
                  width={a * scale}
                  height={a * scale}
                  fill="rgba(59, 130, 246, 0.2)"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  className="transition-all duration-500"
                />
                <rect
                  x={a * scale}
                  y={a * scale}
                  width={b * scale}
                  height={b * scale}
                  fill="rgba(6, 182, 212, 0.2)"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  className="transition-all duration-500"
                />
              </>
            )}

            {/* Labels */}
            {arrangement === 1 ? (
              <text
                x={size / 2}
                y={size / 2}
                fill="#8b5cf6"
                fontSize={18}
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                c² = 25
              </text>
            ) : (
              <>
                <text
                  x={(a * scale) / 2}
                  y={(a * scale) / 2}
                  fill="#3b82f6"
                  fontSize={14}
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  a² = 9
                </text>
                <text
                  x={a * scale + (b * scale) / 2}
                  y={a * scale + (b * scale) / 2}
                  fill="#06b6d4"
                  fontSize={14}
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  b² = 16
                </text>
              </>
            )}

            {/* Outer square label */}
            <text
              x={size / 2}
              y={size + 15}
              fill="#9ca3af"
              fontSize={12}
              textAnchor="middle"
            >
              Outer square: (a + b)² = {(a + b) * (a + b)}
            </text>
          </g>
        </svg>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        {arrangement === 1 ? (
          <div className="text-dark-300 text-center">
            <p className="font-semibold text-primary-400 mb-2">Arrangement 1</p>
            <p>Four triangles + <span className="text-purple-400 font-bold">c² square</span> = outer square</p>
            <p className="mt-1 font-mono text-sm">
              4 × ½ab + c² = (a+b)²
            </p>
            <p className="font-mono text-sm">
              4 × ½(3)(4) + 25 = 49
            </p>
            <p className="font-mono text-sm">
              24 + 25 = 49 ✓
            </p>
          </div>
        ) : (
          <div className="text-dark-300 text-center">
            <p className="font-semibold text-emerald-400 mb-2">Arrangement 2</p>
            <p>Four triangles + <span className="text-primary-400 font-bold">a²</span> + <span className="text-cyan-400 font-bold">b²</span> = outer square</p>
            <p className="mt-1 font-mono text-sm">
              4 × ½ab + a² + b² = (a+b)²
            </p>
            <p className="font-mono text-sm">
              24 + 9 + 16 = 49 ✓
            </p>
          </div>
        )}
      </div>

      {/* Conclusion */}
      <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center">
        <p className="text-dark-300">
          Same triangles + different remaining areas = same total
        </p>
        <p className="text-purple-400 font-bold mt-1">
          Therefore: c² = a² + b²
        </p>
      </div>
    </div>
  );
}
