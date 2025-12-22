import { useState } from 'react';

export function CrossMultiplicationSolver() {
  // Equation: a/(x + c) = b/d
  // Solution: x = (ad - bc) / b - but we'll show x + c = ad/b, so x = ad/b - c
  const [a, setA] = useState(3);
  const [b, setB] = useState(2);
  const [c, setC] = useState(-1); // represents x + c (when c = -1, it's x - 1)
  const [d, setD] = useState(1);

  // Cross multiply: a * d = b * (x + c)
  // So: x + c = ad/b
  // x = ad/b - c
  const crossLeft = a * d;

  // Solution: x = (ad)/b - c = (ad - bc)/b
  const solutionNum = a * d - b * c;
  const solutionDen = b;

  // GCD for reduction
  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const solGcd = gcd(Math.abs(solutionNum), Math.abs(solutionDen));
  const reducedNum = solutionNum / solGcd;
  const reducedDen = solutionDen / solGcd;

  // Handle sign
  const finalNum = reducedDen < 0 ? -reducedNum : reducedNum;
  const finalDen = Math.abs(reducedDen);

  const isUndefined = b === 0;
  const isInteger = finalDen === 1;

  // Format the c value for display
  const cDisplay = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Cross-Multiplication Solver
      </h3>

      {/* Equation inputs */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="space-y-1">
          <label className="block text-xs text-dark-500 text-center">a</label>
          <input
            type="range"
            min={1}
            max={10}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{a}</div>
        </div>
        <div className="space-y-1">
          <label className="block text-xs text-dark-500 text-center">b</label>
          <input
            type="range"
            min={1}
            max={10}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-lg text-emerald-400">{b}</div>
        </div>
        <div className="space-y-1">
          <label className="block text-xs text-dark-500 text-center">c</label>
          <input
            type="range"
            min={-5}
            max={5}
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{c}</div>
        </div>
        <div className="space-y-1">
          <label className="block text-xs text-dark-500 text-center">d</label>
          <input
            type="range"
            min={1}
            max={10}
            value={d}
            onChange={(e) => setD(Number(e.target.value))}
            className="w-full accent-yellow-500"
          />
          <div className="text-center font-mono text-lg text-yellow-400">{d}</div>
        </div>
      </div>

      {/* The equation */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-4">
        <div className="text-center text-sm text-dark-400 mb-2">Solve the equation:</div>
        <div className="flex items-center justify-center gap-3 text-xl font-mono">
          <div className="flex flex-col items-center">
            <span className="text-cyan-400">{a}</span>
            <div className="w-16 h-0.5 bg-dark-500"></div>
            <span className="text-dark-300">x {cDisplay}</span>
          </div>
          <span className="text-dark-400">=</span>
          <div className="flex flex-col items-center">
            <span className="text-emerald-400">{b}</span>
            <div className="w-6 h-0.5 bg-dark-500"></div>
            <span className="text-yellow-400">{d}</span>
          </div>
        </div>
      </div>

      {isUndefined ? (
        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/50 text-center">
          <div className="text-red-400 font-semibold">Cannot solve when b = 0</div>
        </div>
      ) : (
        <>
          {/* Step by step solution */}
          <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 space-y-4">
            {/* Step 1: Cross multiply */}
            <div>
              <div className="text-xs text-dark-500 mb-2">Step 1: Cross-multiply</div>
              <div className="flex items-center justify-center gap-3 font-mono text-lg flex-wrap">
                <span className="text-cyan-400">{a}</span>
                <span className="text-dark-400">×</span>
                <span className="text-yellow-400">{d}</span>
                <span className="text-dark-400">=</span>
                <span className="text-emerald-400">{b}</span>
                <span className="text-dark-400">×</span>
                <span className="text-dark-300">(x {cDisplay})</span>
              </div>
            </div>

            {/* Step 2: Simplify */}
            <div>
              <div className="text-xs text-dark-500 mb-2">Step 2: Simplify</div>
              <div className="flex items-center justify-center gap-3 font-mono text-lg flex-wrap">
                <span className="text-purple-400">{crossLeft}</span>
                <span className="text-dark-400">=</span>
                <span className="text-emerald-400">{b}</span>
                <span className="text-dark-300">(x {cDisplay})</span>
              </div>
            </div>

            {/* Step 3: Divide */}
            <div>
              <div className="text-xs text-dark-500 mb-2">Step 3: Divide by {b}</div>
              <div className="flex items-center justify-center gap-3 font-mono text-lg flex-wrap">
                <span className="text-dark-300">x {cDisplay}</span>
                <span className="text-dark-400">=</span>
                <div className="flex flex-col items-center">
                  <span className="text-purple-400">{crossLeft}</span>
                  <div className="w-6 h-0.5 bg-dark-500"></div>
                  <span className="text-emerald-400">{b}</span>
                </div>
                {crossLeft % b === 0 && (
                  <>
                    <span className="text-dark-400">=</span>
                    <span className="text-purple-400">{crossLeft / b}</span>
                  </>
                )}
              </div>
            </div>

            {/* Step 4: Isolate x */}
            <div>
              <div className="text-xs text-dark-500 mb-2">Step 4: Isolate x (subtract {c})</div>
              <div className="flex items-center justify-center gap-3 font-mono text-lg flex-wrap">
                <span className="text-dark-300">x</span>
                <span className="text-dark-400">=</span>
                {crossLeft % b === 0 ? (
                  <>
                    <span className="text-purple-400">{crossLeft / b}</span>
                    <span className="text-dark-400">{c >= 0 ? '-' : '+'}</span>
                    <span className="text-purple-400">{Math.abs(c)}</span>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center">
                      <span className="text-purple-400">{crossLeft}</span>
                      <div className="w-6 h-0.5 bg-dark-500"></div>
                      <span className="text-emerald-400">{b}</span>
                    </div>
                    <span className="text-dark-400">{c >= 0 ? '-' : '+'}</span>
                    <span className="text-purple-400">{Math.abs(c)}</span>
                  </>
                )}
              </div>
            </div>

            {/* Final answer */}
            <div className="pt-4 border-t border-dark-600">
              <div className="text-xs text-dark-500 mb-2">Solution:</div>
              <div className="flex items-center justify-center gap-3 font-mono text-xl">
                <span className="text-dark-200 font-semibold">x</span>
                <span className="text-dark-400">=</span>
                <div className="p-3 bg-primary-500/20 rounded-lg">
                  {isInteger ? (
                    <span className="text-primary-400 font-bold text-2xl">{finalNum}</span>
                  ) : (
                    <div className="flex flex-col items-center">
                      <span className="text-primary-400 font-bold">{finalNum}</span>
                      <div className="w-8 h-0.5 bg-primary-400"></div>
                      <span className="text-primary-400 font-bold">{finalDen}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Verification */}
          <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <div className="text-xs text-dark-400 mb-2 text-center">Verify: substitute x = {isInteger ? finalNum : `${finalNum}/${finalDen}`}</div>
            <div className="text-center font-mono text-sm text-dark-300">
              LHS: {a}/(({isInteger ? finalNum : `${finalNum}/${finalDen}`}) {cDisplay}) = {a}/{isInteger ? finalNum + c : `${finalNum + c * finalDen}/${finalDen}`} = {b}/{d} ✓
            </div>
          </div>
        </>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        Cross-multiplication: a/b = c/d means ad = bc. Use this to solve equations with fractions.
      </p>
    </div>
  );
}
