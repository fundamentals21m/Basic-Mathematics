import { useState } from 'react';

type RationalizeType = 'denominator' | 'numerator';

export function RationalizingDemo() {
  const [type, setType] = useState<RationalizeType>('denominator');
  const [a, setA] = useState(3); // Numerator constant (for denominator) or constant outside sqrt (for numerator)
  const [b, setB] = useState(2); // First term in denominator/numerator
  const [c, setC] = useState(5); // Number under square root

  const sqrtC = Math.sqrt(c);

  // For denominator: a / (b + √c)
  // Conjugate: b - √c
  // Result: a(b - √c) / (b² - c)
  const denomOriginal = b + sqrtC;
  const denomSquared = b * b - c;

  // For numerator: (√(x+h) - √x) / h pattern
  // Simplified demo: (√c - b) / a
  // Conjugate: √c + b
  // Result: (c - b²) / (a(√c + b))
  const numOriginal = sqrtC - b;
  const numSquaredDiff = c - b * b;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Rationalizing Demo
      </h3>

      {/* Type selector */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setType('denominator')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            type === 'denominator'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Rationalize Denominator
        </button>
        <button
          onClick={() => setType('numerator')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            type === 'numerator'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Rationalize Numerator
        </button>
      </div>

      {/* Value inputs */}
      <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">
            {type === 'denominator' ? 'Numerator' : 'Denominator'}
          </label>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{a}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">b</label>
          <input
            type="range"
            min={1}
            max={6}
            step={1}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-lg text-emerald-400">{b}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">√c (c)</label>
          <input
            type="range"
            min={2}
            max={10}
            step={1}
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{c}</div>
        </div>
      </div>

      {type === 'denominator' && (
        <>
          {/* Original expression */}
          <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-4 text-center">
            <div className="text-dark-500 text-sm mb-2">Original Expression</div>
            <div className="font-mono text-2xl text-dark-200">
              <span className="text-cyan-400">{a}</span>
              <span className="mx-1">/</span>
              (<span className="text-emerald-400">{b}</span> + √<span className="text-purple-400">{c}</span>)
            </div>
            <div className="text-dark-500 text-sm mt-2">
              ≈ {(a / denomOriginal).toFixed(4)}
            </div>
          </div>

          {/* Step-by-step */}
          <div className="space-y-4">
            {/* Step 1: Identify conjugate */}
            <div className="p-4 rounded-lg bg-dark-800/40">
              <div className="text-primary-400 font-semibold text-sm mb-2">Step 1: Identify the Conjugate</div>
              <div className="text-dark-300">
                The conjugate of (<span className="text-emerald-400">{b}</span> + √<span className="text-purple-400">{c}</span>)
                is (<span className="text-emerald-400">{b}</span> − √<span className="text-purple-400">{c}</span>)
              </div>
            </div>

            {/* Step 2: Multiply */}
            <div className="p-4 rounded-lg bg-dark-800/40">
              <div className="text-cyan-400 font-semibold text-sm mb-2">Step 2: Multiply by Conjugate/Conjugate</div>
              <div className="font-mono text-dark-300 text-center">
                <div className="text-cyan-400">{a}</div>
                <div className="border-t border-dark-600 my-1">
                  (<span className="text-emerald-400">{b}</span> + √<span className="text-purple-400">{c}</span>)
                </div>
                <span className="mx-2">×</span>
                <div className="inline-block">
                  <div>(<span className="text-emerald-400">{b}</span> − √<span className="text-purple-400">{c}</span>)</div>
                  <div className="border-t border-dark-600 my-1">
                    (<span className="text-emerald-400">{b}</span> − √<span className="text-purple-400">{c}</span>)
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Simplify denominator */}
            <div className="p-4 rounded-lg bg-dark-800/40">
              <div className="text-emerald-400 font-semibold text-sm mb-2">Step 3: Simplify Denominator (Difference of Squares)</div>
              <div className="text-dark-300 space-y-1">
                <div className="font-mono">
                  ({b} + √{c})({b} − √{c}) = {b}² − (√{c})² = {b * b} − {c} = <span className="text-yellow-400 font-bold">{denomSquared}</span>
                </div>
              </div>
            </div>

            {/* Step 4: Final result */}
            <div className="p-4 rounded-lg bg-primary-500/10 border border-primary-500/30">
              <div className="text-primary-400 font-semibold text-sm mb-2">Final Result</div>
              <div className="font-mono text-xl text-center">
                <span className="text-cyan-400">{a}</span>(<span className="text-emerald-400">{b}</span> − √<span className="text-purple-400">{c}</span>)
                <span className="mx-2">/</span>
                <span className="text-yellow-400">{denomSquared}</span>
              </div>
              {denomSquared !== 0 && (
                <div className="text-dark-400 text-sm text-center mt-2">
                  = ({a * b} − {a}√{c}) / {denomSquared}
                  {Math.abs(denomSquared) === 1 && (
                    <span> = {denomSquared === 1 ? '' : '−'}({a * b} − {a}√{c})</span>
                  )}
                </div>
              )}
              {denomSquared === 0 && (
                <div className="text-red-400 text-sm text-center mt-2">
                  ⚠️ Denominator is 0! (b² = c)
                </div>
              )}
            </div>
          </div>

          {/* Verification */}
          {denomSquared !== 0 && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <div className="text-sm text-dark-400">Verify: Both ≈ <span className="text-emerald-400 font-mono">{(a / denomOriginal).toFixed(6)}</span></div>
            </div>
          )}
        </>
      )}

      {type === 'numerator' && (
        <>
          {/* Original expression */}
          <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-4 text-center">
            <div className="text-dark-500 text-sm mb-2">Original Expression</div>
            <div className="font-mono text-2xl text-dark-200">
              (√<span className="text-purple-400">{c}</span> − <span className="text-emerald-400">{b}</span>)
              <span className="mx-1">/</span>
              <span className="text-cyan-400">{a}</span>
            </div>
            <div className="text-dark-500 text-sm mt-2">
              ≈ {(numOriginal / a).toFixed(4)}
            </div>
          </div>

          {/* Step-by-step */}
          <div className="space-y-4">
            {/* Step 1: Identify conjugate */}
            <div className="p-4 rounded-lg bg-dark-800/40">
              <div className="text-primary-400 font-semibold text-sm mb-2">Step 1: Identify the Conjugate</div>
              <div className="text-dark-300">
                The conjugate of (√<span className="text-purple-400">{c}</span> − <span className="text-emerald-400">{b}</span>)
                is (√<span className="text-purple-400">{c}</span> + <span className="text-emerald-400">{b}</span>)
              </div>
            </div>

            {/* Step 2: Multiply */}
            <div className="p-4 rounded-lg bg-dark-800/40">
              <div className="text-cyan-400 font-semibold text-sm mb-2">Step 2: Multiply by Conjugate/Conjugate</div>
              <div className="font-mono text-dark-300 text-center">
                <div>(√<span className="text-purple-400">{c}</span> − <span className="text-emerald-400">{b}</span>)</div>
                <div className="border-t border-dark-600 my-1">
                  <span className="text-cyan-400">{a}</span>
                </div>
                <span className="mx-2">×</span>
                <div className="inline-block">
                  <div>(√<span className="text-purple-400">{c}</span> + <span className="text-emerald-400">{b}</span>)</div>
                  <div className="border-t border-dark-600 my-1">
                    (√<span className="text-purple-400">{c}</span> + <span className="text-emerald-400">{b}</span>)
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Simplify numerator */}
            <div className="p-4 rounded-lg bg-dark-800/40">
              <div className="text-emerald-400 font-semibold text-sm mb-2">Step 3: Simplify Numerator (Difference of Squares)</div>
              <div className="text-dark-300 space-y-1">
                <div className="font-mono">
                  (√{c} − {b})(√{c} + {b}) = (√{c})² − {b}² = {c} − {b * b} = <span className="text-yellow-400 font-bold">{numSquaredDiff}</span>
                </div>
              </div>
            </div>

            {/* Step 4: Final result */}
            <div className="p-4 rounded-lg bg-primary-500/10 border border-primary-500/30">
              <div className="text-primary-400 font-semibold text-sm mb-2">Final Result</div>
              <div className="font-mono text-xl text-center">
                <span className="text-yellow-400">{numSquaredDiff}</span>
                <span className="mx-2">/</span>
                <span className="text-cyan-400">{a}</span>(√<span className="text-purple-400">{c}</span> + <span className="text-emerald-400">{b}</span>)
              </div>
              <div className="text-dark-400 text-sm text-center mt-2">
                No square roots in numerator!
              </div>
            </div>
          </div>

          {/* Verification */}
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
            <div className="text-sm text-dark-400">Verify: Both ≈ <span className="text-emerald-400 font-mono">{(numOriginal / a).toFixed(6)}</span></div>
          </div>
        </>
      )}

      {/* Key insight */}
      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 text-center">
          <strong>Key:</strong> (a + √b)(a − √b) = a² − b eliminates the square root!
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Multiply by the conjugate to eliminate square roots.
      </p>
    </div>
  );
}
