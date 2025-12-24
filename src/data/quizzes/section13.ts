import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section13Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'Which of the following is a mathematical statement?',
    options: [
      'Is x positive?',
      'Let n = 5',
      '2 + 3 = 5',
      'x + 3 = 7'
    ],
    correctIndex: 2,
    explanation: 'A statement is a sentence that is either true or false. "2 + 3 = 5" is true, making it a statement. Questions, commands, and open sentences with variables are not statements.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: '"P and Q" is true when:',
    options: [
      'P is true or Q is true',
      'P is true and Q is true',
      'P is false and Q is false',
      'Either P or Q is false'
    ],
    correctIndex: 1,
    explanation: 'A conjunction (AND) is true only when both P and Q are true.',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is the negation of "x > 5"?',
    options: [
      'x < 5',
      'x = 5',
      'x ≤ 5',
      'x ≥ 5'
    ],
    correctIndex: 2,
    explanation: 'The negation of "x > 5" is "x is NOT greater than 5", which means x ≤ 5.',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: '"P or Q" is false when:',
    options: [
      'P is true and Q is true',
      'P is false and Q is true',
      'P is true and Q is false',
      'P is false and Q is false'
    ],
    correctIndex: 3,
    explanation: 'A disjunction (OR) is false only when both P and Q are false.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'The symbol ∀ represents which quantifier?',
    options: [
      'There exists',
      'For all',
      'If and only if',
      'Implies'
    ],
    correctIndex: 1,
    explanation: '∀ is the universal quantifier, meaning "for all" or "for every".',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'What is the contrapositive of "If it rains, then the ground is wet"?',
    options: [
      'If the ground is wet, then it rains',
      'If it doesn\'t rain, then the ground isn\'t wet',
      'If the ground isn\'t wet, then it doesn\'t rain',
      'The ground is wet or it doesn\'t rain'
    ],
    correctIndex: 2,
    explanation: 'The contrapositive of "If P then Q" is "If not Q then not P". So: "If the ground isn\'t wet, then it doesn\'t rain."',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'The negation of "For all x, P(x)" is:',
    options: [
      'For all x, not P(x)',
      'There exists x such that P(x)',
      'There exists x such that not P(x)',
      'For no x, P(x)'
    ],
    correctIndex: 2,
    explanation: 'To negate a universal statement, switch to existential and negate the predicate: "There exists x such that not P(x)".',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: '"P if and only if Q" means:',
    options: [
      'If P then Q',
      'If Q then P',
      'Both "If P then Q" and "If Q then P"',
      'Neither P nor Q'
    ],
    correctIndex: 2,
    explanation: 'A biconditional "P iff Q" requires both directions: P implies Q AND Q implies P.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Which statement is equivalent to "If P then Q"?',
    options: [
      'If Q then P (converse)',
      'If not P then not Q (inverse)',
      'If not Q then not P (contrapositive)',
      'P and not Q'
    ],
    correctIndex: 2,
    explanation: 'An implication is logically equivalent to its contrapositive. The converse and inverse are NOT equivalent to the original.',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'The negation of "There exists a prime p > 100" is:',
    options: [
      'There exists a prime p ≤ 100',
      'For all primes p, p > 100',
      'For all primes p, p ≤ 100',
      'No number greater than 100 exists'
    ],
    correctIndex: 2,
    explanation: 'To negate an existential, switch to universal and negate: "For all primes p, p ≤ 100" (i.e., no prime is greater than 100).',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'Consider: "If n² is even, then n is even." Which proof technique proves this by showing "If n is odd, then n² is odd"?',
    options: [
      'Direct proof',
      'Proof by contradiction',
      'Proof by contrapositive',
      'Proof by cases'
    ],
    correctIndex: 2,
    explanation: 'Proving "If n is odd, then n² is odd" is proving the contrapositive. Since an implication and its contrapositive are equivalent, this proves the original statement.',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'The statement "If x = 2, then x² = 4" has which truth value when x = 3?',
    options: [
      'True',
      'False',
      'Undefined',
      'Neither true nor false'
    ],
    correctIndex: 0,
    explanation: 'An implication "If P then Q" is false ONLY when P is true and Q is false. When x = 3, P ("x = 2") is false, so the entire implication is true regardless of Q.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Which of these is the negation of "All students passed the exam"?',
    options: [
      'No students passed the exam',
      'All students failed the exam',
      'At least one student did not pass the exam',
      'Some students passed the exam'
    ],
    correctIndex: 2,
    explanation: 'The negation of "For all x, P(x)" is "There exists x such that not P(x)". So: "At least one student did not pass."',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'In a proof by contradiction, to prove statement P, you:',
    options: [
      'Assume P is true and derive Q',
      'Assume not P and derive a contradiction',
      'Assume Q is true and show P follows',
      'Show P is equivalent to a known truth'
    ],
    correctIndex: 1,
    explanation: 'In proof by contradiction, assume the negation of what you want to prove (not P), then derive a logical contradiction. This forces P to be true.',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Consider: "x² = 4 if and only if x = 2". This statement is:',
    options: [
      'True',
      'False, because the "if" direction fails',
      'False, because the "only if" direction fails',
      'False, because both directions fail'
    ],
    correctIndex: 2,
    explanation: 'The "if" direction (x = 2 → x² = 4) is true. But the "only if" direction (x² = 4 → x = 2) is false because x could also be -2. The biconditional is false.',
  },

  // Additional questions (16-30)
  // EASY
  {
    id: 16,
    difficulty: 'easy',
    question: 'The symbol ∃ represents which quantifier?',
    options: ['For all', 'There exists', 'Implies', 'If and only if'],
    correctIndex: 1,
    explanation: '∃ is the existential quantifier, meaning "there exists".',
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'Which of these is NOT a statement?',
    options: ['5 + 3 = 8', 'x > 0', 'Is 7 prime?', 'All cats are mammals'],
    correctIndex: 2,
    explanation: 'Questions are not statements. Statements must be sentences that are either true or false.',
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'The negation of "x = 3" is:',
    options: ['x ≠ 3', 'x < 3', 'x > 3', 'x ≤ 3'],
    correctIndex: 0,
    explanation: 'The negation of "x equals 3" is "x does not equal 3", written x ≠ 3.',
  },
  {
    id: 19,
    difficulty: 'easy',
    question: '"P or Q" is true when:',
    options: ['Both P and Q are true', 'At least one of P or Q is true', 'P is true and Q is false', 'Both P and Q are false'],
    correctIndex: 1,
    explanation: 'A disjunction (OR) is true when at least one of the statements is true.',
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'What is the negation of "P and Q"?',
    options: ['not P and not Q', 'not P or not Q', 'P or Q', 'not (P or Q)'],
    correctIndex: 1,
    explanation: 'By De Morgan\'s law: not (P and Q) = (not P) or (not Q).',
  },

  // MEDIUM
  {
    id: 21,
    difficulty: 'medium',
    question: 'The converse of "If P then Q" is:',
    options: ['If Q then P', 'If not P then not Q', 'If not Q then not P', 'P and not Q'],
    correctIndex: 0,
    explanation: 'The converse swaps the hypothesis and conclusion: "If Q then P".',
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'The inverse of "If P then Q" is:',
    options: ['If Q then P', 'If not P then not Q', 'If not Q then not P', 'not P and Q'],
    correctIndex: 1,
    explanation: 'The inverse negates both parts: "If not P then not Q".',
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'What is the negation of "P or Q"?',
    options: ['not P and not Q', 'not P or not Q', 'P and Q', 'not (P and Q)'],
    correctIndex: 0,
    explanation: 'By De Morgan\'s law: not (P or Q) = (not P) and (not Q).',
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'The negation of "All birds can fly" is:',
    options: ['No birds can fly', 'All birds cannot fly', 'At least one bird cannot fly', 'Some birds can fly'],
    correctIndex: 2,
    explanation: 'The negation of "For all x, P(x)" is "There exists x such that not P(x)": at least one bird cannot fly.',
  },
  {
    id: 25,
    difficulty: 'medium',
    question: '"If P then Q" is false when:',
    options: ['P is true and Q is false', 'P is false and Q is true', 'P and Q are both true', 'P and Q are both false'],
    correctIndex: 0,
    explanation: 'An implication is false only when the hypothesis is true and the conclusion is false.',
  },

  // HARD
  {
    id: 26,
    difficulty: 'hard',
    question: 'Which statement is logically equivalent to "If P then Q"?',
    options: ['If Q then P', 'not P or Q', 'P and Q', 'not Q and P'],
    correctIndex: 1,
    explanation: '"If P then Q" is logically equivalent to "not P or Q". This can be verified with truth tables.',
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'The negation of "There exists a real number x such that x² < 0" is:',
    options: ['For all real x, x² < 0', 'For all real x, x² ≥ 0', 'There exists real x with x² ≥ 0', 'No real x exists'],
    correctIndex: 1,
    explanation: 'Negate existential to universal and negate the predicate: "For all real x, x² ≥ 0".',
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'To prove "P if and only if Q", you must prove:',
    options: ['Only that P implies Q', 'Only that Q implies P', 'Both that P implies Q and Q implies P', 'That P and Q are both true'],
    correctIndex: 2,
    explanation: 'A biconditional requires proving both directions: P → Q and Q → P.',
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'The statement "If 0 = 1, then pigs can fly" is:',
    options: ['True', 'False', 'Meaningless', 'Paradoxical'],
    correctIndex: 0,
    explanation: 'The hypothesis (0 = 1) is false, so the implication is vacuously true regardless of the conclusion.',
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'Negating "For all x > 0, there exists y such that y > x" gives:',
    options: [
      'There exists x > 0 such that for all y, y ≤ x',
      'For all x > 0, for all y, y ≤ x',
      'There exists x ≤ 0 such that there exists y with y ≤ x',
      'For all x, there exists y with y ≤ x'
    ],
    correctIndex: 0,
    explanation: 'Negate by switching quantifiers and negating the predicate: "There exists x > 0 such that for all y, y ≤ x".',
  },
];
