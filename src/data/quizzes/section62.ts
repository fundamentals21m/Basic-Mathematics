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
  },

  // Additional Easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'Swapping two rows in a $3 \\times 3$ matrix changes $\\det$ how?',
    options: ['Negates it', 'Doubles it', 'No change', 'Makes it zero'],
    correctIndex: 0,
    explanation: 'Swapping two rows multiplies the determinant by $-1$.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'What is $\\det(AB)$ if $\\det(A) = 5$ and $\\det(B) = 2$?',
    options: ['$10$', '$7$', '$3$', '$25$'],
    correctIndex: 0,
    explanation: '$\\det(AB) = \\det(A) \\cdot \\det(B) = 5 \\cdot 2 = 10$.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'What is $\\det(A^T)$ if $\\det(A) = 8$?',
    options: ['$8$', '$-8$', '$\\frac{1}{8}$', '$64$'],
    correctIndex: 0,
    explanation: '$\\det(A^T) = \\det(A)$ for any matrix. Transpose preserves determinant.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'If two columns of a $3 \\times 3$ matrix are identical, $\\det =$',
    options: ['$0$', '$1$', '$2$', 'Product of identical column'],
    correctIndex: 0,
    explanation: 'Identical columns mean linear dependence, so $\\det = 0$.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'What is $\\det(A^{-1})$ if $\\det(A) = 10$?',
    options: ['$\\frac{1}{10}$', '$10$', '$-10$', '$100$'],
    correctIndex: 0,
    explanation: '$\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{10}$.'
  },

  // Additional Medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'For a $3 \\times 3$ matrix with $\\det(A) = 1$, what is $\\det(5A)$?',
    options: ['$125$', '$5$', '$15$', '$25$'],
    correctIndex: 0,
    explanation: '$\\det(cA) = c^3 \\cdot \\det(A) = 5^3 \\cdot 1 = 125$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'If $\\det(A) = 3$, what is $\\det(A^2)$?',
    options: ['$9$', '$6$', '$3$', '$27$'],
    correctIndex: 0,
    explanation: '$\\det(A^2) = (\\det(A))^2 = 3^2 = 9$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'Subtracting $2 \\times (\\text{row } 1)$ from row $3$ changes $\\det$ by:',
    options: ['Nothing', 'Multiplies by $2$', 'Subtracts $2$', 'Negates it'],
    correctIndex: 0,
    explanation: 'Adding or subtracting a multiple of one row to another preserves the determinant.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'Multiplying row $3$ by $-2$ in a $3 \\times 3$ matrix multiplies $\\det$ by:',
    options: ['$-2$', '$2$', '$-8$', '$8$'],
    correctIndex: 0,
    explanation: 'Scaling one row by $k$ multiplies $\\det$ by $k$, so by $-2$ here.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'What is $\\det(-A)$ for a $4 \\times 4$ matrix if $\\det(A) = 5$?',
    options: ['$5$', '$-5$', '$625$', '$-625$'],
    correctIndex: 0,
    explanation: '$\\det(-A) = (-1)^4 \\cdot \\det(A) = 1 \\cdot 5 = 5$.'
  },

  // Additional Hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'If $\\det(A) = 2$, what is $\\det(A^{-1} \\cdot A^T \\cdot A)$?',
    options: ['$2$', '$1$', '$4$', '$\\frac{1}{2}$'],
    correctIndex: 0,
    explanation: '$\\det(A^{-1} \\cdot A^T \\cdot A) = \\frac{1}{2} \\cdot 2 \\cdot 2 = 2$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'For $3 \\times 3$ matrix $A$, if $\\det(3A^{-1}) = 27$, what is $\\det(A)$?',
    options: ['$1$', '$3$', '$9$', '$\\frac{1}{3}$'],
    correctIndex: 0,
    explanation: '$\\det(3A^{-1}) = 27 \\cdot \\det(A^{-1}) = \\frac{27}{\\det(A)} = 27$. So $\\det(A) = 1$.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'If $\\det(A) = 5$ and $\\det(B) = -2$, what is $\\det(A^3 B^2)$?',
    options: ['$500$', '$-500$', '$250$', '$-250$'],
    correctIndex: 0,
    explanation: '$\\det(A^3 B^2) = (\\det(A))^3 \\cdot (\\det(B))^2 = 125 \\cdot 4 = 500$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'If $A$ is $3 \\times 3$ with $\\det(A) = 2$, then $\\det(A^{-1} \\cdot \\text{adj}(A))$ equals:',
    options: ['$8$', '$2$', '$4$', '$1$'],
    correctIndex: 0,
    explanation: 'Since $A \\cdot \\text{adj}(A) = \\det(A) \\cdot I$, we have $\\text{adj}(A) = \\det(A) \\cdot A^{-1}$, so $A^{-1} \\cdot \\text{adj}(A) = \\det(A) \\cdot I = 2I$. Thus $\\det(2I) = 2^3 = 8$ for $3 \\times 3$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'What is $\\det(\\text{adj}(A))$ for a $4 \\times 4$ matrix if $\\det(A) = 3$?',
    options: ['$27$', '$9$', '$3$', '$81$'],
    correctIndex: 0,
    explanation: 'For $n \\times n$: $\\det(\\text{adj}(A)) = (\\det(A))^{n-1}$. For $4 \\times 4$: $3^{4-1} = 3^3 = 27$.'
  }
];
