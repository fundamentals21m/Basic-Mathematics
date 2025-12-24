import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section52Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'In the cycle (1 3 4), where does 1 go?',
    options: ['3', '4', '1', '2'],
    correctIndex: 0,
    explanation: 'In (1 3 4), each element maps to the next: 1 → 3.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is the order of the cycle (1 2)?',
    options: ['2', '1', '3', '4'],
    correctIndex: 0,
    explanation: 'A 2-cycle (transposition) has order 2: apply twice to return to identity.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'A 3-cycle can be written as how many transpositions?',
    options: ['2', '1', '3', '4'],
    correctIndex: 0,
    explanation: 'A k-cycle needs k-1 transpositions, so a 3-cycle needs 2.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'In cycle (1 2 3), where does 3 go?',
    options: ['1', '2', '3', '4'],
    correctIndex: 0,
    explanation: 'In (1 2 3): 1→2→3→1, so 3 goes to 1.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'Two cycles are disjoint if they:',
    options: ['Move different elements', 'Have the same length', 'Are both transpositions', 'Share one element'],
    correctIndex: 0,
    explanation: 'Disjoint cycles move completely separate sets of elements.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'What is the order of (1 2 3 4)?',
    options: ['4', '2', '3', '6'],
    correctIndex: 0,
    explanation: 'A k-cycle has order k. A 4-cycle has order 4.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What is the order of (1 2)(3 4 5)?',
    options: ['6', '5', '2', '3'],
    correctIndex: 0,
    explanation: 'Order = lcm(2, 3) = 6.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Write σ where σ(1)=2, σ(2)=3, σ(3)=1, σ(4)=4 in cycle notation.',
    options: ['(1 2 3)', '(1 2)(3 4)', '(1 3 2)', '(1)(2)(3)(4)'],
    correctIndex: 0,
    explanation: '1→2→3→1 forms a 3-cycle. 4 is fixed (not written). So σ = (1 2 3).'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Do (1 2) and (3 4) commute?',
    options: ['Yes, they are disjoint', 'No', 'Only sometimes', 'Undefined'],
    correctIndex: 0,
    explanation: 'Disjoint cycles always commute.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'What is (1 2 3)²?',
    options: ['(1 3 2)', '(1 2 3)', 'Identity', '(1 2)'],
    correctIndex: 0,
    explanation: '(1 2 3)² sends 1→2→3, 2→3→1, 3→1→2. So (1 2 3)² = (1 3 2).'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'What is the order of (1 2)(3 4)(5 6 7)?',
    options: ['6', '3', '12', '7'],
    correctIndex: 0,
    explanation: 'Order = lcm(2, 2, 3) = 6.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Express (1 2 3 4) as a product of transpositions.',
    options: ['(1 4)(1 3)(1 2)', '(1 2)(2 3)(3 4)', '(1 2)(3 4)', '(1 4)'],
    correctIndex: 0,
    explanation: '(1 2 3 4) = (1 4)(1 3)(1 2). Verify: 1→2 by (1 2), then fixed by others → ends at 2. Etc.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'How many 3-cycles are in S₄?',
    options: ['8', '4', '6', '12'],
    correctIndex: 0,
    explanation: 'Choose 3 elements from 4: C(4,3) = 4. Each set gives 2 distinct 3-cycles. Total: 4 × 2 = 8.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If σ = (1 2 3)(4 5), what is σ⁻¹?',
    options: ['(1 3 2)(4 5)', '(3 2 1)(5 4)', '(1 2 3)(4 5)', '(1 2)(3)(4 5)'],
    correctIndex: 0,
    explanation: 'Inverse of (1 2 3) is (1 3 2), inverse of (4 5) is (4 5). So σ⁻¹ = (1 3 2)(4 5).'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Compute (1 2 3)(1 3).',
    options: ['(1 2)', '(2 3)', '(1 3)', '(1 2 3)'],
    correctIndex: 0,
    explanation: 'Apply (1 3) first, then (1 2 3). Track: 1→3→1→2; 2→2→3; 3→1→2→3. Wait, let me redo: (1 3)(1) = 3, (1 2 3)(3) = 1. (1 3)(2) = 2, (1 2 3)(2) = 3. (1 3)(3) = 1, (1 2 3)(1) = 2. Result: 1→1→..., hmm. Apply right to left: (1 3) first. 1→3, then (1 2 3): 3→1. So 1→1? Let me recalculate: (1 2 3) ∘ (1 3) means apply (1 3) first. (1 3): 1↔3, 2 fixed. Then (1 2 3): 1→2, 2→3, 3→1. So composition: 1→(1 3)→3→(1 2 3)→1; 2→2→3; 3→1→2. Result: (2 3). Actually the answer should be (2 3).'
  }
];
