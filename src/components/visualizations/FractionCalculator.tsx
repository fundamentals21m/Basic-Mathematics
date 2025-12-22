import { useState } from 'react';

type Operation = 'add' | 'multiply';

export function FractionCalculator() {
  const [num1, setNum1] = useState(2);
  const [den1, setDen1] = useState(3);
  const [num2, setNum2] = useState(3);
  const [den2, setDen2] = useState(4);
  const [operation, setOperation] = useState<Operation>('add');

  // GCD function for reducing
  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  // Calculate results
  let resultNum: number;
  let resultDen: number;

  if (operation === 'add') {
    // a/b + c/d = (ad + bc) / bd
    resultNum = num1 * den2 + num2 * den1;
    resultDen = den1 * den2;
  } else {
    // a/b × c/d = ac / bd
    resultNum = num1 * num2;
    resultDen = den1 * den2;
  }

  // Reduce the result
  const resultGcd = gcd(resultNum, resultDen);
  const reducedNum = resultNum / resultGcd;
  const reducedDen = resultDen / resultGcd;
  const needsReduction = resultGcd > 1;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Fraction Calculator
      </h3>

      {/* Operation selector */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setOperation('add')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            operation === 'add'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Addition
        </button>
        <button
          onClick={() => setOperation('multiply')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            operation === 'multiply'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Multiplication
        </button>
      </div>

      {/* Fraction inputs */}
      <div className="grid grid-cols-2 gap-8 mb-6">
        {/* First fraction */}
        <div className="space-y-3">
          <div className="text-sm text-dark-400 text-center">First Fraction</div>
          <div>
            <label className="block text-xs text-dark-500 mb-1">Numerator</label>
            <input
              type="range"
              min={1}
              max={10}
              value={num1}
              onChange={(e) => setNum1(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
            <div className="text-center font-mono text-lg text-cyan-400">{num1}</div>
          </div>
          <div>
            <label className="block text-xs text-dark-500 mb-1">Denominator</label>
            <input
              type="range"
              min={1}
              max={10}
              value={den1}
              onChange={(e) => setDen1(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
            <div className="text-center font-mono text-lg text-cyan-400">{den1}</div>
          </div>
        </div>

        {/* Second fraction */}
        <div className="space-y-3">
          <div className="text-sm text-dark-400 text-center">Second Fraction</div>
          <div>
            <label className="block text-xs text-dark-500 mb-1">Numerator</label>
            <input
              type="range"
              min={1}
              max={10}
              value={num2}
              onChange={(e) => setNum2(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <div className="text-center font-mono text-lg text-emerald-400">{num2}</div>
          </div>
          <div>
            <label className="block text-xs text-dark-500 mb-1">Denominator</label>
            <input
              type="range"
              min={1}
              max={10}
              value={den2}
              onChange={(e) => setDen2(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <div className="text-center font-mono text-lg text-emerald-400">{den2}</div>
          </div>
        </div>
      </div>

      {/* Step-by-step calculation */}
      <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 space-y-4">
        {operation === 'add' ? (
          <>
            {/* Addition steps */}
            <div className="text-center text-dark-400 text-sm">Step-by-step addition:</div>

            {/* Original expression */}
            <div className="flex items-center justify-center gap-4 text-xl font-mono flex-wrap">
              <div className="flex flex-col items-center">
                <span className="text-cyan-400">{num1}</span>
                <div className="w-6 h-0.5 bg-cyan-400"></div>
                <span className="text-cyan-400">{den1}</span>
              </div>
              <span className="text-dark-400">+</span>
              <div className="flex flex-col items-center">
                <span className="text-emerald-400">{num2}</span>
                <div className="w-6 h-0.5 bg-emerald-400"></div>
                <span className="text-emerald-400">{den2}</span>
              </div>
            </div>

            {/* Cross-multiply step */}
            <div className="flex items-center justify-center gap-4 text-lg font-mono flex-wrap">
              <span className="text-dark-400">=</span>
              <div className="flex flex-col items-center">
                <span>
                  <span className="text-cyan-400">{num1}</span>
                  <span className="text-dark-400">×</span>
                  <span className="text-emerald-400">{den2}</span>
                  <span className="text-dark-400"> + </span>
                  <span className="text-emerald-400">{num2}</span>
                  <span className="text-dark-400">×</span>
                  <span className="text-cyan-400">{den1}</span>
                </span>
                <div className="w-full h-0.5 bg-dark-400"></div>
                <span>
                  <span className="text-cyan-400">{den1}</span>
                  <span className="text-dark-400">×</span>
                  <span className="text-emerald-400">{den2}</span>
                </span>
              </div>
            </div>

            {/* Compute */}
            <div className="flex items-center justify-center gap-4 text-lg font-mono flex-wrap">
              <span className="text-dark-400">=</span>
              <div className="flex flex-col items-center">
                <span>
                  <span className="text-purple-400">{num1 * den2}</span>
                  <span className="text-dark-400"> + </span>
                  <span className="text-purple-400">{num2 * den1}</span>
                </span>
                <div className="w-full h-0.5 bg-dark-400"></div>
                <span className="text-purple-400">{den1 * den2}</span>
              </div>
              <span className="text-dark-400">=</span>
              <div className="flex flex-col items-center">
                <span className="text-yellow-400">{resultNum}</span>
                <div className="w-8 h-0.5 bg-yellow-400"></div>
                <span className="text-yellow-400">{resultDen}</span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Multiplication steps */}
            <div className="text-center text-dark-400 text-sm">Step-by-step multiplication:</div>

            {/* Original expression */}
            <div className="flex items-center justify-center gap-4 text-xl font-mono flex-wrap">
              <div className="flex flex-col items-center">
                <span className="text-cyan-400">{num1}</span>
                <div className="w-6 h-0.5 bg-cyan-400"></div>
                <span className="text-cyan-400">{den1}</span>
              </div>
              <span className="text-dark-400">×</span>
              <div className="flex flex-col items-center">
                <span className="text-emerald-400">{num2}</span>
                <div className="w-6 h-0.5 bg-emerald-400"></div>
                <span className="text-emerald-400">{den2}</span>
              </div>
            </div>

            {/* Multiply step */}
            <div className="flex items-center justify-center gap-4 text-lg font-mono flex-wrap">
              <span className="text-dark-400">=</span>
              <div className="flex flex-col items-center">
                <span>
                  <span className="text-cyan-400">{num1}</span>
                  <span className="text-dark-400">×</span>
                  <span className="text-emerald-400">{num2}</span>
                </span>
                <div className="w-full h-0.5 bg-dark-400"></div>
                <span>
                  <span className="text-cyan-400">{den1}</span>
                  <span className="text-dark-400">×</span>
                  <span className="text-emerald-400">{den2}</span>
                </span>
              </div>
              <span className="text-dark-400">=</span>
              <div className="flex flex-col items-center">
                <span className="text-yellow-400">{resultNum}</span>
                <div className="w-8 h-0.5 bg-yellow-400"></div>
                <span className="text-yellow-400">{resultDen}</span>
              </div>
            </div>
          </>
        )}

        {/* Final result with reduction */}
        {needsReduction && (
          <div className="flex items-center justify-center gap-4 text-lg font-mono pt-2 border-t border-dark-600 flex-wrap">
            <span className="text-dark-400">=</span>
            <div className="flex flex-col items-center p-2 bg-primary-500/20 rounded-lg">
              <span className="text-primary-400 font-bold">{reducedNum}</span>
              <div className="w-8 h-0.5 bg-primary-400"></div>
              <span className="text-primary-400 font-bold">{reducedDen}</span>
            </div>
            <span className="text-sm text-dark-500">(÷{resultGcd})</span>
          </div>
        )}
      </div>

      {/* Decimal approximation */}
      <div className="mt-4 text-center text-dark-400 text-sm">
        ≈ <span className="font-mono text-primary-400">{(reducedNum / reducedDen).toFixed(4)}</span> (decimal)
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        {operation === 'add'
          ? 'For addition: cross-multiply, then add numerators over common denominator.'
          : 'For multiplication: multiply numerators, multiply denominators.'}
      </p>
    </div>
  );
}
