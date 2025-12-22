import { useState } from 'react';

export function SystemSolver() {
  // System: ax + by = e
  //         cx + dy = f
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const [e, setE] = useState(5);
  const [c, setC] = useState(1);
  const [d, setD] = useState(-1);
  const [f, setF] = useState(1);

  // Determinant
  const det = a * d - b * c;

  // Solution using Cramer's rule: x = (ed - bf) / det, y = (af - ec) / det
  const xNum = e * d - b * f;
  const yNum = a * f - e * c;

  // GCD for simplification
  const gcd = (m: number, n: number): number => {
    m = Math.abs(m);
    n = Math.abs(n);
    while (n) {
      [m, n] = [n, m % n];
    }
    return m;
  };

  const simplifyFraction = (num: number, den: number) => {
    if (den === 0) return { num: 0, den: 1, isUndefined: true };
    const g = gcd(Math.abs(num), Math.abs(den));
    let sNum = num / g;
    let sDen = den / g;
    if (sDen < 0) {
      sNum = -sNum;
      sDen = -sDen;
    }
    return { num: sNum, den: sDen, isUndefined: false };
  };

  const xSol = simplifyFraction(xNum, det);
  const ySol = simplifyFraction(yNum, det);

  const hasUniqueSolution = det !== 0;
  const isNoSolution = det === 0 && (xNum !== 0 || yNum !== 0);

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        System of Equations Solver
      </h3>

      {/* Equation inputs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Equation 1 */}
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-sm text-dark-400 text-center mb-3">Equation 1</div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-xs text-dark-500 mb-1">a</label>
              <input
                type="number"
                value={a}
                onChange={(ev) => setA(Number(ev.target.value))}
                className="w-full px-2 py-1 rounded bg-dark-700 border border-dark-600 text-cyan-400 text-center font-mono"
              />
            </div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">b</label>
              <input
                type="number"
                value={b}
                onChange={(ev) => setB(Number(ev.target.value))}
                className="w-full px-2 py-1 rounded bg-dark-700 border border-dark-600 text-cyan-400 text-center font-mono"
              />
            </div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">= e</label>
              <input
                type="number"
                value={e}
                onChange={(ev) => setE(Number(ev.target.value))}
                className="w-full px-2 py-1 rounded bg-dark-700 border border-dark-600 text-cyan-400 text-center font-mono"
              />
            </div>
          </div>
          <div className="text-center font-mono text-dark-300 mt-2">
            <span className="text-cyan-400">{a}</span>x + <span className="text-cyan-400">{b}</span>y = <span className="text-cyan-400">{e}</span>
          </div>
        </div>

        {/* Equation 2 */}
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-sm text-dark-400 text-center mb-3">Equation 2</div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-xs text-dark-500 mb-1">c</label>
              <input
                type="number"
                value={c}
                onChange={(ev) => setC(Number(ev.target.value))}
                className="w-full px-2 py-1 rounded bg-dark-700 border border-dark-600 text-emerald-400 text-center font-mono"
              />
            </div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">d</label>
              <input
                type="number"
                value={d}
                onChange={(ev) => setD(Number(ev.target.value))}
                className="w-full px-2 py-1 rounded bg-dark-700 border border-dark-600 text-emerald-400 text-center font-mono"
              />
            </div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">= f</label>
              <input
                type="number"
                value={f}
                onChange={(ev) => setF(Number(ev.target.value))}
                className="w-full px-2 py-1 rounded bg-dark-700 border border-dark-600 text-emerald-400 text-center font-mono"
              />
            </div>
          </div>
          <div className="text-center font-mono text-dark-300 mt-2">
            <span className="text-emerald-400">{c}</span>x + <span className="text-emerald-400">{d}</span>y = <span className="text-emerald-400">{f}</span>
          </div>
        </div>
      </div>

      {/* Determinant */}
      <div className={`p-4 rounded-xl border mb-4 ${
        hasUniqueSolution
          ? 'bg-emerald-500/10 border-emerald-500/50'
          : 'bg-yellow-500/10 border-yellow-500/50'
      }`}>
        <div className="text-center">
          <span className="text-dark-400 text-sm">Determinant: </span>
          <span className="font-mono">
            ad - bc = (<span className="text-cyan-400">{a}</span>)(<span className="text-emerald-400">{d}</span>) - (<span className="text-cyan-400">{b}</span>)(<span className="text-emerald-400">{c}</span>) = <span className={`font-bold ${det !== 0 ? 'text-emerald-400' : 'text-yellow-400'}`}>{det}</span>
          </span>
        </div>
        <div className="text-center mt-1 text-sm">
          {hasUniqueSolution ? (
            <span className="text-emerald-400">✓ Unique solution exists</span>
          ) : (
            <span className="text-yellow-400">⚠ No unique solution (det = 0)</span>
          )}
        </div>
      </div>

      {/* Solution */}
      {hasUniqueSolution ? (
        <div className="p-6 rounded-xl bg-primary-500/10 border border-primary-500/30">
          <div className="text-center text-sm text-dark-400 mb-3">Solution:</div>
          <div className="flex items-center justify-center gap-8 text-xl font-mono">
            <div className="text-center">
              <span className="text-dark-300">x = </span>
              {xSol.den === 1 ? (
                <span className="text-primary-400 font-bold">{xSol.num}</span>
              ) : (
                <span className="inline-flex flex-col items-center">
                  <span className="text-primary-400 font-bold">{xSol.num}</span>
                  <span className="w-full h-0.5 bg-primary-400"></span>
                  <span className="text-primary-400 font-bold">{xSol.den}</span>
                </span>
              )}
            </div>
            <div className="text-center">
              <span className="text-dark-300">y = </span>
              {ySol.den === 1 ? (
                <span className="text-primary-400 font-bold">{ySol.num}</span>
              ) : (
                <span className="inline-flex flex-col items-center">
                  <span className="text-primary-400 font-bold">{ySol.num}</span>
                  <span className="w-full h-0.5 bg-primary-400"></span>
                  <span className="text-primary-400 font-bold">{ySol.den}</span>
                </span>
              )}
            </div>
          </div>
          <div className="text-center text-dark-500 text-sm mt-3">
            ≈ ({(xSol.num / xSol.den).toFixed(3)}, {(ySol.num / ySol.den).toFixed(3)})
          </div>
        </div>
      ) : isNoSolution ? (
        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/50 text-center">
          <div className="text-red-400 font-semibold text-lg mb-2">No Solution</div>
          <p className="text-dark-400 text-sm">
            The equations are contradictory (parallel lines that never meet).
          </p>
        </div>
      ) : (
        <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/50 text-center">
          <div className="text-yellow-400 font-semibold text-lg mb-2">Infinite Solutions</div>
          <p className="text-dark-400 text-sm">
            The equations are equivalent (same line). Any point on the line is a solution.
          </p>
        </div>
      )}

      {/* Example systems */}
      <div className="mt-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 mb-2">Try these examples:</div>
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => { setA(2); setB(1); setE(5); setC(1); setD(-1); setF(1); }}
            className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
          >
            Unique (2,1)
          </button>
          <button
            onClick={() => { setA(2); setB(-1); setE(5); setC(2); setD(-1); setF(7); }}
            className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
          >
            No Solution
          </button>
          <button
            onClick={() => { setA(1); setB(2); setE(3); setC(2); setD(4); setF(6); }}
            className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
          >
            Infinite
          </button>
          <button
            onClick={() => { setA(3); setB(-2); setE(4); setC(2); setD(1); setF(1); }}
            className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
          >
            Textbook Example
          </button>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Enter coefficients to solve ax + by = e and cx + dy = f using elimination.
      </p>
    </div>
  );
}
