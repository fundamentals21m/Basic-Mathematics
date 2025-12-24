import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section53Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is $i^2$?',
    options: ['$-1$', '$1$', '$i$', '$-i$'],
    correctIndex: 0,
    explanation: 'By definition, $i^2 = -1$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is the real part of $3 + 4i$?',
    options: ['$3$', '$4$', '$3 + 4i$', '$5$'],
    correctIndex: 0,
    explanation: 'In $a + bi$, the real part is $a$. Here, $a = 3$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is the conjugate of $2 + 5i$?',
    options: ['$2 - 5i$', '$-2 + 5i$', '$-2 - 5i$', '$5 + 2i$'],
    correctIndex: 0,
    explanation: 'The conjugate of $a + bi$ is $a - bi$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'Compute $(2 + i) + (3 - 2i)$.',
    options: ['$5 - i$', '$5 + i$', '$1 + 3i$', '$6 - i$'],
    correctIndex: 0,
    explanation: 'Add real parts: $2 + 3 = 5$. Add imaginary parts: $1 + (-2) = -1$. Result: $5 - i$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is $|3 + 4i|$?',
    options: ['$5$', '$7$', '$1$', '$25$'],
    correctIndex: 0,
    explanation: '$|3 + 4i| = \\sqrt{9 + 16} = \\sqrt{25} = 5$.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Compute $(1 + i)(1 - i)$.',
    options: ['$2$', '$2i$', '$0$', '$1 + i^2$'],
    correctIndex: 0,
    explanation: '$(1 + i)(1 - i) = 1 - i^2 = 1 - (-1) = 2$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What is $i^3$?',
    options: ['$-i$', '$i$', '$1$', '$-1$'],
    correctIndex: 0,
    explanation: '$i^3 = i^2 \\cdot i = (-1) \\cdot i = -i$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Compute $(2 - i)(3 + 2i)$.',
    options: ['$8 + i$', '$6 - 2i$', '$8 - i$', '$4 + 7i$'],
    correctIndex: 0,
    explanation: '$= 6 + 4i - 3i - 2i^2 = 6 + i + 2 = 8 + i$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'What is $(2 + 3i)(2 - 3i)$?',
    options: ['$13$', '$4 - 9i^2$', '$-5$', '$4 + 9$'],
    correctIndex: 0,
    explanation: '$z \\cdot \\bar{z} = a^2 + b^2 = 4 + 9 = 13$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Find $|1 - i|$.',
    options: ['$\\sqrt{2}$', '$0$', '$2$', '$1$'],
    correctIndex: 0,
    explanation: '$|1 - i| = \\sqrt{1^2 + (-1)^2} = \\sqrt{2}$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Compute $\\frac{1}{1 + i}$.',
    options: ['$\\frac{1 - i}{2}$', '$1 - i$', '$\\frac{1 + i}{2}$', '$\\frac{2}{1 + i}$'],
    correctIndex: 0,
    explanation: '$\\frac{1}{1+i} = \\frac{1-i}{(1+i)(1-i)} = \\frac{1-i}{2}$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'What is $i^4$?',
    options: ['$1$', '$-1$', '$i$', '$-i$'],
    correctIndex: 0,
    explanation: '$i^4 = (i^2)^2 = (-1)^2 = 1$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Solve $z^2 = -1$.',
    options: ['$z = \\pm i$', '$z = \\pm 1$', '$z = i$ only', 'No solution'],
    correctIndex: 0,
    explanation: '$z^2 = -1$ means $z = i$ or $z = -i$, since $i^2 = (-i)^2 = -1$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If $z = 3 - 4i$, compute $z \\cdot \\bar{z}$.',
    options: ['$25$', '$9 + 16$', '$-7$', '$7 - 24i$'],
    correctIndex: 0,
    explanation: '$z \\cdot \\bar{z} = 3^2 + 4^2 = 9 + 16 = 25$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Find $\\frac{2 + i}{1 - i}$ in the form $a + bi$.',
    options: ['$\\frac{1}{2} + \\frac{3i}{2}$', '$\\frac{3}{2} + \\frac{i}{2}$', '$1 + 2i$', '$2 - i$'],
    correctIndex: 0,
    explanation: 'Multiply by $\\frac{1+i}{1+i}$: $\\frac{(2+i)(1+i)}{2} = \\frac{2 + 2i + i + i^2}{2} = \\frac{1 + 3i}{2} = \\frac{1}{2} + \\frac{3i}{2}$.'
  }
];
