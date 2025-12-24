import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section44Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the degree of $f(x) = 3x^4 - 2x^2 + 5$?',
    options: ['$4$', '$3$', '$2$', '$5$'],
    correctIndex: 0,
    explanation: 'The highest power of $x$ is $4$, so the degree is $4$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is the leading coefficient of $2x^3 - 5x^2 + x - 7$?',
    options: ['$2$', '$-5$', '$1$', '$-7$'],
    correctIndex: 0,
    explanation: 'The leading coefficient is the coefficient of the highest-degree term, which is $2$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'A quadratic polynomial has degree:',
    options: ['$2$', '$1$', '$3$', '$4$'],
    correctIndex: 0,
    explanation: 'Quadratic means degree $2$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is the constant term of $x^3 - 4x + 9$?',
    options: ['$9$', '$-4$', '$1$', '$0$'],
    correctIndex: 0,
    explanation: 'The constant term is the term without $x$, which is $9$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'If $f(2) = 0$ for polynomial $f(x)$, then $x = 2$ is called a:',
    options: ['Root', 'Coefficient', 'Degree', 'Leading term'],
    correctIndex: 0,
    explanation: 'A value where $f(x) = 0$ is called a root (or zero) of the polynomial.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'What is the degree of $(x^2 + 1)(x^3 - x)$?',
    options: ['$5$', '$6$', '$4$', '$3$'],
    correctIndex: 0,
    explanation: 'When multiplying polynomials, add the degrees: $2 + 3 = 5$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Compute $(2x^2 - 3x + 1) + (x^2 + 4x - 2)$.',
    options: ['$3x^2 + x - 1$', '$3x^2 - x + 1$', '$2x^2 + x - 1$', '$3x^2 + 7x - 1$'],
    correctIndex: 0,
    explanation: 'Combine like terms: $(2+1)x^2 + (-3+4)x + (1-2) = 3x^2 + x - 1$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'If $x = 3$ is a root of $f(x)$, which of the following is a factor?',
    options: ['$(x - 3)$', '$(x + 3)$', '$(x - \\frac{1}{3})$', '$(3x - 1)$'],
    correctIndex: 0,
    explanation: 'By the Factor Theorem, if $r$ is a root, then $(x - r)$ is a factor.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Find the roots of $x^2 - 5x + 6$.',
    options: ['$x = 2$ and $x = 3$', '$x = -2$ and $x = -3$', '$x = 1$ and $x = 6$', '$x = -1$ and $x = -6$'],
    correctIndex: 0,
    explanation: 'Factor: $(x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'As $x \\to +\\infty$, what happens to $f(x) = -2x^3 + x$?',
    options: ['$f(x) \\to -\\infty$', '$f(x) \\to +\\infty$', '$f(x) \\to 0$', '$f(x) \\to 1$'],
    correctIndex: 0,
    explanation: 'Leading term is $-2x^3$. Since coefficient is negative and degree is odd, $f(x) \\to -\\infty$ as $x \\to +\\infty$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'How many real roots can $x^4 + 1$ have?',
    options: ['$0$', '$2$', '$4$', '$1$'],
    correctIndex: 0,
    explanation: '$x^4 + 1 > 0$ for all real $x$ (since $x^4 \\geq 0$), so it has no real roots.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'If $f(x) = x^3 - 6x^2 + 11x - 6$, and $f(1) = 0$, factor $f(x)$ completely.',
    options: ['$(x-1)(x-2)(x-3)$', '$(x+1)(x+2)(x+3)$', '$(x-1)(x-1)(x-6)$', '$(x-1)(x^2-5x+6)$'],
    correctIndex: 0,
    explanation: '$f(1) = 0$ means $(x-1)$ is a factor. Dividing gives $x^2 - 5x + 6 = (x-2)(x-3)$. So $f(x) = (x-1)(x-2)(x-3)$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Use the Rational Root Theorem: possible rational roots of $2x^3 - 3x^2 - 8x + 12$ are:',
    options: ['$\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$', '$\\pm 1, \\pm 2, \\pm 3, \\pm 4$', '$\\pm 1, \\pm 12$', '$\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm 12$'],
    correctIndex: 0,
    explanation: '$p$ divides $12$: $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12$. $q$ divides $2$: $\\pm 1, \\pm 2$. Possible roots: $\\pm p/q$ combinations.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If a polynomial of degree $5$ has roots $1, 2, 3$ (each with multiplicity $1$), what is the minimum number of complex roots?',
    options: ['$2$', '$0$', '$3$', '$5$'],
    correctIndex: 0,
    explanation: 'Degree $5$ means $5$ roots total. $3$ are real ($1, 2, 3$). The remaining $2$ must be complex (and come in conjugate pairs if coefficients are real).'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Find the remainder when $x^{100} + x^{50} + 1$ is divided by $x - 1$.',
    options: ['$3$', '$1$', '$0$', '$2$'],
    correctIndex: 0,
    explanation: 'By the Remainder Theorem, the remainder is $f(1) = 1^{100} + 1^{50} + 1 = 1 + 1 + 1 = 3$.'
  },

  // Additional easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'What is the degree of $f(x) = 7$?',
    options: ['$0$', '$1$', '$7$', 'Undefined'],
    correctIndex: 0,
    explanation: 'A nonzero constant polynomial has degree $0$.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'A cubic polynomial has degree:',
    options: ['$3$', '$2$', '$4$', '$1$'],
    correctIndex: 0,
    explanation: 'Cubic means degree $3$.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'What is the leading coefficient of $-x^2 + 3x + 1$?',
    options: ['$-1$', '$1$', '$3$', '$0$'],
    correctIndex: 0,
    explanation: 'The coefficient of the highest-degree term $x^2$ is $-1$.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'If $f(x) = x^2 - 9$, what are the zeros?',
    options: ['$\\pm 3$', '$\\pm 9$', '$3$', '$9$'],
    correctIndex: 0,
    explanation: '$x^2 - 9 = 0$ gives $x^2 = 9$, so $x = \\pm 3$.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'As $x \\to +\\infty$, what happens to $f(x) = x^4$?',
    options: ['$f(x) \\to +\\infty$', '$f(x) \\to -\\infty$', '$f(x) \\to 0$', '$f(x) \\to 1$'],
    correctIndex: 0,
    explanation: 'For even degree with positive leading coefficient, $f(x) \\to +\\infty$ as $x \\to +\\infty$.'
  },

  // Additional medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Compute $(x + 2)(x - 3)$.',
    options: ['$x^2 - x - 6$', '$x^2 + x - 6$', '$x^2 - x + 6$', '$x^2 - 6$'],
    correctIndex: 0,
    explanation: '$(x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'Find the roots of $x^2 + 7x + 12$.',
    options: ['$x = -3$ and $x = -4$', '$x = 3$ and $x = 4$', '$x = -2$ and $x = -6$', '$x = 2$ and $x = 6$'],
    correctIndex: 0,
    explanation: 'Factor: $(x + 3)(x + 4) = 0$, so $x = -3$ or $x = -4$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'If $(x - 5)$ is a factor of $f(x)$, what is $f(5)$?',
    options: ['$0$', '$5$', '$-5$', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'By the Factor Theorem, if $(x - a)$ is a factor, then $f(a) = 0$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'Expand $(x - 1)^3$.',
    options: ['$x^3 - 3x^2 + 3x - 1$', '$x^3 - 1$', '$x^3 - 3x + 1$', '$x^3 + 3x^2 + 3x + 1$'],
    correctIndex: 0,
    explanation: '$(x - 1)^3 = x^3 - 3x^2(1) + 3x(1)^2 - 1^3 = x^3 - 3x^2 + 3x - 1$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'As $x \\to -\\infty$, what happens to $f(x) = x^5$?',
    options: ['$f(x) \\to -\\infty$', '$f(x) \\to +\\infty$', '$f(x) \\to 0$', '$f(x) \\to 1$'],
    correctIndex: 0,
    explanation: 'For odd degree, as $x \\to -\\infty$, $f(x) \\to -\\infty$ (since leading coefficient is positive).'
  },

  // Additional hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'How many complex roots does $x^3 + 1$ have?',
    options: ['$3$', '$1$', '$2$', '$0$'],
    correctIndex: 0,
    explanation: 'By the Fundamental Theorem of Algebra, a degree-$3$ polynomial has exactly $3$ complex roots (counting multiplicity).'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'Factor $x^3 + 8$ completely over the reals.',
    options: ['$(x + 2)(x^2 - 2x + 4)$', '$(x + 2)^3$', '$(x + 8)(x^2 + 1)$', '$(x + 2)(x - 2)^2$'],
    correctIndex: 0,
    explanation: '$x^3 + 8 = x^3 + 2^3 = (x + 2)(x^2 - 2x + 4)$ using sum of cubes formula.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'If $f(x) = x^4 - 5x^2 + 4$, find all real roots.',
    options: ['$\\pm 1, \\pm 2$', '$\\pm 2$', '$\\pm 1$', '$0, \\pm 2$'],
    correctIndex: 0,
    explanation: 'Let $u = x^2$: $u^2 - 5u + 4 = (u-1)(u-4) = 0$, so $u = 1$ or $u = 4$. Thus $x^2 = 1$ or $x^2 = 4$, giving $x = \\pm 1, \\pm 2$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'Find the quotient when $x^3 + 2x^2 - 5x - 6$ is divided by $(x + 1)$.',
    options: ['$x^2 + x - 6$', '$x^2 - x - 6$', '$x^2 + 2x - 6$', '$x^2 + x + 6$'],
    correctIndex: 0,
    explanation: 'By synthetic or long division, the quotient is $x^2 + x - 6$. Check: $(x+1)(x^2+x-6) = x^3 + 2x^2 - 5x - 6$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'A polynomial $f(x)$ has degree $4$ and exactly two real roots. How many complex (non-real) roots does it have?',
    options: ['$2$', '$0$', '$4$', '$1$'],
    correctIndex: 0,
    explanation: 'Total roots = $4$. With $2$ real roots, the remaining $2$ must be complex (occurring in conjugate pairs).'
  }
];
