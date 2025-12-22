import { useState } from 'react';

type FunctionType = 'square' | 'cube' | 'reciprocal' | 'sqrt' | 'abs' | 'linear';

const functionDefs: Record<FunctionType, { label: string; formula: string; fn: (x: number) => number | null; domain: string }> = {
  square: { label: 'Square', formula: 'f(x) = x²', fn: (x) => x * x, domain: 'All real numbers' },
  cube: { label: 'Cube', formula: 'f(x) = x³', fn: (x) => x * x * x, domain: 'All real numbers' },
  reciprocal: { label: 'Reciprocal', formula: 'f(x) = 1/x', fn: (x) => x === 0 ? null : 1 / x, domain: 'x ≠ 0' },
  sqrt: { label: 'Square Root', formula: 'f(x) = √x', fn: (x) => x < 0 ? null : Math.sqrt(x), domain: 'x ≥ 0' },
  abs: { label: 'Absolute Value', formula: 'f(x) = |x|', fn: (x) => Math.abs(x), domain: 'All real numbers' },
  linear: { label: 'Linear', formula: 'f(x) = 2x + 1', fn: (x) => 2 * x + 1, domain: 'All real numbers' },
};

export function FunctionEvaluator() {
  const [funcType, setFuncType] = useState<FunctionType>('square');
  const [inputValue, setInputValue] = useState('3');
  const [history, setHistory] = useState<Array<{ x: number; fx: number | null }>>([]);

  const currentFunc = functionDefs[funcType];
  const x = parseFloat(inputValue);
  const isValidInput = !isNaN(x);
  const result = isValidInput ? currentFunc.fn(x) : null;

  const addToHistory = () => {
    if (isValidInput) {
      setHistory((prev) => [{ x, fx: result }, ...prev.slice(0, 4)]);
    }
  };

  const formatNumber = (n: number | null) => {
    if (n === null) return 'undefined';
    if (Number.isInteger(n)) return n.toString();
    return n.toFixed(4).replace(/\.?0+$/, '');
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Function Evaluator
      </h3>

      {/* Function selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Object.entries(functionDefs).map(([key, def]) => (
          <button
            key={key}
            onClick={() => { setFuncType(key as FunctionType); setHistory([]); }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              funcType === key
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {def.label}
          </button>
        ))}
      </div>

      {/* Current function display */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-6 text-center">
        <div className="font-mono text-2xl text-primary-400">{currentFunc.formula}</div>
        <div className="text-dark-500 text-sm mt-1">Domain: {currentFunc.domain}</div>
      </div>

      {/* Input */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <label className="text-dark-400">x =</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-24 px-3 py-2 rounded-lg bg-dark-800 border border-dark-600 text-dark-200 text-center font-mono text-lg focus:outline-none focus:border-primary-500"
          step="any"
        />
        <button
          onClick={addToHistory}
          disabled={!isValidInput}
          className="px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Evaluate
        </button>
      </div>

      {/* Result */}
      <div className={`p-6 rounded-xl border text-center mb-6 ${
        result === null
          ? 'bg-red-500/10 border-red-500/30'
          : 'bg-emerald-500/10 border-emerald-500/30'
      }`}>
        <div className="text-dark-400 text-sm mb-2">Result:</div>
        <div className="font-mono text-3xl">
          <span className="text-dark-400">f(</span>
          <span className="text-cyan-400">{isValidInput ? x : '?'}</span>
          <span className="text-dark-400">) = </span>
          <span className={result === null ? 'text-red-400' : 'text-emerald-400'}>
            {isValidInput ? formatNumber(result) : '?'}
          </span>
        </div>
        {result === null && isValidInput && (
          <div className="text-red-400 text-sm mt-2">
            Value is outside the domain!
          </div>
        )}
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-dark-500 text-sm mb-2">Recent evaluations:</div>
          <div className="flex flex-wrap justify-center gap-3">
            {history.map((item, idx) => (
              <div key={idx} className="px-3 py-1 rounded bg-dark-700 font-mono text-sm">
                <span className="text-dark-400">f(</span>
                <span className="text-cyan-400">{item.x}</span>
                <span className="text-dark-400">) = </span>
                <span className={item.fx === null ? 'text-red-400' : 'text-emerald-400'}>
                  {formatNumber(item.fx)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        Select a function and enter a value to evaluate f(x).
      </p>
    </div>
  );
}
