import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section43Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'If f(x) = 2x + 1, what is f(3)?',
    options: ['7', '6', '9', '5'],
    correctIndex: 0,
    explanation: 'f(3) = 2(3) + 1 = 6 + 1 = 7.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'A function assigns each input to how many outputs?',
    options: ['Exactly one', 'At least one', 'At most one', 'Any number'],
    correctIndex: 0,
    explanation: 'By definition, a function assigns each input exactly one output.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is the domain of f(x) = x²?',
    options: ['All real numbers', 'x ≥ 0', 'x > 0', 'x ≠ 0'],
    correctIndex: 0,
    explanation: 'We can square any real number, so the domain is all of ℝ.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'If f(x) = 5, what kind of function is f?',
    options: ['Constant function', 'Linear function', 'Quadratic function', 'Identity function'],
    correctIndex: 0,
    explanation: 'f(x) = 5 outputs the same value 5 regardless of input, making it a constant function.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is the range of f(x) = x² for all real x?',
    options: ['y ≥ 0', 'All real numbers', 'y > 0', 'y ≤ 0'],
    correctIndex: 0,
    explanation: 'Squares are always non-negative, so the range is y ≥ 0.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'What is the natural domain of f(x) = 1/(x² - 4)?',
    options: ['x ≠ ±2', 'x ≠ 2', 'x ≠ -2', 'All real numbers'],
    correctIndex: 0,
    explanation: 'x² - 4 = 0 when x = ±2. These must be excluded from the domain.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What is the domain of f(x) = √(x - 3)?',
    options: ['x ≥ 3', 'x > 3', 'x ≥ 0', 'All real numbers'],
    correctIndex: 0,
    explanation: 'We need x - 3 ≥ 0, so x ≥ 3.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'If f(x) = x² and g(x) = x + 1, what is (f + g)(2)?',
    options: ['7', '6', '5', '8'],
    correctIndex: 0,
    explanation: '(f + g)(2) = f(2) + g(2) = 4 + 3 = 7.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'If f(x) = 2x - 1, find f(f(2)).',
    options: ['5', '6', '3', '7'],
    correctIndex: 0,
    explanation: 'f(2) = 3, then f(3) = 2(3) - 1 = 5.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'The range of f(x) = |x| is:',
    options: ['y ≥ 0', 'All real numbers', 'y > 0', 'y ≤ 0'],
    correctIndex: 0,
    explanation: 'Absolute value is always non-negative, so range is y ≥ 0.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Find the domain of f(x) = √(x² - 9).',
    options: ['x ≤ -3 or x ≥ 3', '-3 ≤ x ≤ 3', 'x ≥ 3', 'x ≥ 0'],
    correctIndex: 0,
    explanation: 'Need x² - 9 ≥ 0, i.e., x² ≥ 9, so |x| ≥ 3, meaning x ≤ -3 or x ≥ 3.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'What is the range of f(x) = 1/(x² + 1)?',
    options: ['0 < y ≤ 1', 'y > 0', 'y ≥ 1', '0 ≤ y ≤ 1'],
    correctIndex: 0,
    explanation: 'Since x² + 1 ≥ 1, we have 0 < 1/(x² + 1) ≤ 1. Maximum at x = 0 gives y = 1.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If f(x) = x² - 4x + 5, what is the minimum value of f(x)?',
    options: ['1', '0', '5', '-4'],
    correctIndex: 0,
    explanation: 'f(x) = (x - 2)² + 1. The minimum is 1, achieved at x = 2.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Find the domain of f(x) = √(x)/√(x - 1).',
    options: ['x > 1', 'x ≥ 1', 'x ≥ 0', 'x > 0'],
    correctIndex: 0,
    explanation: 'Need x ≥ 0 for numerator and x - 1 > 0 (denominator can\'t be 0) for denominator. So x > 1.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'If f(x + 1) = x² - 1, find f(x).',
    options: ['x² - 2x', 'x² - 1', 'x² + 1', '(x-1)² - 1'],
    correctIndex: 0,
    explanation: 'Let u = x + 1, so x = u - 1. Then f(u) = (u-1)² - 1 = u² - 2u. Replace u with x: f(x) = x² - 2x.'
  }
];
