import { useState } from 'react';

export function FractionalExponentDemo() {
  const [base, setBase] = useState(8);
  const [numerator, setNumerator] = useState(2);
  const [denominator, setDenominator] = useState(3);

  const result = Math.pow(base, numerator / denominator);

  // Method 1: (a^(1/n))^m - root first, then power
  const nthRoot = Math.pow(base, 1 / denominator);
  const method1 = Math.pow(nthRoot, numerator);

  // Method 2: (a^m)^(1/n) - power first, then root
  const powered = Math.pow(base, numerator);
  const method2 = Math.pow(powered, 1 / denominator);

  // Check if results are integers
  const isResultInteger = Math.abs(result - Math.round(result)) < 0.0001;
  const isNthRootInteger = Math.abs(nthRoot - Math.round(nthRoot)) < 0.0001;

  // Simplify fraction display
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const g = gcd(Math.abs(numerator), Math.abs(denominator));
  const simplifiedNum = numerator / g;
  const simplifiedDen = denominator / g;
  const isSimplified = g === 1;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Fractional Exponent Demo
      </h3>

      {/* Input controls */}
      <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">Base (a)</label>
          <input
            type="range"
            min={1}
            max={32}
            step={1}
            value={base}
            onChange={(e) => setBase(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-xl text-cyan-400">{base}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">m (power)</label>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={numerator}
            onChange={(e) => setNumerator(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-xl text-emerald-400">{numerator}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">n (root)</label>
          <input
            type="range"
            min={2}
            max={5}
            step={1}
            value={denominator}
            onChange={(e) => setDenominator(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-xl text-purple-400">{denominator}</div>
        </div>
      </div>

      {/* Main expression */}
      <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700 mb-4 text-center">
        <div className="font-mono text-2xl mb-2">
          <span className="text-cyan-400">{base}</span>
          <sup>
            <span className="text-emerald-400">{numerator}</span>
            <span className="text-dark-400">/</span>
            <span className="text-purple-400">{denominator}</span>
          </sup>
          <span className="text-dark-500 mx-3">=</span>
          <span className="text-primary-400 font-bold text-3xl">
            {isResultInteger ? Math.round(result) : result.toFixed(4)}
          </span>
        </div>
        {!isSimplified && (
          <div className="text-dark-500 text-sm">
            (simplified: {base}<sup>{simplifiedNum}/{simplifiedDen}</sup>)
          </div>
        )}
      </div>

      {/* Two methods comparison */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* Method 1: Root first */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <div className="text-emerald-400 font-semibold text-sm mb-3">
            Method 1: Root First
          </div>
          <div className="space-y-2 font-mono text-sm">
            <div className="text-dark-300">
              ({base}<sup>1/{denominator}</sup>)<sup>{numerator}</sup>
            </div>
            <div className="text-dark-400">
              Step 1: {denominator === 2 ? '√' : `ⁿ√`}{base} = {isNthRootInteger ? Math.round(nthRoot) : nthRoot.toFixed(4)}
            </div>
            <div className="text-dark-400">
              Step 2: ({isNthRootInteger ? Math.round(nthRoot) : nthRoot.toFixed(4)})<sup>{numerator}</sup> = {isResultInteger ? Math.round(method1) : method1.toFixed(4)}
            </div>
            <div className="text-emerald-400 font-bold">
              = {isResultInteger ? Math.round(method1) : method1.toFixed(4)}
            </div>
          </div>
        </div>

        {/* Method 2: Power first */}
        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
          <div className="text-purple-400 font-semibold text-sm mb-3">
            Method 2: Power First
          </div>
          <div className="space-y-2 font-mono text-sm">
            <div className="text-dark-300">
              ({base}<sup>{numerator}</sup>)<sup>1/{denominator}</sup>
            </div>
            <div className="text-dark-400">
              Step 1: {base}<sup>{numerator}</sup> = {powered}
            </div>
            <div className="text-dark-400">
              Step 2: {denominator === 2 ? '√' : `ⁿ√`}{powered} = {isResultInteger ? Math.round(method2) : method2.toFixed(4)}
            </div>
            <div className="text-purple-400 font-bold">
              = {isResultInteger ? Math.round(method2) : method2.toFixed(4)}
            </div>
          </div>
        </div>
      </div>

      {/* Both methods equal */}
      <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/30 text-center mb-4">
        <span className="text-primary-400 font-semibold">
          ✓ Both methods give the same result!
        </span>
      </div>

      {/* Formula reference */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-center text-sm">
          <div className="text-dark-400 mb-2">The key formula:</div>
          <div className="font-mono text-dark-200">
            a<sup>m/n</sup> = (a<sup>1/n</sup>)<sup>m</sup> = (a<sup>m</sup>)<sup>1/n</sup>
          </div>
          <div className="text-dark-500 mt-2">
            "Take the n-th root, then raise to power m" OR "Raise to power m, then take n-th root"
          </div>
        </div>
      </div>

      {/* Preset examples */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {[
          { base: 8, num: 2, den: 3, label: '8^(2/3)' },
          { base: 27, num: 2, den: 3, label: '27^(2/3)' },
          { base: 4, num: 3, den: 2, label: '4^(3/2)' },
          { base: 16, num: 3, den: 4, label: '16^(3/4)' },
          { base: 32, num: 2, den: 5, label: '32^(2/5)' },
        ].map((preset, idx) => (
          <button
            key={idx}
            onClick={() => {
              setBase(preset.base);
              setNumerator(preset.num);
              setDenominator(preset.den);
            }}
            className={`px-3 py-1 rounded text-sm transition-all ${
              base === preset.base && numerator === preset.num && denominator === preset.den
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 hover:bg-dark-600 text-dark-300'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Fractional exponents combine roots and powers in one notation.
      </p>
    </div>
  );
}
