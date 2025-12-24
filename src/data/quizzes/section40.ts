import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section40Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What shape is described by x²/9 + y²/4 = 1?',
    options: ['Ellipse', 'Circle', 'Parabola', 'Hyperbola'],
    correctIndex: 0,
    explanation: 'This is the standard form of an ellipse with a² = 9 and b² = 4.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'For x²/25 + y²/16 = 1, what is the semi-major axis?',
    options: ['5', '4', '25', '16'],
    correctIndex: 0,
    explanation: 'The larger denominator is a² = 25, so a = 5 is the semi-major axis.'
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
    question: 'If a = b in x²/a² + y²/b² = 1, what shape results?',
    options: ['Circle', 'Ellipse', 'Line', 'Point'],
    correctIndex: 0,
    explanation: 'When a = b, the equation becomes x²/a² + y²/a² = 1, or x² + y² = a², which is a circle.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'For an ellipse, the eccentricity e satisfies:',
    options: ['0 < e < 1', 'e = 1', 'e > 1', 'e = 0'],
    correctIndex: 0,
    explanation: 'Ellipses have eccentricity between 0 and 1. A circle has e = 0, and e = 1 gives a parabola.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Find c (distance from center to focus) for x²/25 + y²/9 = 1.',
    options: ['4', '5', '3', '16'],
    correctIndex: 0,
    explanation: 'c² = a² - b² = 25 - 9 = 16, so c = 4.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What is the eccentricity of x²/5 + y²/4 = 1?',
    options: ['1/√5', '√5/5', '4/5', '1/5'],
    correctIndex: 0,
    explanation: 'a² = 5, b² = 4, c² = 5 - 4 = 1, c = 1. e = c/a = 1/√5.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Find the vertices of x²/16 + y²/9 = 1.',
    options: ['(±4, 0)', '(±3, 0)', '(0, ±4)', '(0, ±3)'],
    correctIndex: 0,
    explanation: 'Since a² = 16 > b² = 9, major axis is horizontal. Vertices at (±a, 0) = (±4, 0).'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'For the ellipse x²/36 + y²/20 = 1, find the foci.',
    options: ['(±4, 0)', '(±6, 0)', '(0, ±4)', '(±2√5, 0)'],
    correctIndex: 0,
    explanation: 'c² = 36 - 20 = 16, c = 4. Major axis is horizontal, so foci are (±4, 0).'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'What is the center of (x-3)²/4 + (y+2)²/9 = 1?',
    options: ['(3, -2)', '(-3, 2)', '(3, 2)', '(-3, -2)'],
    correctIndex: 0,
    explanation: 'The center is at (h, k) where the equation has (x - h)² and (y - k)². Here h = 3, k = -2.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'An ellipse has foci at (±3, 0) and passes through (5, 0). Find the equation.',
    options: ['x²/25 + y²/16 = 1', 'x²/16 + y²/25 = 1', 'x²/9 + y²/16 = 1', 'x²/25 + y²/9 = 1'],
    correctIndex: 0,
    explanation: 'c = 3. The point (5, 0) is a vertex, so a = 5. b² = a² - c² = 25 - 9 = 16.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Find the sum of distances from (3, 12/5) to the foci of x²/25 + y²/9 = 1.',
    options: ['10', '6', '8', '5'],
    correctIndex: 0,
    explanation: 'For any point on the ellipse, the sum of distances to foci equals 2a = 2(5) = 10.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'An ellipse has eccentricity 3/5 and semi-major axis 5. Find the semi-minor axis.',
    options: ['4', '3', '5', '2'],
    correctIndex: 0,
    explanation: 'e = c/a = 3/5, so c = 3. b² = a² - c² = 25 - 9 = 16, b = 4.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Find the equation of the ellipse with foci (0, ±4) and vertices (0, ±5).',
    options: ['x²/9 + y²/25 = 1', 'x²/25 + y²/9 = 1', 'x²/16 + y²/25 = 1', 'x²/25 + y²/16 = 1'],
    correctIndex: 0,
    explanation: 'Vertical major axis: a = 5, c = 4, b² = 25 - 16 = 9. Equation: x²/9 + y²/25 = 1.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'What is the length of the latus rectum of x²/16 + y²/9 = 1?',
    options: ['9/2', '8', '9/4', '16/3'],
    correctIndex: 0,
    explanation: 'Latus rectum = 2b²/a = 2(9)/4 = 18/4 = 9/2.'
  }
];
