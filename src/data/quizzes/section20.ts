import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section20Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the area of a rectangle with base 4 and height 7?',
    options: ['11', '22', '28', '14'],
    correctIndex: 2,
    explanation: 'Area = base × height = 4 × 7 = 28 square units.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'The area of a parallelogram is calculated using:',
    options: ['base × slant side', 'base × perpendicular height', 'base + height', '½ × base × height'],
    correctIndex: 1,
    explanation: 'Parallelogram area = base × perpendicular height (not the slant side).',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is the area of a square with side length 5?',
    options: ['10', '20', '25', '15'],
    correctIndex: 2,
    explanation: 'Square area = s² = 5² = 25 square units.',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'If two figures are congruent, their areas are:',
    options: ['Different', 'Equal', 'One is twice the other', 'Cannot determine'],
    correctIndex: 1,
    explanation: 'One of the fundamental properties of area: congruent figures have equal areas.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'A parallelogram has base 6 and height 4. Its area is:',
    options: ['10', '12', '20', '24'],
    correctIndex: 3,
    explanation: 'Area = base × height = 6 × 4 = 24 square units.',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'A parallelogram has base 8, slant side 5, and height 4. What is its area?',
    options: ['20', '32', '40', '13'],
    correctIndex: 1,
    explanation: 'Area = base × height = 8 × 4 = 32. The slant side (5) is not used.',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Shearing a parallelogram preserves its:',
    options: ['Shape only', 'Area only', 'Both shape and area', 'Neither'],
    correctIndex: 1,
    explanation: 'Shearing changes the shape (angles) but preserves the base, height, and area.',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'A rhombus has diagonals of length 10 and 8. What is its area?',
    options: ['80', '40', '18', '36'],
    correctIndex: 1,
    explanation: 'Rhombus area = ½ × d₁ × d₂ = ½ × 10 × 8 = 40 square units.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'If you double both the base and height of a rectangle, the area is multiplied by:',
    options: ['2', '3', '4', '8'],
    correctIndex: 2,
    explanation: 'New area = (2b)(2h) = 4bh = 4 × original area.',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'A unit square (side = 1) has what area?',
    options: ['0', '1', '2', '4'],
    correctIndex: 1,
    explanation: 'By definition, a unit square has area 1 (this is an axiom of area).',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'What is |det([3,2; 1,4])| and what does it represent geometrically?',
    options: [
      '10, the perimeter',
      '10, the parallelogram area spanned by (3,1) and (2,4)',
      '14, the area',
      '5, the diagonal length'
    ],
    correctIndex: 1,
    explanation: 'det = 3×4 - 2×1 = 10. This equals the area of the parallelogram with sides (3,1) and (2,4).',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'A parallelogram has base 10 and a 30° angle with slant side 6. What is the height?',
    options: ['3', '5.2', '6', '10'],
    correctIndex: 0,
    explanation: 'Height = slant side × sin(angle) = 6 × sin(30°) = 6 × 0.5 = 3.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Two parallelograms have the same base and height. They are:',
    options: ['Congruent', 'Equal in area', 'Similar', 'Identical'],
    correctIndex: 1,
    explanation: 'Same base and height means same area, but they could have different shapes (different slant angles).',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'How many square centimeters are in 1 square meter?',
    options: ['100', '1,000', '10,000', '100,000'],
    correctIndex: 2,
    explanation: '1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm².',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Parallelogram ABCD has A(0,0), B(5,0), C(8,4), D(3,4). What is its area?',
    options: ['20', '32', '12', '40'],
    correctIndex: 0,
    explanation: 'Base AB = 5, height = 4 (vertical distance). Area = 5 × 4 = 20 square units.',
  },
];
