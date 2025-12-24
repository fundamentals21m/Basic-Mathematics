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
  },

  // Additional Easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'In Cramer\'s Rule, what does $D$ equal for the system $ax + by = e$, $cx + dy = f$?',
    options: ['$ad - bc$', '$ae - bf$', '$ac - bd$', '$a + d$'],
    correctIndex: 0,
    explanation: '$D = \\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'For $3$ equations in $3$ unknowns, how many determinants are computed?',
    options: ['$4$', '$3$', '$6$', '$9$'],
    correctIndex: 0,
    explanation: 'Compute $D$, $D_x$, $D_y$, $D_z$ ($4$ determinants).'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'If $D \\neq 0$ in Cramer\'s Rule, the system has:',
    options: ['Exactly one unique solution', 'No solution', 'Infinitely many solutions', 'Two solutions'],
    correctIndex: 0,
    explanation: '$D \\neq 0$ guarantees a unique solution.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'To find $y$ using Cramer\'s Rule, compute:',
    options: ['$D_y / D$', '$D / D_y$', '$D_y - D$', '$D_y + D$'],
    correctIndex: 0,
    explanation: '$y = D_y / D$ where $D_y$ has the $y$-column replaced by constants.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'For $D_y$ in a $2 \\times 2$ system, which column is replaced?',
    options: ['Column $2$ ($y$-coefficients)', 'Column $1$', 'Both columns', 'Neither column'],
    correctIndex: 0,
    explanation: '$D_y$ replaces the column containing $y$-coefficients with the constant vector.'
  },

  // Additional Medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Solve: $2x + y = 8$, $x - y = 1$. Find $x$.',
    options: ['$3$', '$2$', '$4$', '$5$'],
    correctIndex: 0,
    explanation: '$D = 2(-1) - 1(1) = -3$. $D_x = 8(-1) - 1(1) = -9$. $x = \\frac{-9}{-3} = 3$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'Solve: $2x + y = 8$, $x - y = 1$. Find $y$.',
    options: ['$2$', '$3$', '$1$', '$4$'],
    correctIndex: 0,
    explanation: '$D = -3$. $D_y = 2(1) - 8(1) = -6$. $y = \\frac{-6}{-3} = 2$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'For a $4 \\times 4$ system, how many determinants are needed?',
    options: ['$5$', '$4$', '$8$', '$16$'],
    correctIndex: 0,
    explanation: 'Compute $D$, $D_1$, $D_2$, $D_3$, $D_4$ ($5$ determinants total).'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'If $D \\neq 0$ but $D_x = 0$, then:',
    options: ['$x = 0$', '$x$ is undefined', '$x = 1$', 'No solution'],
    correctIndex: 0,
    explanation: '$x = \\frac{D_x}{D} = \\frac{0}{D} = 0$ when $D \\neq 0$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'For $3x - y = 4$, $x + y = 0$, what is $D$?',
    options: ['$4$', '$3$', '$-4$', '$0$'],
    correctIndex: 0,
    explanation: '$D = 3(1) - (-1)(1) = 3 + 1 = 4$.'
  },

  // Additional Hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'Solve: $x + 2y + z = 3$, $2x - y = 1$, $x + y + 2z = 4$. Find $D$.',
    options: ['$-9$', '$9$', '$0$', '$3$'],
    correctIndex: 0,
    explanation: 'Compute $D = \\det\\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & -1 & 0 \\\\ 1 & 1 & 2 \\end{pmatrix} = -9$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'In $2x + y - z = 1$, $x + 3y + z = 5$, $x - y + 2z = 3$, if $D = 15$, $D_x = 30$, what is $x$?',
    options: ['$2$', '$1$', '$3$', '$\\frac{1}{2}$'],
    correctIndex: 0,
    explanation: '$x = \\frac{D_x}{D} = \\frac{30}{15} = 2$.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'Solve: $3x - 2y = 5$, $6x - 4y = 10$. What can you conclude?',
    options: ['Infinitely many solutions', 'No solution', 'Unique solution: $x=1, y=-1$', '$D \\neq 0$'],
    correctIndex: 0,
    explanation: '$D = 3(-4) - (-2)(6) = 0$. Equations are identical (second is $2 \\times$ first), so infinitely many solutions.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'Solve: $x + y = 3$, $2x + y = 5$. What is $2x - y$?',
    options: ['$3$', '$1$', '$2$', '$0$'],
    correctIndex: 0,
    explanation: '$D = 1(1) - 1(2) = -1$. $D_x = 3(1) - 1(5) = -2$, so $x = 2$. $D_y = 1(5) - 3(2) = -1$, so $y = 1$. $2x - y = 2(2) - 1 = 3$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'For which type of system is Cramer\'s Rule most efficient?',
    options: ['Small systems with $n \\leq 3$', 'Large sparse systems', 'Systems with $n > 100$', 'All systems equally'],
    correctIndex: 0,
    explanation: 'Cramer\'s Rule is practical for small systems ($2 \\times 2$ or $3 \\times 3$). For larger systems, Gaussian elimination is more efficient.'
  }
];
