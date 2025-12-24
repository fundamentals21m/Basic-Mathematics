import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section55Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What are the two parts of a proof by induction?',
    options: ['Base case and inductive step', 'Hypothesis and conclusion', 'Definition and theorem', 'Given and proof'],
    correctIndex: 0,
    explanation: 'Induction requires a base case (first case) and an inductive step (k implies k+1).'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'In the base case, which value of n is typically verified?',
    options: ['n = 1', 'n = 0', 'n = k', 'n = k + 1'],
    correctIndex: 0,
    explanation: 'The base case usually verifies n = 1 (or the smallest relevant value).'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'In the inductive step, we assume P(k) is true. What do we prove?',
    options: ['P(k + 1)', 'P(k)', 'P(1)', 'P(n)'],
    correctIndex: 0,
    explanation: 'We prove that if P(k) holds, then P(k + 1) also holds.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is 1 + 2 + 3 + ... + 10?',
    options: ['55', '45', '100', '50'],
    correctIndex: 0,
    explanation: 'Using n(n+1)/2: 10(11)/2 = 55.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'The assumption that P(k) is true is called the:',
    options: ['Inductive hypothesis', 'Base case', 'Conclusion', 'Theorem'],
    correctIndex: 0,
    explanation: 'The assumption P(k) is called the inductive hypothesis.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'To prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6, the base case n=1 gives:',
    options: ['1 = 1', '1 = 0', '4 = 4', '2 = 2'],
    correctIndex: 0,
    explanation: 'LHS = 1² = 1. RHS = 1(2)(3)/6 = 6/6 = 1. So 1 = 1. ✓'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'In proving 2^n > n, why does 2^(k+1) = 2·2^k > 2k ≥ k + 1 work?',
    options: ['Because 2k ≥ k + 1 when k ≥ 1', 'Because 2k = k + 1 always', 'By the base case', 'By definition'],
    correctIndex: 0,
    explanation: '2k ≥ k + 1 simplifies to k ≥ 1, which is true by assumption.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Prove: n! > 2^n for n ≥ 4. What\'s the base case value?',
    options: ['n = 4: 24 > 16', 'n = 1: 1 > 2', 'n = 2: 2 > 4', 'n = 3: 6 > 8'],
    correctIndex: 0,
    explanation: 'For n = 4: 4! = 24, 2^4 = 16. 24 > 16. ✓'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Strong induction differs from regular induction by:',
    options: ['Assuming all cases up to k, not just k', 'Having multiple base cases', 'Being easier', 'Not needing a base case'],
    correctIndex: 0,
    explanation: 'Strong induction assumes P(1), P(2), ..., P(k) are all true to prove P(k+1).'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'To prove 1 + 3 + 5 + ... + (2n-1) = n², what is the (k+1)th odd number?',
    options: ['2(k+1) - 1 = 2k + 1', '2k + 2', 'k + 1', '2k - 1'],
    correctIndex: 0,
    explanation: 'The nth odd number is 2n - 1, so the (k+1)th is 2(k+1) - 1 = 2k + 1.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'In proving ∑(k=1 to n) k² = n(n+1)(2n+1)/6, the inductive step adds:',
    options: ['(k+1)²', 'k²', 'k+1', '2k+1'],
    correctIndex: 0,
    explanation: 'Going from n = k to n = k + 1 means adding the next term: (k + 1)².'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Prove 3^n > n² for n ≥ 2. Which base case works?',
    options: ['n = 2: 9 > 4', 'n = 1: 3 > 1', 'n = 0: 1 > 0', 'n = 3: 27 > 9'],
    correctIndex: 0,
    explanation: 'n = 2: 3² = 9, 2² = 4. 9 > 4. ✓ (n = 1 also works but n = 2 is often chosen).'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'In proving ∑(k=1 to n) 1/(k(k+1)) = n/(n+1), the inductive step uses:',
    options: ['n/(n+1) + 1/((n+1)(n+2)) = (n+1)/(n+2)', 'n/(n+1) = (n+1)/(n+2)', 'Adding 1 to both sides', 'Multiplying by n+1'],
    correctIndex: 0,
    explanation: 'Add the (k+1)th term: n/(n+1) + 1/((n+1)(n+2)) and simplify to (n+1)/(n+2).'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Fibonacci numbers: F₁=F₂=1, Fₙ=Fₙ₋₁+Fₙ₋₂. Why use strong induction to prove properties?',
    options: ['Fₙ depends on two previous terms', 'It\'s always required', 'Base case is hard', 'Regular induction fails'],
    correctIndex: 0,
    explanation: 'Fibonacci recurrence uses Fₙ₋₁ and Fₙ₋₂, so we need both previous cases, not just one.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'In proving (1+x)^n ≥ 1 + nx for x ≥ -1, the inductive step multiplies by:',
    options: ['(1 + x)', '(1 + nx)', 'n', 'x'],
    correctIndex: 0,
    explanation: '(1+x)^(k+1) = (1+x)^k · (1+x) ≥ (1+kx)(1+x) using the inductive hypothesis.'
  }
];
