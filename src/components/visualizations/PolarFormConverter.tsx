import { useState } from 'react';

type InputMode = 'rectangular' | 'polar';

export function PolarFormConverter() {
  const [mode, setMode] = useState<InputMode>('rectangular');

  // Rectangular form inputs
  const [realPart, setRealPart] = useState(1);
  const [imagPart, setImagPart] = useState(1);

  // Polar form inputs
  const [modulus, setModulus] = useState(Math.sqrt(2));
  const [argumentDeg, setArgumentDeg] = useState(45);

  // Convert between forms
  const rectToPolar = (re: number, im: number) => ({
    r: Math.sqrt(re * re + im * im),
    theta: Math.atan2(im, re) * 180 / Math.PI,
  });

  const polarToRect = (r: number, thetaDeg: number) => ({
    re: r * Math.cos(thetaDeg * Math.PI / 180),
    im: r * Math.sin(thetaDeg * Math.PI / 180),
  });

  // Get current values based on mode
  const currentRect = mode === 'rectangular'
    ? { re: realPart, im: imagPart }
    : polarToRect(modulus, argumentDeg);

  const currentPolar = mode === 'rectangular'
    ? rectToPolar(realPart, imagPart)
    : { r: modulus, theta: argumentDeg };

  const formatNumber = (n: number) => {
    if (Math.abs(n) < 0.0001) return '0';
    return n.toFixed(3).replace(/\.?0+$/, '');
  };

  const formatComplex = (re: number, im: number) => {
    if (Math.abs(im) < 0.0001) return formatNumber(re);
    if (Math.abs(re) < 0.0001) {
      if (Math.abs(im - 1) < 0.0001) return 'i';
      if (Math.abs(im + 1) < 0.0001) return '-i';
      return `${formatNumber(im)}i`;
    }
    const sign = im >= 0 ? ' + ' : ' - ';
    const imAbs = Math.abs(im);
    const imStr = Math.abs(imAbs - 1) < 0.0001 ? '' : formatNumber(imAbs);
    return `${formatNumber(re)}${sign}${imStr}i`;
  };

  // SVG setup
  const size = 240;
  const center = size / 2;
  const radius = size / 2 - 30;

  const thetaRad = currentPolar.theta * Math.PI / 180;
  const pointX = center + (currentPolar.r / 5) * radius * Math.cos(thetaRad);
  const pointY = center - (currentPolar.r / 5) * radius * Math.sin(thetaRad);

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Polar Form Converter
      </h3>

      {/* Mode selector */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setMode('rectangular')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            mode === 'rectangular'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 hover:bg-dark-600 text-dark-300'
          }`}
        >
          a + bi (Rectangular)
        </button>
        <button
          onClick={() => setMode('polar')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            mode === 'polar'
              ? 'bg-cyan-600 text-white'
              : 'bg-dark-700 hover:bg-dark-600 text-dark-300'
          }`}
        >
          r cis θ (Polar)
        </button>
      </div>

      {/* Input controls */}
      {mode === 'rectangular' ? (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs text-dark-500 mb-1 text-center">Real Part (a)</label>
            <input
              type="range"
              min={-5}
              max={5}
              step={0.25}
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
              step={0.25}
              value={imagPart}
              onChange={(e) => setImagPart(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
            <div className="text-center font-mono text-lg text-cyan-400">{formatNumber(imagPart)}i</div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs text-dark-500 mb-1 text-center">Modulus (r)</label>
            <input
              type="range"
              min={0}
              max={5}
              step={0.25}
              value={modulus}
              onChange={(e) => setModulus(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
            <div className="text-center font-mono text-lg text-amber-400">{formatNumber(modulus)}</div>
          </div>
          <div>
            <label className="block text-xs text-dark-500 mb-1 text-center">Argument (θ)</label>
            <input
              type="range"
              min={-180}
              max={180}
              step={15}
              value={argumentDeg}
              onChange={(e) => setArgumentDeg(Number(e.target.value))}
              className="w-full accent-rose-500"
            />
            <div className="text-center font-mono text-lg text-rose-400">{formatNumber(argumentDeg)}°</div>
          </div>
        </div>
      )}

      {/* Polar diagram */}
      <div className="flex justify-center mb-6">
        <svg width={size} height={size} className="bg-dark-900 rounded-xl border border-dark-700">
          {/* Concentric circles */}
          {[1, 2, 3, 4, 5].map((r) => (
            <circle
              key={r}
              cx={center}
              cy={center}
              r={(r / 5) * radius}
              fill="none"
              stroke="#374151"
              strokeWidth={1}
            />
          ))}

          {/* Radial lines for special angles */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = angle * Math.PI / 180;
            return (
              <line
                key={angle}
                x1={center}
                y1={center}
                x2={center + radius * Math.cos(rad)}
                y2={center - radius * Math.sin(rad)}
                stroke="#374151"
                strokeWidth={1}
              />
            );
          })}

          {/* Axes */}
          <line x1={0} y1={center} x2={size} y2={center} stroke="#4b5563" strokeWidth={1.5} />
          <line x1={center} y1={0} x2={center} y2={size} stroke="#4b5563" strokeWidth={1.5} />

          {/* Angle labels */}
          <text x={size - 15} y={center - 5} fill="#9ca3af" fontSize="10">0°</text>
          <text x={center + 5} y={15} fill="#9ca3af" fontSize="10">90°</text>
          <text x={5} y={center - 5} fill="#9ca3af" fontSize="10">180°</text>
          <text x={center + 5} y={size - 5} fill="#9ca3af" fontSize="10">-90°</text>

          {/* Arc showing angle */}
          {currentPolar.r > 0.1 && (
            <path
              d={`M ${center + 30} ${center} A 30 30 0 ${Math.abs(thetaRad) > Math.PI ? 1 : 0} ${thetaRad >= 0 ? 0 : 1} ${center + 30 * Math.cos(thetaRad)} ${center - 30 * Math.sin(thetaRad)}`}
              fill="none"
              stroke="#f43f5e"
              strokeWidth={2}
            />
          )}

          {/* Vector */}
          <line
            x1={center}
            y1={center}
            x2={pointX}
            y2={pointY}
            stroke="#8b5cf6"
            strokeWidth={2.5}
          />

          {/* Point */}
          <circle cx={pointX} cy={pointY} r={6} fill="#8b5cf6" stroke="#fff" strokeWidth={2} />

          {/* Modulus label */}
          {currentPolar.r > 0.5 && (
            <text
              x={(center + pointX) / 2 + 10}
              y={(center + pointY) / 2 - 5}
              fill="#f59e0b"
              fontSize="12"
              fontWeight="bold"
            >
              r = {formatNumber(currentPolar.r)}
            </text>
          )}
        </svg>
      </div>

      {/* Both forms display */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className={`p-4 rounded-xl border ${mode === 'rectangular' ? 'bg-primary-500/10 border-primary-500/30' : 'bg-dark-800/40 border-dark-700'}`}>
          <div className="text-dark-500 text-xs mb-1 text-center">Rectangular Form</div>
          <div className="font-mono text-xl text-center text-primary-400">
            {formatComplex(currentRect.re, currentRect.im)}
          </div>
        </div>
        <div className={`p-4 rounded-xl border ${mode === 'polar' ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-dark-800/40 border-dark-700'}`}>
          <div className="text-dark-500 text-xs mb-1 text-center">Polar Form</div>
          <div className="font-mono text-xl text-center text-cyan-400">
            {formatNumber(currentPolar.r)} cis {formatNumber(currentPolar.theta)}°
          </div>
        </div>
      </div>

      {/* Euler form */}
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-4">
        <div className="text-dark-500 text-xs mb-1 text-center">Exponential Form (Euler)</div>
        <div className="font-mono text-lg text-center text-amber-400">
          {formatNumber(currentPolar.r)} e<sup>i({formatNumber(currentPolar.theta * Math.PI / 180)})</sup>
        </div>
        <div className="text-dark-500 text-xs text-center mt-1">
          θ = {formatNumber(currentPolar.theta * Math.PI / 180)} radians
        </div>
      </div>

      {/* Quick angle presets */}
      <div className="mb-4">
        <div className="text-dark-500 text-xs text-center mb-2">Special Angles</div>
        <div className="flex flex-wrap justify-center gap-1">
          {[0, 30, 45, 60, 90, 180, -90, -45].map((angle) => (
            <button
              key={angle}
              onClick={() => {
                setMode('polar');
                setArgumentDeg(angle);
                if (modulus < 0.5) setModulus(1);
              }}
              className="px-2 py-1 rounded text-xs bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
            >
              {angle}°
            </button>
          ))}
        </div>
      </div>

      {/* Conversion formulas */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 text-sm">
        <div className="grid grid-cols-2 gap-4 text-dark-400">
          <div>
            <div className="font-semibold text-dark-300 mb-1">To Polar:</div>
            <div>r = √(a² + b²)</div>
            <div>θ = arctan(b/a)</div>
          </div>
          <div>
            <div className="font-semibold text-dark-300 mb-1">To Rectangular:</div>
            <div>a = r cos θ</div>
            <div>b = r sin θ</div>
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Polar form simplifies multiplication: multiply moduli, add angles.
      </p>
    </div>
  );
}
