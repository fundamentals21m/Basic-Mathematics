import { useState } from 'react';

export function ExponentialGrapher() {
  const [base, setBase] = useState(2);
  const [showCompare, setShowCompare] = useState(false);

  // SVG dimensions
  const svgWidth = 380;
  const svgHeight = 250;
  const padding = 40;

  // View range
  const xMin = -4;
  const xMax = 4;
  const yMin = 0;
  const yMax = 10;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (svgWidth - 2 * padding);
  const toSvgY = (y: number) => svgHeight - padding - ((y - yMin) / (yMax - yMin)) * (svgHeight - 2 * padding);

  // Generate curve points for a^x
  const generateCurve = (a: number): string[] => {
    const points: string[] = [];
    for (let x = xMin; x <= xMax; x += 0.05) {
      const y = Math.pow(a, x);
      if (y >= yMin && y <= yMax) {
        points.push(`${toSvgX(x)},${toSvgY(y)}`);
      }
    }
    return points;
  };

  const mainCurve = generateCurve(base);
  const compareCurves = showCompare ? [
    { base: 2, color: '#22d3ee', points: generateCurve(2) },
    { base: 3, color: '#a855f7', points: generateCurve(3) },
    { base: 0.5, color: '#f97316', points: generateCurve(0.5) },
  ] : [];

  // Calculate some key values
  const keyValues = [
    { x: -2, y: Math.pow(base, -2) },
    { x: -1, y: Math.pow(base, -1) },
    { x: 0, y: 1 },
    { x: 1, y: base },
    { x: 2, y: Math.pow(base, 2) },
  ];

  const formatNumber = (n: number) => {
    if (Number.isInteger(n)) return n.toString();
    if (n < 0.01) return n.toExponential(2);
    return n.toFixed(3).replace(/\.?0+$/, '');
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Exponential Function Grapher
      </h3>

      {/* Function display */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-6 text-center">
        <div className="font-mono text-2xl text-primary-400">
          f(x) = {base}^x
        </div>
        <div className="text-dark-500 text-sm mt-1">
          {base > 1 ? 'Exponential growth (base > 1)' : base === 1 ? 'Constant function' : 'Exponential decay (0 < base < 1)'}
        </div>
      </div>

      {/* Base slider */}
      <div className="mb-6 max-w-sm mx-auto">
        <label className="block text-sm text-dark-400 mb-2 text-center">
          Base (a): <span className="text-primary-400 font-mono">{base}</span>
        </label>
        <input
          type="range"
          min={0.25}
          max={4}
          step={0.25}
          value={base}
          onChange={(e) => setBase(Number(e.target.value))}
          className="w-full accent-primary-500"
        />
        <div className="flex justify-between text-xs text-dark-500 mt-1">
          <span>0.25</span>
          <span>1</span>
          <span>2</span>
          <span>4</span>
        </div>
      </div>

      {/* Compare toggle */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowCompare(!showCompare)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            showCompare
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          {showCompare ? 'Hide Comparison' : 'Compare Bases'}
        </button>
      </div>

      {/* Graph */}
      <div className="flex justify-center mb-6">
        <svg width={svgWidth} height={svgHeight} className="bg-dark-900 rounded-xl border border-dark-700">
          {/* Grid lines */}
          {[-3, -2, -1, 1, 2, 3].map((x) => (
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
          {[2, 4, 6, 8].map((y) => (
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

          {/* Axes */}
          <line
            x1={padding}
            y1={toSvgY(0)}
            x2={svgWidth - padding}
            y2={toSvgY(0)}
            stroke="#6b7280"
            strokeWidth={1.5}
          />
          <line
            x1={toSvgX(0)}
            y1={padding}
            x2={toSvgX(0)}
            y2={svgHeight - padding}
            stroke="#6b7280"
            strokeWidth={1.5}
          />

          {/* y = 1 reference line */}
          <line
            x1={padding}
            y1={toSvgY(1)}
            x2={svgWidth - padding}
            y2={toSvgY(1)}
            stroke="#4b5563"
            strokeWidth={1}
            strokeDasharray="4,4"
          />

          {/* Comparison curves */}
          {compareCurves.map((curve) => (
            curve.points.length > 1 && (
              <polyline
                key={curve.base}
                points={curve.points.join(' ')}
                fill="none"
                stroke={curve.color}
                strokeWidth={1.5}
                opacity={0.6}
              />
            )
          ))}

          {/* Main curve */}
          {mainCurve.length > 1 && (
            <polyline
              points={mainCurve.join(' ')}
              fill="none"
              stroke="#10b981"
              strokeWidth={2.5}
            />
          )}

          {/* Point at (0, 1) - always passes through */}
          <circle
            cx={toSvgX(0)}
            cy={toSvgY(1)}
            r={5}
            fill="#f59e0b"
          />

          {/* Axis labels */}
          <text x={svgWidth - padding} y={toSvgY(0) + 15} fill="#9ca3af" fontSize="11">x</text>
          <text x={toSvgX(0) + 8} y={padding + 5} fill="#9ca3af" fontSize="11">y</text>
          <text x={toSvgX(0) + 5} y={toSvgY(1) - 5} fill="#9ca3af" fontSize="10">1</text>

          {/* Tick labels */}
          {[-3, -2, -1, 1, 2, 3].map((x) => (
            <text key={`xlabel-${x}`} x={toSvgX(x)} y={toSvgY(0) + 15} fill="#6b7280" fontSize="10" textAnchor="middle">
              {x}
            </text>
          ))}
        </svg>
      </div>

      {/* Legend for comparison */}
      {showCompare && (
        <div className="flex justify-center gap-4 mb-4 text-xs">
          <span className="flex items-center gap-1">
            <span className="w-3 h-0.5 bg-cyan-500"></span> 2^x
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-0.5 bg-purple-500"></span> 3^x
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-0.5 bg-orange-500"></span> 0.5^x
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-0.5 bg-emerald-500"></span> {base}^x
          </span>
        </div>
      )}

      {/* Key values table */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-dark-500 text-sm mb-3 text-center">Key Values:</div>
        <div className="overflow-x-auto">
          <table className="w-full text-center font-mono text-sm">
            <thead>
              <tr className="text-dark-400">
                <td className="px-3 py-1">x</td>
                {keyValues.map((kv) => (
                  <td key={kv.x} className="px-3 py-1">{kv.x}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="text-emerald-400">
                <td className="px-3 py-1 text-dark-400">{base}^x</td>
                {keyValues.map((kv) => (
                  <td key={kv.x} className="px-3 py-1">{formatNumber(kv.y)}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Properties */}
      <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
        <div className="text-emerald-400 font-semibold text-sm mb-2">Key Properties:</div>
        <ul className="text-dark-300 text-sm space-y-1">
          <li>• Always passes through (0, 1) since a⁰ = 1</li>
          <li>• Always positive: {base}^x {'>'} 0 for all x</li>
          <li>• {base > 1 ? 'Increasing: larger x → larger y' : base < 1 ? 'Decreasing: larger x → smaller y' : 'Constant: y = 1 for all x'}</li>
        </ul>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Adjust the base to see how exponential functions change.
      </p>
    </div>
  );
}
