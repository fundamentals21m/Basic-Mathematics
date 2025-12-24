import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section61Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is $\\det\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$?',
    options: ['$1$', '$0$', '$3$', '$-1$'],
    correctIndex: 0,
    explanation: 'The identity matrix has determinant $1$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is $\\det\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix}$?',
    options: ['$24$', '$9$', '$6$', '$0$'],
    correctIndex: 0,
    explanation: 'Diagonal matrix: $\\det = 2 \\cdot 3 \\cdot 4 = 24$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'How many $2 \\times 2$ minors does a $3 \\times 3$ matrix have?',
    options: ['$9$', '$3$', '$6$', '$4$'],
    correctIndex: 0,
    explanation: 'Each entry has a minor, so $3 \\times 3 = 9$ minors.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is the cofactor $C_{11}$ sign?',
    options: ['$+$', '$-$', '$0$', 'Depends on entry'],
    correctIndex: 0,
    explanation: '$C_{11} = (-1)^{1+1} M_{11} = (+1)M_{11}$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'For an upper triangular $3 \\times 3$ matrix, $\\det$ equals:',
    options: ['Product of diagonal entries', 'Sum of entries', 'Trace', 'Zero'],
    correctIndex: 0,
    explanation: 'Triangular matrix determinant is the product of diagonal entries.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'What is $\\det\\begin{pmatrix} 1 & 2 & 0 \\\\ 3 & 4 & 0 \\\\ 5 & 6 & 0 \\end{pmatrix}$?',
    options: ['$0$', '$2$', '$-2$', '$8$'],
    correctIndex: 0,
    explanation: 'A column of zeros makes the determinant zero.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What is $\\det\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 0 & 3 \\\\ 0 & 5 & 0 \\end{pmatrix}$?',
    options: ['$-30$', '$30$', '$0$', '$10$'],
    correctIndex: 0,
    explanation: 'Using Sarrus or expansion: $2(0 \\cdot 0 - 3 \\cdot 5) = 2(-15) = -30$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'What is the sign of cofactor $C_{23}$?',
    options: ['$-$', '$+$', '$0$', '$\\pm$'],
    correctIndex: 0,
    explanation: '$C_{23} = (-1)^{2+3} M_{23} = (-1)^5 M_{23} = -M_{23}$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Using Sarrus: $\\det\\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & 0 \\\\ 3 & 0 & 1 \\end{pmatrix}$?',
    options: ['$-5$', '$5$', '$1$', '$0$'],
    correctIndex: 0,
    explanation: 'Down: $1 \\cdot 1 \\cdot 1 + 0 \\cdot 0 \\cdot 3 + 2 \\cdot 0 \\cdot 0 = 1$. Up: $2 \\cdot 1 \\cdot 3 + 1 \\cdot 0 \\cdot 0 + 0 \\cdot 0 \\cdot 1 = 6$. $\\det = 1 - 6 = -5$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'The $3 \\times 3$ determinant represents what geometric quantity?',
    options: ['Volume scaling factor', 'Area', 'Length', 'Angle'],
    correctIndex: 0,
    explanation: '$|\\det|$ gives the factor by which the matrix scales volumes.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Compute $\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$.',
    options: ['$0$', '$6$', '$-6$', '$24$'],
    correctIndex: 0,
    explanation: 'Rows are in arithmetic progression, making them linearly dependent. $\\det = 0$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Compute $\\det\\begin{pmatrix} 2 & 1 & 3 \\\\ 1 & 0 & 2 \\\\ 4 & 1 & 1 \\end{pmatrix}$.',
    options: ['$6$', '$-6$', '$0$', '$4$'],
    correctIndex: 0,
    explanation: 'Using Sarrus: down $= 0 + 8 + 3 = 11$, up $= 0 + 4 + 1 = 5$. $\\det = 11 - 5 = 6$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If $\\det(A) = 5$ for a $3 \\times 3$ matrix, what is $\\det(2A)$?',
    options: ['$40$', '$10$', '$80$', '$20$'],
    correctIndex: 0,
    explanation: '$\\det(cA) = c^3 \\cdot \\det(A)$ for $3 \\times 3$. So $2^3 \\cdot 5 = 8 \\cdot 5 = 40$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Compute $\\det\\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 3 & 6 \\end{pmatrix}$.',
    options: ['$1$', '$0$', '$2$', '$-1$'],
    correctIndex: 0,
    explanation: 'Using cofactor expansion: $1(12-9) - 1(6-3) + 1(3-2) = 3 - 3 + 1 = 1$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Expand $\\det$ along column $1$ of $\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}$.',
    options: ['$a(ei-fh) - d(bi-ch) + g(bf-ce)$', '$a(ei-fh) + d(bi-ch) + g(bf-ce)$', '$aei - bfg + cdh$', '$a + d + g$'],
    correctIndex: 0,
    explanation: 'Column $1$: $a \\cdot C_{11} + d \\cdot C_{21} + g \\cdot C_{31}$ with alternating signs.'
  },

  // Additional Easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'What is $\\det\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$?',
    options: ['$6$', '$3$', '$1$', '$5$'],
    correctIndex: 0,
    explanation: 'Diagonal matrix: $\\det = 1 \\cdot 2 \\cdot 3 = 6$.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'What is $\\det\\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$?',
    options: ['$0$', '$10$', '$5$', '$7$'],
    correctIndex: 0,
    explanation: 'A row of zeros makes the determinant zero.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'The minor $M_{12}$ is obtained by removing:',
    options: ['Row $1$ and column $2$', 'Row $2$ and column $1$', 'Entry $(1,2)$ only', 'The first two rows'],
    correctIndex: 0,
    explanation: '$M_{ij}$ is obtained by deleting row $i$ and column $j$.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'What is the sign of cofactor $C_{12}$?',
    options: ['$-$', '$+$', '$0$', 'Depends on matrix'],
    correctIndex: 0,
    explanation: '$C_{12} = (-1)^{1+2} M_{12} = (-1)^3 M_{12} = -M_{12}$.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'For a lower triangular $3 \\times 3$ matrix, $\\det$ equals:',
    options: ['Product of diagonal entries', 'Sum of diagonal', 'Zero', 'Negative of diagonal product'],
    correctIndex: 0,
    explanation: 'Any triangular matrix has determinant equal to the product of its diagonal entries.'
  },

  // Additional Medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'What is $\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{pmatrix}$?',
    options: ['$24$', '$12$', '$6$', '$30$'],
    correctIndex: 0,
    explanation: 'Upper triangular: $\\det = 1 \\cdot 4 \\cdot 6 = 24$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'What is $\\det\\begin{pmatrix} 3 & 0 & 0 \\\\ 1 & 2 & 0 \\\\ 4 & 5 & 1 \\end{pmatrix}$?',
    options: ['$6$', '$3$', '$2$', '$8$'],
    correctIndex: 0,
    explanation: 'Lower triangular: $\\det = 3 \\cdot 2 \\cdot 1 = 6$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'What is the sign of cofactor $C_{33}$?',
    options: ['$+$', '$-$', '$0$', 'Variable'],
    correctIndex: 0,
    explanation: '$C_{33} = (-1)^{3+3} M_{33} = (-1)^6 M_{33} = +M_{33}$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'Using Sarrus: $\\det\\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 3 & 1 \\end{pmatrix}$?',
    options: ['$1$', '$0$', '$2$', '$6$'],
    correctIndex: 0,
    explanation: 'Down: $1 \\cdot 1 \\cdot 1 = 1$. Up: $0$. $\\det = 1$. Or use triangular property.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'The trace of a matrix is the sum of:',
    options: ['Diagonal entries', 'All entries', 'First row', 'Determinant values'],
    correctIndex: 0,
    explanation: 'Trace is the sum of diagonal entries: $\\text{tr}(A) = a_{11} + a_{22} + a_{33}$.'
  },

  // Additional Hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'Compute $\\det\\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 3 & 4 & 1 \\end{pmatrix}$.',
    options: ['$1$', '$0$', '$2$', '$10$'],
    correctIndex: 0,
    explanation: 'Lower triangular with all diagonal entries $= 1$: $\\det = 1 \\cdot 1 \\cdot 1 = 1$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'Compute $\\det\\begin{pmatrix} 2 & 3 & 1 \\\\ 0 & 1 & 4 \\\\ 0 & 0 & 5 \\end{pmatrix}$.',
    options: ['$10$', '$5$', '$2$', '$40$'],
    correctIndex: 0,
    explanation: 'Upper triangular: $\\det = 2 \\cdot 1 \\cdot 5 = 10$.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'If $\\det(A) = 3$ for a $3 \\times 3$ matrix, what is $\\det(4A)$?',
    options: ['$192$', '$12$', '$64$', '$48$'],
    correctIndex: 0,
    explanation: '$\\det(cA) = c^3 \\cdot \\det(A)$ for $3 \\times 3$. So $4^3 \\cdot 3 = 64 \\cdot 3 = 192$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'Compute $\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 5 & 7 & 8 \\end{pmatrix}$.',
    options: ['$0$', '$6$', '$-6$', '$12$'],
    correctIndex: 0,
    explanation: 'Row $2$ is $2 \\times$ Row $1$, so rows are linearly dependent. $\\det = 0$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'What is the cofactor expansion of $\\det(A)$ along row $2$ for a $3 \\times 3$ matrix?',
    options: ['$-a_{21}C_{21} + a_{22}C_{22} - a_{23}C_{23}$', '$a_{21}C_{21} + a_{22}C_{22} + a_{23}C_{23}$', '$a_{21}M_{21} + a_{22}M_{22} + a_{23}M_{23}$', '$-a_{21}M_{21} - a_{22}M_{22} - a_{23}M_{23}$'],
    correctIndex: 0,
    explanation: 'Row $2$: $a_{21}C_{21} + a_{22}C_{22} + a_{23}C_{23}$ where $C_{21} = -M_{21}$, $C_{22} = +M_{22}$, $C_{23} = -M_{23}$.'
  }
];
