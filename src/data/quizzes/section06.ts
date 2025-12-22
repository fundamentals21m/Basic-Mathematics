import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section06Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'Solve for x: x + 3 = 7',
    options: ['x = 4', 'x = 10', 'x = -4', 'x = 21'],
    correctIndex: 0,
    explanation: 'Subtract 3 from both sides: x = 7 - 3 = 4.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'Solve for x: 2x = 10',
    options: ['x = 5', 'x = 20', 'x = 8', 'x = 12'],
    correctIndex: 0,
    explanation: 'Divide both sides by 2: x = 10/2 = 5.',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'Which point satisfies x + y = 5?',
    options: ['(1, 3)', '(2, 3)', '(3, 3)', '(0, 4)'],
    correctIndex: 1,
    explanation: 'Check: 2 + 3 = 5 ✓',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is the first step to solve 3x + 2 = 11?',
    options: ['Divide by 3', 'Subtract 2', 'Add 2', 'Multiply by 3'],
    correctIndex: 1,
    explanation: 'Isolate the x term first by subtracting 2: 3x = 9.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'If x = 2 and y = 3, what is 2x + y?',
    options: ['5', '7', '8', '10'],
    correctIndex: 1,
    explanation: '2(2) + 3 = 4 + 3 = 7.',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'Solve the system: x + y = 5, x - y = 1',
    options: ['x = 3, y = 2', 'x = 2, y = 3', 'x = 4, y = 1', 'x = 1, y = 4'],
    correctIndex: 0,
    explanation: 'Add equations: 2x = 6, so x = 3. Then y = 5 - 3 = 2.',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Solve: 2x + 3y = 12, x = 3. Find y.',
    options: ['y = 1', 'y = 2', 'y = 3', 'y = 4'],
    correctIndex: 1,
    explanation: '2(3) + 3y = 12 → 6 + 3y = 12 → 3y = 6 → y = 2.',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'What method eliminates x from: 2x + y = 7 and x + y = 4?',
    options: [
      'Subtract the second from the first',
      'Add the equations',
      'Multiply first by 2, then subtract',
      'Divide both by 2'
    ],
    correctIndex: 0,
    explanation: '(2x + y) - (x + y) = 7 - 4 gives x = 3.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Solve: 3x - 2y = 7, x + 2y = 5',
    options: ['x = 3, y = 1', 'x = 2, y = 1.5', 'x = 4, y = 0.5', 'x = 1, y = 2'],
    correctIndex: 0,
    explanation: 'Add equations: 4x = 12, so x = 3. Then 3 + 2y = 5, so y = 1.',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'A system of two linear equations can have:',
    options: [
      'Exactly one solution only',
      'No solution only',
      'Infinitely many solutions only',
      'One, none, or infinitely many solutions'
    ],
    correctIndex: 3,
    explanation: 'Lines can intersect (one solution), be parallel (no solution), or coincide (infinite solutions).',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'Solve: 2x + 3y = 7, 4x + 6y = 14',
    options: [
      'x = 1, y = 5/3',
      'No solution',
      'Infinitely many solutions',
      'x = 0, y = 7/3'
    ],
    correctIndex: 2,
    explanation: 'The second equation is 2× the first. They represent the same line, giving infinitely many solutions.',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Solve: 2x + 3y = 5, 4x + 6y = 11',
    options: [
      'x = 1, y = 1',
      'No solution',
      'Infinitely many solutions',
      'x = 2.75, y = 0'
    ],
    correctIndex: 1,
    explanation: 'Multiply first by 2: 4x + 6y = 10. But the second says 4x + 6y = 11. Contradiction: no solution.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If 3x + 2y = 12 and 6x + 4y = k has infinitely many solutions, what is k?',
    options: ['12', '24', '36', '6'],
    correctIndex: 1,
    explanation: 'For infinitely many solutions, the equations must be multiples. 6x + 4y = 2(3x + 2y) = 2(12) = 24.',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Solve: x/2 + y/3 = 5, x/3 + y/2 = 5',
    options: ['x = 6, y = 6', 'x = 3, y = 3', 'x = 6, y = 3', 'x = 3, y = 6'],
    correctIndex: 0,
    explanation: 'Add equations: x/2 + x/3 + y/3 + y/2 = 10 → 5x/6 + 5y/6 = 10 → x + y = 12. By symmetry, x = y, so x = y = 6.',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'The sum of two numbers is 20 and their difference is 4. What are the numbers?',
    options: ['10 and 10', '12 and 8', '14 and 6', '16 and 4'],
    correctIndex: 1,
    explanation: 'Let x + y = 20 and x - y = 4. Add: 2x = 24, x = 12. Then y = 8.',
  },
];
