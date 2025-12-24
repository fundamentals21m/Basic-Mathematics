import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section46Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is $2^3$?',
    options: ['$8$', '$6$', '$9$', '$5$'],
    correctIndex: 0,
    explanation: '$2^3 = 2 \\times 2 \\times 2 = 8$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'The function $f(x) = 3^x$ passes through which point?',
    options: ['$(0, 1)$', '$(1, 0)$', '$(0, 3)$', '$(3, 0)$'],
    correctIndex: 0,
    explanation: 'For any base $b$, $b^x = 1$ when $x = 0$. So $f(0) = 3^0 = 1$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'Is $f(x) = 2^x$ increasing or decreasing?',
    options: ['Increasing', 'Decreasing', 'Neither', 'Both'],
    correctIndex: 0,
    explanation: 'When $b > 1$, the exponential function $b^x$ is increasing.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is the horizontal asymptote of $f(x) = 5^x$?',
    options: ['$y = 0$', '$y = 1$', '$y = 5$', '$x = 0$'],
    correctIndex: 0,
    explanation: 'As $x \\to -\\infty$, $5^x \\to 0$. The horizontal asymptote is $y = 0$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is the approximate value of $e$?',
    options: ['$2.718$', '$3.14$', '$1.414$', '$2.0$'],
    correctIndex: 0,
    explanation: '$e \\approx 2.71828...$'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Simplify $2^4 \\cdot 2^3$.',
    options: ['$2^7$', '$2^{12}$', '$4^7$', '$2$'],
    correctIndex: 0,
    explanation: 'When multiplying same bases, add exponents: $2^4 \\cdot 2^3 = 2^{4+3} = 2^7$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Simplify $(3^2)^4$.',
    options: ['$3^8$', '$3^6$', '$9^4$', '$3^2$'],
    correctIndex: 0,
    explanation: 'Power of a power: multiply exponents. $(3^2)^4 = 3^8$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'If $f(x) = \\left(\\frac{1}{2}\\right)^x$, what is $f(3)$?',
    options: ['$\\frac{1}{8}$', '$\\frac{1}{6}$', '$8$', '$\\frac{3}{2}$'],
    correctIndex: 0,
    explanation: '$f(3) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'The range of $f(x) = e^x$ is:',
    options: ['$(0, \\infty)$', '$(-\\infty, \\infty)$', '$[0, \\infty)$', '$(1, \\infty)$'],
    correctIndex: 0,
    explanation: 'Exponential functions always output positive values: range is $(0, \\infty)$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Solve $2^x = 16$.',
    options: ['$x = 4$', '$x = 8$', '$x = 2$', '$x = 3$'],
    correctIndex: 0,
    explanation: '$16 = 2^4$, so $2^x = 2^4$ means $x = 4$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'If $\\$1000$ is invested at $6\\%$ compounded continuously, find the value after $5$ years (use $e^{0.3} \\approx 1.35$).',
    options: ['$\\$1350$', '$\\$1300$', '$\\$1060$', '$\\$1500$'],
    correctIndex: 0,
    explanation: '$A = 1000e^{0.06 \\times 5} = 1000e^{0.3} \\approx 1000(1.35) = \\$1350$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'A population doubles every $10$ years. If it starts at $1000$, what is it after $30$ years?',
    options: ['$8000$', '$3000$', '$4000$', '$6000$'],
    correctIndex: 0,
    explanation: '$30$ years $= 3$ doubling periods. $1000 \\times 2^3 = 1000 \\times 8 = 8000$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Solve $3^{2x} = 27$.',
    options: ['$x = \\frac{3}{2}$', '$x = 3$', '$x = 2$', '$x = 1$'],
    correctIndex: 0,
    explanation: '$27 = 3^3$, so $3^{2x} = 3^3$ means $2x = 3$, so $x = \\frac{3}{2}$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If $f(x) = e^{2x}$, find $x$ when $f(x) = e^6$.',
    options: ['$x = 3$', '$x = 6$', '$x = 2$', '$x = 12$'],
    correctIndex: 0,
    explanation: '$e^{2x} = e^6$ means $2x = 6$, so $x = 3$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'A substance decays by half every $4$ hours. What fraction remains after $12$ hours?',
    options: ['$\\frac{1}{8}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{1}{6}$'],
    correctIndex: 0,
    explanation: '$12$ hours $= 3$ half-lives. Remaining: $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.'
  },

  // Additional easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'What is $3^2$?',
    options: ['$9$', '$6$', '$8$', '$5$'],
    correctIndex: 0,
    explanation: '$3^2 = 3 \\times 3 = 9$.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'Is $f(x) = \\left(\\frac{1}{3}\\right)^x$ increasing or decreasing?',
    options: ['Decreasing', 'Increasing', 'Neither', 'Both'],
    correctIndex: 0,
    explanation: 'When $0 < b < 1$, the exponential function $b^x$ is decreasing.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'What is $2^0$?',
    options: ['$1$', '$0$', '$2$', 'Undefined'],
    correctIndex: 0,
    explanation: 'Any non-zero number to the power $0$ equals $1$.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'The domain of $f(x) = 2^x$ is:',
    options: ['All real numbers', '$x > 0$', '$x \\geq 0$', '$x \\neq 0$'],
    correctIndex: 0,
    explanation: 'Exponential functions are defined for all real numbers.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'What is $10^2$?',
    options: ['$100$', '$20$', '$1000$', '$10$'],
    correctIndex: 0,
    explanation: '$10^2 = 10 \\times 10 = 100$.'
  },

  // Additional medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Simplify $\\frac{2^5}{2^2}$.',
    options: ['$2^3$', '$2^7$', '$2^{10}$', '$1$'],
    correctIndex: 0,
    explanation: 'When dividing same bases, subtract exponents: $\\frac{2^5}{2^2} = 2^{5-2} = 2^3$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'Simplify $(5^3)^2$.',
    options: ['$5^6$', '$5^5$', '$25^3$', '$5^9$'],
    correctIndex: 0,
    explanation: 'Power of a power: multiply exponents. $(5^3)^2 = 5^{3 \\cdot 2} = 5^6$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'If $f(x) = 4^x$, what is $f(-2)$?',
    options: ['$\\frac{1}{16}$', '$-16$', '$16$', '$-8$'],
    correctIndex: 0,
    explanation: '$f(-2) = 4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'Solve $5^x = 125$.',
    options: ['$x = 3$', '$x = 25$', '$x = 5$', '$x = 15$'],
    correctIndex: 0,
    explanation: '$125 = 5^3$, so $5^x = 5^3$ means $x = 3$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'What is the $y$-intercept of $f(x) = 4 \\cdot 2^x$?',
    options: ['$4$', '$2$', '$8$', '$1$'],
    correctIndex: 0,
    explanation: '$f(0) = 4 \\cdot 2^0 = 4 \\cdot 1 = 4$.'
  },

  // Additional hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'If $\\$2000$ is invested at $5\\%$ compounded annually, find the value after $3$ years.',
    options: ['$\\$2315.25$', '$\\$2300$', '$\\$2150$', '$\\$2500$'],
    correctIndex: 0,
    explanation: '$A = 2000(1.05)^3 = 2000(1.157625) = \\$2315.25$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'A population triples every $5$ years. If it starts at $500$, what is it after $15$ years?',
    options: ['$13500$', '$4500$', '$1500$', '$6000$'],
    correctIndex: 0,
    explanation: '$15$ years $= 3$ tripling periods. $500 \\times 3^3 = 500 \\times 27 = 13500$.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'Solve $4^{x+1} = 32$.',
    options: ['$x = \\frac{3}{2}$', '$x = 3$', '$x = 2$', '$x = \\frac{5}{2}$'],
    correctIndex: 0,
    explanation: '$4^{x+1} = (2^2)^{x+1} = 2^{2x+2} = 32 = 2^5$. So $2x + 2 = 5$, giving $x = \\frac{3}{2}$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'If $f(x) = e^{-x}$, find $x$ when $f(x) = e^3$.',
    options: ['$x = -3$', '$x = 3$', '$x = \\frac{1}{3}$', '$x = -\\frac{1}{3}$'],
    correctIndex: 0,
    explanation: '$e^{-x} = e^3$ means $-x = 3$, so $x = -3$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'A radioactive substance decays by $20\\%$ every hour. What fraction remains after $3$ hours?',
    options: ['$0.512$ or $\\frac{64}{125}$', '$0.6$', '$0.4$', '$0.8$'],
    correctIndex: 0,
    explanation: 'After each hour, $80\\% = 0.8$ remains. After $3$ hours: $(0.8)^3 = 0.512 = \\frac{64}{125}$.'
  }
];
