import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section44Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the degree of f(x) = 3x⁴ - 2x² + 5?',
    options: ['4', '3', '2', '5'],
    correctIndex: 0,
    explanation: 'The highest power of x is 4, so the degree is 4.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is the leading coefficient of 2x³ - 5x² + x - 7?',
    options: ['2', '-5', '1', '-7'],
    correctIndex: 0,
    explanation: 'The leading coefficient is the coefficient of the highest-degree term, which is 2.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'A quadratic polynomial has degree:',
    options: ['2', '1', '3', '4'],
    correctIndex: 0,
    explanation: 'Quadratic means degree 2.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is the constant term of x³ - 4x + 9?',
    options: ['9', '-4', '1', '0'],
    correctIndex: 0,
    explanation: 'The constant term is the term without x, which is 9.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'If f(2) = 0 for polynomial f(x), then x = 2 is called a:',
    options: ['Root', 'Coefficient', 'Degree', 'Leading term'],
    correctIndex: 0,
    explanation: 'A value where f(x) = 0 is called a root (or zero) of the polynomial.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'What is the degree of (x² + 1)(x³ - x)?',
    options: ['5', '6', '4', '3'],
    correctIndex: 0,
    explanation: 'When multiplying polynomials, add the degrees: 2 + 3 = 5.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Compute (2x² - 3x + 1) + (x² + 4x - 2).',
    options: ['3x² + x - 1', '3x² - x + 1', '2x² + x - 1', '3x² + 7x - 1'],
    correctIndex: 0,
    explanation: 'Combine like terms: (2+1)x² + (-3+4)x + (1-2) = 3x² + x - 1.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'If x = 3 is a root of f(x), which of the following is a factor?',
    options: ['(x - 3)', '(x + 3)', '(x - 1/3)', '(3x - 1)'],
    correctIndex: 0,
    explanation: 'By the Factor Theorem, if r is a root, then (x - r) is a factor.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Find the roots of x² - 5x + 6.',
    options: ['x = 2 and x = 3', 'x = -2 and x = -3', 'x = 1 and x = 6', 'x = -1 and x = -6'],
    correctIndex: 0,
    explanation: 'Factor: (x - 2)(x - 3) = 0, so x = 2 or x = 3.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'As x → +∞, what happens to f(x) = -2x³ + x?',
    options: ['f(x) → -∞', 'f(x) → +∞', 'f(x) → 0', 'f(x) → 1'],
    correctIndex: 0,
    explanation: 'Leading term is -2x³. Since coefficient is negative and degree is odd, f(x) → -∞ as x → +∞.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'How many real roots can x⁴ + 1 have?',
    options: ['0', '2', '4', '1'],
    correctIndex: 0,
    explanation: 'x⁴ + 1 > 0 for all real x (since x⁴ ≥ 0), so it has no real roots.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'If f(x) = x³ - 6x² + 11x - 6, and f(1) = 0, factor f(x) completely.',
    options: ['(x-1)(x-2)(x-3)', '(x+1)(x+2)(x+3)', '(x-1)(x-1)(x-6)', '(x-1)(x²-5x+6)'],
    correctIndex: 0,
    explanation: 'f(1) = 0 means (x-1) is a factor. Dividing gives x² - 5x + 6 = (x-2)(x-3). So f(x) = (x-1)(x-2)(x-3).'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Use the Rational Root Theorem: possible rational roots of 2x³ - 3x² - 8x + 12 are:',
    options: ['±1, ±2, ±3, ±4, ±6, ±12, ±1/2, ±3/2', '±1, ±2, ±3, ±4', '±1, ±12', '±1, ±2, ±3, ±6, ±12'],
    correctIndex: 0,
    explanation: 'p divides 12: ±1, ±2, ±3, ±4, ±6, ±12. q divides 2: ±1, ±2. Possible roots: ±p/q combinations.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If a polynomial of degree 5 has roots 1, 2, 3 (each with multiplicity 1), what is the minimum number of complex roots?',
    options: ['2', '0', '3', '5'],
    correctIndex: 0,
    explanation: 'Degree 5 means 5 roots total. 3 are real (1, 2, 3). The remaining 2 must be complex (and come in conjugate pairs if coefficients are real).'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Find the remainder when x¹⁰⁰ + x⁵⁰ + 1 is divided by x - 1.',
    options: ['3', '1', '0', '2'],
    correctIndex: 0,
    explanation: 'By the Remainder Theorem, the remainder is f(1) = 1¹⁰⁰ + 1⁵⁰ + 1 = 1 + 1 + 1 = 3.'
  }
];
