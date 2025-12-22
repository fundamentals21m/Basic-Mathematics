import { useState } from 'react';

export function CompletingSquareDemo() {
  const [b, setB] = useState(-6);
  const [c, setC] = useState(5);
  const [step, setStep] = useState(0);

  // For x² + bx + c = 0
  // Complete the square: x² + bx = -c
  // Add (b/2)² to both sides
  // (x + b/2)² = (b/2)² - c = b²/4 - c

  const halfB = b / 2;
  const halfBSquared = halfB * halfB;
  const rightSide = halfBSquared - c;
  const canSolve = rightSide >= 0;

  const sqrtRight = canSolve ? Math.sqrt(rightSide) : 0;
  const solution1 = canSolve ? -halfB + sqrtRight : null;
  const solution2 = canSolve ? -halfB - sqrtRight : null;

  const steps = [
    {
      title: 'Start with the equation',
      content: `x² ${b >= 0 ? '+' : '−'} ${Math.abs(b)}x ${c >= 0 ? '+' : '−'} ${Math.abs(c)} = 0`,
    },
    {
      title: 'Move constant to right side',
      content: `x² ${b >= 0 ? '+' : '−'} ${Math.abs(b)}x = ${-c}`,
    },
    {
      title: `Find (b/2)² = (${b}/2)² = ${halfBSquared}`,
      content: `Add ${halfBSquared} to both sides`,
    },
    {
      title: 'Add to both sides',
      content: `x² ${b >= 0 ? '+' : '−'} ${Math.abs(b)}x + ${halfBSquared} = ${-c} + ${halfBSquared} = ${rightSide}`,
    },
    {
      title: 'Left side is a perfect square',
      content: `(x ${halfB >= 0 ? '+' : '−'} ${Math.abs(halfB)})² = ${rightSide}`,
    },
    {
      title: canSolve ? 'Take square roots' : 'No real solution!',
      content: canSolve
        ? `x ${halfB >= 0 ? '+' : '−'} ${Math.abs(halfB)} = ±${sqrtRight.toFixed(4).replace(/\.?0+$/, '')}`
        : `Cannot take square root of ${rightSide} (negative)`,
    },
    {
      title: 'Solve for x',
      content: canSolve
        ? `x = ${-halfB} ± ${sqrtRight.toFixed(4).replace(/\.?0+$/, '')}`
        : 'No real solutions exist',
    },
  ];

  const currentStep = steps[Math.min(step, steps.length - 1)];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Completing the Square Demo
      </h3>

      {/* Equation display */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-6 text-center">
        <div className="text-dark-500 text-sm mb-2">Solve:</div>
        <div className="font-mono text-2xl text-dark-200">
          x² {b >= 0 ? '+' : '−'} <span className="text-cyan-400">{Math.abs(b)}</span>x
          {c >= 0 ? ' + ' : ' − '}<span className="text-purple-400">{Math.abs(c)}</span> = 0
        </div>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-2 gap-6 mb-6 max-w-sm mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">b (coefficient of x)</label>
          <input
            type="range"
            min={-10}
            max={10}
            step={2}
            value={b}
            onChange={(e) => { setB(Number(e.target.value)); setStep(0); }}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{b}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">c (constant)</label>
          <input
            type="range"
            min={-10}
            max={10}
            step={1}
            value={c}
            onChange={(e) => { setC(Number(e.target.value)); setStep(0); }}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{c}</div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center gap-1 mb-4">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStep(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === step
                ? 'bg-primary-500 scale-110'
                : idx < step
                  ? 'bg-primary-500/50'
                  : 'bg-dark-600'
            }`}
          />
        ))}
      </div>

      {/* Current step display */}
      <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 min-h-[140px]">
        <div className="text-primary-400 font-semibold mb-2">
          Step {step + 1}: {currentStep.title}
        </div>
        <div className={`font-mono text-lg text-center py-4 ${
          !canSolve && step >= 5 ? 'text-red-400' : 'text-dark-200'
        }`}>
          {currentStep.content}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            step === 0
              ? 'bg-dark-700 text-dark-500 cursor-not-allowed'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          ← Previous
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            step === steps.length - 1
              ? 'bg-dark-700 text-dark-500 cursor-not-allowed'
              : 'bg-primary-600 text-white hover:bg-primary-500'
          }`}
        >
          Next →
        </button>
      </div>

      {/* Final solutions */}
      {step === steps.length - 1 && canSolve && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
          <div className="text-emerald-400 font-semibold mb-2">Solutions:</div>
          <div className="font-mono text-lg">
            x = <span className="text-cyan-400">{solution1?.toFixed(4).replace(/\.?0+$/, '')}</span>
            <span className="text-dark-500 mx-4">or</span>
            x = <span className="text-purple-400">{solution2?.toFixed(4).replace(/\.?0+$/, '')}</span>
          </div>
        </div>
      )}

      {step === steps.length - 1 && !canSolve && (
        <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center">
          <div className="text-red-400 font-semibold">
            No real solutions (discriminant is negative)
          </div>
        </div>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        Walk through each step of completing the square.
      </p>
    </div>
  );
}
