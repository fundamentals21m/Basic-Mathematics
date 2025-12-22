import { useState, useMemo } from 'react';

export function FractionReducer() {
  const [numerator, setNumerator] = useState(24);
  const [denominator, setDenominator] = useState(36);

  // Calculate GCD using Euclidean algorithm
  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  // Find all common divisors
  const commonDivisors = useMemo(() => {
    const divisors: number[] = [];
    const absNum = Math.abs(numerator);
    const absDen = Math.abs(denominator);
    const smaller = Math.min(absNum, absDen);

    for (let i = 1; i <= smaller; i++) {
      if (absNum % i === 0 && absDen % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }, [numerator, denominator]);

  const gcdValue = gcd(numerator, denominator);
  const reducedNum = numerator / gcdValue;
  const reducedDen = denominator / gcdValue;
  const isAlreadyReduced = gcdValue === 1;

  // Factor display
  const factorize = (n: number): number[] => {
    if (n === 0) return [0];
    const factors: number[] = [];
    let num = Math.abs(n);
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        factors.push(i);
        num /= i;
      }
    }
    return factors.length > 0 ? factors : [Math.abs(n)];
  };

  const numFactors = factorize(numerator);
  const denFactors = factorize(denominator);

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Fraction Reducer
      </h3>

      {/* Input sliders */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">Numerator</label>
          <input
            type="range"
            min={1}
            max={60}
            value={numerator}
            onChange={(e) => setNumerator(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-2xl text-cyan-400">{numerator}</div>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Denominator</label>
          <input
            type="range"
            min={1}
            max={60}
            value={denominator}
            onChange={(e) => setDenominator(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-2xl text-emerald-400">{denominator}</div>
        </div>
      </div>

      {/* Visual reduction */}
      <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {/* Original fraction */}
          <div className="flex flex-col items-center">
            <span className="text-3xl font-mono text-cyan-400">{numerator}</span>
            <div className="w-12 h-1 bg-dark-400 my-1"></div>
            <span className="text-3xl font-mono text-emerald-400">{denominator}</span>
          </div>

          {!isAlreadyReduced && (
            <>
              <span className="text-2xl text-dark-400">=</span>

              {/* Factored form */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 font-mono">{gcdValue}</span>
                  <span className="text-dark-400">×</span>
                  <span className="text-cyan-400 font-mono">{reducedNum}</span>
                </div>
                <div className="w-16 h-1 bg-dark-400 my-1"></div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 font-mono">{gcdValue}</span>
                  <span className="text-dark-400">×</span>
                  <span className="text-emerald-400 font-mono">{reducedDen}</span>
                </div>
              </div>

              <span className="text-2xl text-dark-400">=</span>
            </>
          )}

          {/* Reduced fraction */}
          <div className={`flex flex-col items-center p-3 rounded-lg ${
            isAlreadyReduced ? 'bg-emerald-500/20' : 'bg-primary-500/20'
          }`}>
            <span className={`text-3xl font-mono font-bold ${isAlreadyReduced ? 'text-emerald-400' : 'text-primary-400'}`}>
              {reducedNum}
            </span>
            <div className={`w-12 h-1 my-1 ${isAlreadyReduced ? 'bg-emerald-400' : 'bg-primary-400'}`}></div>
            <span className={`text-3xl font-mono font-bold ${isAlreadyReduced ? 'text-emerald-400' : 'text-primary-400'}`}>
              {reducedDen}
            </span>
          </div>
        </div>

        {isAlreadyReduced ? (
          <div className="text-center mt-4 text-emerald-400">
            Already in lowest form! (GCD = 1)
          </div>
        ) : (
          <div className="text-center mt-4 text-dark-300">
            Divide both by <span className="text-yellow-400 font-bold">GCD = {gcdValue}</span>
          </div>
        )}
      </div>

      {/* Prime factorization */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-3 rounded-lg bg-dark-800/30">
          <div className="text-sm text-dark-400 mb-2">Prime factors of {numerator}:</div>
          <div className="font-mono text-cyan-400">
            {numerator === 1 ? '1' : numFactors.join(' × ')}
          </div>
        </div>
        <div className="p-3 rounded-lg bg-dark-800/30">
          <div className="text-sm text-dark-400 mb-2">Prime factors of {denominator}:</div>
          <div className="font-mono text-emerald-400">
            {denominator === 1 ? '1' : denFactors.join(' × ')}
          </div>
        </div>
      </div>

      {/* Common divisors */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 mb-3">
          Common divisors of {numerator} and {denominator}:
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {commonDivisors.map((d) => (
            <span
              key={d}
              className={`px-3 py-1 rounded-lg font-mono text-sm ${
                d === gcdValue
                  ? 'bg-yellow-500/30 text-yellow-400 font-bold ring-2 ring-yellow-500/50'
                  : 'bg-dark-700 text-dark-300'
              }`}
            >
              {d}
              {d === gcdValue && ' (GCD)'}
            </span>
          ))}
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        A fraction is in lowest form when GCD(numerator, denominator) = 1.
      </p>
    </div>
  );
}
