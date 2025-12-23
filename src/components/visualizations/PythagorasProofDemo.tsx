import { useState } from 'react';

export function PythagorasProofDemo() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);

  const c = Math.sqrt(a * a + b * b);
  const scale = 22;
  const size = (a + b) * scale;
  const offsetX = 20;
  const offsetY = 20;

  // Four triangle positions in the outer square
  const getTrianglePoints = () => {
    // Triangle corners in the (a+b) x (a+b) square
    const tl = { x: 0, y: 0 }; // top-left
    const tr = { x: size, y: 0 }; // top-right
    const bl = { x: 0, y: size }; // bottom-left
    const br = { x: size, y: size }; // bottom-right

    // Points where hypotenuse meets the square edge
    const top = { x: a * scale, y: 0 };
    const right = { x: size, y: a * scale };
    const bottom = { x: b * scale, y: size };
    const left = { x: 0, y: b * scale };

    return [
      // Triangle 1: top-left corner
      `${tl.x},${left.y} ${top.x},${tl.y} ${tl.x},${tl.y}`,
      // Triangle 2: top-right corner
      `${top.x},${tr.y} ${tr.x},${tr.y} ${tr.x},${right.y}`,
      // Triangle 3: bottom-right corner
      `${br.x},${right.y} ${br.x},${br.y} ${bottom.x},${br.y}`,
      // Triangle 4: bottom-left corner
      `${bottom.x},${bl.y} ${bl.x},${bl.y} ${bl.x},${left.y}`,
    ];
  };

  const trianglePoints = getTrianglePoints();
  const colors = ['#3b82f6', '#06b6d4', '#fbbf24', '#10b981'];

  const steps = [
    {
      title: 'Start with the outer square',
      desc: `A square with side (a + b) = ${a} + ${b} = ${a + b}`,
      showSquare: true,
      showTriangles: false,
      showInner: false,
    },
    {
      title: 'Place four right triangles',
      desc: `Each triangle has legs a = ${a} and b = ${b}`,
      showSquare: true,
      showTriangles: true,
      showInner: false,
    },
    {
      title: 'The inner square appears',
      desc: `The remaining space is a square with side c = √(${a}² + ${b}²) = ${c.toFixed(2)}`,
      showSquare: true,
      showTriangles: true,
      showInner: true,
    },
    {
      title: 'Compute area: Method 1',
      desc: `Outer square = (a + b)² = ${(a + b) * (a + b)}`,
      showSquare: true,
      showTriangles: true,
      showInner: true,
    },
    {
      title: 'Compute area: Method 2',
      desc: `4 triangles + inner square = 4×½ab + c² = ${2 * a * b} + ${(c * c).toFixed(1)}`,
      showSquare: true,
      showTriangles: true,
      showInner: true,
    },
    {
      title: 'Set equal and simplify',
      desc: `a² + 2ab + b² = 2ab + c²  →  a² + b² = c²`,
      showSquare: true,
      showTriangles: true,
      showInner: true,
    },
  ];

  const currentStep = steps[step];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Step-by-Step Proof
      </h3>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-dark-500 mb-1">Leg a</label>
          <input
            type="range"
            min="2"
            max="4"
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
        <svg width={size + 40} height={size + 60} className="bg-dark-800 rounded-xl">
          <g transform={`translate(${offsetX}, ${offsetY})`}>
            {/* Outer square */}
            {currentStep.showSquare && (
              <rect
                x={0}
                y={0}
                width={size}
                height={size}
                fill="rgba(107, 114, 128, 0.1)"
                stroke="#6b7280"
                strokeWidth={2}
              />
            )}

            {/* Four triangles */}
            {currentStep.showTriangles &&
              trianglePoints.map((points, i) => (
                <polygon
                  key={i}
                  points={points}
                  fill={colors[i]}
                  fillOpacity={0.4}
                  stroke={colors[i]}
                  strokeWidth={2}
                  className="transition-all duration-300"
                />
              ))}

            {/* Inner square (c²) */}
            {currentStep.showInner && (
              <polygon
                points={`${a * scale},0 ${size},${a * scale} ${b * scale},${size} 0,${b * scale}`}
                fill="rgba(139, 92, 246, 0.3)"
                stroke="#8b5cf6"
                strokeWidth={2}
                className="transition-all duration-300"
              />
            )}

            {/* Labels based on step */}
            {step >= 1 && currentStep.showTriangles && (
              <>
                {/* Triangle area labels */}
                <text x={15} y={b * scale / 2} fill="#9ca3af" fontSize={10}>½ab</text>
                <text x={size - 25} y={a * scale / 2 + 10} fill="#9ca3af" fontSize={10}>½ab</text>
                <text x={size - 30} y={size - 15} fill="#9ca3af" fontSize={10}>½ab</text>
                <text x={10} y={size - 15} fill="#9ca3af" fontSize={10}>½ab</text>
              </>
            )}

            {step >= 2 && currentStep.showInner && (
              <text
                x={size / 2}
                y={size / 2}
                fill="#8b5cf6"
                fontSize={16}
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                c²
              </text>
            )}

            {/* Outer square dimension */}
            <text
              x={size / 2}
              y={size + 15}
              fill="#9ca3af"
              fontSize={11}
              textAnchor="middle"
            >
              (a + b) = {a + b}
            </text>
          </g>
        </svg>
      </div>

      {/* Step info */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-dark-500">Step {step + 1} of {steps.length}</span>
          <span className="text-primary-400 font-semibold">{currentStep.title}</span>
        </div>
        <p className="text-dark-300 text-center">{currentStep.desc}</p>
      </div>

      {/* Step navigation */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-4 py-2 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Previous
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className="px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
      </div>

      {/* Final result */}
      {step === steps.length - 1 && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
          <p className="text-emerald-400 font-bold text-lg">
            a² + b² = c²
          </p>
          <p className="text-dark-400 mt-1 font-mono">
            {a}² + {b}² = {a * a} + {b * b} = {a * a + b * b} = {c.toFixed(2)}² ✓
          </p>
        </div>
      )}
    </div>
  );
}
