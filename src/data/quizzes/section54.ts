import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section54Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the modulus of $z = 3e^{i\\pi/4}$?',
    options: ['$3$', '$\\pi/4$', '$1$', '$e$'],
    correctIndex: 0,
    explanation: 'In $re^{i\\theta}$, $r$ is the modulus. Here $r = 3$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is the argument of $z = e^{i\\pi/3}$?',
    options: ['$\\pi/3$', '$1$', '$3$', '$e$'],
    correctIndex: 0,
    explanation: 'In $e^{i\\theta}$, $\\theta$ is the argument. Here $\\theta = \\pi/3$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'According to Euler\'s formula, $e^{i\\pi}$ equals:',
    options: ['$-1$', '$1$', '$i$', '$-i$'],
    correctIndex: 0,
    explanation: '$e^{i\\pi} = \\cos(\\pi) + i\\sin(\\pi) = -1 + 0 = -1$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is $e^{i \\cdot 0}$?',
    options: ['$1$', '$0$', '$i$', '$e$'],
    correctIndex: 0,
    explanation: '$e^{i \\cdot 0} = \\cos(0) + i\\sin(0) = 1 + 0 = 1$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'How many cube roots of unity are there?',
    options: ['$3$', '$1$', '$2$', '$6$'],
    correctIndex: 0,
    explanation: 'The $n$th roots of unity are $n$ in number. For $n = 3$, there are $3$ roots.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Write $1 + i$ in polar form. What is the modulus?',
    options: ['$\\sqrt{2}$', '$2$', '$1$', '$\\sqrt{3}$'],
    correctIndex: 0,
    explanation: '$|1 + i| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What is $e^{i\\pi/2}$?',
    options: ['$i$', '$-i$', '$1$', '$-1$'],
    correctIndex: 0,
    explanation: '$e^{i\\pi/2} = \\cos(\\pi/2) + i\\sin(\\pi/2) = 0 + i = i$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'If $z_1 = 2e^{i\\pi/6}$ and $z_2 = 3e^{i\\pi/3}$, what is $|z_1 z_2|$?',
    options: ['$6$', '$5$', '$1$', '$\\pi/2$'],
    correctIndex: 0,
    explanation: '$|z_1 z_2| = |z_1| \\cdot |z_2| = 2 \\cdot 3 = 6$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'What is $\\arg(z_1 z_2)$ if $\\arg(z_1) = \\pi/6$ and $\\arg(z_2) = \\pi/3$?',
    options: ['$\\pi/2$', '$\\pi/6$', '$\\pi/3$', '$\\pi/18$'],
    correctIndex: 0,
    explanation: '$\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) = \\pi/6 + \\pi/3 = \\pi/2$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'The argument of $-1$ is:',
    options: ['$\\pi$', '$0$', '$\\pi/2$', '$-\\pi/2$'],
    correctIndex: 0,
    explanation: '$-1 = e^{i\\pi}$, so its argument is $\\pi$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Compute $(e^{i\\pi/4})^4$.',
    options: ['$-1$', '$1$', '$i$', '$-i$'],
    correctIndex: 0,
    explanation: '$(e^{i\\pi/4})^4 = e^{i\\pi} = -1$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Using De Moivre\'s theorem, $(\\cos\\theta + i\\sin\\theta)^3$ equals:',
    options: ['$\\cos 3\\theta + i\\sin 3\\theta$', '$3\\cos\\theta + 3i\\sin\\theta$', '$\\cos^3\\theta + i\\sin^3\\theta$', '$(\\cos\\theta)^3 + i(\\sin\\theta)^3$'],
    correctIndex: 0,
    explanation: 'De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'What is $(1 + i)^6$?',
    options: ['$-8i$', '$8i$', '$8$', '$-8$'],
    correctIndex: 0,
    explanation: '$1 + i = \\sqrt{2}e^{i\\pi/4}$. $(1+i)^6 = (\\sqrt{2})^6 e^{i \\cdot 6\\pi/4} = 8e^{i \\cdot 3\\pi/2} = 8(-i) = -8i$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Find all square roots of $i$.',
    options: ['$\\pm\\frac{1+i}{\\sqrt{2}}$', '$\\pm i$', '$\\pm 1$', '$\\pm\\frac{1-i}{\\sqrt{2}}$'],
    correctIndex: 0,
    explanation: '$i = e^{i\\pi/2}$. Square roots: $e^{i\\pi/4}$ and $e^{i5\\pi/4} = \\frac{1+i}{\\sqrt{2}}$ and $-\\frac{1+i}{\\sqrt{2}}$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'The primitive $4$th roots of unity (not equal to $\\pm 1$) are:',
    options: ['$\\pm i$', '$\\pm 1$', '$1$ and $-1$', '$0$'],
    correctIndex: 0,
    explanation: '$4$th roots of unity: $1, i, -1, -i$. The primitive ones (order exactly $4$) are $\\pm i$.'
  },

  // Additional Easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'What is the modulus of $z = 5e^{i\\pi/6}$?',
    options: ['$5$', '$\\pi/6$', '$1$', '$6$'],
    correctIndex: 0,
    explanation: 'In $re^{i\\theta}$, the modulus is $r = 5$.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'What is the argument of $z = 2e^{i\\pi/2}$?',
    options: ['$\\pi/2$', '$2$', '$e$', '$1$'],
    correctIndex: 0,
    explanation: 'In $re^{i\\theta}$, the argument is $\\theta = \\pi/2$.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'What is $e^{i \\cdot 2\\pi}$?',
    options: ['$1$', '$-1$', '$0$', '$2\\pi$'],
    correctIndex: 0,
    explanation: '$e^{i \\cdot 2\\pi} = \\cos(2\\pi) + i\\sin(2\\pi) = 1 + 0 = 1$.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'How many square roots of unity are there?',
    options: ['$2$', '$1$', '$4$', '$3$'],
    correctIndex: 0,
    explanation: 'The square roots of unity are $1$ and $-1$, so $2$ roots.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'What is $e^{i\\pi/4} \\cdot e^{i\\pi/4}$?',
    options: ['$e^{i\\pi/2}$', '$e^{i\\pi/8}$', '$e^{i\\pi/16}$', '$1$'],
    correctIndex: 0,
    explanation: '$e^{i\\pi/4} \\cdot e^{i\\pi/4} = e^{i(\\pi/4 + \\pi/4)} = e^{i\\pi/2}$.'
  },

  // Additional Medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Write $-1 + i$ in polar form. What is the modulus?',
    options: ['$\\sqrt{2}$', '$2$', '$1$', '$-1$'],
    correctIndex: 0,
    explanation: '$|-1 + i| = \\sqrt{(-1)^2 + 1^2} = \\sqrt{2}$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'What is $e^{i3\\pi/2}$?',
    options: ['$-i$', '$i$', '$1$', '$-1$'],
    correctIndex: 0,
    explanation: '$e^{i3\\pi/2} = \\cos(3\\pi/2) + i\\sin(3\\pi/2) = 0 + i(-1) = -i$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'If $z_1 = 3e^{i\\pi/4}$ and $z_2 = 2e^{i\\pi/6}$, what is $|z_1 z_2|$?',
    options: ['$6$', '$5$', '$3$', '$2$'],
    correctIndex: 0,
    explanation: '$|z_1 z_2| = |z_1| \\cdot |z_2| = 3 \\cdot 2 = 6$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'What is $\\arg(z_1 z_2)$ if $\\arg(z_1) = \\pi/4$ and $\\arg(z_2) = \\pi/6$?',
    options: ['$5\\pi/12$', '$\\pi/12$', '$\\pi/2$', '$\\pi/24$'],
    correctIndex: 0,
    explanation: '$\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) = \\pi/4 + \\pi/6 = 3\\pi/12 + 2\\pi/12 = 5\\pi/12$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'The argument of $i$ is:',
    options: ['$\\pi/2$', '$0$', '$\\pi$', '$3\\pi/2$'],
    correctIndex: 0,
    explanation: '$i = e^{i\\pi/2}$, so its argument is $\\pi/2$.'
  },

  // Additional Hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'Compute $(e^{i\\pi/3})^6$.',
    options: ['$1$', '$-1$', '$i$', '$e^{2\\pi i}$'],
    correctIndex: 0,
    explanation: '$(e^{i\\pi/3})^6 = e^{i \\cdot 2\\pi} = 1$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'Using De Moivre\'s theorem, $(\\cos\\theta + i\\sin\\theta)^4$ equals:',
    options: ['$\\cos 4\\theta + i\\sin 4\\theta$', '$4\\cos\\theta + 4i\\sin\\theta$', '$\\cos^4\\theta + i\\sin^4\\theta$', '$(\\cos\\theta)^4 + (i\\sin\\theta)^4$'],
    correctIndex: 0,
    explanation: 'De Moivre: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$, so $n=4$ gives $\\cos 4\\theta + i\\sin 4\\theta$.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'What is $(1 - i)^4$?',
    options: ['$-4$', '$4$', '$-4i$', '$4i$'],
    correctIndex: 0,
    explanation: '$1 - i = \\sqrt{2}e^{-i\\pi/4}$. $(1-i)^4 = (\\sqrt{2})^4 e^{-i\\pi} = 4 \\cdot (-1) = -4$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'Find all cube roots of $1$.',
    options: ['$1, e^{i2\\pi/3}, e^{i4\\pi/3}$', '$1, -1, i$', '$1, i, -i$', '$1$ only'],
    correctIndex: 0,
    explanation: 'Cube roots: $e^{i \\cdot 2\\pi k/3}$ for $k = 0, 1, 2$: $1, e^{i2\\pi/3}, e^{i4\\pi/3}$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'The primitive $6$th roots of unity are:',
    options: ['$e^{i\\pi/3}, e^{i5\\pi/3}$', '$e^{i\\pi/3}, e^{i2\\pi/3}$', 'All $6$th roots', '$1, -1$'],
    correctIndex: 0,
    explanation: 'Primitive $6$th roots have order exactly $6$: $e^{i\\pi/3}$ and $e^{i5\\pi/3}$ (gcd with $6$ is $1$).'
  }
];
