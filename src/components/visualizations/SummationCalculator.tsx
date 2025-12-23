import { useState } from 'react';

type SumType = 'natural' | 'squares' | 'cubes' | 'custom';

export function SummationCalculator() {
  const [sumType, setSumType] = useState<SumType>('natural');
  const [n, setN] = useState(10);
  const [customBase, setCustomBase] = useState(2);
  const [showTerms, setShowTerms] = useState(true);

  // Calculate sums
  const calculateSum = () => {
    let terms: number[] = [];
    let formula = '';
    let formulaResult = 0;

    switch (sumType) {
      case 'natural':
        for (let i = 1; i <= n; i++) terms.push(i);
        formulaResult = (n * (n + 1)) / 2;
        formula = `n(n+1)/2 = ${n}×${n + 1}/2 = ${formulaResult}`;
        break;
      case 'squares':
        for (let i = 1; i <= n; i++) terms.push(i * i);
        formulaResult = (n * (n + 1) * (2 * n + 1)) / 6;
        formula = `n(n+1)(2n+1)/6 = ${n}×${n + 1}×${2 * n + 1}/6 = ${formulaResult}`;
        break;
      case 'cubes':
        for (let i = 1; i <= n; i++) terms.push(i * i * i);
        formulaResult = Math.pow((n * (n + 1)) / 2, 2);
        formula = `[n(n+1)/2]² = [${(n * (n + 1)) / 2}]² = ${formulaResult}`;
        break;
      case 'custom':
        for (let i = 0; i < n; i++) terms.push(Math.pow(customBase, i));
        formulaResult = (Math.pow(customBase, n) - 1) / (customBase - 1);
        formula = `(${customBase}ⁿ - 1)/(${customBase} - 1) = (${Math.pow(customBase, n)} - 1)/${customBase - 1} = ${formulaResult.toFixed(2)}`;
        break;
    }

    const directSum = terms.reduce((a, b) => a + b, 0);
    return { terms, directSum, formulaResult, formula };
  };

  const result = calculateSum();

  const getSumNotation = () => {
    switch (sumType) {
      case 'natural': return 'Σᵢ₌₁ⁿ i';
      case 'squares': return 'Σᵢ₌₁ⁿ i²';
      case 'cubes': return 'Σᵢ₌₁ⁿ i³';
      case 'custom': return `Σᵢ₌₀ⁿ⁻¹ ${customBase}ⁱ`;
    }
  };

  const getTermLabel = (i: number) => {
    switch (sumType) {
      case 'natural': return `${i + 1}`;
      case 'squares': return `${i + 1}²`;
      case 'cubes': return `${i + 1}³`;
      case 'custom': return `${customBase}${i > 0 ? `^${i}` : '⁰'}`;
    }
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Summation Calculator
      </h3>

      {/* Sum type selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {[
          { type: 'natural' as SumType, label: 'Σ i' },
          { type: 'squares' as SumType, label: 'Σ i²' },
          { type: 'cubes' as SumType, label: 'Σ i³' },
          { type: 'custom' as SumType, label: 'Σ rⁱ' },
        ].map(({ type, label }) => (
          <button
            key={type}
            onClick={() => setSumType(type)}
            className={`px-4 py-2 rounded-lg font-mono font-medium transition-all ${
              sumType === type
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 hover:bg-dark-600 text-dark-300'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">
            Number of terms (n): {n}
          </label>
          <input
            type="range"
            min={1}
            max={sumType === 'custom' ? 15 : 20}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
        {sumType === 'custom' && (
          <div>
            <label className="block text-xs text-dark-500 mb-1 text-center">
              Base (r): {customBase}
            </label>
            <input
              type="range"
              min={2}
              max={5}
              value={customBase}
              onChange={(e) => setCustomBase(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>
        )}
      </div>

      {/* Sum notation display */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-6 text-center">
        <span className="font-mono text-2xl text-primary-400">{getSumNotation()}</span>
        <span className="text-dark-400 mx-3">=</span>
        <span className="font-mono text-2xl text-cyan-400">{result.directSum.toLocaleString()}</span>
      </div>

      {/* Terms visualization */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-dark-400 text-sm">Terms</span>
          <button
            onClick={() => setShowTerms(!showTerms)}
            className="text-xs text-primary-400 hover:text-primary-300"
          >
            {showTerms ? 'Hide' : 'Show'} terms
          </button>
        </div>

        {showTerms && (
          <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 overflow-x-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {result.terms.map((term, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xs text-dark-500">{getTermLabel(i)}</span>
                  <span className={`px-2 py-1 rounded text-sm font-mono ${
                    i % 2 === 0 ? 'bg-primary-500/20 text-primary-300' : 'bg-cyan-500/20 text-cyan-300'
                  }`}>
                    {term.toLocaleString()}
                  </span>
                  {i < result.terms.length - 1 && (
                    <span className="text-dark-500 mt-1">+</span>
                  )}
                </div>
              ))}
              <div className="flex flex-col items-center">
                <span className="text-xs text-dark-500">&nbsp;</span>
                <span className="px-2 py-1 text-dark-400">=</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-dark-500">Sum</span>
                <span className="px-3 py-1 rounded text-sm font-mono bg-emerald-500/20 text-emerald-400 font-bold">
                  {result.directSum.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Formula */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-4">
        <div className="text-dark-400 text-xs mb-1">Formula:</div>
        <div className="font-mono text-emerald-400 text-center">
          {result.formula}
        </div>
      </div>

      {/* Visual bar chart for natural/squares/cubes */}
      {sumType !== 'custom' && n <= 10 && (
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-dark-500 text-xs mb-3">Visual Representation</div>
          <div className="flex items-end justify-center gap-1 h-32">
            {result.terms.map((term, i) => {
              const maxTerm = Math.max(...result.terms);
              const height = (term / maxTerm) * 100;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center"
                  style={{ width: `${80 / n}%` }}
                >
                  <div
                    className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t transition-all"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-dark-500 mt-1">{i + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        {sumType === 'natural' && 'The triangular numbers: each sum forms a triangle.'}
        {sumType === 'squares' && 'Sum of squares grows like n³/3.'}
        {sumType === 'cubes' && 'Remarkably, the sum of cubes equals the square of the sum!'}
        {sumType === 'custom' && 'Geometric series with ratio r.'}
      </p>
    </div>
  );
}
