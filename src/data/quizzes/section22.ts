import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section22Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'In a right triangle, if the legs are 3 and 4, what is the hypotenuse?',
    options: ['5', '7', '12', '25'],
    correctIndex: 0,
    explanation: 'c² = 3² + 4² = 9 + 16 = 25, so c = 5.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'The Pythagorean theorem states that for a right triangle with legs a, b and hypotenuse c:',
    options: ['a + b = c', 'a² + b² = c²', 'ab = c²', '2(a + b) = c'],
    correctIndex: 1,
    explanation: 'The Pythagorean theorem is a² + b² = c².',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is the area of a square with side length 5?',
    options: ['10', '20', '25', '125'],
    correctIndex: 2,
    explanation: 'Area = side² = 5² = 25.',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'Which of these is a Pythagorean triple?',
    options: ['(2, 3, 4)', '(3, 4, 5)', '(4, 5, 6)', '(1, 2, 3)'],
    correctIndex: 1,
    explanation: '3² + 4² = 9 + 16 = 25 = 5². The (3, 4, 5) triple satisfies the theorem.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'In the area proof, how many copies of the right triangle are used?',
    options: ['2', '3', '4', '6'],
    correctIndex: 2,
    explanation: 'The proof uses four copies of the right triangle arranged in a square.',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'In the proof, what is the side length of the outer square?',
    options: ['c', 'a + b', 'ab', '2c'],
    correctIndex: 1,
    explanation: 'The four triangles are arranged to form an outer square with side (a + b).',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What is the area of the inner square in the proof?',
    options: ['ab', 'c²', '(a + b)²', '2ab'],
    correctIndex: 1,
    explanation: 'The inner square has side c (the hypotenuse), so its area is c².',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'The total area of the four triangles in the proof is:',
    options: ['2ab', '4ab', 'ab', '½ab'],
    correctIndex: 0,
    explanation: 'Each triangle has area ½ab, so four triangles have area 4 × ½ab = 2ab.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Is (5, 12, 13) a Pythagorean triple?',
    options: ['Yes, because 5² + 12² = 13²', 'No, because 5 + 12 ≠ 13', 'Yes, because they are consecutive', 'No, because 13 is prime'],
    correctIndex: 0,
    explanation: '5² + 12² = 25 + 144 = 169 = 13². Yes, it is a Pythagorean triple.',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'In the proof, why is the inner figure a square and not just a quadrilateral?',
    options: [
      'All sides equal c',
      'The acute angles of the triangle sum to 90°',
      'Both A and B',
      'It just looks like a square'
    ],
    correctIndex: 2,
    explanation: 'All sides are c (equal), and the angles are each 90° (since α + β = 90°).',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'Using m = 4, n = 1 in the generating formulas, what Pythagorean triple do you get?',
    options: ['(8, 15, 17)', '(15, 8, 17)', '(7, 24, 25)', '(9, 40, 41)'],
    correctIndex: 1,
    explanation: 'a = m² - n² = 16 - 1 = 15, b = 2mn = 8, c = m² + n² = 17. Triple is (15, 8, 17) or (8, 15, 17).',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Expanding (a + b)² in the proof gives:',
    options: ['a² + b²', 'a² + 2ab + b²', 'a² - 2ab + b²', '2a² + 2b²'],
    correctIndex: 1,
    explanation: '(a + b)² = a² + 2ab + b² by the square of a binomial.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If a triangle has sides 7, 24, 25, what can we conclude?',
    options: [
      'It is not a valid triangle',
      'It is a right triangle',
      'It is an equilateral triangle',
      'It is an isosceles triangle'
    ],
    correctIndex: 1,
    explanation: '7² + 24² = 49 + 576 = 625 = 25². By the converse, it is a right triangle.',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'In the proof, setting "Method 1 = Method 2" gives us:',
    options: [
      'a² + b² = c²',
      'a² + 2ab + b² = 2ab + c²',
      '(a + b)² = 4 × ½ab',
      'a² = b² + c²'
    ],
    correctIndex: 1,
    explanation: 'Method 1: (a+b)² = a² + 2ab + b². Method 2: 4×(½ab) + c² = 2ab + c². Setting equal gives a² + 2ab + b² = 2ab + c².',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'A right triangle has legs a and b with a² + b² = 100. What is the hypotenuse?',
    options: ['50', '10', '100', '√50'],
    correctIndex: 1,
    explanation: 'c² = a² + b² = 100, so c = √100 = 10.',
  },
];
