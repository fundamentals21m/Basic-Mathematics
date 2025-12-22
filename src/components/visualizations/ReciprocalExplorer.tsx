import { useState } from 'react';

export function ReciprocalExplorer() {
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(4);

  const isZero = numerator === 0;
  const reciprocalNum = denominator;
  const reciprocalDen = numerator;

  // Calculate the product to verify it equals 1
  const productNum = numerator * reciprocalNum;
  const productDen = denominator * reciprocalDen;

  // GCD for simplification
  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const productGcd = !isZero ? gcd(productNum, productDen) : 1;
  const simplifiedProduct = !isZero ? productNum / productGcd : 0;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Reciprocal Explorer
      </h3>

      {/* Fraction input */}
      <div className="max-w-xs mx-auto mb-6">
        <div className="text-sm text-dark-400 text-center mb-3">Choose a fraction:</div>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-dark-500 mb-1">Numerator (m)</label>
            <input
              type="range"
              min={-12}
              max={12}
              value={numerator}
              onChange={(e) => setNumerator(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
            <div className="text-center font-mono text-lg text-cyan-400">{numerator}</div>
          </div>
          <div>
            <label className="block text-xs text-dark-500 mb-1">Denominator (n)</label>
            <input
              type="range"
              min={1}
              max={12}
              value={denominator}
              onChange={(e) => setDenominator(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
            <div className="text-center font-mono text-lg text-cyan-400">{denominator}</div>
          </div>
        </div>
      </div>

      {/* Visual display */}
      <div className="flex items-center justify-center gap-6 mb-6">
        {/* Original fraction */}
        <div className="text-center">
          <div className="text-xs text-dark-500 mb-2">Original (a)</div>
          <div className="flex flex-col items-center text-2xl font-mono">
            <span className="text-cyan-400">{numerator}</span>
            <div className="w-10 h-0.5 bg-cyan-400"></div>
            <span className="text-cyan-400">{denominator}</span>
          </div>
        </div>

        {/* Arrow */}
        <div className="text-dark-500 text-2xl">→</div>

        {/* Reciprocal */}
        <div className="text-center">
          <div className="text-xs text-dark-500 mb-2">Reciprocal (a⁻¹)</div>
          {isZero ? (
            <div className="text-red-400 text-lg font-semibold">
              Undefined!
            </div>
          ) : (
            <div className="flex flex-col items-center text-2xl font-mono">
              <span className="text-emerald-400">{reciprocalNum}</span>
              <div className="w-10 h-0.5 bg-emerald-400"></div>
              <span className="text-emerald-400">{reciprocalDen}</span>
            </div>
          )}
        </div>
      </div>

      {/* Verification */}
      <div className={`p-6 rounded-xl border ${
        isZero
          ? 'bg-red-500/10 border-red-500/50'
          : 'bg-emerald-500/10 border-emerald-500/50'
      }`}>
        {isZero ? (
          <div className="text-center">
            <div className="text-red-400 font-semibold text-lg mb-2">
              Zero has no reciprocal!
            </div>
            <p className="text-dark-400 text-sm">
              There is no number x such that 0 × x = 1.
              <br />
              Any number times zero equals zero, never 1.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center text-dark-400 text-sm mb-3">
              Verification: a × a⁻¹ = 1
            </div>
            <div className="flex items-center justify-center gap-3 text-xl font-mono flex-wrap">
              {/* a */}
              <div className="flex flex-col items-center">
                <span className="text-cyan-400">{numerator}</span>
                <div className="w-6 h-0.5 bg-cyan-400"></div>
                <span className="text-cyan-400">{denominator}</span>
              </div>
              <span className="text-dark-400">×</span>
              {/* a⁻¹ */}
              <div className="flex flex-col items-center">
                <span className="text-emerald-400">{reciprocalNum}</span>
                <div className="w-6 h-0.5 bg-emerald-400"></div>
                <span className="text-emerald-400">{reciprocalDen}</span>
              </div>
              <span className="text-dark-400">=</span>
              {/* Product */}
              <div className="flex flex-col items-center">
                <span className="text-purple-400">{productNum}</span>
                <div className="w-8 h-0.5 bg-purple-400"></div>
                <span className="text-purple-400">{productDen}</span>
              </div>
              <span className="text-dark-400">=</span>
              {/* Simplified */}
              <div className="p-2 bg-primary-500/20 rounded-lg">
                <span className="text-primary-400 text-2xl font-bold">{simplifiedProduct}</span>
              </div>
            </div>
            <div className="text-center text-emerald-400 font-semibold mt-3">
              ✓ The product equals 1
            </div>
          </>
        )}
      </div>

      {/* Special cases */}
      <div className="mt-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 mb-2">Special cases:</div>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <button
            onClick={() => { setNumerator(1); setDenominator(1); }}
            className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
          >
            <div className="text-dark-300">1 → 1</div>
            <div className="text-xs text-dark-500">Self-inverse</div>
          </button>
          <button
            onClick={() => { setNumerator(-1); setDenominator(1); }}
            className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
          >
            <div className="text-dark-300">-1 → -1</div>
            <div className="text-xs text-dark-500">Self-inverse</div>
          </button>
          <button
            onClick={() => { setNumerator(0); setDenominator(1); }}
            className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
          >
            <div className="text-red-400">0 → ?</div>
            <div className="text-xs text-dark-500">No inverse</div>
          </button>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        The reciprocal of m/n is n/m. Multiplying a number by its reciprocal always gives 1.
      </p>
    </div>
  );
}
