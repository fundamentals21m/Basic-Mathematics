import { Quiz } from './Quiz';
import type { QuizQuestion } from './Quiz';

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Solve the system: x + y = 5 and x − y = 1',
    options: ['x = 2, y = 3', 'x = 3, y = 2', 'x = 4, y = 1', 'x = 1, y = 4'],
    correctIndex: 1,
    explanation: 'Add the equations: 2x = 6, so x = 3. Substitute: 3 + y = 5, so y = 2.',
  },
  {
    id: 2,
    question: 'What is the first step in the elimination method?',
    options: [
      'Substitute one equation into the other',
      'Multiply equations to match coefficients',
      'Graph both equations',
      'Set both equations equal to zero'
    ],
    correctIndex: 1,
    explanation: 'The elimination method starts by multiplying equations so that one variable has matching (or opposite) coefficients, allowing elimination by addition or subtraction.',
  },
  {
    id: 3,
    question: 'When does a system of 2 equations have no solution?',
    options: [
      'When the equations are identical',
      'When the lines are parallel but different',
      'When the determinant is non-zero',
      'When one coefficient is zero'
    ],
    correctIndex: 1,
    explanation: 'Parallel lines never intersect, so there\'s no point (x, y) satisfying both. This happens when the left sides are proportional but right sides are not.',
  },
  {
    id: 4,
    question: 'Solve: 2x + 3y = 12 and 4x + 6y = 24',
    options: [
      'x = 0, y = 4',
      'x = 6, y = 0',
      'Infinitely many solutions',
      'No solution'
    ],
    correctIndex: 2,
    explanation: 'The second equation is exactly 2× the first. They represent the same line, so every point on that line is a solution.',
  },
  {
    id: 5,
    question: 'For ax + by = e and cx + dy = f, when does a unique solution exist?',
    options: [
      'When a = c',
      'When ad − bc = 0',
      'When ad − bc ≠ 0',
      'When e = f'
    ],
    correctIndex: 2,
    explanation: 'The determinant ad − bc must be non-zero for a unique solution. When it\'s zero, the lines are either parallel (no solution) or identical (infinite solutions).',
  },
  {
    id: 6,
    question: 'Solve: x + 2y = 7 and 3x − y = 0',
    options: [
      'x = 1, y = 3',
      'x = 3, y = 2',
      'x = 2, y = 6',
      'x = 0, y = 0'
    ],
    correctIndex: 0,
    explanation: 'From equation 2: y = 3x. Substitute into equation 1: x + 6x = 7, so 7x = 7, x = 1, y = 3.',
  },
  {
    id: 7,
    question: 'How many equations are needed to solve for 3 unknowns?',
    options: ['2', '3', '4', '1'],
    correctIndex: 1,
    explanation: 'Generally, you need as many independent equations as unknowns. For 3 unknowns, you need 3 equations.',
  },
  {
    id: 8,
    question: 'To eliminate z from 2x + y + z = 5 and x − y + 2z = 3, you should:',
    options: [
      'Multiply first equation by 2 and subtract',
      'Add the equations directly',
      'Multiply first equation by −2 and add',
      'There is no way to eliminate z'
    ],
    correctIndex: 0,
    explanation: 'Multiply the first equation by 2 to get 4x + 2y + 2z = 10, then subtract the second equation to eliminate z.',
  },
];

export function LinearEquationsQuiz() {
  return <Quiz title="Chapter 2: Linear Equations" questions={questions} />;
}
