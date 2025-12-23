import { useState } from 'react';

export function DistanceFormulaDemo() {
  const [p1, setP1] = useState({ x: 1, y: 2 });
  const [p2, setP2] = useState({ x: 5, y: 5 });
  const [dragging, setDragging] = useState<'p1' | 'p2' | null>(null);
  const [showConstruction, setShowConstruction] = useState(true);

  const scale = 30;
  const width = 360;
  const height = 300;
  const centerX = 40;
  const centerY = height - 40;
  const gridRange = { x: 10, y: 8 };

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale,
  });

  const toMath = (svgX: number, svgY: number) => ({
    x: Math.max(0, Math.min(gridRange.x, Math.round((svgX - centerX) / scale))),
    y: Math.max(0, Math.min(gridRange.y, Math.round((centerY - svgY) / scale))),
  });

  const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!dragging) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const mathCoords = toMath(e.clientX - rect.left, e.clientY - rect.top);

    if (dragging === 'p1') {
      setP1(mathCoords);
    } else {
      setP2(mathCoords);
    }
  };

  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const q = { x: p2.x, y: p1.y }; // Right angle point

  const presets = [
    { label: '3-4-5', p1: { x: 1, y: 1 }, p2: { x: 4, y: 5 } },
    { label: '5-12-13', p1: { x: 0, y: 0 }, p2: { x: 5, y: 12 } },
    { label: 'Unit', p1: { x: 2, y: 2 }, p2: { x: 3, y: 3 } },
    { label: 'Custom', p1: { x: 1, y: 2 }, p2: { x: 7, y: 6 } },
  ];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Distance Formula Visualizer
      </h3>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          onClick={() => setShowConstruction(!showConstruction)}
          className={`px-3 py-1 rounded text-sm transition-all ${
            showConstruction
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          {showConstruction ? 'Hide Construction' : 'Show Construction'}
        </button>
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => {
              setP1(preset.p1);
              setP2(preset.p2);
            }}
            className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-4">
        <svg
          width={width}
          height={height}
          className="bg-dark-800 rounded-xl"
          onMouseMove={handleMove}
          onMouseUp={() => setDragging(null)}
          onMouseLeave={() => setDragging(null)}
        >
          {/* Grid */}
          {Array.from({ length: gridRange.x + 1 }, (_, i) => (
            <g key={`v${i}`}>
              <line
                x1={centerX + i * scale}
                y1={10}
                x2={centerX + i * scale}
                y2={height - 10}
                stroke={i === 0 ? '#6b7280' : '#374151'}
                strokeWidth={i === 0 ? 2 : 0.5}
              />
              {i > 0 && i % 2 === 0 && (
                <text
                  x={centerX + i * scale}
                  y={centerY + 14}
                  fill="#6b7280"
                  fontSize={9}
                  textAnchor="middle"
                >
                  {i}
                </text>
              )}
            </g>
          ))}
          {Array.from({ length: gridRange.y + 1 }, (_, i) => (
            <g key={`h${i}`}>
              <line
                x1={10}
                y1={centerY - i * scale}
                x2={width - 10}
                y2={centerY - i * scale}
                stroke={i === 0 ? '#6b7280' : '#374151'}
                strokeWidth={i === 0 ? 2 : 0.5}
              />
              {i > 0 && i % 2 === 0 && (
                <text
                  x={centerX - 10}
                  y={centerY - i * scale + 3}
                  fill="#6b7280"
                  fontSize={9}
                  textAnchor="middle"
                >
                  {i}
                </text>
              )}
            </g>
          ))}

          {/* Construction lines */}
          {showConstruction && (
            <>
              {/* Horizontal leg */}
              <line
                x1={toSvg(p1.x, p1.y).x}
                y1={toSvg(p1.x, p1.y).y}
                x2={toSvg(q.x, q.y).x}
                y2={toSvg(q.x, q.y).y}
                stroke="#f59e0b"
                strokeWidth={2}
                strokeDasharray="4,2"
              />
              <text
                x={(toSvg(p1.x, p1.y).x + toSvg(q.x, q.y).x) / 2}
                y={toSvg(p1.x, p1.y).y + 16}
                fill="#f59e0b"
                fontSize={11}
                textAnchor="middle"
              >
                |Δx| = {Math.abs(dx)}
              </text>

              {/* Vertical leg */}
              <line
                x1={toSvg(q.x, q.y).x}
                y1={toSvg(q.x, q.y).y}
                x2={toSvg(p2.x, p2.y).x}
                y2={toSvg(p2.x, p2.y).y}
                stroke="#10b981"
                strokeWidth={2}
                strokeDasharray="4,2"
              />
              <text
                x={toSvg(q.x, q.y).x + 16}
                y={(toSvg(q.x, q.y).y + toSvg(p2.x, p2.y).y) / 2}
                fill="#10b981"
                fontSize={11}
                textAnchor="start"
              >
                |Δy| = {Math.abs(dy)}
              </text>

              {/* Right angle marker */}
              <path
                d={`M ${toSvg(q.x, q.y).x - 8} ${toSvg(q.x, q.y).y}
                    L ${toSvg(q.x, q.y).x - 8} ${toSvg(q.x, q.y).y - 8}
                    L ${toSvg(q.x, q.y).x} ${toSvg(q.x, q.y).y - 8}`}
                fill="none"
                stroke="#6b7280"
                strokeWidth={1}
              />

              {/* Q point */}
              <circle
                cx={toSvg(q.x, q.y).x}
                cy={toSvg(q.x, q.y).y}
                r={4}
                fill="#6b7280"
              />
            </>
          )}

          {/* Distance line (hypotenuse) */}
          <line
            x1={toSvg(p1.x, p1.y).x}
            y1={toSvg(p1.x, p1.y).y}
            x2={toSvg(p2.x, p2.y).x}
            y2={toSvg(p2.x, p2.y).y}
            stroke="#3b82f6"
            strokeWidth={3}
          />

          {/* Distance label */}
          <text
            x={(toSvg(p1.x, p1.y).x + toSvg(p2.x, p2.y).x) / 2 - 15}
            y={(toSvg(p1.x, p1.y).y + toSvg(p2.x, p2.y).y) / 2 - 8}
            fill="#3b82f6"
            fontSize={12}
            fontWeight="bold"
          >
            d = {Number.isInteger(distance) ? distance : distance.toFixed(2)}
          </text>

          {/* Points */}
          <g>
            <circle
              cx={toSvg(p1.x, p1.y).x}
              cy={toSvg(p1.x, p1.y).y}
              r={dragging === 'p1' ? 10 : 8}
              fill="#06b6d4"
              stroke="white"
              strokeWidth={2}
              style={{ cursor: 'grab' }}
              onMouseDown={() => setDragging('p1')}
            />
            <text
              x={toSvg(p1.x, p1.y).x - 16}
              y={toSvg(p1.x, p1.y).y - 10}
              fill="#06b6d4"
              fontSize={11}
              fontWeight="bold"
            >
              P₁
            </text>
          </g>
          <g>
            <circle
              cx={toSvg(p2.x, p2.y).x}
              cy={toSvg(p2.x, p2.y).y}
              r={dragging === 'p2' ? 10 : 8}
              fill="#8b5cf6"
              stroke="white"
              strokeWidth={2}
              style={{ cursor: 'grab' }}
              onMouseDown={() => setDragging('p2')}
            />
            <text
              x={toSvg(p2.x, p2.y).x + 10}
              y={toSvg(p2.x, p2.y).y - 10}
              fill="#8b5cf6"
              fontSize={11}
              fontWeight="bold"
            >
              P₂
            </text>
          </g>
        </svg>
      </div>

      {/* Calculation breakdown */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-cyan-400">P₁ = ({p1.x}, {p1.y})</span>
          <span className="text-purple-400">P₂ = ({p2.x}, {p2.y})</span>
        </div>
        <div className="text-dark-300 text-sm font-mono text-center">
          d = √[({p2.x} - {p1.x})² + ({p2.y} - {p1.y})²]
        </div>
        <div className="text-dark-300 text-sm font-mono text-center">
          = √[{dx}² + {dy}²] = √[{dx * dx} + {dy * dy}] = √{dx * dx + dy * dy}
        </div>
        <div className="text-primary-400 text-center font-bold">
          d = {Number.isInteger(distance) ? distance : distance.toFixed(4)}
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Drag the points to explore different distances
      </p>
    </div>
  );
}
