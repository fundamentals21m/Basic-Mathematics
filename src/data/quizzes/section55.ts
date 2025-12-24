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
  },

  // Additional Easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'What is the first step in an induction proof?',
    options: ['Verify the base case', 'State the inductive hypothesis', 'Prove $P(k+1)$', 'Write the conclusion'],
    correctIndex: 0,
    explanation: 'Always start by verifying the base case (usually $n=1$).'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'In the inductive step, we show that $P(k)$ implies:',
    options: ['$P(k+1)$', '$P(k-1)$', '$P(1)$', 'All $P(n)$'],
    correctIndex: 0,
    explanation: 'The inductive step proves that if $P(k)$ is true, then $P(k+1)$ is also true.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'What is $1 + 2 + 3 + \\cdots + 5$?',
    options: ['$15$', '$10$', '$20$', '$25$'],
    correctIndex: 0,
    explanation: 'Using $\\frac{n(n+1)}{2}$: $\\frac{5(6)}{2} = 15$.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'The statement "if $P(k)$ then $P(k+1)$" is called:',
    options: ['Inductive step', 'Base case', 'Hypothesis', 'Conclusion'],
    correctIndex: 0,
    explanation: 'This implication is the inductive step of the proof.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'What is $2^1 + 2^2 + 2^3$?',
    options: ['$14$', '$8$', '$12$', '$16$'],
    correctIndex: 0,
    explanation: '$2 + 4 + 8 = 14$.'
  },

  // Additional Medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'To prove $1 + 3 + 5 + \\cdots + (2n-1) = n^2$, the base case $n=1$ gives:',
    options: ['$1 = 1$', '$3 = 1$', '$0 = 0$', '$2 = 2$'],
    correctIndex: 0,
    explanation: 'LHS $= 1$. RHS $= 1^2 = 1$. So $1 = 1$. ✓'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'In proving $2^n \\geq n+1$, what is the base case for $n=1$?',
    options: ['$2 \\geq 2$', '$2 \\geq 1$', '$1 \\geq 2$', '$4 \\geq 2$'],
    correctIndex: 0,
    explanation: '$2^1 = 2$ and $1 + 1 = 2$, so $2 \\geq 2$. ✓'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'Prove: $n^2 \\geq n$ for $n \\geq 1$. What\'s the base case?',
    options: ['$n = 1$: $1 \\geq 1$', '$n = 0$: $0 \\geq 0$', '$n = 2$: $4 \\geq 2$', '$n = 1$: $1 \\geq 0$'],
    correctIndex: 0,
    explanation: 'For $n = 1$: $1^2 = 1 \\geq 1$. ✓'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'Strong induction assumes that $P(m)$ is true for:',
    options: ['All $m \\leq k$', 'Only $m = k$', 'Only $m = 1$', '$m = k+1$'],
    correctIndex: 0,
    explanation: 'Strong induction assumes $P(1), P(2), \\ldots, P(k)$ are all true.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'To prove $\\sum_{i=1}^{n} i^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$, what is added in the inductive step?',
    options: ['$(k+1)^3$', '$k^3$', '$(k+1)^2$', '$k+1$'],
    correctIndex: 0,
    explanation: 'Going from $n = k$ to $n = k + 1$ means adding the next cube: $(k + 1)^3$.'
  },

  // Additional Hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'In proving $\\sum_{k=1}^{n} k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$, the inductive step shows:',
    options: ['$\\left(\\frac{k(k+1)}{2}\\right)^2 + (k+1)^3 = \\left(\\frac{(k+1)(k+2)}{2}\\right)^2$', '$k^3 + (k+1)^3 = (k+2)^3$', '$k^2 + (k+1)^2 = (k+2)^2$', '$k + (k+1) = 2k+1$'],
    correctIndex: 0,
    explanation: 'Add $(k+1)^3$ to both sides of $P(k)$ and simplify to get $P(k+1)$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'Prove $4^n > n^3$ for $n \\geq 4$. Which base case works?',
    options: ['$n = 4$: $256 > 64$', '$n = 1$: $4 > 1$', '$n = 3$: $64 > 27$', '$n = 2$: $16 > 8$'],
    correctIndex: 0,
    explanation: '$n = 4$: $4^4 = 256$, $4^3 = 64$. $256 > 64$. ✓'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'In proving $\\sum_{k=0}^{n} 2^k = 2^{n+1} - 1$, the inductive step uses:',
    options: ['$(2^{k+1} - 1) + 2^{k+1} = 2^{k+2} - 1$', '$2^k + 2^{k+1} = 2^{k+2}$', '$2^k - 1 = 2^{k+1}$', 'Multiply by $2$'],
    correctIndex: 0,
    explanation: 'Add $2^{k+1}$: $(2^{k+1} - 1) + 2^{k+1} = 2 \\cdot 2^{k+1} - 1 = 2^{k+2} - 1$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'For which $n$ does $n! > 3^n$ hold?',
    options: ['$n \\geq 7$', '$n \\geq 4$', '$n \\geq 1$', 'All $n$'],
    correctIndex: 0,
    explanation: 'Check: $7! = 5040 > 2187 = 3^7$. For $n=6$: $720 < 729$. So $n \\geq 7$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'In proving $\\sum_{k=1}^{n} \\frac{1}{k(k+1)} = 1 - \\frac{1}{n+1}$, the proof uses:',
    options: ['Telescoping series', 'Geometric series', 'Arithmetic series', 'Power series'],
    correctIndex: 0,
    explanation: 'Using partial fractions: $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$, which telescopes.'
  }
];
