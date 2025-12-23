import { useState } from 'react';

export function CompletingSquareCircle() {
  const [step, setStep] = useState(0);

  // Example: x² + y² - 6x + 4y - 12 = 0
  // D = -6, E = 4, F = -12
  const D = -6;
  const E = 4;
  const F = -12;

  const h = -D / 2; // 3
  const k = -E / 2; // -2
  const r2 = h * h + k * k - F; // 9 + 4 + 12 = 25
  const r = Math.sqrt(r2); // 5

  const steps = [
    {
      title: 'Start with General Form',
      equation: 'x² + y² - 6x + 4y - 12 = 0',
      explanation: 'This is in general form. We need to convert it to standard form.',
    },
    {
      title: 'Group x and y Terms',
      equation: '(x² - 6x) + (y² + 4y) = 12',
      explanation: 'Move the constant to the right side and group x terms and y terms.',
    },
    {
      title: 'Complete the Square for x',
      equation: '(x² - 6x + 9) + (y² + 4y) = 12 + 9',
      explanation: 'Half of -6 is -3. Square it: (-3)² = 9. Add 9 to both sides.',
    },
    {
      title: 'Complete the Square for y',
      equation: '(x² - 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4',
      explanation: 'Half of 4 is 2. Square it: 2² = 4. Add 4 to both sides.',
    },
    {
      title: 'Factor the Perfect Squares',
      equation: '(x - 3)² + (y + 2)² = 25',
      explanation: 'Factor each perfect square trinomial. This is standard form!',
    },
    {
      title: 'Read Center and Radius',
      equation: '(x - 3)² + (y + 2)² = 25',
      explanation: `Center: (3, -2), Radius: √25 = 5`,
    },
  ];

  const currentStep = steps[step];

  const scale = 20;
  const width = 280;
  const height = 240;
  const centerX = width / 2;
  const centerY = height / 2;

  const toSvg = (x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale,
  });

  const circleSvg = toSvg(h, k);
  const radiusPx = r * scale;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Completing the Square for Circles
      </h3>

      {/* Step content */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="text-primary-400 font-semibold mb-2">
          Step {step + 1}: {currentStep.title}
        </div>
        <div className="text-xl font-mono text-dark-200 text-center mb-3 p-2 bg-dark-900/50 rounded">
          {currentStep.equation}
        </div>
        <div className="text-dark-400 text-sm">{currentStep.explanation}</div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-4">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === step
                ? 'bg-primary-500 scale-125'
                : i < step
                ? 'bg-emerald-500'
                : 'bg-dark-600'
            }`}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Previous
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
      </div>

      {/* Circle visualization (only show on later steps) */}
      {step >= 4 && (
        <div className="flex justify-center mb-4">
          <svg width={width} height={height} className="bg-dark-800 rounded-xl">
            {/* Grid */}
            {Array.from({ length: 13 }, (_, i) => i - 6).map((n) => (
              <g key={n}>
                <line
                  x1={centerX + n * scale}
                  y1={0}
                  x2={centerX + n * scale}
                  y2={height}
                  stroke={n === 0 ? '#6b7280' : '#374151'}
                  strokeWidth={n === 0 ? 2 : 0.5}
                />
                <line
                  x1={0}
                  y1={centerY - n * scale}
                  x2={width}
                  y2={centerY - n * scale}
                  stroke={n === 0 ? '#6b7280' : '#374151'}
                  strokeWidth={n === 0 ? 2 : 0.5}
                />
              </g>
            ))}

            {/* Circle */}
            <circle
              cx={circleSvg.x}
              cy={circleSvg.y}
              r={radiusPx}
              fill="rgba(59, 130, 246, 0.15)"
              stroke="#3b82f6"
              strokeWidth={2}
            />

            {/* Center */}
            <circle
              cx={circleSvg.x}
              cy={circleSvg.y}
              r={5}
              fill="#8b5cf6"
            />

            {/* Radius line */}
            <line
              x1={circleSvg.x}
              y1={circleSvg.y}
              x2={circleSvg.x + radiusPx}
              y2={circleSvg.y}
              stroke="#f59e0b"
              strokeWidth={2}
              strokeDasharray="4,2"
            />

            {/* Labels */}
            <text
              x={circleSvg.x - 5}
              y={circleSvg.y - 10}
              fill="#8b5cf6"
              fontSize={10}
            >
              ({h}, {k})
            </text>
            <text
              x={circleSvg.x + radiusPx / 2}
              y={circleSvg.y - 6}
              fill="#f59e0b"
              fontSize={10}
              textAnchor="middle"
            >
              r = {r}
            </text>
          </svg>
        </div>
      )}

      {/* Formula reminder */}
      <div className="p-3 rounded-lg bg-dark-800/30 border border-dark-700">
        <div className="text-dark-500 text-xs mb-1">Completing the Square Formula</div>
        <div className="text-dark-300 text-sm font-mono text-center">
          x² + bx → (x + b/2)² by adding (b/2)²
        </div>
      </div>
    </div>
  );
}
