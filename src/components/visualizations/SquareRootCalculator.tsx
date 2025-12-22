import { useState } from 'react';

export function SquareRootCalculator() {
  const [value, setValue] = useState(9);
  const [showBothSolutions, setShowBothSolutions] = useState(false);

  const sqrtValue = Math.sqrt(value);
  const isInteger = Number.isInteger(sqrtValue);
  const isPerfectSquare = isInteger && sqrtValue >= 0;

  // SVG for visual representation
  const svgSize = 200;
  const padding = 20;
  const maxArea = 25; // Maximum value for full display
  const scale = (svgSize - 2 * padding) / Math.sqrt(maxArea);
  const sideLength = Math.min(Math.sqrt(value), Math.sqrt(maxArea));
  const scaledSide = sideLength * scale;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Square Root Calculator
      </h3>

      {/* Value input */}
      <div className="mb-6">
        <label className="block text-xs text-dark-500 mb-1 text-center">Value (a)</label>
        <input
          type="range"
          min={0}
          max={25}
          step={1}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-primary-500"
        />
        <div className="text-center font-mono text-2xl text-primary-400">{value}</div>
      </div>

      {/* Visual square representation */}
      <div className="flex justify-center mb-6">
        <svg width={svgSize} height={svgSize} className="bg-dark-900 rounded-xl border border-dark-700">
          {value > 0 && (
            <>
              {/* The square */}
              <rect
                x={padding}
                y={padding}
                width={scaledSide}
                height={scaledSide}
                fill="rgba(99, 102, 241, 0.3)"
                stroke="#6366f1"
                strokeWidth={2}
              />

              {/* Area label */}
              <text
                x={padding + scaledSide / 2}
                y={padding + scaledSide / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#6366f1"
                fontSize="16"
                fontWeight="bold"
              >
                Area = {value}
              </text>

              {/* Side length label (bottom) */}
              <line
                x1={padding}
                y1={padding + scaledSide + 10}
                x2={padding + scaledSide}
                y2={padding + scaledSide + 10}
                stroke="#22d3ee"
                strokeWidth={2}
              />
              <text
                x={padding + scaledSide / 2}
                y={padding + scaledSide + 25}
                textAnchor="middle"
                fill="#22d3ee"
                fontSize="12"
              >
                √{value} = {sqrtValue.toFixed(4).replace(/\.?0+$/, '')}
              </text>

              {/* Side length label (right) */}
              <line
                x1={padding + scaledSide + 10}
                y1={padding}
                x2={padding + scaledSide + 10}
                y2={padding + scaledSide}
                stroke="#22d3ee"
                strokeWidth={2}
              />
            </>
          )}
          {value === 0 && (
            <text
              x={svgSize / 2}
              y={svgSize / 2}
              textAnchor="middle"
              fill="#9ca3af"
              fontSize="14"
            >
              √0 = 0
            </text>
          )}
        </svg>
      </div>

      {/* Result display */}
      <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700 mb-4">
        <div className="text-center">
          <div className="text-dark-400 mb-2">Square Root</div>
          <div className="font-mono text-3xl text-cyan-400">
            √{value} = {sqrtValue.toFixed(6).replace(/\.?0+$/, '')}
          </div>
          {isPerfectSquare && value > 0 && (
            <div className="mt-2 text-emerald-400 text-sm">
              ✓ Perfect square! √{value} = {Math.sqrt(value)}
            </div>
          )}
          {!isPerfectSquare && value > 0 && (
            <div className="mt-2 text-yellow-400 text-sm">
              Irrational number (non-terminating decimal)
            </div>
          )}
        </div>
      </div>

      {/* Toggle for showing both solutions */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <label className="text-dark-400 text-sm">Show solutions of x² = {value}</label>
        <button
          onClick={() => setShowBothSolutions(!showBothSolutions)}
          className={`w-12 h-6 rounded-full transition-all ${
            showBothSolutions ? 'bg-primary-600' : 'bg-dark-600'
          }`}
        >
          <div className={`w-5 h-5 rounded-full bg-white transition-all ${
            showBothSolutions ? 'translate-x-6' : 'translate-x-0.5'
          }`} />
        </button>
      </div>

      {/* Both solutions display */}
      {showBothSolutions && value > 0 && (
        <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-4">
          <div className="text-center">
            <div className="text-dark-400 mb-2">Solutions of x² = {value}</div>
            <div className="font-mono text-xl">
              <span className="text-emerald-400">x = +{sqrtValue.toFixed(4).replace(/\.?0+$/, '')}</span>
              <span className="text-dark-500 mx-4">or</span>
              <span className="text-red-400">x = −{sqrtValue.toFixed(4).replace(/\.?0+$/, '')}</span>
            </div>
            <div className="text-dark-500 text-sm mt-2">
              Written as: x = ±√{value}
            </div>
          </div>
        </div>
      )}

      {/* Verification */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 text-center">
          <strong>Verify:</strong> ({sqrtValue.toFixed(4).replace(/\.?0+$/, '')})² = {(sqrtValue * sqrtValue).toFixed(6).replace(/\.?0+$/, '')}
        </div>
      </div>

      {/* Quick examples */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {[1, 4, 9, 16, 25, 2, 3, 5].map(n => (
          <button
            key={n}
            onClick={() => setValue(n)}
            className={`px-3 py-1 rounded text-sm transition-all ${
              value === n
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 hover:bg-dark-600 text-dark-300'
            }`}
          >
            √{n}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        √a is always the <strong>positive</strong> square root by convention.
      </p>
    </div>
  );
}
