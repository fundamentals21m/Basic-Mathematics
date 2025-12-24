import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section47Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is log₂(8)?',
    options: ['3', '2', '4', '8'],
    correctIndex: 0,
    explanation: 'log₂(8) = 3 because 2³ = 8.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is log₁₀(100)?',
    options: ['2', '10', '100', '1'],
    correctIndex: 0,
    explanation: 'log₁₀(100) = 2 because 10² = 100.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is log_b(1) for any valid base b?',
    options: ['0', '1', 'b', 'Undefined'],
    correctIndex: 0,
    explanation: 'log_b(1) = 0 because b⁰ = 1 for any b.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is ln(e)?',
    options: ['1', 'e', '0', '2.718'],
    correctIndex: 0,
    explanation: 'ln(e) = log_e(e) = 1 because e¹ = e.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'The domain of f(x) = log(x) is:',
    options: ['x > 0', 'All real numbers', 'x ≥ 0', 'x ≠ 0'],
    correctIndex: 0,
    explanation: 'Logarithms are only defined for positive arguments.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Simplify log₃(27).',
    options: ['3', '9', '27', '1'],
    correctIndex: 0,
    explanation: 'log₃(27) = log₃(3³) = 3.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Expand log(xy²).',
    options: ['log x + 2 log y', 'log x · log y²', '2 log(xy)', 'log x + log y + log 2'],
    correctIndex: 0,
    explanation: 'log(xy²) = log x + log(y²) = log x + 2 log y.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Condense 2 log x - log y into a single logarithm.',
    options: ['log(x²/y)', 'log(2x/y)', 'log(x²y)', 'log(x - y)²'],
    correctIndex: 0,
    explanation: '2 log x - log y = log(x²) - log(y) = log(x²/y).'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Solve log₂(x) = 5.',
    options: ['32', '25', '10', '16'],
    correctIndex: 0,
    explanation: 'log₂(x) = 5 means x = 2⁵ = 32.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'What is log₄(2)?',
    options: ['1/2', '2', '1', '1/4'],
    correctIndex: 0,
    explanation: '4^(1/2) = 2, so log₄(2) = 1/2.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Express log₂(10) using natural logarithms.',
    options: ['ln(10)/ln(2)', 'ln(2)/ln(10)', 'ln(10) - ln(2)', 'ln(10) · ln(2)'],
    correctIndex: 0,
    explanation: 'By change of base: log₂(10) = ln(10)/ln(2).'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Solve 2^x = 7.',
    options: ['log₂(7) or ln(7)/ln(2)', '7/2', 'log₇(2)', '2 log 7'],
    correctIndex: 0,
    explanation: 'Taking log₂ of both sides: x = log₂(7) = ln(7)/ln(2).'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Solve log(x) + log(x - 3) = 1.',
    options: ['x = 5', 'x = 10', 'x = 3', 'x = 13'],
    correctIndex: 0,
    explanation: 'log(x(x-3)) = 1 means x(x-3) = 10, so x² - 3x - 10 = 0, (x-5)(x+2) = 0. Since x > 3 required, x = 5.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If log₂(a) = 3 and log₂(b) = 5, find log₂(a²b).',
    options: ['11', '8', '15', '13'],
    correctIndex: 0,
    explanation: 'log₂(a²b) = 2 log₂(a) + log₂(b) = 2(3) + 5 = 11.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Simplify log₈(4).',
    options: ['2/3', '1/2', '3/2', '4/8'],
    correctIndex: 0,
    explanation: '8^x = 4 means (2³)^x = 2², so 3x = 2, x = 2/3. Thus log₈(4) = 2/3.'
  }
];
