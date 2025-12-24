import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section46Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What is 2³?',
    options: ['8', '6', '9', '5'],
    correctIndex: 0,
    explanation: '2³ = 2 × 2 × 2 = 8.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'The function f(x) = 3ˣ passes through which point?',
    options: ['(0, 1)', '(1, 0)', '(0, 3)', '(3, 0)'],
    correctIndex: 0,
    explanation: 'For any base b, bˣ = 1 when x = 0. So f(0) = 3⁰ = 1.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'Is f(x) = 2ˣ increasing or decreasing?',
    options: ['Increasing', 'Decreasing', 'Neither', 'Both'],
    correctIndex: 0,
    explanation: 'When b > 1, the exponential function bˣ is increasing.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is the horizontal asymptote of f(x) = 5ˣ?',
    options: ['y = 0', 'y = 1', 'y = 5', 'x = 0'],
    correctIndex: 0,
    explanation: 'As x → -∞, 5ˣ → 0. The horizontal asymptote is y = 0.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'What is the approximate value of e?',
    options: ['2.718', '3.14', '1.414', '2.0'],
    correctIndex: 0,
    explanation: 'e ≈ 2.71828...'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Simplify 2⁴ · 2³.',
    options: ['2⁷', '2¹²', '4⁷', '2'],
    correctIndex: 0,
    explanation: 'When multiplying same bases, add exponents: 2⁴ · 2³ = 2⁴⁺³ = 2⁷.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Simplify (3²)⁴.',
    options: ['3⁸', '3⁶', '9⁴', '3²'],
    correctIndex: 0,
    explanation: 'Power of a power: multiply exponents. (3²)⁴ = 3⁸.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'If f(x) = (1/2)ˣ, what is f(3)?',
    options: ['1/8', '1/6', '8', '3/2'],
    correctIndex: 0,
    explanation: 'f(3) = (1/2)³ = 1/8.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'The range of f(x) = eˣ is:',
    options: ['(0, ∞)', '(-∞, ∞)', '[0, ∞)', '(1, ∞)'],
    correctIndex: 0,
    explanation: 'Exponential functions always output positive values: range is (0, ∞).'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Solve 2ˣ = 16.',
    options: ['x = 4', 'x = 8', 'x = 2', 'x = 3'],
    correctIndex: 0,
    explanation: '16 = 2⁴, so 2ˣ = 2⁴ means x = 4.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'If $1000 is invested at 6% compounded continuously, find the value after 5 years (use e⁰·³ ≈ 1.35).',
    options: ['$1350', '$1300', '$1060', '$1500'],
    correctIndex: 0,
    explanation: 'A = 1000e^(0.06×5) = 1000e^0.3 ≈ 1000(1.35) = $1350.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'A population doubles every 10 years. If it starts at 1000, what is it after 30 years?',
    options: ['8000', '3000', '4000', '6000'],
    correctIndex: 0,
    explanation: '30 years = 3 doubling periods. 1000 × 2³ = 1000 × 8 = 8000.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Solve 3^(2x) = 27.',
    options: ['x = 3/2', 'x = 3', 'x = 2', 'x = 1'],
    correctIndex: 0,
    explanation: '27 = 3³, so 3^(2x) = 3³ means 2x = 3, so x = 3/2.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If f(x) = e^(2x), find x when f(x) = e⁶.',
    options: ['x = 3', 'x = 6', 'x = 2', 'x = 12'],
    correctIndex: 0,
    explanation: 'e^(2x) = e⁶ means 2x = 6, so x = 3.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'A substance decays by half every 4 hours. What fraction remains after 12 hours?',
    options: ['1/8', '1/4', '1/3', '1/6'],
    correctIndex: 0,
    explanation: '12 hours = 3 half-lives. Remaining: (1/2)³ = 1/8.'
  }
];
