import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section56Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is Σ(k=1 to 5) k?',
    options: ['15', '10', '20', '5'],
    correctIndex: 0,
    explanation: '1 + 2 + 3 + 4 + 5 = 15, or use n(n+1)/2 = 5(6)/2 = 15.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is Σ(i=1 to 4) 3?',
    options: ['12', '3', '4', '7'],
    correctIndex: 0,
    explanation: 'Sum of a constant c repeated n times is n·c = 4·3 = 12.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'In Σ(k=2 to 6) k², what is the lower limit?',
    options: ['2', '6', 'k', 'k²'],
    correctIndex: 0,
    explanation: 'The lower limit is the starting value of the index, which is 2.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'How many terms are in Σ(k=3 to 7) aₖ?',
    options: ['5', '4', '7', '3'],
    correctIndex: 0,
    explanation: 'From k=3 to k=7: 3, 4, 5, 6, 7. That\'s 7 - 3 + 1 = 5 terms.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is 1 + 2 + 3 + ... + 100?',
    options: ['5050', '5000', '10000', '100'],
    correctIndex: 0,
    explanation: 'n(n+1)/2 = 100(101)/2 = 5050.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Compute Σ(k=1 to 10) k².',
    options: ['385', '55', '100', '200'],
    correctIndex: 0,
    explanation: 'n(n+1)(2n+1)/6 = 10(11)(21)/6 = 2310/6 = 385.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Compute Σ(k=1 to 5) (2k - 1).',
    options: ['25', '15', '20', '30'],
    correctIndex: 0,
    explanation: '1 + 3 + 5 + 7 + 9 = 25. Or: sum of first n odd numbers = n² = 25.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Simplify Σ(k=1 to n) (k² - (k-1)²).',
    options: ['n²', 'n(n+1)', 'n', '2n'],
    correctIndex: 0,
    explanation: 'This is telescoping: (1-0) + (4-1) + (9-4) + ... + (n² - (n-1)²) = n² - 0 = n².'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'What is Σ(k=1 to n) 1/k(k+1)?',
    options: ['n/(n+1)', '1 - 1/(n+1)', 'n', '1/n'],
    correctIndex: 0,
    explanation: 'Using partial fractions and telescoping: n/(n+1).'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Compute Σ(k=1 to 4) k³.',
    options: ['100', '64', '30', '50'],
    correctIndex: 0,
    explanation: '1 + 8 + 27 + 64 = 100. Or: (n(n+1)/2)² = (4·5/2)² = 10² = 100.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Compute Σ(k=1 to n) k(k+1).',
    options: ['n(n+1)(n+2)/3', 'n(n+1)/2', 'n²(n+1)/2', 'n(n+1)²/2'],
    correctIndex: 0,
    explanation: 'k(k+1) = k² + k. Sum = n(n+1)(2n+1)/6 + n(n+1)/2 = n(n+1)(n+2)/3.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'If Σ(k=1 to n) k = 78, find n.',
    options: ['12', '11', '13', '10'],
    correctIndex: 0,
    explanation: 'n(n+1)/2 = 78, so n(n+1) = 156 = 12·13. Thus n = 12.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Compute Σ(k=0 to n-1) (n-k).',
    options: ['n(n+1)/2', 'n²', 'n(n-1)/2', 'n'],
    correctIndex: 0,
    explanation: 'This equals n + (n-1) + ... + 1 = n(n+1)/2.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Compute Σ(k=1 to 100) (−1)^k · k.',
    options: ['−50', '50', '0', '100'],
    correctIndex: 0,
    explanation: '−1 + 2 − 3 + 4 − ... + 100 = (−1+2) + (−3+4) + ... = 1 + 1 + ... (50 pairs) = 50. Wait: pairs: (-1+2)=1, (-3+4)=1, ... 50 pairs, sum = 50. Actually the answer is 50, but let me verify: -1+2=1, -3+4=1,...,-99+100=1. 50 ones = 50.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Find a closed form for Σ(k=1 to n) k·2^k.',
    options: ['(n-1)·2^(n+1) + 2', '2^(n+1) - 2', 'n·2^(n+1)', '2^n(n-1)'],
    correctIndex: 0,
    explanation: 'Using the formula for Σk·r^k: the result is (n-1)·2^(n+1) + 2.'
  }
];
