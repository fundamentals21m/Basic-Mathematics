import { useState } from 'react';

type Operation = 'add' | 'multiply';

export function PositivityExplorer() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(-2);
  const [operation, setOperation] = useState<Operation>('add');

  // Classify a number
  const classify = (n: number): 'positive' | 'negative' | 'zero' => {
    if (n > 0) return 'positive';
    if (n < 0) return 'negative';
    return 'zero';
  };

  const getColor = (classification: 'positive' | 'negative' | 'zero') => {
    switch (classification) {
      case 'positive': return 'text-emerald-400';
      case 'negative': return 'text-red-400';
      case 'zero': return 'text-gray-400';
    }
  };

  const getBgColor = (classification: 'positive' | 'negative' | 'zero') => {
    switch (classification) {
      case 'positive': return 'bg-emerald-500/20 border-emerald-500/50';
      case 'negative': return 'bg-red-500/20 border-red-500/50';
      case 'zero': return 'bg-gray-500/20 border-gray-500/50';
    }
  };

  const result = operation === 'add' ? a + b : a * b;
  const classA = classify(a);
  const classB = classify(b);
  const classResult = classify(result);

  // SVG number line
  const svgWidth = 400;
  const svgHeight = 80;
  const padding = 30;
  const lineY = 50;
  const minVal = -6;
  const maxVal = 6;

  const valueToX = (val: number) => {
    const clampedVal = Math.max(minVal, Math.min(maxVal, val));
    return padding + ((clampedVal - minVal) / (maxVal - minVal)) * (svgWidth - 2 * padding);
  };

  // Generate tick marks
  const ticks = [];
  for (let t = minVal; t <= maxVal; t++) {
    ticks.push(t);
  }

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Positivity Explorer
      </h3>

      {/* Number line visualization */}
      <div className="flex justify-center mb-6">
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

          {/* Negative region */}
          <rect
            x={padding}
            y={lineY - 15}
            width={valueToX(0) - padding}
            height={30}
            fill="rgba(239, 68, 68, 0.1)"
          />
          <text x={padding + 30} y={lineY - 20} fill="#ef4444" fontSize="10">Negative</text>

          {/* Positive region */}
          <rect
            x={valueToX(0)}
            y={lineY - 15}
            width={svgWidth - padding - valueToX(0)}
            height={30}
            fill="rgba(52, 211, 153, 0.1)"
          />
          <text x={svgWidth - padding - 45} y={lineY - 20} fill="#34d399" fontSize="10">Positive</text>

          {/* Tick marks */}
          {ticks.map((tick) => (
            <g key={tick}>
              <line
                x1={valueToX(tick)}
                y1={lineY - 6}
                x2={valueToX(tick)}
                y2={lineY + 6}
                stroke={tick === 0 ? '#fff' : '#6b7280'}
                strokeWidth={tick === 0 ? 2 : 1}
              />
              <text
                x={valueToX(tick)}
                y={lineY + 20}
                textAnchor="middle"
                fill={tick === 0 ? '#fff' : '#9ca3af'}
                fontSize="11"
              >
                {tick}
              </text>
            </g>
          ))}

          {/* Point for a */}
          {a >= minVal && a <= maxVal && (
            <g>
              <circle cx={valueToX(a)} cy={lineY} r={8} fill="#22d3ee" />
              <text x={valueToX(a)} y={lineY - 15} textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">a</text>
            </g>
          )}

          {/* Point for b */}
          {b >= minVal && b <= maxVal && (
            <g>
              <circle cx={valueToX(b)} cy={lineY} r={8} fill="#a855f7" />
              <text x={valueToX(b)} y={lineY - 15} textAnchor="middle" fill="#a855f7" fontSize="12" fontWeight="bold">b</text>
            </g>
          )}
        </svg>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-2 gap-4 mb-6 max-w-sm mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">a</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={0.5}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className={`text-center font-mono text-lg ${getColor(classA)}`}>{a}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">b</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={0.5}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className={`text-center font-mono text-lg ${getColor(classB)}`}>{b}</div>
        </div>
      </div>

      {/* Classification display */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className={`p-3 rounded-lg border ${getBgColor(classA)} text-center`}>
          <div className="text-xs text-dark-500 mb-1">a = {a}</div>
          <div className={`font-semibold ${getColor(classA)}`}>{classA}</div>
        </div>
        <div className={`p-3 rounded-lg border ${getBgColor(classB)} text-center`}>
          <div className="text-xs text-dark-500 mb-1">b = {b}</div>
          <div className={`font-semibold ${getColor(classB)}`}>{classB}</div>
        </div>
      </div>

      {/* Operation selector */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setOperation('add')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            operation === 'add'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          a + b
        </button>
        <button
          onClick={() => setOperation('multiply')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            operation === 'multiply'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          a × b
        </button>
      </div>

      {/* Result */}
      <div className={`p-6 rounded-xl border ${getBgColor(classResult)} text-center`}>
        <div className="text-dark-400 mb-2">
          <span className={getColor(classA)}>{a}</span>
          <span className="mx-2">{operation === 'add' ? '+' : '×'}</span>
          <span className={getColor(classB)}>{b}</span>
          <span className="mx-2">=</span>
          <span className={`font-bold text-xl ${getColor(classResult)}`}>
            {operation === 'multiply' ? result.toFixed(2).replace(/\.?0+$/, '') : result}
          </span>
        </div>
        <div className={`text-lg font-semibold ${getColor(classResult)}`}>
          Result is {classResult}
        </div>
      </div>

      {/* Sign rules reference */}
      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h4 className="text-sm font-semibold text-dark-300 mb-3 text-center">Sign Rules for Multiplication</h4>
        <div className="grid grid-cols-3 gap-2 text-sm text-center">
          <div className="p-2 rounded bg-dark-700/50">
            <span className="text-emerald-400">+</span> × <span className="text-emerald-400">+</span> = <span className="text-emerald-400">+</span>
          </div>
          <div className="p-2 rounded bg-dark-700/50">
            <span className="text-emerald-400">+</span> × <span className="text-red-400">−</span> = <span className="text-red-400">−</span>
          </div>
          <div className="p-2 rounded bg-dark-700/50">
            <span className="text-red-400">−</span> × <span className="text-red-400">−</span> = <span className="text-emerald-400">+</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Trichotomy: Every number is exactly one of positive, negative, or zero.
      </p>
    </div>
  );
}
