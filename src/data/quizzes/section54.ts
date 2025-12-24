import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section54Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is the modulus of z = 3e^(iπ/4)?',
    options: ['3', 'π/4', '1', 'e'],
    correctIndex: 0,
    explanation: 'In re^(iθ), r is the modulus. Here r = 3.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is the argument of z = e^(iπ/3)?',
    options: ['π/3', '1', '3', 'e'],
    correctIndex: 0,
    explanation: 'In e^(iθ), θ is the argument. Here θ = π/3.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'According to Euler\'s formula, e^(iπ) equals:',
    options: ['-1', '1', 'i', '-i'],
    correctIndex: 0,
    explanation: 'e^(iπ) = cos(π) + i·sin(π) = -1 + 0 = -1.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is e^(i·0)?',
    options: ['1', '0', 'i', 'e'],
    correctIndex: 0,
    explanation: 'e^(i·0) = cos(0) + i·sin(0) = 1 + 0 = 1.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'How many cube roots of unity are there?',
    options: ['3', '1', '2', '6'],
    correctIndex: 0,
    explanation: 'The nth roots of unity are n in number. For n = 3, there are 3 roots.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Write 1 + i in polar form. What is the modulus?',
    options: ['√2', '2', '1', '√3'],
    correctIndex: 0,
    explanation: '|1 + i| = √(1² + 1²) = √2.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What is e^(iπ/2)?',
    options: ['i', '-i', '1', '-1'],
    correctIndex: 0,
    explanation: 'e^(iπ/2) = cos(π/2) + i·sin(π/2) = 0 + i = i.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'If z₁ = 2e^(iπ/6) and z₂ = 3e^(iπ/3), what is |z₁z₂|?',
    options: ['6', '5', '1', 'π/2'],
    correctIndex: 0,
    explanation: '|z₁z₂| = |z₁| · |z₂| = 2 · 3 = 6.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'What is arg(z₁z₂) if arg(z₁) = π/6 and arg(z₂) = π/3?',
    options: ['π/2', 'π/6', 'π/3', 'π/18'],
    correctIndex: 0,
    explanation: 'arg(z₁z₂) = arg(z₁) + arg(z₂) = π/6 + π/3 = π/2.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'The argument of -1 is:',
    options: ['π', '0', 'π/2', '-π/2'],
    correctIndex: 0,
    explanation: '-1 = e^(iπ), so its argument is π.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Compute (e^(iπ/4))⁴.',
    options: ['-1', '1', 'i', '-i'],
    correctIndex: 0,
    explanation: '(e^(iπ/4))⁴ = e^(iπ) = -1.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Using De Moivre\'s theorem, (cos θ + i sin θ)³ equals:',
    options: ['cos 3θ + i sin 3θ', '3cos θ + 3i sin θ', 'cos³ θ + i sin³ θ', '(cos θ)³ + i(sin θ)³'],
    correctIndex: 0,
    explanation: 'De Moivre: (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ).'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'What is (1 + i)⁶?',
    options: ['-8i', '8i', '8', '-8'],
    correctIndex: 0,
    explanation: '1 + i = √2 e^(iπ/4). (1+i)⁶ = (√2)⁶ e^(i·6π/4) = 8 e^(i·3π/2) = 8(-i) = -8i.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Find all square roots of i.',
    options: ['±(1+i)/√2', '±i', '±1', '±(1-i)/√2'],
    correctIndex: 0,
    explanation: 'i = e^(iπ/2). Square roots: e^(iπ/4) and e^(i5π/4) = (1+i)/√2 and (-1-i)/√2 = -(1+i)/√2.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'The primitive 4th roots of unity (not equal to ±1) are:',
    options: ['±i', '±1', '1 and -1', '0'],
    correctIndex: 0,
    explanation: '4th roots of unity: 1, i, -1, -i. The primitive ones (order exactly 4) are ±i.'
  }
];
