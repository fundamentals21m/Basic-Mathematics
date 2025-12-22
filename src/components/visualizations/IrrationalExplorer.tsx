import { useState } from 'react';

export function IrrationalExplorer() {
  const [numerator, setNumerator] = useState(7);
  const [denominator, setDenominator] = useState(5);

  const sqrt2 = Math.SQRT2;
  const fraction = numerator / denominator;
  const fractionSquared = fraction * fraction;
  const difference = fractionSquared - 2;
  const percentError = Math.abs((fraction - sqrt2) / sqrt2) * 100;

  // Check if fraction is close to sqrt(2)
  const isClose = Math.abs(difference) < 0.01;
  const isVeryClose = Math.abs(difference) < 0.001;

  // Famous approximations of sqrt(2)
  const famousApproximations = [
    { num: 1, den: 1, label: 'Underestimate' },
    { num: 3, den: 2, label: 'Simple' },
    { num: 7, den: 5, label: 'Better' },
    { num: 17, den: 12, label: 'Good' },
    { num: 41, den: 29, label: 'Very good' },
    { num: 99, den: 70, label: 'Excellent' },
  ];

  // GCD for checking if in lowest form
  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const isLowestForm = gcd(numerator, denominator) === 1;

  // Visual square representation
  const squareSize = 120;
  const targetArea = 2;
  const actualSideLength = Math.sqrt(targetArea);
  const fractionSideLength = fraction;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Exploring √2: Why It's Irrational
      </h3>

      {/* The challenge */}
      <div className="text-center mb-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-dark-300 mb-2">The Challenge: Find integers m and n such that</div>
        <div className="text-2xl font-mono">
          <span className="text-dark-400">(</span>
          <span className="text-cyan-400">m</span>
          <span className="text-dark-400">/</span>
          <span className="text-emerald-400">n</span>
          <span className="text-dark-400">)² = </span>
          <span className="text-primary-400 font-bold">2</span>
        </div>
        <div className="text-sm text-dark-500 mt-2">(Spoiler: It's impossible!)</div>
      </div>

      {/* Fraction inputs */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">Numerator (m)</label>
          <input
            type="range"
            min={1}
            max={100}
            value={numerator}
            onChange={(e) => setNumerator(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-2xl text-cyan-400">{numerator}</div>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Denominator (n)</label>
          <input
            type="range"
            min={1}
            max={100}
            value={denominator}
            onChange={(e) => setDenominator(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-2xl text-emerald-400">{denominator}</div>
        </div>
      </div>

      {/* Result display */}
      <div className={`p-6 rounded-xl border mb-6 ${
        isVeryClose
          ? 'bg-yellow-500/10 border-yellow-500/50'
          : isClose
          ? 'bg-orange-500/10 border-orange-500/50'
          : 'bg-dark-800/50 border-dark-700'
      }`}>
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-sm text-dark-400 mb-2">Your fraction:</div>
            <div className="text-3xl font-mono">
              <span className="text-cyan-400">{numerator}</span>
              <span className="text-dark-400">/</span>
              <span className="text-emerald-400">{denominator}</span>
            </div>
            <div className="text-lg font-mono text-dark-300 mt-1">
              = {fraction.toFixed(6)}
            </div>
            {!isLowestForm && (
              <div className="text-xs text-yellow-400 mt-1">Not in lowest form</div>
            )}
          </div>
          <div className="text-center">
            <div className="text-sm text-dark-400 mb-2">Squared:</div>
            <div className="text-3xl font-mono text-purple-400">
              {fractionSquared.toFixed(6)}
            </div>
            <div className={`text-lg font-mono mt-1 ${
              difference > 0 ? 'text-red-400' : 'text-blue-400'
            }`}>
              {difference > 0 ? '+' : ''}{difference.toFixed(6)} off from 2
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-dark-600 text-center">
          <div className="text-sm text-dark-400">Actual √2 = {sqrt2.toFixed(10)}...</div>
          <div className="text-sm text-dark-400 mt-1">
            Your approximation error: <span className="text-yellow-400">{percentError.toFixed(4)}%</span>
          </div>
        </div>
      </div>

      {/* Visual comparison */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <div className="text-sm text-dark-400 mb-3 text-center">
          Visual: A square with area 2 has side length √2 ≈ 1.414
        </div>
        <div className="flex justify-center items-end gap-8">
          {/* Target square (area = 2) */}
          <div className="text-center">
            <div
              className="border-2 border-primary-400 bg-primary-500/20"
              style={{
                width: actualSideLength * squareSize / 2,
                height: actualSideLength * squareSize / 2,
              }}
            />
            <div className="text-xs text-dark-400 mt-2">Target: Area = 2</div>
            <div className="text-xs text-primary-400">Side = √2</div>
          </div>

          {/* Your approximation */}
          <div className="text-center">
            <div
              className={`border-2 ${
                isVeryClose
                  ? 'border-emerald-400 bg-emerald-500/20'
                  : 'border-yellow-400 bg-yellow-500/20'
              }`}
              style={{
                width: Math.min(fractionSideLength * squareSize / 2, 200),
                height: Math.min(fractionSideLength * squareSize / 2, 200),
              }}
            />
            <div className="text-xs text-dark-400 mt-2">Your: Area = {fractionSquared.toFixed(3)}</div>
            <div className="text-xs text-yellow-400">Side = {fraction.toFixed(3)}</div>
          </div>
        </div>
      </div>

      {/* Famous approximations */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 mb-3">Best rational approximations of √2:</div>
        <div className="flex flex-wrap gap-2 justify-center">
          {famousApproximations.map((approx) => {
            const val = approx.num / approx.den;
            return (
              <button
                key={`${approx.num}/${approx.den}`}
                onClick={() => {
                  setNumerator(approx.num);
                  setDenominator(approx.den);
                }}
                className={`px-3 py-2 rounded-lg text-sm transition-all ${
                  numerator === approx.num && denominator === approx.den
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                }`}
              >
                <div className="font-mono">{approx.num}/{approx.den}</div>
                <div className="text-xs opacity-70">({val.toFixed(4)})</div>
              </button>
            );
          })}
        </div>
        <div className="text-xs text-dark-500 mt-3 text-center">
          Click any approximation to try it. No matter how close, (m/n)² never equals exactly 2!
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        The proof shows that assuming √2 = m/n leads to a contradiction:
        both m and n must be even, meaning the fraction wasn't in lowest form.
      </p>
    </div>
  );
}
