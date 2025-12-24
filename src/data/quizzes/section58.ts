import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section58Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the size of a matrix with $3$ rows and $2$ columns?',
    options: ['$3 \\times 2$', '$2 \\times 3$', '$6$', '$5$'],
    correctIndex: 0,
    explanation: 'Matrix size is written as rows $\\times$ columns, so $3 \\times 2$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'In a matrix $A$, what does $a_{23}$ represent?',
    options: ['Entry in row $2$, column $3$', 'Entry in row $3$, column $2$', 'The $23$rd entry', '$2 \\times 3$'],
    correctIndex: 0,
    explanation: '$a_{ij}$ means the entry in row $i$ and column $j$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is the $2 \\times 2$ identity matrix?',
    options: ['$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$', '$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$', '$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$', '$\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$'],
    correctIndex: 0,
    explanation: 'The identity matrix has $1$s on the diagonal and $0$s elsewhere.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$?',
    options: ['$\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$', '$\\begin{pmatrix} 6 & 8 \\\\ 9 & 11 \\end{pmatrix}$', '$\\begin{pmatrix} 5 & 12 \\\\ 21 & 32 \\end{pmatrix}$', '$\\begin{pmatrix} 4 & 4 \\\\ 4 & 4 \\end{pmatrix}$'],
    correctIndex: 0,
    explanation: 'Add entry by entry: $1+5=6$, $2+6=8$, $3+7=10$, $4+8=12$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is $2 \\times \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$?',
    options: ['$\\begin{pmatrix} 2 & 4 \\\\ 6 & 8 \\end{pmatrix}$', '$\\begin{pmatrix} 2 & 2 \\\\ 2 & 2 \\end{pmatrix}$', '$\\begin{pmatrix} 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$', '$\\begin{pmatrix} 1 & 4 \\\\ 3 & 8 \\end{pmatrix}$'],
    correctIndex: 0,
    explanation: 'Scalar multiplication: multiply each entry by $2$.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'If $A$ is $2 \\times 3$ and $B$ is $3 \\times 4$, what is the size of $AB$?',
    options: ['$2 \\times 4$', '$3 \\times 3$', '$2 \\times 3$', '$4 \\times 2$'],
    correctIndex: 0,
    explanation: 'Multiplying $m \\times n$ by $n \\times p$ gives $m \\times p$, so $2 \\times 4$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Compute $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\times \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.',
    options: ['$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$', '$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$', '$\\begin{pmatrix} 1 & 0 \\\\ 0 & 4 \\end{pmatrix}$', '$\\begin{pmatrix} 2 & 2 \\\\ 3 & 5 \\end{pmatrix}$'],
    correctIndex: 0,
    explanation: 'Multiplying by the identity matrix gives the original matrix: $AI = A$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'What is the transpose of $\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$?',
    options: ['$\\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$', '$\\begin{pmatrix} 3 & 2 & 1 \\\\ 6 & 5 & 4 \\end{pmatrix}$', '$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$', '$\\begin{pmatrix} 6 & 5 & 4 \\\\ 3 & 2 & 1 \\end{pmatrix}$'],
    correctIndex: 0,
    explanation: 'Transpose swaps rows and columns: $2 \\times 3$ becomes $3 \\times 2$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'For $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\times \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$, find the $(1,1)$ entry.',
    options: ['$19$', '$5$', '$12$', '$23$'],
    correctIndex: 0,
    explanation: 'Row $1$ of first $\\times$ Column $1$ of second: $1(5) + 2(7) = 5 + 14 = 19$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Which property does matrix multiplication NOT have?',
    options: ['Commutativity', 'Associativity', 'Distributivity', 'Identity element'],
    correctIndex: 0,
    explanation: '$AB \\neq BA$ in general; matrix multiplication is not commutative.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Compute $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\times \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$ fully.',
    options: ['$\\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}$', '$\\begin{pmatrix} 19 & 43 \\\\ 22 & 50 \\end{pmatrix}$', '$\\begin{pmatrix} 5 & 12 \\\\ 21 & 32 \\end{pmatrix}$', '$\\begin{pmatrix} 12 & 16 \\\\ 24 & 32 \\end{pmatrix}$'],
    correctIndex: 0,
    explanation: '$(1,1)=1(5)+2(7)=19$, $(1,2)=1(6)+2(8)=22$, $(2,1)=3(5)+4(7)=43$, $(2,2)=3(6)+4(8)=50$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'If $A^2 = A$, then $A$ is called:',
    options: ['Idempotent', 'Nilpotent', 'Orthogonal', 'Symmetric'],
    correctIndex: 0,
    explanation: 'A matrix satisfying $A^2 = A$ is called idempotent.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'What is $(AB)^T$?',
    options: ['$B^T A^T$', '$A^T B^T$', '$AB$', '$BA$'],
    correctIndex: 0,
    explanation: 'The transpose of a product reverses order: $(AB)^T = B^T A^T$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ and $B = \\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix}$, is $AB = BA$?',
    options: ['No', 'Yes', 'Only if $A = B$', 'Only if $A = I$'],
    correctIndex: 0,
    explanation: '$AB = \\begin{pmatrix} 7 & 2 \\\\ 3 & 1 \\end{pmatrix}$, $BA = \\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}$. $AB \\neq BA$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'A matrix $A$ is symmetric if:',
    options: ['$A^T = A$', '$A^T = -A$', '$A^2 = I$', '$A^2 = A$'],
    correctIndex: 0,
    explanation: 'A symmetric matrix equals its transpose: $A^T = A$.'
  }
];
