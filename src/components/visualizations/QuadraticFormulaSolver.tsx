import { useState } from 'react';

export function QuadraticFormulaSolver() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-5);
  const [c, setC] = useState(6);

  // Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a
  const discriminant = b * b - 4 * a * c;
  const hasRealSolutions = discriminant >= 0;
  const hasOneSolution = discriminant === 0;

  const sqrtDiscriminant = hasRealSolutions ? Math.sqrt(discriminant) : 0;
  const solution1 = hasRealSolutions ? (-b + sqrtDiscriminant) / (2 * a) : null;
  const solution2 = hasRealSolutions ? (-b - sqrtDiscriminant) / (2 * a) : null;

  const formatNumber = (n: number | null) => {
    if (n === null) return '—';
    return n % 1 === 0 ? n.toString() : n.toFixed(4).replace(/\.?0+$/, '');
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Quadratic Formula Solver
      </h3>

      {/* Formula display */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-6 text-center">
        <div className="text-dark-400 text-sm mb-2">The Quadratic Formula:</div>
        <div className="font-mono text-xl text-primary-400">
          x = (−b ± √(b² − 4ac)) / 2a
        </div>
      </div>

      {/* Equation display */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-6 text-center">
        <div className="text-dark-500 text-sm mb-2">Solve:</div>
        <div className="font-mono text-xl text-dark-200">
          <span className="text-cyan-400">{a}</span>x²
          {b >= 0 ? ' + ' : ' − '}<span className="text-emerald-400">{Math.abs(b)}</span>x
          {c >= 0 ? ' + ' : ' − '}<span className="text-purple-400">{Math.abs(c)}</span> = 0
        </div>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">a</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={1}
            value={a}
            onChange={(e) => setA(Number(e.target.value) || 1)}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{a || 1}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">b</label>
          <input
            type="range"
            min={-10}
            max={10}
            step={1}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-lg text-emerald-400">{b}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">c</label>
          <input
            type="range"
            min={-10}
            max={10}
            step={1}
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{c}</div>
        </div>
      </div>

      {/* Calculation steps */}
      <div className="space-y-3 mb-4">
        {/* Discriminant */}
        <div className={`p-4 rounded-lg ${
          discriminant > 0 ? 'bg-emerald-500/10 border border-emerald-500/30' :
          discriminant === 0 ? 'bg-yellow-500/10 border border-yellow-500/30' :
          'bg-red-500/10 border border-red-500/30'
        }`}>
          <div className="text-dark-400 text-sm mb-1">Discriminant: b² − 4ac</div>
          <div className="font-mono">
            ({b})² − 4({a})({c}) = {b * b} − {4 * a * c} =
            <span className={`ml-2 font-bold ${
              discriminant > 0 ? 'text-emerald-400' :
              discriminant === 0 ? 'text-yellow-400' :
              'text-red-400'
            }`}>
              {discriminant}
            </span>
          </div>
          <div className={`text-sm mt-2 ${
            discriminant > 0 ? 'text-emerald-400' :
            discriminant === 0 ? 'text-yellow-400' :
            'text-red-400'
          }`}>
            {discriminant > 0 && '✓ Positive: Two distinct real solutions'}
            {discriminant === 0 && '• Zero: One repeated real solution'}
            {discriminant < 0 && '✗ Negative: No real solutions'}
          </div>
        </div>

        {/* Solutions */}
        {hasRealSolutions && (
          <div className="p-4 rounded-lg bg-dark-800/40">
            <div className="text-dark-400 text-sm mb-2">Apply the formula:</div>
            <div className="font-mono text-center space-y-2">
              <div className="text-dark-300">
                x = (−({b}) ± √{discriminant}) / (2 × {a})
              </div>
              <div className="text-dark-300">
                x = ({-b} ± {formatNumber(sqrtDiscriminant)}) / {2 * a}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Final solutions */}
      <div className={`p-6 rounded-xl border text-center ${
        hasRealSolutions
          ? 'bg-primary-500/10 border-primary-500/30'
          : 'bg-red-500/10 border-red-500/30'
      }`}>
        {hasRealSolutions ? (
          <>
            <div className="text-dark-400 text-sm mb-3">
              {hasOneSolution ? 'Solution (repeated root):' : 'Solutions:'}
            </div>
            <div className="font-mono text-2xl">
              {hasOneSolution ? (
                <span className="text-primary-400">x = {formatNumber(solution1)}</span>
              ) : (
                <>
                  <span className="text-cyan-400">x₁ = {formatNumber(solution1)}</span>
                  <span className="text-dark-500 mx-4">and</span>
                  <span className="text-purple-400">x₂ = {formatNumber(solution2)}</span>
                </>
              )}
            </div>
          </>
        ) : (
          <div className="text-red-400 font-semibold">
            No real solutions exist
            <div className="text-sm text-dark-400 mt-2">
              (Would require complex numbers: i = √−1)
            </div>
          </div>
        )}
      </div>

      {/* Verification */}
      {hasRealSolutions && (
        <div className="mt-4 p-3 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-dark-500 text-sm text-center">
            <strong>Verify:</strong> Plug solutions back into the equation
          </div>
          <div className="font-mono text-xs text-center mt-2 text-dark-400">
            {a}({formatNumber(solution1)})² {b >= 0 ? '+' : '−'} {Math.abs(b)}({formatNumber(solution1)}) {c >= 0 ? '+' : '−'} {Math.abs(c)} ≈ {
              solution1 !== null
                ? (a * solution1 * solution1 + b * solution1 + c).toFixed(6)
                : '?'
            }
          </div>
        </div>
      )}

      {/* Quick examples */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {[
          { a: 1, b: -5, c: 6, label: 'x²−5x+6' },
          { a: 1, b: -2, c: 1, label: 'x²−2x+1' },
          { a: 1, b: 0, c: 1, label: 'x²+1' },
          { a: 2, b: 3, c: -2, label: '2x²+3x−2' },
        ].map((ex, idx) => (
          <button
            key={idx}
            onClick={() => { setA(ex.a); setB(ex.b); setC(ex.c); }}
            className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm font-mono"
          >
            {ex.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        The discriminant determines the nature of the solutions.
      </p>
    </div>
  );
}
