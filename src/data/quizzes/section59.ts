import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section59Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is det([[1,2],[3,4]])?',
    options: ['-2', '2', '10', '-10'],
    correctIndex: 0,
    explanation: 'det = ad - bc = 1(4) - 2(3) = 4 - 6 = -2.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is det([[2,0],[0,3]])?',
    options: ['6', '5', '0', '-6'],
    correctIndex: 0,
    explanation: 'det = 2(3) - 0(0) = 6.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'A matrix is invertible if its determinant is:',
    options: ['Non-zero', 'Zero', 'Positive', 'Negative'],
    correctIndex: 0,
    explanation: 'A matrix is invertible if and only if det ≠ 0.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is det([[1,0],[0,1]])?',
    options: ['1', '0', '2', '-1'],
    correctIndex: 0,
    explanation: 'det(I) = 1(1) - 0(0) = 1.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is det([[a,b],[0,d]])?',
    options: ['ad', 'ad - b', 'a + d', 'bd'],
    correctIndex: 0,
    explanation: 'det = a(d) - b(0) = ad.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Find det([[5,3],[2,4]]).',
    options: ['14', '20', '6', '26'],
    correctIndex: 0,
    explanation: 'det = 5(4) - 3(2) = 20 - 6 = 14.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'If det(A) = 0, the matrix is called:',
    options: ['Singular', 'Regular', 'Orthogonal', 'Symmetric'],
    correctIndex: 0,
    explanation: 'A matrix with zero determinant is singular (non-invertible).'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'What is det([[3,6],[1,2]])?',
    options: ['0', '6', '12', '-6'],
    correctIndex: 0,
    explanation: 'det = 3(2) - 6(1) = 6 - 6 = 0. Rows are proportional.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'The inverse of [[a,b],[c,d]] has 1/det multiplied by:',
    options: ['[[d,-b],[-c,a]]', '[[a,b],[c,d]]', '[[-a,-b],[-c,-d]]', '[[d,b],[c,a]]'],
    correctIndex: 0,
    explanation: 'A⁻¹ = (1/det)[[d,-b],[-c,a]]: swap diagonal, negate off-diagonal.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: '|det(A)| geometrically represents:',
    options: ['Area scaling factor', 'Rotation angle', 'Translation distance', 'Shear factor'],
    correctIndex: 0,
    explanation: 'The absolute value of the determinant is how much the transformation scales areas.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Find the inverse of [[2,1],[5,3]].',
    options: ['[[3,-1],[-5,2]]', '[[-3,1],[5,-2]]', '[[3,1],[-5,2]]', '[[2,-1],[-5,3]]'],
    correctIndex: 0,
    explanation: 'det = 6-5 = 1. Inverse = [[3,-1],[-5,2]].'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'If det(A) = 3, what is det(2A) for a 2×2 matrix?',
    options: ['12', '6', '9', '24'],
    correctIndex: 0,
    explanation: 'For n×n matrix: det(cA) = c^n · det(A). Here: 2² · 3 = 12.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If det(A) = 4 and det(B) = 3, what is det(AB)?',
    options: ['12', '7', '1', '64'],
    correctIndex: 0,
    explanation: 'det(AB) = det(A) · det(B) = 4 · 3 = 12.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'What is det(A⁻¹) if det(A) = 5?',
    options: ['1/5', '-5', '5', '-1/5'],
    correctIndex: 0,
    explanation: 'det(A⁻¹) = 1/det(A) = 1/5.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'For [[cosθ, -sinθ],[sinθ, cosθ]], what is the determinant?',
    options: ['1', '0', 'cos²θ + sin²θ', '2cosθ'],
    correctIndex: 0,
    explanation: 'det = cos²θ - (-sin²θ) = cos²θ + sin²θ = 1.'
  }
];
