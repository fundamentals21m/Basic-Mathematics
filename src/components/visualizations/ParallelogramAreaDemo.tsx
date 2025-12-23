import { useState } from 'react';

export function ParallelogramAreaDemo() {
  const [base, setBase] = useState(6);
  const [height, setHeight] = useState(4);
  const [slant, setSlant] = useState(2);
  const [showTransform, setShowTransform] = useState(false);

  const scale = 30;
  const offsetX = 60;
  const offsetY = 140;

  // Parallelogram vertices
  const A = { x: offsetX, y: offsetY };
  const B = { x: offsetX + base * scale, y: offsetY };
  const C = { x: offsetX + base * scale + slant * scale, y: offsetY - height * scale };
  const D = { x: offsetX + slant * scale, y: offsetY - height * scale };

  // Cut triangle vertices
  const cutPoint = { x: offsetX + slant * scale, y: offsetY };

  // Animation position for the triangle
  const triangleOffset = showTransform ? base * scale : 0;

  const area = base * height;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Parallelogram to Rectangle
      </h3>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-xs text-dark-500 mb-1">Base</label>
          <input
            type="range"
            min="3"
            max="8"
            step="0.5"
            value={base}
            onChange={(e) => setBase(Number(e.target.value))}
            className="w-full accent-primary-500"
          />
          <div className="text-center font-mono text-primary-400">{base}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1">Height</label>
          <input
            type="range"
            min="2"
            max="5"
            step="0.5"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-cyan-400">{height}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1">Slant</label>
          <input
            type="range"
            min="0"
            max="3"
            step="0.5"
            value={slant}
            onChange={(e) => setSlant(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
          <div className="text-center font-mono text-amber-400">{slant}</div>
        </div>
      </div>

      {/* Transform button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowTransform(!showTransform)}
          className={`px-4 py-2 rounded-lg transition-all ${
            showTransform
              ? 'bg-emerald-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          {showTransform ? 'Show Parallelogram' : 'Transform to Rectangle'}
        </button>
      </div>

      {/* Visualization */}
      <div className="flex justify-center mb-4">
        <svg width="400" height="180" className="bg-dark-800 rounded-xl">
          {/* Grid lines */}
          {Array.from({ length: 12 }, (_, i) => (
            <line
              key={`v${i}`}
              x1={offsetX + i * scale}
              y1={20}
              x2={offsetX + i * scale}
              y2={160}
              stroke="#374151"
              strokeWidth={1}
            />
          ))}
          {Array.from({ length: 6 }, (_, i) => (
            <line
              key={`h${i}`}
              x1={20}
              y1={offsetY - i * scale}
              x2={380}
              y2={offsetY - i * scale}
              stroke="#374151"
              strokeWidth={1}
            />
          ))}

          {/* Main parallelogram body (trapezoid after cut) */}
          {slant > 0 && (
            <polygon
              points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`}
              fill="rgba(59, 130, 246, 0.3)"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          )}

          {/* Rectangle (when slant = 0) */}
          {slant === 0 && (
            <rect
              x={A.x}
              y={A.y - height * scale}
              width={base * scale}
              height={height * scale}
              fill="rgba(59, 130, 246, 0.3)"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          )}

          {/* Cut triangle (moves when transforming) */}
          {slant > 0 && (
            <polygon
              points={`
                ${A.x + triangleOffset},${A.y}
                ${cutPoint.x + triangleOffset},${cutPoint.y}
                ${D.x + triangleOffset},${D.y}
              `}
              fill={showTransform ? 'rgba(16, 185, 129, 0.3)' : 'rgba(59, 130, 246, 0.3)'}
              stroke={showTransform ? '#10b981' : '#3b82f6'}
              strokeWidth={2}
              style={{ transition: 'all 0.5s ease-in-out' }}
            />
          )}

          {/* Cut line indicator */}
          {slant > 0 && !showTransform && (
            <line
              x1={cutPoint.x}
              y1={cutPoint.y}
              x2={D.x}
              y2={D.y}
              stroke="#f59e0b"
              strokeWidth={2}
              strokeDasharray="5,3"
            />
          )}

          {/* Height indicator */}
          <line
            x1={offsetX - 15}
            y1={offsetY}
            x2={offsetX - 15}
            y2={offsetY - height * scale}
            stroke="#06b6d4"
            strokeWidth={2}
          />
          <text x={offsetX - 25} y={offsetY - height * scale / 2} fill="#06b6d4" fontSize={12} textAnchor="middle">h</text>

          {/* Base indicator */}
          <line
            x1={A.x}
            y1={offsetY + 15}
            x2={B.x}
            y2={offsetY + 15}
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <text x={(A.x + B.x) / 2} y={offsetY + 28} fill="#3b82f6" fontSize={12} textAnchor="middle">b</text>

          {/* Labels */}
          <text x={A.x - 5} y={A.y + 15} fill="#9ca3af" fontSize={11}>A</text>
          <text x={B.x + 5} y={B.y + 15} fill="#9ca3af" fontSize={11}>B</text>
        </svg>
      </div>

      {/* Area display */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 text-center mb-4">
        <div className="text-dark-400 text-sm mb-1">Area = base × height</div>
        <div className="font-mono text-dark-300">
          <span className="text-primary-400">{base}</span>
          <span className="text-dark-500"> × </span>
          <span className="text-cyan-400">{height}</span>
          <span className="text-dark-500"> = </span>
          <span className="text-2xl text-emerald-400 font-bold">{area}</span>
        </div>
      </div>

      <p className="text-sm text-dark-500 text-center">
        Cut the triangle and move it to form a rectangle with the same area.
      </p>
    </div>
  );
}
