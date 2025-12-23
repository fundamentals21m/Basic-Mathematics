import { useState } from 'react';

export function QuadrantIdentifier() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const generatePoint = () => {
    const x = Math.floor(Math.random() * 13) - 6; // -6 to 6
    const y = Math.floor(Math.random() * 13) - 6;
    return { x, y };
  };

  const [point, setPoint] = useState(generatePoint);

  const getCorrectAnswer = (x: number, y: number) => {
    if (x === 0 && y === 0) return 'origin';
    if (x === 0) return 'y-axis';
    if (y === 0) return 'x-axis';
    if (x > 0 && y > 0) return 'I';
    if (x < 0 && y > 0) return 'II';
    if (x < 0 && y < 0) return 'III';
    return 'IV';
  };

  const correctAnswer = getCorrectAnswer(point.x, point.y);
  const isOnAxis = correctAnswer === 'origin' || correctAnswer === 'x-axis' || correctAnswer === 'y-axis';

  const handleAnswer = (selectedAnswer: string) => {
    setAnswer(selectedAnswer);
    setShowResult(true);
    if (selectedAnswer === correctAnswer) {
      setScore((s) => ({ correct: s.correct + 1, total: s.total + 1 }));
    } else {
      setScore((s) => ({ ...s, total: s.total + 1 }));
    }
  };

  const nextQuestion = () => {
    setPoint(generatePoint());
    setAnswer(null);
    setShowResult(false);
  };

  const scale = 20;
  const width = 260;
  const height = 260;
  const centerX = width / 2;
  const centerY = height / 2;

  const svgPoint = {
    x: centerX + point.x * scale,
    y: centerY - point.y * scale,
  };

  const quadrantOptions = [
    { value: 'I', label: 'I', color: 'primary' },
    { value: 'II', label: 'II', color: 'cyan' },
    { value: 'III', label: 'III', color: 'emerald' },
    { value: 'IV', label: 'IV', color: 'amber' },
  ];

  const axisOptions = [
    { value: 'x-axis', label: 'x-axis', color: 'dark' },
    { value: 'y-axis', label: 'y-axis', color: 'dark' },
    { value: 'origin', label: 'Origin', color: 'dark' },
  ];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Quadrant Identifier
      </h3>

      {/* Score */}
      <div className="flex justify-center mb-4">
        <div className="px-4 py-1 rounded-full bg-dark-700 text-dark-300 text-sm">
          Score: {score.correct} / {score.total}
        </div>
      </div>

      {/* Question */}
      <div className="text-center mb-4">
        <p className="text-dark-300">
          In which quadrant is the point{' '}
          <span className="font-mono text-primary-400 font-bold">
            ({point.x}, {point.y})
          </span>
          ?
        </p>
      </div>

      {/* Mini coordinate plane */}
      <div className="flex justify-center mb-4">
        <svg width={width} height={height} className="bg-dark-800 rounded-xl">
          {/* Grid */}
          {Array.from({ length: 13 }, (_, i) => i - 6).map((n) => (
            <g key={n}>
              <line
                x1={centerX + n * scale}
                y1={10}
                x2={centerX + n * scale}
                y2={height - 10}
                stroke={n === 0 ? '#6b7280' : '#374151'}
                strokeWidth={n === 0 ? 2 : 0.5}
              />
              <line
                x1={10}
                y1={centerY - n * scale}
                x2={width - 10}
                y2={centerY - n * scale}
                stroke={n === 0 ? '#6b7280' : '#374151'}
                strokeWidth={n === 0 ? 2 : 0.5}
              />
            </g>
          ))}

          {/* Quadrant backgrounds (subtle) */}
          <rect x={centerX} y={10} width={centerX - 10} height={centerY - 10} fill="rgba(59, 130, 246, 0.05)" />
          <rect x={10} y={10} width={centerX - 10} height={centerY - 10} fill="rgba(6, 182, 212, 0.05)" />
          <rect x={10} y={centerY} width={centerX - 10} height={centerY - 10} fill="rgba(16, 185, 129, 0.05)" />
          <rect x={centerX} y={centerY} width={centerX - 10} height={centerY - 10} fill="rgba(245, 158, 11, 0.05)" />

          {/* Quadrant labels */}
          <text x={width - 25} y={30} fill="#3b82f6" fontSize={12} fontWeight="bold">I</text>
          <text x={15} y={30} fill="#06b6d4" fontSize={12} fontWeight="bold">II</text>
          <text x={15} y={height - 20} fill="#10b981" fontSize={12} fontWeight="bold">III</text>
          <text x={width - 30} y={height - 20} fill="#f59e0b" fontSize={12} fontWeight="bold">IV</text>

          {/* Point */}
          <circle
            cx={svgPoint.x}
            cy={svgPoint.y}
            r={8}
            fill={showResult ? (answer === correctAnswer ? '#10b981' : '#ef4444') : '#3b82f6'}
            stroke="white"
            strokeWidth={2}
          />
        </svg>
      </div>

      {/* Answer buttons */}
      {!showResult ? (
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-2">
            {quadrantOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-all bg-${opt.color}-500/20 text-${opt.color}-400 hover:bg-${opt.color}-500/30 border border-${opt.color}-500/30`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {axisOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className="px-3 py-2 rounded-lg text-sm transition-all bg-dark-700 text-dark-300 hover:bg-dark-600"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div
            className={`p-4 rounded-xl mb-4 ${
              answer === correctAnswer
                ? 'bg-emerald-500/10 border border-emerald-500/30'
                : 'bg-red-500/10 border border-red-500/30'
            }`}
          >
            {answer === correctAnswer ? (
              <p className="text-emerald-400 font-semibold">Correct!</p>
            ) : (
              <p className="text-red-400">
                Incorrect. The answer is{' '}
                <span className="font-bold">
                  {isOnAxis ? correctAnswer : `Quadrant ${correctAnswer}`}
                </span>
              </p>
            )}
            {!isOnAxis && (
              <p className="text-dark-400 text-sm mt-2">
                {point.x > 0 ? 'x > 0' : 'x < 0'} and {point.y > 0 ? 'y > 0' : 'y < 0'}
              </p>
            )}
          </div>
          <button
            onClick={nextQuestion}
            className="px-6 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}
