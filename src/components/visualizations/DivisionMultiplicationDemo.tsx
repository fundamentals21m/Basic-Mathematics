import { useState } from 'react';

export function DivisionMultiplicationDemo() {
  const [dividend, setDividend] = useState(6);
  const [divisorNum, setDivisorNum] = useState(2);
  const [divisorDen, setDivisorDen] = useState(3);

  // Calculate division as multiplication by reciprocal
  // a ÷ (m/n) = a × (n/m)
  const resultNum = dividend * divisorDen;
  const resultDen = divisorNum;

  // GCD for reduction
  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const resultGcd = gcd(Math.abs(resultNum), Math.abs(resultDen));
  const reducedNum = resultNum / resultGcd;
  const reducedDen = resultDen / resultGcd;
  const needsReduction = resultGcd > 1;

  const isUndefined = divisorNum === 0;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Division as Multiplication
      </h3>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Dividend */}
        <div className="space-y-3">
          <div className="text-sm text-dark-400 text-center">Dividend (a)</div>
          <div>
            <input
              type="range"
              min={1}
              max={12}
              value={dividend}
              onChange={(e) => setDividend(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
            <div className="text-center font-mono text-2xl text-cyan-400">{dividend}</div>
          </div>
        </div>

        {/* Divisor */}
        <div className="space-y-3">
          <div className="text-sm text-dark-400 text-center">Divisor (b)</div>
          <div>
            <label className="block text-xs text-dark-500 mb-1">Numerator</label>
            <input
              type="range"
              min={0}
              max={10}
              value={divisorNum}
              onChange={(e) => setDivisorNum(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <div className="text-center font-mono text-lg text-emerald-400">{divisorNum}</div>
          </div>
          <div>
            <label className="block text-xs text-dark-500 mb-1">Denominator</label>
            <input
              type="range"
              min={1}
              max={10}
              value={divisorDen}
              onChange={(e) => setDivisorDen(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <div className="text-center font-mono text-lg text-emerald-400">{divisorDen}</div>
          </div>
        </div>
      </div>

      {isUndefined ? (
        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/50 text-center">
          <div className="text-red-400 font-semibold text-lg mb-2">
            Cannot divide by zero!
          </div>
          <p className="text-dark-400 text-sm">
            Division by zero is undefined because zero has no reciprocal.
          </p>
        </div>
      ) : (
        <>
          {/* Three equivalent expressions */}
          <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 space-y-6">
            {/* Division form */}
            <div className="text-center">
              <div className="text-xs text-dark-500 mb-2">Division Form</div>
              <div className="flex items-center justify-center gap-3 text-xl font-mono">
                <span className="text-cyan-400 text-2xl">{dividend}</span>
                <span className="text-dark-400">÷</span>
                <div className="flex flex-col items-center">
                  <span className="text-emerald-400">{divisorNum}</span>
                  <div className="w-6 h-0.5 bg-emerald-400"></div>
                  <span className="text-emerald-400">{divisorDen}</span>
                </div>
              </div>
            </div>

            {/* Equals sign */}
            <div className="text-center text-2xl text-primary-400">=</div>

            {/* Multiplication by reciprocal (notation) */}
            <div className="text-center">
              <div className="text-xs text-dark-500 mb-2">Multiply by Reciprocal</div>
              <div className="flex items-center justify-center gap-3 text-xl font-mono">
                <span className="text-cyan-400 text-2xl">{dividend}</span>
                <span className="text-dark-400">×</span>
                <div className="flex flex-col items-center p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <span className="text-yellow-400">{divisorDen}</span>
                  <div className="w-6 h-0.5 bg-yellow-400"></div>
                  <span className="text-yellow-400">{divisorNum}</span>
                </div>
              </div>
              <div className="text-xs text-dark-500 mt-1">
                (reciprocal of {divisorNum}/{divisorDen})
              </div>
            </div>

            {/* Equals sign */}
            <div className="text-center text-2xl text-primary-400">=</div>

            {/* Result */}
            <div className="text-center">
              <div className="text-xs text-dark-500 mb-2">Result</div>
              <div className="flex items-center justify-center gap-3 text-xl font-mono">
                <div className="flex flex-col items-center">
                  <span className="text-purple-400">{dividend} × {divisorDen}</span>
                  <div className="w-full h-0.5 bg-purple-400"></div>
                  <span className="text-purple-400">{divisorNum}</span>
                </div>
                <span className="text-dark-400">=</span>
                <div className="flex flex-col items-center">
                  <span className="text-purple-400">{resultNum}</span>
                  <div className="w-8 h-0.5 bg-purple-400"></div>
                  <span className="text-purple-400">{resultDen}</span>
                </div>
                {needsReduction && (
                  <>
                    <span className="text-dark-400">=</span>
                    <div className="flex flex-col items-center p-2 bg-primary-500/20 rounded-lg">
                      <span className="text-primary-400 font-bold">{reducedNum}</span>
                      {reducedDen !== 1 && (
                        <>
                          <div className="w-8 h-0.5 bg-primary-400"></div>
                          <span className="text-primary-400 font-bold">{reducedDen}</span>
                        </>
                      )}
                    </div>
                  </>
                )}
                {!needsReduction && reducedDen === 1 && (
                  <>
                    <span className="text-dark-400">=</span>
                    <div className="p-2 bg-primary-500/20 rounded-lg">
                      <span className="text-primary-400 font-bold text-2xl">{reducedNum}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Decimal */}
          <div className="mt-4 text-center text-dark-400 text-sm">
            ≈ <span className="font-mono text-primary-400">{(reducedNum / reducedDen).toFixed(4)}</span> (decimal)
          </div>
        </>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        Division by b is the same as multiplication by b⁻¹ (the reciprocal of b).
      </p>
    </div>
  );
}
