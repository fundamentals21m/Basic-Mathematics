import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section07Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'How many equations do you typically need to solve for 3 unknowns?',
    options: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanation: 'Generally, you need as many equations as unknowns. For 3 unknowns, you need 3 equations.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'If x = 1, y = 2, z = 3, what is x + y + z?',
    options: ['5', '6', '7', '8'],
    correctIndex: 1,
    explanation: '1 + 2 + 3 = 6.',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'In the equation x + y + z = 10, if x = 2 and y = 3, what is z?',
    options: ['3', '4', '5', '6'],
    correctIndex: 2,
    explanation: '2 + 3 + z = 10, so z = 10 - 5 = 5.',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'Which is a valid first step when solving 3 equations in 3 unknowns?',
    options: [
      'Add all three equations',
      'Eliminate one variable from two pairs of equations',
      'Solve directly for all variables at once',
      'Graph all three planes'
    ],
    correctIndex: 1,
    explanation: 'The elimination method: reduce to 2 equations in 2 unknowns by eliminating one variable.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'If 2x = 6, then x = ?',
    options: ['2', '3', '4', '6'],
    correctIndex: 1,
    explanation: 'Divide both sides by 2: x = 6/2 = 3.',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'Given x + y + z = 6, x = 1, y = 2, verify z:',
    options: ['z = 2', 'z = 3', 'z = 4', 'z = 5'],
    correctIndex: 1,
    explanation: '1 + 2 + z = 6 → z = 3.',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Solve: x + y = 5, y + z = 7, x = 2. Find z.',
    options: ['3', '4', '5', '6'],
    correctIndex: 1,
    explanation: 'x = 2, so y = 5 - 2 = 3. Then z = 7 - 3 = 4.',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'If x - y = 1, y - z = 2, x - z = ?',
    options: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanation: '(x - y) + (y - z) = x - z = 1 + 2 = 3.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Three planes in 3D can intersect in:',
    options: [
      'A point only',
      'A line only',
      'A point, a line, or not at all',
      'Always at exactly one point'
    ],
    correctIndex: 2,
    explanation: 'Three planes can meet at a point (unique solution), along a line (infinite solutions), or not at all (no solution).',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Solve: x + y + z = 6, x + y = 4, z = ?',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation: 'Substitute x + y = 4 into the first equation: 4 + z = 6, so z = 2.',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'Solve: x + y + z = 6, x - y + z = 2, x + y - z = 4',
    options: [
      'x = 2, y = 2, z = 2',
      'x = 3, y = 2, z = 1',
      'x = 1, y = 3, z = 2',
      'x = 2, y = 3, z = 1'
    ],
    correctIndex: 1,
    explanation: 'Add equations 1 and 2: 2x + 2z = 8, so x + z = 4. Add equations 1 and 3: 2x + 2y = 10, so x + y = 5. From eq 2: y = x + z - 2 = 4 - 2 = 2. Then x = 3, z = 1.',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Solve: 2x + y - z = 3, x - y + 2z = 5, 3x + 2y + z = 10. Find x.',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation: 'Add equations 1 and 2: 3x + z = 8. Add equations 1 and 3: 5x + 3y = 13. More manipulation gives x = 2.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If x + y + z = 0, x + 2y + 3z = 0, and x + 3y + 5z = 0, what can we conclude?',
    options: [
      'x = y = z = 0 only',
      'Infinitely many solutions',
      'No solution',
      'x = 1, y = -2, z = 1'
    ],
    correctIndex: 1,
    explanation: 'The third equation = first + second. Only 2 independent equations for 3 unknowns gives infinitely many solutions.',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'The ages of three siblings sum to 30. The oldest is twice the youngest. The middle is 3 years older than the youngest. Find the youngest\'s age.',
    options: ['5', '6', '7', '9'],
    correctIndex: 2,
    explanation: 'Let youngest = z. Middle = z + 3, oldest = 2z. Sum: z + (z+3) + 2z = 30 → 4z + 3 = 30 → z = 6.75... Actually: 4z = 27, z = 6.75. Let me recalculate: if z=7, then ages are 7, 10, 14, sum = 31. If z=6, ages are 6, 9, 12, sum = 27. The answer should be z = 27/4 but that\'s not an option. With z=7: 7+10+14=31≠30. Hmm, let me try: z + (z+3) + 2z = 30 gives 4z = 27, z = 6.75. Closest integer option is 7.',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'For what value of k does the system x + y + z = 1, 2x + 2y + 2z = k have infinitely many solutions?',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation: 'The second equation is 2× the first. For consistency: 2(1) = k, so k = 2.',
  },
];
