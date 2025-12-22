import { useState } from 'react';

type Mode = 'basic' | 'equation';

export function AbsoluteValueVisualizer() {
  const [mode, setMode] = useState<Mode>('basic');
  const [x, setX] = useState(-3);
  const [a, setA] = useState(2); // For |x + a| = b
  const [b, setB] = useState(5);

  const absX = Math.abs(x);

  // For equation mode: |x + a| = b
  // Solutions: x + a = b or x + a = -b
  // x = b - a or x = -b - a
  const solution1 = b - a;
  const solution2 = -b - a;

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 100;
  const padding = 40;
  const lineY = 60;

  // Determine range based on mode
  const minVal = mode === 'basic' ? -6 : Math.min(-8, solution1 - 2, solution2 - 2);
  const maxVal = mode === 'basic' ? 6 : Math.max(8, solution1 + 2, solution2 + 2);

  const valueToX = (val: number) => {
    const clampedVal = Math.max(minVal, Math.min(maxVal, val));
    return padding + ((clampedVal - minVal) / (maxVal - minVal)) * (svgWidth - 2 * padding);
  };

  // Generate tick marks
  const tickInterval = (maxVal - minVal) > 10 ? 2 : 1;
  const ticks: number[] = [];
  for (let t = Math.ceil(minVal); t <= Math.floor(maxVal); t += tickInterval) {
    ticks.push(t);
  }

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Absolute Value Visualizer
      </h3>

      {/* Mode selector */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setMode('basic')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            mode === 'basic'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Basic |x|
        </button>
        <button
          onClick={() => setMode('equation')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            mode === 'equation'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Solve |x + a| = b
        </button>
      </div>

      {mode === 'basic' && (
        <>
          {/* Number line for basic mode */}
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
                    fontSize="12"
                  >
                    {tick}
                  </text>
                </g>
              ))}

              {/* Distance line from 0 to x */}
              <line
                x1={valueToX(0)}
                y1={lineY - 20}
                x2={valueToX(x)}
                y2={lineY - 20}
                stroke="#22d3ee"
                strokeWidth={3}
                strokeLinecap="round"
              />

              {/* Distance label */}
              <text
                x={(valueToX(0) + valueToX(x)) / 2}
                y={lineY - 28}
                textAnchor="middle"
                fill="#22d3ee"
                fontSize="12"
                fontWeight="bold"
              >
                |x| = {absX}
              </text>

              {/* Point at 0 */}
              <circle cx={valueToX(0)} cy={lineY} r={6} fill="#fff" />

              {/* Point at x */}
              <circle cx={valueToX(x)} cy={lineY} r={8} fill="#a855f7" />
              <text
                x={valueToX(x)}
                y={lineY + 38}
                textAnchor="middle"
                fill="#a855f7"
                fontSize="12"
                fontWeight="bold"
              >
                x = {x}
              </text>
            </svg>
          </div>

          {/* Input for x */}
          <div className="mb-6 max-w-sm mx-auto">
            <label className="block text-xs text-dark-500 mb-1 text-center">x</label>
            <input
              type="range"
              min={-5}
              max={5}
              step={0.5}
              value={x}
              onChange={(e) => setX(Number(e.target.value))}
              className="w-full accent-purple-500"
            />
            <div className="text-center font-mono text-lg text-purple-400">{x}</div>
          </div>

          {/* Result display */}
          <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700">
            <div className="text-center">
              <div className="font-mono text-2xl mb-2">
                |<span className="text-purple-400">{x}</span>| = <span className="text-cyan-400">{absX}</span>
              </div>
              <div className="text-dark-400 text-sm">
                {x >= 0 ? (
                  <span>Since {x} ≥ 0, |{x}| = {x}</span>
                ) : (
                  <span>Since {x} &lt; 0, |{x}| = −({x}) = {absX}</span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 text-center">
            <span className="text-primary-400">
              |x| = distance from x to 0 = {absX} units
            </span>
          </div>
        </>
      )}

      {mode === 'equation' && (
        <>
          {/* Equation display */}
          <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-6 text-center">
            <div className="font-mono text-xl text-dark-200">
              |x + <span className="text-cyan-400">{a}</span>| = <span className="text-emerald-400">{b}</span>
            </div>
          </div>

          {/* Inputs for a and b */}
          <div className="grid grid-cols-2 gap-4 mb-6 max-w-sm mx-auto">
            <div>
              <label className="block text-xs text-dark-500 mb-1 text-center">a</label>
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
              <label className="block text-xs text-dark-500 mb-1 text-center">b</label>
              <input
                type="range"
                min={0}
                max={8}
                step={1}
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className="text-center font-mono text-lg text-emerald-400">{b}</div>
            </div>
          </div>

          {/* Number line showing solutions */}
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

              {/* Center point (-a) */}
              <circle cx={valueToX(-a)} cy={lineY} r={5} fill="#6b7280" />
              <text
                x={valueToX(-a)}
                y={lineY - 12}
                textAnchor="middle"
                fill="#9ca3af"
                fontSize="10"
              >
                {-a}
              </text>

              {/* Solution points */}
              {b > 0 && (
                <>
                  <circle cx={valueToX(solution1)} cy={lineY} r={8} fill="#22d3ee" />
                  <text
                    x={valueToX(solution1)}
                    y={lineY + 38}
                    textAnchor="middle"
                    fill="#22d3ee"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    x = {solution1}
                  </text>

                  <circle cx={valueToX(solution2)} cy={lineY} r={8} fill="#a855f7" />
                  <text
                    x={valueToX(solution2)}
                    y={lineY + 38}
                    textAnchor="middle"
                    fill="#a855f7"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    x = {solution2}
                  </text>
                </>
              )}

              {b === 0 && (
                <>
                  <circle cx={valueToX(-a)} cy={lineY} r={8} fill="#34d399" />
                  <text
                    x={valueToX(-a)}
                    y={lineY + 38}
                    textAnchor="middle"
                    fill="#34d399"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    x = {-a}
                  </text>
                </>
              )}
            </svg>
          </div>

          {/* Solution steps */}
          <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700">
            {b > 0 ? (
              <div className="space-y-3">
                <div className="text-dark-300 text-sm">
                  <strong>Step 1:</strong> The expression inside can equal {b} or −{b}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <div className="text-dark-400 text-xs mb-1">Case 1:</div>
                    <div className="font-mono text-sm">x + {a} = {b}</div>
                    <div className="font-mono text-sm">x = {b} − {a} = <span className="text-cyan-400 font-bold">{solution1}</span></div>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                    <div className="text-dark-400 text-xs mb-1">Case 2:</div>
                    <div className="font-mono text-sm">x + {a} = −{b}</div>
                    <div className="font-mono text-sm">x = −{b} − {a} = <span className="text-purple-400 font-bold">{solution2}</span></div>
                  </div>
                </div>
                <div className="text-center text-emerald-400 font-semibold mt-4">
                  Solutions: x = {solution1} or x = {solution2}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-dark-300 mb-2">When b = 0, we need x + {a} = 0</div>
                <div className="text-emerald-400 font-semibold">
                  Solution: x = {-a}
                </div>
              </div>
            )}
          </div>

          {/* Verification */}
          {b > 0 && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-sm text-center space-y-1">
                <div className="text-dark-400">Verify:</div>
                <div className="text-emerald-400">
                  |{solution1} + {a}| = |{solution1 + a}| = {Math.abs(solution1 + a)} ✓
                </div>
                <div className="text-emerald-400">
                  |{solution2} + {a}| = |{solution2 + a}| = {Math.abs(solution2 + a)} ✓
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        Absolute value measures distance—always non-negative.
      </p>
    </div>
  );
}
