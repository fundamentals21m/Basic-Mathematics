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
  },

  // Additional Easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'What is $\\sum_{k=1}^{3} k$?',
    options: ['$6$', '$3$', '$9$', '$5$'],
    correctIndex: 0,
    explanation: '$1 + 2 + 3 = 6$.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'What is $\\sum_{i=1}^{5} 2$?',
    options: ['$10$', '$2$', '$5$', '$7$'],
    correctIndex: 0,
    explanation: 'Sum of constant $2$ repeated $5$ times: $5 \\cdot 2 = 10$.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'In $\\sum_{k=1}^{10} k^2$, what is the upper limit?',
    options: ['$10$', '$1$', '$k$', '$k^2$'],
    correctIndex: 0,
    explanation: 'The upper limit is the ending value of the index, which is $10$.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'How many terms are in $\\sum_{k=1}^{5} a_k$?',
    options: ['$5$', '$4$', '$6$', '$1$'],
    correctIndex: 0,
    explanation: 'From $k=1$ to $k=5$: $1, 2, 3, 4, 5$. That\'s $5$ terms.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'What is $1 + 2 + 3 + \\cdots + 20$?',
    options: ['$210$', '$200$', '$100$', '$400$'],
    correctIndex: 0,
    explanation: '$\\frac{n(n+1)}{2} = \\frac{20(21)}{2} = 210$.'
  },

  // Additional Medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Compute $\\sum_{k=1}^{6} k^2$.',
    options: ['$91$', '$21$', '$36$', '$60$'],
    correctIndex: 0,
    explanation: '$\\frac{n(n+1)(2n+1)}{6} = \\frac{6(7)(13)}{6} = 91$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'Compute $\\sum_{k=1}^{4} (3k + 1)$.',
    options: ['$34$', '$30$', '$40$', '$24$'],
    correctIndex: 0,
    explanation: '$4 + 7 + 10 + 13 = 34$. Or: $3\\sum k + \\sum 1 = 3(10) + 4 = 34$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'Simplify $\\sum_{k=1}^{n} (k^2 + k)$.',
    options: ['$\\frac{n(n+1)(n+2)}{3}$', '$\\frac{n(n+1)}{2}$', '$n^3$', '$\\frac{n^2(n+1)}{2}$'],
    correctIndex: 0,
    explanation: '$\\sum k^2 + \\sum k = \\frac{n(n+1)(2n+1)}{6} + \\frac{n(n+1)}{2} = \\frac{n(n+1)(n+2)}{3}$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'What is $\\sum_{k=0}^{n} 1$?',
    options: ['$n+1$', '$n$', '$1$', '$0$'],
    correctIndex: 0,
    explanation: 'From $k=0$ to $k=n$: that\'s $n+1$ terms, each equal to $1$. Sum $= n+1$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'Compute $\\sum_{k=1}^{3} k^3$.',
    options: ['$36$', '$27$', '$30$', '$14$'],
    correctIndex: 0,
    explanation: '$1 + 8 + 27 = 36$. Or: $\\left(\\frac{3(4)}{2}\\right)^2 = 6^2 = 36$.'
  },

  // Additional Hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'Compute $\\sum_{k=1}^{n} (2k-1)^2$.',
    options: ['$\\frac{n(2n-1)(2n+1)}{3}$', '$\\frac{n(n+1)(2n+1)}{6}$', '$4n^2 - 2n$', '$n^3$'],
    correctIndex: 0,
    explanation: 'Expand: $4k^2 - 4k + 1$. Sum: $4\\sum k^2 - 4\\sum k + \\sum 1 = \\frac{n(2n-1)(2n+1)}{3}$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'If $\\sum_{k=1}^{n} k^2 = 140$, find $n$.',
    options: ['$7$', '$6$', '$8$', '$10$'],
    correctIndex: 0,
    explanation: '$\\frac{n(n+1)(2n+1)}{6} = 140$, so $n(n+1)(2n+1) = 840 = 7 \\cdot 8 \\cdot 15$. Thus $n = 7$.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'Compute $\\sum_{k=1}^{n} k(k+2)$.',
    options: ['$\\frac{n(n+1)(2n+7)}{6}$', '$\\frac{n(n+1)(n+2)}{3}$', '$\\frac{n^2(n+1)}{2}$', '$n^2 + 2n$'],
    correctIndex: 0,
    explanation: '$k(k+2) = k^2 + 2k$. Sum: $\\frac{n(n+1)(2n+1)}{6} + 2\\frac{n(n+1)}{2} = \\frac{n(n+1)(2n+7)}{6}$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'Compute $\\sum_{k=1}^{49} (-1)^{k+1} \\cdot k$.',
    options: ['$25$', '$-25$', '$0$', '$49$'],
    correctIndex: 0,
    explanation: '$1 - 2 + 3 - 4 + \\cdots + 47 - 48 + 49 = (1-2) + (3-4) + \\cdots + (47-48) + 49 = -1 \\times 24 + 49 = 25$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'Find $\\sum_{k=1}^{n} \\frac{k}{2^k}$ in closed form (given $n$ is large).',
    options: ['Approaches $2$ as $n \\to \\infty$', 'Approaches $1$', 'Approaches $\\infty$', 'Approaches $0$'],
    correctIndex: 0,
    explanation: 'The infinite series $\\sum_{k=1}^{\\infty} \\frac{k}{2^k} = 2$ (using standard formula).'
  }
];
