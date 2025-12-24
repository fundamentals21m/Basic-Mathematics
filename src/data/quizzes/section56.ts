import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section56Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is $\\sum_{k=1}^{5} k$?',
    options: ['$15$', '$10$', '$20$', '$5$'],
    correctIndex: 0,
    explanation: '$1 + 2 + 3 + 4 + 5 = 15$, or use $\\frac{n(n+1)}{2} = \\frac{5(6)}{2} = 15$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is $\\sum_{i=1}^{4} 3$?',
    options: ['$12$', '$3$', '$4$', '$7$'],
    correctIndex: 0,
    explanation: 'Sum of a constant $c$ repeated $n$ times is $n \\cdot c = 4 \\cdot 3 = 12$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'In $\\sum_{k=2}^{6} k^2$, what is the lower limit?',
    options: ['$2$', '$6$', '$k$', '$k^2$'],
    correctIndex: 0,
    explanation: 'The lower limit is the starting value of the index, which is $2$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'How many terms are in $\\sum_{k=3}^{7} a_k$?',
    options: ['$5$', '$4$', '$7$', '$3$'],
    correctIndex: 0,
    explanation: 'From $k=3$ to $k=7$: $3, 4, 5, 6, 7$. That\'s $7 - 3 + 1 = 5$ terms.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is $1 + 2 + 3 + \\cdots + 100$?',
    options: ['$5050$', '$5000$', '$10000$', '$100$'],
    correctIndex: 0,
    explanation: '$\\frac{n(n+1)}{2} = \\frac{100(101)}{2} = 5050$.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Compute $\\sum_{k=1}^{10} k^2$.',
    options: ['$385$', '$55$', '$100$', '$200$'],
    correctIndex: 0,
    explanation: '$\\frac{n(n+1)(2n+1)}{6} = \\frac{10(11)(21)}{6} = \\frac{2310}{6} = 385$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Compute $\\sum_{k=1}^{5} (2k - 1)$.',
    options: ['$25$', '$15$', '$20$', '$30$'],
    correctIndex: 0,
    explanation: '$1 + 3 + 5 + 7 + 9 = 25$. Or: sum of first $n$ odd numbers $= n^2 = 25$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Simplify $\\sum_{k=1}^{n} (k^2 - (k-1)^2)$.',
    options: ['$n^2$', '$n(n+1)$', '$n$', '$2n$'],
    correctIndex: 0,
    explanation: 'This is telescoping: $(1-0) + (4-1) + (9-4) + \\cdots + (n^2 - (n-1)^2) = n^2 - 0 = n^2$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'What is $\\sum_{k=1}^{n} \\frac{1}{k(k+1)}$?',
    options: ['$\\frac{n}{n+1}$', '$1 - \\frac{1}{n+1}$', '$n$', '$\\frac{1}{n}$'],
    correctIndex: 0,
    explanation: 'Using partial fractions and telescoping: $\\frac{n}{n+1}$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Compute $\\sum_{k=1}^{4} k^3$.',
    options: ['$100$', '$64$', '$30$', '$50$'],
    correctIndex: 0,
    explanation: '$1 + 8 + 27 + 64 = 100$. Or: $\\left(\\frac{n(n+1)}{2}\\right)^2 = \\left(\\frac{4 \\cdot 5}{2}\\right)^2 = 10^2 = 100$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Compute $\\sum_{k=1}^{n} k(k+1)$.',
    options: ['$\\frac{n(n+1)(n+2)}{3}$', '$\\frac{n(n+1)}{2}$', '$\\frac{n^2(n+1)}{2}$', '$\\frac{n(n+1)^2}{2}$'],
    correctIndex: 0,
    explanation: '$k(k+1) = k^2 + k$. Sum $= \\frac{n(n+1)(2n+1)}{6} + \\frac{n(n+1)}{2} = \\frac{n(n+1)(n+2)}{3}$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'If $\\sum_{k=1}^{n} k = 78$, find $n$.',
    options: ['$12$', '$11$', '$13$', '$10$'],
    correctIndex: 0,
    explanation: '$\\frac{n(n+1)}{2} = 78$, so $n(n+1) = 156 = 12 \\cdot 13$. Thus $n = 12$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Compute $\\sum_{k=0}^{n-1} (n-k)$.',
    options: ['$\\frac{n(n+1)}{2}$', '$n^2$', '$\\frac{n(n-1)}{2}$', '$n$'],
    correctIndex: 0,
    explanation: 'This equals $n + (n-1) + \\cdots + 1 = \\frac{n(n+1)}{2}$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Compute $\\sum_{k=1}^{100} (-1)^k \\cdot k$.',
    options: ['$50$', '$-50$', '$0$', '$100$'],
    correctIndex: 0,
    explanation: '$-1 + 2 - 3 + 4 - \\cdots + 100 = (-1+2) + (-3+4) + \\cdots = 1 + 1 + \\cdots$ ($50$ pairs) $= 50$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Find a closed form for $\\sum_{k=1}^{n} k \\cdot 2^k$.',
    options: ['$(n-1) \\cdot 2^{n+1} + 2$', '$2^{n+1} - 2$', '$n \\cdot 2^{n+1}$', '$2^n(n-1)$'],
    correctIndex: 0,
    explanation: 'Using the formula for $\\sum k \\cdot r^k$: the result is $(n-1) \\cdot 2^{n+1} + 2$.'
  }
];
