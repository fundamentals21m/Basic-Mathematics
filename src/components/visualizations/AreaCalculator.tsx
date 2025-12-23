import { useState } from 'react';

type ShapeType = 'rectangle' | 'parallelogram' | 'square' | 'rhombus';

export function AreaCalculator() {
  const [shape, setShape] = useState<ShapeType>('rectangle');

  // Rectangle/Parallelogram params
  const [base, setBase] = useState(5);
  const [height, setHeight] = useState(4);

  // Square params
  const [side, setSide] = useState(5);

  // Rhombus params
  const [d1, setD1] = useState(6);
  const [d2, setD2] = useState(8);

  const calculateArea = (): number => {
    switch (shape) {
      case 'rectangle':
      case 'parallelogram':
        return base * height;
      case 'square':
        return side * side;
      case 'rhombus':
        return 0.5 * d1 * d2;
      default:
        return 0;
    }
  };

  const getFormula = (): string => {
    switch (shape) {
      case 'rectangle':
        return `${base} × ${height}`;
      case 'parallelogram':
        return `${base} × ${height}`;
      case 'square':
        return `${side}²`;
      case 'rhombus':
        return `½ × ${d1} × ${d2}`;
      default:
        return '';
    }
  };

  const area = calculateArea();

  const shapeLabels: Record<ShapeType, string> = {
    rectangle: 'Rectangle',
    parallelogram: 'Parallelogram',
    square: 'Square',
    rhombus: 'Rhombus',
  };

  // Draw shape preview
  const drawShape = () => {
    const cx = 150;
    const cy = 80;
    const scale = 15;

    switch (shape) {
      case 'rectangle':
        return (
          <rect
            x={cx - (base * scale) / 2}
            y={cy - (height * scale) / 2}
            width={base * scale}
            height={height * scale}
            fill="rgba(59, 130, 246, 0.3)"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        );
      case 'parallelogram': {
        const slant = 20;
        const w = base * scale;
        const h = height * scale;
        const x = cx - w / 2;
        const y = cy + h / 2;
        return (
          <polygon
            points={`${x},${y} ${x + w},${y} ${x + w + slant},${y - h} ${x + slant},${y - h}`}
            fill="rgba(59, 130, 246, 0.3)"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        );
      }
      case 'square':
        return (
          <rect
            x={cx - (side * scale) / 2}
            y={cy - (side * scale) / 2}
            width={side * scale}
            height={side * scale}
            fill="rgba(16, 185, 129, 0.3)"
            stroke="#10b981"
            strokeWidth={2}
          />
        );
      case 'rhombus': {
        const dx = (d1 * scale) / 2;
        const dy = (d2 * scale) / 2;
        return (
          <>
            <polygon
              points={`${cx},${cy - dy} ${cx + dx},${cy} ${cx},${cy + dy} ${cx - dx},${cy}`}
              fill="rgba(245, 158, 11, 0.3)"
              stroke="#f59e0b"
              strokeWidth={2}
            />
            {/* Diagonals */}
            <line x1={cx - dx} y1={cy} x2={cx + dx} y2={cy} stroke="#f59e0b" strokeWidth={1} strokeDasharray="3,3" />
            <line x1={cx} y1={cy - dy} x2={cx} y2={cy + dy} stroke="#f59e0b" strokeWidth={1} strokeDasharray="3,3" />
          </>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Area Calculator
      </h3>

      {/* Shape selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {(Object.keys(shapeLabels) as ShapeType[]).map((s) => (
          <button
            key={s}
            onClick={() => setShape(s)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              shape === s
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {shapeLabels[s]}
          </button>
        ))}
      </div>

      {/* Shape preview */}
      <div className="flex justify-center mb-4">
        <svg width="300" height="160" className="bg-dark-800 rounded-xl">
          {drawShape()}
        </svg>
      </div>

      {/* Input controls */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        {(shape === 'rectangle' || shape === 'parallelogram') && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-dark-500 mb-1">Base (b)</label>
              <input
                type="number"
                min="1"
                max="20"
                value={base}
                onChange={(e) => setBase(Number(e.target.value) || 1)}
                className="w-full h-10 text-center font-mono bg-dark-700 border border-dark-600 rounded text-primary-400"
              />
            </div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">Height (h)</label>
              <input
                type="number"
                min="1"
                max="20"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value) || 1)}
                className="w-full h-10 text-center font-mono bg-dark-700 border border-dark-600 rounded text-cyan-400"
              />
            </div>
          </div>
        )}

        {shape === 'square' && (
          <div className="max-w-xs mx-auto">
            <label className="block text-xs text-dark-500 mb-1">Side (s)</label>
            <input
              type="number"
              min="1"
              max="20"
              value={side}
              onChange={(e) => setSide(Number(e.target.value) || 1)}
              className="w-full h-10 text-center font-mono bg-dark-700 border border-dark-600 rounded text-emerald-400"
            />
          </div>
        )}

        {shape === 'rhombus' && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-dark-500 mb-1">Diagonal 1 (d₁)</label>
              <input
                type="number"
                min="1"
                max="20"
                value={d1}
                onChange={(e) => setD1(Number(e.target.value) || 1)}
                className="w-full h-10 text-center font-mono bg-dark-700 border border-dark-600 rounded text-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">Diagonal 2 (d₂)</label>
              <input
                type="number"
                min="1"
                max="20"
                value={d2}
                onChange={(e) => setD2(Number(e.target.value) || 1)}
                className="w-full h-10 text-center font-mono bg-dark-700 border border-dark-600 rounded text-amber-400"
              />
            </div>
          </div>
        )}
      </div>

      {/* Formula and result */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 text-center">
        <div className="text-dark-400 text-sm mb-1">
          {shape === 'rhombus' ? 'Area = ½ × d₁ × d₂' : shape === 'square' ? 'Area = s²' : 'Area = b × h'}
        </div>
        <div className="font-mono text-dark-300 mb-2">
          = {getFormula()}
        </div>
        <div className="text-3xl font-bold text-primary-400">
          {area} <span className="text-lg text-dark-500">sq units</span>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Enter dimensions to calculate the area.
      </p>
    </div>
  );
}
