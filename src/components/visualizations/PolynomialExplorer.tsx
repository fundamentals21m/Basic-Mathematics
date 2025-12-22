import { useState } from 'react';

export function PolynomialExplorer() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-5);
  const [c, setC] = useState(6);

  // For quadratic ax² + bx + c
  const discriminant = b * b - 4 * a * c;
  const hasRealRoots = discriminant >= 0;

  const root1 = hasRealRoots ? (-b + Math.sqrt(discriminant)) / (2 * a) : null;
  const root2 = hasRealRoots ? (-b - Math.sqrt(discriminant)) / (2 * a) : null;

  const degree = a !== 0 ? 2 : (b !== 0 ? 1 : 0);

  // Evaluate polynomial at a point
  const evaluate = (x: number) => a * x * x + b * x + c;

  // SVG for graph
  const svgWidth = 350;
  const svgHeight = 200;
  const padding = 30;

  const vertexX = a !== 0 ? -b / (2 * a) : 0;
  const vertexY = evaluate(vertexX);

  const xMin = Math.min(-5, vertexX - 4, root1 ?? -5, root2 ?? -5);
  const xMax = Math.max(5, vertexX + 4, root1 ?? 5, root2 ?? 5);
  const yRange = Math.max(Math.abs(vertexY), Math.abs(c)) + 5;
  const yMin = -yRange;
  const yMax = yRange;

  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * (svgWidth - 2 * padding);
  const toSvgY = (y: number) => svgHeight - padding - ((y - yMin) / (yMax - yMin)) * (svgHeight - 2 * padding);

  // Generate curve points
  const curvePoints: string[] = [];
  for (let px = xMin; px <= xMax; px += 0.1) {
    const py = evaluate(px);
    if (py >= yMin && py <= yMax) {
      curvePoints.push(`${toSvgX(px)},${toSvgY(py)}`);
    }
  }

  const formatNumber = (n: number | null) => {
    if (n === null) return '—';
    if (Number.isInteger(n)) return n.toString();
    return n.toFixed(3).replace(/\.?0+$/, '');
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Polynomial Explorer
      </h3>

      {/* Polynomial display */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-6 text-center">
        <div className="text-dark-500 text-sm mb-2">Polynomial:</div>
        <div className="font-mono text-xl text-dark-200">
          f(x) =
          {a !== 0 && <><span className="text-cyan-400">{a}</span>x²</>}
          {b !== 0 && <>{b >= 0 && a !== 0 ? ' + ' : (a !== 0 ? ' − ' : '')}<span className="text-emerald-400">{Math.abs(b)}</span>x</>}
          {c !== 0 && <>{c >= 0 ? ' + ' : ' − '}<span className="text-purple-400">{Math.abs(c)}</span></>}
          {a === 0 && b === 0 && c === 0 && <span className="text-dark-400">0</span>}
        </div>
        <div className="text-dark-500 text-sm mt-2">Degree: {degree}</div>
      </div>

      {/* Coefficient sliders */}
      <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">a (x² coeff)</label>
          <input
            type="range"
            min={-3}
            max={3}
            step={1}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{a}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">b (x coeff)</label>
          <input
            type="range"
            min={-10}
            max={10}
            step={1}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-lg text-emerald-400">{b}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">c (constant)</label>
          <input
            type="range"
            min={-10}
            max={10}
            step={1}
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{c}</div>
        </div>
      </div>

      {/* Graph */}
      <div className="flex justify-center mb-6">
        <svg width={svgWidth} height={svgHeight} className="bg-dark-900 rounded-xl border border-dark-700">
          {/* Axes */}
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

          {/* Curve */}
          {curvePoints.length > 1 && (
            <polyline
              points={curvePoints.join(' ')}
              fill="none"
              stroke="#6366f1"
              strokeWidth={2}
            />
          )}

          {/* Roots */}
          {hasRealRoots && root1 !== null && (
            <circle
              cx={toSvgX(root1)}
              cy={toSvgY(0)}
              r={6}
              fill="#22d3ee"
            />
          )}
          {hasRealRoots && root2 !== null && root1 !== root2 && (
            <circle
              cx={toSvgX(root2)}
              cy={toSvgY(0)}
              r={6}
              fill="#a855f7"
            />
          )}

          {/* Y-intercept */}
          <circle
            cx={toSvgX(0)}
            cy={toSvgY(c)}
            r={4}
            fill="#f59e0b"
          />

          {/* Labels */}
          <text x={svgWidth - padding - 5} y={toSvgY(0) - 5} fill="#9ca3af" fontSize="10">x</text>
          <text x={toSvgX(0) + 5} y={padding + 10} fill="#9ca3af" fontSize="10">y</text>
        </svg>
      </div>

      {/* Roots info */}
      <div className={`p-4 rounded-xl border text-center ${
        hasRealRoots
          ? 'bg-emerald-500/10 border-emerald-500/30'
          : 'bg-red-500/10 border-red-500/30'
      }`}>
        <div className="text-dark-400 text-sm mb-2">
          Roots of f(x) = 0 (at most {degree} roots):
        </div>
        {a === 0 && b === 0 ? (
          <div className="text-dark-300">
            {c === 0 ? 'All x are roots (zero polynomial)' : 'No roots (constant ≠ 0)'}
          </div>
        ) : hasRealRoots ? (
          <div className="font-mono text-lg">
            {root1 === root2 ? (
              <span className="text-cyan-400">x = {formatNumber(root1)} (double root)</span>
            ) : (
              <>
                <span className="text-cyan-400">x₁ = {formatNumber(root1)}</span>
                <span className="text-dark-500 mx-3">and</span>
                <span className="text-purple-400">x₂ = {formatNumber(root2)}</span>
              </>
            )}
          </div>
        ) : (
          <div className="text-red-400">No real roots (discriminant {'<'} 0)</div>
        )}
      </div>

      {/* Factored form */}
      {a !== 0 && hasRealRoots && root1 !== null && root2 !== null && (
        <div className="mt-4 p-3 rounded-xl bg-dark-800/50 border border-dark-700 text-center">
          <div className="text-dark-500 text-sm mb-1">Factored form:</div>
          <div className="font-mono text-dark-300">
            f(x) = {a !== 1 && <span className="text-cyan-400">{a}</span>}
            (x {root1 >= 0 ? '−' : '+'} {formatNumber(Math.abs(root1))})
            {root1 !== root2 && (
              <>(x {root2 >= 0 ? '−' : '+'} {formatNumber(Math.abs(root2))})</>
            )}
            {root1 === root2 && '²'}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex justify-center gap-4 text-xs text-dark-400">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-cyan-500"></span> Root 1
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-purple-500"></span> Root 2
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span> y-intercept
        </span>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Adjust coefficients to see roots and factored form.
      </p>
    </div>
  );
}
