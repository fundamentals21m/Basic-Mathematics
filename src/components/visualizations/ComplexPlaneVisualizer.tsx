import { useState } from 'react';

export function ComplexPlaneVisualizer() {
  const [realPart, setRealPart] = useState(3);
  const [imagPart, setImagPart] = useState(2);
  const [showConjugate, setShowConjugate] = useState(false);

  const modulus = Math.sqrt(realPart * realPart + imagPart * imagPart);
  const argument = Math.atan2(imagPart, realPart);
  const argumentDeg = (argument * 180) / Math.PI;

  // SVG setup
  const size = 280;
  const center = size / 2;
  const scale = 25; // pixels per unit
  const gridMax = 5;

  // Convert complex coordinates to SVG coordinates
  const toSvgX = (x: number) => center + x * scale;
  const toSvgY = (y: number) => center - y * scale; // Flip y for standard orientation

  const formatNumber = (n: number) => {
    if (Math.abs(n) < 0.0001) return '0';
    return n.toFixed(2).replace(/\.?0+$/, '');
  };

  const formatComplex = (re: number, im: number) => {
    if (im === 0) return formatNumber(re);
    if (re === 0) return im === 1 ? 'i' : im === -1 ? '-i' : `${formatNumber(im)}i`;
    const sign = im >= 0 ? '+' : '';
    const imStr = Math.abs(im) === 1 ? '' : formatNumber(Math.abs(im));
    return `${formatNumber(re)} ${sign} ${imStr}i`;
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Complex Plane Visualizer
      </h3>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">Real Part (a)</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={0.5}
            value={realPart}
            onChange={(e) => setRealPart(Number(e.target.value))}
            className="w-full accent-primary-500"
          />
          <div className="text-center font-mono text-lg text-primary-400">{formatNumber(realPart)}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">Imaginary Part (b)</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={0.5}
            value={imagPart}
            onChange={(e) => setImagPart(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{formatNumber(imagPart)}i</div>
        </div>
      </div>

      {/* Complex Plane SVG */}
      <div className="flex justify-center mb-6">
        <svg width={size} height={size} className="bg-dark-900 rounded-xl border border-dark-700">
          {/* Grid lines */}
          {Array.from({ length: gridMax * 2 + 1 }, (_, i) => i - gridMax).map((n) => (
            <g key={n}>
              {/* Vertical grid lines */}
              <line
                x1={toSvgX(n)}
                y1={0}
                x2={toSvgX(n)}
                y2={size}
                stroke={n === 0 ? '#4b5563' : '#374151'}
                strokeWidth={n === 0 ? 2 : 1}
              />
              {/* Horizontal grid lines */}
              <line
                x1={0}
                y1={toSvgY(n)}
                x2={size}
                y2={toSvgY(n)}
                stroke={n === 0 ? '#4b5563' : '#374151'}
                strokeWidth={n === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Axis labels */}
          <text x={size - 15} y={center - 8} fill="#9ca3af" fontSize="12">Re</text>
          <text x={center + 8} y={15} fill="#9ca3af" fontSize="12">Im</text>

          {/* Vector from origin to point */}
          <line
            x1={center}
            y1={center}
            x2={toSvgX(realPart)}
            y2={toSvgY(imagPart)}
            stroke="#8b5cf6"
            strokeWidth={2}
            markerEnd="url(#arrowhead)"
          />

          {/* Dashed lines to axes */}
          <line
            x1={toSvgX(realPart)}
            y1={center}
            x2={toSvgX(realPart)}
            y2={toSvgY(imagPart)}
            stroke="#6366f1"
            strokeWidth={1}
            strokeDasharray="4,4"
          />
          <line
            x1={center}
            y1={toSvgY(imagPart)}
            x2={toSvgX(realPart)}
            y2={toSvgY(imagPart)}
            stroke="#22d3ee"
            strokeWidth={1}
            strokeDasharray="4,4"
          />

          {/* Angle arc */}
          {modulus > 0.1 && (
            <path
              d={`M ${center + 20} ${center} A 20 20 0 ${Math.abs(argument) > Math.PI ? 1 : 0} ${argument >= 0 ? 0 : 1} ${center + 20 * Math.cos(argument)} ${center - 20 * Math.sin(argument)}`}
              fill="none"
              stroke="#f59e0b"
              strokeWidth={2}
            />
          )}

          {/* The point z */}
          <circle
            cx={toSvgX(realPart)}
            cy={toSvgY(imagPart)}
            r={6}
            fill="#8b5cf6"
            stroke="#fff"
            strokeWidth={2}
          />

          {/* Conjugate point */}
          {showConjugate && (
            <>
              <line
                x1={center}
                y1={center}
                x2={toSvgX(realPart)}
                y2={toSvgY(-imagPart)}
                stroke="#f472b6"
                strokeWidth={2}
                strokeDasharray="6,3"
              />
              <circle
                cx={toSvgX(realPart)}
                cy={toSvgY(-imagPart)}
                r={5}
                fill="#f472b6"
                stroke="#fff"
                strokeWidth={2}
              />
              <text
                x={toSvgX(realPart) + 10}
                y={toSvgY(-imagPart)}
                fill="#f472b6"
                fontSize="12"
              >
                z̄
              </text>
            </>
          )}

          {/* Point label */}
          <text
            x={toSvgX(realPart) + 10}
            y={toSvgY(imagPart) - 10}
            fill="#a78bfa"
            fontSize="12"
            fontWeight="bold"
          >
            z
          </text>

          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Display z value */}
      <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700 mb-4">
        <div className="text-center">
          <div className="text-dark-400 mb-2">Complex Number</div>
          <div className="font-mono text-2xl text-primary-400">
            z = {formatComplex(realPart, imagPart)}
          </div>
        </div>
      </div>

      {/* Properties */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-dark-800/40 border border-dark-700 text-center">
          <div className="text-dark-500 text-xs mb-1">Modulus |z|</div>
          <div className="font-mono text-xl text-cyan-400">{formatNumber(modulus)}</div>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/40 border border-dark-700 text-center">
          <div className="text-dark-500 text-xs mb-1">Argument θ</div>
          <div className="font-mono text-xl text-amber-400">{formatNumber(argumentDeg)}°</div>
        </div>
      </div>

      {/* Toggle conjugate */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <label className="text-dark-400 text-sm">Show conjugate z̄</label>
        <button
          onClick={() => setShowConjugate(!showConjugate)}
          className={`w-12 h-6 rounded-full transition-all ${
            showConjugate ? 'bg-pink-600' : 'bg-dark-600'
          }`}
        >
          <div className={`w-5 h-5 rounded-full bg-white transition-all ${
            showConjugate ? 'translate-x-6' : 'translate-x-0.5'
          }`} />
        </button>
      </div>

      {showConjugate && (
        <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/30 mb-4">
          <div className="text-center font-mono">
            <span className="text-dark-400">Conjugate: </span>
            <span className="text-pink-400">z̄ = {formatComplex(realPart, -imagPart)}</span>
          </div>
        </div>
      )}

      {/* Quick presets */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {[
          { re: 1, im: 0, label: '1' },
          { re: 0, im: 1, label: 'i' },
          { re: -1, im: 0, label: '-1' },
          { re: 0, im: -1, label: '-i' },
          { re: 1, im: 1, label: '1+i' },
          { re: 3, im: 4, label: '3+4i' },
        ].map(({ re, im, label }) => (
          <button
            key={label}
            onClick={() => { setRealPart(re); setImagPart(im); }}
            className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        The complex plane maps a + bi to the point (a, b).
      </p>
    </div>
  );
}
