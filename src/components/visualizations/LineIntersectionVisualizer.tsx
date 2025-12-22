import { useState, useMemo } from 'react';

export function LineIntersectionVisualizer() {
  // Line 1: a1*x + b1*y = c1
  // Line 2: a2*x + b2*y = c2
  const [a1, setA1] = useState(2);
  const [b1, setB1] = useState(1);
  const [c1, setC1] = useState(4);
  const [a2, setA2] = useState(1);
  const [b2, setB2] = useState(-1);
  const [c2, setC2] = useState(1);

  const viewBox = { minX: -5, maxX: 5, minY: -5, maxY: 5 };
  const width = 300;
  const height = 300;

  // Convert from math coords to SVG coords
  const toSvgX = (x: number) => ((x - viewBox.minX) / (viewBox.maxX - viewBox.minX)) * width;
  const toSvgY = (y: number) => height - ((y - viewBox.minY) / (viewBox.maxY - viewBox.minY)) * height;

  // Calculate line points for drawing
  const getLinePoints = (a: number, b: number, c: number) => {
    const points: { x: number; y: number }[] = [];

    if (Math.abs(b) > 0.001) {
      // y = (c - ax) / b
      for (let x = viewBox.minX - 1; x <= viewBox.maxX + 1; x += 0.5) {
        const y = (c - a * x) / b;
        points.push({ x, y });
      }
    } else if (Math.abs(a) > 0.001) {
      // Vertical line: x = c/a
      const x = c / a;
      points.push({ x, y: viewBox.minY - 1 });
      points.push({ x, y: viewBox.maxY + 1 });
    }

    return points;
  };

  const line1Points = useMemo(() => getLinePoints(a1, b1, c1), [a1, b1, c1]);
  const line2Points = useMemo(() => getLinePoints(a2, b2, c2), [a2, b2, c2]);

  // Calculate intersection
  const det = a1 * b2 - a2 * b1;
  const hasUniqueSolution = Math.abs(det) > 0.001;

  let intersectionX = 0;
  let intersectionY = 0;

  if (hasUniqueSolution) {
    intersectionX = (c1 * b2 - c2 * b1) / det;
    intersectionY = (a1 * c2 - a2 * c1) / det;
  }

  // Check for parallel lines
  const isParallel = !hasUniqueSolution && Math.abs(a1 * c2 - a2 * c1) > 0.001;

  // Check if intersection is in view
  const intersectionInView = hasUniqueSolution &&
    intersectionX >= viewBox.minX && intersectionX <= viewBox.maxX &&
    intersectionY >= viewBox.minY && intersectionY <= viewBox.maxY;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Line Intersection Visualizer
      </h3>

      {/* Equation inputs */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Line 1 */}
        <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
          <div className="text-sm text-cyan-400 text-center mb-2">Line 1</div>
          <div className="flex items-center justify-center gap-1 text-sm">
            <input
              type="number"
              value={a1}
              onChange={(ev) => setA1(Number(ev.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-cyan-400 text-center font-mono"
            />
            <span className="text-dark-300">x +</span>
            <input
              type="number"
              value={b1}
              onChange={(ev) => setB1(Number(ev.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-cyan-400 text-center font-mono"
            />
            <span className="text-dark-300">y =</span>
            <input
              type="number"
              value={c1}
              onChange={(ev) => setC1(Number(ev.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-cyan-400 text-center font-mono"
            />
          </div>
        </div>

        {/* Line 2 */}
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <div className="text-sm text-emerald-400 text-center mb-2">Line 2</div>
          <div className="flex items-center justify-center gap-1 text-sm">
            <input
              type="number"
              value={a2}
              onChange={(ev) => setA2(Number(ev.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-emerald-400 text-center font-mono"
            />
            <span className="text-dark-300">x +</span>
            <input
              type="number"
              value={b2}
              onChange={(ev) => setB2(Number(ev.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-emerald-400 text-center font-mono"
            />
            <span className="text-dark-300">y =</span>
            <input
              type="number"
              value={c2}
              onChange={(ev) => setC2(Number(ev.target.value))}
              className="w-12 px-1 py-0.5 rounded bg-dark-700 border border-dark-600 text-emerald-400 text-center font-mono"
            />
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="flex justify-center mb-4">
        <svg
          width={width}
          height={height}
          className="bg-dark-900 rounded-xl border border-dark-700"
        >
          {/* Grid lines */}
          {Array.from({ length: 11 }, (_, i) => i - 5).map((val) => (
            <g key={val}>
              <line
                x1={toSvgX(val)}
                y1={0}
                x2={toSvgX(val)}
                y2={height}
                stroke={val === 0 ? '#4a5568' : '#2d3748'}
                strokeWidth={val === 0 ? 2 : 1}
              />
              <line
                x1={0}
                y1={toSvgY(val)}
                x2={width}
                y2={toSvgY(val)}
                stroke={val === 0 ? '#4a5568' : '#2d3748'}
                strokeWidth={val === 0 ? 2 : 1}
              />
            </g>
          ))}

          {/* Line 1 */}
          {line1Points.length >= 2 && (
            <polyline
              points={line1Points.map(p => `${toSvgX(p.x)},${toSvgY(p.y)}`).join(' ')}
              fill="none"
              stroke="#22d3ee"
              strokeWidth={2}
            />
          )}

          {/* Line 2 */}
          {line2Points.length >= 2 && (
            <polyline
              points={line2Points.map(p => `${toSvgX(p.x)},${toSvgY(p.y)}`).join(' ')}
              fill="none"
              stroke="#34d399"
              strokeWidth={2}
            />
          )}

          {/* Intersection point */}
          {hasUniqueSolution && intersectionInView && (
            <g>
              <circle
                cx={toSvgX(intersectionX)}
                cy={toSvgY(intersectionY)}
                r={8}
                fill="#a855f7"
                stroke="#fff"
                strokeWidth={2}
              />
            </g>
          )}
        </svg>
      </div>

      {/* Result */}
      <div className={`p-4 rounded-xl border ${
        hasUniqueSolution
          ? 'bg-purple-500/10 border-purple-500/50'
          : isParallel
            ? 'bg-red-500/10 border-red-500/50'
            : 'bg-yellow-500/10 border-yellow-500/50'
      }`}>
        {hasUniqueSolution ? (
          <div className="text-center">
            <div className="text-purple-400 font-semibold mb-1">
              One Intersection Point
            </div>
            <div className="font-mono text-dark-300">
              ({intersectionX.toFixed(2)}, {intersectionY.toFixed(2)})
            </div>
          </div>
        ) : isParallel ? (
          <div className="text-center">
            <div className="text-red-400 font-semibold mb-1">
              Parallel Lines - No Solution
            </div>
            <div className="text-dark-400 text-sm">
              The lines never intersect.
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-yellow-400 font-semibold mb-1">
              Identical Lines - Infinite Solutions
            </div>
            <div className="text-dark-400 text-sm">
              Every point on the line is a solution.
            </div>
          </div>
        )}
      </div>

      {/* Preset examples */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => { setA1(2); setB1(1); setC1(4); setA2(1); setB2(-1); setC2(1); }}
          className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
        >
          Intersecting
        </button>
        <button
          onClick={() => { setA1(1); setB1(1); setC1(2); setA2(1); setB2(1); setC2(4); }}
          className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
        >
          Parallel
        </button>
        <button
          onClick={() => { setA1(1); setB1(2); setC1(3); setA2(2); setB2(4); setC2(6); }}
          className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
        >
          Identical
        </button>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        The solution to a system is where the lines intersect.
      </p>
    </div>
  );
}
