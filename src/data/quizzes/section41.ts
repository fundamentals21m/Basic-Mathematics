import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section41Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What shape is x²/9 - y²/4 = 1?',
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
    question: 'For a hyperbola, the eccentricity e satisfies:',
    options: ['e > 1', 'e = 1', '0 < e < 1', 'e = 0'],
    correctIndex: 0,
    explanation: 'Hyperbolas always have eccentricity greater than 1.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'For x²/16 - y²/9 = 1, the transverse axis is:',
    options: ['Horizontal', 'Vertical', 'Diagonal', 'None'],
    correctIndex: 0,
    explanation: 'When x² is positive and comes first, the transverse axis is horizontal.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What are the vertices of x²/25 - y²/16 = 1?',
    options: ['(±5, 0)', '(±4, 0)', '(0, ±5)', '(0, ±4)'],
    correctIndex: 0,
    explanation: 'Vertices are at (±a, 0) = (±5, 0) for a horizontal hyperbola.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Find c for the hyperbola x²/9 - y²/16 = 1.',
    options: ['5', '7', '25', '4'],
    correctIndex: 0,
    explanation: 'c² = a² + b² = 9 + 16 = 25, so c = 5.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What are the asymptotes of x²/4 - y²/9 = 1?',
    options: ['y = ±(3/2)x', 'y = ±(2/3)x', 'y = ±3x', 'y = ±2x'],
    correctIndex: 0,
    explanation: 'Asymptotes are y = ±(b/a)x = ±(3/2)x.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Find the foci of x²/5 - y²/4 = 1.',
    options: ['(±3, 0)', '(±5, 0)', '(±4, 0)', '(±2, 0)'],
    correctIndex: 0,
    explanation: 'c² = 5 + 4 = 9, so c = 3. Foci are at (±3, 0).'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Find the eccentricity of x²/9 - y²/16 = 1.',
    options: ['5/3', '4/3', '3/5', '4/5'],
    correctIndex: 0,
    explanation: 'c = √(9 + 16) = 5, a = 3. e = c/a = 5/3.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'What is the center of (x-2)²/9 - (y+1)²/4 = 1?',
    options: ['(2, -1)', '(-2, 1)', '(2, 1)', '(-2, -1)'],
    correctIndex: 0,
    explanation: 'The center is at (h, k) = (2, -1).'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'A hyperbola has foci (±5, 0) and vertices (±3, 0). Find its equation.',
    options: ['x²/9 - y²/16 = 1', 'x²/16 - y²/9 = 1', 'x²/25 - y²/9 = 1', 'x²/9 - y²/25 = 1'],
    correctIndex: 0,
    explanation: 'a = 3, c = 5, so b² = c² - a² = 25 - 9 = 16. Equation: x²/9 - y²/16 = 1.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Find the equation of the conjugate hyperbola of x²/16 - y²/9 = 1.',
    options: ['y²/9 - x²/16 = 1', 'x²/9 - y²/16 = 1', 'y²/16 - x²/9 = 1', 'x²/16 + y²/9 = 1'],
    correctIndex: 0,
    explanation: 'The conjugate switches the roles of x and y: y²/9 - x²/16 = 1.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'A hyperbola has asymptotes y = ±2x and passes through (3, 4). If its center is at the origin and transverse axis is horizontal, find a.',
    options: ['√5', '3', '2', '√3'],
    correctIndex: 0,
    explanation: 'Asymptotes y = ±2x means b/a = 2, so b = 2a. Point (3, 4): 9/a² - 16/(4a²) = 1, giving 9/a² - 4/a² = 1, so 5/a² = 1, a² = 5, a = √5.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'For a rectangular hyperbola x² - y² = 16, what is the eccentricity?',
    options: ['√2', '2', '4', '1'],
    correctIndex: 0,
    explanation: 'a = b = 4. c² = 16 + 16 = 32, c = 4√2. e = c/a = 4√2/4 = √2.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Find the difference of distances from (5, 12/5) to the foci of x²/9 - y²/16 = 1.',
    options: ['6', '10', '8', '3'],
    correctIndex: 0,
    explanation: 'For any point on the hyperbola, |PF₁ - PF₂| = 2a = 2(3) = 6.'
  }
];
