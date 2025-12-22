import { useState } from 'react';

interface Equation {
  label: string;
  text: string;
  color: string;
  active?: boolean;
}

export function EliminationStepsDemo() {
  const [step, setStep] = useState(0);

  // Fixed example system for demonstration:
  // x + y + z = 6     (Eq. 1)
  // 2x - y + z = 3    (Eq. 2)
  // x + 2y - z = 2    (Eq. 3)

  const steps: Array<{
    title: string;
    description: string;
    equations?: Equation[];
    highlight?: string | null;
    operation?: string;
    result?: { label: string; text: string; color: string; final?: boolean };
    finalSolution?: { x: number; y: number; z: number };
  }> = [
    {
      title: 'Original System',
      description: 'Start with three equations in three unknowns.',
      equations: [
        { label: 'Eq. 1', text: 'x + y + z = 6', color: 'cyan' },
        { label: 'Eq. 2', text: '2x - y + z = 3', color: 'emerald' },
        { label: 'Eq. 3', text: 'x + 2y - z = 2', color: 'purple' },
      ],
      highlight: null,
    },
    {
      title: 'Step 1: Eliminate z',
      description: 'Add Eq. 1 and Eq. 3 to eliminate z (coefficients are +1 and -1).',
      equations: [
        { label: 'Eq. 1', text: 'x + y + z = 6', color: 'cyan', active: true },
        { label: 'Eq. 2', text: '2x - y + z = 3', color: 'emerald' },
        { label: 'Eq. 3', text: 'x + 2y - z = 2', color: 'purple', active: true },
      ],
      operation: 'Eq. 1 + Eq. 3',
      result: { label: "Eq. 2'", text: '2x + 3y = 8', color: 'yellow' },
    },
    {
      title: 'Step 2: Eliminate z again',
      description: 'Add Eq. 2 and Eq. 3 to get another equation without z.',
      equations: [
        { label: 'Eq. 1', text: 'x + y + z = 6', color: 'cyan' },
        { label: 'Eq. 2', text: '2x - y + z = 3', color: 'emerald', active: true },
        { label: 'Eq. 3', text: 'x + 2y - z = 2', color: 'purple', active: true },
      ],
      operation: 'Eq. 2 + Eq. 3',
      result: { label: "Eq. 3'", text: '3x + y = 5', color: 'yellow' },
    },
    {
      title: 'Step 3: 2×2 System',
      description: "Now we have two equations in two unknowns (x and y).",
      equations: [
        { label: "Eq. 2'", text: '2x + 3y = 8', color: 'yellow' },
        { label: "Eq. 3'", text: '3x + y = 5', color: 'yellow' },
      ],
      highlight: 'reduced',
    },
    {
      title: 'Step 4: Eliminate y',
      description: "Multiply Eq. 3' by 3, then subtract from Eq. 2'.",
      equations: [
        { label: "Eq. 2'", text: '2x + 3y = 8', color: 'yellow', active: true },
        { label: "3×Eq. 3'", text: '9x + 3y = 15', color: 'yellow', active: true },
      ],
      operation: "Eq. 2' - 3×Eq. 3'",
      result: { label: '', text: '-7x = -7', color: 'primary' },
    },
    {
      title: 'Step 5: Solve for x',
      description: 'Divide both sides by -7.',
      equations: [
        { label: '', text: '-7x = -7', color: 'primary' },
      ],
      result: { label: '', text: 'x = 1', color: 'primary', final: true },
    },
    {
      title: 'Step 6: Back-substitute for y',
      description: "Substitute x = 1 into Eq. 3': 3(1) + y = 5.",
      equations: [
        { label: "Eq. 3'", text: '3(1) + y = 5', color: 'yellow' },
      ],
      result: { label: '', text: 'y = 2', color: 'primary', final: true },
    },
    {
      title: 'Step 7: Back-substitute for z',
      description: 'Substitute x = 1, y = 2 into Eq. 1: 1 + 2 + z = 6.',
      equations: [
        { label: 'Eq. 1', text: '1 + 2 + z = 6', color: 'cyan' },
      ],
      result: { label: '', text: 'z = 3', color: 'primary', final: true },
    },
    {
      title: 'Final Solution',
      description: 'The complete solution is (x, y, z) = (1, 2, 3).',
      equations: [],
      finalSolution: { x: 1, y: 2, z: 3 },
    },
  ];

  const currentStep = steps[step];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Step-by-Step Elimination
      </h3>

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

      {/* Step title */}
      <div className="text-center mb-4">
        <div className="text-primary-400 font-semibold">{currentStep.title}</div>
        <div className="text-dark-400 text-sm">{currentStep.description}</div>
      </div>

      {/* Equations display */}
      <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 min-h-[200px]">
        {currentStep.equations && currentStep.equations.length > 0 && (
          <div className="space-y-2 mb-4">
            {currentStep.equations.map((eq, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg font-mono text-center transition-all ${
                  eq.active
                    ? `bg-${eq.color}-500/20 border-2 border-${eq.color}-500/50`
                    : `bg-dark-700/50`
                }`}
                style={{
                  backgroundColor: eq.active
                    ? eq.color === 'cyan' ? 'rgba(34, 211, 238, 0.2)'
                      : eq.color === 'emerald' ? 'rgba(52, 211, 153, 0.2)'
                      : eq.color === 'purple' ? 'rgba(168, 85, 247, 0.2)'
                      : eq.color === 'yellow' ? 'rgba(234, 179, 8, 0.2)'
                      : 'rgba(99, 102, 241, 0.2)'
                    : undefined,
                  borderColor: eq.active
                    ? eq.color === 'cyan' ? 'rgba(34, 211, 238, 0.5)'
                      : eq.color === 'emerald' ? 'rgba(52, 211, 153, 0.5)'
                      : eq.color === 'purple' ? 'rgba(168, 85, 247, 0.5)'
                      : eq.color === 'yellow' ? 'rgba(234, 179, 8, 0.5)'
                      : 'rgba(99, 102, 241, 0.5)'
                    : undefined,
                }}
              >
                {eq.label && <span className="text-dark-500 mr-2">{eq.label}:</span>}
                <span className={
                  eq.color === 'cyan' ? 'text-cyan-400'
                    : eq.color === 'emerald' ? 'text-emerald-400'
                    : eq.color === 'purple' ? 'text-purple-400'
                    : eq.color === 'yellow' ? 'text-yellow-400'
                    : 'text-primary-400'
                }>{eq.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Operation indicator */}
        {currentStep.operation && (
          <div className="text-center my-4">
            <span className="px-4 py-2 rounded-full bg-dark-600 text-dark-300 text-sm">
              {currentStep.operation}
            </span>
            <div className="text-dark-500 text-2xl my-2">↓</div>
          </div>
        )}

        {/* Result */}
        {currentStep.result && (
          <div className={`p-4 rounded-lg text-center font-mono ${
            currentStep.result.final
              ? 'bg-primary-500/20 border-2 border-primary-500/50'
              : 'bg-yellow-500/20 border border-yellow-500/30'
          }`}>
            {currentStep.result.label && (
              <span className="text-dark-500 mr-2">{currentStep.result.label}:</span>
            )}
            <span className={currentStep.result.final ? 'text-primary-400 font-bold text-xl' : 'text-yellow-400'}>
              {currentStep.result.text}
            </span>
          </div>
        )}

        {/* Final solution */}
        {currentStep.finalSolution && (
          <div className="p-6 rounded-xl bg-primary-500/20 border-2 border-primary-500/50 text-center">
            <div className="text-primary-400 font-bold text-2xl font-mono">
              (x, y, z) = ({currentStep.finalSolution.x}, {currentStep.finalSolution.y}, {currentStep.finalSolution.z})
            </div>
            <div className="text-dark-400 text-sm mt-2">
              Verify: {currentStep.finalSolution.x} + {currentStep.finalSolution.y} + {currentStep.finalSolution.z} = 6 ✓
            </div>
          </div>
        )}
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
        <span className="text-dark-500 self-center">
          Step {step + 1} of {steps.length}
        </span>
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

      <p className="text-sm text-dark-500 mt-4 text-center">
        Walk through the elimination process step by step.
      </p>
    </div>
  );
}
