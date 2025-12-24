import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section58Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the size of a matrix with 3 rows and 2 columns?',
    options: ['3×2', '2×3', '6', '5'],
    correctIndex: 0,
    explanation: 'Matrix size is written as rows × columns, so 3×2.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'In a matrix A, what does a₂₃ represent?',
    options: ['Entry in row 2, column 3', 'Entry in row 3, column 2', 'The 23rd entry', '2×3'],
    correctIndex: 0,
    explanation: 'aᵢⱼ means the entry in row i and column j.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is the 2×2 identity matrix?',
    options: ['[[1,0],[0,1]]', '[[1,1],[1,1]]', '[[0,0],[0,0]]', '[[2,0],[0,2]]'],
    correctIndex: 0,
    explanation: 'The identity matrix has 1s on the diagonal and 0s elsewhere.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is [[1,2],[3,4]] + [[5,6],[7,8]]?',
    options: ['[[6,8],[10,12]]', '[[6,8],[9,11]]', '[[5,12],[21,32]]', '[[4,4],[4,4]]'],
    correctIndex: 0,
    explanation: 'Add entry by entry: 1+5=6, 2+6=8, 3+7=10, 4+8=12.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is 2 × [[1,2],[3,4]]?',
    options: ['[[2,4],[6,8]]', '[[2,2],[2,2]]', '[[3,4],[5,6]]', '[[1,4],[3,8]]'],
    correctIndex: 0,
    explanation: 'Scalar multiplication: multiply each entry by 2.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'If A is 2×3 and B is 3×4, what is the size of AB?',
    options: ['2×4', '3×3', '2×3', '4×2'],
    correctIndex: 0,
    explanation: 'Multiplying m×n by n×p gives m×p, so 2×4.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Compute [[1,2],[3,4]] × [[1,0],[0,1]].',
    options: ['[[1,2],[3,4]]', '[[1,0],[0,1]]', '[[1,0],[0,4]]', '[[2,2],[3,5]]'],
    correctIndex: 0,
    explanation: 'Multiplying by the identity matrix gives the original matrix: AI = A.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'What is the transpose of [[1,2,3],[4,5,6]]?',
    options: ['[[1,4],[2,5],[3,6]]', '[[3,2,1],[6,5,4]]', '[[1,2],[3,4],[5,6]]', '[[6,5,4],[3,2,1]]'],
    correctIndex: 0,
    explanation: 'Transpose swaps rows and columns: 2×3 becomes 3×2.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'For [[1,2],[3,4]] × [[5,6],[7,8]], find the (1,1) entry.',
    options: ['19', '5', '12', '23'],
    correctIndex: 0,
    explanation: 'Row 1 of first × Column 1 of second: 1(5) + 2(7) = 5 + 14 = 19.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Which property does matrix multiplication NOT have?',
    options: ['Commutativity', 'Associativity', 'Distributivity', 'Identity element'],
    correctIndex: 0,
    explanation: 'AB ≠ BA in general; matrix multiplication is not commutative.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Compute [[1,2],[3,4]] × [[5,6],[7,8]] fully.',
    options: ['[[19,22],[43,50]]', '[[19,43],[22,50]]', '[[5,12],[21,32]]', '[[12,16],[24,32]]'],
    correctIndex: 0,
    explanation: '(1,1)=1(5)+2(7)=19, (1,2)=1(6)+2(8)=22, (2,1)=3(5)+4(7)=43, (2,2)=3(6)+4(8)=50.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'If A² = A, then A is called:',
    options: ['Idempotent', 'Nilpotent', 'Orthogonal', 'Symmetric'],
    correctIndex: 0,
    explanation: 'A matrix satisfying A² = A is called idempotent.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'What is (AB)ᵀ?',
    options: ['BᵀAᵀ', 'AᵀBᵀ', 'AB', 'BA'],
    correctIndex: 0,
    explanation: 'The transpose of a product reverses order: (AB)ᵀ = BᵀAᵀ.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If A = [[1,2],[0,1]] and B = [[1,0],[3,1]], is AB = BA?',
    options: ['No', 'Yes', 'Only if A = B', 'Only if A = I'],
    correctIndex: 0,
    explanation: 'AB = [[7,2],[3,1]], BA = [[1,2],[3,7]]. AB ≠ BA.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'A matrix A is symmetric if:',
    options: ['Aᵀ = A', 'Aᵀ = -A', 'A² = I', 'A² = A'],
    correctIndex: 0,
    explanation: 'A symmetric matrix equals its transpose: Aᵀ = A.'
  }
];
