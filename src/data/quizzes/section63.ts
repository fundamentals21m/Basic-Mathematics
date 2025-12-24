import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section63Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'In Cramer\'s Rule, what does $D$ represent?',
    options: ['Determinant of coefficient matrix', 'Determinant of constants', 'Difference of solutions', 'Diagonal sum'],
    correctIndex: 0,
    explanation: '$D$ is the determinant of the coefficient matrix $A$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'For $2$ equations in $2$ unknowns, how many determinants must be computed?',
    options: ['$3$', '$2$', '$4$', '$1$'],
    correctIndex: 0,
    explanation: 'Compute $D$, $D_x$, and $D_y$ ($3$ determinants).'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'If $D = 0$ in Cramer\'s Rule, the system:',
    options: ['Has no unique solution', 'Has exactly one solution', 'Has $x = 0$', 'Is always consistent'],
    correctIndex: 0,
    explanation: '$D = 0$ means no unique solution (either no solution or infinitely many).'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'To find $x$ using Cramer\'s Rule, compute:',
    options: ['$D_x / D$', '$D / D_x$', '$D_x + D$', '$D_x - D$'],
    correctIndex: 0,
    explanation: '$x = D_x / D$ where $D_x$ has the $x$-column replaced by constants.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'For $D_x$, which column is replaced by the constants?',
    options: ['Column $1$ ($x$-coefficients)', 'Column $2$', 'Last column', 'No column'],
    correctIndex: 0,
    explanation: '$D_x$ replaces the column containing $x$-coefficients with the constant vector.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Solve: $x + 2y = 5$, $3x + y = 5$. Find $x$.',
    options: ['$1$', '$2$', '$3$', '$0$'],
    correctIndex: 0,
    explanation: '$D = 1 - 6 = -5$. $D_x = 5 - 10 = -5$. $x = \\frac{-5}{-5} = 1$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Solve: $x + 2y = 5$, $3x + y = 5$. Find $y$.',
    options: ['$2$', '$1$', '$3$', '$0$'],
    correctIndex: 0,
    explanation: '$D = -5$. $D_y = 5 - 15 = -10$. $y = \\frac{-10}{-5} = 2$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'For $3 \\times 3$ system, how many determinants are computed in Cramer\'s Rule?',
    options: ['$4$', '$3$', '$6$', '$9$'],
    correctIndex: 0,
    explanation: 'Compute $D$, $D_1$, $D_2$, $D_3$ ($4$ determinants).'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'If $D = 0$ and all $D_i = 0$, the system has:',
    options: ['Infinitely many solutions (or none)', 'Exactly one solution', 'No solution', '$x = y = z = 0$'],
    correctIndex: 0,
    explanation: '$D = 0$, all $D_i = 0$ suggests dependent equations (infinitely many solutions or no solution depending on consistency).'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'For $2x + 4y = 6$, $x + 2y = 3$, what is $D$?',
    options: ['$0$', '$4$', '$-4$', '$6$'],
    correctIndex: 0,
    explanation: '$D = 2(2) - 4(1) = 4 - 4 = 0$. The equations are proportional.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Solve: $x + y + z = 6$, $x - y = 0$, $x + z = 4$. Find $x$.',
    options: ['$2$', '$1$', '$3$', '$4$'],
    correctIndex: 0,
    explanation: 'Using Cramer\'s Rule: $D = 2$, $D_x = 4$. $x = \\frac{4}{2} = 2$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'In $ax + by = e$, $cx + dy = f$, if $D \\neq 0$ and $e = f = 0$, then:',
    options: ['$x = y = 0$', '$x = 1$, $y = 1$', 'No solution', 'Infinitely many solutions'],
    correctIndex: 0,
    explanation: 'Homogeneous system with $D \\neq 0$ has only the trivial solution $x = y = 0$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Solve: $2x + y = 7$, $x - 2y = 1$. What is $x + y$?',
    options: ['$4$', '$5$', '$6$', '$3$'],
    correctIndex: 0,
    explanation: '$D = 2(-2) - 1(1) = -5$. $D_x = 7(-2) - 1(1) = -15$. $x = 3$. $D_y = 2(1) - 7(1) = -5$. $y = 1$. $x + y = 4$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'What\'s the computational complexity of Cramer\'s Rule for $n \\times n$?',
    options: ['$O(n! \\cdot n)$', '$O(n^2)$', '$O(n^3)$', '$O(n)$'],
    correctIndex: 0,
    explanation: 'Computing $n+1$ determinants, each requiring $O(n!)$ operations naively, gives $O(n! \\cdot n)$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'If $D = 5$, $D_x = 10$, $D_y = -5$ for $ax + by = c$, $dx + ey = f$, find $x - y$.',
    options: ['$3$', '$1$', '$2$', '$-1$'],
    correctIndex: 0,
    explanation: '$x = \\frac{10}{5} = 2$, $y = \\frac{-5}{5} = -1$. $x - y = 2 - (-1) = 3$.'
  }
];
