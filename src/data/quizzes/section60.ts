import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section60Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is $\\det(AB)$ if $\\det(A) = 2$ and $\\det(B) = 3$?',
    options: ['$6$', '$5$', '$8$', '$1$'],
    correctIndex: 0,
    explanation: '$\\det(AB) = \\det(A) \\cdot \\det(B) = 2 \\cdot 3 = 6$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What happens to $\\det$ when you swap two rows?',
    options: ['Sign changes', 'Stays the same', 'Doubles', 'Becomes zero'],
    correctIndex: 0,
    explanation: 'Swapping two rows negates the determinant.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is $\\det(A^T)$ if $\\det(A) = 5$?',
    options: ['$5$', '$-5$', '$\\frac{1}{5}$', '$25$'],
    correctIndex: 0,
    explanation: '$\\det(A^T) = \\det(A)$. Transpose preserves the determinant.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'If a matrix has a row of zeros, its determinant is:',
    options: ['$0$', '$1$', 'Undefined', 'The other row'],
    correctIndex: 0,
    explanation: 'A zero row makes the determinant zero.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is $\\det(I)$ for the $2 \\times 2$ identity matrix?',
    options: ['$1$', '$0$', '$2$', '$-1$'],
    correctIndex: 0,
    explanation: '$\\det\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = 1 \\cdot 1 - 0 \\cdot 0 = 1$.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'If $\\det(A) = 4$, what is $\\det(A^{-1})$?',
    options: ['$\\frac{1}{4}$', '$4$', '$-4$', '$-\\frac{1}{4}$'],
    correctIndex: 0,
    explanation: '$\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{4}$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What is $\\det(2A)$ for a $2 \\times 2$ matrix if $\\det(A) = 3$?',
    options: ['$12$', '$6$', '$9$', '$24$'],
    correctIndex: 0,
    explanation: '$\\det(cA) = c^2 \\cdot \\det(A)$ for $2 \\times 2$. So $2^2 \\cdot 3 = 12$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Multiplying row $1$ by $5$ multiplies the determinant by:',
    options: ['$5$', '$25$', '$10$', '$1$'],
    correctIndex: 0,
    explanation: 'Scaling one row by $k$ multiplies $\\det$ by $k$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Adding $3 \\times (\\text{row } 1)$ to row $2$ changes the determinant by:',
    options: ['Nothing', 'Multiplies by $3$', 'Adds $3$', 'Changes sign'],
    correctIndex: 0,
    explanation: 'Adding a multiple of one row to another preserves the determinant.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'If two rows are identical, $\\det =$',
    options: ['$0$', '$1$', '$2$', 'Undefined'],
    correctIndex: 0,
    explanation: 'Identical rows mean linear dependence, so $\\det = 0$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'What is $\\det(A^2)$ if $\\det(A) = 3$?',
    options: ['$9$', '$6$', '$3$', '$27$'],
    correctIndex: 0,
    explanation: '$\\det(A^2) = \\det(A \\cdot A) = (\\det(A))^2 = 9$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'If $\\det(A) = 2$ and $\\det(B) = -3$, what is $\\det(A^{-1}B)$?',
    options: ['$-\\frac{3}{2}$', '$-6$', '$6$', '$-1$'],
    correctIndex: 0,
    explanation: '$\\det(A^{-1}B) = \\det(A^{-1}) \\cdot \\det(B) = \\frac{1}{2} \\cdot (-3) = -\\frac{3}{2}$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'What is $\\det(-A)$ for a $2 \\times 2$ matrix if $\\det(A) = 5$?',
    options: ['$5$', '$-5$', '$25$', '$-25$'],
    correctIndex: 0,
    explanation: '$\\det(-A) = (-1)^2 \\cdot \\det(A) = 1 \\cdot 5 = 5$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If $A$ is $2 \\times 2$ and $\\det(3A^{-1}) = 6$, what is $\\det(A)$?',
    options: ['$\\frac{3}{2}$', '$\\frac{2}{3}$', '$18$', '$\\frac{1}{6}$'],
    correctIndex: 0,
    explanation: '$\\det(3A^{-1}) = 9 \\cdot \\det(A^{-1}) = \\frac{9}{\\det(A)} = 6$. So $\\det(A) = \\frac{9}{6} = \\frac{3}{2}$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $\\det(\\text{adj}(A))$ equals:',
    options: ['$\\det(A)$', '$\\frac{1}{\\det(A)}$', '$(\\det(A))^2$', '$1$'],
    correctIndex: 0,
    explanation: 'For $2 \\times 2$: $\\text{adj}(A) = \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$, $\\det(\\text{adj}(A)) = ad - bc = \\det(A)$.'
  }
];
