import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section57Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'In the sequence $2, 6, 18, 54, \\ldots$, what is the common ratio?',
    options: ['$3$', '$4$', '$2$', '$6$'],
    correctIndex: 0,
    explanation: 'Each term divided by the previous: $6/2 = 3$, $18/6 = 3$, etc.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is $1 + 2 + 4 + 8$?',
    options: ['$15$', '$16$', '$14$', '$12$'],
    correctIndex: 0,
    explanation: '$1 + 2 + 4 + 8 = 15$, or $\\frac{1 - 16}{1 - 2} = 15$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'For an infinite geometric series to converge, $|r|$ must be:',
    options: ['Less than $1$', 'Greater than $1$', 'Equal to $1$', 'Any value'],
    correctIndex: 0,
    explanation: 'Convergence requires $|r| < 1$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is the sum $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$ (infinite)?',
    options: ['$2$', '$1$', '$\\infty$', '$\\frac{1}{2}$'],
    correctIndex: 0,
    explanation: '$\\frac{a}{1-r} = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is the first term of the series $5 + 10 + 20 + \\cdots$?',
    options: ['$5$', '$10$', '$15$', '$2$'],
    correctIndex: 0,
    explanation: 'The first term is $5$.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Compute $\\sum_{k=0}^{5} 2^k$.',
    options: ['$63$', '$31$', '$64$', '$32$'],
    correctIndex: 0,
    explanation: '$\\frac{1 - 2^6}{1 - 2} = \\frac{1 - 64}{-1} = 63$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Find $\\sum_{k=0}^{\\infty} \\left(\\frac{1}{3}\\right)^k$.',
    options: ['$\\frac{3}{2}$', '$\\frac{1}{2}$', '$2$', '$3$'],
    correctIndex: 0,
    explanation: '$\\frac{1}{1 - \\frac{1}{3}} = \\frac{1}{\\frac{2}{3}} = \\frac{3}{2}$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Express $0.9999\\ldots$ as a fraction.',
    options: ['$1$', '$\\frac{9}{10}$', '$\\frac{99}{100}$', '$\\frac{9}{11}$'],
    correctIndex: 0,
    explanation: '$0.999\\ldots = \\frac{9/10}{1 - 1/10} = \\frac{9/10}{9/10} = 1$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Compute $3 + 6 + 12 + 24 + 48$.',
    options: ['$93$', '$96$', '$90$', '$99$'],
    correctIndex: 0,
    explanation: '$a = 3$, $r = 2$, $n = 5$. $S = 3 \\cdot \\frac{1 - 32}{1 - 2} = 3(31) = 93$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Find $\\sum_{k=1}^{\\infty} \\left(\\frac{1}{2}\\right)^k$.',
    options: ['$1$', '$2$', '$\\frac{1}{2}$', '$\\frac{3}{2}$'],
    correctIndex: 0,
    explanation: 'This starts at $k=1$: sum $= \\frac{1}{2} + \\frac{1}{4} + \\cdots = \\frac{1/2}{1 - 1/2} = 1$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Find $\\sum_{k=0}^{\\infty} 2 \\cdot \\left(-\\frac{1}{3}\\right)^k$.',
    options: ['$\\frac{3}{2}$', '$\\frac{2}{3}$', '$6$', '$1$'],
    correctIndex: 0,
    explanation: '$\\frac{2}{1 - (-\\frac{1}{3})} = \\frac{2}{\\frac{4}{3}} = 2 \\cdot \\frac{3}{4} = \\frac{3}{2}$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Express $0.121212\\ldots$ as a fraction.',
    options: ['$\\frac{12}{99} = \\frac{4}{33}$', '$\\frac{12}{100}$', '$\\frac{121}{999}$', '$\\frac{12}{90}$'],
    correctIndex: 0,
    explanation: '$0.121212\\ldots = \\frac{12/100}{1 - 1/100} = \\frac{12}{99} = \\frac{4}{33}$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'For which values of $x$ does $\\sum_{k=0}^{\\infty} x^k$ converge?',
    options: ['$|x| < 1$', '$x > 0$', '$x < 1$', 'All $x$'],
    correctIndex: 0,
    explanation: 'The series converges when $|\\text{common ratio}| < 1$, i.e., $|x| < 1$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Find $\\sum_{k=2}^{\\infty} \\left(\\frac{1}{2}\\right)^k$.',
    options: ['$\\frac{1}{2}$', '$1$', '$\\frac{1}{4}$', '$\\frac{3}{4}$'],
    correctIndex: 0,
    explanation: 'Full sum is $2$. Subtract first two terms: $2 - 1 - \\frac{1}{2} = \\frac{1}{2}$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'If $\\sum_{k=0}^{n} r^k = 31$ and $r = 2$, find $n$.',
    options: ['$4$', '$5$', '$3$', '$6$'],
    correctIndex: 0,
    explanation: '$\\frac{1 - 2^{n+1}}{1 - 2} = 31 \\Rightarrow 2^{n+1} - 1 = 31 \\Rightarrow 2^{n+1} = 32 = 2^5 \\Rightarrow n + 1 = 5$, $n = 4$.'
  },

  // Additional Easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'In the sequence $1, 3, 9, 27, \\ldots$, what is the common ratio?',
    options: ['$3$', '$2$', '$9$', '$4$'],
    correctIndex: 0,
    explanation: 'Each term divided by the previous: $3/1 = 3$, $9/3 = 3$, etc.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'What is $1 + 3 + 9 + 27$?',
    options: ['$40$', '$39$', '$36$', '$30$'],
    correctIndex: 0,
    explanation: '$1 + 3 + 9 + 27 = 40$, or $\\frac{1 - 81}{1 - 3} = \\frac{-80}{-2} = 40$.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'For an infinite geometric series to converge, $r$ must satisfy:',
    options: ['$|r| < 1$', '$r > 1$', '$r = 1$', '$r \\neq 0$'],
    correctIndex: 0,
    explanation: 'Convergence requires $|r| < 1$ (common ratio magnitude less than $1$).'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'What is the sum $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$ (infinite)?',
    options: ['$1$', '$2$', '$\\frac{1}{2}$', '$\\infty$'],
    correctIndex: 0,
    explanation: '$\\frac{a}{1-r} = \\frac{1/2}{1 - 1/2} = \\frac{1/2}{1/2} = 1$.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'What is the first term of the series $2 + 6 + 18 + \\cdots$?',
    options: ['$2$', '$6$', '$3$', '$1$'],
    correctIndex: 0,
    explanation: 'The first term is $2$.'
  },

  // Additional Medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Compute $\\sum_{k=0}^{4} 3^k$.',
    options: ['$121$', '$81$', '$120$', '$243$'],
    correctIndex: 0,
    explanation: '$\\frac{1 - 3^5}{1 - 3} = \\frac{1 - 243}{-2} = \\frac{-242}{-2} = 121$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'Find $\\sum_{k=0}^{\\infty} \\left(\\frac{2}{5}\\right)^k$.',
    options: ['$\\frac{5}{3}$', '$\\frac{3}{5}$', '$2$', '$5$'],
    correctIndex: 0,
    explanation: '$\\frac{1}{1 - \\frac{2}{5}} = \\frac{1}{\\frac{3}{5}} = \\frac{5}{3}$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'Express $0.333\\ldots$ as a fraction.',
    options: ['$\\frac{1}{3}$', '$\\frac{3}{10}$', '$\\frac{33}{100}$', '$\\frac{3}{9}$'],
    correctIndex: 0,
    explanation: '$0.333\\ldots = \\frac{3/10}{1 - 1/10} = \\frac{3/10}{9/10} = \\frac{3}{9} = \\frac{1}{3}$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'Compute $2 + 4 + 8 + 16 + 32$.',
    options: ['$62$', '$64$', '$60$', '$56$'],
    correctIndex: 0,
    explanation: '$a = 2$, $r = 2$, $n = 5$. $S = 2 \\cdot \\frac{1 - 32}{1 - 2} = 2(31) = 62$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'Find $\\sum_{k=2}^{\\infty} \\left(\\frac{1}{3}\\right)^k$.',
    options: ['$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{3}{2}$'],
    correctIndex: 0,
    explanation: 'Full sum from $k=0$: $\\frac{3}{2}$. Subtract first two terms: $\\frac{3}{2} - 1 - \\frac{1}{3} = \\frac{1}{6}$.'
  },

  // Additional Hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'Find $\\sum_{k=0}^{\\infty} 3 \\cdot \\left(-\\frac{1}{4}\\right)^k$.',
    options: ['$\\frac{12}{5}$', '$\\frac{3}{4}$', '$4$', '$3$'],
    correctIndex: 0,
    explanation: '$\\frac{3}{1 - (-\\frac{1}{4})} = \\frac{3}{\\frac{5}{4}} = 3 \\cdot \\frac{4}{5} = \\frac{12}{5}$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'Express $0.272727\\ldots$ as a fraction.',
    options: ['$\\frac{27}{99} = \\frac{3}{11}$', '$\\frac{27}{100}$', '$\\frac{272}{999}$', '$\\frac{27}{90}$'],
    correctIndex: 0,
    explanation: '$0.272727\\ldots = \\frac{27/100}{1 - 1/100} = \\frac{27}{99} = \\frac{3}{11}$.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'For which values of $x$ does $\\sum_{k=0}^{\\infty} (2x)^k$ converge?',
    options: ['$|x| < \\frac{1}{2}$', '$x > 0$', '$|x| < 1$', 'All $x$'],
    correctIndex: 0,
    explanation: 'The series converges when $|2x| < 1$, i.e., $|x| < \\frac{1}{2}$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'Find $\\sum_{k=3}^{\\infty} \\left(\\frac{1}{2}\\right)^k$.',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{8}$', '$\\frac{1}{2}$', '$1$'],
    correctIndex: 0,
    explanation: 'Full sum is $2$. Subtract first three terms: $2 - 1 - \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'If $\\sum_{k=0}^{n} 3^k = 121$ and find $n$.',
    options: ['$4$', '$3$', '$5$', '$6$'],
    correctIndex: 0,
    explanation: '$\\frac{1 - 3^{n+1}}{1 - 3} = 121 \\Rightarrow \\frac{3^{n+1} - 1}{2} = 121 \\Rightarrow 3^{n+1} = 243 = 3^5 \\Rightarrow n = 4$.'
  }
];
