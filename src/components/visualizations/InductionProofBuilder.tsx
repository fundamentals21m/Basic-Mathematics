import { useState } from 'react';

type ProofType = 'sum' | 'power' | 'divisibility';

export function InductionProofBuilder() {
  const [proofType, setProofType] = useState<ProofType>('sum');
  const [currentStep, setCurrentStep] = useState(0);
  const [testN, setTestN] = useState(5);

  const proofs: Record<ProofType, {
    title: string;
    statement: string;
    baseCase: { n: number; lhs: string; rhs: string; result: string };
    inductiveHypothesis: string;
    inductiveStep: string[];
    verify: (n: number) => { lhs: number; rhs: number; equal: boolean };
  }> = {
    sum: {
      title: 'Sum of Natural Numbers',
      statement: '1 + 2 + 3 + ⋯ + n = n(n+1)/2',
      baseCase: {
        n: 1,
        lhs: '1',
        rhs: '1(1+1)/2 = 2/2 = 1',
        result: 'LHS = RHS ✓',
      },
      inductiveHypothesis: 'Assume: 1 + 2 + ⋯ + k = k(k+1)/2',
      inductiveStep: [
        'Show: 1 + 2 + ⋯ + k + (k+1) = (k+1)(k+2)/2',
        'LHS = [k(k+1)/2] + (k+1)  (by hypothesis)',
        '    = (k+1)[k/2 + 1]',
        '    = (k+1)(k+2)/2',
        '    = RHS ✓',
      ],
      verify: (n) => {
        const lhs = (n * (n + 1)) / 2;
        let sum = 0;
        for (let i = 1; i <= n; i++) sum += i;
        return { lhs: sum, rhs: lhs, equal: sum === lhs };
      },
    },
    power: {
      title: '2ⁿ > n',
      statement: '2ⁿ > n for all n ≥ 1',
      baseCase: {
        n: 1,
        lhs: '2¹ = 2',
        rhs: '1',
        result: '2 > 1 ✓',
      },
      inductiveHypothesis: 'Assume: 2ᵏ > k for some k ≥ 1',
      inductiveStep: [
        'Show: 2ᵏ⁺¹ > k + 1',
        '2ᵏ⁺¹ = 2 × 2ᵏ',
        '     > 2 × k  (by hypothesis)',
        '     = k + k',
        '     ≥ k + 1  (since k ≥ 1)',
        'Therefore 2ᵏ⁺¹ > k + 1 ✓',
      ],
      verify: (n) => {
        const lhs = Math.pow(2, n);
        return { lhs, rhs: n, equal: lhs > n };
      },
    },
    divisibility: {
      title: 'Divisibility by 3',
      statement: 'n³ - n is divisible by 3 for all n ≥ 1',
      baseCase: {
        n: 1,
        lhs: '1³ - 1 = 0',
        rhs: '0 = 3 × 0',
        result: '0 is divisible by 3 ✓',
      },
      inductiveHypothesis: 'Assume: k³ - k = 3m for some integer m',
      inductiveStep: [
        'Show: (k+1)³ - (k+1) is divisible by 3',
        '(k+1)³ - (k+1) = k³ + 3k² + 3k + 1 - k - 1',
        '              = (k³ - k) + 3k² + 3k',
        '              = 3m + 3(k² + k)  (by hypothesis)',
        '              = 3(m + k² + k)',
        'Divisible by 3 ✓',
      ],
      verify: (n) => {
        const value = n * n * n - n;
        return { lhs: value, rhs: value % 3, equal: value % 3 === 0 };
      },
    },
  };

  const proof = proofs[proofType];
  const totalSteps = 3; // Base, Hypothesis, Inductive Step

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, totalSteps - 1));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));
  const reset = () => setCurrentStep(0);

  const verification = proof.verify(testN);

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Induction Proof Builder
      </h3>

      {/* Proof selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Object.entries(proofs).map(([key, p]) => (
          <button
            key={key}
            onClick={() => { setProofType(key as ProofType); reset(); }}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              proofType === key
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 hover:bg-dark-600 text-dark-300'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Statement */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-6">
        <div className="text-dark-400 text-xs mb-1">Statement to Prove:</div>
        <div className="font-mono text-lg text-primary-400 text-center">
          {proof.statement}
        </div>
      </div>

      {/* Proof steps */}
      <div className="space-y-4 mb-6">
        {/* Base Case */}
        <div className={`p-4 rounded-xl border transition-all ${
          currentStep >= 0 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-dark-800/40 border-dark-700 opacity-50'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">1</span>
            <span className="font-semibold text-emerald-400">Base Case (n = {proof.baseCase.n})</span>
          </div>
          {currentStep >= 0 && (
            <div className="ml-8 text-dark-300 space-y-1 font-mono text-sm">
              <div>LHS: {proof.baseCase.lhs}</div>
              <div>RHS: {proof.baseCase.rhs}</div>
              <div className="text-emerald-400">{proof.baseCase.result}</div>
            </div>
          )}
        </div>

        {/* Inductive Hypothesis */}
        <div className={`p-4 rounded-xl border transition-all ${
          currentStep >= 1 ? 'bg-amber-500/10 border-amber-500/30' : 'bg-dark-800/40 border-dark-700 opacity-50'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold">2</span>
            <span className="font-semibold text-amber-400">Inductive Hypothesis</span>
          </div>
          {currentStep >= 1 && (
            <div className="ml-8 text-dark-300 font-mono text-sm">
              {proof.inductiveHypothesis}
            </div>
          )}
        </div>

        {/* Inductive Step */}
        <div className={`p-4 rounded-xl border transition-all ${
          currentStep >= 2 ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-dark-800/40 border-dark-700 opacity-50'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold">3</span>
            <span className="font-semibold text-cyan-400">Inductive Step</span>
          </div>
          {currentStep >= 2 && (
            <div className="ml-8 text-dark-300 font-mono text-sm space-y-1">
              {proof.inductiveStep.map((line, i) => (
                <div key={i} className={line.includes('✓') ? 'text-cyan-400' : ''}>
                  {line}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-4 py-2 rounded-lg bg-dark-700 text-dark-300 disabled:opacity-50 hover:bg-dark-600 transition-all"
        >
          ← Previous
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 transition-all"
        >
          Reset
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === totalSteps - 1}
          className="px-4 py-2 rounded-lg bg-primary-600 text-white disabled:opacity-50 hover:bg-primary-500 transition-all"
        >
          Next →
        </button>
      </div>

      {/* Verification */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-dark-400 text-sm mb-2">Verify for n = </div>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={1}
            max={20}
            value={testN}
            onChange={(e) => setTestN(Number(e.target.value))}
            className="flex-1 accent-primary-500"
          />
          <span className="font-mono text-xl text-primary-400 w-8">{testN}</span>
        </div>
        <div className="mt-3 text-center">
          {proofType === 'sum' && (
            <div className="font-mono text-dark-300">
              1 + 2 + ⋯ + {testN} = <span className="text-emerald-400">{verification.lhs}</span>
              {' = '}{testN}({testN}+1)/2 = <span className="text-emerald-400">{verification.rhs}</span>
              <span className="ml-2">{verification.equal ? '✓' : '✗'}</span>
            </div>
          )}
          {proofType === 'power' && (
            <div className="font-mono text-dark-300">
              2<sup>{testN}</sup> = <span className="text-cyan-400">{verification.lhs}</span>
              {' > '}<span className="text-amber-400">{verification.rhs}</span>
              <span className="ml-2 text-emerald-400">{verification.equal ? '✓' : '✗'}</span>
            </div>
          )}
          {proofType === 'divisibility' && (
            <div className="font-mono text-dark-300">
              {testN}³ - {testN} = <span className="text-cyan-400">{verification.lhs}</span>
              {' mod 3 = '}<span className="text-amber-400">{verification.rhs}</span>
              <span className="ml-2 text-emerald-400">{verification.equal ? '✓ divisible' : '✗'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
