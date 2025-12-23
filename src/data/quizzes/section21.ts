import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section21Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the area of a triangle with base 6 and height 4?',
    options: ['24', '12', '10', '20'],
    correctIndex: 1,
    explanation: 'Area = ½ × base × height = ½ × 6 × 4 = 12 square units.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'The triangle area formula includes a factor of ½ because:',
    options: [
      'Triangles have half the angles of a square',
      'A triangle is half of a parallelogram',
      'It makes the numbers smaller',
      'Triangles have three sides'
    ],
    correctIndex: 1,
    explanation: 'A triangle is exactly half of the parallelogram formed by doubling it.',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'A right triangle has legs 5 and 12. What is its area?',
    options: ['60', '30', '17', '25'],
    correctIndex: 1,
    explanation: 'For a right triangle, Area = ½ × leg₁ × leg₂ = ½ × 5 × 12 = 30.',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'How many different base-height pairs does a triangle have?',
    options: ['1', '2', '3', '6'],
    correctIndex: 2,
    explanation: 'Each of the three sides can serve as a base, giving three base-height pairs.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'If a triangle has area 20 and base 8, what is its height?',
    options: ['2.5', '4', '5', '10'],
    correctIndex: 2,
    explanation: '20 = ½ × 8 × h, so h = 20 × 2 / 8 = 5.',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'In Heron\'s formula, what is "s"?',
    options: ['Side length', 'Semi-perimeter', 'Square root', 'Sum of angles'],
    correctIndex: 1,
    explanation: 's is the semi-perimeter: s = (a + b + c) / 2.',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'For a triangle with sides 3, 4, 5, what is the semi-perimeter s?',
    options: ['6', '12', '5', '7'],
    correctIndex: 0,
    explanation: 's = (3 + 4 + 5) / 2 = 12 / 2 = 6.',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'An equilateral triangle with side 4 has area:',
    options: ['4√3', '8√3', '16√3', '2√3'],
    correctIndex: 0,
    explanation: 'Area = s²√3/4 = 16√3/4 = 4√3.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Two triangles share the same base. If one has height 3 and area 12, what base do they share?',
    options: ['4', '6', '8', '9'],
    correctIndex: 2,
    explanation: '12 = ½ × b × 3, so b = 12 × 2 / 3 = 8.',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'The shoelace formula is most useful when you have:',
    options: ['Side lengths', 'Angles', 'Vertex coordinates', 'Height and base'],
    correctIndex: 2,
    explanation: 'The shoelace formula computes area directly from vertex coordinates.',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'Using Heron\'s formula for a 3-4-5 triangle: s=6, so Area = √(6·3·2·1) = ?',
    options: ['6', '√36 = 6', '12', '3'],
    correctIndex: 1,
    explanation: 'Area = √(6×3×2×1) = √36 = 6. (This is indeed a 3-4-5 right triangle with area ½×3×4=6.)',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Triangle with vertices (0,0), (4,0), (2,3) has area:',
    options: ['6', '12', '8', '5'],
    correctIndex: 0,
    explanation: 'Base along x-axis = 4, height = 3. Area = ½ × 4 × 3 = 6.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If a median divides a triangle into two parts, those parts have:',
    options: ['Different areas', 'Equal areas', 'Areas in ratio 1:2', 'Areas depending on the median'],
    correctIndex: 1,
    explanation: 'A median divides a triangle into two triangles of equal area.',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Triangle ABC has area 30. If D is the midpoint of BC, what is the area of triangle ABD?',
    options: ['10', '15', '20', '30'],
    correctIndex: 1,
    explanation: 'AD is a median, dividing the triangle into two equal areas: 30/2 = 15.',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Using shoelace for (1,1), (4,1), (3,5): |1(1-5) + 4(5-1) + 3(1-1)|/2 = ?',
    options: ['6', '8', '10', '12'],
    correctIndex: 0,
    explanation: '|1(-4) + 4(4) + 3(0)|/2 = |-4 + 16 + 0|/2 = 12/2 = 6.',
  },
];
