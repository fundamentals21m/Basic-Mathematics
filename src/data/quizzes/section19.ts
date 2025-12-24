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

  // EASY (continued)
  {
    id: 16,
    difficulty: 'easy',
    question: 'If two triangles have all three sides equal, they are congruent by:',
    options: ['SAS', 'ASA', 'SSS', 'AAS'],
    correctIndex: 2,
    explanation: 'SSS (Side-Side-Side) proves congruence when all three sides are equal.',
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'Two angles are congruent if they have:',
    options: ['The same measure', 'The same vertex', 'Adjacent sides', 'Complementary measures'],
    correctIndex: 0,
    explanation: 'Angles are congruent if and only if they have equal measures.',
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'If triangle ABC ≅ triangle XYZ, then side BC corresponds to:',
    options: ['Side XY', 'Side YZ', 'Side XZ', 'Cannot determine'],
    correctIndex: 1,
    explanation: 'In the congruence statement, corresponding parts are in matching positions: BC corresponds to YZ.',
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'Which transformation always produces congruent figures?',
    options: ['Dilation', 'Projection', 'Rotation', 'Stretching'],
    correctIndex: 2,
    explanation: 'Rotation is an isometry, which preserves distances and produces congruent figures.',
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'If two triangles are congruent, their corresponding angles are:',
    options: ['Supplementary', 'Complementary', 'Equal', 'Right angles'],
    correctIndex: 2,
    explanation: 'Congruent triangles have equal corresponding angles (and equal corresponding sides).',
  },

  // MEDIUM (continued)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Given triangles with sides 3, 4, 5 and 3, 4, 5, they are congruent by:',
    options: ['SAS', 'ASA', 'SSS', 'Cannot determine'],
    correctIndex: 2,
    explanation: 'All three sides match, so SSS criterion applies.',
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'AAS (Angle-Angle-Side) is a valid congruence criterion because:',
    options: [
      'It is the same as ASA',
      'The third angle is determined by the first two',
      'Angles determine sides',
      'It only works for right triangles'
    ],
    correctIndex: 1,
    explanation: 'If two angles are known, the third is determined (angles sum to 180°), making AAS equivalent to ASA.',
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'In right triangles, HL (Hypotenuse-Leg) congruence requires:',
    options: [
      'Equal hypotenuses only',
      'Equal legs only',
      'Equal hypotenuse and one equal leg',
      'All sides equal'
    ],
    correctIndex: 2,
    explanation: 'HL: if the hypotenuse and one leg are equal in two right triangles, they are congruent.',
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'If triangle ABC ≅ triangle DEF by SAS, which parts are given?',
    options: [
      'Three sides',
      'Three angles',
      'Two sides and the included angle',
      'Two angles and the included side'
    ],
    correctIndex: 2,
    explanation: 'SAS requires two sides and the angle between them (the included angle).',
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'Congruence preserves all of the following EXCEPT:',
    options: ['Side lengths', 'Angle measures', 'Area', 'Position'],
    correctIndex: 3,
    explanation: 'Congruence preserves shape and size (lengths, angles, area) but not position or orientation.',
  },

  // HARD (continued)
  {
    id: 26,
    difficulty: 'hard',
    question: 'How many non-congruent triangles exist with sides a ≤ b ≤ c where a = 3, b = 4?',
    options: ['1', '3', '6', 'Infinitely many'],
    correctIndex: 3,
    explanation: 'c can be any value satisfying 4 ≤ c < 7 (triangle inequality), giving infinitely many non-congruent triangles.',
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'Given triangle ABC with |AB| = |AC|. If D is on BC with |BD| = |DC|, then triangles ABD and ACD are congruent by:',
    options: ['SSS', 'SAS', 'ASA', 'AAS'],
    correctIndex: 0,
    explanation: '|AB| = |AC| (given), |BD| = |DC| (given), |AD| = |AD| (reflexive). So SSS applies.',
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'The transitivity property of congruence states:',
    options: [
      'If F₁ ≅ F₂, then F₂ ≅ F₁',
      'F ≅ F for all figures F',
      'If F₁ ≅ F₂ and F₂ ≅ F₃, then F₁ ≅ F₃',
      'Congruence is commutative'
    ],
    correctIndex: 2,
    explanation: 'Transitivity: if F₁ ≅ F₂ and F₂ ≅ F₃, then F₁ ≅ F₃ (congruence chains).',
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'SSA fails as a general congruence criterion because:',
    options: [
      'It never produces congruent triangles',
      'It can produce two different triangles',
      'Angles cannot determine sides',
      'It only works for obtuse triangles'
    ],
    correctIndex: 1,
    explanation: 'SSA is ambiguous: given two sides and a non-included angle, two different triangles may satisfy the conditions.',
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'To determine a unique isometry mapping triangle ABC to DEF, you need to specify:',
    options: [
      'Only the correspondence A→D, B→E, C→F',
      'The type of isometry only',
      'The correspondence and verify congruence',
      'Just one pair of corresponding points'
    ],
    correctIndex: 2,
    explanation: 'The Fundamental Theorem: given three non-collinear points and their congruent images, there exists exactly one isometry.',
  },
];
