import { useState } from 'react';

export function DiscriminantExplorer() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(-4);

  const discriminant = b * b - 4 * a * c;

  // Determine solution type
  const getSolutionType = () => {
    if (discriminant > 0) return 'two';
    if (discriminant === 0) return 'one';
    return 'none';
  };

  const solutionType = getSolutionType();

  // Calculate solutions if they exist
  const sqrtD = discriminant >= 0 ? Math.sqrt(discriminant) : 0;
  const x1 = discriminant >= 0 ? (-b + sqrtD) / (2 * a) : null;
  const x2 = discriminant >= 0 ? (-b - sqrtD) / (2 * a) : null;

  // SVG for parabola visualization
  const svgWidth = 350;
  const svgHeight = 200;
  const padding = 30;

  // Calculate vertex
  const vertexX = -b / (2 * a);
  const vertexY = a * vertexX * vertexX + b * vertexX + c;

  // Determine view range
  const xMin = Math.min(-5, vertexX - 4, x1 ?? -5, x2 ?? -5);
  const xMax = Math.max(5, vertexX + 4, x1 ?? 5, x2 ?? 5);
  const yRange = Math.abs(vertexY) + 5;
  const yMin = Math.min(-yRange, vertexY - 2);
  const yMax = Math.max(yRange, vertexY + 2);

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (svgWidth - 2 * padding);
  const toSvgY = (y: number) => svgHeight - padding - ((y - yMin) / (yMax - yMin)) * (svgHeight - 2 * padding);

  // Generate parabola points
  const parabolaPoints: string[] = [];
  for (let px = xMin; px <= xMax; px += 0.1) {
    const py = a * px * px + b * px + c;
    if (py >= yMin && py <= yMax) {
      parabolaPoints.push(`${toSvgX(px)},${toSvgY(py)}`);
    }
  }

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Discriminant Explorer
      </h3>

      {/* Equation display */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-4 text-center">
        <div className="font-mono text-xl text-dark-200">
          <span className="text-cyan-400">{a}</span>x²
          {b >= 0 ? ' + ' : ' − '}<span className="text-emerald-400">{Math.abs(b)}</span>x
          {c >= 0 ? ' + ' : ' − '}<span className="text-purple-400">{Math.abs(c)}</span> = 0
        </div>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-3 gap-4 mb-4 max-w-md mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">a</label>
          <input
            type="range"
            min={-3}
            max={3}
            step={0.5}
            value={a}
            onChange={(e) => setA(Number(e.target.value) || 0.5)}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-sm text-cyan-400">{a}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">b</label>
          <input
            type="range"
            min={-6}
            max={6}
            step={1}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-sm text-emerald-400">{b}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">c</label>
          <input
            type="range"
            min={-6}
            max={6}
            step={1}
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-sm text-purple-400">{c}</div>
        </div>
      </div>

      {/* Discriminant calculation */}
      <div className={`p-4 rounded-xl border mb-4 text-center ${
        solutionType === 'two' ? 'bg-emerald-500/10 border-emerald-500/30' :
        solutionType === 'one' ? 'bg-yellow-500/10 border-yellow-500/30' :
        'bg-red-500/10 border-red-500/30'
      }`}>
        <div className="text-dark-400 text-sm mb-2">Discriminant: b² − 4ac</div>
        <div className="font-mono text-lg">
          ({b})² − 4({a})({c}) =
          <span className={`ml-2 font-bold text-2xl ${
            solutionType === 'two' ? 'text-emerald-400' :
            solutionType === 'one' ? 'text-yellow-400' :
            'text-red-400'
          }`}>
            {discriminant}
          </span>
        </div>
        <div className={`mt-2 font-semibold ${
          solutionType === 'two' ? 'text-emerald-400' :
          solutionType === 'one' ? 'text-yellow-400' :
          'text-red-400'
        }`}>
          {solutionType === 'two' && '> 0 → Two distinct real roots'}
          {solutionType === 'one' && '= 0 → One repeated root'}
          {solutionType === 'none' && '< 0 → No real roots'}
        </div>
      </div>

      {/* Parabola visualization */}
      <div className="flex justify-center mb-4">
        <svg width={svgWidth} height={svgHeight} className="bg-dark-900 rounded-xl border border-dark-700">
          {/* Grid lines */}
          <line
            x1={padding}
            y1={toSvgY(0)}
            x2={svgWidth - padding}
            y2={toSvgY(0)}
            stroke="#4b5563"
            strokeWidth={1}
          />
          <line
            x1={toSvgX(0)}
            y1={padding}
            x2={toSvgX(0)}
            y2={svgHeight - padding}
            stroke="#4b5563"
            strokeWidth={1}
          />

          {/* Parabola */}
          {parabolaPoints.length > 1 && (
            <polyline
              points={parabolaPoints.join(' ')}
              fill="none"
              stroke="#6366f1"
              strokeWidth={2}
            />
          )}

          {/* X-axis intersections (roots) */}
          {solutionType !== 'none' && x1 !== null && (
            <circle
              cx={toSvgX(x1)}
              cy={toSvgY(0)}
              r={6}
              fill="#22d3ee"
            />
          )}
          {solutionType === 'two' && x2 !== null && (
            <circle
              cx={toSvgX(x2)}
              cy={toSvgY(0)}
              r={6}
              fill="#a855f7"
            />
          )}

          {/* Vertex */}
          <circle
            cx={toSvgX(vertexX)}
            cy={toSvgY(vertexY)}
            r={4}
            fill="#f59e0b"
          />

          {/* Labels */}
          <text x={svgWidth - padding - 5} y={toSvgY(0) - 5} fill="#9ca3af" fontSize="10">x</text>
          <text x={toSvgX(0) + 5} y={padding + 10} fill="#9ca3af" fontSize="10">y</text>
        </svg>
      </div>

      {/* Solutions display */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        {solutionType === 'two' && (
          <div className="text-center">
            <div className="text-dark-400 text-sm mb-2">Two roots (crosses x-axis twice):</div>
            <div className="font-mono text-lg">
              <span className="text-cyan-400">x₁ = {x1?.toFixed(3).replace(/\.?0+$/, '')}</span>
              <span className="text-dark-500 mx-4">and</span>
              <span className="text-purple-400">x₂ = {x2?.toFixed(3).replace(/\.?0+$/, '')}</span>
            </div>
          </div>
        )}
        {solutionType === 'one' && (
          <div className="text-center">
            <div className="text-dark-400 text-sm mb-2">One root (touches x-axis):</div>
            <div className="font-mono text-lg text-yellow-400">
              x = {x1?.toFixed(3).replace(/\.?0+$/, '')}
            </div>
          </div>
        )}
        {solutionType === 'none' && (
          <div className="text-center">
            <div className="text-red-400">No real roots (parabola doesn't cross x-axis)</div>
            <div className="text-dark-500 text-sm mt-1">
              Vertex at ({vertexX.toFixed(2)}, {vertexY.toFixed(2)}) is {a > 0 ? 'above' : 'below'} x-axis
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 flex justify-center gap-4 text-xs text-dark-400">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-cyan-500"></span> Root 1
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-purple-500"></span> Root 2
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span> Vertex
        </span>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        The discriminant tells you how many times the parabola crosses the x-axis.
      </p>
    </div>
  );
}
