import { useState, useCallback } from 'react';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface SectionQuizQuestion {
  id: number;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface SectionQuizProps {
  sectionTitle: string;
  questions: SectionQuizQuestion[];
  questionsPerQuiz?: number; // How many questions to show per quiz attempt
}

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const difficultyConfig = {
  easy: {
    label: 'Easy',
    color: 'emerald',
    description: 'Basic concepts and straightforward problems',
  },
  medium: {
    label: 'Medium',
    color: 'yellow',
    description: 'Apply concepts to solve problems',
  },
  hard: {
    label: 'Hard',
    color: 'red',
    description: 'Challenging problems requiring deeper understanding',
  },
};

export function SectionQuiz({ sectionTitle, questions, questionsPerQuiz = 5 }: SectionQuizProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<SectionQuizQuestion[]>([]);

  // Generate a new shuffled set of questions for the given difficulty
  const generateQuizQuestions = useCallback((difficulty: Difficulty) => {
    const filtered = questions.filter(q => q.difficulty === difficulty);
    const shuffled = shuffleArray(filtered);
    // Take only questionsPerQuiz questions (or all if fewer available)
    return shuffled.slice(0, Math.min(questionsPerQuiz, shuffled.length));
  }, [questions, questionsPerQuiz]);

  const current = shuffledQuestions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  const isCorrect = current ? selectedAnswer === current.correctIndex : false;
  const correctCount = selectedAnswers.filter(
    (a, i) => a === shuffledQuestions[i]?.correctIndex
  ).length;

  const handleSelectDifficulty = (difficulty: Difficulty) => {
    setSelectedDifficulty(difficulty);
    const quizQuestions = generateQuizQuestions(difficulty);
    setShuffledQuestions(quizQuestions);
    setSelectedAnswers(new Array(quizQuestions.length).fill(null));
    setCurrentQuestion(0);
    setShowResults(false);
    setShowExplanation(false);
  };

  const handleSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = index;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    // Generate a new set of shuffled questions for a fresh quiz
    if (selectedDifficulty) {
      const quizQuestions = generateQuizQuestions(selectedDifficulty);
      setShuffledQuestions(quizQuestions);
      setSelectedAnswers(new Array(quizQuestions.length).fill(null));
    }
    setCurrentQuestion(0);
    setShowResults(false);
    setShowExplanation(false);
  };

  const handleChangeDifficulty = () => {
    setSelectedDifficulty(null);
    setShuffledQuestions([]);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  // Difficulty selection screen
  if (!selectedDifficulty) {
    const easyCount = questions.filter(q => q.difficulty === 'easy').length;
    const mediumCount = questions.filter(q => q.difficulty === 'medium').length;
    const hardCount = questions.filter(q => q.difficulty === 'hard').length;

    return (
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-2">Section Quiz</h3>
        <p className="text-dark-400 mb-6">Test your understanding of {sectionTitle}</p>

        <div className="grid gap-4 md:grid-cols-3">
          {(['easy', 'medium', 'hard'] as Difficulty[]).map(diff => {
            const config = difficultyConfig[diff];
            const totalCount = diff === 'easy' ? easyCount : diff === 'medium' ? mediumCount : hardCount;
            const quizCount = Math.min(questionsPerQuiz, totalCount);

            if (totalCount === 0) return null;

            return (
              <button
                key={diff}
                onClick={() => handleSelectDifficulty(diff)}
                className={`p-4 rounded-xl border transition-all text-left hover:scale-[1.02] ${
                  diff === 'easy'
                    ? 'bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-500'
                    : diff === 'medium'
                    ? 'bg-yellow-500/10 border-yellow-500/30 hover:border-yellow-500'
                    : 'bg-red-500/10 border-red-500/30 hover:border-red-500'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-semibold ${
                    diff === 'easy' ? 'text-emerald-400' : diff === 'medium' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {config.label}
                  </span>
                  <span className="text-dark-400 text-sm">
                    {quizCount} question{quizCount !== 1 ? 's' : ''}
                    {totalCount > questionsPerQuiz && (
                      <span className="text-dark-500"> (from {totalCount})</span>
                    )}
                  </span>
                </div>
                <p className="text-dark-400 text-sm">{config.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    const percentage = Math.round((correctCount / shuffledQuestions.length) * 100);
    const config = difficultyConfig[selectedDifficulty];

    return (
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-dark-100">
            Quiz Results
            <span className={`ml-2 text-sm px-2 py-1 rounded ${
              selectedDifficulty === 'easy' ? 'bg-emerald-500/20 text-emerald-400' :
              selectedDifficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {config.label}
            </span>
          </h3>
        </div>

        <div className="text-center mb-8">
          <div className="text-6xl font-bold mb-2">
            <span className={percentage >= 70 ? 'text-emerald-400' : percentage >= 50 ? 'text-yellow-400' : 'text-red-400'}>
              {percentage}%
            </span>
          </div>
          <p className="text-dark-300">
            You got {correctCount} out of {shuffledQuestions.length} correct
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {shuffledQuestions.map((q, i) => {
            const wasCorrect = selectedAnswers[i] === q.correctIndex;
            return (
              <div
                key={q.id}
                className={`p-3 rounded-lg border ${
                  wasCorrect
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-red-500/10 border-red-500/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={wasCorrect ? 'text-emerald-400' : 'text-red-400'}>
                    {wasCorrect ? '✓' : '✗'}
                  </span>
                  <span
                    className="text-dark-300 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: q.question.length > 60 ? q.question.substring(0, 60) + '...' : q.question
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleRestart}
            className="flex-1 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={handleChangeDifficulty}
            className="flex-1 py-3 bg-dark-700 hover:bg-dark-600 text-dark-200 rounded-lg transition-colors"
          >
            Change Difficulty
          </button>
        </div>
      </div>
    );
  }

  // Quiz questions screen
  const config = difficultyConfig[selectedDifficulty];

  return (
    <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-dark-200">Section Quiz</h3>
          <span className={`text-xs px-2 py-1 rounded ${
            selectedDifficulty === 'easy' ? 'bg-emerald-500/20 text-emerald-400' :
            selectedDifficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {config.label}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-dark-400">
            Question {currentQuestion + 1} of {shuffledQuestions.length}
          </span>
          <button
            onClick={handleChangeDifficulty}
            className="text-xs text-dark-500 hover:text-dark-300 transition-colors"
          >
            Change
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-dark-700 rounded-full mb-6 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${
            selectedDifficulty === 'easy' ? 'bg-emerald-500' :
            selectedDifficulty === 'medium' ? 'bg-yellow-500' :
            'bg-red-500'
          }`}
          style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-6">
        <p className="text-lg text-dark-100" dangerouslySetInnerHTML={{ __html: current.question }} />
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {current.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === current.correctIndex;
          const showCorrectness = selectedAnswer !== null;

          let className = 'w-full p-4 text-left rounded-lg border transition-all ';
          if (showCorrectness) {
            if (isCorrectOption) {
              className += 'bg-emerald-500/20 border-emerald-500 text-emerald-300';
            } else if (isSelected && !isCorrectOption) {
              className += 'bg-red-500/20 border-red-500 text-red-300';
            } else {
              className += 'bg-dark-800/50 border-dark-600 text-dark-400';
            }
          } else {
            className += 'bg-dark-800/50 border-dark-600 text-dark-200 hover:border-primary-500 hover:bg-dark-700/50 cursor-pointer';
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={selectedAnswer !== null}
              className={className}
              dangerouslySetInnerHTML={{ __html: option }}
            />
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
          <p className={`font-semibold mb-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p className="text-dark-300 text-sm" dangerouslySetInnerHTML={{ __html: current.explanation }} />
        </div>
      )}

      {/* Navigation */}
      {selectedAnswer !== null && (
        <button
          onClick={handleNext}
          className="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
        >
          {currentQuestion < shuffledQuestions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  );
}
