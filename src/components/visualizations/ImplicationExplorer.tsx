import { useState } from 'react';
import { useGamification } from '../../contexts/GamificationContext';

interface Example {
  id: string;
  p: string;
  q: string;
  originalTrue: boolean;
  converseTrue: boolean;
}

const EXAMPLES: Example[] = [
  {
    id: 'rain',
    p: 'It is raining',
    q: 'The ground is wet',
    originalTrue: true,
    converseTrue: false, // Ground could be wet from sprinklers
  },
  {
    id: 'div6',
    p: 'n is divisible by 6',
    q: 'n is divisible by 2',
    originalTrue: true,
    converseTrue: false, // 4 is divisible by 2 but not 6
  },
  {
    id: 'square',
    p: 'x = 3',
    q: 'x² = 9',
    originalTrue: true,
    converseTrue: false, // x could be -3
  },
  {
    id: 'even',
    p: 'n is even',
    q: 'n² is even',
    originalTrue: true,
    converseTrue: true, // This is actually a biconditional
  },
];

export function ImplicationExplorer() {
  const [selectedId, setSelectedId] = useState(EXAMPLES[0].id);
  const [showAnswers, setShowAnswers] = useState(false);
  const { useVisualization } = useGamification();

  const example = EXAMPLES.find((e) => e.id === selectedId)!;

  const handleInteraction = () => {
    useVisualization(13, 'ImplicationExplorer');
  };

  return (
    <div className="my-8 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-dark-100">Implication Explorer</h3>
        <span className="text-xs text-dark-500">Interactive</span>
      </div>

      {/* Example Selector */}
      <div className="mb-6">
        <label className="block text-sm text-dark-400 mb-2">Choose an example:</label>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex.id}
              onClick={() => {
                setSelectedId(ex.id);
                setShowAnswers(false);
                handleInteraction();
              }}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                selectedId === ex.id
                  ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                  : 'bg-dark-700/50 text-dark-400 border border-dark-600/50 hover:bg-dark-700'
              }`}
            >
              {ex.p.slice(0, 20)}...
            </button>
          ))}
        </div>
      </div>

      {/* Original Implication */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-2">
          Original Implication (P → Q)
        </div>
        <p className="text-dark-100">
          If <span className="text-cyan-400">{example.p}</span>, then{' '}
          <span className="text-emerald-400">{example.q}</span>.
        </p>
      </div>

      {/* Related Statements Grid */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Converse */}
        <div className="p-4 rounded-xl bg-dark-900/50 border border-dark-700/50">
          <div className="text-xs font-semibold uppercase tracking-wider text-dark-500 mb-2">
            Converse (Q → P)
          </div>
          <p className="text-dark-300 text-sm">
            If <span className="text-emerald-400">{example.q}</span>, then{' '}
            <span className="text-cyan-400">{example.p}</span>.
          </p>
          {showAnswers && (
            <div className={`mt-2 text-xs font-semibold ${example.converseTrue ? 'text-emerald-400' : 'text-red-400'}`}>
              {example.converseTrue ? '✓ TRUE' : '✗ NOT necessarily true'}
            </div>
          )}
        </div>

        {/* Inverse */}
        <div className="p-4 rounded-xl bg-dark-900/50 border border-dark-700/50">
          <div className="text-xs font-semibold uppercase tracking-wider text-dark-500 mb-2">
            Inverse (¬P → ¬Q)
          </div>
          <p className="text-dark-300 text-sm">
            If <span className="text-cyan-400">NOT {example.p.toLowerCase()}</span>, then{' '}
            <span className="text-emerald-400">NOT {example.q.toLowerCase()}</span>.
          </p>
          {showAnswers && (
            <div className={`mt-2 text-xs font-semibold ${example.converseTrue ? 'text-emerald-400' : 'text-red-400'}`}>
              {example.converseTrue ? '✓ TRUE' : '✗ NOT necessarily true'}
            </div>
          )}
        </div>

        {/* Contrapositive */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Contrapositive (¬Q → ¬P)
          </div>
          <p className="text-dark-300 text-sm">
            If <span className="text-emerald-400">NOT {example.q.toLowerCase()}</span>, then{' '}
            <span className="text-cyan-400">NOT {example.p.toLowerCase()}</span>.
          </p>
          {showAnswers && (
            <div className="mt-2 text-xs font-semibold text-emerald-400">
              ✓ ALWAYS equivalent to original
            </div>
          )}
        </div>
      </div>

      {/* Show Answers Button */}
      <button
        onClick={() => {
          setShowAnswers(!showAnswers);
          handleInteraction();
        }}
        className="w-full py-3 rounded-xl bg-dark-700/50 text-dark-300 hover:bg-dark-700 transition-colors"
      >
        {showAnswers ? 'Hide Analysis' : 'Show Truth Analysis'}
      </button>

      {/* Key Insight */}
      {showAnswers && (
        <div className="mt-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
          <p className="text-sm text-dark-300">
            <strong className="text-yellow-400">Key Insight:</strong>{' '}
            The contrapositive is <em>always</em> logically equivalent to the original implication.
            The converse and inverse are equivalent to each other, but NOT to the original!
            {example.converseTrue && (
              <span className="block mt-2 text-emerald-400">
                This example is special: both directions are true, making it a biconditional (↔).
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
