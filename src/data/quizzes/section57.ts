import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section57Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'In the sequence 2, 6, 18, 54, ..., what is the common ratio?',
    options: ['3', '4', '2', '6'],
    correctIndex: 0,
    explanation: 'Each term divided by the previous: 6/2 = 3, 18/6 = 3, etc.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is 1 + 2 + 4 + 8?',
    options: ['15', '16', '14', '12'],
    correctIndex: 0,
    explanation: '1 + 2 + 4 + 8 = 15, or (1 - 16)/(1 - 2) = 15.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'For an infinite geometric series to converge, |r| must be:',
    options: ['Less than 1', 'Greater than 1', 'Equal to 1', 'Any value'],
    correctIndex: 0,
    explanation: 'Convergence requires |r| < 1.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is the sum 1 + 1/2 + 1/4 + 1/8 + ... (infinite)?',
    options: ['2', '1', '∞', '1/2'],
    correctIndex: 0,
    explanation: 'a/(1-r) = 1/(1 - 1/2) = 1/(1/2) = 2.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is the first term of the series 5 + 10 + 20 + ...?',
    options: ['5', '10', '15', '2'],
    correctIndex: 0,
    explanation: 'The first term is 5.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Compute Σ(k=0 to 5) 2^k.',
    options: ['63', '31', '64', '32'],
    correctIndex: 0,
    explanation: '(1 - 2^6)/(1 - 2) = (1 - 64)/(-1) = 63.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Find Σ(k=0 to ∞) (1/3)^k.',
    options: ['3/2', '1/2', '2', '3'],
    correctIndex: 0,
    explanation: '1/(1 - 1/3) = 1/(2/3) = 3/2.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Express 0.9999... as a fraction.',
    options: ['1', '9/10', '99/100', '9/11'],
    correctIndex: 0,
    explanation: '0.999... = 9/10 + 9/100 + ... = (9/10)/(1 - 1/10) = (9/10)/(9/10) = 1.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Compute 3 + 6 + 12 + 24 + 48.',
    options: ['93', '96', '90', '99'],
    correctIndex: 0,
    explanation: 'a = 3, r = 2, n = 5. S = 3(1 - 32)/(1 - 2) = 3(31) = 93.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Find Σ(k=1 to ∞) (1/2)^k.',
    options: ['1', '2', '1/2', '3/2'],
    correctIndex: 0,
    explanation: 'This starts at k=1: sum = 1/2 + 1/4 + ... = (1/2)/(1 - 1/2) = 1.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Find Σ(k=0 to ∞) 2·(−1/3)^k.',
    options: ['3/2', '2/3', '6', '1'],
    correctIndex: 0,
    explanation: '2/(1 - (-1/3)) = 2/(4/3) = 2 · 3/4 = 3/2.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Express 0.121212... as a fraction.',
    options: ['12/99 = 4/33', '12/100', '121/999', '12/90'],
    correctIndex: 0,
    explanation: '0.121212... = 12/100 + 12/10000 + ... = (12/100)/(1 - 1/100) = 12/99 = 4/33.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'For which values of x does Σ(k=0 to ∞) x^k converge?',
    options: ['|x| < 1', 'x > 0', 'x < 1', 'All x'],
    correctIndex: 0,
    explanation: 'The series converges when |common ratio| < 1, i.e., |x| < 1.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Find Σ(k=2 to ∞) (1/2)^k.',
    options: ['1/2', '1', '1/4', '3/4'],
    correctIndex: 0,
    explanation: 'Full sum is 2. Subtract first two terms: 2 - 1 - 1/2 = 1/2.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'If Σ(k=0 to n) r^k = 31 and r = 2, find n.',
    options: ['4', '5', '3', '6'],
    correctIndex: 0,
    explanation: '(1 - 2^(n+1))/(1 - 2) = 31 → 2^(n+1) - 1 = 31 → 2^(n+1) = 32 = 2^5 → n + 1 = 5, n = 4.'
  }
];
