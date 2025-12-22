import { useState } from 'react';

export function DistributiveDemo() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [c, setC] = useState(2);
  const [showExpanded, setShowExpanded] = useState(false);

  // Calculate results
  const bPlusC = b + c;
  const leftSide = a * bPlusC; // a(b + c)
  const ab = a * b;
  const ac = a * c;
  const rightSide = ab + ac; // ab + ac

  // Visual dimensions
  const scale = 25;
  const padding = 20;
  const width = Math.max(bPlusC * scale + padding * 2, 350);
  const height = a * scale + padding * 2 + 60;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Explore the Distributive Property
      </h3>

      {/* Value selectors */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">Value of a (height)</label>
          <input
            type="range"
            min={1}
            max={6}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{a}</div>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Value of b</label>
          <input
            type="range"
            min={1}
            max={6}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-lg text-emerald-400">{b}</div>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Value of c</label>
          <input
            type="range"
            min={1}
            max={6}
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{c}</div>
        </div>
      </div>

      {/* Toggle button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowExpanded(!showExpanded)}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            showExpanded
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
          }`}
        >
          {showExpanded ? 'Show Combined: a(b + c)' : 'Show Expanded: ab + ac'}
        </button>
      </div>

      {/* Area model visualization */}
      <div className="canvas-container p-4 overflow-x-auto">
        <svg width={width} height={height} className="mx-auto">
          {/* Combined rectangle */}
          {!showExpanded && (
            <>
              <rect
                x={padding}
                y={padding}
                width={bPlusC * scale}
                height={a * scale}
                fill="url(#combinedGradient)"
                stroke="currentColor"
                strokeWidth={2}
                className="text-primary-400"
              />
              {/* Width label (b + c) */}
              <text
                x={padding + (bPlusC * scale) / 2}
                y={padding - 8}
                textAnchor="middle"
                className="fill-dark-200 text-sm font-mono"
              >
                b + c = {b} + {c} = {bPlusC}
              </text>
              {/* Height label (a) */}
              <text
                x={padding - 10}
                y={padding + (a * scale) / 2}
                textAnchor="middle"
                className="fill-cyan-400 text-sm font-mono"
                transform={`rotate(-90, ${padding - 10}, ${padding + (a * scale) / 2})`}
              >
                a = {a}
              </text>
              {/* Area label */}
              <text
                x={padding + (bPlusC * scale) / 2}
                y={padding + (a * scale) / 2 + 5}
                textAnchor="middle"
                className="fill-white text-lg font-bold"
              >
                {leftSide}
              </text>
            </>
          )}

          {/* Expanded rectangles */}
          {showExpanded && (
            <>
              {/* First rectangle: a × b */}
              <rect
                x={padding}
                y={padding}
                width={b * scale}
                height={a * scale}
                fill="url(#emeraldGradient)"
                stroke="currentColor"
                strokeWidth={2}
                className="text-emerald-400"
              />
              {/* b label */}
              <text
                x={padding + (b * scale) / 2}
                y={padding - 8}
                textAnchor="middle"
                className="fill-emerald-400 text-sm font-mono"
              >
                b = {b}
              </text>
              {/* Area ab */}
              <text
                x={padding + (b * scale) / 2}
                y={padding + (a * scale) / 2 + 5}
                textAnchor="middle"
                className="fill-white text-lg font-bold"
              >
                {ab}
              </text>

              {/* Second rectangle: a × c */}
              <rect
                x={padding + b * scale + 4}
                y={padding}
                width={c * scale}
                height={a * scale}
                fill="url(#purpleGradient)"
                stroke="currentColor"
                strokeWidth={2}
                className="text-purple-400"
              />
              {/* c label */}
              <text
                x={padding + b * scale + 4 + (c * scale) / 2}
                y={padding - 8}
                textAnchor="middle"
                className="fill-purple-400 text-sm font-mono"
              >
                c = {c}
              </text>
              {/* Area ac */}
              <text
                x={padding + b * scale + 4 + (c * scale) / 2}
                y={padding + (a * scale) / 2 + 5}
                textAnchor="middle"
                className="fill-white text-lg font-bold"
              >
                {ac}
              </text>

              {/* Height label (a) */}
              <text
                x={padding - 10}
                y={padding + (a * scale) / 2}
                textAnchor="middle"
                className="fill-cyan-400 text-sm font-mono"
                transform={`rotate(-90, ${padding - 10}, ${padding + (a * scale) / 2})`}
              >
                a = {a}
              </text>

              {/* Plus sign between rectangles */}
              <text
                x={padding + b * scale + 2}
                y={padding + (a * scale) / 2 + 5}
                textAnchor="middle"
                className="fill-dark-400 text-xl font-bold"
              >
                +
              </text>
            </>
          )}

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="combinedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Equation display */}
      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-center text-lg font-mono">
          <span className="text-cyan-400">{a}</span>
          <span className="text-dark-400">(</span>
          <span className="text-emerald-400">{b}</span>
          <span className="text-dark-400"> + </span>
          <span className="text-purple-400">{c}</span>
          <span className="text-dark-400">)</span>
          <span className="mx-3 text-dark-400">=</span>
          <span className="text-cyan-400">{a}</span>
          <span className="text-dark-400"> × </span>
          <span className="text-emerald-400">{b}</span>
          <span className="mx-2 text-dark-400">+</span>
          <span className="text-cyan-400">{a}</span>
          <span className="text-dark-400"> × </span>
          <span className="text-purple-400">{c}</span>
        </div>
        <div className="text-center text-lg font-mono mt-2">
          <span className="text-cyan-400">{a}</span>
          <span className="text-dark-400"> × </span>
          <span className="text-dark-200">{bPlusC}</span>
          <span className="mx-3 text-dark-400">=</span>
          <span className="text-emerald-400">{ab}</span>
          <span className="mx-2 text-dark-400">+</span>
          <span className="text-purple-400">{ac}</span>
        </div>
        <div className="text-center text-2xl font-bold mt-2">
          <span className="text-primary-400">{leftSide}</span>
          <span className="mx-3 text-dark-400">=</span>
          <span className="text-primary-400">{rightSide}</span>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        The area of the combined rectangle equals the sum of the two smaller rectangles.
        This is the geometric meaning of the distributive property.
      </p>
    </div>
  );
}
