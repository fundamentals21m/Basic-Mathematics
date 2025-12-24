import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section41Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What shape is $\\frac{x^2}{9} - \\frac{y^2}{4} = 1$?',
    options: ['Hyperbola', 'Ellipse', 'Circle', 'Parabola'],
    correctIndex: 0,
    explanation: 'The minus sign between the squared terms indicates a hyperbola.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'How many branches does a hyperbola have?',
    options: ['Two', 'One', 'Three', 'Four'],
    correctIndex: 0,
    explanation: 'A hyperbola consists of two separate branches.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'For a hyperbola, the eccentricity $e$ satisfies:',
    options: ['$e > 1$', '$e = 1$', '$0 < e < 1$', '$e = 0$'],
    correctIndex: 0,
    explanation: 'Hyperbolas always have eccentricity greater than $1$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'For $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$, the transverse axis is:',
    options: ['Horizontal', 'Vertical', 'Diagonal', 'None'],
    correctIndex: 0,
    explanation: 'When $x^2$ is positive and comes first, the transverse axis is horizontal.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What are the vertices of $\\frac{x^2}{25} - \\frac{y^2}{16} = 1$?',
    options: ['$(\\pm 5, 0)$', '$(\\pm 4, 0)$', '$(0, \\pm 5)$', '$(0, \\pm 4)$'],
    correctIndex: 0,
    explanation: 'Vertices are at $(\\pm a, 0) = (\\pm 5, 0)$ for a horizontal hyperbola.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Find $c$ for the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$.',
    options: ['$5$', '$7$', '$25$', '$4$'],
    correctIndex: 0,
    explanation: '$c^2 = a^2 + b^2 = 9 + 16 = 25$, so $c = 5$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What are the asymptotes of $\\frac{x^2}{4} - \\frac{y^2}{9} = 1$?',
    options: ['$y = \\pm\\frac{3}{2}x$', '$y = \\pm\\frac{2}{3}x$', '$y = \\pm 3x$', '$y = \\pm 2x$'],
    correctIndex: 0,
    explanation: 'Asymptotes are $y = \\pm\\frac{b}{a}x = \\pm\\frac{3}{2}x$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Find the foci of $\\frac{x^2}{5} - \\frac{y^2}{4} = 1$.',
    options: ['$(\\pm 3, 0)$', '$(\\pm 5, 0)$', '$(\\pm 4, 0)$', '$(\\pm 2, 0)$'],
    correctIndex: 0,
    explanation: '$c^2 = 5 + 4 = 9$, so $c = 3$. Foci are at $(\\pm 3, 0)$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Find the eccentricity of $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$.',
    options: ['$\\frac{5}{3}$', '$\\frac{4}{3}$', '$\\frac{3}{5}$', '$\\frac{4}{5}$'],
    correctIndex: 0,
    explanation: '$c = \\sqrt{9 + 16} = 5$, $a = 3$. $e = \\frac{c}{a} = \\frac{5}{3}$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'What is the center of $\\frac{(x-2)^2}{9} - \\frac{(y+1)^2}{4} = 1$?',
    options: ['$(2, -1)$', '$(-2, 1)$', '$(2, 1)$', '$(-2, -1)$'],
    correctIndex: 0,
    explanation: 'The center is at $(h, k) = (2, -1)$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'A hyperbola has foci $(\\pm 5, 0)$ and vertices $(\\pm 3, 0)$. Find its equation.',
    options: ['$\\frac{x^2}{9} - \\frac{y^2}{16} = 1$', '$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$', '$\\frac{x^2}{25} - \\frac{y^2}{9} = 1$', '$\\frac{x^2}{9} - \\frac{y^2}{25} = 1$'],
    correctIndex: 0,
    explanation: '$a = 3$, $c = 5$, so $b^2 = c^2 - a^2 = 25 - 9 = 16$. Equation: $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Find the equation of the conjugate hyperbola of $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$.',
    options: ['$\\frac{y^2}{9} - \\frac{x^2}{16} = 1$', '$\\frac{x^2}{9} - \\frac{y^2}{16} = 1$', '$\\frac{y^2}{16} - \\frac{x^2}{9} = 1$', '$\\frac{x^2}{16} + \\frac{y^2}{9} = 1$'],
    correctIndex: 0,
    explanation: 'The conjugate switches the roles of $x$ and $y$: $\\frac{y^2}{9} - \\frac{x^2}{16} = 1$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'A hyperbola has asymptotes $y = \\pm 2x$ and passes through $(3, 4)$. If its center is at the origin and transverse axis is horizontal, find $a$.',
    options: ['$\\sqrt{5}$', '$3$', '$2$', '$\\sqrt{3}$'],
    correctIndex: 0,
    explanation: 'Asymptotes $y = \\pm 2x$ means $\\frac{b}{a} = 2$, so $b = 2a$. Point $(3, 4)$: $\\frac{9}{a^2} - \\frac{16}{4a^2} = 1$, giving $\\frac{9}{a^2} - \\frac{4}{a^2} = 1$, so $\\frac{5}{a^2} = 1$, $a^2 = 5$, $a = \\sqrt{5}$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'For a rectangular hyperbola $x^2 - y^2 = 16$, what is the eccentricity?',
    options: ['$\\sqrt{2}$', '$2$', '$4$', '$1$'],
    correctIndex: 0,
    explanation: '$a = b = 4$. $c^2 = 16 + 16 = 32$, $c = 4\\sqrt{2}$. $e = \\frac{c}{a} = \\frac{4\\sqrt{2}}{4} = \\sqrt{2}$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Find the difference of distances from $(5, \\frac{12}{5})$ to the foci of $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$.',
    options: ['$6$', '$10$', '$8$', '$3$'],
    correctIndex: 0,
    explanation: 'For any point on the hyperbola, $|PF_1 - PF_2| = 2a = 2(3) = 6$.'
  },

  // Additional easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'For $\\frac{y^2}{25} - \\frac{x^2}{9} = 1$, the transverse axis is:',
    options: ['Vertical', 'Horizontal', 'Diagonal', 'None'],
    correctIndex: 0,
    explanation: 'When $y^2$ is positive and comes first, the transverse axis is vertical.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'What are the vertices of $\\frac{y^2}{16} - \\frac{x^2}{9} = 1$?',
    options: ['$(0, \\pm 4)$', '$(0, \\pm 3)$', '$(\\pm 4, 0)$', '$(\\pm 3, 0)$'],
    correctIndex: 0,
    explanation: 'Vertices are at $(0, \\pm a) = (0, \\pm 4)$ for a vertical hyperbola.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'The center of $\\frac{x^2}{4} - \\frac{y^2}{9} = 1$ is:',
    options: ['$(0, 0)$', '$(2, 3)$', '$(4, 9)$', '$(-2, -3)$'],
    correctIndex: 0,
    explanation: 'This is a standard form hyperbola centered at the origin.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'For a hyperbola, which value is largest?',
    options: ['$c$', '$a$', '$b$', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'For hyperbolas, $c^2 = a^2 + b^2$, so $c > a$ and $c > b$.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'The focal length of a hyperbola is:',
    options: ['$2c$', '$2a$', '$2b$', '$c$'],
    correctIndex: 0,
    explanation: 'The focal length is the distance between the two foci, which is $2c$.'
  },

  // Additional medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Find the foci of $\\frac{y^2}{9} - \\frac{x^2}{7} = 1$.',
    options: ['$(0, \\pm 4)$', '$(\\pm 4, 0)$', '$(0, \\pm 3)$', '$(0, \\pm 7)$'],
    correctIndex: 0,
    explanation: '$c^2 = 9 + 7 = 16$, so $c = 4$. Vertical hyperbola has foci at $(0, \\pm 4)$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'What are the asymptotes of $\\frac{y^2}{16} - \\frac{x^2}{9} = 1$?',
    options: ['$y = \\pm\\frac{4}{3}x$', '$y = \\pm\\frac{3}{4}x$', '$y = \\pm 4x$', '$y = \\pm 3x$'],
    correctIndex: 0,
    explanation: 'For vertical hyperbola, asymptotes are $y = \\pm\\frac{a}{b}x = \\pm\\frac{4}{3}x$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'Find the eccentricity of $\\frac{y^2}{16} - \\frac{x^2}{9} = 1$.',
    options: ['$\\frac{5}{4}$', '$\\frac{4}{5}$', '$\\frac{5}{3}$', '$\\frac{3}{5}$'],
    correctIndex: 0,
    explanation: '$c = \\sqrt{16 + 9} = 5$, $a = 4$. $e = \\frac{c}{a} = \\frac{5}{4}$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'What is the center of $\\frac{(x+3)^2}{16} - \\frac{(y-2)^2}{25} = 1$?',
    options: ['$(-3, 2)$', '$(3, -2)$', '$(-3, -2)$', '$(3, 2)$'],
    correctIndex: 0,
    explanation: 'The center is at $(h, k) = (-3, 2)$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'Find $b$ for the hyperbola $\\frac{x^2}{25} - \\frac{y^2}{b^2} = 1$ if $c = 13$.',
    options: ['$12$', '$13$', '$5$', '$7$'],
    correctIndex: 0,
    explanation: '$c^2 = a^2 + b^2$, so $169 = 25 + b^2$, giving $b^2 = 144$, $b = 12$.'
  },

  // Additional hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'A hyperbola has vertices $(0, \\pm 2)$ and foci $(0, \\pm 5)$. Find its equation.',
    options: ['$\\frac{y^2}{4} - \\frac{x^2}{21} = 1$', '$\\frac{y^2}{25} - \\frac{x^2}{4} = 1$', '$\\frac{y^2}{4} - \\frac{x^2}{25} = 1$', '$\\frac{x^2}{4} - \\frac{y^2}{21} = 1$'],
    correctIndex: 0,
    explanation: '$a = 2$, $c = 5$, so $b^2 = c^2 - a^2 = 25 - 4 = 21$. Equation: $\\frac{y^2}{4} - \\frac{x^2}{21} = 1$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'A hyperbola has eccentricity $2$ and $a = 3$. Find $b$.',
    options: ['$3\\sqrt{3}$', '$6$', '$9$', '$3$'],
    correctIndex: 0,
    explanation: '$e = \\frac{c}{a} = 2$, so $c = 6$. $b^2 = c^2 - a^2 = 36 - 9 = 27$, so $b = 3\\sqrt{3}$.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'Find the equation of a hyperbola with center $(1, -2)$, horizontal transverse axis, $a = 4$, and $c = 5$.',
    options: ['$\\frac{(x-1)^2}{16} - \\frac{(y+2)^2}{9} = 1$', '$\\frac{(x+1)^2}{16} - \\frac{(y-2)^2}{9} = 1$', '$\\frac{(x-1)^2}{9} - \\frac{(y+2)^2}{16} = 1$', '$\\frac{(y+2)^2}{16} - \\frac{(x-1)^2}{9} = 1$'],
    correctIndex: 0,
    explanation: '$b^2 = c^2 - a^2 = 25 - 16 = 9$. Horizontal hyperbola: $\\frac{(x-1)^2}{16} - \\frac{(y+2)^2}{9} = 1$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'The latus rectum of a hyperbola is the chord through a focus perpendicular to the transverse axis. For $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$, find its length.',
    options: ['$\\frac{32}{3}$', '$\\frac{16}{3}$', '$\\frac{9}{4}$', '$\\frac{18}{5}$'],
    correctIndex: 0,
    explanation: 'Latus rectum length is $\\frac{2b^2}{a} = \\frac{2(16)}{3} = \\frac{32}{3}$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'A hyperbola centered at the origin has eccentricity $\\frac{5}{3}$ and vertices at $(\\pm 3, 0)$. Find $b^2$.',
    options: ['$16$', '$9$', '$25$', '$7$'],
    correctIndex: 0,
    explanation: '$a = 3$ and $e = \\frac{c}{a} = \\frac{5}{3}$, so $c = 5$. Then $b^2 = c^2 - a^2 = 25 - 9 = 16$.'
  }
];
