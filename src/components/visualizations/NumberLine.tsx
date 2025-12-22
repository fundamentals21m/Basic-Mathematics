import { useState, useMemo } from 'react';

interface NumberLineProps {
  min?: number;
  max?: number;
  highlightedPoints?: number[];
  showAddition?: { start: number; add: number } | null;
  interactive?: boolean;
}

export function NumberLine({
  min = -10,
  max = 10,
  highlightedPoints = [],
  showAddition = null,
  interactive = true,
}: NumberLineProps) {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const [hoverPoint, setHoverPoint] = useState<number | null>(null);

  const width = 700;
  const height = 120;
  const padding = 40;
  const lineY = height / 2;

  const scale = useMemo(() => {
    const range = max - min;
    return (value: number) => padding + ((value - min) / range) * (width - 2 * padding);
  }, [min, max]);

  const ticks = useMemo(() => {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;
  }, [min, max]);

  const handleClick = (point: number) => {
    if (interactive) {
      setSelectedPoint(selectedPoint === point ? null : point);
    }
  };

  return (
    <div className="demo-container">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-dark-200">Number Line</h3>
        {selectedPoint !== null && (
          <div className="text-sm text-primary-400">
            Selected: <span className="font-mono font-bold">{selectedPoint}</span>
            {selectedPoint < 0 && <span className="text-dark-400 ml-2">(negative integer)</span>}
            {selectedPoint > 0 && <span className="text-dark-400 ml-2">(positive integer)</span>}
            {selectedPoint === 0 && <span className="text-dark-400 ml-2">(zero - the origin)</span>}
          </div>
        )}
      </div>

      <div className="canvas-container p-4 overflow-x-auto">
        <svg
          width={width}
          height={height}
          className="mx-auto"
          style={{ minWidth: width }}
        >
          {/* Main line */}
          <line
            x1={padding - 10}
            y1={lineY}
            x2={width - padding + 10}
            y2={lineY}
            stroke="currentColor"
            strokeWidth={2}
            className="text-dark-500"
          />

          {/* Arrow heads */}
          <polygon
            points={`${width - padding + 15},${lineY} ${width - padding + 5},${lineY - 5} ${width - padding + 5},${lineY + 5}`}
            fill="currentColor"
            className="text-dark-500"
          />
          <polygon
            points={`${padding - 15},${lineY} ${padding - 5},${lineY - 5} ${padding - 5},${lineY + 5}`}
            fill="currentColor"
            className="text-dark-500"
          />

          {/* Ticks and labels */}
          {ticks.map((tick) => {
            const x = scale(tick);
            const isHighlighted = highlightedPoints.includes(tick);
            const isSelected = selectedPoint === tick;
            const isHovered = hoverPoint === tick;
            const isZero = tick === 0;

            return (
              <g key={tick}>
                {/* Tick mark */}
                <line
                  x1={x}
                  y1={lineY - (isZero ? 12 : 8)}
                  x2={x}
                  y2={lineY + (isZero ? 12 : 8)}
                  stroke="currentColor"
                  strokeWidth={isZero ? 3 : isHighlighted || isSelected ? 2 : 1}
                  className={
                    isSelected ? 'text-primary-400' :
                    isHighlighted ? 'text-cyan-400' :
                    isZero ? 'text-dark-300' :
                    'text-dark-600'
                  }
                />

                {/* Label */}
                <text
                  x={x}
                  y={lineY + 30}
                  textAnchor="middle"
                  className={`text-sm font-mono ${
                    isSelected ? 'fill-primary-400 font-bold' :
                    isHighlighted ? 'fill-cyan-400' :
                    isZero ? 'fill-dark-200 font-semibold' :
                    tick < 0 ? 'fill-red-400/70' :
                    'fill-emerald-400/70'
                  }`}
                >
                  {tick}
                </text>

                {/* Interactive point */}
                {interactive && (
                  <circle
                    cx={x}
                    cy={lineY}
                    r={isSelected || isHovered ? 10 : 6}
                    className={`cursor-pointer transition-all duration-150 ${
                      isSelected ? 'fill-primary-500 stroke-primary-300' :
                      isHighlighted ? 'fill-cyan-500/80 stroke-cyan-300' :
                      isHovered ? 'fill-dark-500 stroke-dark-400' :
                      'fill-dark-700 stroke-dark-600'
                    }`}
                    strokeWidth={2}
                    onClick={() => handleClick(tick)}
                    onMouseEnter={() => setHoverPoint(tick)}
                    onMouseLeave={() => setHoverPoint(null)}
                  />
                )}
              </g>
            );
          })}

          {/* Addition visualization */}
          {showAddition && (
            <>
              {/* Starting point */}
              <circle
                cx={scale(showAddition.start)}
                cy={lineY}
                r={8}
                className="fill-emerald-500 stroke-emerald-300"
                strokeWidth={2}
              />

              {/* Arc showing movement */}
              <path
                d={`M ${scale(showAddition.start)} ${lineY - 15}
                    Q ${(scale(showAddition.start) + scale(showAddition.start + showAddition.add)) / 2} ${lineY - 40}
                    ${scale(showAddition.start + showAddition.add)} ${lineY - 15}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeDasharray="4 2"
                className={showAddition.add >= 0 ? 'text-emerald-400' : 'text-red-400'}
                markerEnd="url(#arrowhead)"
              />

              {/* Ending point */}
              <circle
                cx={scale(showAddition.start + showAddition.add)}
                cy={lineY}
                r={8}
                className="fill-primary-500 stroke-primary-300"
                strokeWidth={2}
              />

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
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    className={showAddition.add >= 0 ? 'fill-emerald-400' : 'fill-red-400'}
                  />
                </marker>
              </defs>
            </>
          )}

          {/* Region labels */}
          <text x={padding + 20} y={lineY - 35} className="fill-red-400/60 text-xs">
            Negative integers
          </text>
          <text x={width - padding - 90} y={lineY - 35} className="fill-emerald-400/60 text-xs">
            Positive integers
          </text>
        </svg>
      </div>

      {interactive && (
        <p className="text-sm text-dark-500 mt-4 text-center">
          Click on any point to select it. Positive integers are to the right of zero, negative integers to the left.
        </p>
      )}
    </div>
  );
}
