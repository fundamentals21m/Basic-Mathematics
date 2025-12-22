import { useState } from 'react';

type NumberType = 'integer' | 'rational' | 'irrational';

interface NumberPoint {
  value: number;
  label: string;
  type: NumberType;
  color: string;
}

export function RealNumberLineExplorer() {
  const [showIntegers, setShowIntegers] = useState(true);
  const [showRationals, setShowRationals] = useState(true);
  const [showIrrationals, setShowIrrationals] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState(0);

  // Predefined special numbers
  const specialNumbers: NumberPoint[] = [
    // Integers
    { value: -3, label: '-3', type: 'integer', color: '#22d3ee' },
    { value: -2, label: '-2', type: 'integer', color: '#22d3ee' },
    { value: -1, label: '-1', type: 'integer', color: '#22d3ee' },
    { value: 0, label: '0', type: 'integer', color: '#22d3ee' },
    { value: 1, label: '1', type: 'integer', color: '#22d3ee' },
    { value: 2, label: '2', type: 'integer', color: '#22d3ee' },
    { value: 3, label: '3', type: 'integer', color: '#22d3ee' },
    // Rationals
    { value: 0.5, label: '½', type: 'rational', color: '#34d399' },
    { value: -0.5, label: '-½', type: 'rational', color: '#34d399' },
    { value: 1.5, label: '3/2', type: 'rational', color: '#34d399' },
    { value: -1.5, label: '-3/2', type: 'rational', color: '#34d399' },
    { value: 0.333, label: '⅓', type: 'rational', color: '#34d399' },
    { value: 0.666, label: '⅔', type: 'rational', color: '#34d399' },
    { value: 0.75, label: '¾', type: 'rational', color: '#34d399' },
    { value: 0.25, label: '¼', type: 'rational', color: '#34d399' },
    { value: 2.5, label: '5/2', type: 'rational', color: '#34d399' },
    // Irrationals
    { value: Math.sqrt(2), label: '√2', type: 'irrational', color: '#a855f7' },
    { value: -Math.sqrt(2), label: '-√2', type: 'irrational', color: '#a855f7' },
    { value: Math.sqrt(3), label: '√3', type: 'irrational', color: '#a855f7' },
    { value: Math.PI, label: 'π', type: 'irrational', color: '#a855f7' },
    { value: -Math.PI, label: '-π', type: 'irrational', color: '#a855f7' },
    { value: Math.E, label: 'e', type: 'irrational', color: '#a855f7' },
    { value: (1 + Math.sqrt(5)) / 2, label: 'φ', type: 'irrational', color: '#a855f7' },
  ];

  // Filter visible numbers
  const visibleNumbers = specialNumbers.filter(num => {
    if (num.type === 'integer' && !showIntegers) return false;
    if (num.type === 'rational' && !showRationals) return false;
    if (num.type === 'irrational' && !showIrrationals) return false;
    return true;
  });

  // SVG dimensions
  const svgWidth = 600;
  const svgHeight = 120;
  const padding = 40;
  const lineY = svgHeight / 2;

  // Calculate visible range based on zoom and center
  const range = 8 / zoom;
  const minVal = center - range / 2;
  const maxVal = center + range / 2;

  // Convert value to x position
  const valueToX = (val: number) => {
    return padding + ((val - minVal) / (maxVal - minVal)) * (svgWidth - 2 * padding);
  };

  // Generate tick marks
  const tickInterval = range <= 4 ? 0.5 : range <= 8 ? 1 : 2;
  const ticks: number[] = [];
  const startTick = Math.ceil(minVal / tickInterval) * tickInterval;
  for (let t = startTick; t <= maxVal; t += tickInterval) {
    ticks.push(t);
  }

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Real Number Line Explorer
      </h3>

      {/* Toggle buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          onClick={() => setShowIntegers(!showIntegers)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            showIntegers
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
              : 'bg-dark-700 text-dark-500'
          }`}
        >
          Integers
        </button>
        <button
          onClick={() => setShowRationals(!showRationals)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            showRationals
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
              : 'bg-dark-700 text-dark-500'
          }`}
        >
          Rationals
        </button>
        <button
          onClick={() => setShowIrrationals(!showIrrationals)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            showIrrationals
              ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
              : 'bg-dark-700 text-dark-500'
          }`}
        >
          Irrationals
        </button>
      </div>

      {/* Number line SVG */}
      <div className="overflow-x-auto">
        <svg width={svgWidth} height={svgHeight} className="bg-dark-900 rounded-xl border border-dark-700 mx-auto block">
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
            points={`${svgWidth - padding},${lineY} ${svgWidth - padding - 10},${lineY - 5} ${svgWidth - padding - 10},${lineY + 5}`}
            fill="#4b5563"
          />
          <polygon
            points={`${padding},${lineY} ${padding + 10},${lineY - 5} ${padding + 10},${lineY + 5}`}
            fill="#4b5563"
          />

          {/* Tick marks */}
          {ticks.map((tick, idx) => {
            const x = valueToX(tick);
            if (x < padding || x > svgWidth - padding) return null;
            const isInteger = Number.isInteger(tick);
            return (
              <g key={idx}>
                <line
                  x1={x}
                  y1={lineY - (isInteger ? 8 : 4)}
                  x2={x}
                  y2={lineY + (isInteger ? 8 : 4)}
                  stroke="#6b7280"
                  strokeWidth={isInteger ? 2 : 1}
                />
                {isInteger && (
                  <text
                    x={x}
                    y={lineY + 25}
                    textAnchor="middle"
                    fill="#9ca3af"
                    fontSize="12"
                    fontFamily="monospace"
                  >
                    {tick}
                  </text>
                )}
              </g>
            );
          })}

          {/* Number points */}
          {visibleNumbers.map((num, idx) => {
            const x = valueToX(num.value);
            if (x < padding + 10 || x > svgWidth - padding - 10) return null;
            return (
              <g key={idx}>
                <circle
                  cx={x}
                  cy={lineY}
                  r={6}
                  fill={num.color}
                  opacity={0.8}
                />
                <text
                  x={x}
                  y={lineY - 15}
                  textAnchor="middle"
                  fill={num.color}
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  {num.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Zoom and pan controls */}
      <div className="grid grid-cols-2 gap-4 mt-4 max-w-md mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">Zoom</label>
          <input
            type="range"
            min={0.5}
            max={4}
            step={0.25}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full accent-primary-500"
          />
          <div className="text-center text-dark-400 text-sm">{zoom}x</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">Center</label>
          <input
            type="range"
            min={-3}
            max={3}
            step={0.5}
            value={center}
            onChange={(e) => setCenter(Number(e.target.value))}
            className="w-full accent-primary-500"
          />
          <div className="text-center text-dark-400 text-sm">{center}</div>
        </div>
      </div>

      {/* Preset views */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        <button
          onClick={() => { setZoom(1); setCenter(0); }}
          className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
        >
          Reset View
        </button>
        <button
          onClick={() => { setZoom(2); setCenter(1.5); }}
          className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
        >
          Focus: √2
        </button>
        <button
          onClick={() => { setZoom(2); setCenter(Math.PI); }}
          className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
        >
          Focus: π
        </button>
        <button
          onClick={() => { setZoom(3); setCenter(0.5); }}
          className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
        >
          Between 0 and 1
        </button>
      </div>

      {/* Info display */}
      <div className="mt-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <div className="text-cyan-400 font-semibold">{specialNumbers.filter(n => n.type === 'integer').length}</div>
            <div className="text-dark-500">Integers</div>
          </div>
          <div>
            <div className="text-emerald-400 font-semibold">{specialNumbers.filter(n => n.type === 'rational').length}</div>
            <div className="text-dark-500">Rationals</div>
          </div>
          <div>
            <div className="text-purple-400 font-semibold">{specialNumbers.filter(n => n.type === 'irrational').length}</div>
            <div className="text-dark-500">Irrationals</div>
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Every point on the line is a real number. Zoom in to see how irrationals fit between rationals.
      </p>
    </div>
  );
}
