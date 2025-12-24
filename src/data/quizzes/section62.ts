import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section62Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What happens to $\\det$ when swapping two rows in a $3 \\times 3$ matrix?',
    options: ['Sign changes', 'Doubles', 'Stays same', 'Becomes zero'],
    correctIndex: 0,
    explanation: 'Swapping rows negates the determinant, same as $2 \\times 2$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'If $\\det(A) = 3$ and $\\det(B) = 4$, what is $\\det(AB)$?',
    options: ['$12$', '$7$', '$1$', '$81$'],
    correctIndex: 0,
    explanation: '$\\det(AB) = \\det(A) \\cdot \\det(B) = 3 \\cdot 4 = 12$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is $\\det(A^T)$ if $\\det(A) = 7$?',
    options: ['$7$', '$-7$', '$\\frac{1}{7}$', '$49$'],
    correctIndex: 0,
    explanation: '$\\det(A^T) = \\det(A)$. Transpose preserves determinant.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'If a $3 \\times 3$ matrix has two identical rows, its determinant is:',
    options: ['$0$', '$1$', '$2$', 'Depends on the rows'],
    correctIndex: 0,
    explanation: 'Identical rows means linear dependence, so $\\det = 0$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is $\\det(A^{-1})$ if $\\det(A) = 5$?',
    options: ['$\\frac{1}{5}$', '$5$', '$-5$', '$-\\frac{1}{5}$'],
    correctIndex: 0,
    explanation: '$\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{5}$.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'For a $3 \\times 3$ matrix with $\\det(A) = 2$, what is $\\det(3A)$?',
    options: ['$54$', '$6$', '$18$', '$8$'],
    correctIndex: 0,
    explanation: '$\\det(cA) = c^3 \\cdot \\det(A) = 27 \\cdot 2 = 54$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'If $\\det(A) = 4$, what is $\\det(A^3)$?',
    options: ['$64$', '$12$', '$81$', '$16$'],
    correctIndex: 0,
    explanation: '$\\det(A^3) = (\\det(A))^3 = 4^3 = 64$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Adding $5 \\times (\\text{row } 2)$ to row $3$ changes $\\det$ by:',
    options: ['Nothing', 'Multiplies by $5$', 'Adds $5$', 'Negates it'],
    correctIndex: 0,
    explanation: 'Adding a multiple of one row to another preserves the determinant.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Multiplying row $1$ by $4$ in a $3 \\times 3$ matrix multiplies $\\det$ by:',
    options: ['$4$', '$64$', '$12$', '$16$'],
    correctIndex: 0,
    explanation: 'Scaling one row by $k$ multiplies $\\det$ by $k$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'What is $\\det(-A)$ for a $3 \\times 3$ matrix if $\\det(A) = 6$?',
    options: ['$-6$', '$6$', '$-216$', '$216$'],
    correctIndex: 0,
    explanation: '$\\det(-A) = (-1)^3 \\cdot \\det(A) = -1 \\cdot 6 = -6$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'If $\\det(A) = 3$, what is $\\det(A^{-1} \\cdot A^T)$?',
    options: ['$1$', '$3$', '$\\frac{1}{3}$', '$9$'],
    correctIndex: 0,
    explanation: '$\\det(A^{-1} \\cdot A^T) = \\det(A^{-1}) \\cdot \\det(A^T) = \\frac{1}{3} \\cdot 3 = 1$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'For $3 \\times 3$ matrix $A$, if $\\det(2A^{-1}) = 16$, what is $\\det(A)$?',
    options: ['$\\frac{1}{2}$', '$2$', '$8$', '$\\frac{1}{8}$'],
    correctIndex: 0,
    explanation: '$\\det(2A^{-1}) = 8 \\cdot \\det(A^{-1}) = \\frac{8}{\\det(A)} = 16$. So $\\det(A) = \\frac{8}{16} = \\frac{1}{2}$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If $\\det(A) = 2$ and $\\det(B) = -3$, what is $\\det(A^2 B^{-1})$?',
    options: ['$-\\frac{4}{3}$', '$\\frac{4}{3}$', '$-6$', '$6$'],
    correctIndex: 0,
    explanation: '$\\det(A^2 B^{-1}) = (\\det(A))^2 \\cdot \\det(B^{-1}) = 4 \\cdot (-\\frac{1}{3}) = -\\frac{4}{3}$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If $A$ is $3 \\times 3$ with $\\det(A) \\neq 0$, then $A \\cdot \\text{adj}(A)$ equals:',
    options: ['$\\det(A) \\cdot I$', '$I$', '$A$', '$A^T$'],
    correctIndex: 0,
    explanation: '$A \\cdot \\text{adj}(A) = \\det(A) \\cdot I$ is a fundamental property.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'What is $\\det(\\text{adj}(A))$ for a $3 \\times 3$ matrix if $\\det(A) = 4$?',
    options: ['$16$', '$4$', '$64$', '$8$'],
    correctIndex: 0,
    explanation: 'For $n \\times n$: $\\det(\\text{adj}(A)) = (\\det(A))^{n-1}$. So $4^2 = 16$.'
  }
];
