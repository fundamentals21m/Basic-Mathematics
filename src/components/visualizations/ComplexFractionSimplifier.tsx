import { useState } from 'react';

export function ComplexFractionSimplifier() {
  // Complex fraction: (a/b) / (c/d)
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [c, setC] = useState(2);
  const [d, setD] = useState(5);

  // (a/b) / (c/d) = (a/b) × (d/c) = ad / bc
  const resultNum = a * d;
  const resultDen = b * c;

  // GCD for reduction
  const gcd = (x: number, y: number): number => {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
      [x, y] = [y, x % y];
    }
    return x;
  };

  const resultGcd = gcd(Math.abs(resultNum), Math.abs(resultDen));
  const reducedNum = resultNum / resultGcd;
  const reducedDen = resultDen / resultGcd;
  const needsReduction = resultGcd > 1;

  const isUndefined = c === 0;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Complex Fraction Simplifier
      </h3>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Numerator fraction */}
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-sm text-dark-400 text-center mb-3">Numerator Fraction</div>
          <div className="space-y-2">
            <div>
              <label className="block text-xs text-dark-500 mb-1">a</label>
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
            <div>
              <label className="block text-xs text-dark-500 mb-1">b</label>
              <input
                type="range"
                min={1}
                max={10}
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-center font-mono text-lg text-cyan-400">{b}</div>
            </div>
          </div>
        </div>

        {/* Denominator fraction */}
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-sm text-dark-400 text-center mb-3">Denominator Fraction</div>
          <div className="space-y-2">
            <div>
              <label className="block text-xs text-dark-500 mb-1">c</label>
              <input
                type="range"
                min={0}
                max={10}
                value={c}
                onChange={(e) => setC(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className={`text-center font-mono text-lg ${c === 0 ? 'text-red-400' : 'text-emerald-400'}`}>{c}</div>
            </div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">d</label>
              <input
                type="range"
                min={1}
                max={10}
                value={d}
                onChange={(e) => setD(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className="text-center font-mono text-lg text-emerald-400">{d}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual complex fraction */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-4">
        <div className="text-center text-sm text-dark-400 mb-3">Complex Fraction:</div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-xl font-mono">
            {/* Numerator */}
            <div className="flex flex-col items-center">
              <span className="text-cyan-400">{a}</span>
              <div className="w-8 h-0.5 bg-cyan-400"></div>
              <span className="text-cyan-400">{b}</span>
            </div>
            {/* Main fraction bar */}
            <div className="w-20 h-1 bg-dark-400 my-2"></div>
            {/* Denominator */}
            <div className="flex flex-col items-center">
              <span className={c === 0 ? 'text-red-400' : 'text-emerald-400'}>{c}</span>
              <div className="w-8 h-0.5 bg-emerald-400"></div>
              <span className="text-emerald-400">{d}</span>
            </div>
          </div>
        </div>
      </div>

      {isUndefined ? (
        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/50 text-center">
          <div className="text-red-400 font-semibold text-lg mb-2">
            Undefined!
          </div>
          <p className="text-dark-400 text-sm">
            Cannot divide by 0/{d} = 0. Division by zero is undefined.
          </p>
        </div>
      ) : (
        <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 space-y-5">
          {/* Step 1 */}
          <div>
            <div className="text-xs text-dark-500 mb-2">Step 1: Rewrite as multiplication by reciprocal</div>
            <div className="flex items-center justify-center gap-4 text-lg font-mono flex-wrap">
              <div className="flex flex-col items-center">
                <span className="text-cyan-400">{a}</span>
                <div className="w-6 h-0.5 bg-cyan-400"></div>
                <span className="text-cyan-400">{b}</span>
              </div>
              <span className="text-dark-400">÷</span>
              <div className="flex flex-col items-center">
                <span className="text-emerald-400">{c}</span>
                <div className="w-6 h-0.5 bg-emerald-400"></div>
                <span className="text-emerald-400">{d}</span>
              </div>
              <span className="text-dark-400">=</span>
              <div className="flex flex-col items-center">
                <span className="text-cyan-400">{a}</span>
                <div className="w-6 h-0.5 bg-cyan-400"></div>
                <span className="text-cyan-400">{b}</span>
              </div>
              <span className="text-dark-400">×</span>
              <div className="flex flex-col items-center p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <span className="text-yellow-400">{d}</span>
                <div className="w-6 h-0.5 bg-yellow-400"></div>
                <span className="text-yellow-400">{c}</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <div className="text-xs text-dark-500 mb-2">Step 2: Multiply fractions</div>
            <div className="flex items-center justify-center gap-4 text-lg font-mono flex-wrap">
              <span className="text-dark-400">=</span>
              <div className="flex flex-col items-center">
                <span>
                  <span className="text-cyan-400">{a}</span>
                  <span className="text-dark-400"> × </span>
                  <span className="text-yellow-400">{d}</span>
                </span>
                <div className="w-full h-0.5 bg-dark-400"></div>
                <span>
                  <span className="text-cyan-400">{b}</span>
                  <span className="text-dark-400"> × </span>
                  <span className="text-yellow-400">{c}</span>
                </span>
              </div>
              <span className="text-dark-400">=</span>
              <div className="flex flex-col items-center">
                <span className="text-purple-400">{resultNum}</span>
                <div className="w-8 h-0.5 bg-purple-400"></div>
                <span className="text-purple-400">{resultDen}</span>
              </div>
            </div>
          </div>

          {/* Step 3: Reduce */}
          {needsReduction && (
            <div>
              <div className="text-xs text-dark-500 mb-2">Step 3: Reduce (÷ GCD of {resultGcd})</div>
              <div className="flex items-center justify-center gap-4 text-lg font-mono">
                <span className="text-dark-400">=</span>
                <div className="flex flex-col items-center p-3 bg-primary-500/20 rounded-lg">
                  <span className="text-primary-400 font-bold text-xl">{reducedNum}</span>
                  {reducedDen !== 1 && (
                    <>
                      <div className="w-10 h-0.5 bg-primary-400"></div>
                      <span className="text-primary-400 font-bold text-xl">{reducedDen}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Final result if no reduction needed */}
          {!needsReduction && (
            <div className="flex items-center justify-center gap-4 text-lg font-mono">
              <span className="text-dark-400">=</span>
              <div className="flex flex-col items-center p-3 bg-primary-500/20 rounded-lg">
                <span className="text-primary-400 font-bold text-xl">{reducedNum}</span>
                {reducedDen !== 1 && (
                  <>
                    <div className="w-10 h-0.5 bg-primary-400"></div>
                    <span className="text-primary-400 font-bold text-xl">{reducedDen}</span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Decimal approximation */}
      {!isUndefined && (
        <div className="mt-4 text-center text-dark-400 text-sm">
          ≈ <span className="font-mono text-primary-400">{(reducedNum / reducedDen).toFixed(4)}</span> (decimal)
        </div>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        To simplify a complex fraction, multiply by the reciprocal: (a/b) ÷ (c/d) = (a/b) × (d/c)
      </p>
    </div>
  );
}
