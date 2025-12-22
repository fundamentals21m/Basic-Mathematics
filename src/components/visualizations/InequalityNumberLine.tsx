import { useState } from 'react';

export function InequalityNumberLine() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(-1);

  const difference = a - b;
  const comparison = difference > 0 ? '>' : difference < 0 ? '<' : '=';

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 100;
  const padding = 40;
  const lineY = 60;
  const minVal = -6;
  const maxVal = 6;

  const valueToX = (val: number) => {
    const clampedVal = Math.max(minVal, Math.min(maxVal, val));
    return padding + ((clampedVal - minVal) / (maxVal - minVal)) * (svgWidth - 2 * padding);
  };

  // Generate tick marks
  const ticks: number[] = [];
  for (let t = minVal; t <= maxVal; t++) {
    ticks.push(t);
  }

  const getComparisonColor = () => {
    if (comparison === '>') return 'text-emerald-400';
    if (comparison === '<') return 'text-red-400';
    return 'text-yellow-400';
  };

  const getComparisonBg = () => {
    if (comparison === '>') return 'bg-emerald-500/10 border-emerald-500/50';
    if (comparison === '<') return 'bg-red-500/10 border-red-500/50';
    return 'bg-yellow-500/10 border-yellow-500/50';
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Inequality Number Line
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

          {/* Arrow heads */}
          <polygon
            points={`${svgWidth - padding},${lineY} ${svgWidth - padding - 8},${lineY - 4} ${svgWidth - padding - 8},${lineY + 4}`}
            fill="#4b5563"
          />
          <polygon
            points={`${padding},${lineY} ${padding + 8},${lineY - 4} ${padding + 8},${lineY + 4}`}
            fill="#4b5563"
          />

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
                y={lineY + 22}
                textAnchor="middle"
                fill={tick === 0 ? '#fff' : '#9ca3af'}
                fontSize="11"
              >
                {tick}
              </text>
            </g>
          ))}

          {/* "Left" label */}
          <text x={padding + 20} y={lineY - 25} fill="#9ca3af" fontSize="10">
            smaller ←
          </text>

          {/* "Right" label */}
          <text x={svgWidth - padding - 55} y={lineY - 25} fill="#9ca3af" fontSize="10">
            → larger
          </text>

          {/* Point for b */}
          <g>
            <circle cx={valueToX(b)} cy={lineY} r={10} fill="#a855f7" />
            <text
              x={valueToX(b)}
              y={lineY + 4}
              textAnchor="middle"
              fill="#fff"
              fontSize="11"
              fontWeight="bold"
            >
              b
            </text>
          </g>

          {/* Point for a */}
          <g>
            <circle cx={valueToX(a)} cy={lineY} r={10} fill="#22d3ee" />
            <text
              x={valueToX(a)}
              y={lineY + 4}
              textAnchor="middle"
              fill="#fff"
              fontSize="11"
              fontWeight="bold"
            >
              a
            </text>
          </g>
        </svg>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-2 gap-6 mb-6 max-w-sm mx-auto">
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
          <div className="text-center font-mono text-xl text-cyan-400">{a}</div>
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
          <div className="text-center font-mono text-xl text-purple-400">{b}</div>
        </div>
      </div>

      {/* Comparison result */}
      <div className={`p-6 rounded-xl border ${getComparisonBg()} mb-4`}>
        <div className="text-center">
          <div className="font-mono text-3xl mb-3">
            <span className="text-cyan-400">{a}</span>
            <span className={`mx-3 ${getComparisonColor()}`}>{comparison}</span>
            <span className="text-purple-400">{b}</span>
          </div>
          <div className="text-dark-400 text-sm">
            Because <span className="text-cyan-400">a</span> − <span className="text-purple-400">b</span> = {a} − ({b}) = <span className={getComparisonColor()}>{difference}</span>
            {difference > 0 && ' (positive)'}
            {difference < 0 && ' (negative)'}
            {difference === 0 && ' (zero)'}
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-center text-sm text-dark-300">
          {comparison === '>' && (
            <span>
              <span className="text-cyan-400">a</span> is to the <span className="text-emerald-400">right</span> of <span className="text-purple-400">b</span> on the number line, so a &gt; b
            </span>
          )}
          {comparison === '<' && (
            <span>
              <span className="text-cyan-400">a</span> is to the <span className="text-red-400">left</span> of <span className="text-purple-400">b</span> on the number line, so a &lt; b
            </span>
          )}
          {comparison === '=' && (
            <span>
              <span className="text-cyan-400">a</span> and <span className="text-purple-400">b</span> are at the <span className="text-yellow-400">same point</span>, so a = b
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Greater means "to the right" on the number line.
      </p>
    </div>
  );
}
