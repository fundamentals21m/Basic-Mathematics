import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section13Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'If f(x) = x², what is f(3)?',
    options: ['3', '6', '9', '27'],
    correctIndex: 2,
    explanation: 'f(3) = 3² = 9.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is the degree of the polynomial 3x⁴ − 2x² + x − 5?',
    options: ['2', '3', '4', '5'],
    correctIndex: 2,
    explanation: 'The degree is the highest power of x, which is 4.',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is log₂(8)?',
    options: ['2', '3', '4', '8'],
    correctIndex: 1,
    explanation: 'log₂(8) = 3 because 2³ = 8.',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'If f(x) = x + 5, what is f(0)?',
    options: ['0', '5', '-5', 'undefined'],
    correctIndex: 1,
    explanation: 'f(0) = 0 + 5 = 5.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is 2⁰?',
    options: ['0', '1', '2', 'undefined'],
    correctIndex: 1,
    explanation: 'Any positive number raised to the power 0 equals 1.',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'If f(x) = x² and g(x) = x + 1, what is (fg)(2)?',
    options: ['6', '8', '9', '12'],
    correctIndex: 3,
    explanation: '(fg)(2) = f(2) · g(2) = 4 · 3 = 12.',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'A polynomial of degree 5 can have at most how many roots?',
    options: ['4', '5', '6', '10'],
    correctIndex: 1,
    explanation: 'A polynomial of degree n has at most n roots.',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Simplify: log₃(9) + log₃(3)',
    options: ['2', '3', '5', '6'],
    correctIndex: 1,
    explanation: 'log₃(9) = 2 and log₃(3) = 1, so 2 + 1 = 3. Or: log₃(9·3) = log₃(27) = 3.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Which value of x is a root of f(x) = x² − 4x + 3?',
    options: ['0', '1', '2', '4'],
    correctIndex: 1,
    explanation: 'f(1) = 1 − 4 + 3 = 0, so x = 1 is a root.',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'If 2ˣ = 16, what is x?',
    options: ['2', '3', '4', '8'],
    correctIndex: 2,
    explanation: '2⁴ = 16, so x = 4.',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'If f(x) = x³ − 6x² + 11x − 6 and f(1) = 0, factor out (x − 1):',
    options: [
      'x² − 5x + 6',
      'x² − 5x − 6',
      'x² + 5x + 6',
      'x² − 6x + 6'
    ],
    correctIndex: 0,
    explanation: 'Since f(1) = 0, (x−1) is a factor. Dividing: x³ − 6x² + 11x − 6 = (x−1)(x² − 5x + 6).',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Simplify: log₂(32) − log₂(4)',
    options: ['2', '3', '4', '8'],
    correctIndex: 1,
    explanation: 'log₂(32) = 5, log₂(4) = 2, so 5 − 2 = 3. Or: log₂(32/4) = log₂(8) = 3.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If f(x) = 3ˣ, what is f(2) + f(-1)?',
    options: ['9⅓', '8⅔', '9', '10'],
    correctIndex: 0,
    explanation: 'f(2) = 9 and f(-1) = 1/3, so 9 + 1/3 = 9⅓.',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Find log₁₀(1000) + log₁₀(0.01):',
    options: ['1', '2', '3', '5'],
    correctIndex: 0,
    explanation: 'log₁₀(1000) = 3 and log₁₀(0.01) = log₁₀(10⁻²) = -2, so 3 + (-2) = 1.',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'The population P(t) = 100·2^t. When does P(t) = 800?',
    options: ['t = 2', 't = 3', 't = 4', 't = 8'],
    correctIndex: 1,
    explanation: '800 = 100·2^t → 8 = 2^t → 2³ = 2^t → t = 3.',
  },
];
