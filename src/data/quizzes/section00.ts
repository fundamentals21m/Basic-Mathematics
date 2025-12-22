import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section00Questions: SectionQuizQuestion[] = [
  // EASY
  {
    id: 1,
    difficulty: 'easy',
    question: 'Which number is to the right of -3 on the number line?',
    options: ['-5', '-4', '-2', '-10'],
    correctIndex: 2,
    explanation: '-2 is to the right of -3 because -2 > -3. Numbers increase as you move right on the number line.',
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is the opposite of 7?',
    options: ['7', '-7', '1/7', '0'],
    correctIndex: 1,
    explanation: 'The opposite (additive inverse) of 7 is -7, because 7 + (-7) = 0.',
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'Is 0 a positive or negative number?',
    options: ['Positive', 'Negative', 'Neither', 'Both'],
    correctIndex: 2,
    explanation: 'Zero is neither positive nor negative. It separates positive numbers (to the right) from negative numbers (to the left).',
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'Which of these is a negative integer?',
    options: ['5', '0', '-3', '1/2'],
    correctIndex: 2,
    explanation: '-3 is a negative integer. 5 is positive, 0 is neither, and 1/2 is not an integer.',
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What number is 4 units to the left of 2 on the number line?',
    options: ['6', '-2', '-4', '0'],
    correctIndex: 1,
    explanation: 'Moving 4 units left from 2: 2 - 4 = -2.',
  },

  // MEDIUM
  {
    id: 6,
    difficulty: 'medium',
    question: 'Which list is in order from least to greatest?',
    options: [
      '-1, -3, 0, 2',
      '-3, -1, 0, 2',
      '2, 0, -1, -3',
      '0, -1, -3, 2'
    ],
    correctIndex: 1,
    explanation: '-3 < -1 < 0 < 2. Remember: more negative means smaller.',
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'If a < 0 and b > 0, which is always true?',
    options: ['a > b', 'a + b > 0', 'a < b', 'a + b < 0'],
    correctIndex: 2,
    explanation: 'Any negative number is less than any positive number, so a < b is always true.',
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'What is the distance between -5 and 3 on the number line?',
    options: ['2', '-2', '8', '-8'],
    correctIndex: 2,
    explanation: 'Distance = |3 - (-5)| = |3 + 5| = 8. Distance is always positive.',
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'If n is an integer and -3 < n < 2, how many possible values can n have?',
    options: ['3', '4', '5', '6'],
    correctIndex: 1,
    explanation: 'The integers satisfying -3 < n < 2 are: -2, -1, 0, 1. That\'s 4 values.',
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Which statement about integers is FALSE?',
    options: [
      'Every positive integer is greater than every negative integer',
      'Zero is between all positive and negative integers',
      'The integers extend infinitely in both directions',
      'There are more positive integers than negative integers'
    ],
    correctIndex: 3,
    explanation: 'There are infinitely many positive AND negative integers - neither set is "more" than the other.',
  },

  // HARD
  {
    id: 11,
    difficulty: 'hard',
    question: 'If a, b, c are integers with a < b < c and a + b + c = 0, which must be true?',
    options: ['a < 0', 'b = 0', 'c > 0', 'Both a < 0 and c > 0'],
    correctIndex: 3,
    explanation: 'If the sum is 0, the positive and negative parts must balance. Since a < b < c and they sum to 0, the smallest (a) must be negative and the largest (c) must be positive.',
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'How many integers n satisfy |n| < 5?',
    options: ['5', '9', '10', '11'],
    correctIndex: 1,
    explanation: '|n| < 5 means -5 < n < 5. The integers are: -4, -3, -2, -1, 0, 1, 2, 3, 4. That\'s 9 integers.',
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If x is the smallest integer greater than -2.5, and y is the largest integer less than 2.5, what is x + y?',
    options: ['0', '-1', '1', '2'],
    correctIndex: 0,
    explanation: 'The smallest integer greater than -2.5 is -2. The largest integer less than 2.5 is 2. So x + y = -2 + 2 = 0.',
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'For integers a and b, if a - b = 5 and a + b = 1, what is a?',
    options: ['2', '3', '-2', '-3'],
    correctIndex: 1,
    explanation: 'Adding the equations: 2a = 6, so a = 3. (Check: b = -2, and 3 - (-2) = 5 ✓, 3 + (-2) = 1 ✓)',
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'The set of integers between two numbers a and b (where a < b) contains exactly 5 integers. What is b - a?',
    options: ['4', '5', '6', '7'],
    correctIndex: 2,
    explanation: 'If there are exactly 5 integers strictly between a and b, then b - a = 6. For example, between 0 and 6: {1, 2, 3, 4, 5}.',
  },
];
