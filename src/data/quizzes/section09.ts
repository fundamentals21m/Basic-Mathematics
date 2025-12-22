import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section09Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is |−5|?',
    options: ['-5', '5', '0', '1/5'],
    correctIndex: 1,
    explanation: 'The absolute value of -5 is 5. Absolute value gives the distance from zero.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is √9?',
    options: ['3', '-3', '±3', '81'],
    correctIndex: 0,
    explanation: 'The principal (positive) square root of 9 is 3.',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'Is 5² positive or negative?',
    options: ['Positive', 'Negative', 'Zero', 'Undefined'],
    correctIndex: 0,
    explanation: '5² = 25, which is positive. Any non-zero number squared is positive.',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is |3|?',
    options: ['3', '-3', '0', '1/3'],
    correctIndex: 0,
    explanation: 'The absolute value of a positive number is itself: |3| = 3.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'Which is always true for any real number x?',
    options: ['x² < 0', 'x² = 0', 'x² ≥ 0', 'x² > 0'],
    correctIndex: 2,
    explanation: 'The square of any real number is non-negative: x² ≥ 0.',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'Simplify: |−3| + |−4|',
    options: ['1', '-7', '7', '-1'],
    correctIndex: 2,
    explanation: '|−3| + |−4| = 3 + 4 = 7.',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'For what values of x is |x| = x?',
    options: ['x > 0 only', 'x < 0 only', 'x ≥ 0', 'All real x'],
    correctIndex: 2,
    explanation: '|x| = x when x is non-negative (x ≥ 0).',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Solve: |x| = 4',
    options: ['x = 4', 'x = -4', 'x = 4 or x = -4', 'No solution'],
    correctIndex: 2,
    explanation: '|x| = 4 means x is 4 units from zero, so x = 4 or x = -4.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Which statement is true?',
    options: [
      '|a + b| = |a| + |b| always',
      '|a + b| ≤ |a| + |b| always',
      '|a + b| ≥ |a| + |b| always',
      '|a + b| = |a| - |b| always'
    ],
    correctIndex: 1,
    explanation: 'This is the triangle inequality: |a + b| ≤ |a| + |b|.',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'If a > 0, then √(a²) = ?',
    options: ['a', '-a', '±a', 'a²'],
    correctIndex: 0,
    explanation: 'For a > 0, √(a²) = |a| = a.',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'Solve: |2x - 3| = 5',
    options: ['x = 4 only', 'x = -1 only', 'x = 4 or x = -1', 'x = 1 or x = 4'],
    correctIndex: 2,
    explanation: '2x - 3 = 5 gives x = 4. 2x - 3 = -5 gives x = -1.',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'For any real numbers a and b, |ab| = ?',
    options: ['|a| + |b|', '|a| - |b|', '|a| × |b|', '|a| / |b|'],
    correctIndex: 2,
    explanation: 'The absolute value of a product equals the product of absolute values: |ab| = |a| × |b|.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If |x - 2| < 3, then:',
    options: ['-1 < x < 5', 'x < -1 or x > 5', '-5 < x < 1', 'x < 5'],
    correctIndex: 0,
    explanation: '|x - 2| < 3 means -3 < x - 2 < 3, so -1 < x < 5.',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Simplify: √(x²) for any real x',
    options: ['x', '-x', '|x|', 'x²'],
    correctIndex: 2,
    explanation: '√(x²) = |x| for all real x. This handles both positive and negative x.',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'If |a| = |b|, then:',
    options: ['a = b', 'a = -b', 'a = b or a = -b', 'a + b = 0'],
    correctIndex: 2,
    explanation: '|a| = |b| means a and b have the same distance from zero, so a = b or a = -b.',
  },
];
