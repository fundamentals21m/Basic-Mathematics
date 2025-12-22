import { useState } from 'react';

type ComparisonType = '<' | '>' | '<=' | '>=';

export function LinearInequalitySolver() {
  const [a, setA] = useState(2); // coefficient of x
  const [b, setB] = useState(-3); // constant on left
  const [c, setC] = useState(5); // right side
  const [comparison, setComparison] = useState<ComparisonType>('>');

  // Solve ax + b > c (or other comparison)
  // ax > c - b
  // x > (c - b) / a  (if a > 0)
  // x < (c - b) / a  (if a < 0, flip!)

  const rightMinusB = c - b;
  const solution = a !== 0 ? rightMinusB / a : null;
  const needsFlip = a < 0;

  // Determine the final comparison after potential flip
  const getFinalComparison = (): ComparisonType => {
    if (!needsFlip) return comparison;
    switch (comparison) {
      case '<': return '>';
      case '>': return '<';
      case '<=': return '>=';
      case '>=': return '<=';
    }
  };

  const finalComparison = getFinalComparison();

  // Get interval notation
  const getIntervalNotation = () => {
    if (solution === null) return 'undefined';
    const solStr = solution % 1 === 0 ? solution.toString() : solution.toFixed(2);
    switch (finalComparison) {
      case '<': return `(-∞, ${solStr})`;
      case '>': return `(${solStr}, ∞)`;
      case '<=': return `(-∞, ${solStr}]`;
      case '>=': return `[${solStr}, ∞)`;
    }
  };

  // SVG number line
  const svgWidth = 400;
  const svgHeight = 60;
  const padding = 30;
  const lineY = 35;

  const minVal = solution !== null ? Math.floor(solution) - 4 : -5;
  const maxVal = solution !== null ? Math.ceil(solution) + 4 : 5;

  const valueToX = (val: number) => {
    return padding + ((val - minVal) / (maxVal - minVal)) * (svgWidth - 2 * padding);
  };

  // Generate tick marks
  const ticks: number[] = [];
  for (let t = Math.ceil(minVal); t <= Math.floor(maxVal); t++) {
    ticks.push(t);
  }

  const comparisonSymbols: Record<ComparisonType, string> = {
    '<': '<',
    '>': '>',
    '<=': '≤',
    '>=': '≥',
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Linear Inequality Solver
      </h3>

      {/* Input controls */}
      <div className="grid grid-cols-4 gap-3 mb-4 max-w-lg mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">a (coeff)</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={1}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{a}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">b (const)</label>
          <input
            type="range"
            min={-10}
            max={10}
            step={1}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{b}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">c (right)</label>
          <input
            type="range"
            min={-10}
            max={10}
            step={1}
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-lg text-emerald-400">{c}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">sign</label>
          <select
            value={comparison}
            onChange={(e) => setComparison(e.target.value as ComparisonType)}
            className="w-full px-2 py-1 rounded bg-dark-700 border border-dark-600 text-dark-200 text-center"
          >
            <option value="<">&lt;</option>
            <option value=">">&gt;</option>
            <option value="<=">≤</option>
            <option value=">=">≥</option>
          </select>
        </div>
      </div>

      {/* Inequality display */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-4 text-center">
        <div className="text-dark-500 text-sm mb-2">Solve:</div>
        <div className="font-mono text-2xl text-dark-200">
          <span className="text-cyan-400">{a}</span>x
          {b >= 0 ? ' + ' : ' − '}
          <span className="text-purple-400">{Math.abs(b)}</span>
          <span className="mx-2">{comparisonSymbols[comparison]}</span>
          <span className="text-emerald-400">{c}</span>
        </div>
      </div>

      {/* Solution steps */}
      {a !== 0 ? (
        <div className="space-y-3 mb-4">
          {/* Step 1 */}
          <div className="p-3 rounded-lg bg-dark-800/40">
            <div className="text-primary-400 text-sm font-medium mb-1">Step 1: Isolate the x term</div>
            <div className="font-mono text-dark-300 text-center">
              <span className="text-cyan-400">{a}</span>x {comparisonSymbols[comparison]} {c} {b >= 0 ? '−' : '+'} {Math.abs(b)} = <span className="text-yellow-400">{rightMinusB}</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className={`p-3 rounded-lg ${needsFlip ? 'bg-red-500/10 border border-red-500/30' : 'bg-dark-800/40'}`}>
            <div className={`text-sm font-medium mb-1 ${needsFlip ? 'text-red-400' : 'text-primary-400'}`}>
              Step 2: Divide by {a} {needsFlip && '(FLIP the sign!)'}
            </div>
            <div className="font-mono text-dark-300 text-center">
              x {comparisonSymbols[comparison]} {rightMinusB} ÷ {a}
              {needsFlip && (
                <span className="text-red-400 mx-2">→ flip →</span>
              )}
              x <span className={needsFlip ? 'text-red-400' : 'text-emerald-400'}>{comparisonSymbols[finalComparison]}</span> <span className="text-yellow-400">{solution !== null ? (solution % 1 === 0 ? solution : solution.toFixed(2)) : '?'}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 mb-4 text-center">
          <span className="text-red-400">No x term! (a = 0)</span>
          <div className="text-dark-400 text-sm mt-2">
            {b < c && comparison.includes('<') ? 'Always true' :
             b > c && comparison.includes('>') ? 'Always true' :
             b === c && comparison.includes('=') ? 'Always true' : 'Never true'}
          </div>
        </div>
      )}

      {/* Final solution */}
      {a !== 0 && solution !== null && (
        <>
          <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-4 text-center">
            <div className="text-dark-500 text-sm mb-2">Solution:</div>
            <div className="font-mono text-xl">
              <span className="text-primary-400">x {comparisonSymbols[finalComparison]} {solution % 1 === 0 ? solution : solution.toFixed(2)}</span>
              <span className="text-dark-500 mx-3">or</span>
              <span className="text-cyan-400">{getIntervalNotation()}</span>
            </div>
          </div>

          {/* Number line visualization */}
          <div className="flex justify-center mb-4">
            <svg width={svgWidth} height={svgHeight} className="bg-dark-900 rounded-xl border border-dark-700">
              {/* Main line */}
              <line
                x1={padding}
                y1={lineY}
                x2={svgWidth - padding}
                y2={lineY}
                stroke="#4b5563"
                strokeWidth={2}
              />

              {/* Solution region */}
              {(finalComparison === '>' || finalComparison === '>=') && (
                <rect
                  x={valueToX(solution)}
                  y={lineY - 8}
                  width={svgWidth - padding - valueToX(solution)}
                  height={16}
                  fill="rgba(52, 211, 153, 0.3)"
                />
              )}
              {(finalComparison === '<' || finalComparison === '<=') && (
                <rect
                  x={padding}
                  y={lineY - 8}
                  width={valueToX(solution) - padding}
                  height={16}
                  fill="rgba(52, 211, 153, 0.3)"
                />
              )}

              {/* Tick marks */}
              {ticks.map((tick) => (
                <g key={tick}>
                  <line
                    x1={valueToX(tick)}
                    y1={lineY - 5}
                    x2={valueToX(tick)}
                    y2={lineY + 5}
                    stroke="#6b7280"
                    strokeWidth={1}
                  />
                  <text
                    x={valueToX(tick)}
                    y={lineY + 18}
                    textAnchor="middle"
                    fill="#9ca3af"
                    fontSize="10"
                  >
                    {tick}
                  </text>
                </g>
              ))}

              {/* Solution point */}
              <circle
                cx={valueToX(solution)}
                cy={lineY}
                r={6}
                fill={finalComparison.includes('=') ? '#22d3ee' : 'none'}
                stroke="#22d3ee"
                strokeWidth={2}
              />
            </svg>
          </div>

          <div className="text-center text-sm text-dark-500">
            {finalComparison.includes('=') ? 'Filled circle: endpoint included' : 'Open circle: endpoint not included'}
          </div>
        </>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        Watch how dividing by a negative flips the inequality sign!
      </p>
    </div>
  );
}
