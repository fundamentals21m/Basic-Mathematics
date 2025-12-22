import { useState } from 'react';

type SystemType = 'unique' | 'parallel' | 'identical';

export function SpecialCasesExplorer() {
  const [selectedCase, setSelectedCase] = useState<SystemType>('unique');

  // Predefined examples for each case
  const examples: Record<SystemType, { eq1: string; eq2: string; a: number; b: number; c: number; d: number; e: number; f: number; explanation: string }> = {
    unique: {
      eq1: '2x + y = 5',
      eq2: 'x - y = 1',
      a: 2, b: 1, c: 1, d: -1, e: 5, f: 1,
      explanation: 'The coefficients form different ratios (2/1 ≠ 1/-1), so the lines intersect at exactly one point.'
    },
    parallel: {
      eq1: '2x - y = 3',
      eq2: '4x - 2y = 8',
      a: 2, b: -1, c: 4, d: -2, e: 3, f: 8,
      explanation: 'The left-side coefficients are proportional (2/4 = -1/-2), but the constants are not (3 ≠ 8/2). The lines are parallel and never meet.'
    },
    identical: {
      eq1: 'x + 2y = 3',
      eq2: '2x + 4y = 6',
      a: 1, b: 2, c: 2, d: 4, e: 3, f: 6,
      explanation: 'All coefficients are proportional (1/2 = 2/4 = 3/6). The second equation is just 2× the first—they describe the same line.'
    }
  };

  const current = examples[selectedCase];
  const det = current.a * current.d - current.b * current.c;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Special Cases Explorer
      </h3>

      {/* Case selector */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setSelectedCase('unique')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            selectedCase === 'unique'
              ? 'bg-emerald-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Unique Solution
        </button>
        <button
          onClick={() => setSelectedCase('parallel')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            selectedCase === 'parallel'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          No Solution
        </button>
        <button
          onClick={() => setSelectedCase('identical')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            selectedCase === 'identical'
              ? 'bg-yellow-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Infinite Solutions
        </button>
      </div>

      {/* System display */}
      <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="text-center text-sm text-dark-400 mb-3">System of Equations:</div>
        <div className="text-center font-mono text-xl space-y-2">
          <div className="text-cyan-400">{current.eq1}</div>
          <div className="text-emerald-400">{current.eq2}</div>
        </div>
      </div>

      {/* Analysis */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-xs text-dark-500 mb-2">Determinant</div>
          <div className="font-mono text-lg text-center">
            ad - bc = ({current.a})({current.d}) - ({current.b})({current.c})
          </div>
          <div className={`font-mono text-2xl text-center font-bold mt-2 ${
            det !== 0 ? 'text-emerald-400' : 'text-red-400'
          }`}>
            = {det}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-xs text-dark-500 mb-2">Coefficient Ratios</div>
          <div className="font-mono text-sm text-center space-y-1">
            <div>a/c = {current.a}/{current.c} = {(current.a / current.c).toFixed(2)}</div>
            <div>b/d = {current.b}/{current.d} = {(current.b / current.d).toFixed(2)}</div>
            <div>e/f = {current.e}/{current.f} = {(current.e / current.f).toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Visual result */}
      <div className={`p-6 rounded-xl border ${
        selectedCase === 'unique'
          ? 'bg-emerald-500/10 border-emerald-500/50'
          : selectedCase === 'parallel'
            ? 'bg-red-500/10 border-red-500/50'
            : 'bg-yellow-500/10 border-yellow-500/50'
      }`}>
        <div className="flex items-center gap-4">
          {/* Simple line diagram */}
          <div className="w-24 h-24 flex-shrink-0 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {selectedCase === 'unique' && (
                <>
                  <line x1="10" y1="80" x2="90" y2="20" stroke="#22d3ee" strokeWidth="3" />
                  <line x1="10" y1="20" x2="90" y2="80" stroke="#34d399" strokeWidth="3" />
                  <circle cx="50" cy="50" r="6" fill="#a855f7" />
                </>
              )}
              {selectedCase === 'parallel' && (
                <>
                  <line x1="10" y1="30" x2="90" y2="30" stroke="#22d3ee" strokeWidth="3" />
                  <line x1="10" y1="70" x2="90" y2="70" stroke="#34d399" strokeWidth="3" />
                </>
              )}
              {selectedCase === 'identical' && (
                <>
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#22d3ee" strokeWidth="5" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#34d399" strokeWidth="3" strokeDasharray="8 4" />
                </>
              )}
            </svg>
          </div>

          {/* Explanation */}
          <div className="flex-1">
            <div className={`font-semibold text-lg mb-2 ${
              selectedCase === 'unique'
                ? 'text-emerald-400'
                : selectedCase === 'parallel'
                  ? 'text-red-400'
                  : 'text-yellow-400'
            }`}>
              {selectedCase === 'unique' && 'One Unique Solution'}
              {selectedCase === 'parallel' && 'No Solution (Parallel Lines)'}
              {selectedCase === 'identical' && 'Infinitely Many Solutions'}
            </div>
            <p className="text-dark-400 text-sm">
              {current.explanation}
            </p>
          </div>
        </div>
      </div>

      {/* Summary table */}
      <div className="mt-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 mb-3 text-center">Quick Reference:</div>
        <div className="grid grid-cols-3 gap-2 text-sm text-center">
          <div className={`p-2 rounded ${selectedCase === 'unique' ? 'bg-emerald-500/20' : ''}`}>
            <div className="font-mono text-emerald-400">det ≠ 0</div>
            <div className="text-dark-500">Unique</div>
          </div>
          <div className={`p-2 rounded ${selectedCase === 'parallel' ? 'bg-red-500/20' : ''}`}>
            <div className="font-mono text-red-400">det = 0, inconsistent</div>
            <div className="text-dark-500">None</div>
          </div>
          <div className={`p-2 rounded ${selectedCase === 'identical' ? 'bg-yellow-500/20' : ''}`}>
            <div className="font-mono text-yellow-400">det = 0, consistent</div>
            <div className="text-dark-500">Infinite</div>
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Click the buttons above to explore each type of system.
      </p>
    </div>
  );
}
