import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section62Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What happens to det when swapping two rows in a 3×3 matrix?',
    options: ['Sign changes', 'Doubles', 'Stays same', 'Becomes zero'],
    correctIndex: 0,
    explanation: 'Swapping rows negates the determinant, same as 2×2.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'If det(A) = 3 and det(B) = 4, what is det(AB)?',
    options: ['12', '7', '1', '81'],
    correctIndex: 0,
    explanation: 'det(AB) = det(A) · det(B) = 3 · 4 = 12.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is det(Aᵀ) if det(A) = 7?',
    options: ['7', '-7', '1/7', '49'],
    correctIndex: 0,
    explanation: 'det(Aᵀ) = det(A). Transpose preserves determinant.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'If a 3×3 matrix has two identical rows, its determinant is:',
    options: ['0', '1', '2', 'Depends on the rows'],
    correctIndex: 0,
    explanation: 'Identical rows means linear dependence, so det = 0.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is det(A⁻¹) if det(A) = 5?',
    options: ['1/5', '5', '-5', '-1/5'],
    correctIndex: 0,
    explanation: 'det(A⁻¹) = 1/det(A) = 1/5.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'For a 3×3 matrix with det(A) = 2, what is det(3A)?',
    options: ['54', '6', '18', '8'],
    correctIndex: 0,
    explanation: 'det(cA) = c³ · det(A) = 27 · 2 = 54.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'If det(A) = 4, what is det(A³)?',
    options: ['64', '12', '81', '16'],
    correctIndex: 0,
    explanation: 'det(A³) = (det(A))³ = 4³ = 64.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Adding 5×(row 2) to row 3 changes det by:',
    options: ['Nothing', 'Multiplies by 5', 'Adds 5', 'Negates it'],
    correctIndex: 0,
    explanation: 'Adding a multiple of one row to another preserves the determinant.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Multiplying row 1 by 4 in a 3×3 matrix multiplies det by:',
    options: ['4', '64', '12', '16'],
    correctIndex: 0,
    explanation: 'Scaling one row by k multiplies det by k.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'What is det(-A) for a 3×3 matrix if det(A) = 6?',
    options: ['-6', '6', '-216', '216'],
    correctIndex: 0,
    explanation: 'det(-A) = (-1)³ · det(A) = -1 · 6 = -6.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'If det(A) = 3, what is det(A⁻¹ · Aᵀ)?',
    options: ['1', '3', '1/3', '9'],
    correctIndex: 0,
    explanation: 'det(A⁻¹ · Aᵀ) = det(A⁻¹) · det(Aᵀ) = (1/3) · 3 = 1.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'For 3×3 matrix A, if det(2A⁻¹) = 16, what is det(A)?',
    options: ['1/2', '2', '8', '1/8'],
    correctIndex: 0,
    explanation: 'det(2A⁻¹) = 8 · det(A⁻¹) = 8/det(A) = 16. So det(A) = 8/16 = 1/2.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If det(A) = 2 and det(B) = -3, what is det(A²B⁻¹)?',
    options: ['-4/3', '4/3', '-6', '6'],
    correctIndex: 0,
    explanation: 'det(A²B⁻¹) = det(A)² · det(B⁻¹) = 4 · (-1/3) = -4/3.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If A is 3×3 with det(A) ≠ 0, then A · adj(A) equals:',
    options: ['det(A) · I', 'I', 'A', 'Aᵀ'],
    correctIndex: 0,
    explanation: 'A · adj(A) = det(A) · I is a fundamental property.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'What is det(adj(A)) for a 3×3 matrix if det(A) = 4?',
    options: ['16', '4', '64', '8'],
    correctIndex: 0,
    explanation: 'For n×n: det(adj(A)) = (det(A))^(n-1). So 4² = 16.'
  }
];
