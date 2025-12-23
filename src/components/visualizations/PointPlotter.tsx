import { useState } from 'react';

interface Point {
  x: number;
  y: number;
  label: string;
  color: string;
}

export function PointPlotter() {
  const [points, setPoints] = useState<Point[]>([
    { x: 3, y: 2, label: 'A', color: '#3b82f6' },
    { x: -4, y: 1, label: 'B', color: '#06b6d4' },
    { x: -2, y: -3, label: 'C', color: '#10b981' },
    { x: 4, y: -2, label: 'D', color: '#f59e0b' },
  ]);
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const [showMidpoint, setShowMidpoint] = useState(false);
  const [showReflections, setShowReflections] = useState(false);

  const scale = 22;
  const width = 340;
  const height = 340;
  const centerX = width / 2;
  const centerY = height / 2;
  const gridRange = 7;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale,
  });

  const toMath = (svgX: number, svgY: number) => ({
    x: Math.round((svgX - centerX) / scale),
    y: Math.round((centerY - svgY) / scale),
  });

  const handleDrag = (index: number) => {
    setSelectedPoint(index);
  };

  const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (selectedPoint === null) return;

    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const svgX = e.clientX - rect.left;
    const svgY = e.clientY - rect.top;
    const mathCoords = toMath(svgX, svgY);

    mathCoords.x = Math.max(-gridRange, Math.min(gridRange, mathCoords.x));
    mathCoords.y = Math.max(-gridRange, Math.min(gridRange, mathCoords.y));

    setPoints((pts) =>
      pts.map((p, i) =>
        i === selectedPoint ? { ...p, x: mathCoords.x, y: mathCoords.y } : p
      )
    );
  };

  const handleMouseUp = () => {
    setSelectedPoint(null);
  };

  // Calculate midpoint between first two points
  const midpoint =
    points.length >= 2
      ? {
          x: (points[0].x + points[1].x) / 2,
          y: (points[0].y + points[1].y) / 2,
        }
      : null;

  const presets = [
    {
      label: 'Square',
      points: [
        { x: 2, y: 2, label: 'A', color: '#3b82f6' },
        { x: -2, y: 2, label: 'B', color: '#06b6d4' },
        { x: -2, y: -2, label: 'C', color: '#10b981' },
        { x: 2, y: -2, label: 'D', color: '#f59e0b' },
      ],
    },
    {
      label: 'Triangle',
      points: [
        { x: 0, y: 4, label: 'A', color: '#3b82f6' },
        { x: -3, y: -2, label: 'B', color: '#06b6d4' },
        { x: 3, y: -2, label: 'C', color: '#10b981' },
        { x: 0, y: 0, label: 'O', color: '#f59e0b' },
      ],
    },
    {
      label: 'All Quadrants',
      points: [
        { x: 3, y: 2, label: 'A', color: '#3b82f6' },
        { x: -4, y: 1, label: 'B', color: '#06b6d4' },
        { x: -2, y: -3, label: 'C', color: '#10b981' },
        { x: 4, y: -2, label: 'D', color: '#f59e0b' },
      ],
    },
  ];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Point Plotter
      </h3>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          onClick={() => setShowMidpoint(!showMidpoint)}
          className={`px-3 py-1 rounded text-sm transition-all ${
            showMidpoint
              ? 'bg-purple-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          {showMidpoint ? 'Hide Midpoint' : 'Show Midpoint A-B'}
        </button>
        <button
          onClick={() => setShowReflections(!showReflections)}
          className={`px-3 py-1 rounded text-sm transition-all ${
            showReflections
              ? 'bg-amber-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          {showReflections ? 'Hide Reflections' : 'Show Reflections of A'}
        </button>
      </div>

      {/* Coordinate Plane */}
      <div className="flex justify-center mb-4">
        <svg
          width={width}
          height={height}
          className="bg-dark-800 rounded-xl"
          onMouseMove={handleMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Grid */}
          {Array.from({ length: gridRange * 2 + 1 }, (_, i) => i - gridRange).map(
            (n) => (
              <g key={n}>
                <line
                  x1={centerX + n * scale}
                  y1={10}
                  x2={centerX + n * scale}
                  y2={height - 10}
                  stroke={n === 0 ? '#6b7280' : '#374151'}
                  strokeWidth={n === 0 ? 2 : 0.5}
                />
                <line
                  x1={10}
                  y1={centerY - n * scale}
                  x2={width - 10}
                  y2={centerY - n * scale}
                  stroke={n === 0 ? '#6b7280' : '#374151'}
                  strokeWidth={n === 0 ? 2 : 0.5}
                />
              </g>
            )
          )}

          {/* Axis labels */}
          {Array.from({ length: gridRange * 2 + 1 }, (_, i) => i - gridRange).map(
            (n) =>
              n !== 0 &&
              n % 2 === 0 && (
                <g key={`label-${n}`}>
                  <text
                    x={centerX + n * scale}
                    y={centerY + 14}
                    fill="#6b7280"
                    fontSize={9}
                    textAnchor="middle"
                  >
                    {n}
                  </text>
                  <text
                    x={centerX - 10}
                    y={centerY - n * scale + 3}
                    fill="#6b7280"
                    fontSize={9}
                    textAnchor="middle"
                  >
                    {n}
                  </text>
                </g>
              )
          )}

          {/* Reflections of point A */}
          {showReflections && points.length > 0 && (
            <>
              {/* Reflection across x-axis */}
              <circle
                cx={toSvg(points[0].x, -points[0].y).x}
                cy={toSvg(points[0].x, -points[0].y).y}
                r={6}
                fill="transparent"
                stroke="#f59e0b"
                strokeWidth={2}
                strokeDasharray="3,2"
              />
              <text
                x={toSvg(points[0].x, -points[0].y).x + 10}
                y={toSvg(points[0].x, -points[0].y).y}
                fill="#f59e0b"
                fontSize={10}
              >
                A' (x-axis)
              </text>

              {/* Reflection across y-axis */}
              <circle
                cx={toSvg(-points[0].x, points[0].y).x}
                cy={toSvg(-points[0].x, points[0].y).y}
                r={6}
                fill="transparent"
                stroke="#f59e0b"
                strokeWidth={2}
                strokeDasharray="3,2"
              />
              <text
                x={toSvg(-points[0].x, points[0].y).x + 10}
                y={toSvg(-points[0].x, points[0].y).y}
                fill="#f59e0b"
                fontSize={10}
              >
                A'' (y-axis)
              </text>

              {/* Reflection across origin */}
              <circle
                cx={toSvg(-points[0].x, -points[0].y).x}
                cy={toSvg(-points[0].x, -points[0].y).y}
                r={6}
                fill="transparent"
                stroke="#f59e0b"
                strokeWidth={2}
                strokeDasharray="3,2"
              />
              <text
                x={toSvg(-points[0].x, -points[0].y).x + 10}
                y={toSvg(-points[0].x, -points[0].y).y}
                fill="#f59e0b"
                fontSize={10}
              >
                A''' (origin)
              </text>
            </>
          )}

          {/* Line between A and B */}
          {points.length >= 2 && (
            <line
              x1={toSvg(points[0].x, points[0].y).x}
              y1={toSvg(points[0].x, points[0].y).y}
              x2={toSvg(points[1].x, points[1].y).x}
              y2={toSvg(points[1].x, points[1].y).y}
              stroke="#6b7280"
              strokeWidth={1}
              strokeDasharray="4,2"
            />
          )}

          {/* Midpoint */}
          {showMidpoint && midpoint && (
            <>
              <circle
                cx={toSvg(midpoint.x, midpoint.y).x}
                cy={toSvg(midpoint.x, midpoint.y).y}
                r={6}
                fill="#8b5cf6"
                stroke="white"
                strokeWidth={2}
              />
              <text
                x={toSvg(midpoint.x, midpoint.y).x + 10}
                y={toSvg(midpoint.x, midpoint.y).y - 5}
                fill="#8b5cf6"
                fontSize={11}
                fontWeight="bold"
              >
                M({midpoint.x}, {midpoint.y})
              </text>
            </>
          )}

          {/* Points */}
          {points.map((p, i) => {
            const svg = toSvg(p.x, p.y);
            return (
              <g key={i}>
                <circle
                  cx={svg.x}
                  cy={svg.y}
                  r={selectedPoint === i ? 10 : 8}
                  fill={p.color}
                  stroke="white"
                  strokeWidth={2}
                  style={{ cursor: 'grab' }}
                  onMouseDown={() => handleDrag(i)}
                />
                <text
                  x={svg.x}
                  y={svg.y - 12}
                  fill={p.color}
                  fontSize={12}
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {p.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Point coordinates */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {points.map((p, i) => (
          <div
            key={i}
            className="p-2 rounded-lg bg-dark-800/50 border border-dark-700 text-center"
          >
            <div className="font-bold" style={{ color: p.color }}>
              {p.label}
            </div>
            <div className="font-mono text-sm text-dark-300">
              ({p.x}, {p.y})
            </div>
          </div>
        ))}
      </div>

      {/* Presets */}
      <div className="flex flex-wrap justify-center gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => setPoints(preset.points)}
            className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Drag points to move them
      </p>
    </div>
  );
}
