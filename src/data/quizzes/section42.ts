import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section42Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What type of curve is $xy = 4$?',
    options: ['Hyperbola', 'Ellipse', 'Parabola', 'Circle'],
    correctIndex: 0,
    explanation: 'The equation $xy = c$ (with $c \\neq 0$) represents a rectangular hyperbola.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What are the asymptotes of $xy = 1$?',
    options: ['$x = 0$ and $y = 0$', '$y = x$ and $y = -x$', '$y = 1$ and $x = 1$', 'None'],
    correctIndex: 0,
    explanation: 'For $xy = c$, the asymptotes are the coordinate axes: $x = 0$ and $y = 0$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'In which quadrants does the hyperbola $xy = 2$ lie?',
    options: ['First and third', 'Second and fourth', 'First and second', 'All four'],
    correctIndex: 0,
    explanation: 'When $xy > 0$, $x$ and $y$ have the same sign, so the curve lies in quadrants I and III.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What rotation angle transforms $xy = c$ to standard form?',
    options: ['$45°$', '$90°$', '$30°$', '$60°$'],
    correctIndex: 0,
    explanation: 'A $45°$ rotation eliminates the $xy$ term and gives $X^2 - Y^2 = 2c$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'If $B^2 - 4AC > 0$, the conic is a:',
    options: ['Hyperbola', 'Ellipse', 'Parabola', 'Circle'],
    correctIndex: 0,
    explanation: 'The discriminant $B^2 - 4AC > 0$ indicates a hyperbola.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Rotate $xy = 3$ by $45°$. What is the new equation in $X$, $Y$ coordinates?',
    options: ['$X^2 - Y^2 = 6$', '$X^2 + Y^2 = 6$', '$X^2 - Y^2 = 3$', '$X^2 + Y^2 = 3$'],
    correctIndex: 0,
    explanation: 'Using the $45°$ rotation, $xy = c$ becomes $X^2 - Y^2 = 2c = 2(3) = 6$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'For the hyperbola $xy = 4$, find a point on the curve.',
    options: ['$(2, 2)$', '$(2, 4)$', '$(4, 4)$', '$(1, 1)$'],
    correctIndex: 0,
    explanation: 'Check: $2 \\times 2 = 4$. Yes, $(2, 2)$ is on $xy = 4$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Classify the conic $3x^2 + 6xy + 3y^2 = 5$.',
    options: ['Parabola (degenerate)', 'Ellipse', 'Hyperbola', 'Circle'],
    correctIndex: 0,
    explanation: '$\\Delta = B^2 - 4AC = 36 - 36 = 0$, indicating a parabola (or degenerate case).'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Find $\\cot 2\\theta$ to eliminate $xy$ from $x^2 + 2xy + y^2 = 4$.',
    options: ['$0$', '$1$', '$-1$', 'Undefined'],
    correctIndex: 0,
    explanation: '$\\cot 2\\theta = \\frac{A - C}{B} = \\frac{1 - 1}{2} = 0$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'The hyperbola $xy = -1$ lies in which quadrants?',
    options: ['Second and fourth', 'First and third', 'All four', 'None'],
    correctIndex: 0,
    explanation: 'When $xy < 0$, $x$ and $y$ have opposite signs, so the curve is in quadrants II and IV.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'After rotating $xy = 8$ by $45°$, what are the vertices of the resulting hyperbola?',
    options: ['$(\\pm 4, 0)$ in $XY$-coordinates', '$(\\pm 2\\sqrt{2}, 0)$ in $XY$-coordinates', '$(\\pm 8, 0)$ in $XY$-coordinates', '$(\\pm 2, 0)$ in $XY$-coordinates'],
    correctIndex: 0,
    explanation: '$X^2 - Y^2 = 16$, so $\\frac{X^2}{16} - \\frac{Y^2}{16} = 1$. Vertices at $(\\pm 4, 0)$ in the rotated system.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Classify $4x^2 - 4xy + y^2 - 6x = 0$.',
    options: ['Parabola', 'Ellipse', 'Hyperbola', 'Circle'],
    correctIndex: 0,
    explanation: '$\\Delta = (-4)^2 - 4(4)(1) = 16 - 16 = 0$, so this is a parabola.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'For $xy = 2$, find the eccentricity after converting to standard form.',
    options: ['$\\sqrt{2}$', '$2$', '$1$', '$\\sqrt{3}$'],
    correctIndex: 0,
    explanation: 'After $45°$ rotation: $X^2 - Y^2 = 4$, or $\\frac{X^2}{4} - \\frac{Y^2}{4} = 1$. Here $a = b = 2$, $c^2 = 8$, $c = 2\\sqrt{2}$. $e = \\frac{c}{a} = \\sqrt{2}$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Find the rotation angle $\\theta$ to eliminate $xy$ from $x^2 + 4xy - 2y^2 = 0$.',
    options: ['$\\theta = \\frac{1}{2}\\arctan\\left(\\frac{4}{3}\\right)$', '$\\theta = 45°$', '$\\theta = 30°$', '$\\theta = 60°$'],
    correctIndex: 0,
    explanation: '$\\cot 2\\theta = \\frac{A-C}{B} = \\frac{1-(-2)}{4} = \\frac{3}{4}$. So $\\tan 2\\theta = \\frac{4}{3}$, and $\\theta = \\frac{1}{2}\\arctan\\left(\\frac{4}{3}\\right)$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'The equation $2x^2 + 4xy + 2y^2 + x + y = 0$ can be factored. What does it represent?',
    options: ['Two lines', 'A parabola', 'An ellipse', 'A hyperbola'],
    correctIndex: 0,
    explanation: '$\\Delta = 16 - 16 = 0$ (parabola/degenerate). Factor: $2(x + y)^2 + (x + y) = (x + y)(2x + 2y + 1) = 0$. Two lines: $x + y = 0$ and $2x + 2y + 1 = 0$.'
  }
];
