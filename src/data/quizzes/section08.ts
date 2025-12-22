import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section08Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'Which of these is a real number?',
    options: ['√2', '3/4', '-5', 'All of these'],
    correctIndex: 3,
    explanation: 'All rational numbers (like 3/4 and -5) and irrational numbers (like √2) are real numbers.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'Is √2 rational or irrational?',
    options: ['Rational', 'Irrational', 'Neither', 'Both'],
    correctIndex: 1,
    explanation: '√2 cannot be expressed as a ratio of two integers, making it irrational.',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'The set of real numbers includes:',
    options: [
      'Only rational numbers',
      'Only irrational numbers',
      'Both rational and irrational numbers',
      'Only positive numbers'
    ],
    correctIndex: 2,
    explanation: 'Real numbers = Rational numbers ∪ Irrational numbers.',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'Which property holds for real number multiplication?',
    options: ['a × b = b × a', 'a × b ≠ b × a', 'a × b = a + b', 'None of these'],
    correctIndex: 0,
    explanation: 'Multiplication of real numbers is commutative: a × b = b × a.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: '0.333... (repeating) is:',
    options: ['Irrational', 'Rational', 'Neither', 'Not a real number'],
    correctIndex: 1,
    explanation: '0.333... = 1/3, which is a ratio of integers, making it rational.',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'Which of these is irrational?',
    options: ['0.75', '√9', 'π', '22/7'],
    correctIndex: 2,
    explanation: 'π is irrational. 0.75 = 3/4, √9 = 3, and 22/7 are all rational.',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'If a is rational and b is irrational, then a + b is:',
    options: ['Always rational', 'Always irrational', 'Could be either', 'Always zero'],
    correctIndex: 1,
    explanation: 'Rational + irrational = irrational (assuming a ≠ 0 or even if a = 0).',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Between any two real numbers, there exists:',
    options: [
      'No other numbers',
      'Exactly one number',
      'Finitely many numbers',
      'Infinitely many numbers'
    ],
    correctIndex: 3,
    explanation: 'The real numbers are "dense" - between any two distinct reals, there are infinitely many others.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Which statement about √2 × √2 is true?',
    options: ['It equals 2', 'It equals √4', 'It equals 4', 'Both "It equals 2" and "It equals √4"'],
    correctIndex: 3,
    explanation: '√2 × √2 = 2, and √4 = 2, so both statements are equivalent and true.',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'The decimal expansion of an irrational number is:',
    options: [
      'Terminating',
      'Repeating',
      'Non-terminating and non-repeating',
      'Always negative'
    ],
    correctIndex: 2,
    explanation: 'Irrational numbers have infinite, non-repeating decimal expansions.',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'If a × b = 0 for real numbers, then:',
    options: ['a = 0 and b = 0', 'a = 0 or b = 0', 'a = b', 'a + b = 0'],
    correctIndex: 1,
    explanation: 'The zero product property: if ab = 0, then at least one of a or b must be 0.',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Is √2 + √3 rational or irrational?',
    options: ['Rational', 'Irrational', 'Neither', 'Depends on context'],
    correctIndex: 1,
    explanation: 'The sum of two irrational numbers can be rational (like √2 + (-√2) = 0), but √2 + √3 is irrational.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Which set is "complete" (has no gaps)?',
    options: ['Integers', 'Rationals', 'Reals', 'Natural numbers'],
    correctIndex: 2,
    explanation: 'The real numbers are complete: every Cauchy sequence converges. The rationals have "gaps" (like √2).',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If a < b for real numbers, then for any c:',
    options: ['a + c < b + c', 'ac < bc', 'a - c < b - c', 'Both "a + c < b + c" and "a - c < b - c"'],
    correctIndex: 3,
    explanation: 'Adding or subtracting the same number preserves inequality. Multiplying only preserves it if c > 0.',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'The product of two irrational numbers is:',
    options: [
      'Always irrational',
      'Always rational',
      'Could be rational or irrational',
      'Never defined'
    ],
    correctIndex: 2,
    explanation: 'Example: √2 × √2 = 2 (rational), but √2 × √3 = √6 (irrational).',
  },
];
