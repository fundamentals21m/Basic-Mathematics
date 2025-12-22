import { useState, useMemo } from 'react';

interface ParabolaExplorerProps {
  initialA?: number;
  initialB?: number;
  initialC?: number;
}

export function ParabolaExplorer({
  initialA = 1,
  initialB = 0,
  initialC = -4,
}: ParabolaExplorerProps) {
  const [a, setA] = useState(initialA);
  const [b, setB] = useState(initialB);
  const [c, setC] = useState(initialC);

  const width = 600;
  const height = 400;
  const padding = 40;

  // Scale for x: -10 to 10 maps to padding to width-padding
  const scaleX = (x: number) => padding + ((x + 10) / 20) * (width - 2 * padding);
  const scaleY = (y: number) => height / 2 - (y / 10) * (height / 2 - padding);

  // Calculate discriminant and roots
  const discriminant = b * b - 4 * a * c;
  const roots = useMemo(() => {
    if (a === 0) return [];
    if (discriminant < 0) return [];
    if (discriminant === 0) return [-b / (2 * a)];
    const sqrtD = Math.sqrt(discriminant);
    return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
  }, [a, b, c, discriminant]);

  const vertex = useMemo(() => {
    if (a === 0) return null;
    const x = -b / (2 * a);
    const y = a * x * x + b * x + c;
    return { x, y };
  }, [a, b, c]);

  // Generate parabola path
  const parabolaPath = useMemo(() => {
    if (a === 0) {
      // Linear case
      const y1 = b * -10 + c;
      const y2 = b * 10 + c;
      return `M ${scaleX(-10)} ${scaleY(y1)} L ${scaleX(10)} ${scaleY(y2)}`;
    }

    const points: string[] = [];
    for (let x = -10; x <= 10; x += 0.2) {
      const y = a * x * x + b * x + c;
      if (y >= -15 && y <= 15) {
        points.push(`${scaleX(x)},${scaleY(y)}`);
      }
    }
    return points.length > 0 ? `M ${points.join(' L ')}` : '';
  }, [a, b, c]);

  return (
    <div className="demo-container">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Controls */}
        <div className="lg:w-64 space-y-4">
          <h3 className="text-lg font-semibold text-dark-200">Parabola Explorer</h3>

          <div>
            <label className="block text-sm text-dark-400 mb-1">
              a = {a.toFixed(1)}
            </label>
            <input
              type="range"
              min="-3"
              max="3"
              step="0.1"
              value={a}
              onChange={(e) => setA(parseFloat(e.target.value))}
              className="w-full accent-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm text-dark-400 mb-1">
              b = {b.toFixed(1)}
            </label>
            <input
              type="range"
              min="-6"
              max="6"
              step="0.5"
              value={b}
              onChange={(e) => setB(parseFloat(e.target.value))}
              className="w-full accent-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm text-dark-400 mb-1">
              c = {c.toFixed(1)}
            </label>
            <input
              type="range"
              min="-10"
              max="10"
              step="0.5"
              value={c}
              onChange={(e) => setC(parseFloat(e.target.value))}
              className="w-full accent-primary-500"
            />
          </div>

          <div className="pt-4 border-t border-dark-700">
            <p className="text-sm text-dark-300 font-mono">
              y = {a !== 0 && `${a}x² `}
              {b !== 0 && `${b >= 0 && a !== 0 ? '+' : ''} ${b}x `}
              {c !== 0 && `${c >= 0 && (a !== 0 || b !== 0) ? '+' : ''} ${c}`}
              {a === 0 && b === 0 && c === 0 && '0'}
            </p>
          </div>

          <div className="pt-2 space-y-2 text-sm">
            <div>
              <span className="text-dark-400">Discriminant: </span>
              <span className={`font-mono ${discriminant > 0 ? 'text-emerald-400' : discriminant === 0 ? 'text-yellow-400' : 'text-red-400'}`}>
                {discriminant.toFixed(2)}
              </span>
            </div>
            <div>
              <span className="text-dark-400">Roots: </span>
              <span className="font-mono text-primary-400">
                {roots.length === 0 && 'None (real)'}
                {roots.length === 1 && `x = ${roots[0].toFixed(2)}`}
                {roots.length === 2 && `x = ${roots[0].toFixed(2)}, ${roots[1].toFixed(2)}`}
              </span>
            </div>
            {vertex && (
              <div>
                <span className="text-dark-400">Vertex: </span>
                <span className="font-mono text-cyan-400">
                  ({vertex.x.toFixed(2)}, {vertex.y.toFixed(2)})
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Graph */}
        <div className="flex-1 canvas-container p-4">
          <svg width={width} height={height} className="mx-auto">
            {/* Grid */}
            {[-10, -5, 0, 5, 10].map((x) => (
              <line
                key={`vgrid-${x}`}
                x1={scaleX(x)}
                y1={padding}
                x2={scaleX(x)}
                y2={height - padding}
                stroke="currentColor"
                strokeWidth={x === 0 ? 2 : 1}
                className={x === 0 ? 'text-dark-500' : 'text-dark-700'}
              />
            ))}
            {[-10, -5, 0, 5, 10].map((y) => (
              <line
                key={`hgrid-${y}`}
                x1={padding}
                y1={scaleY(y)}
                x2={width - padding}
                y2={scaleY(y)}
                stroke="currentColor"
                strokeWidth={y === 0 ? 2 : 1}
                className={y === 0 ? 'text-dark-500' : 'text-dark-700'}
              />
            ))}

            {/* Axis labels */}
            {[-10, -5, 5, 10].map((x) => (
              <text
                key={`xlabel-${x}`}
                x={scaleX(x)}
                y={scaleY(0) + 15}
                textAnchor="middle"
                className="fill-dark-500 text-xs"
              >
                {x}
              </text>
            ))}
            {[-10, -5, 5, 10].map((y) => (
              <text
                key={`ylabel-${y}`}
                x={scaleX(0) - 8}
                y={scaleY(y) + 4}
                textAnchor="end"
                className="fill-dark-500 text-xs"
              >
                {y}
              </text>
            ))}

            {/* Parabola */}
            <path
              d={parabolaPath}
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              className="text-primary-400"
            />

            {/* Roots */}
            {roots.map((r, i) => (
              <circle
                key={`root-${i}`}
                cx={scaleX(r)}
                cy={scaleY(0)}
                r={6}
                className="fill-emerald-500 stroke-emerald-300"
                strokeWidth={2}
              />
            ))}

            {/* Vertex */}
            {vertex && vertex.y >= -15 && vertex.y <= 15 && (
              <circle
                cx={scaleX(vertex.x)}
                cy={scaleY(vertex.y)}
                r={6}
                className="fill-cyan-500 stroke-cyan-300"
                strokeWidth={2}
              />
            )}
          </svg>
        </div>
      </div>

      <div className="mt-4 flex gap-4 text-sm justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-dark-400">Roots (x-intercepts)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
          <span className="text-dark-400">Vertex</span>
        </div>
      </div>
    </div>
  );
}
