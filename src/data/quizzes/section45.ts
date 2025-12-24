import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section45Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the $y$-intercept of $f(x) = 3x - 6$?',
    options: ['$-6$', '$3$', '$6$', '$0$'],
    correctIndex: 0,
    explanation: 'The $y$-intercept is $f(0) = 3(0) - 6 = -6$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'Is $f(x) = x^2$ even, odd, or neither?',
    options: ['Even', 'Odd', 'Neither', 'Both'],
    correctIndex: 0,
    explanation: '$f(-x) = (-x)^2 = x^2 = f(x)$, so $f$ is even.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'The graph of $y = f(x) + 3$ is the graph of $y = f(x)$ shifted:',
    options: ['Up $3$ units', 'Down $3$ units', 'Right $3$ units', 'Left $3$ units'],
    correctIndex: 0,
    explanation: 'Adding a constant to $f(x)$ shifts the graph vertically upward.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'The graph of $y = f(x - 2)$ is the graph of $y = f(x)$ shifted:',
    options: ['Right $2$ units', 'Left $2$ units', 'Up $2$ units', 'Down $2$ units'],
    correctIndex: 0,
    explanation: 'Replacing $x$ with $(x - 2)$ shifts the graph to the right.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What does the vertical line test determine?',
    options: ['Whether a curve is a function', 'The domain of a function', 'The range of a function', 'The slope'],
    correctIndex: 0,
    explanation: 'If every vertical line intersects a curve at most once, the curve is the graph of a function.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Is $f(x) = x^3 - x$ even, odd, or neither?',
    options: ['Odd', 'Even', 'Neither', 'Both'],
    correctIndex: 0,
    explanation: '$f(-x) = -x^3 + x = -(x^3 - x) = -f(x)$, so $f$ is odd.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Find the $x$-intercepts of $f(x) = x^2 - 4$.',
    options: ['$x = \\pm 2$', '$x = \\pm 4$', '$x = 2$', '$x = 4$'],
    correctIndex: 0,
    explanation: 'Set $f(x) = 0$: $x^2 - 4 = 0$, so $x^2 = 4$, giving $x = \\pm 2$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'The graph of $y = -f(x)$ is obtained by:',
    options: ['Reflecting across the $x$-axis', 'Reflecting across the $y$-axis', 'Shifting down', 'Shifting left'],
    correctIndex: 0,
    explanation: 'Multiplying by $-1$ reflects the graph across the $x$-axis.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'What is the vertex of $y = (x - 1)^2 - 4$?',
    options: ['$(1, -4)$', '$(-1, -4)$', '$(1, 4)$', '$(-1, 4)$'],
    correctIndex: 0,
    explanation: 'Vertex form $y = a(x - h)^2 + k$ gives vertex $(h, k) = (1, -4)$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'On what interval is $f(x) = x^2$ decreasing?',
    options: ['$(-\\infty, 0)$', '$(0, \\infty)$', '$(-\\infty, \\infty)$', 'Nowhere'],
    correctIndex: 0,
    explanation: 'The parabola $x^2$ decreases for $x < 0$ and increases for $x > 0$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'If $f$ is even and $f(2) = 5$, what is $f(-2)$?',
    options: ['$5$', '$-5$', '$0$', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'For even functions, $f(-x) = f(x)$, so $f(-2) = f(2) = 5$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'The graph of $y = 2f(3x)$ compared to $y = f(x)$ is:',
    options: ['Compressed horizontally by $3$, stretched vertically by $2$', 'Stretched horizontally by $3$, stretched vertically by $2$', 'Compressed both ways', 'Shifted and stretched'],
    correctIndex: 0,
    explanation: '$f(3x)$ compresses horizontally by factor $3$; multiplying by $2$ stretches vertically by $2$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Find the horizontal asymptote of $f(x) = \\frac{2x + 1}{x - 3}$.',
    options: ['$y = 2$', '$y = 0$', '$y = -\\frac{1}{3}$', '$y = 3$'],
    correctIndex: 0,
    explanation: 'As $x \\to \\infty$, $\\frac{2x + 1}{x - 3} \\approx \\frac{2x}{x} = 2$. Horizontal asymptote is $y = 2$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If $f(x) = x^2 + 1$ is even, is $g(x) = f(x - 1)$ even?',
    options: ['No', 'Yes', 'Cannot determine', 'Sometimes'],
    correctIndex: 0,
    explanation: '$g(x) = (x-1)^2 + 1$. $g(-x) = (-x-1)^2 + 1 = (x+1)^2 + 1 \\neq g(x)$ in general. So $g$ is not even.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'How many times does $y = x^3 - 3x + 1$ cross the $x$-axis?',
    options: ['$3$ times', '$1$ time', '$2$ times', '$0$ times'],
    correctIndex: 0,
    explanation: '$f(x) = x^3 - 3x + 1$. $f(-2) = -8 + 6 + 1 = -1 < 0$, $f(0) = 1 > 0$, $f(1) = -1 < 0$, $f(2) = 3 > 0$. Three sign changes means $3$ roots.'
  }
];
