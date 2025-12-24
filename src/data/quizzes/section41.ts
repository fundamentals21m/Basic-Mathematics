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
  }
];
