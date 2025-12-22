import { useState } from 'react';

type IntervalType = 'open' | 'closed' | 'left-open' | 'right-open' | 'left-infinite' | 'right-infinite' | 'all';

export function IntervalNotationExplorer() {
  const [intervalType, setIntervalType] = useState<IntervalType>('open');
  const [a, setA] = useState(-2);
  const [b, setB] = useState(4);

  const intervals: Record<IntervalType, {
    notation: string;
    inequality: string;
    description: string;
    leftIncluded: boolean;
    rightIncluded: boolean;
    leftInfinite: boolean;
    rightInfinite: boolean;
  }> = {
    'open': {
      notation: `(${a}, ${b})`,
      inequality: `${a} < x < ${b}`,
      description: 'Open interval - endpoints NOT included',
      leftIncluded: false,
      rightIncluded: false,
      leftInfinite: false,
      rightInfinite: false,
    },
    'closed': {
      notation: `[${a}, ${b}]`,
      inequality: `${a} ≤ x ≤ ${b}`,
      description: 'Closed interval - endpoints included',
      leftIncluded: true,
      rightIncluded: true,
      leftInfinite: false,
      rightInfinite: false,
    },
    'left-open': {
      notation: `(${a}, ${b}]`,
      inequality: `${a} < x ≤ ${b}`,
      description: 'Half-open (left open, right closed)',
      leftIncluded: false,
      rightIncluded: true,
      leftInfinite: false,
      rightInfinite: false,
    },
    'right-open': {
      notation: `[${a}, ${b})`,
      inequality: `${a} ≤ x < ${b}`,
      description: 'Half-open (left closed, right open)',
      leftIncluded: true,
      rightIncluded: false,
      leftInfinite: false,
      rightInfinite: false,
    },
    'left-infinite': {
      notation: `(-∞, ${b})`,
      inequality: `x < ${b}`,
      description: 'All numbers less than b',
      leftIncluded: false,
      rightIncluded: false,
      leftInfinite: true,
      rightInfinite: false,
    },
    'right-infinite': {
      notation: `(${a}, ∞)`,
      inequality: `x > ${a}`,
      description: 'All numbers greater than a',
      leftIncluded: false,
      rightIncluded: false,
      leftInfinite: false,
      rightInfinite: true,
    },
    'all': {
      notation: `(-∞, ∞)`,
      inequality: `x ∈ ℝ`,
      description: 'All real numbers',
      leftIncluded: false,
      rightIncluded: false,
      leftInfinite: true,
      rightInfinite: true,
    },
  };

  const current = intervals[intervalType];

  // SVG dimensions
  const svgWidth = 450;
  const svgHeight = 70;
  const padding = 40;
  const lineY = 40;

  const minVal = current.leftInfinite ? Math.min(-6, b - 4) : a - 3;
  const maxVal = current.rightInfinite ? Math.max(6, a + 4) : b + 3;

  const valueToX = (val: number) => {
    return padding + ((val - minVal) / (maxVal - minVal)) * (svgWidth - 2 * padding);
  };

  // Generate tick marks
  const ticks: number[] = [];
  const tickStart = Math.ceil(minVal);
  const tickEnd = Math.floor(maxVal);
  for (let t = tickStart; t <= tickEnd; t++) {
    ticks.push(t);
  }

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Interval Notation Explorer
      </h3>

      {/* Interval type selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {[
          { key: 'open', label: '(a, b)' },
          { key: 'closed', label: '[a, b]' },
          { key: 'left-open', label: '(a, b]' },
          { key: 'right-open', label: '[a, b)' },
          { key: 'left-infinite', label: '(-∞, b)' },
          { key: 'right-infinite', label: '(a, ∞)' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setIntervalType(key as IntervalType)}
            className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${
              intervalType === key
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Value controls */}
      {!current.leftInfinite && !current.rightInfinite && (
        <div className="grid grid-cols-2 gap-6 mb-6 max-w-sm mx-auto">
          <div>
            <label className="block text-xs text-dark-500 mb-1 text-center">a (left)</label>
            <input
              type="range"
              min={-5}
              max={b - 1}
              step={1}
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
            <div className="text-center font-mono text-lg text-cyan-400">{a}</div>
          </div>
          <div>
            <label className="block text-xs text-dark-500 mb-1 text-center">b (right)</label>
            <input
              type="range"
              min={a + 1}
              max={8}
              step={1}
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full accent-purple-500"
            />
            <div className="text-center font-mono text-lg text-purple-400">{b}</div>
          </div>
        </div>
      )}
      {current.leftInfinite && !current.rightInfinite && (
        <div className="max-w-xs mx-auto mb-6">
          <label className="block text-xs text-dark-500 mb-1 text-center">b (endpoint)</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={1}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{b}</div>
        </div>
      )}
      {!current.leftInfinite && current.rightInfinite && (
        <div className="max-w-xs mx-auto mb-6">
          <label className="block text-xs text-dark-500 mb-1 text-center">a (endpoint)</label>
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
      )}

      {/* Main display */}
      <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700 mb-4">
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div>
            <div className="text-dark-500 text-sm mb-2">Interval Notation</div>
            <div className="font-mono text-2xl text-primary-400">{current.notation}</div>
          </div>
          <div>
            <div className="text-dark-500 text-sm mb-2">Inequality Form</div>
            <div className="font-mono text-2xl text-emerald-400">{current.inequality}</div>
          </div>
        </div>
        <div className="text-center mt-4 text-dark-400 text-sm">
          {current.description}
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

          {/* Arrows */}
          <polygon
            points={`${svgWidth - padding},${lineY} ${svgWidth - padding - 8},${lineY - 4} ${svgWidth - padding - 8},${lineY + 4}`}
            fill="#4b5563"
          />
          <polygon
            points={`${padding},${lineY} ${padding + 8},${lineY - 4} ${padding + 8},${lineY + 4}`}
            fill="#4b5563"
          />

          {/* Interval region */}
          {!current.leftInfinite && !current.rightInfinite && (
            <line
              x1={valueToX(a)}
              y1={lineY}
              x2={valueToX(b)}
              y2={lineY}
              stroke="#34d399"
              strokeWidth={6}
              strokeLinecap="round"
            />
          )}
          {current.leftInfinite && !current.rightInfinite && (
            <line
              x1={padding}
              y1={lineY}
              x2={valueToX(b)}
              y2={lineY}
              stroke="#34d399"
              strokeWidth={6}
              strokeLinecap="round"
            />
          )}
          {!current.leftInfinite && current.rightInfinite && (
            <line
              x1={valueToX(a)}
              y1={lineY}
              x2={svgWidth - padding}
              y2={lineY}
              stroke="#34d399"
              strokeWidth={6}
              strokeLinecap="round"
            />
          )}
          {current.leftInfinite && current.rightInfinite && (
            <line
              x1={padding}
              y1={lineY}
              x2={svgWidth - padding}
              y2={lineY}
              stroke="#34d399"
              strokeWidth={6}
              strokeLinecap="round"
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

          {/* Left endpoint */}
          {!current.leftInfinite && (
            <circle
              cx={valueToX(a)}
              cy={lineY}
              r={7}
              fill={current.leftIncluded ? '#22d3ee' : '#1f2937'}
              stroke="#22d3ee"
              strokeWidth={2}
            />
          )}

          {/* Right endpoint */}
          {!current.rightInfinite && (
            <circle
              cx={valueToX(b)}
              cy={lineY}
              r={7}
              fill={current.rightIncluded ? '#a855f7' : '#1f2937'}
              stroke="#a855f7"
              strokeWidth={2}
            />
          )}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 text-sm text-dark-400">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-cyan-500" />
          <span>Filled = included</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-cyan-500 bg-dark-900" />
          <span>Open = not included</span>
        </div>
      </div>

      {/* Bracket meaning */}
      <div className="mt-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="grid grid-cols-2 gap-4 text-center text-sm">
          <div>
            <span className="text-primary-400 font-mono text-lg">(</span>
            <span className="text-dark-400 ml-2">or</span>
            <span className="text-primary-400 font-mono text-lg ml-2">)</span>
            <div className="text-dark-500 mt-1">Open: endpoint NOT included</div>
          </div>
          <div>
            <span className="text-primary-400 font-mono text-lg">[</span>
            <span className="text-dark-400 ml-2">or</span>
            <span className="text-primary-400 font-mono text-lg ml-2">]</span>
            <div className="text-dark-500 mt-1">Closed: endpoint IS included</div>
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Interval notation provides a compact way to describe solution sets.
      </p>
    </div>
  );
}
