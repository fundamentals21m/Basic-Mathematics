import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section59Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is $\\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$?',
    options: ['$-2$', '$2$', '$10$', '$-10$'],
    correctIndex: 0,
    explanation: '$\\det = ad - bc = 1(4) - 2(3) = 4 - 6 = -2$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is $\\det\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$?',
    options: ['$6$', '$5$', '$0$', '$-6$'],
    correctIndex: 0,
    explanation: '$\\det = 2(3) - 0(0) = 6$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'A matrix is invertible if its determinant is:',
    options: ['Non-zero', 'Zero', 'Positive', 'Negative'],
    correctIndex: 0,
    explanation: 'A matrix is invertible if and only if $\\det \\neq 0$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is $\\det\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$?',
    options: ['$1$', '$0$', '$2$', '$-1$'],
    correctIndex: 0,
    explanation: '$\\det(I) = 1(1) - 0(0) = 1$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is $\\det\\begin{pmatrix} a & b \\\\ 0 & d \\end{pmatrix}$?',
    options: ['$ad$', '$ad - b$', '$a + d$', '$bd$'],
    correctIndex: 0,
    explanation: '$\\det = a(d) - b(0) = ad$.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Find $\\det\\begin{pmatrix} 5 & 3 \\\\ 2 & 4 \\end{pmatrix}$.',
    options: ['$14$', '$20$', '$6$', '$26$'],
    correctIndex: 0,
    explanation: '$\\det = 5(4) - 3(2) = 20 - 6 = 14$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'If $\\det(A) = 0$, the matrix is called:',
    options: ['Singular', 'Regular', 'Orthogonal', 'Symmetric'],
    correctIndex: 0,
    explanation: 'A matrix with zero determinant is singular (non-invertible).'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'What is $\\det\\begin{pmatrix} 3 & 6 \\\\ 1 & 2 \\end{pmatrix}$?',
    options: ['$0$', '$6$', '$12$', '$-6$'],
    correctIndex: 0,
    explanation: '$\\det = 3(2) - 6(1) = 6 - 6 = 0$. Rows are proportional.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'The inverse of $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ has $\\frac{1}{\\det}$ multiplied by:',
    options: ['$\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$', '$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$', '$\\begin{pmatrix} -a & -b \\\\ -c & -d \\end{pmatrix}$', '$\\begin{pmatrix} d & b \\\\ c & a \\end{pmatrix}$'],
    correctIndex: 0,
    explanation: '$A^{-1} = \\frac{1}{\\det}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$: swap diagonal, negate off-diagonal.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: '$|\\det(A)|$ geometrically represents:',
    options: ['Area scaling factor', 'Rotation angle', 'Translation distance', 'Shear factor'],
    correctIndex: 0,
    explanation: 'The absolute value of the determinant is how much the transformation scales areas.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Find the inverse of $\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.',
    options: ['$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$', '$\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}$', '$\\begin{pmatrix} 3 & 1 \\\\ -5 & 2 \\end{pmatrix}$', '$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$'],
    correctIndex: 0,
    explanation: '$\\det = 6-5 = 1$. Inverse $= \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'If $\\det(A) = 3$, what is $\\det(2A)$ for a $2 \\times 2$ matrix?',
    options: ['$12$', '$6$', '$9$', '$24$'],
    correctIndex: 0,
    explanation: 'For $n \\times n$ matrix: $\\det(cA) = c^n \\cdot \\det(A)$. Here: $2^2 \\cdot 3 = 12$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If $\\det(A) = 4$ and $\\det(B) = 3$, what is $\\det(AB)$?',
    options: ['$12$', '$7$', '$1$', '$64$'],
    correctIndex: 0,
    explanation: '$\\det(AB) = \\det(A) \\cdot \\det(B) = 4 \\cdot 3 = 12$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'What is $\\det(A^{-1})$ if $\\det(A) = 5$?',
    options: ['$\\frac{1}{5}$', '$-5$', '$5$', '$-\\frac{1}{5}$'],
    correctIndex: 0,
    explanation: '$\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{5}$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'For $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$, what is the determinant?',
    options: ['$1$', '$0$', '$\\cos^2\\theta + \\sin^2\\theta$', '$2\\cos\\theta$'],
    correctIndex: 0,
    explanation: '$\\det = \\cos^2\\theta - (-\\sin^2\\theta) = \\cos^2\\theta + \\sin^2\\theta = 1$.'
  }
];
