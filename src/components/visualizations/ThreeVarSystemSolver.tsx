import { useState } from 'react';

export function ThreeVarSystemSolver() {
  // System: a1*x + b1*y + c1*z = d1
  //         a2*x + b2*y + c2*z = d2
  //         a3*x + b3*y + c3*z = d3
  const [a1, setA1] = useState(1);
  const [b1, setB1] = useState(1);
  const [c1, setC1] = useState(1);
  const [d1, setD1] = useState(6);

  const [a2, setA2] = useState(2);
  const [b2, setB2] = useState(-1);
  const [c2, setC2] = useState(1);
  const [d2, setD2] = useState(3);

  const [a3, setA3] = useState(1);
  const [b3, setB3] = useState(2);
  const [c3, setC3] = useState(-1);
  const [d3, setD3] = useState(2);

  // Solve using Cramer's rule
  // det = a1(b2*c3 - b3*c2) - b1(a2*c3 - a3*c2) + c1(a2*b3 - a3*b2)
  const det = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);

  // Cramer's rule for x, y, z
  const detX = d1 * (b2 * c3 - b3 * c2) - b1 * (d2 * c3 - d3 * c2) + c1 * (d2 * b3 - d3 * b2);
  const detY = a1 * (d2 * c3 - d3 * c2) - d1 * (a2 * c3 - a3 * c2) + c1 * (a2 * d3 - a3 * d2);
  const detZ = a1 * (b2 * d3 - b3 * d2) - b1 * (a2 * d3 - a3 * d2) + d1 * (a2 * b3 - a3 * b2);

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
    if (den === 0) return { num: 0, den: 1 };
    const g = gcd(Math.abs(num), Math.abs(den));
    let sNum = num / g;
    let sDen = den / g;
    if (sDen < 0) {
      sNum = -sNum;
      sDen = -sDen;
    }
    return { num: sNum, den: sDen };
  };

  const hasUniqueSolution = det !== 0;
  const xSol = simplifyFraction(detX, det);
  const ySol = simplifyFraction(detY, det);
  const zSol = simplifyFraction(detZ, det);

  const FractionDisplay = ({ num, den }: { num: number; den: number }) => {
    if (den === 1) {
      return <span className="text-primary-400 font-bold">{num}</span>;
    }
    return (
      <span className="inline-flex flex-col items-center mx-1">
        <span className="text-primary-400 font-bold">{num}</span>
        <span className="w-full h-0.5 bg-primary-400"></span>
        <span className="text-primary-400 font-bold">{den}</span>
      </span>
    );
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        3×3 System Solver
      </h3>

      {/* Equation inputs */}
      <div className="space-y-3 mb-6">
        {/* Equation 1 */}
        <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
          <div className="flex items-center justify-center gap-1 text-sm font-mono flex-wrap">
            <input type="number" value={a1} onChange={(e) => setA1(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-cyan-400 text-center" />
            <span className="text-dark-300">x +</span>
            <input type="number" value={b1} onChange={(e) => setB1(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-cyan-400 text-center" />
            <span className="text-dark-300">y +</span>
            <input type="number" value={c1} onChange={(e) => setC1(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-cyan-400 text-center" />
            <span className="text-dark-300">z =</span>
            <input type="number" value={d1} onChange={(e) => setD1(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-cyan-400 text-center" />
            <span className="text-dark-500 text-xs ml-2">(Eq. 1)</span>
          </div>
        </div>

        {/* Equation 2 */}
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <div className="flex items-center justify-center gap-1 text-sm font-mono flex-wrap">
            <input type="number" value={a2} onChange={(e) => setA2(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-emerald-400 text-center" />
            <span className="text-dark-300">x +</span>
            <input type="number" value={b2} onChange={(e) => setB2(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-emerald-400 text-center" />
            <span className="text-dark-300">y +</span>
            <input type="number" value={c2} onChange={(e) => setC2(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-emerald-400 text-center" />
            <span className="text-dark-300">z =</span>
            <input type="number" value={d2} onChange={(e) => setD2(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-emerald-400 text-center" />
            <span className="text-dark-500 text-xs ml-2">(Eq. 2)</span>
          </div>
        </div>

        {/* Equation 3 */}
        <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
          <div className="flex items-center justify-center gap-1 text-sm font-mono flex-wrap">
            <input type="number" value={a3} onChange={(e) => setA3(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-purple-400 text-center" />
            <span className="text-dark-300">x +</span>
            <input type="number" value={b3} onChange={(e) => setB3(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-purple-400 text-center" />
            <span className="text-dark-300">y +</span>
            <input type="number" value={c3} onChange={(e) => setC3(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-purple-400 text-center" />
            <span className="text-dark-300">z =</span>
            <input type="number" value={d3} onChange={(e) => setD3(Number(e.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-purple-400 text-center" />
            <span className="text-dark-500 text-xs ml-2">(Eq. 3)</span>
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
          <span className={`font-mono font-bold ${hasUniqueSolution ? 'text-emerald-400' : 'text-yellow-400'}`}>
            {det}
          </span>
          <span className="text-dark-500 text-sm ml-2">
            {hasUniqueSolution ? '(unique solution exists)' : '(no unique solution)'}
          </span>
        </div>
      </div>

      {/* Solution */}
      {hasUniqueSolution ? (
        <div className="p-6 rounded-xl bg-primary-500/10 border border-primary-500/30">
          <div className="text-center text-sm text-dark-400 mb-3">Solution:</div>
          <div className="flex items-center justify-center gap-6 text-lg font-mono flex-wrap">
            <div className="text-center">
              <span className="text-dark-300">x = </span>
              <FractionDisplay num={xSol.num} den={xSol.den} />
            </div>
            <div className="text-center">
              <span className="text-dark-300">y = </span>
              <FractionDisplay num={ySol.num} den={ySol.den} />
            </div>
            <div className="text-center">
              <span className="text-dark-300">z = </span>
              <FractionDisplay num={zSol.num} den={zSol.den} />
            </div>
          </div>
          <div className="text-center text-dark-500 text-sm mt-3">
            ≈ ({(xSol.num / xSol.den).toFixed(3)}, {(ySol.num / ySol.den).toFixed(3)}, {(zSol.num / zSol.den).toFixed(3)})
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/50 text-center">
          <div className="text-yellow-400 font-semibold text-lg mb-2">No Unique Solution</div>
          <p className="text-dark-400 text-sm">
            The system either has no solution or infinitely many solutions.
          </p>
        </div>
      )}

      {/* Example presets */}
      <div className="mt-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 mb-2">Try these examples:</div>
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => {
              setA1(1); setB1(1); setC1(1); setD1(6);
              setA2(2); setB2(-1); setC2(1); setD2(3);
              setA3(1); setB3(2); setC3(-1); setD3(2);
            }}
            className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
          >
            Simple (1,2,3)
          </button>
          <button
            onClick={() => {
              setA1(3); setB1(2); setC1(4); setD1(1);
              setA2(-1); setB2(1); setC2(2); setD2(2);
              setA3(1); setB3(-3); setC3(1); setD3(-1);
            }}
            className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
          >
            Textbook Example
          </button>
          <button
            onClick={() => {
              setA1(1); setB1(2); setC1(3); setD1(14);
              setA2(2); setB2(1); setC2(1); setD2(7);
              setA3(3); setB3(3); setC3(2); setD3(14);
            }}
            className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
          >
            Another (1,2,3)
          </button>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Enter coefficients for three equations to solve the 3×3 system.
      </p>
    </div>
  );
}
