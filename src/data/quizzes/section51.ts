import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section51Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'How many permutations of $\\{1, 2, 3\\}$ are there?',
    options: ['$6$', '$3$', '$9$', '$8$'],
    correctIndex: 0,
    explanation: '$3! = 3 \\times 2 \\times 1 = 6$ permutations.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is $4!$?',
    options: ['$24$', '$16$', '$12$', '$4$'],
    correctIndex: 0,
    explanation: '$4! = 4 \\times 3 \\times 2 \\times 1 = 24$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'A permutation is what type of function?',
    options: ['Bijection', 'Injection only', 'Surjection only', 'Neither'],
    correctIndex: 0,
    explanation: 'A permutation is a bijection from a set to itself.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'The identity permutation does what?',
    options: ['Fixes all elements', 'Swaps all pairs', 'Reverses order', 'Moves each element one place'],
    correctIndex: 0,
    explanation: 'The identity permutation leaves every element in its original position.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'A transposition swaps how many elements?',
    options: ['Exactly $2$', 'At least $2$', 'All elements', '$1$'],
    correctIndex: 0,
    explanation: 'A transposition swaps exactly two elements and fixes all others.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'If $\\sigma(1) = 3$, $\\sigma(2) = 1$, $\\sigma(3) = 2$, what is $\\sigma^{-1}(1)$?',
    options: ['$2$', '$3$', '$1$', 'Undefined'],
    correctIndex: 0,
    explanation: '$\\sigma^{-1}(1)$ is the element that $\\sigma$ sends to $1$. Since $\\sigma(2) = 1$, we have $\\sigma^{-1}(1) = 2$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'How many elements does $S_5$ (symmetric group on $5$ elements) have?',
    options: ['$120$', '$25$', '$5$', '$32$'],
    correctIndex: 0,
    explanation: '$|S_5| = 5! = 120$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'What is $(1\\;2)(1)$?',
    options: ['$2$', '$1$', '$3$', '$0$'],
    correctIndex: 0,
    explanation: 'The transposition $(1\\;2)$ swaps $1$ and $2$, so $(1\\;2)(1) = 2$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'If $\\sigma \\circ \\tau = e$ (identity), then $\\tau$ is:',
    options: ['$\\sigma^{-1}$', '$\\sigma$', '$e$', 'Undefined'],
    correctIndex: 0,
    explanation: 'If $\\sigma \\circ \\tau = e$, then $\\tau$ is the inverse of $\\sigma$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'How many transpositions are in $S_4$?',
    options: ['$6$', '$4$', '$12$', '$24$'],
    correctIndex: 0,
    explanation: 'Number of ways to choose $2$ elements from $4$: $\\binom{4}{2} = 6$ transpositions.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'If $\\sigma$ swaps $1 \\leftrightarrow 2$ and fixes $3$ on $\\{1,2,3\\}$, what is $\\sigma^2$?',
    options: ['Identity', '$\\sigma$', '$\\sigma^{-1}$', '$(1\\;3)$'],
    correctIndex: 0,
    explanation: '$\\sigma$ swaps $1$ and $2$. Applying twice returns everything to original: $\\sigma^2 = e$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'A permutation $\\sigma$ satisfies $\\sigma^3 = e$ but $\\sigma \\neq e$. The smallest such permutation acts on:',
    options: ['At least $3$ elements', 'Exactly $2$ elements', '$1$ element', '$4$ elements'],
    correctIndex: 0,
    explanation: '$\\sigma^3 = e$ means $\\sigma$ has order $3$ (or a divisor). Order $3$ requires at least a $3$-cycle, which needs $3$ elements.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'Compute $(1\\;2) \\circ (2\\;3)$ on $\\{1, 2, 3\\}$. What is the result applied to $1$?',
    options: ['$2$', '$3$', '$1$', 'Undefined'],
    correctIndex: 0,
    explanation: '$(2\\;3)(1) = 1$ ($1$ is fixed), then $(1\\;2)(1) = 2$. So $((1\\;2) \\circ (2\\;3))(1) = 2$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If $\\sigma$ is a permutation of $\\{1,2,3,4,5\\}$ with $\\sigma(1)=2$, $\\sigma(2)=3$, $\\sigma(3)=1$, $\\sigma(4)=5$, $\\sigma(5)=4$, how many elements are fixed?',
    options: ['$0$', '$1$', '$2$', '$3$'],
    correctIndex: 0,
    explanation: 'Fixed means $\\sigma(x) = x$. Check: $\\sigma(1)=2\\neq 1$, $\\sigma(2)=3\\neq 2$, $\\sigma(3)=1\\neq 3$, $\\sigma(4)=5\\neq 4$, $\\sigma(5)=4\\neq 5$. Zero fixed points.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'The smallest $n$ such that $S_n$ is non-abelian (composition is not commutative) is:',
    options: ['$3$', '$2$', '$4$', '$5$'],
    correctIndex: 0,
    explanation: '$S_2$ has only $2$ elements and is abelian. $S_3$ has $6$ elements and is non-abelian (e.g., $(1\\;2)(2\\;3) \\neq (2\\;3)(1\\;2)$).'
  },

  // Additional Easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'What is $5!$?',
    options: ['$120$', '$100$', '$60$', '$25$'],
    correctIndex: 0,
    explanation: '$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'How many permutations of $\\{1, 2\\}$ are there?',
    options: ['$2$', '$1$', '$4$', '$3$'],
    correctIndex: 0,
    explanation: '$2! = 2$ permutations: identity and the swap $(1\\;2)$.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'What is $0!$?',
    options: ['$1$', '$0$', 'Undefined', '$-1$'],
    correctIndex: 0,
    explanation: 'By convention, $0! = 1$.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'A permutation that leaves every element unchanged is called:',
    options: ['Identity', 'Transposition', 'Cycle', 'Bijection'],
    correctIndex: 0,
    explanation: 'The identity permutation fixes all elements.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'Which of these is a property of all permutations?',
    options: ['Invertible', 'Fixes at least one element', 'Is a transposition', 'Has order $2$'],
    correctIndex: 0,
    explanation: 'Every permutation is a bijection and thus invertible.'
  },

  // Additional Medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'If $\\sigma$ is a permutation on $\\{1,2,3,4\\}$ with $\\sigma(1)=4$, $\\sigma(2)=1$, $\\sigma(3)=3$, $\\sigma(4)=2$, what is $\\sigma^{-1}(4)$?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctIndex: 0,
    explanation: '$\\sigma^{-1}(4)$ is the element sent to $4$ by $\\sigma$. Since $\\sigma(1)=4$, we have $\\sigma^{-1}(4)=1$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'How many elements does $S_6$ have?',
    options: ['$720$', '$120$', '$360$', '$36$'],
    correctIndex: 0,
    explanation: '$|S_6| = 6! = 720$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'What is $(2\\;3)(2)$?',
    options: ['$3$', '$2$', '$1$', '$4$'],
    correctIndex: 0,
    explanation: 'The transposition $(2\\;3)$ swaps $2$ and $3$, so $(2\\;3)(2) = 3$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'If $\\sigma \\circ \\tau = \\tau \\circ \\sigma$ for all $\\tau$ in $S_n$, then $\\sigma$ must be:',
    options: ['Identity', 'Transposition', 'Any permutation', 'A cycle'],
    correctIndex: 0,
    explanation: 'Only the identity commutes with all permutations in $S_n$ for $n \\geq 3$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'How many ways are there to arrange $4$ distinct objects in a row?',
    options: ['$24$', '$16$', '$12$', '$4$'],
    correctIndex: 0,
    explanation: 'This is $4! = 24$ permutations.'
  },

  // Additional Hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'If $\\sigma$ is a permutation on $\\{1,2,3,4,5\\}$ with exactly two fixed points, what is the maximum possible order of $\\sigma$?',
    options: ['$3$', '$2$', '$4$', '$5$'],
    correctIndex: 0,
    explanation: 'With $2$ fixed points, $\\sigma$ acts on $3$ elements. Maximum order is $3$ (a $3$-cycle).'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'If $\\sigma$ and $\\tau$ are both transpositions in $S_n$, what can be said about $\\sigma \\circ \\tau$?',
    options: ['Could be identity, transposition, or $3$-cycle', 'Always identity', 'Always a $3$-cycle', 'Always another transposition'],
    correctIndex: 0,
    explanation: 'If disjoint: identity. If they share one element: $3$-cycle. If identical: identity.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'Compute $(1\\;3) \\circ (2\\;3)$ on $\\{1, 2, 3\\}$. What is the result applied to $2$?',
    options: ['$1$', '$2$', '$3$', 'Undefined'],
    correctIndex: 0,
    explanation: 'Apply right to left: $(2\\;3)(2) = 3$, then $(1\\;3)(3) = 1$. So $((1\\;3) \\circ (2\\;3))(2) = 1$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'If $\\sigma$ is a permutation of $\\{1,2,3,4\\}$ with order $4$, how many fixed points does $\\sigma$ have?',
    options: ['$0$', '$1$', '$2$', '$3$'],
    correctIndex: 0,
    explanation: 'Order $4$ requires a $4$-cycle, which has no fixed points.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'What fraction of permutations in $S_5$ are transpositions?',
    options: ['$\\frac{1}{12}$', '$\\frac{1}{6}$', '$\\frac{1}{10}$', '$\\frac{1}{5}$'],
    correctIndex: 0,
    explanation: 'There are $\\binom{5}{2} = 10$ transpositions in $S_5$. Total: $5! = 120$. Fraction: $\\frac{10}{120} = \\frac{1}{12}$.'
  }
];
