import { useState } from 'react';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
}

export function Quiz({ title, questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const current = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  const isCorrect = selectedAnswer === current.correctIndex;
  const correctCount = selectedAnswers.filter(
    (a, i) => a === questions[i].correctIndex
  ).length;

  const handleSelect = (index: number) => {
    if (selectedAnswer !== null) return; // Already answered
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = index;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
    setShowExplanation(false);
  };

  if (showResults) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    return (
      <div className="demo-container">
        <h3 className="text-xl font-semibold text-dark-100 mb-6">{title} - Results</h3>

        <div className="text-center mb-8">
          <div className="text-6xl font-bold mb-2">
            <span className={percentage >= 70 ? 'text-emerald-400' : percentage >= 50 ? 'text-yellow-400' : 'text-red-400'}>
              {percentage}%
            </span>
          </div>
          <p className="text-dark-300">
            You got {correctCount} out of {questions.length} correct
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {questions.map((q, i) => {
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
                  <span className="text-dark-300 text-sm">
                    Q{i + 1}: {q.question.substring(0, 50)}...
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleRestart}
          className="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="demo-container">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-dark-200">{title}</h3>
        <span className="text-sm text-dark-400">
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-dark-700 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-primary-500 transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
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
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  );
}
