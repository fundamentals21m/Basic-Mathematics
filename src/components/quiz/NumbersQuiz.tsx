import { Quiz } from './Quiz';
import type { QuizQuestion } from './Quiz';

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is the additive inverse of −7?',
    options: ['−7', '7', '0', '1/7'],
    correctIndex: 1,
    explanation: 'The additive inverse of a number is the number that, when added to it, gives 0. Since (−7) + 7 = 0, the additive inverse of −7 is 7.',
  },
  {
    id: 2,
    question: 'Which property states that a + b = b + a?',
    options: ['Associativity', 'Commutativity', 'Distributivity', 'Identity'],
    correctIndex: 1,
    explanation: 'The commutative property says the order of addition doesn\'t matter. The associative property deals with grouping: (a + b) + c = a + (b + c).',
  },
  {
    id: 3,
    question: 'What is (−3) × (−4)?',
    options: ['−12', '12', '−7', '7'],
    correctIndex: 1,
    explanation: 'Negative × Negative = Positive. So (−3) × (−4) = 12.',
  },
  {
    id: 4,
    question: 'What is −(−(−5))?',
    options: ['5', '−5', '0', '15'],
    correctIndex: 1,
    explanation: '−(−(−5)) = −(5) = −5. Each negative sign flips the sign.',
  },
  {
    id: 5,
    question: 'If n is odd, what is n²?',
    options: ['Always even', 'Always odd', 'Could be either', 'Always positive'],
    correctIndex: 1,
    explanation: 'An odd number squared is always odd. If n = 2k+1, then n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1, which is odd.',
  },
  {
    id: 6,
    question: 'Which fraction is in lowest form?',
    options: ['6/9', '15/25', '7/21', '8/15'],
    correctIndex: 3,
    explanation: '8 and 15 share no common factors except 1 (8 = 2³, 15 = 3×5). The others can be reduced: 6/9 = 2/3, 15/25 = 3/5, 7/21 = 1/3.',
  },
  {
    id: 7,
    question: 'What is a<sup>m</sup> × a<sup>n</sup>?',
    options: ['a<sup>m×n</sup>', 'a<sup>m+n</sup>', '(a×a)<sup>m+n</sup>', 'a<sup>m−n</sup>'],
    correctIndex: 1,
    explanation: 'When multiplying powers with the same base, add the exponents: a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>.',
  },
  {
    id: 8,
    question: 'The multiplicative inverse of 2/3 is:',
    options: ['−2/3', '2/3', '3/2', '−3/2'],
    correctIndex: 2,
    explanation: 'The multiplicative inverse is the reciprocal. (2/3) × (3/2) = 1, so the inverse of 2/3 is 3/2.',
  },
  {
    id: 9,
    question: '√2 is:',
    options: ['Rational', 'Irrational', 'An integer', 'Negative'],
    correctIndex: 1,
    explanation: '√2 cannot be expressed as a fraction of integers. This was proven by contradiction: if √2 = m/n in lowest form, both m and n must be even, contradicting lowest form.',
  },
  {
    id: 10,
    question: 'What is (a + b)(a − b)?',
    options: ['a² + b²', 'a² − b²', '2ab', 'a² − 2ab + b²'],
    correctIndex: 1,
    explanation: 'This is the difference of squares formula: (a + b)(a − b) = a² − b².',
  },
];

export function NumbersQuiz() {
  return <Quiz title="Chapter 1: Numbers" questions={questions} />;
}
