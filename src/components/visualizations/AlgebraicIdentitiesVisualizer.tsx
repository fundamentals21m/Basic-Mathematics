import { useState } from 'react';

type Identity = 'sum-square' | 'diff-square' | 'diff-of-squares';

export function AlgebraicIdentitiesVisualizer() {
  const [identity, setIdentity] = useState<Identity>('sum-square');
  const [a, setA] = useState(3);
  const [b, setB] = useState(2);

  const identities: Record<Identity, {
    title: string;
    formula: string;
    expanded: string;
  }> = {
    'sum-square': {
      title: 'Square of a Sum',
      formula: '(a + b)²',
      expanded: 'a² + 2ab + b²',
    },
    'diff-square': {
      title: 'Square of a Difference',
      formula: '(a - b)²',
      expanded: 'a² - 2ab + b²',
    },
    'diff-of-squares': {
      title: 'Difference of Squares',
      formula: '(a + b)(a - b)',
      expanded: 'a² - b²',
    },
  };

  const current = identities[identity];

  // Calculate values
  const aSquared = a * a;
  const bSquared = b * b;
  const twoAB = 2 * a * b;

  let leftValue: number;
  let rightValue: number;

  switch (identity) {
    case 'sum-square':
      leftValue = (a + b) * (a + b);
      rightValue = aSquared + twoAB + bSquared;
      break;
    case 'diff-square':
      leftValue = (a - b) * (a - b);
      rightValue = aSquared - twoAB + bSquared;
      break;
    case 'diff-of-squares':
      leftValue = (a + b) * (a - b);
      rightValue = aSquared - bSquared;
      break;
  }

  // SVG dimensions
  const svgSize = 220;
  const padding = 10;
  const maxVal = Math.max(a, b, a + b);
  const scale = (svgSize - 2 * padding) / (maxVal * 1.1);

  const aScaled = a * scale;
  const bScaled = b * scale;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Algebraic Identities Visualizer
      </h3>

      {/* Identity selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Object.entries(identities).map(([key, id]) => (
          <button
            key={key}
            onClick={() => setIdentity(key as Identity)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              identity === key
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {id.title}
          </button>
        ))}
      </div>

      {/* Formula display */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-6 text-center">
        <div className="font-mono text-2xl text-dark-200">
          <span className="text-primary-400">{current.formula}</span>
          <span className="text-dark-500 mx-3">=</span>
          <span className="text-emerald-400">{current.expanded}</span>
        </div>
      </div>

      {/* Value inputs */}
      <div className="grid grid-cols-2 gap-4 mb-6 max-w-xs mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">a</label>
          <input
            type="range"
            min={1}
            max={6}
            step={0.5}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{a}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">b</label>
          <input
            type="range"
            min={1}
            max={6}
            step={0.5}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-lg text-emerald-400">{b}</div>
        </div>
      </div>

      {/* Geometric visualization */}
      <div className="flex justify-center mb-6">
        <svg width={svgSize} height={svgSize} className="bg-dark-900 rounded-xl border border-dark-700">
          {identity === 'sum-square' && (
            <>
              {/* (a+b)² = a² + 2ab + b² */}
              {/* a² square (top-left) */}
              <rect
                x={padding}
                y={padding}
                width={aScaled}
                height={aScaled}
                fill="rgba(34, 211, 238, 0.3)"
                stroke="#22d3ee"
                strokeWidth={2}
              />
              <text x={padding + aScaled / 2} y={padding + aScaled / 2} textAnchor="middle" fill="#22d3ee" fontSize="14" fontFamily="monospace">
                a²
              </text>

              {/* ab rectangle (top-right) */}
              <rect
                x={padding + aScaled}
                y={padding}
                width={bScaled}
                height={aScaled}
                fill="rgba(168, 85, 247, 0.3)"
                stroke="#a855f7"
                strokeWidth={2}
              />
              <text x={padding + aScaled + bScaled / 2} y={padding + aScaled / 2} textAnchor="middle" fill="#a855f7" fontSize="14" fontFamily="monospace">
                ab
              </text>

              {/* ab rectangle (bottom-left) */}
              <rect
                x={padding}
                y={padding + aScaled}
                width={aScaled}
                height={bScaled}
                fill="rgba(168, 85, 247, 0.3)"
                stroke="#a855f7"
                strokeWidth={2}
              />
              <text x={padding + aScaled / 2} y={padding + aScaled + bScaled / 2} textAnchor="middle" fill="#a855f7" fontSize="14" fontFamily="monospace">
                ab
              </text>

              {/* b² square (bottom-right) */}
              <rect
                x={padding + aScaled}
                y={padding + aScaled}
                width={bScaled}
                height={bScaled}
                fill="rgba(52, 211, 153, 0.3)"
                stroke="#34d399"
                strokeWidth={2}
              />
              <text x={padding + aScaled + bScaled / 2} y={padding + aScaled + bScaled / 2} textAnchor="middle" fill="#34d399" fontSize="14" fontFamily="monospace">
                b²
              </text>
            </>
          )}

          {identity === 'diff-square' && a > b && (
            <>
              {/* (a-b)² shown as inner square */}
              {/* Full a² */}
              <rect
                x={padding}
                y={padding}
                width={aScaled}
                height={aScaled}
                fill="rgba(34, 211, 238, 0.1)"
                stroke="#22d3ee"
                strokeWidth={1}
                strokeDasharray="4"
              />

              {/* (a-b)² square */}
              <rect
                x={padding}
                y={padding}
                width={(a - b) * scale}
                height={(a - b) * scale}
                fill="rgba(99, 102, 241, 0.3)"
                stroke="#6366f1"
                strokeWidth={2}
              />
              <text x={padding + (a - b) * scale / 2} y={padding + (a - b) * scale / 2} textAnchor="middle" fill="#6366f1" fontSize="12" fontFamily="monospace">
                (a-b)²
              </text>

              {/* Labels */}
              <text x={padding + aScaled / 2} y={svgSize - 5} textAnchor="middle" fill="#22d3ee" fontSize="12">a</text>
              <text x={padding + (a - b) * scale / 2} y={padding + aScaled + 15} textAnchor="middle" fill="#6366f1" fontSize="12">a-b</text>
            </>
          )}

          {identity === 'diff-of-squares' && (
            <>
              {/* a² square */}
              <rect
                x={padding}
                y={padding}
                width={aScaled}
                height={aScaled}
                fill="rgba(34, 211, 238, 0.3)"
                stroke="#22d3ee"
                strokeWidth={2}
              />
              <text x={padding + aScaled / 2} y={padding + aScaled / 2} textAnchor="middle" fill="#22d3ee" fontSize="14" fontFamily="monospace">
                a²
              </text>

              {/* b² square (subtracted, shown with different color) */}
              <rect
                x={padding + aScaled + 20}
                y={padding + (aScaled - bScaled) / 2}
                width={bScaled}
                height={bScaled}
                fill="rgba(239, 68, 68, 0.3)"
                stroke="#ef4444"
                strokeWidth={2}
              />
              <text x={padding + aScaled + 20 + bScaled / 2} y={padding + aScaled / 2} textAnchor="middle" fill="#ef4444" fontSize="14" fontFamily="monospace">
                b²
              </text>

              {/* Minus sign */}
              <text x={padding + aScaled + 10} y={padding + aScaled / 2} textAnchor="middle" fill="#fff" fontSize="20">−</text>
            </>
          )}
        </svg>
      </div>

      {/* Numerical verification */}
      <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-xs text-dark-500 mb-1">{current.formula}</div>
            <div className="font-mono text-xl text-primary-400">{leftValue}</div>
          </div>
          <div>
            <div className="text-xs text-dark-500 mb-1">{current.expanded}</div>
            <div className="font-mono text-xl text-emerald-400">{rightValue}</div>
          </div>
        </div>
        <div className="text-center mt-3 text-sm">
          {identity === 'sum-square' && (
            <span className="text-dark-400">
              = <span className="text-cyan-400">{aSquared}</span> + <span className="text-purple-400">{twoAB}</span> + <span className="text-emerald-400">{bSquared}</span>
            </span>
          )}
          {identity === 'diff-square' && (
            <span className="text-dark-400">
              = <span className="text-cyan-400">{aSquared}</span> − <span className="text-purple-400">{twoAB}</span> + <span className="text-emerald-400">{bSquared}</span>
            </span>
          )}
          {identity === 'diff-of-squares' && (
            <span className="text-dark-400">
              = <span className="text-cyan-400">{aSquared}</span> − <span className="text-emerald-400">{bSquared}</span>
            </span>
          )}
        </div>
      </div>

      {/* Equality check */}
      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/50 text-center">
        <span className="text-emerald-400 font-semibold">✓ Both sides equal {leftValue}</span>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        These identities work for all real numbers. The geometric view shows why the algebra works.
      </p>
    </div>
  );
}
