import { useState } from 'react';

export function GeometricSeriesExplorer() {
  const [a, setA] = useState(1);
  const [r, setR] = useState(0.5);
  const [numTerms, setNumTerms] = useState(10);
  const [showInfinite] = useState(true);

  // Calculate geometric series
  const terms: number[] = [];
  let partialSum = 0;
  for (let i = 0; i < numTerms; i++) {
    const term = a * Math.pow(r, i);
    terms.push(term);
    partialSum += term;
  }

  // Finite sum formula
  const finiteSum = r !== 1 ? a * (1 - Math.pow(r, numTerms)) / (1 - r) : a * numTerms;

  // Infinite sum (only valid if |r| < 1)
  const converges = Math.abs(r) < 1;
  const infiniteSum = converges ? a / (1 - r) : null;

  // For visualization
  const maxTerm = Math.max(...terms.map(Math.abs));
  const svgWidth = 400;
  const svgHeight = 200;
  const barWidth = Math.min(30, (svgWidth - 40) / numTerms);

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Geometric Series Explorer
      </h3>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">
            First term (a): {a}
          </label>
          <input
            type="range"
            min={0.5}
            max={5}
            step={0.5}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-primary-500"
          />
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">
            Common ratio (r): {r.toFixed(2)}
          </label>
          <input
            type="range"
            min={-0.9}
            max={1.5}
            step={0.1}
            value={r}
            onChange={(e) => setR(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">
            Terms: {numTerms}
          </label>
          <input
            type="range"
            min={3}
            max={20}
            value={numTerms}
            onChange={(e) => setNumTerms(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>
      </div>

      {/* Series display */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-6">
        <div className="text-dark-400 text-xs mb-2">Series:</div>
        <div className="font-mono text-lg text-center overflow-x-auto whitespace-nowrap pb-2">
          {terms.slice(0, 5).map((term, i) => (
            <span key={i}>
              {i > 0 && <span className="text-dark-400">{term >= 0 ? ' + ' : ' - '}</span>}
              <span className="text-primary-400">{Math.abs(term).toFixed(3)}</span>
            </span>
          ))}
          {numTerms > 5 && <span className="text-dark-400"> + ⋯</span>}
        </div>
      </div>

      {/* Visualization */}
      <div className="flex justify-center mb-6">
        <svg width={svgWidth} height={svgHeight} className="bg-dark-900 rounded-xl border border-dark-700">
          {/* Zero line */}
          <line
            x1={20}
            y1={svgHeight / 2}
            x2={svgWidth - 20}
            y2={svgHeight / 2}
            stroke="#4b5563"
            strokeWidth={1}
          />

          {/* Bars for each term */}
          {terms.map((term, i) => {
            const height = (Math.abs(term) / (maxTerm || 1)) * (svgHeight / 2 - 20);
            const x = 30 + i * (barWidth + 4);
            const isPositive = term >= 0;
            const y = isPositive ? svgHeight / 2 - height : svgHeight / 2;

            return (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={height || 1}
                  fill={isPositive ? '#8b5cf6' : '#ef4444'}
                  opacity={0.8}
                  rx={2}
                />
                {i < 8 && (
                  <text
                    x={x + barWidth / 2}
                    y={svgHeight - 5}
                    textAnchor="middle"
                    fill="#6b7280"
                    fontSize="10"
                  >
                    {i}
                  </text>
                )}
              </g>
            );
          })}

          {/* Legend */}
          <text x={svgWidth - 60} y={20} fill="#9ca3af" fontSize="12">
            Term n
          </text>
        </svg>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Finite sum */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <div className="text-dark-400 text-xs mb-1">Finite Sum ({numTerms} terms)</div>
          <div className="font-mono text-xl text-emerald-400">
            {finiteSum.toFixed(4)}
          </div>
          <div className="text-dark-500 text-xs mt-2">
            Formula: a(1-rⁿ)/(1-r)
          </div>
        </div>

        {/* Infinite sum */}
        <div className={`p-4 rounded-xl border ${
          converges ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-red-500/10 border-red-500/30'
        }`}>
          <div className="text-dark-400 text-xs mb-1">Infinite Sum (n → ∞)</div>
          {converges ? (
            <>
              <div className="font-mono text-xl text-cyan-400">
                {infiniteSum?.toFixed(4)}
              </div>
              <div className="text-dark-500 text-xs mt-2">
                Formula: a/(1-r) when |r| {'<'} 1
              </div>
            </>
          ) : (
            <>
              <div className="font-mono text-xl text-red-400">
                Diverges
              </div>
              <div className="text-dark-500 text-xs mt-2">
                |r| ≥ 1, series does not converge
              </div>
            </>
          )}
        </div>
      </div>

      {/* Convergence indicator */}
      <div className={`p-4 rounded-xl border mb-4 ${
        converges ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'
      }`}>
        <div className="flex items-center justify-between">
          <span className="text-dark-300">
            |r| = {Math.abs(r).toFixed(2)}
          </span>
          <span className={converges ? 'text-emerald-400' : 'text-amber-400'}>
            {converges ? '✓ Converges (|r| < 1)' : '✗ Diverges (|r| ≥ 1)'}
          </span>
        </div>
      </div>

      {/* Partial sums progress */}
      {converges && showInfinite && infiniteSum !== null && (
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-dark-400 text-xs mb-2">Convergence Progress</div>
          <div className="h-4 bg-dark-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-cyan-400 transition-all"
              style={{ width: `${Math.min(100, (partialSum / infiniteSum) * 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-dark-500 mt-1">
            <span>Partial: {partialSum.toFixed(4)}</span>
            <span>{((partialSum / infiniteSum) * 100).toFixed(1)}%</span>
            <span>Limit: {infiniteSum.toFixed(4)}</span>
          </div>
        </div>
      )}

      {/* Quick examples */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {[
          { a: 1, r: 0.5, label: '1, ½, ¼, ...' },
          { a: 1, r: -0.5, label: 'Alternating' },
          { a: 3, r: 1/3, label: '3, 1, ⅓, ...' },
          { a: 1, r: 2, label: 'Divergent' },
        ].map(({ a: ea, r: er, label }) => (
          <button
            key={label}
            onClick={() => { setA(ea); setR(er); }}
            className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        {converges
          ? `As you add more terms, the sum approaches ${infiniteSum?.toFixed(4)}.`
          : 'With |r| ≥ 1, the terms don\'t shrink, so the sum grows without bound.'}
      </p>
    </div>
  );
}
