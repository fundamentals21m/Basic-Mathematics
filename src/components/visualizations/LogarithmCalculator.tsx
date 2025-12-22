import { useState } from 'react';

export function LogarithmCalculator() {
  const [base, setBase] = useState(2);
  const [value, setValue] = useState(8);
  const [mode, setMode] = useState<'calculate' | 'verify'>('calculate');

  // Calculate log_base(value)
  const logResult = value > 0 ? Math.log(value) / Math.log(base) : null;
  const isValidResult = logResult !== null && isFinite(logResult);

  // For verification: base^logResult should equal value
  const verification = isValidResult ? Math.pow(base, logResult) : null;

  const formatNumber = (n: number | null) => {
    if (n === null) return 'undefined';
    if (!isFinite(n)) return 'undefined';
    if (Number.isInteger(n)) return n.toString();
    return n.toFixed(4).replace(/\.?0+$/, '');
  };

  // Common logarithm examples
  const examples = [
    { base: 2, value: 8, label: 'log₂(8)' },
    { base: 2, value: 16, label: 'log₂(16)' },
    { base: 3, value: 27, label: 'log₃(27)' },
    { base: 10, value: 100, label: 'log₁₀(100)' },
    { base: 10, value: 1000, label: 'log₁₀(1000)' },
    { base: 2, value: 1, label: 'log₂(1)' },
  ];

  // SVG for inverse relationship visualization
  const svgWidth = 350;
  const svgHeight = 200;
  const padding = 40;

  const xMin = -2;
  const xMax = 4;
  const yMin = -2;
  const yMax = 4;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (svgWidth - 2 * padding);
  const toSvgY = (y: number) => svgHeight - padding - ((y - yMin) / (yMax - yMin)) * (svgHeight - 2 * padding);

  // Generate exponential curve y = base^x
  const expPoints: string[] = [];
  for (let x = xMin; x <= xMax; x += 0.05) {
    const y = Math.pow(base, x);
    if (y >= yMin && y <= yMax) {
      expPoints.push(`${toSvgX(x)},${toSvgY(y)}`);
    }
  }

  // Generate log curve y = log_base(x)
  const logPoints: string[] = [];
  for (let x = 0.1; x <= xMax + 2; x += 0.05) {
    const y = Math.log(x) / Math.log(base);
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
      logPoints.push(`${toSvgX(x)},${toSvgY(y)}`);
    }
  }

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Logarithm Calculator
      </h3>

      {/* Mode toggle */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setMode('calculate')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            mode === 'calculate'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Calculate
        </button>
        <button
          onClick={() => setMode('verify')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            mode === 'verify'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Inverse Visualizer
        </button>
      </div>

      {mode === 'calculate' ? (
        <>
          {/* Definition reminder */}
          <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-6 text-center">
            <div className="text-dark-400 text-sm mb-1">Definition:</div>
            <div className="font-mono text-lg text-primary-400">
              log<sub>a</sub>(y) = x  ⟺  a<sup>x</sup> = y
            </div>
          </div>

          {/* Input controls */}
          <div className="grid grid-cols-2 gap-6 mb-6 max-w-sm mx-auto">
            <div>
              <label className="block text-sm text-dark-400 mb-2 text-center">Base (a)</label>
              <input
                type="number"
                min={1.1}
                max={100}
                step={1}
                value={base}
                onChange={(e) => setBase(Math.max(1.1, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-lg bg-dark-800 border border-dark-600 text-dark-200 text-center font-mono text-lg focus:outline-none focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm text-dark-400 mb-2 text-center">Value (y)</label>
              <input
                type="number"
                min={0.001}
                step={1}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-dark-800 border border-dark-600 text-dark-200 text-center font-mono text-lg focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>

          {/* Result */}
          <div className={`p-6 rounded-xl border text-center mb-6 ${
            !isValidResult || value <= 0
              ? 'bg-red-500/10 border-red-500/30'
              : 'bg-emerald-500/10 border-emerald-500/30'
          }`}>
            <div className="font-mono text-2xl mb-2">
              log<sub className="text-cyan-400">{base}</sub>
              (<span className="text-purple-400">{value}</span>) =
              <span className={`ml-2 ${isValidResult ? 'text-emerald-400' : 'text-red-400'}`}>
                {value <= 0 ? 'undefined' : formatNumber(logResult)}
              </span>
            </div>
            {isValidResult && (
              <div className="text-dark-400 text-sm mt-2">
                Because: <span className="text-cyan-400">{base}</span>
                <sup className="text-emerald-400">{formatNumber(logResult)}</sup> =
                <span className="text-purple-400 ml-1">{formatNumber(verification)}</span>
              </div>
            )}
            {value <= 0 && (
              <div className="text-red-400 text-sm mt-2">
                Logarithm is only defined for positive numbers!
              </div>
            )}
          </div>

          {/* Quick examples */}
          <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
            <div className="text-dark-500 text-sm mb-3 text-center">Quick Examples:</div>
            <div className="flex flex-wrap justify-center gap-2">
              {examples.map((ex, idx) => (
                <button
                  key={idx}
                  onClick={() => { setBase(ex.base); setValue(ex.value); }}
                  className="px-3 py-1.5 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm font-mono"
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Inverse relationship visualization */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-6 text-center">
            <div className="text-dark-300 text-sm">
              Exponential and logarithm are <strong className="text-emerald-400">inverse functions</strong>:
            </div>
            <div className="font-mono text-lg mt-2">
              <span className="text-cyan-400">a<sup>log<sub>a</sub>(x)</sup> = x</span>
              <span className="text-dark-500 mx-4">and</span>
              <span className="text-purple-400">log<sub>a</sub>(a<sup>x</sup>) = x</span>
            </div>
          </div>

          {/* Base slider for graph */}
          <div className="mb-6 max-w-xs mx-auto">
            <label className="block text-sm text-dark-400 mb-2 text-center">
              Base: <span className="text-primary-400 font-mono">{base}</span>
            </label>
            <input
              type="range"
              min={1.5}
              max={4}
              step={0.5}
              value={base}
              onChange={(e) => setBase(Number(e.target.value))}
              className="w-full accent-primary-500"
            />
          </div>

          {/* Graph showing both functions */}
          <div className="flex justify-center mb-4">
            <svg width={svgWidth} height={svgHeight} className="bg-dark-900 rounded-xl border border-dark-700">
              {/* Grid */}
              {[-1, 1, 2, 3].map((x) => (
                <line
                  key={`vgrid-${x}`}
                  x1={toSvgX(x)}
                  y1={padding}
                  x2={toSvgX(x)}
                  y2={svgHeight - padding}
                  stroke="#374151"
                  strokeWidth={0.5}
                />
              ))}
              {[-1, 1, 2, 3].map((y) => (
                <line
                  key={`hgrid-${y}`}
                  x1={padding}
                  y1={toSvgY(y)}
                  x2={svgWidth - padding}
                  y2={toSvgY(y)}
                  stroke="#374151"
                  strokeWidth={0.5}
                />
              ))}

              {/* y = x line (reflection line) */}
              <line
                x1={toSvgX(xMin)}
                y1={toSvgY(xMin)}
                x2={toSvgX(xMax)}
                y2={toSvgY(xMax)}
                stroke="#6b7280"
                strokeWidth={1}
                strokeDasharray="4,4"
              />

              {/* Axes */}
              <line
                x1={padding}
                y1={toSvgY(0)}
                x2={svgWidth - padding}
                y2={toSvgY(0)}
                stroke="#9ca3af"
                strokeWidth={1.5}
              />
              <line
                x1={toSvgX(0)}
                y1={padding}
                x2={toSvgX(0)}
                y2={svgHeight - padding}
                stroke="#9ca3af"
                strokeWidth={1.5}
              />

              {/* Exponential curve */}
              {expPoints.length > 1 && (
                <polyline
                  points={expPoints.join(' ')}
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth={2}
                />
              )}

              {/* Log curve */}
              {logPoints.length > 1 && (
                <polyline
                  points={logPoints.join(' ')}
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth={2}
                />
              )}

              {/* Key points */}
              <circle cx={toSvgX(0)} cy={toSvgY(1)} r={4} fill="#22d3ee" />
              <circle cx={toSvgX(1)} cy={toSvgY(0)} r={4} fill="#a855f7" />

              {/* Labels */}
              <text x={svgWidth - padding - 5} y={toSvgY(0) - 5} fill="#9ca3af" fontSize="11">x</text>
              <text x={toSvgX(0) + 8} y={padding + 5} fill="#9ca3af" fontSize="11">y</text>
            </svg>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-4 h-0.5 bg-cyan-500"></span>
              <span className="text-cyan-400">y = {base}^x</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-0.5 bg-purple-500"></span>
              <span className="text-purple-400">y = log<sub>{base}</sub>(x)</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-0.5 bg-gray-500" style={{ borderTop: '1px dashed' }}></span>
              <span className="text-dark-400">y = x</span>
            </span>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-dark-800/50 border border-dark-700 text-center text-sm text-dark-400">
            The graphs are <strong>mirror images</strong> across the line y = x.
            <br />
            Notice: exp passes through (0, 1), log passes through (1, 0).
          </div>
        </>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        {mode === 'calculate'
          ? 'Enter a base and value to calculate the logarithm.'
          : 'Explore how exponential and logarithm are inverse functions.'
        }
      </p>
    </div>
  );
}
