import { useState } from 'react';

export function DeterminantCalculator() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const [c, setC] = useState(1);
  const [d, setD] = useState(4);

  const determinant = a * d - b * c;
  const hasUniqueSolution = determinant !== 0;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Determinant Calculator
      </h3>

      <p className="text-dark-400 text-sm text-center mb-4">
        For a system with coefficients a, b, c, d, the determinant tells us if a unique solution exists.
      </p>

      {/* Matrix input */}
      <div className="flex justify-center mb-6">
        <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-sm text-dark-400 text-center mb-4">Coefficient Matrix</div>
          <div className="flex items-center gap-2">
            {/* Left bracket */}
            <div className="text-4xl text-dark-500 font-light">[</div>

            {/* Matrix entries */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="number"
                  value={a}
                  onChange={(ev) => setA(Number(ev.target.value))}
                  className="w-16 h-12 text-center rounded bg-dark-700 border border-dark-600 text-cyan-400 text-xl font-mono"
                />
                <div className="text-xs text-dark-500 text-center mt-1">a</div>
              </div>
              <div>
                <input
                  type="number"
                  value={b}
                  onChange={(ev) => setB(Number(ev.target.value))}
                  className="w-16 h-12 text-center rounded bg-dark-700 border border-dark-600 text-emerald-400 text-xl font-mono"
                />
                <div className="text-xs text-dark-500 text-center mt-1">b</div>
              </div>
              <div>
                <input
                  type="number"
                  value={c}
                  onChange={(ev) => setC(Number(ev.target.value))}
                  className="w-16 h-12 text-center rounded bg-dark-700 border border-dark-600 text-purple-400 text-xl font-mono"
                />
                <div className="text-xs text-dark-500 text-center mt-1">c</div>
              </div>
              <div>
                <input
                  type="number"
                  value={d}
                  onChange={(ev) => setD(Number(ev.target.value))}
                  className="w-16 h-12 text-center rounded bg-dark-700 border border-dark-600 text-yellow-400 text-xl font-mono"
                />
                <div className="text-xs text-dark-500 text-center mt-1">d</div>
              </div>
            </div>

            {/* Right bracket */}
            <div className="text-4xl text-dark-500 font-light">]</div>
          </div>
        </div>
      </div>

      {/* Calculation */}
      <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="text-center text-sm text-dark-400 mb-3">Determinant Calculation:</div>
        <div className="flex items-center justify-center gap-3 text-xl font-mono flex-wrap">
          <span className="text-dark-400">det = ad - bc</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-xl font-mono flex-wrap mt-3">
          <span className="text-dark-400">=</span>
          <span className="text-cyan-400">{a}</span>
          <span className="text-dark-400">×</span>
          <span className="text-yellow-400">{d}</span>
          <span className="text-dark-400">-</span>
          <span className="text-emerald-400">{b}</span>
          <span className="text-dark-400">×</span>
          <span className="text-purple-400">{c}</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-xl font-mono flex-wrap mt-3">
          <span className="text-dark-400">=</span>
          <span className="text-primary-400">{a * d}</span>
          <span className="text-dark-400">-</span>
          <span className="text-primary-400">{b * c}</span>
          <span className="text-dark-400">=</span>
          <span className={`text-2xl font-bold ${hasUniqueSolution ? 'text-emerald-400' : 'text-red-400'}`}>
            {determinant}
          </span>
        </div>
      </div>

      {/* Result */}
      <div className={`p-6 rounded-xl border ${
        hasUniqueSolution
          ? 'bg-emerald-500/10 border-emerald-500/50'
          : 'bg-red-500/10 border-red-500/50'
      }`}>
        {hasUniqueSolution ? (
          <div className="text-center">
            <div className="text-emerald-400 font-semibold text-lg mb-2">
              ✓ Unique Solution Exists
            </div>
            <p className="text-dark-400 text-sm">
              Since det = {determinant} ≠ 0, the system has exactly one solution.
              <br />
              Geometrically, the two lines intersect at exactly one point.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-red-400 font-semibold text-lg mb-2">
              ✗ No Unique Solution
            </div>
            <p className="text-dark-400 text-sm">
              Since det = 0, the system either has no solution (parallel lines)
              <br />
              or infinitely many solutions (same line).
            </p>
          </div>
        )}
      </div>

      {/* Visual interpretation */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className={`p-4 rounded-lg border ${determinant > 0 ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-dark-800/30 border-dark-700'}`}>
          <div className="text-center">
            <div className="text-cyan-400 font-mono text-lg">det &gt; 0</div>
            <div className="text-dark-400 text-xs mt-1">Positive determinant</div>
          </div>
        </div>
        <div className={`p-4 rounded-lg border ${determinant < 0 ? 'bg-purple-500/10 border-purple-500/30' : 'bg-dark-800/30 border-dark-700'}`}>
          <div className="text-center">
            <div className="text-purple-400 font-mono text-lg">det &lt; 0</div>
            <div className="text-dark-400 text-xs mt-1">Negative determinant</div>
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        The determinant ad - bc determines whether a 2×2 system has a unique solution.
      </p>
    </div>
  );
}
