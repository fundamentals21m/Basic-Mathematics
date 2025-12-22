import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section01Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is 5 + (-3)?',
    options: ['8', '2', '-2', '-8'],
    correctIndex: 1,
    explanation: '5 + (-3) = 5 - 3 = 2. Adding a negative is the same as subtracting.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is (-4) + (-6)?',
    options: ['10', '-10', '2', '-2'],
    correctIndex: 1,
    explanation: 'Adding two negative numbers: (-4) + (-6) = -(4 + 6) = -10.',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is -(-7)?',
    options: ['7', '-7', '0', '-14'],
    correctIndex: 0,
    explanation: 'The negative of a negative is positive: -(-7) = 7.',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'Which property says a + b = b + a?',
    options: ['Associative', 'Commutative', 'Distributive', 'Identity'],
    correctIndex: 1,
    explanation: 'The commutative property of addition states that the order of addends doesn\'t matter.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is the additive inverse of -9?',
    options: ['-9', '9', '1/9', '0'],
    correctIndex: 1,
    explanation: 'The additive inverse of -9 is 9, because (-9) + 9 = 0.',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'Simplify: 3 + (-8) + 5 + (-2)',
    options: ['-2', '2', '-18', '18'],
    correctIndex: 0,
    explanation: '3 + (-8) + 5 + (-2) = (3 + 5) + (-8 + -2) = 8 + (-10) = -2.',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'If a + b = 0, what can we conclude?',
    options: ['a = 0 and b = 0', 'a = -b', 'a = b', 'a > b'],
    correctIndex: 1,
    explanation: 'If a + b = 0, then b is the additive inverse of a, meaning a = -b (or equivalently b = -a).',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Which expression equals -(a + b)?',
    options: ['-a + b', 'a + (-b)', '-a + (-b)', '-a - (-b)'],
    correctIndex: 2,
    explanation: 'By the distributive property of negation: -(a + b) = -a + (-b) = -a - b.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Simplify: (a + b) + c when a = -5, b = 3, c = -1',
    options: ['-3', '3', '-9', '9'],
    correctIndex: 0,
    explanation: '(-5 + 3) + (-1) = -2 + (-1) = -3.',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'The associative property (a + b) + c = a + (b + c) allows us to:',
    options: [
      'Change the order of numbers',
      'Change the grouping of numbers',
      'Remove parentheses entirely',
      'Add zero to any number'
    ],
    correctIndex: 1,
    explanation: 'Associativity lets us regroup additions without changing the result. Commutativity changes order.',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'If a + b + c = 0 and a = 7, b = -3, what is c?',
    options: ['4', '-4', '10', '-10'],
    correctIndex: 1,
    explanation: '7 + (-3) + c = 0 → 4 + c = 0 → c = -4.',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Prove: -(a - b) = b - a. Which step is correct?',
    options: [
      '-(a - b) = -a - b = b - a',
      '-(a - b) = -a + b = b - a',
      '-(a - b) = a + b = b - a',
      '-(a - b) = -a - (-b) = a + b'
    ],
    correctIndex: 1,
    explanation: '-(a - b) = -(a + (-b)) = -a + (-(-b)) = -a + b = b + (-a) = b - a.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'For which values of x does x + |x| = 0?',
    options: ['x > 0', 'x < 0', 'x ≤ 0', 'x = 0 only'],
    correctIndex: 2,
    explanation: 'If x ≥ 0, then x + |x| = x + x = 2x, which equals 0 only when x = 0. If x < 0, then |x| = -x, so x + (-x) = 0. Thus x ≤ 0.',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If |a + b| = |a| + |b|, what must be true?',
    options: [
      'a and b have the same sign (or one is zero)',
      'a and b have opposite signs',
      'a = b',
      'a = -b'
    ],
    correctIndex: 0,
    explanation: 'The triangle inequality becomes equality only when a and b don\'t "cancel" - i.e., they have the same sign or one is zero.',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Simplify: -(-(-(-a)))',
    options: ['a', '-a', '4a', '-4a'],
    correctIndex: 0,
    explanation: 'Each negation flips the sign: -a → -(-a) = a → -a → -(-a) = a. Four negations return to the original.',
  },
];
