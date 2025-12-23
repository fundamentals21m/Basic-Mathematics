import { useState } from 'react';

export function PythagorasConnection() {
  const [step, setStep] = useState(0);

  const p1 = { x: 1, y: 1 };
  const p2 = { x: 5, y: 4 };
  const q = { x: 5, y: 1 };

  const dx = p2.x - p1.x; // 4
  const dy = p2.y - p1.y; // 3
  const distance = Math.sqrt(dx * dx + dy * dy); // 5

  const scale = 35;
  const width = 340;
  const height = 260;
  const centerX = 50;
  const centerY = height - 50;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale,
  });

  const steps = [
    {
      title: 'Two Points',
      description: 'Start with two points P₁ and P₂ in the plane.',
      showPoints: true,
      showHorizontal: false,
      showVertical: false,
      showHypotenuse: false,
      showSquares: false,
    },
    {
      title: 'Form a Right Triangle',
      description: 'Draw horizontal and vertical lines to create point Q, forming a right triangle.',
      showPoints: true,
      showHorizontal: true,
      showVertical: true,
      showHypotenuse: false,
      showSquares: false,
    },
    {
      title: 'Identify the Legs',
      description: `The horizontal leg has length |Δx| = ${dx}. The vertical leg has length |Δy| = ${dy}.`,
      showPoints: true,
      showHorizontal: true,
      showVertical: true,
      showHypotenuse: false,
      showSquares: false,
    },
    {
      title: 'The Hypotenuse',
      description: 'The distance between P₁ and P₂ is the hypotenuse of this right triangle.',
      showPoints: true,
      showHorizontal: true,
      showVertical: true,
      showHypotenuse: true,
      showSquares: false,
    },
    {
      title: 'Apply Pythagorean Theorem',
      description: `By Pythagoras: d² = ${dx}² + ${dy}² = ${dx*dx} + ${dy*dy} = ${dx*dx + dy*dy}. So d = ${distance}.`,
      showPoints: true,
      showHorizontal: true,
      showVertical: true,
      showHypotenuse: true,
      showSquares: true,
    },
  ];

  const currentStep = steps[step];

  const runAnimation = () => {
    setStep(0);
    const interval = setInterval(() => {
      setStep((s) => {
        if (s >= steps.length - 1) {
          clearInterval(interval);
          return s;
        }
        return s + 1;
      });
    }, 2000);
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        From Pythagoras to Distance
      </h3>

      <div className="flex justify-center mb-4">
        <svg width={width} height={height} className="bg-dark-800 rounded-xl">
          {/* Grid */}
          {Array.from({ length: 8 }, (_, i) => (
            <g key={i}>
              <line
                x1={centerX + i * scale}
                y1={10}
                x2={centerX + i * scale}
                y2={height - 10}
                stroke={i === 0 ? '#6b7280' : '#374151'}
                strokeWidth={i === 0 ? 2 : 0.5}
              />
              <line
                x1={10}
                y1={centerY - i * scale}
                x2={width - 10}
                y2={centerY - i * scale}
                stroke={i === 0 ? '#6b7280' : '#374151'}
                strokeWidth={i === 0 ? 2 : 0.5}
              />
            </g>
          ))}

          {/* Squares on sides (step 5) */}
          {currentStep.showSquares && (
            <>
              {/* Square on horizontal leg */}
              <rect
                x={toSvg(p1.x, p1.y).x}
                y={toSvg(p1.x, p1.y).y}
                width={dx * scale}
                height={dx * scale}
                fill="#f59e0b"
                fillOpacity={0.15}
                stroke="#f59e0b"
                strokeWidth={1}
              />
              <text
                x={toSvg(p1.x, p1.y).x + (dx * scale) / 2}
                y={toSvg(p1.x, p1.y).y + (dx * scale) / 2 + 4}
                fill="#f59e0b"
                fontSize={12}
                textAnchor="middle"
              >
                {dx}² = {dx * dx}
              </text>

              {/* Square on vertical leg */}
              <rect
                x={toSvg(q.x, q.y).x}
                y={toSvg(q.x, p2.y).y}
                width={dy * scale}
                height={dy * scale}
                fill="#10b981"
                fillOpacity={0.15}
                stroke="#10b981"
                strokeWidth={1}
              />
              <text
                x={toSvg(q.x, q.y).x + (dy * scale) / 2}
                y={toSvg(q.x, p2.y).y + (dy * scale) / 2 + 4}
                fill="#10b981"
                fontSize={12}
                textAnchor="middle"
              >
                {dy}² = {dy * dy}
              </text>
            </>
          )}

          {/* Horizontal leg */}
          {currentStep.showHorizontal && (
            <>
              <line
                x1={toSvg(p1.x, p1.y).x}
                y1={toSvg(p1.x, p1.y).y}
                x2={toSvg(q.x, q.y).x}
                y2={toSvg(q.x, q.y).y}
                stroke="#f59e0b"
                strokeWidth={3}
              />
              <text
                x={(toSvg(p1.x, p1.y).x + toSvg(q.x, q.y).x) / 2}
                y={toSvg(p1.x, p1.y).y + 18}
                fill="#f59e0b"
                fontSize={12}
                textAnchor="middle"
                fontWeight="bold"
              >
                {dx}
              </text>
            </>
          )}

          {/* Vertical leg */}
          {currentStep.showVertical && (
            <>
              <line
                x1={toSvg(q.x, q.y).x}
                y1={toSvg(q.x, q.y).y}
                x2={toSvg(p2.x, p2.y).x}
                y2={toSvg(p2.x, p2.y).y}
                stroke="#10b981"
                strokeWidth={3}
              />
              <text
                x={toSvg(q.x, q.y).x + 14}
                y={(toSvg(q.x, q.y).y + toSvg(p2.x, p2.y).y) / 2 + 4}
                fill="#10b981"
                fontSize={12}
                textAnchor="start"
                fontWeight="bold"
              >
                {dy}
              </text>

              {/* Right angle marker */}
              <path
                d={`M ${toSvg(q.x, q.y).x - 10} ${toSvg(q.x, q.y).y}
                    L ${toSvg(q.x, q.y).x - 10} ${toSvg(q.x, q.y).y - 10}
                    L ${toSvg(q.x, q.y).x} ${toSvg(q.x, q.y).y - 10}`}
                fill="none"
                stroke="#6b7280"
                strokeWidth={1.5}
              />
            </>
          )}

          {/* Hypotenuse */}
          {currentStep.showHypotenuse && (
            <>
              <line
                x1={toSvg(p1.x, p1.y).x}
                y1={toSvg(p1.x, p1.y).y}
                x2={toSvg(p2.x, p2.y).x}
                y2={toSvg(p2.x, p2.y).y}
                stroke="#3b82f6"
                strokeWidth={3}
              />
              <text
                x={(toSvg(p1.x, p1.y).x + toSvg(p2.x, p2.y).x) / 2 - 20}
                y={(toSvg(p1.x, p1.y).y + toSvg(p2.x, p2.y).y) / 2 - 8}
                fill="#3b82f6"
                fontSize={14}
                textAnchor="middle"
                fontWeight="bold"
              >
                d = {distance}
              </text>
            </>
          )}

          {/* Points */}
          {currentStep.showPoints && (
            <>
              <circle
                cx={toSvg(p1.x, p1.y).x}
                cy={toSvg(p1.x, p1.y).y}
                r={8}
                fill="#06b6d4"
                stroke="white"
                strokeWidth={2}
              />
              <text
                x={toSvg(p1.x, p1.y).x - 18}
                y={toSvg(p1.x, p1.y).y + 4}
                fill="#06b6d4"
                fontSize={12}
                fontWeight="bold"
              >
                P₁
              </text>

              <circle
                cx={toSvg(p2.x, p2.y).x}
                cy={toSvg(p2.x, p2.y).y}
                r={8}
                fill="#8b5cf6"
                stroke="white"
                strokeWidth={2}
              />
              <text
                x={toSvg(p2.x, p2.y).x + 12}
                y={toSvg(p2.x, p2.y).y + 4}
                fill="#8b5cf6"
                fontSize={12}
                fontWeight="bold"
              >
                P₂
              </text>

              {(currentStep.showHorizontal || currentStep.showVertical) && (
                <>
                  <circle
                    cx={toSvg(q.x, q.y).x}
                    cy={toSvg(q.x, q.y).y}
                    r={5}
                    fill="#6b7280"
                  />
                  <text
                    x={toSvg(q.x, q.y).x + 8}
                    y={toSvg(q.x, q.y).y + 16}
                    fill="#6b7280"
                    fontSize={10}
                  >
                    Q
                  </text>
                </>
              )}
            </>
          )}
        </svg>
      </div>

      {/* Step info */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="text-primary-400 font-semibold mb-1">
          Step {step + 1}: {currentStep.title}
        </div>
        <div className="text-dark-300 text-sm">{currentStep.description}</div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Previous
        </button>
        <button
          onClick={runAnimation}
          className="px-3 py-1 rounded text-sm bg-primary-500 hover:bg-primary-600 text-white transition-all"
        >
          Animate All
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
      </div>

      {/* Formula at bottom */}
      <div className="mt-4 p-3 rounded-lg bg-primary-500/10 border border-primary-500/30 text-center">
        <span className="text-primary-400 font-mono">
          d = √[(x₂ - x₁)² + (y₂ - y₁)²]
        </span>
      </div>
    </div>
  );
}
