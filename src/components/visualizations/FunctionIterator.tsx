import { useState } from 'react';

type IterFunc = {
  name: string;
  formula: string;
  fn: (x: number) => number;
  generalForm: string;
};

const iterFunctions: IterFunc[] = [
  { name: 'Add 3', formula: 'f(x) = x + 3', fn: (x) => x + 3, generalForm: 'fᵏ(x) = x + 3k' },
  { name: 'Double', formula: 'f(x) = 2x', fn: (x) => 2 * x, generalForm: 'fᵏ(x) = 2ᵏ · x' },
  { name: 'Square', formula: 'f(x) = x²', fn: (x) => x * x, generalForm: 'fᵏ(x) = x^(2ᵏ)' },
  { name: 'Subtract 2', formula: 'f(x) = x - 2', fn: (x) => x - 2, generalForm: 'fᵏ(x) = x - 2k' },
];

export function FunctionIterator() {
  const [funcIdx, setFuncIdx] = useState(0);
  const [startValue, setStartValue] = useState(2);
  const [iterations, setIterations] = useState(3);

  const currentFunc = iterFunctions[funcIdx];

  // Compute iterations
  const values: number[] = [startValue];
  let current = startValue;
  for (let i = 0; i < iterations; i++) {
    current = currentFunc.fn(current);
    values.push(current);
  }

  const formatNum = (n: number) => {
    if (!isFinite(n)) return '∞';
    if (Math.abs(n) > 1e10) return n.toExponential(2);
    if (Number.isInteger(n)) return n.toString();
    return n.toFixed(3).replace(/\.?0+$/, '');
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Function Iterator
      </h3>

      {/* Function selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {iterFunctions.map((func, idx) => (
          <button
            key={idx}
            onClick={() => setFuncIdx(idx)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              funcIdx === idx
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {func.name}
          </button>
        ))}
      </div>

      {/* Current function display */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-6 text-center">
        <div className="font-mono text-xl text-primary-400">{currentFunc.formula}</div>
        <div className="text-dark-500 text-sm mt-1">General: {currentFunc.generalForm}</div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-6 mb-6 max-w-sm mx-auto">
        <div>
          <label className="block text-sm text-dark-400 mb-2 text-center">Starting value (x)</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={1}
            value={startValue}
            onChange={(e) => setStartValue(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{startValue}</div>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2 text-center">Iterations (k)</label>
          <input
            type="range"
            min={1}
            max={6}
            step={1}
            value={iterations}
            onChange={(e) => setIterations(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-lg text-emerald-400">{iterations}</div>
        </div>
      </div>

      {/* Iteration chain */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-6">
        <div className="text-dark-500 text-sm mb-3 text-center">Iteration chain:</div>
        <div className="flex flex-wrap justify-center items-center gap-2 font-mono">
          {values.map((val, idx) => (
            <div key={idx} className="flex items-center">
              <span className={`px-2 py-1 rounded ${
                idx === 0 ? 'bg-cyan-500/20 text-cyan-400' :
                idx === values.length - 1 ? 'bg-emerald-500/20 text-emerald-400' :
                'bg-dark-700 text-dark-300'
              }`}>
                {formatNum(val)}
              </span>
              {idx < values.length - 1 && (
                <span className="mx-1 text-dark-500">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Steps breakdown */}
      <div className="space-y-2 mb-6">
        {values.slice(0, -1).map((val, idx) => (
          <div key={idx} className="flex items-center justify-between text-sm font-mono px-3 py-2 rounded bg-dark-800/40">
            <span className="text-dark-400">
              f<sup>{idx + 1}</sup>({startValue}) =
            </span>
            <span>
              <span className="text-dark-400">f(</span>
              <span className="text-yellow-400">{formatNum(val)}</span>
              <span className="text-dark-400">) = </span>
              <span className="text-emerald-400">{formatNum(values[idx + 1])}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Final result */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
        <div className="text-dark-400 text-sm mb-1">Final result:</div>
        <div className="font-mono text-2xl">
          <span className="text-dark-400">f</span>
          <sup className="text-emerald-400">{iterations}</sup>
          <span className="text-dark-400">(</span>
          <span className="text-cyan-400">{startValue}</span>
          <span className="text-dark-400">) = </span>
          <span className="text-emerald-400 font-bold">{formatNum(values[values.length - 1])}</span>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        fᵏ(x) means applying f to x, k times in succession.
      </p>
    </div>
  );
}
