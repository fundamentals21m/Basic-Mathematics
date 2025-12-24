import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section47Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is $\\log_2(8)$?',
    options: ['$3$', '$2$', '$4$', '$8$'],
    correctIndex: 0,
    explanation: '$\\log_2(8) = 3$ because $2^3 = 8$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is $\\log_{10}(100)$?',
    options: ['$2$', '$10$', '$100$', '$1$'],
    correctIndex: 0,
    explanation: '$\\log_{10}(100) = 2$ because $10^2 = 100$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is $\\log_b(1)$ for any valid base $b$?',
    options: ['$0$', '$1$', '$b$', 'Undefined'],
    correctIndex: 0,
    explanation: '$\\log_b(1) = 0$ because $b^0 = 1$ for any $b$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is $\\ln(e)$?',
    options: ['$1$', '$e$', '$0$', '$2.718$'],
    correctIndex: 0,
    explanation: '$\\ln(e) = \\log_e(e) = 1$ because $e^1 = e$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'The domain of $f(x) = \\log(x)$ is:',
    options: ['$x > 0$', 'All real numbers', '$x \\geq 0$', '$x \\neq 0$'],
    correctIndex: 0,
    explanation: 'Logarithms are only defined for positive arguments.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Simplify $\\log_3(27)$.',
    options: ['$3$', '$9$', '$27$', '$1$'],
    correctIndex: 0,
    explanation: '$\\log_3(27) = \\log_3(3^3) = 3$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Expand $\\log(xy^2)$.',
    options: ['$\\log x + 2\\log y$', '$\\log x \\cdot \\log y^2$', '$2\\log(xy)$', '$\\log x + \\log y + \\log 2$'],
    correctIndex: 0,
    explanation: '$\\log(xy^2) = \\log x + \\log(y^2) = \\log x + 2\\log y$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Condense $2\\log x - \\log y$ into a single logarithm.',
    options: ['$\\log\\left(\\frac{x^2}{y}\\right)$', '$\\log\\left(\\frac{2x}{y}\\right)$', '$\\log(x^2y)$', '$\\log(x - y)^2$'],
    correctIndex: 0,
    explanation: '$2\\log x - \\log y = \\log(x^2) - \\log(y) = \\log\\left(\\frac{x^2}{y}\\right)$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Solve $\\log_2(x) = 5$.',
    options: ['$32$', '$25$', '$10$', '$16$'],
    correctIndex: 0,
    explanation: '$\\log_2(x) = 5$ means $x = 2^5 = 32$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'What is $\\log_4(2)$?',
    options: ['$\\frac{1}{2}$', '$2$', '$1$', '$\\frac{1}{4}$'],
    correctIndex: 0,
    explanation: '$4^{1/2} = 2$, so $\\log_4(2) = \\frac{1}{2}$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Express $\\log_2(10)$ using natural logarithms.',
    options: ['$\\frac{\\ln(10)}{\\ln(2)}$', '$\\frac{\\ln(2)}{\\ln(10)}$', '$\\ln(10) - \\ln(2)$', '$\\ln(10) \\cdot \\ln(2)$'],
    correctIndex: 0,
    explanation: 'By change of base: $\\log_2(10) = \\frac{\\ln(10)}{\\ln(2)}$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Solve $2^x = 7$.',
    options: ['$\\log_2(7)$ or $\\frac{\\ln(7)}{\\ln(2)}$', '$\\frac{7}{2}$', '$\\log_7(2)$', '$2\\log 7$'],
    correctIndex: 0,
    explanation: 'Taking $\\log_2$ of both sides: $x = \\log_2(7) = \\frac{\\ln(7)}{\\ln(2)}$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Solve $\\log(x) + \\log(x - 3) = 1$.',
    options: ['$x = 5$', '$x = 10$', '$x = 3$', '$x = 13$'],
    correctIndex: 0,
    explanation: '$\\log(x(x-3)) = 1$ means $x(x-3) = 10$, so $x^2 - 3x - 10 = 0$, $(x-5)(x+2) = 0$. Since $x > 3$ required, $x = 5$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If $\\log_2(a) = 3$ and $\\log_2(b) = 5$, find $\\log_2(a^2b)$.',
    options: ['$11$', '$8$', '$15$', '$13$'],
    correctIndex: 0,
    explanation: '$\\log_2(a^2b) = 2\\log_2(a) + \\log_2(b) = 2(3) + 5 = 11$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Simplify $\\log_8(4)$.',
    options: ['$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{3}{2}$', '$\\frac{4}{8}$'],
    correctIndex: 0,
    explanation: '$8^x = 4$ means $(2^3)^x = 2^2$, so $3x = 2$, $x = \\frac{2}{3}$. Thus $\\log_8(4) = \\frac{2}{3}$.'
  },

  // Additional easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'What is $\\log_5(25)$?',
    options: ['$2$', '$5$', '$25$', '$1$'],
    correctIndex: 0,
    explanation: '$\\log_5(25) = 2$ because $5^2 = 25$.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'What is $\\log_b(b)$ for any valid base $b$?',
    options: ['$1$', '$0$', '$b$', 'Undefined'],
    correctIndex: 0,
    explanation: '$\\log_b(b) = 1$ because $b^1 = b$.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'What is $\\log(1000)$ (base $10$)?',
    options: ['$3$', '$10$', '$100$', '$1000$'],
    correctIndex: 0,
    explanation: '$\\log_{10}(1000) = 3$ because $10^3 = 1000$.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'What is $\\ln(1)$?',
    options: ['$0$', '$1$', '$e$', 'Undefined'],
    correctIndex: 0,
    explanation: '$\\ln(1) = \\log_e(1) = 0$ because $e^0 = 1$.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'The range of $f(x) = \\log(x)$ is:',
    options: ['All real numbers', '$y > 0$', '$y \\geq 0$', '$y \\neq 0$'],
    correctIndex: 0,
    explanation: 'Logarithmic functions can output any real number.'
  },

  // Additional medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Simplify $\\log_5(125)$.',
    options: ['$3$', '$5$', '$25$', '$1$'],
    correctIndex: 0,
    explanation: '$\\log_5(125) = \\log_5(5^3) = 3$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'Expand $\\log\\left(\\frac{x}{y^3}\\right)$.',
    options: ['$\\log x - 3\\log y$', '$\\frac{\\log x}{\\log y^3}$', '$\\log x - \\log y - \\log 3$', '$\\log x \\div 3\\log y$'],
    correctIndex: 0,
    explanation: '$\\log\\left(\\frac{x}{y^3}\\right) = \\log x - \\log(y^3) = \\log x - 3\\log y$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'Condense $3\\log x + \\log y$ into a single logarithm.',
    options: ['$\\log(x^3y)$', '$\\log(3xy)$', '$3\\log(xy)$', '$\\log(x + 3y)$'],
    correctIndex: 0,
    explanation: '$3\\log x + \\log y = \\log(x^3) + \\log(y) = \\log(x^3y)$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'Solve $\\log_3(x) = 4$.',
    options: ['$81$', '$12$', '$64$', '$27$'],
    correctIndex: 0,
    explanation: '$\\log_3(x) = 4$ means $x = 3^4 = 81$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'What is $\\log_9(3)$?',
    options: ['$\\frac{1}{2}$', '$2$', '$3$', '$\\frac{1}{3}$'],
    correctIndex: 0,
    explanation: '$9^{1/2} = 3$, so $\\log_9(3) = \\frac{1}{2}$.'
  },

  // Additional hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'Express $\\log_5(20)$ using common logarithms.',
    options: ['$\\frac{\\log(20)}{\\log(5)}$', '$\\frac{\\log(5)}{\\log(20)}$', '$\\log(20) - \\log(5)$', '$\\log(20) \\cdot \\log(5)$'],
    correctIndex: 0,
    explanation: 'By change of base: $\\log_5(20) = \\frac{\\log(20)}{\\log(5)}$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'Solve $3^x = 10$.',
    options: ['$\\log_3(10)$ or $\\frac{\\ln(10)}{\\ln(3)}$', '$\\frac{10}{3}$', '$\\log_{10}(3)$', '$3\\log 10$'],
    correctIndex: 0,
    explanation: 'Taking $\\log_3$ of both sides: $x = \\log_3(10) = \\frac{\\ln(10)}{\\ln(3)}$.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'Solve $\\log(x) + \\log(x + 9) = 1$.',
    options: ['$x = 1$', '$x = 10$', '$x = 9$', '$x = -10$'],
    correctIndex: 0,
    explanation: '$\\log(x(x+9)) = 1$ means $x(x+9) = 10$, so $x^2 + 9x - 10 = 0$, $(x+10)(x-1) = 0$. Since $x > 0$ required, $x = 1$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'If $\\log_3(a) = 2$ and $\\log_3(b) = 4$, find $\\log_3\\left(\\frac{a}{b^2}\\right)$.',
    options: ['$-6$', '$-2$', '$2$', '$6$'],
    correctIndex: 0,
    explanation: '$\\log_3\\left(\\frac{a}{b^2}\\right) = \\log_3(a) - 2\\log_3(b) = 2 - 2(4) = -6$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'Simplify $\\log_{16}(8)$.',
    options: ['$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{4}{3}$', '$\\frac{2}{3}$'],
    correctIndex: 0,
    explanation: '$16^x = 8$ means $(2^4)^x = 2^3$, so $4x = 3$, $x = \\frac{3}{4}$. Thus $\\log_{16}(8) = \\frac{3}{4}$.'
  }
];
