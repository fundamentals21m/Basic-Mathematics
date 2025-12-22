import { useState } from 'react';

type FuncDef = {
  name: string;
  formula: string;
  fn: (x: number) => number;
};

const functions: FuncDef[] = [
  { name: 'f', formula: 'f(x) = x + 2', fn: (x) => x + 2 },
  { name: 'g', formula: 'g(x) = 2x', fn: (x) => 2 * x },
  { name: 'h', formula: 'h(x) = x²', fn: (x) => x * x },
  { name: 'k', formula: 'k(x) = x - 3', fn: (x) => x - 3 },
];

export function MappingComposer() {
  const [firstFunc, setFirstFunc] = useState(0);
  const [secondFunc, setSecondFunc] = useState(1);
  const [inputValue, setInputValue] = useState(3);

  const f = functions[firstFunc];
  const g = functions[secondFunc];

  // Compute (g ∘ f)(x) = g(f(x))
  const fOfX = f.fn(inputValue);
  const gOfFOfX = g.fn(fOfX);

  // Compute (f ∘ g)(x) = f(g(x)) for comparison
  const gOfX = g.fn(inputValue);
  const fOfGOfX = f.fn(gOfX);

  const formatNum = (n: number) => {
    if (Number.isInteger(n)) return n.toString();
    return n.toFixed(2).replace(/\.?0+$/, '');
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Mapping Composer
      </h3>

      {/* Function selectors */}
      <div className="grid grid-cols-2 gap-4 mb-6 max-w-md mx-auto">
        <div>
          <label className="block text-sm text-dark-400 mb-2 text-center">First function (applied first)</label>
          <select
            value={firstFunc}
            onChange={(e) => setFirstFunc(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-dark-800 border border-dark-600 text-dark-200 focus:outline-none focus:border-primary-500"
          >
            {functions.map((func, idx) => (
              <option key={idx} value={idx}>{func.formula}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2 text-center">Second function (applied second)</label>
          <select
            value={secondFunc}
            onChange={(e) => setSecondFunc(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-dark-800 border border-dark-600 text-dark-200 focus:outline-none focus:border-primary-500"
          >
            {functions.map((func, idx) => (
              <option key={idx} value={idx}>{func.formula}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Input value */}
      <div className="mb-6 max-w-xs mx-auto">
        <label className="block text-sm text-dark-400 mb-2 text-center">Input value x</label>
        <input
          type="range"
          min={-5}
          max={5}
          step={1}
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          className="w-full accent-primary-500"
        />
        <div className="text-center font-mono text-xl text-primary-400">{inputValue}</div>
      </div>

      {/* Composition display */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-4">
        <div className="text-center text-dark-400 text-sm mb-2">
          Composition: ({g.name} ∘ {f.name})(x) = {g.name}({f.name}(x))
        </div>
        <div className="text-center font-mono text-lg">
          <span className="text-dark-400">(</span>
          <span className="text-purple-400">{g.name}</span>
          <span className="text-dark-400"> ∘ </span>
          <span className="text-cyan-400">{f.name}</span>
          <span className="text-dark-400">)(</span>
          <span className="text-emerald-400">{inputValue}</span>
          <span className="text-dark-400">)</span>
        </div>
      </div>

      {/* Step by step */}
      <div className="space-y-3 mb-6">
        <div className="p-3 rounded-lg bg-dark-800/60 border border-dark-700">
          <div className="flex items-center justify-between">
            <span className="text-dark-400">Step 1: Apply <span className="text-cyan-400">{f.name}</span> first</span>
            <span className="font-mono">
              <span className="text-cyan-400">{f.name}</span>
              <span className="text-dark-400">(</span>
              <span className="text-emerald-400">{inputValue}</span>
              <span className="text-dark-400">) = </span>
              <span className="text-yellow-400">{formatNum(fOfX)}</span>
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <span className="text-dark-500">↓</span>
        </div>

        <div className="p-3 rounded-lg bg-dark-800/60 border border-dark-700">
          <div className="flex items-center justify-between">
            <span className="text-dark-400">Step 2: Apply <span className="text-purple-400">{g.name}</span> to result</span>
            <span className="font-mono">
              <span className="text-purple-400">{g.name}</span>
              <span className="text-dark-400">(</span>
              <span className="text-yellow-400">{formatNum(fOfX)}</span>
              <span className="text-dark-400">) = </span>
              <span className="text-emerald-400 font-bold">{formatNum(gOfFOfX)}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Final result */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-6 text-center">
        <div className="text-dark-400 text-sm mb-1">Result:</div>
        <div className="font-mono text-2xl text-emerald-400">
          ({g.name} ∘ {f.name})({inputValue}) = {formatNum(gOfFOfX)}
        </div>
      </div>

      {/* Comparison: show non-commutativity */}
      {firstFunc !== secondFunc && (
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-dark-500 text-sm mb-2 text-center">Compare with opposite order:</div>
          <div className="flex justify-center items-center gap-4 font-mono">
            <div>
              <span className="text-dark-400">(</span>
              <span className="text-cyan-400">{f.name}</span>
              <span className="text-dark-400"> ∘ </span>
              <span className="text-purple-400">{g.name}</span>
              <span className="text-dark-400">)(</span>
              <span>{inputValue}</span>
              <span className="text-dark-400">) = </span>
              <span className="text-orange-400">{formatNum(fOfGOfX)}</span>
            </div>
          </div>
          {gOfFOfX !== fOfGOfX ? (
            <div className="text-center mt-2 text-red-400 text-sm">
              {formatNum(gOfFOfX)} ≠ {formatNum(fOfGOfX)} — Order matters!
            </div>
          ) : (
            <div className="text-center mt-2 text-emerald-400 text-sm">
              Same result (these functions commute for x = {inputValue})
            </div>
          )}
        </div>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        (g ∘ f) means: apply f first, then g. Order usually matters!
      </p>
    </div>
  );
}
