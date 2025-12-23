import { useState } from 'react';

export function CramersRuleSolver() {
  // System: ax + by = e, cx + dy = f
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const [e, setE] = useState(8);
  const [c, setC] = useState(1);
  const [d, setD] = useState(-1);
  const [f, setF] = useState(1);

  // Calculate determinants
  const D = a * d - b * c;
  const Dx = e * d - b * f;
  const Dy = a * f - e * c;

  // Solutions
  const hasUniqueSolution = D !== 0;
  const x = hasUniqueSolution ? Dx / D : null;
  const y = hasUniqueSolution ? Dy / D : null;

  // Format fraction or decimal
  const formatSolution = (num: number | null, denom: number) => {
    if (num === null) return '∅';
    if (Number.isInteger(num / denom)) return String(num / denom);
    // Show as fraction
    const gcd = (a: number, b: number): number => b === 0 ? Math.abs(a) : gcd(b, a % b);
    const g = gcd(num, denom);
    const sign = (num * denom < 0) ? '-' : '';
    return `${sign}${Math.abs(num / g)}/${Math.abs(denom / g)}`;
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Cramer's Rule Solver (2×2)
      </h3>

      {/* System input */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <div className="text-dark-400 text-sm mb-3 text-center">Enter your system of equations:</div>

        {/* First equation */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-14 h-10 text-center font-mono bg-dark-700 border border-dark-600 rounded text-primary-400 focus:border-primary-500 focus:outline-none"
          />
          <span className="text-dark-300">x +</span>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-14 h-10 text-center font-mono bg-dark-700 border border-dark-600 rounded text-cyan-400 focus:border-cyan-500 focus:outline-none"
          />
          <span className="text-dark-300">y =</span>
          <input
            type="number"
            value={e}
            onChange={(e) => setE(Number(e.target.value))}
            className="w-14 h-10 text-center font-mono bg-dark-700 border border-amber-500/50 rounded text-amber-400 focus:border-amber-500 focus:outline-none"
          />
        </div>

        {/* Second equation */}
        <div className="flex items-center justify-center gap-2">
          <input
            type="number"
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-14 h-10 text-center font-mono bg-dark-700 border border-dark-600 rounded text-primary-400 focus:border-primary-500 focus:outline-none"
          />
          <span className="text-dark-300">x +</span>
          <input
            type="number"
            value={d}
            onChange={(e) => setD(Number(e.target.value))}
            className="w-14 h-10 text-center font-mono bg-dark-700 border border-dark-600 rounded text-cyan-400 focus:border-cyan-500 focus:outline-none"
          />
          <span className="text-dark-300">y =</span>
          <input
            type="number"
            value={f}
            onChange={(e) => setF(Number(e.target.value))}
            className="w-14 h-10 text-center font-mono bg-dark-700 border border-amber-500/50 rounded text-amber-400 focus:border-amber-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Determinant calculations */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {/* D */}
        <div className="p-3 rounded-xl bg-dark-800/60 border border-dark-700 text-center">
          <div className="text-dark-500 text-xs mb-1">D (coefficient)</div>
          <div className="text-xs text-dark-400 mb-1">det([{a},{b}; {c},{d}])</div>
          <div className="text-xs text-dark-400 mb-1">= {a}×{d} − {b}×{c}</div>
          <div className={`font-mono text-xl ${D === 0 ? 'text-red-400' : 'text-dark-200'}`}>{D}</div>
        </div>

        {/* Dx */}
        <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/30 text-center">
          <div className="text-dark-500 text-xs mb-1">Dₓ</div>
          <div className="text-xs text-dark-400 mb-1">det([{e},{b}; {f},{d}])</div>
          <div className="text-xs text-dark-400 mb-1">= {e}×{d} − {b}×{f}</div>
          <div className="font-mono text-xl text-primary-400">{Dx}</div>
        </div>

        {/* Dy */}
        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
          <div className="text-dark-500 text-xs mb-1">Dᵧ</div>
          <div className="text-xs text-dark-400 mb-1">det([{a},{e}; {c},{f}])</div>
          <div className="text-xs text-dark-400 mb-1">= {a}×{f} − {e}×{c}</div>
          <div className="font-mono text-xl text-cyan-400">{Dy}</div>
        </div>
      </div>

      {/* Solutions */}
      {hasUniqueSolution ? (
        <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-4">
          <div className="text-center mb-4">
            <span className="text-emerald-400 font-semibold">Unique Solution Found</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-dark-400 text-sm mb-1">x = Dₓ / D</div>
              <div className="font-mono text-dark-300">{Dx} / {D}</div>
              <div className="font-mono text-2xl text-primary-400 font-bold mt-1">
                {formatSolution(Dx, D)}
              </div>
              {x !== null && !Number.isInteger(x) && (
                <div className="text-xs text-dark-500">≈ {x.toFixed(4)}</div>
              )}
            </div>
            <div className="text-center">
              <div className="text-dark-400 text-sm mb-1">y = Dᵧ / D</div>
              <div className="font-mono text-dark-300">{Dy} / {D}</div>
              <div className="font-mono text-2xl text-cyan-400 font-bold mt-1">
                {formatSolution(Dy, D)}
              </div>
              {y !== null && !Number.isInteger(y) && (
                <div className="text-xs text-dark-500">≈ {y.toFixed(4)}</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30 mb-4 text-center">
          <span className="text-red-400 font-semibold">No Unique Solution (D = 0)</span>
          <p className="text-dark-400 text-sm mt-2">
            The system is either inconsistent (no solution) or dependent (infinitely many solutions).
          </p>
        </div>
      )}

      {/* Verification */}
      {hasUniqueSolution && x !== null && y !== null && (
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
          <div className="text-dark-400 text-sm mb-2">Verify:</div>
          <div className="text-sm text-dark-300 space-y-1 font-mono">
            <div>
              {a}({x.toFixed(2)}) + {b}({y.toFixed(2)}) = {(a * x + b * y).toFixed(2)} {Math.abs(a * x + b * y - e) < 0.01 ? '✓' : '≈'} {e}
            </div>
            <div>
              {c}({x.toFixed(2)}) + {d}({y.toFixed(2)}) = {(c * x + d * y).toFixed(2)} {Math.abs(c * x + d * y - f) < 0.01 ? '✓' : '≈'} {f}
            </div>
          </div>
        </div>
      )}

      {/* Presets */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { a: 2, b: 1, e: 5, c: 1, d: 1, f: 3, label: 'x=2, y=1' },
          { a: 3, b: 2, e: 7, c: 1, d: 1, f: 3, label: 'x=1, y=2' },
          { a: 1, b: 1, e: 2, c: 2, d: 2, f: 4, label: 'Dependent' },
          { a: 1, b: 2, e: 3, c: 2, d: 4, f: 5, label: 'Inconsistent' },
        ].map((preset) => (
          <button
            key={preset.label}
            onClick={() => {
              setA(preset.a); setB(preset.b); setE(preset.e);
              setC(preset.c); setD(preset.d); setF(preset.f);
            }}
            className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Replace coefficient columns with constants to find each variable.
      </p>
    </div>
  );
}
