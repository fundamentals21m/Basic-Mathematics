import { Quiz } from './Quiz';
import type { QuizQuestion } from './Quiz';

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is √9?',
    options: ['−3', '3', '±3', '81'],
    correctIndex: 1,
    explanation: 'By convention, √a denotes the unique POSITIVE number whose square is a. So √9 = 3, not ±3.',
  },
  {
    id: 2,
    question: 'What is |−7|?',
    options: ['−7', '7', '0', '1/7'],
    correctIndex: 1,
    explanation: 'Absolute value gives the distance from zero, which is always non-negative. |−7| = 7.',
  },
  {
    id: 3,
    question: 'What is 8<sup>2/3</sup>?',
    options: ['2', '4', '16', '6'],
    correctIndex: 1,
    explanation: '8<sup>2/3</sup> = (8<sup>1/3</sup>)² = 2² = 4. The cube root of 8 is 2, then square it.',
  },
  {
    id: 4,
    question: 'If a &lt; b and c &lt; 0, then:',
    options: ['ac &lt; bc', 'ac &gt; bc', 'ac = bc', 'Cannot determine'],
    correctIndex: 1,
    explanation: 'Multiplying both sides of an inequality by a negative number REVERSES the inequality. So ac &gt; bc.',
  },
  {
    id: 5,
    question: 'What is 5<sup>0</sup>?',
    options: ['0', '1', '5', 'Undefined'],
    correctIndex: 1,
    explanation: 'Any non-zero number raised to the power 0 equals 1. This follows from a<sup>n</sup>/a<sup>n</sup> = a<sup>n−n</sup> = a<sup>0</sup> = 1.',
  },
  {
    id: 6,
    question: 'Solve: |x + 3| = 5',
    options: ['x = 2 only', 'x = −8 only', 'x = 2 or x = −8', 'No solution'],
    correctIndex: 2,
    explanation: 'If |x + 3| = 5, then x + 3 = 5 or x + 3 = −5. So x = 2 or x = −8.',
  },
  {
    id: 7,
    question: 'Which interval represents x &gt; 2?',
    options: ['[2, ∞)', '(2, ∞)', '(−∞, 2)', '[−∞, 2]'],
    correctIndex: 1,
    explanation: 'x &gt; 2 means all numbers greater than 2, not including 2 itself. Parenthesis means "not included", so (2, ∞).',
  },
  {
    id: 8,
    question: 'What is 2<sup>−3</sup>?',
    options: ['−8', '−6', '1/8', '8'],
    correctIndex: 2,
    explanation: 'A negative exponent means reciprocal: 2<sup>−3</sup> = 1/2³ = 1/8.',
  },
  {
    id: 9,
    question: 'If 0 &lt; a &lt; b, then:',
    options: ['1/a &lt; 1/b', '1/a &gt; 1/b', '1/a = 1/b', 'Cannot determine'],
    correctIndex: 1,
    explanation: 'Taking reciprocals of positive numbers reverses the inequality. If 0 &lt; a &lt; b, then 1/b &lt; 1/a.',
  },
  {
    id: 10,
    question: 'To rationalize 1/√2, multiply by:',
    options: ['√2/√2', '2/2', '1/√2', '−√2/−√2'],
    correctIndex: 0,
    explanation: 'Multiply by √2/√2 = 1 to get (1·√2)/(√2·√2) = √2/2. This removes the square root from the denominator.',
  },
];

export function RealNumbersQuiz() {
  return <Quiz title="Chapter 3: Real Numbers" questions={questions} />;
}
