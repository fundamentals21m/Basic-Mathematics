import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section40Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What shape is described by $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$?',
    options: ['Ellipse', 'Circle', 'Parabola', 'Hyperbola'],
    correctIndex: 0,
    explanation: 'This is the standard form of an ellipse with $a^2 = 9$ and $b^2 = 4$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'For $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$, what is the semi-major axis?',
    options: ['$5$', '$4$', '$25$', '$16$'],
    correctIndex: 0,
    explanation: 'The larger denominator is $a^2 = 25$, so $a = 5$ is the semi-major axis.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'An ellipse has how many foci?',
    options: ['Two', 'One', 'Three', 'None'],
    correctIndex: 0,
    explanation: 'By definition, an ellipse has exactly two foci.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'If $a = b$ in $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, what shape results?',
    options: ['Circle', 'Ellipse', 'Line', 'Point'],
    correctIndex: 0,
    explanation: 'When $a = b$, the equation becomes $x^2 + y^2 = a^2$, which is a circle.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'For an ellipse, the eccentricity $e$ satisfies:',
    options: ['$0 < e < 1$', '$e = 1$', '$e > 1$', '$e = 0$'],
    correctIndex: 0,
    explanation: 'Ellipses have eccentricity between $0$ and $1$. A circle has $e = 0$, and $e = 1$ gives a parabola.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Find $c$ (distance from center to focus) for $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.',
    options: ['$4$', '$5$', '$3$', '$16$'],
    correctIndex: 0,
    explanation: '$c^2 = a^2 - b^2 = 25 - 9 = 16$, so $c = 4$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What is the eccentricity of $\\frac{x^2}{5} + \\frac{y^2}{4} = 1$?',
    options: ['$\\frac{1}{\\sqrt{5}}$', '$\\frac{\\sqrt{5}}{5}$', '$\\frac{4}{5}$', '$\\frac{1}{5}$'],
    correctIndex: 0,
    explanation: '$a^2 = 5$, $b^2 = 4$, $c^2 = 5 - 4 = 1$, $c = 1$. $e = \\frac{c}{a} = \\frac{1}{\\sqrt{5}}$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Find the vertices of $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$.',
    options: ['$(\\pm 4, 0)$', '$(\\pm 3, 0)$', '$(0, \\pm 4)$', '$(0, \\pm 3)$'],
    correctIndex: 0,
    explanation: 'Since $a^2 = 16 > b^2 = 9$, major axis is horizontal. Vertices at $(\\pm a, 0) = (\\pm 4, 0)$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'For the ellipse $\\frac{x^2}{36} + \\frac{y^2}{20} = 1$, find the foci.',
    options: ['$(\\pm 4, 0)$', '$(\\pm 6, 0)$', '$(0, \\pm 4)$', '$(\\pm 2\\sqrt{5}, 0)$'],
    correctIndex: 0,
    explanation: '$c^2 = 36 - 20 = 16$, $c = 4$. Major axis is horizontal, so foci are $(\\pm 4, 0)$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'What is the center of $\\frac{(x-3)^2}{4} + \\frac{(y+2)^2}{9} = 1$?',
    options: ['$(3, -2)$', '$(-3, 2)$', '$(3, 2)$', '$(-3, -2)$'],
    correctIndex: 0,
    explanation: 'The center is at $(h, k)$ where the equation has $(x - h)^2$ and $(y - k)^2$. Here $h = 3$, $k = -2$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'An ellipse has foci at $(\\pm 3, 0)$ and passes through $(5, 0)$. Find the equation.',
    options: ['$\\frac{x^2}{25} + \\frac{y^2}{16} = 1$', '$\\frac{x^2}{16} + \\frac{y^2}{25} = 1$', '$\\frac{x^2}{9} + \\frac{y^2}{16} = 1$', '$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$'],
    correctIndex: 0,
    explanation: '$c = 3$. The point $(5, 0)$ is a vertex, so $a = 5$. $b^2 = a^2 - c^2 = 25 - 9 = 16$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Find the sum of distances from $(3, \\frac{12}{5})$ to the foci of $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.',
    options: ['$10$', '$6$', '$8$', '$5$'],
    correctIndex: 0,
    explanation: 'For any point on the ellipse, the sum of distances to foci equals $2a = 2(5) = 10$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'An ellipse has eccentricity $\\frac{3}{5}$ and semi-major axis $5$. Find the semi-minor axis.',
    options: ['$4$', '$3$', '$5$', '$2$'],
    correctIndex: 0,
    explanation: '$e = \\frac{c}{a} = \\frac{3}{5}$, so $c = 3$. $b^2 = a^2 - c^2 = 25 - 9 = 16$, $b = 4$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Find the equation of the ellipse with foci $(0, \\pm 4)$ and vertices $(0, \\pm 5)$.',
    options: ['$\\frac{x^2}{9} + \\frac{y^2}{25} = 1$', '$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$', '$\\frac{x^2}{16} + \\frac{y^2}{25} = 1$', '$\\frac{x^2}{25} + \\frac{y^2}{16} = 1$'],
    correctIndex: 0,
    explanation: 'Vertical major axis: $a = 5$, $c = 4$, $b^2 = 25 - 16 = 9$. Equation: $\\frac{x^2}{9} + \\frac{y^2}{25} = 1$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'What is the length of the latus rectum of $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$?',
    options: ['$\\frac{9}{2}$', '$8$', '$\\frac{9}{4}$', '$\\frac{16}{3}$'],
    correctIndex: 0,
    explanation: 'Latus rectum $= \\frac{2b^2}{a} = \\frac{2(9)}{4} = \\frac{18}{4} = \\frac{9}{2}$.'
  },

  // Additional Easy questions (16-20)
  {
    id: 16,
    difficulty: 'easy',
    question: 'An ellipse is symmetric about which lines?',
    options: ['Both axes through its center', 'The $x$-axis only', 'The $y$-axis only', 'The line $y = x$'],
    correctIndex: 0,
    explanation: 'An ellipse is symmetric about both the major and minor axes passing through the center.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'For $\\frac{x^2}{9} + \\frac{y^2}{16} = 1$, what is the semi-minor axis?',
    options: ['$3$', '$4$', '$9$', '$16$'],
    correctIndex: 0,
    explanation: 'The smaller denominator is $b^2 = 9$, so $b = 3$ is the semi-minor axis.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'What is the center of $\\frac{x^2}{4} + \\frac{y^2}{9} = 1$?',
    options: ['$(0, 0)$', '$(2, 3)$', '$(4, 9)$', '$(1, 1)$'],
    correctIndex: 0,
    explanation: 'The standard form is centered at the origin $(0, 0)$.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'For an ellipse, $c$ (distance from center to focus) is related to $a$ and $b$ by:',
    options: ['$c^2 = a^2 - b^2$', '$c^2 = a^2 + b^2$', '$c = a - b$', '$c = a + b$'],
    correctIndex: 0,
    explanation: 'For an ellipse, $c^2 = a^2 - b^2$ where $a > b$.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'The major axis of an ellipse is:',
    options: ['The longest diameter', 'The shortest diameter', 'Always horizontal', 'Always vertical'],
    correctIndex: 0,
    explanation: 'The major axis is the longest diameter, passing through both foci and the center.'
  },

  // Additional Medium questions (21-25)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Find $c$ (distance from center to focus) for $\\frac{x^2}{36} + \\frac{y^2}{20} = 1$.',
    options: ['$4$', '$6$', '$\\sqrt{20}$', '$16$'],
    correctIndex: 0,
    explanation: '$c^2 = a^2 - b^2 = 36 - 20 = 16$, so $c = 4$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'What is the eccentricity of $\\frac{x^2}{9} + \\frac{y^2}{5} = 1$?',
    options: ['$\\frac{2}{3}$', '$\\frac{\\sqrt{5}}{3}$', '$\\frac{2}{\\sqrt{5}}$', '$\\frac{4}{9}$'],
    correctIndex: 0,
    explanation: '$a^2 = 9$, $b^2 = 5$, $c^2 = 9 - 5 = 4$, $c = 2$. $e = \\frac{c}{a} = \\frac{2}{3}$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'Find the vertices of $\\frac{x^2}{9} + \\frac{y^2}{25} = 1$.',
    options: ['$(0, \\pm 5)$', '$(\\pm 3, 0)$', '$(\\pm 5, 0)$', '$(0, \\pm 3)$'],
    correctIndex: 0,
    explanation: 'Since $a^2 = 25 > b^2 = 9$, major axis is vertical. Vertices at $(0, \\pm a) = (0, \\pm 5)$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'For the ellipse $\\frac{x^2}{49} + \\frac{y^2}{24} = 1$, find the foci.',
    options: ['$(\\pm 5, 0)$', '$(\\pm 7, 0)$', '$(0, \\pm 5)$', '$(\\pm \\sqrt{24}, 0)$'],
    correctIndex: 0,
    explanation: '$c^2 = 49 - 24 = 25$, $c = 5$. Major axis is horizontal, so foci are $(\\pm 5, 0)$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'What is the center of $\\frac{(x-2)^2}{16} + \\frac{(y+1)^2}{4} = 1$?',
    options: ['$(2, -1)$', '$(-2, 1)$', '$(2, 1)$', '$(-2, -1)$'],
    correctIndex: 0,
    explanation: 'The center is at $(h, k)$ where the equation has $(x - h)^2$ and $(y - k)^2$. Here $h = 2$, $k = -1$.'
  },

  // Additional Hard questions (26-30)
  {
    id: 26,
    difficulty: 'hard',
    question: 'An ellipse has foci at $(\\pm 4, 0)$ and passes through $(6, 0)$. Find the equation.',
    options: ['$\\frac{x^2}{36} + \\frac{y^2}{20} = 1$', '$\\frac{x^2}{20} + \\frac{y^2}{36} = 1$', '$\\frac{x^2}{16} + \\frac{y^2}{36} = 1$', '$\\frac{x^2}{36} + \\frac{y^2}{16} = 1$'],
    correctIndex: 0,
    explanation: '$c = 4$. The point $(6, 0)$ is a vertex, so $a = 6$. $b^2 = a^2 - c^2 = 36 - 16 = 20$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'Find the sum of distances from $(4, \\frac{12}{5})$ to the foci of $\\frac{x^2}{36} + \\frac{y^2}{20} = 1$.',
    options: ['$12$', '$10$', '$8$', '$6$'],
    correctIndex: 0,
    explanation: 'For any point on the ellipse, the sum of distances to foci equals $2a = 2(6) = 12$.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'An ellipse has eccentricity $\\frac{4}{5}$ and semi-major axis $10$. Find the semi-minor axis.',
    options: ['$6$', '$8$', '$4$', '$5$'],
    correctIndex: 0,
    explanation: '$e = \\frac{c}{a} = \\frac{4}{5}$, so $c = 8$. $b^2 = a^2 - c^2 = 100 - 64 = 36$, $b = 6$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'Find the equation of the ellipse with foci $(0, \\pm 3)$ and vertices $(0, \\pm 6)$.',
    options: ['$\\frac{x^2}{27} + \\frac{y^2}{36} = 1$', '$\\frac{x^2}{36} + \\frac{y^2}{27} = 1$', '$\\frac{x^2}{9} + \\frac{y^2}{36} = 1$', '$\\frac{x^2}{36} + \\frac{y^2}{9} = 1$'],
    correctIndex: 0,
    explanation: 'Vertical major axis: $a = 6$, $c = 3$, $b^2 = 36 - 9 = 27$. Equation: $\\frac{x^2}{27} + \\frac{y^2}{36} = 1$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'What is the length of the latus rectum of $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$?',
    options: ['$\\frac{32}{5}$', '$10$', '$\\frac{16}{5}$', '$\\frac{25}{4}$'],
    correctIndex: 0,
    explanation: 'Latus rectum $= \\frac{2b^2}{a} = \\frac{2(16)}{5} = \\frac{32}{5}$.'
  }
];
