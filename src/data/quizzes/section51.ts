import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section51Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'How many permutations of {1, 2, 3} are there?',
    options: ['6', '3', '9', '8'],
    correctIndex: 0,
    explanation: '3! = 3 × 2 × 1 = 6 permutations.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is 4!?',
    options: ['24', '16', '12', '4'],
    correctIndex: 0,
    explanation: '4! = 4 × 3 × 2 × 1 = 24.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'A permutation is what type of function?',
    options: ['Bijection', 'Injection only', 'Surjection only', 'Neither'],
    correctIndex: 0,
    explanation: 'A permutation is a bijection from a set to itself.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'The identity permutation does what?',
    options: ['Fixes all elements', 'Swaps all pairs', 'Reverses order', 'Moves each element one place'],
    correctIndex: 0,
    explanation: 'The identity permutation leaves every element in its original position.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'A transposition swaps how many elements?',
    options: ['Exactly 2', 'At least 2', 'All elements', '1'],
    correctIndex: 0,
    explanation: 'A transposition swaps exactly two elements and fixes all others.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'If σ(1) = 3, σ(2) = 1, σ(3) = 2, what is σ⁻¹(1)?',
    options: ['2', '3', '1', 'Undefined'],
    correctIndex: 0,
    explanation: 'σ⁻¹(1) is the element that σ sends to 1. Since σ(2) = 1, we have σ⁻¹(1) = 2.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'How many elements does S₅ (symmetric group on 5 elements) have?',
    options: ['120', '25', '5', '32'],
    correctIndex: 0,
    explanation: '|S₅| = 5! = 120.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'What is (1 2)(1)?',
    options: ['2', '1', '3', '0'],
    correctIndex: 0,
    explanation: 'The transposition (1 2) swaps 1 and 2, so (1 2)(1) = 2.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'If σ ∘ τ = e (identity), then τ is:',
    options: ['σ⁻¹', 'σ', 'e', 'Undefined'],
    correctIndex: 0,
    explanation: 'If σ ∘ τ = e, then τ is the inverse of σ.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'How many transpositions are in S₄?',
    options: ['6', '4', '12', '24'],
    correctIndex: 0,
    explanation: 'Number of ways to choose 2 elements from 4: C(4,2) = 6 transpositions.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'If σ = (1 2 | 2 1 | 3 3) on {1,2,3}, what is σ²?',
    options: ['Identity', 'σ', 'σ⁻¹', '(1 3)'],
    correctIndex: 0,
    explanation: 'σ swaps 1 and 2. Applying twice returns everything to original: σ² = e.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'A permutation σ satisfies σ³ = e but σ ≠ e. The smallest such permutation acts on:',
    options: ['At least 3 elements', 'Exactly 2 elements', '1 element', '4 elements'],
    correctIndex: 0,
    explanation: 'σ³ = e means σ has order 3 (or a divisor). Order 3 requires at least a 3-cycle, which needs 3 elements.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Compute (1 2) ∘ (2 3) on {1, 2, 3}. What is the result applied to 1?',
    options: ['2', '3', '1', 'Undefined'],
    correctIndex: 0,
    explanation: '(2 3)(1) = 1 (1 is fixed), then (1 2)(1) = 2. So ((1 2) ∘ (2 3))(1) = 2.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If σ is a permutation of {1,2,3,4,5} with σ(1)=2, σ(2)=3, σ(3)=1, σ(4)=5, σ(5)=4, how many elements are fixed?',
    options: ['0', '1', '2', '3'],
    correctIndex: 0,
    explanation: 'Fixed means σ(x) = x. Check: σ(1)=2≠1, σ(2)=3≠2, σ(3)=1≠3, σ(4)=5≠4, σ(5)=4≠5. Zero fixed points.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'The smallest n such that Sₙ is non-abelian (composition is not commutative) is:',
    options: ['3', '2', '4', '5'],
    correctIndex: 0,
    explanation: 'S₂ has only 2 elements and is abelian. S₃ has 6 elements and is non-abelian (e.g., (1 2)(2 3) ≠ (2 3)(1 2)).'
  }
];
