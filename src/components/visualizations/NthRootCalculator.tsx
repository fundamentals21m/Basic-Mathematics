import { useState } from 'react';

export function NthRootCalculator() {
  const [value, setValue] = useState(8);
  const [n, setN] = useState(3);

  const nthRoot = Math.pow(value, 1 / n);
  const verification = Math.pow(nthRoot, n);
  const isExact = Math.abs(verification - value) < 0.0001 && nthRoot % 1 === 0;

  // Get the radical symbol name
  const getRootName = () => {
    switch (n) {
      case 2: return 'Square root';
      case 3: return 'Cube root';
      case 4: return 'Fourth root';
      case 5: return 'Fifth root';
      default: return `${n}th root`;
    }
  };

  // Find perfect nth powers for current n
  const perfectPowers = [];
  for (let i = 1; i <= 5; i++) {
    perfectPowers.push(Math.pow(i, n));
  }

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        n-th Root Calculator
      </h3>

      {/* Input controls */}
      <div className="grid grid-cols-2 gap-6 mb-6 max-w-md mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">Value (a)</label>
          <input
            type="range"
            min={1}
            max={100}
            step={1}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-2xl text-cyan-400">{value}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">Root (n)</label>
          <input
            type="range"
            min={2}
            max={6}
            step={1}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-2xl text-purple-400">{n}</div>
        </div>
      </div>

      {/* Root type indicator */}
      <div className="flex justify-center mb-4">
        <span className="px-4 py-1 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium">
          {getRootName()}
        </span>
      </div>

      {/* Main result */}
      <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700 mb-4">
        <div className="text-center">
          {/* Radical notation */}
          <div className="font-mono text-2xl mb-4">
            <span className="text-dark-400">
              {n === 2 ? '√' : `ⁿ√`}
            </span>
            <span className="text-cyan-400">{value}</span>
            <span className="text-dark-500 mx-3">=</span>
            <span className="text-cyan-400">{value}</span>
            <sup className="text-purple-400">1/{n}</sup>
            <span className="text-dark-500 mx-3">=</span>
            <span className="text-primary-400 font-bold">
              {nthRoot.toFixed(6).replace(/\.?0+$/, '')}
            </span>
          </div>

          {/* Status indicator */}
          {isExact ? (
            <div className="text-emerald-400 text-sm">
              ✓ Perfect {n === 2 ? 'square' : n === 3 ? 'cube' : `${n}th power`}!
              <span className="font-mono ml-2">{Math.round(nthRoot)}<sup>{n}</sup> = {value}</span>
            </div>
          ) : (
            <div className="text-yellow-400 text-sm">
              Irrational result (non-terminating decimal)
            </div>
          )}
        </div>
      </div>

      {/* Verification */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="text-center">
          <div className="text-dark-500 text-sm mb-2">Verification: ({nthRoot.toFixed(4)})<sup>{n}</sup></div>
          <div className="font-mono text-lg">
            <span className="text-dark-400">=</span>
            <span className="text-emerald-400 ml-2">{verification.toFixed(6).replace(/\.?0+$/, '')}</span>
            {Math.abs(verification - value) < 0.0001 && (
              <span className="text-emerald-400 ml-2">✓</span>
            )}
          </div>
        </div>
      </div>

      {/* Equivalent expressions */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-4">
        <div className="text-sm text-center text-dark-300">
          <strong className="text-primary-400">Equivalent expressions:</strong>
          <div className="font-mono mt-2 space-x-4">
            <span>
              {n === 2 ? '√' : `ⁿ√`}<span className="text-cyan-400">{value}</span>
            </span>
            <span className="text-dark-500">=</span>
            <span>
              <span className="text-cyan-400">{value}</span><sup className="text-purple-400">1/{n}</sup>
            </span>
            <span className="text-dark-500">=</span>
            <span>
              <span className="text-cyan-400">{value}</span><sup className="text-purple-400">{(1/n).toFixed(4).replace(/\.?0+$/, '')}</sup>
            </span>
          </div>
        </div>
      </div>

      {/* Perfect powers for this n */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h4 className="text-sm font-semibold text-dark-300 mb-3 text-center">
          Perfect {n === 2 ? 'squares' : n === 3 ? 'cubes' : `${n}th powers`}
        </h4>
        <div className="flex flex-wrap justify-center gap-2">
          {perfectPowers.filter(p => p <= 100).map((power, idx) => (
            <button
              key={idx}
              onClick={() => setValue(power)}
              className={`px-3 py-2 rounded transition-all ${
                value === power
                  ? 'bg-emerald-600 text-white'
                  : 'bg-dark-700/50 text-dark-300 hover:bg-dark-600'
              }`}
            >
              <div className="font-mono text-xs">{idx + 1}<sup>{n}</sup></div>
              <div className="font-bold">{power}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Root type buttons */}
      <div className="mt-4 flex justify-center gap-2">
        {[2, 3, 4, 5].map(rootN => (
          <button
            key={rootN}
            onClick={() => setN(rootN)}
            className={`px-3 py-1 rounded text-sm transition-all ${
              n === rootN
                ? 'bg-purple-600 text-white'
                : 'bg-dark-700 hover:bg-dark-600 text-dark-300'
            }`}
          >
            {rootN === 2 ? '√' : rootN === 3 ? '∛' : `${rootN}th`}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        The n-th root of a is the number that, when raised to the n-th power, gives a.
      </p>
    </div>
  );
}
