import { useState } from 'react';

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export function ComplexArithmetic() {
  const [z1Re, setZ1Re] = useState(2);
  const [z1Im, setZ1Im] = useState(1);
  const [z2Re, setZ2Re] = useState(1);
  const [z2Im, setZ2Im] = useState(2);
  const [operation, setOperation] = useState<Operation>('add');

  // Calculate result
  const calculate = (): { re: number; im: number } => {
    switch (operation) {
      case 'add':
        return { re: z1Re + z2Re, im: z1Im + z2Im };
      case 'subtract':
        return { re: z1Re - z2Re, im: z1Im - z2Im };
      case 'multiply': {
        // (a + bi)(c + di) = (ac - bd) + (ad + bc)i
        return {
          re: z1Re * z2Re - z1Im * z2Im,
          im: z1Re * z2Im + z1Im * z2Re,
        };
      }
      case 'divide': {
        // (a + bi)/(c + di) = (a + bi)(c - di) / (c² + d²)
        const denom = z2Re * z2Re + z2Im * z2Im;
        if (denom === 0) return { re: NaN, im: NaN };
        return {
          re: (z1Re * z2Re + z1Im * z2Im) / denom,
          im: (z1Im * z2Re - z1Re * z2Im) / denom,
        };
      }
    }
  };

  const result = calculate();

  const formatNumber = (n: number) => {
    if (isNaN(n)) return 'undefined';
    if (Math.abs(n) < 0.0001) return '0';
    return n.toFixed(3).replace(/\.?0+$/, '');
  };

  const formatComplex = (re: number, im: number) => {
    if (isNaN(re) || isNaN(im)) return 'undefined';
    if (im === 0) return formatNumber(re);
    if (re === 0) {
      if (im === 1) return 'i';
      if (im === -1) return '-i';
      return `${formatNumber(im)}i`;
    }
    const sign = im >= 0 ? ' + ' : ' - ';
    const imAbs = Math.abs(im);
    const imStr = imAbs === 1 ? '' : formatNumber(imAbs);
    return `${formatNumber(re)}${sign}${imStr}i`;
  };

  const opSymbol: Record<Operation, string> = {
    add: '+',
    subtract: '−',
    multiply: '×',
    divide: '÷',
  };

  // SVG setup for visualization
  const size = 200;
  const center = size / 2;
  const scale = 18;

  const toSvgX = (x: number) => center + x * scale;
  const toSvgY = (y: number) => center - y * scale;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Complex Arithmetic
      </h3>

      {/* Operation selector */}
      <div className="flex justify-center gap-2 mb-6">
        {(['add', 'subtract', 'multiply', 'divide'] as Operation[]).map((op) => (
          <button
            key={op}
            onClick={() => setOperation(op)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              operation === op
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 hover:bg-dark-600 text-dark-300'
            }`}
          >
            {opSymbol[op]} {op.charAt(0).toUpperCase() + op.slice(1)}
          </button>
        ))}
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* z₁ controls */}
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <div className="text-blue-400 font-semibold mb-3 text-center">z₁</div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-dark-500 mb-1">Real: {formatNumber(z1Re)}</label>
              <input
                type="range"
                min={-5}
                max={5}
                step={0.5}
                value={z1Re}
                onChange={(e) => setZ1Re(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">Imaginary: {formatNumber(z1Im)}</label>
              <input
                type="range"
                min={-5}
                max={5}
                step={0.5}
                value={z1Im}
                onChange={(e) => setZ1Im(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>
          </div>
          <div className="text-center font-mono text-lg text-blue-400 mt-2">
            {formatComplex(z1Re, z1Im)}
          </div>
        </div>

        {/* z₂ controls */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <div className="text-emerald-400 font-semibold mb-3 text-center">z₂</div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-dark-500 mb-1">Real: {formatNumber(z2Re)}</label>
              <input
                type="range"
                min={-5}
                max={5}
                step={0.5}
                value={z2Re}
                onChange={(e) => setZ2Re(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">Imaginary: {formatNumber(z2Im)}</label>
              <input
                type="range"
                min={-5}
                max={5}
                step={0.5}
                value={z2Im}
                onChange={(e) => setZ2Im(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>
          </div>
          <div className="text-center font-mono text-lg text-emerald-400 mt-2">
            {formatComplex(z2Re, z2Im)}
          </div>
        </div>
      </div>

      {/* Visual representation */}
      <div className="flex justify-center mb-6">
        <svg width={size} height={size} className="bg-dark-900 rounded-xl border border-dark-700">
          {/* Grid */}
          {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((n) => (
            <g key={n}>
              <line
                x1={toSvgX(n)}
                y1={0}
                x2={toSvgX(n)}
                y2={size}
                stroke={n === 0 ? '#4b5563' : '#374151'}
                strokeWidth={n === 0 ? 1.5 : 0.5}
              />
              <line
                x1={0}
                y1={toSvgY(n)}
                x2={size}
                y2={toSvgY(n)}
                stroke={n === 0 ? '#4b5563' : '#374151'}
                strokeWidth={n === 0 ? 1.5 : 0.5}
              />
            </g>
          ))}

          {/* z₁ vector */}
          <line
            x1={center}
            y1={center}
            x2={toSvgX(z1Re)}
            y2={toSvgY(z1Im)}
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <circle cx={toSvgX(z1Re)} cy={toSvgY(z1Im)} r={5} fill="#3b82f6" />

          {/* z₂ vector */}
          <line
            x1={center}
            y1={center}
            x2={toSvgX(z2Re)}
            y2={toSvgY(z2Im)}
            stroke="#10b981"
            strokeWidth={2}
          />
          <circle cx={toSvgX(z2Re)} cy={toSvgY(z2Im)} r={5} fill="#10b981" />

          {/* Result vector */}
          {!isNaN(result.re) && !isNaN(result.im) && (
            <>
              <line
                x1={center}
                y1={center}
                x2={toSvgX(result.re)}
                y2={toSvgY(result.im)}
                stroke="#f59e0b"
                strokeWidth={2.5}
              />
              <circle cx={toSvgX(result.re)} cy={toSvgY(result.im)} r={6} fill="#f59e0b" />
            </>
          )}

          {/* For addition, show parallelogram */}
          {operation === 'add' && (
            <path
              d={`M ${center} ${center} L ${toSvgX(z1Re)} ${toSvgY(z1Im)} L ${toSvgX(result.re)} ${toSvgY(result.im)} L ${toSvgX(z2Re)} ${toSvgY(z2Im)} Z`}
              fill="rgba(245, 158, 11, 0.1)"
              stroke="#f59e0b"
              strokeWidth={1}
              strokeDasharray="4,4"
            />
          )}
        </svg>
      </div>

      {/* Equation display */}
      <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700 mb-4">
        <div className="text-center font-mono text-lg">
          <span className="text-blue-400">({formatComplex(z1Re, z1Im)})</span>
          <span className="text-dark-400 mx-3">{opSymbol[operation]}</span>
          <span className="text-emerald-400">({formatComplex(z2Re, z2Im)})</span>
          <span className="text-dark-400 mx-3">=</span>
          <span className="text-amber-400 text-xl font-bold">{formatComplex(result.re, result.im)}</span>
        </div>
      </div>

      {/* Step-by-step for multiply */}
      {operation === 'multiply' && (
        <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 text-sm">
          <div className="text-dark-400 mb-2">Steps using FOIL:</div>
          <div className="font-mono space-y-1 text-dark-300">
            <div>({formatNumber(z1Re)} + {formatNumber(z1Im)}i)({formatNumber(z2Re)} + {formatNumber(z2Im)}i)</div>
            <div>= {formatNumber(z1Re)}×{formatNumber(z2Re)} + {formatNumber(z1Re)}×{formatNumber(z2Im)}i + {formatNumber(z1Im)}i×{formatNumber(z2Re)} + {formatNumber(z1Im)}i×{formatNumber(z2Im)}i</div>
            <div>= {formatNumber(z1Re * z2Re)} + {formatNumber(z1Re * z2Im)}i + {formatNumber(z1Im * z2Re)}i + {formatNumber(z1Im * z2Im)}i²</div>
            <div>= {formatNumber(z1Re * z2Re)} + {formatNumber(z1Re * z2Im + z1Im * z2Re)}i + ({formatNumber(z1Im * z2Im)})(−1)</div>
            <div className="text-amber-400">= {formatComplex(result.re, result.im)}</div>
          </div>
        </div>
      )}

      {/* Step-by-step for divide */}
      {operation === 'divide' && z2Re !== 0 || z2Im !== 0 ? (
        <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 text-sm">
          <div className="text-dark-400 mb-2">Steps (multiply by conjugate):</div>
          <div className="font-mono space-y-1 text-dark-300">
            <div>= ({formatComplex(z1Re, z1Im)}) × ({formatComplex(z2Re, -z2Im)}) / |z₂|²</div>
            <div>= ({formatComplex(z1Re, z1Im)}) × ({formatComplex(z2Re, -z2Im)}) / {formatNumber(z2Re * z2Re + z2Im * z2Im)}</div>
            <div className="text-amber-400">= {formatComplex(result.re, result.im)}</div>
          </div>
        </div>
      ) : null}

      <p className="text-sm text-dark-500 mt-4 text-center">
        {operation === 'add' && 'Addition forms a parallelogram with the two vectors.'}
        {operation === 'subtract' && 'Subtraction: z₁ - z₂ = z₁ + (-z₂).'}
        {operation === 'multiply' && 'Multiplication: multiply moduli, add arguments.'}
        {operation === 'divide' && 'Division: divide moduli, subtract arguments.'}
      </p>
    </div>
  );
}
