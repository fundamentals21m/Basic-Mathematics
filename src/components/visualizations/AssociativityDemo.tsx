import { useState, useMemo } from 'react';

export function AssociativityDemo() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(5);
  const [c, setC] = useState(4);
  const [activeGrouping, setActiveGrouping] = useState<'left' | 'right' | 'both'>('both');
  const [animationStep, setAnimationStep] = useState(0);

  // Calculate intermediate and final results
  const leftFirst = a + b; // (a + b)
  const leftResult = leftFirst + c; // (a + b) + c
  const rightFirst = b + c; // (b + c)
  const rightResult = a + rightFirst; // a + (b + c)

  // Number line setup
  const allValues = [a, b, c, leftFirst, leftResult, rightFirst, rightResult, 0];
  const minVal = Math.min(...allValues) - 2;
  const maxVal = Math.max(...allValues) + 2;

  const width = 600;
  const height = 80;
  const padding = 40;

  const scale = useMemo(() => {
    const range = maxVal - minVal;
    return (value: number) => padding + ((value - minVal) / range) * (width - 2 * padding);
  }, [minVal, maxVal]);

  const ticks = useMemo(() => {
    const result = [];
    const step = Math.max(1, Math.floor((maxVal - minVal) / 15));
    for (let i = Math.ceil(minVal); i <= Math.floor(maxVal); i += step) {
      result.push(i);
    }
    // Always include 0 if in range
    if (minVal <= 0 && maxVal >= 0 && !result.includes(0)) {
      result.push(0);
      result.sort((x, y) => x - y);
    }
    return result;
  }, [minVal, maxVal]);

  const runAnimation = (grouping: 'left' | 'right') => {
    setActiveGrouping(grouping);
    setAnimationStep(0);

    // Animate through steps
    setTimeout(() => setAnimationStep(1), 500);
    setTimeout(() => setAnimationStep(2), 1500);
    setTimeout(() => setAnimationStep(3), 2500);
  };

  const renderNumberLine = (
    showLeft: boolean,
    showRight: boolean,
    step: number
  ) => {
    const lineY = height / 2;

    return (
      <svg width={width} height={height} className="mx-auto">
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

        {/* Ticks */}
        {ticks.map((tick) => {
          const x = scale(tick);
          const isZero = tick === 0;
          return (
            <g key={tick}>
              <line
                x1={x}
                y1={lineY - 6}
                x2={x}
                y2={lineY + 6}
                stroke="currentColor"
                strokeWidth={isZero ? 2 : 1}
                className={isZero ? 'text-dark-300' : 'text-dark-600'}
              />
              <text
                x={x}
                y={lineY + 22}
                textAnchor="middle"
                className={`text-xs font-mono ${isZero ? 'fill-dark-300' : 'fill-dark-500'}`}
              >
                {tick}
              </text>
            </g>
          );
        })}

        {/* Left grouping: (a + b) + c */}
        {showLeft && (
          <>
            {/* Step 1: Start at a */}
            <circle
              cx={scale(a)}
              cy={lineY}
              r={8}
              className="fill-cyan-500 stroke-cyan-300"
              strokeWidth={2}
            />

            {/* Step 2: Add b to get (a+b) */}
            {step >= 1 && (
              <>
                <path
                  d={`M ${scale(a)} ${lineY - 12}
                      Q ${(scale(a) + scale(leftFirst)) / 2} ${lineY - 35}
                      ${scale(leftFirst)} ${lineY - 12}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="text-emerald-400"
                  markerEnd="url(#arrow-left-1)"
                />
                <text
                  x={(scale(a) + scale(leftFirst)) / 2}
                  y={lineY - 40}
                  textAnchor="middle"
                  className="fill-emerald-400 text-xs font-semibold"
                >
                  +{b}
                </text>
              </>
            )}

            {step >= 2 && (
              <>
                <circle
                  cx={scale(leftFirst)}
                  cy={lineY}
                  r={8}
                  className="fill-emerald-500 stroke-emerald-300"
                  strokeWidth={2}
                />
                {/* Step 3: Add c to get final result */}
                <path
                  d={`M ${scale(leftFirst)} ${lineY - 12}
                      Q ${(scale(leftFirst) + scale(leftResult)) / 2} ${lineY - 35}
                      ${scale(leftResult)} ${lineY - 12}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="text-purple-400"
                  markerEnd="url(#arrow-left-2)"
                />
                <text
                  x={(scale(leftFirst) + scale(leftResult)) / 2}
                  y={lineY - 40}
                  textAnchor="middle"
                  className="fill-purple-400 text-xs font-semibold"
                >
                  +{c}
                </text>
              </>
            )}

            {step >= 3 && (
              <circle
                cx={scale(leftResult)}
                cy={lineY}
                r={10}
                className="fill-primary-500 stroke-primary-300"
                strokeWidth={3}
              />
            )}
          </>
        )}

        {/* Right grouping: a + (b + c) */}
        {showRight && (
          <>
            {/* We show this below the line */}
            {/* Step 1: Start at b */}
            {step >= 1 && (
              <>
                <circle
                  cx={scale(b)}
                  cy={lineY}
                  r={6}
                  className="fill-yellow-500/50 stroke-yellow-400"
                  strokeWidth={2}
                />
                <path
                  d={`M ${scale(b)} ${lineY + 12}
                      Q ${(scale(b) + scale(rightFirst)) / 2} ${lineY + 35}
                      ${scale(rightFirst)} ${lineY + 12}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="text-yellow-400"
                  markerEnd="url(#arrow-right-1)"
                />
                <text
                  x={(scale(b) + scale(rightFirst)) / 2}
                  y={lineY + 48}
                  textAnchor="middle"
                  className="fill-yellow-400 text-xs font-semibold"
                >
                  +{c}
                </text>
              </>
            )}

            {step >= 2 && (
              <>
                <circle
                  cx={scale(rightFirst)}
                  cy={lineY}
                  r={6}
                  className="fill-yellow-500 stroke-yellow-300"
                  strokeWidth={2}
                />
                {/* Step 2: Add a to get final */}
                <circle
                  cx={scale(a)}
                  cy={lineY}
                  r={6}
                  className="fill-orange-500/50 stroke-orange-400"
                  strokeWidth={2}
                />
                <path
                  d={`M ${scale(a)} ${lineY + 12}
                      Q ${(scale(a) + scale(rightResult)) / 2} ${lineY + 35}
                      ${scale(rightResult)} ${lineY + 12}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="text-orange-400"
                  markerEnd="url(#arrow-right-2)"
                />
                <text
                  x={(scale(a) + scale(rightResult)) / 2}
                  y={lineY + 48}
                  textAnchor="middle"
                  className="fill-orange-400 text-xs font-semibold"
                >
                  a + (b+c)
                </text>
              </>
            )}

            {step >= 3 && (
              <circle
                cx={scale(rightResult)}
                cy={lineY}
                r={10}
                className="fill-primary-500 stroke-primary-300"
                strokeWidth={3}
              />
            )}
          </>
        )}

        {/* Arrow markers */}
        <defs>
          <marker id="arrow-left-1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-emerald-400" />
          </marker>
          <marker id="arrow-left-2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-purple-400" />
          </marker>
          <marker id="arrow-right-1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-yellow-400" />
          </marker>
          <marker id="arrow-right-2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" className="fill-orange-400" />
          </marker>
        </defs>
      </svg>
    );
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Explore Associativity of Addition
      </h3>

      {/* Value selectors */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">Value of a</label>
          <input
            type="range"
            min={-8}
            max={8}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{a}</div>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Value of b</label>
          <input
            type="range"
            min={-8}
            max={8}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-lg text-emerald-400">{b}</div>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Value of c</label>
          <input
            type="range"
            min={-8}
            max={8}
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{c}</div>
        </div>
      </div>

      {/* Comparison display */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Left grouping */}
        <div
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            activeGrouping === 'left' || activeGrouping === 'both'
              ? 'bg-emerald-500/10 border-emerald-500/50'
              : 'bg-dark-800/50 border-dark-600 hover:border-emerald-500/30'
          }`}
          onClick={() => runAnimation('left')}
        >
          <div className="text-sm text-dark-400 mb-2">Left Grouping</div>
          <div className="text-xl font-mono text-emerald-400">
            (<span className="text-cyan-400">{a}</span> + <span className="text-emerald-400">{b}</span>) + <span className="text-purple-400">{c}</span>
          </div>
          <div className="mt-3 space-y-1 text-sm font-mono">
            <div className="text-dark-300">
              Step 1: <span className="text-cyan-400">{a}</span> + <span className="text-emerald-400">{b}</span> = <span className="text-emerald-300">{leftFirst}</span>
            </div>
            <div className="text-dark-300">
              Step 2: <span className="text-emerald-300">{leftFirst}</span> + <span className="text-purple-400">{c}</span> = <span className="text-primary-400 font-bold">{leftResult}</span>
            </div>
          </div>
        </div>

        {/* Right grouping */}
        <div
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            activeGrouping === 'right' || activeGrouping === 'both'
              ? 'bg-yellow-500/10 border-yellow-500/50'
              : 'bg-dark-800/50 border-dark-600 hover:border-yellow-500/30'
          }`}
          onClick={() => runAnimation('right')}
        >
          <div className="text-sm text-dark-400 mb-2">Right Grouping</div>
          <div className="text-xl font-mono text-yellow-400">
            <span className="text-cyan-400">{a}</span> + (<span className="text-emerald-400">{b}</span> + <span className="text-purple-400">{c}</span>)
          </div>
          <div className="mt-3 space-y-1 text-sm font-mono">
            <div className="text-dark-300">
              Step 1: <span className="text-emerald-400">{b}</span> + <span className="text-purple-400">{c}</span> = <span className="text-yellow-300">{rightFirst}</span>
            </div>
            <div className="text-dark-300">
              Step 2: <span className="text-cyan-400">{a}</span> + <span className="text-yellow-300">{rightFirst}</span> = <span className="text-primary-400 font-bold">{rightResult}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Result comparison */}
      <div className={`text-center p-4 rounded-xl mb-6 ${
        leftResult === rightResult
          ? 'bg-primary-500/20 border border-primary-500/50'
          : 'bg-red-500/20 border border-red-500/50'
      }`}>
        <div className="text-lg">
          <span className="text-emerald-400 font-mono">({a} + {b}) + {c}</span>
          <span className="mx-4 text-dark-400">=</span>
          <span className="text-primary-400 font-bold font-mono">{leftResult}</span>
          <span className="mx-4 text-dark-400">=</span>
          <span className="text-yellow-400 font-mono">{a} + ({b} + {c})</span>
        </div>
        <div className="text-sm text-primary-300 mt-2">
          Both groupings give the same result!
        </div>
      </div>

      {/* Number line visualization */}
      <div className="canvas-container p-4">
        <div className="text-sm text-dark-400 mb-2 text-center">
          Click a grouping above to see the animation on the number line
        </div>
        {renderNumberLine(
          activeGrouping === 'left' || activeGrouping === 'both',
          activeGrouping === 'right',
          animationStep
        )}
        <div className="flex justify-center gap-6 mt-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
            <span className="text-dark-400">Start (a = {a})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-dark-400">After +b</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary-500"></div>
            <span className="text-dark-400">Final result</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Adjust the sliders and click on either grouping to see how the order of operations doesn't affect the final sum.
      </p>
    </div>
  );
}
