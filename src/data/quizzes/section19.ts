import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section19Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'Two figures are congruent if one can be transformed into the other by:',
    options: ['Any transformation', 'An isometry', 'A dilation', 'A projection'],
    correctIndex: 1,
    explanation: 'Congruence is defined through isometries (distance-preserving transformations).',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What does the symbol ≅ mean?',
    options: ['Equal to', 'Similar to', 'Congruent to', 'Parallel to'],
    correctIndex: 2,
    explanation: 'The symbol ≅ denotes congruence between geometric figures.',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'Two line segments are congruent if they have:',
    options: ['The same slope', 'The same length', 'The same midpoint', 'Parallel directions'],
    correctIndex: 1,
    explanation: 'Segments are congruent if and only if they have equal lengths.',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What does CPCTC stand for?',
    options: [
      'Congruent Parts Create Triangular Congruence',
      'Corresponding Parts of Congruent Triangles are Congruent',
      'Central Points Connect Triangle Centers',
      'Congruent Polygons Contain Triangle Criteria'
    ],
    correctIndex: 1,
    explanation: 'CPCTC = Corresponding Parts of Congruent Triangles are Congruent.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'If triangle ABC ≅ triangle DEF, then angle A equals:',
    options: ['Angle D', 'Angle E', 'Angle F', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'In the congruence statement, corresponding parts are in the same position. A corresponds to D.',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'Which is NOT a valid triangle congruence criterion?',
    options: ['SSS', 'SAS', 'AAA', 'ASA'],
    correctIndex: 2,
    explanation: 'AAA proves triangles are similar, not congruent. Triangles with the same angles can have different sizes.',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'SSA (two sides and a non-included angle) is called:',
    options: ['The reflexive case', 'The ambiguous case', 'The transitive case', 'The symmetric case'],
    correctIndex: 1,
    explanation: 'SSA is ambiguous because two different triangles might satisfy the same conditions.',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Two circles are congruent if and only if they have:',
    options: ['The same center', 'The same radius', 'The same circumference', 'Both B and C'],
    correctIndex: 3,
    explanation: 'Equal radii means equal circumferences (C = 2πr). Both conditions are equivalent.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'If triangles are related by a reflection, they have:',
    options: ['Direct congruence', 'Opposite congruence', 'No congruence', 'Partial congruence'],
    correctIndex: 1,
    explanation: 'Reflections produce opposite congruence because they reverse orientation (like a mirror image).',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Which congruence criterion uses the included angle?',
    options: ['SSS', 'AAS', 'SAS', 'AAA'],
    correctIndex: 2,
    explanation: 'SAS requires the angle to be between (included by) the two sides.',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'Congruence is an equivalence relation because it is:',
    options: [
      'Reflexive only',
      'Symmetric and transitive only',
      'Reflexive, symmetric, and transitive',
      'Commutative and associative'
    ],
    correctIndex: 2,
    explanation: 'Equivalence relations must be reflexive (F ≅ F), symmetric (F₁ ≅ F₂ implies F₂ ≅ F₁), and transitive.',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Given triangles ABC and DEF with |AB|=|DE|, |BC|=|EF|, ∠B=∠E. They are congruent by:',
    options: ['SSS', 'SAS', 'ASA', 'AAS'],
    correctIndex: 1,
    explanation: 'Two sides with the included angle between them (at B and E) is the SAS criterion.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'How many isometries map congruent triangle ABC to triangle DEF (with A→D, B→E, C→F)?',
    options: ['Zero', 'Exactly one', 'Exactly two', 'Infinitely many'],
    correctIndex: 1,
    explanation: 'The Fundamental Theorem states there is exactly one isometry for a given correspondence of non-collinear points.',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Your left and right hands demonstrate what type of congruence?',
    options: ['Direct congruence', 'Opposite congruence', 'Not congruent', 'Similar only'],
    correctIndex: 1,
    explanation: 'Hands are mirror images (opposite congruence). You cannot rotate/translate one to match the other without reflection.',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'To prove AB = CD using triangles, you should:',
    options: [
      'Measure both segments',
      'Find congruent triangles containing them, then use CPCTC',
      'Use the distance formula',
      'Check if they are parallel'
    ],
    correctIndex: 1,
    explanation: 'The standard geometric proof strategy: find triangles containing the segments, prove them congruent, then apply CPCTC.',
  },
];
