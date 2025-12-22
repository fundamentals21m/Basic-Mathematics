import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section12Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the quadratic formula for ax² + bx + c = 0?',
    options: [
      'x = (−b ± √(b² − 4ac)) / 2a',
      'x = (b ± √(b² − 4ac)) / 2a',
      'x = (−b ± √(b² + 4ac)) / 2a',
      'x = −b / 2a'
    ],
    correctIndex: 0,
    explanation: 'The quadratic formula is x = (−b ± √(b² − 4ac)) / 2a.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'Solve: x² = 16',
    options: ['x = 4', 'x = -4', 'x = ±4', 'x = 8'],
    correctIndex: 2,
    explanation: 'x² = 16 means x = ±√16 = ±4.',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is the discriminant of ax² + bx + c = 0?',
    options: ['b² + 4ac', 'b² − 4ac', '4ac − b²', '2a'],
    correctIndex: 1,
    explanation: 'The discriminant is Δ = b² − 4ac.',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'Solve: x² − 9 = 0',
    options: ['x = 3', 'x = -3', 'x = ±3', 'x = 9'],
    correctIndex: 2,
    explanation: 'x² = 9, so x = ±3.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'If the discriminant is 0, how many solutions does the quadratic have?',
    options: ['0', '1', '2', 'Infinitely many'],
    correctIndex: 1,
    explanation: 'When Δ = 0, there is exactly one (repeated) real solution: x = −b/(2a).',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'What is the discriminant of x² − 5x + 6 = 0?',
    options: ['1', '-1', '25', '49'],
    correctIndex: 0,
    explanation: 'Δ = b² − 4ac = (−5)² − 4(1)(6) = 25 − 24 = 1.',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'To complete the square for x² + 6x, add:',
    options: ['3', '6', '9', '36'],
    correctIndex: 2,
    explanation: 'Half of 6 is 3, and 3² = 9. So x² + 6x + 9 = (x + 3)².',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'If the discriminant is negative, the equation has:',
    options: ['Two real solutions', 'One real solution', 'No real solutions', 'Infinitely many solutions'],
    correctIndex: 2,
    explanation: 'A negative discriminant means √Δ is not real, so there are no real solutions.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Solve: x² + 4x + 4 = 0',
    options: ['x = 2', 'x = -2', 'x = ±2', 'No solution'],
    correctIndex: 1,
    explanation: 'x² + 4x + 4 = (x + 2)² = 0, so x = -2 (double root).',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'The vertex of y = x² − 4x + 3 is at x = ?',
    options: ['-4', '4', '2', '-2'],
    correctIndex: 2,
    explanation: 'The x-coordinate of the vertex is x = −b/(2a) = −(−4)/(2·1) = 2.',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'Solve: 2x² + 5x − 3 = 0',
    options: [
      'x = 1/2 or x = −3',
      'x = −1/2 or x = 3',
      'x = 1/2 or x = 3',
      'x = 3/2 or x = −1'
    ],
    correctIndex: 0,
    explanation: 'Using the quadratic formula: x = (−5 ± √(25 + 24))/4 = (−5 ± 7)/4. So x = 1/2 or x = −3.',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Complete the square: x² − 8x + 10 = 0 becomes:',
    options: [
      '(x − 4)² = 6',
      '(x − 4)² = -6',
      '(x + 4)² = 6',
      '(x − 8)² = 10'
    ],
    correctIndex: 0,
    explanation: 'x² − 8x + 16 − 16 + 10 = 0 → (x − 4)² − 6 = 0 → (x − 4)² = 6.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If x² + bx + 9 = 0 has exactly one solution, b = ?',
    options: ['±3', '±6', '±9', '±18'],
    correctIndex: 1,
    explanation: 'For one solution, Δ = 0: b² − 4(1)(9) = 0 → b² = 36 → b = ±6.',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'For x² + px + q = 0 with roots r and s, what is r + s?',
    options: ['p', '-p', 'q', '-q'],
    correctIndex: 1,
    explanation: 'By Vieta\'s formulas: sum of roots = −b/a = −p.',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'For x² + px + q = 0 with roots r and s, what is r × s?',
    options: ['p', '-p', 'q', '-q'],
    correctIndex: 2,
    explanation: 'By Vieta\'s formulas: product of roots = c/a = q.',
  },
];
