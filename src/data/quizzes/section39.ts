import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section39Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the vertex of the parabola $y = x^2$?',
    options: ['$(0, 0)$', '$(1, 1)$', '$(0, 1)$', '$(1, 0)$'],
    correctIndex: 0,
    explanation: 'The parabola $y = x^2$ has its minimum at $(0, 0)$, which is the vertex.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'Does the parabola $y = -2x^2$ open upward or downward?',
    options: ['Downward', 'Upward', 'Left', 'Right'],
    correctIndex: 0,
    explanation: 'When the coefficient of $x^2$ is negative ($a < 0$), the parabola opens downward.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is the vertex of $y = (x - 2)^2 + 3$?',
    options: ['$(2, 3)$', '$(-2, 3)$', '$(2, -3)$', '$(-2, -3)$'],
    correctIndex: 0,
    explanation: 'In vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k) = (2, 3)$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'Which axis does the parabola $y^2 = 4x$ have?',
    options: ['Horizontal ($x$-axis)', 'Vertical ($y$-axis)', 'Diagonal', 'None'],
    correctIndex: 0,
    explanation: 'When $y$ is squared and $x$ is linear, the axis is horizontal (parallel to $x$-axis).'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'A parabola opens upward when:',
    options: ['$a > 0$ in $y = ax^2$', '$a < 0$ in $y = ax^2$', '$p < 0$ in $x^2 = 4py$', 'Always'],
    correctIndex: 0,
    explanation: 'For $y = ax^2$, the parabola opens upward when $a > 0$.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Find the focus of the parabola $x^2 = 8y$.',
    options: ['$(0, 2)$', '$(0, 4)$', '$(2, 0)$', '$(0, 8)$'],
    correctIndex: 0,
    explanation: 'For $x^2 = 4py$, here $4p = 8$, so $p = 2$. Focus is at $(0, p) = (0, 2)$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Find the directrix of $y^2 = 16x$.',
    options: ['$x = -4$', '$x = 4$', '$y = -4$', '$y = 4$'],
    correctIndex: 0,
    explanation: 'For $y^2 = 4px$, here $4p = 16$, so $p = 4$. Directrix is $x = -p = -4$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'What is the length of the latus rectum of $x^2 = 12y$?',
    options: ['$12$', '$6$', '$3$', '$24$'],
    correctIndex: 0,
    explanation: 'For $x^2 = 4py$, the latus rectum length is $|4p|$. Here $4p = 12$, so length $= 12$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Find the vertex of $y = 2x^2 - 8x + 5$.',
    options: ['$(2, -3)$', '$(2, 3)$', '$(-2, -3)$', '$(4, 5)$'],
    correctIndex: 0,
    explanation: '$h = -\\frac{b}{2a} = \\frac{8}{4} = 2$. $k = 2(4) - 8(2) + 5 = 8 - 16 + 5 = -3$. Vertex $(2, -3)$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'The parabola $y^2 = -8x$ opens in which direction?',
    options: ['Left', 'Right', 'Up', 'Down'],
    correctIndex: 0,
    explanation: 'For $y^2 = 4px$ with $4p = -8$ ($p < 0$), the parabola opens left (toward negative $x$).'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Find the equation of the parabola with focus $(0, 3)$ and directrix $y = -3$.',
    options: ['$x^2 = 12y$', '$x^2 = 6y$', '$y^2 = 12x$', '$x^2 = -12y$'],
    correctIndex: 0,
    explanation: 'The vertex is midway between focus and directrix at $(0, 0)$. $p = 3$, so $x^2 = 4(3)y = 12y$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'For the parabola $(x - 1)^2 = 8(y + 2)$, find the focus.',
    options: ['$(1, 0)$', '$(1, -4)$', '$(3, -2)$', '$(1, 2)$'],
    correctIndex: 0,
    explanation: 'Vertex is $(1, -2)$. $4p = 8$, so $p = 2$. Focus is at $(1, -2 + 2) = (1, 0)$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'A point moves so its distance from $(3, 0)$ equals its distance from the line $x = -3$. What curve does it trace?',
    options: ['Parabola $y^2 = 12x$', 'Parabola $x^2 = 12y$', 'Circle', 'Ellipse'],
    correctIndex: 0,
    explanation: 'By definition, equal distance from focus $(3, 0)$ and directrix ($x = -3$) gives a parabola with $p = 3$: $y^2 = 4(3)x = 12x$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Find the equation of the tangent to $y = x^2$ at the point $(2, 4)$.',
    options: ['$y = 4x - 4$', '$y = 4x + 4$', '$y = 2x$', '$y = 2x + 4$'],
    correctIndex: 0,
    explanation: '$\\frac{dy}{dx} = 2x$. At $x = 2$, slope $= 4$. Tangent: $y - 4 = 4(x - 2)$, giving $y = 4x - 4$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'The parametric equations $x = t^2$, $y = 2t$ describe which parabola?',
    options: ['$y^2 = 4x$', '$x^2 = 4y$', '$y^2 = 2x$', '$x^2 = 2y$'],
    correctIndex: 0,
    explanation: 'From $y = 2t$, we get $t = \\frac{y}{2}$. Then $x = t^2 = \\frac{y^2}{4}$, so $y^2 = 4x$.'
  }
];
