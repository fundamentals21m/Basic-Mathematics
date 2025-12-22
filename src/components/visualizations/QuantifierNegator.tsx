import { useState } from 'react';
import { useGamification } from '../../contexts/GamificationContext';

interface Challenge {
  id: string;
  statement: string;
  quantifier: 'forall' | 'exists';
  negation: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const CHALLENGES: Challenge[] = [
  {
    id: '1',
    statement: 'All cats are black',
    quantifier: 'forall',
    negation: 'There exists a cat that is not black',
    options: [
      'No cats are black',
      'All cats are not black',
      'There exists a cat that is not black',
      'Some cats are black',
    ],
    correctIndex: 2,
    explanation: 'To negate "for all x, P(x)", we say "there exists x such that NOT P(x)". We only need ONE counterexample.',
  },
  {
    id: '2',
    statement: 'There exists a solution to x² = -1 in the real numbers',
    quantifier: 'exists',
    negation: 'For all real numbers x, x² ≠ -1',
    options: [
      'There exists no solution',
      'For all real numbers x, x² ≠ -1',
      'Some real numbers satisfy x² = -1',
      'x² is always positive',
    ],
    correctIndex: 1,
    explanation: 'To negate "there exists x such that P(x)", we say "for all x, NOT P(x)". Nothing satisfies the condition.',
  },
  {
    id: '3',
    statement: 'Every student passed the exam',
    quantifier: 'forall',
    negation: 'At least one student did not pass the exam',
    options: [
      'No student passed the exam',
      'Every student failed the exam',
      'At least one student did not pass the exam',
      'Most students passed the exam',
    ],
    correctIndex: 2,
    explanation: '"Not everyone passed" means at least one person didn\'t pass. It doesn\'t mean nobody passed!',
  },
  {
    id: '4',
    statement: 'There is a prime number greater than 100',
    quantifier: 'exists',
    negation: 'All prime numbers are at most 100',
    options: [
      'There are no prime numbers',
      'All prime numbers are at most 100',
      'Some prime numbers are less than 100',
      '100 is not prime',
    ],
    correctIndex: 1,
    explanation: 'The negation says NO prime exceeds 100, meaning every prime is ≤ 100.',
  },
  {
    id: '5',
    statement: 'For every ε > 0, there exists δ > 0 such that...',
    quantifier: 'forall',
    negation: 'There exists ε > 0 such that for all δ > 0, NOT...',
    options: [
      'For every ε > 0, for all δ > 0, NOT...',
      'There exists ε > 0 such that for all δ > 0, NOT...',
      'For no ε > 0, there exists δ > 0...',
      'There exists δ > 0 such that for all ε > 0, NOT...',
    ],
    correctIndex: 1,
    explanation: 'When negating nested quantifiers, flip each quantifier in order: ∀ε ∃δ becomes ∃ε ∀δ, then negate the predicate.',
  },
];

export function QuantifierNegator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const { useVisualization } = useGamification();

  const challenge = CHALLENGES[currentIndex];
  const isCorrect = selectedOption === challenge.correctIndex;

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    useVisualization(13, 'QuantifierNegator');
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    setShowResult(true);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % CHALLENGES.length);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="my-8 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-dark-100">Quantifier Negation Practice</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm text-dark-400">
            Score: <span className="text-primary-400 font-bold">{score}</span>/{CHALLENGES.length}
          </span>
          <span className="text-xs text-dark-500">
            {currentIndex + 1}/{CHALLENGES.length}
          </span>
        </div>
      </div>

      {/* Statement */}
      <div className="p-4 rounded-xl bg-dark-900/50 mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-dark-500 mb-2">
          Negate this statement:
        </div>
        <p className="text-lg text-dark-100">"{challenge.statement}"</p>
        <div className="mt-2">
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
            challenge.quantifier === 'forall'
              ? 'bg-cyan-500/20 text-cyan-400'
              : 'bg-emerald-500/20 text-emerald-400'
          }`}>
            {challenge.quantifier === 'forall' ? '∀ Universal (For all)' : '∃ Existential (There exists)'}
          </span>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {challenge.options.map((option, index) => {
          let className = 'w-full p-4 rounded-xl text-left transition-all ';

          if (showResult) {
            if (index === challenge.correctIndex) {
              className += 'bg-emerald-500/20 border-2 border-emerald-500/50 text-dark-100';
            } else if (index === selectedOption) {
              className += 'bg-red-500/20 border-2 border-red-500/50 text-dark-300';
            } else {
              className += 'bg-dark-900/30 border border-dark-700/50 text-dark-500';
            }
          } else {
            if (index === selectedOption) {
              className += 'bg-primary-500/20 border-2 border-primary-500/50 text-dark-100';
            } else {
              className += 'bg-dark-900/50 border border-dark-700/50 text-dark-300 hover:bg-dark-800/50 hover:border-dark-600';
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showResult}
              className={className}
            >
              <span className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                  showResult && index === challenge.correctIndex
                    ? 'bg-emerald-500/30 text-emerald-400'
                    : showResult && index === selectedOption
                    ? 'bg-red-500/30 text-red-400'
                    : selectedOption === index
                    ? 'bg-primary-500/30 text-primary-400'
                    : 'bg-dark-700/50 text-dark-500'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {/* Check/Next Button */}
      {!showResult ? (
        <button
          onClick={handleCheck}
          disabled={selectedOption === null}
          className={`w-full py-3 rounded-xl font-medium transition-all ${
            selectedOption === null
              ? 'bg-dark-700/50 text-dark-500 cursor-not-allowed'
              : 'bg-primary-500 text-white hover:bg-primary-600'
          }`}
        >
          Check Answer
        </button>
      ) : (
        <div className="space-y-4">
          {/* Result */}
          <div className={`p-4 rounded-xl ${
            isCorrect
              ? 'bg-emerald-500/10 border border-emerald-500/30'
              : 'bg-red-500/10 border border-red-500/30'
          }`}>
            <p className={`font-semibold ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
              {isCorrect ? '✓ Correct!' : '✗ Not quite'}
            </p>
            <p className="text-sm text-dark-400 mt-1">{challenge.explanation}</p>
          </div>

          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
          >
            {currentIndex < CHALLENGES.length - 1 ? 'Next Challenge' : 'Start Over'}
          </button>
        </div>
      )}

      {/* Rule Reminder */}
      <div className="mt-6 p-4 rounded-xl bg-dark-900/50 text-sm text-dark-400">
        <strong className="text-dark-300">Remember:</strong>
        <ul className="mt-2 space-y-1">
          <li>• ¬(∀x, P(x)) = ∃x, ¬P(x)</li>
          <li>• ¬(∃x, P(x)) = ∀x, ¬P(x)</li>
        </ul>
      </div>
    </div>
  );
}
