import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section55Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'What are the two parts of a proof by induction?',
    options: ['Base case and inductive step', 'Hypothesis and conclusion', 'Definition and theorem', 'Given and proof'],
    correctIndex: 0,
    explanation: 'Induction requires a base case (first case) and an inductive step ($k$ implies $k+1$).'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'In the base case, which value of $n$ is typically verified?',
    options: ['$n = 1$', '$n = 0$', '$n = k$', '$n = k + 1$'],
    correctIndex: 0,
    explanation: 'The base case usually verifies $n = 1$ (or the smallest relevant value).'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'In the inductive step, we assume $P(k)$ is true. What do we prove?',
    options: ['$P(k + 1)$', '$P(k)$', '$P(1)$', '$P(n)$'],
    correctIndex: 0,
    explanation: 'We prove that if $P(k)$ holds, then $P(k + 1)$ also holds.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'What is $1 + 2 + 3 + \\cdots + 10$?',
    options: ['$55$', '$45$', '$100$', '$50$'],
    correctIndex: 0,
    explanation: 'Using $\\frac{n(n+1)}{2}$: $\\frac{10(11)}{2} = 55$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'The assumption that $P(k)$ is true is called the:',
    options: ['Inductive hypothesis', 'Base case', 'Conclusion', 'Theorem'],
    correctIndex: 0,
    explanation: 'The assumption $P(k)$ is called the inductive hypothesis.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'To prove $1^2 + 2^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}$, the base case $n=1$ gives:',
    options: ['$1 = 1$', '$1 = 0$', '$4 = 4$', '$2 = 2$'],
    correctIndex: 0,
    explanation: 'LHS $= 1^2 = 1$. RHS $= \\frac{1(2)(3)}{6} = \\frac{6}{6} = 1$. So $1 = 1$. ✓'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'In proving $2^n > n$, why does $2^{k+1} = 2 \\cdot 2^k > 2k \\geq k + 1$ work?',
    options: ['Because $2k \\geq k + 1$ when $k \\geq 1$', 'Because $2k = k + 1$ always', 'By the base case', 'By definition'],
    correctIndex: 0,
    explanation: '$2k \\geq k + 1$ simplifies to $k \\geq 1$, which is true by assumption.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Prove: $n! > 2^n$ for $n \\geq 4$. What\'s the base case value?',
    options: ['$n = 4$: $24 > 16$', '$n = 1$: $1 > 2$', '$n = 2$: $2 > 4$', '$n = 3$: $6 > 8$'],
    correctIndex: 0,
    explanation: 'For $n = 4$: $4! = 24$, $2^4 = 16$. $24 > 16$. ✓'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Strong induction differs from regular induction by:',
    options: ['Assuming all cases up to $k$, not just $k$', 'Having multiple base cases', 'Being easier', 'Not needing a base case'],
    correctIndex: 0,
    explanation: 'Strong induction assumes $P(1), P(2), \\ldots, P(k)$ are all true to prove $P(k+1)$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'To prove $1 + 3 + 5 + \\cdots + (2n-1) = n^2$, what is the $(k+1)$th odd number?',
    options: ['$2(k+1) - 1 = 2k + 1$', '$2k + 2$', '$k + 1$', '$2k - 1$'],
    correctIndex: 0,
    explanation: 'The $n$th odd number is $2n - 1$, so the $(k+1)$th is $2(k+1) - 1 = 2k + 1$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'In proving $\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$, the inductive step adds:',
    options: ['$(k+1)^2$', '$k^2$', '$k+1$', '$2k+1$'],
    correctIndex: 0,
    explanation: 'Going from $n = k$ to $n = k + 1$ means adding the next term: $(k + 1)^2$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Prove $3^n > n^2$ for $n \\geq 2$. Which base case works?',
    options: ['$n = 2$: $9 > 4$', '$n = 1$: $3 > 1$', '$n = 0$: $1 > 0$', '$n = 3$: $27 > 9$'],
    correctIndex: 0,
    explanation: '$n = 2$: $3^2 = 9$, $2^2 = 4$. $9 > 4$. ✓'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'In proving $\\sum_{k=1}^{n} \\frac{1}{k(k+1)} = \\frac{n}{n+1}$, the inductive step uses:',
    options: ['$\\frac{n}{n+1} + \\frac{1}{(n+1)(n+2)} = \\frac{n+1}{n+2}$', '$\\frac{n}{n+1} = \\frac{n+1}{n+2}$', 'Adding $1$ to both sides', 'Multiplying by $n+1$'],
    correctIndex: 0,
    explanation: 'Add the $(k+1)$th term: $\\frac{n}{n+1} + \\frac{1}{(n+1)(n+2)}$ and simplify to $\\frac{n+1}{n+2}$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Fibonacci numbers: $F_1=F_2=1$, $F_n=F_{n-1}+F_{n-2}$. Why use strong induction to prove properties?',
    options: ['$F_n$ depends on two previous terms', 'It\'s always required', 'Base case is hard', 'Regular induction fails'],
    correctIndex: 0,
    explanation: 'Fibonacci recurrence uses $F_{n-1}$ and $F_{n-2}$, so we need both previous cases, not just one.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'In proving $(1+x)^n \\geq 1 + nx$ for $x \\geq -1$, the inductive step multiplies by:',
    options: ['$(1 + x)$', '$(1 + nx)$', '$n$', '$x$'],
    correctIndex: 0,
    explanation: '$(1+x)^{k+1} = (1+x)^k \\cdot (1+x) \\geq (1+kx)(1+x)$ using the inductive hypothesis.'
  }
];
