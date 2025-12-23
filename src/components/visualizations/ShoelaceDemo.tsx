import { useState } from 'react';

export function ShoelaceDemo() {
  const [vertices, setVertices] = useState([
    { x: 1, y: 1 },
    { x: 5, y: 2 },
    { x: 3, y: 5 },
  ]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const scale = 30;
  const offsetX = 40;
  const offsetY = 200;

  // Convert math coords to SVG coords
  const toSvg = (x: number, y: number) => ({
    x: offsetX + x * scale,
    y: offsetY - y * scale,
  });

  // Convert SVG coords to math coords
  const toMath = (svgX: number, svgY: number) => ({
    x: Math.round((svgX - offsetX) / scale * 2) / 2,
    y: Math.round((offsetY - svgY) / scale * 2) / 2,
  });

  // Shoelace formula calculation
  const [x1, y1] = [vertices[0].x, vertices[0].y];
  const [x2, y2] = [vertices[1].x, vertices[1].y];
  const [x3, y3] = [vertices[2].x, vertices[2].y];

  const term1 = x1 * (y2 - y3);
  const term2 = x2 * (y3 - y1);
  const term3 = x3 * (y1 - y2);
  const sum = term1 + term2 + term3;
  const area = Math.abs(sum) / 2;

  const presets = [
    { vertices: [{ x: 1, y: 1 }, { x: 5, y: 1 }, { x: 3, y: 4 }], label: 'Isosceles' },
    { vertices: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }], label: 'Right (3-4-5)' },
    { vertices: [{ x: 1, y: 1 }, { x: 5, y: 2 }, { x: 3, y: 5 }], label: 'Scalene' },
    { vertices: [{ x: 2, y: 1 }, { x: 5, y: 1 }, { x: 3.5, y: 3.6 }], label: 'Near equilateral' },
  ];

  const handleMouseDown = (index: number) => {
    setDragIndex(index);
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (dragIndex === null) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const svgX = e.clientX - rect.left;
    const svgY = e.clientY - rect.top;
    const mathCoords = toMath(svgX, svgY);

    // Clamp to grid bounds
    mathCoords.x = Math.max(0, Math.min(8, mathCoords.x));
    mathCoords.y = Math.max(0, Math.min(6, mathCoords.y));

    const newVertices = [...vertices];
    newVertices[dragIndex] = mathCoords;
    setVertices(newVertices);
  };

  const handleMouseUp = () => {
    setDragIndex(null);
  };

  const svgPoints = vertices.map(v => toSvg(v.x, v.y));
  const polygonPoints = svgPoints.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Shoelace Formula Calculator
      </h3>

      {/* Interactive SVG */}
      <div className="flex justify-center mb-4">
        <svg
          width="320"
          height="240"
          className="bg-dark-800 rounded-xl cursor-crosshair"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Grid */}
          {Array.from({ length: 9 }, (_, i) => (
            <line
              key={`v${i}`}
              x1={offsetX + i * scale}
              y1={20}
              x2={offsetX + i * scale}
              y2={offsetY}
              stroke="#374151"
              strokeWidth={1}
            />
          ))}
          {Array.from({ length: 7 }, (_, i) => (
            <line
              key={`h${i}`}
              x1={offsetX}
              y1={offsetY - i * scale}
              x2={offsetX + 8 * scale}
              y2={offsetY - i * scale}
              stroke="#374151"
              strokeWidth={1}
            />
          ))}

          {/* Axes labels */}
          {Array.from({ length: 9 }, (_, i) => (
            <text
              key={`xl${i}`}
              x={offsetX + i * scale}
              y={offsetY + 15}
              fill="#6b7280"
              fontSize={10}
              textAnchor="middle"
            >
              {i}
            </text>
          ))}
          {Array.from({ length: 7 }, (_, i) => (
            <text
              key={`yl${i}`}
              x={offsetX - 10}
              y={offsetY - i * scale + 4}
              fill="#6b7280"
              fontSize={10}
              textAnchor="middle"
            >
              {i}
            </text>
          ))}

          {/* Triangle */}
          <polygon
            points={polygonPoints}
            fill="rgba(59, 130, 246, 0.3)"
            stroke="#3b82f6"
            strokeWidth={2}
          />

          {/* Draggable vertices */}
          {svgPoints.map((p, i) => (
            <g key={i}>
              <circle
                cx={p.x}
                cy={p.y}
                r={dragIndex === i ? 10 : 8}
                fill={['#3b82f6', '#10b981', '#f59e0b'][i]}
                stroke="white"
                strokeWidth={2}
                style={{ cursor: 'grab' }}
                onMouseDown={() => handleMouseDown(i)}
              />
              <text
                x={p.x}
                y={p.y - 15}
                fill={['#3b82f6', '#10b981', '#f59e0b'][i]}
                fontSize={12}
                fontWeight="bold"
                textAnchor="middle"
              >
                ({vertices[i].x}, {vertices[i].y})
              </text>
            </g>
          ))}
        </svg>
      </div>

      <p className="text-xs text-dark-500 text-center mb-4">
        Drag vertices to move them
      </p>

      {/* Step-by-step calculation */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="text-sm text-dark-400 mb-3">Shoelace calculation:</div>
        <div className="space-y-2 font-mono text-sm">
          <div className="text-dark-300">
            Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|
          </div>
          <div className="text-dark-300 pt-2 border-t border-dark-700">
            <span className="text-dark-500">1.</span>{' '}
            <span className="text-primary-400">{x1}</span>(<span className="text-emerald-400">{y2}</span> - <span className="text-amber-400">{y3}</span>) = {x1}({y2 - y3}) = <span className="text-primary-400">{term1}</span>
          </div>
          <div className="text-dark-300">
            <span className="text-dark-500">2.</span>{' '}
            <span className="text-emerald-400">{x2}</span>(<span className="text-amber-400">{y3}</span> - <span className="text-primary-400">{y1}</span>) = {x2}({y3 - y1}) = <span className="text-emerald-400">{term2}</span>
          </div>
          <div className="text-dark-300">
            <span className="text-dark-500">3.</span>{' '}
            <span className="text-amber-400">{x3}</span>(<span className="text-primary-400">{y1}</span> - <span className="text-emerald-400">{y2}</span>) = {x3}({y1 - y2}) = <span className="text-amber-400">{term3}</span>
          </div>
          <div className="text-dark-300 pt-2 border-t border-dark-700">
            <span className="text-dark-500">4.</span> Sum = {term1} + {term2} + {term3} = <span className="text-cyan-400">{sum}</span>
          </div>
          <div className="text-dark-300">
            <span className="text-dark-500">5.</span> Area = ½|{sum}| = ½ × {Math.abs(sum)} = <span className="text-primary-400">{area}</span>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 text-center mb-4">
        <div className="text-dark-400 text-sm mb-1">Triangle Area</div>
        <div className="text-3xl font-bold text-primary-400">
          {area}
        </div>
        <div className="text-dark-500 text-sm mt-1">
          square units
        </div>
      </div>

      {/* Presets */}
      <div className="flex flex-wrap justify-center gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => setVertices(preset.vertices)}
            className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        The shoelace formula computes area directly from vertex coordinates
      </p>
    </div>
  );
}
