import { Quiz } from './Quiz';
import type { QuizQuestion } from './Quiz';

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is the quadratic formula?',
    options: [
      'x = (−b ± √(b² − 4ac)) / 2a',
      'x = (b ± √(b² − 4ac)) / 2a',
      'x = (−b ± √(b² + 4ac)) / 2a',
      'x = (−b ± √(4ac − b²)) / 2a'
    ],
    correctIndex: 0,
    explanation: 'The quadratic formula for ax² + bx + c = 0 is x = (−b ± √(b² − 4ac)) / 2a.',
  },
  {
    id: 2,
    question: 'What is the discriminant of x² − 4x + 4 = 0?',
    options: ['8', '0', '−8', '16'],
    correctIndex: 1,
    explanation: 'Discriminant = b² − 4ac = (−4)² − 4(1)(4) = 16 − 16 = 0.',
  },
  {
    id: 3,
    question: 'If the discriminant is negative, the equation has:',
    options: [
      'Two distinct real solutions',
      'One repeated real solution',
      'No real solutions',
      'Infinitely many solutions'
    ],
    correctIndex: 2,
    explanation: 'A negative discriminant means √(b² − 4ac) is not real, so there are no real solutions.',
  },
  {
    id: 4,
    question: 'To complete the square for x² + 6x, add:',
    options: ['3', '6', '9', '36'],
    correctIndex: 2,
    explanation: 'Take half the coefficient of x (which is 6/2 = 3) and square it: 3² = 9. Then x² + 6x + 9 = (x + 3)².',
  },
  {
    id: 5,
    question: 'Solve x² − 9 = 0:',
    options: ['x = 3 only', 'x = −3 only', 'x = ±3', 'No solution'],
    correctIndex: 2,
    explanation: 'x² = 9, so x = ±√9 = ±3.',
  },
  {
    id: 6,
    question: 'The vertex of y = x² − 4x + 3 is at x = :',
    options: ['−4', '4', '2', '−2'],
    correctIndex: 2,
    explanation: 'The x-coordinate of the vertex is x = −b/(2a) = −(−4)/(2·1) = 4/2 = 2.',
  },
  {
    id: 7,
    question: 'If x² + bx + c = 0 has solutions r and s, then:',
    options: [
      'r + s = b and rs = c',
      'r + s = −b and rs = c',
      'r + s = b and rs = −c',
      'r + s = −b and rs = −c'
    ],
    correctIndex: 1,
    explanation: 'By Vieta\'s formulas, sum of roots = −b/a = −b, and product of roots = c/a = c (when a = 1).',
  },
  {
    id: 8,
    question: 'Solve 2x² + 5x − 3 = 0:',
    options: [
      'x = 1/2 or x = −3',
      'x = −1/2 or x = 3',
      'x = 1/2 or x = 3',
      'x = 3/2 or x = −1'
    ],
    correctIndex: 0,
    explanation: 'Using the quadratic formula: x = (−5 ± √(25 + 24))/4 = (−5 ± 7)/4. So x = 2/4 = 1/2 or x = −12/4 = −3.',
  },
  {
    id: 9,
    question: 'What does "completing the square" achieve?',
    options: [
      'Factors the quadratic',
      'Transforms it into (x − h)² = k form',
      'Eliminates the x² term',
      'Makes all coefficients integers'
    ],
    correctIndex: 1,
    explanation: 'Completing the square rewrites ax² + bx + c = 0 in the form (x − h)² = k, which can be solved by taking square roots.',
  },
  {
    id: 10,
    question: 'For x² − 5x + 6 = 0, the discriminant is:',
    options: ['1', '−1', '11', '−11'],
    correctIndex: 0,
    explanation: 'Discriminant = b² − 4ac = (−5)² − 4(1)(6) = 25 − 24 = 1. Since it\'s positive, there are two distinct real roots.',
  },
];

export function QuadraticsQuiz() {
  return <Quiz title="Chapter 4: Quadratic Equations" questions={questions} />;
}
