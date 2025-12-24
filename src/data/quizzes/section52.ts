import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section52Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'In the cycle $(1\\;3\\;4)$, where does $1$ go?',
    options: ['$3$', '$4$', '$1$', '$2$'],
    correctIndex: 0,
    explanation: 'In $(1\\;3\\;4)$, each element maps to the next: $1 \\to 3$.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'What is the order of the cycle $(1\\;2)$?',
    options: ['$2$', '$1$', '$3$', '$4$'],
    correctIndex: 0,
    explanation: 'A $2$-cycle (transposition) has order $2$: apply twice to return to identity.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'A $3$-cycle can be written as how many transpositions?',
    options: ['$2$', '$1$', '$3$', '$4$'],
    correctIndex: 0,
    explanation: 'A $k$-cycle needs $k-1$ transpositions, so a $3$-cycle needs $2$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'In cycle $(1\\;2\\;3)$, where does $3$ go?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctIndex: 0,
    explanation: 'In $(1\\;2\\;3)$: $1\\to 2\\to 3\\to 1$, so $3$ goes to $1$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'Two cycles are disjoint if they:',
    options: ['Move different elements', 'Have the same length', 'Are both transpositions', 'Share one element'],
    correctIndex: 0,
    explanation: 'Disjoint cycles move completely separate sets of elements.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'What is the order of $(1\\;2\\;3\\;4)$?',
    options: ['$4$', '$2$', '$3$', '$6$'],
    correctIndex: 0,
    explanation: 'A $k$-cycle has order $k$. A $4$-cycle has order $4$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'What is the order of $(1\\;2)(3\\;4\\;5)$?',
    options: ['$6$', '$5$', '$2$', '$3$'],
    correctIndex: 0,
    explanation: 'Order $= \\text{lcm}(2, 3) = 6$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Write $\\sigma$ where $\\sigma(1)=2$, $\\sigma(2)=3$, $\\sigma(3)=1$, $\\sigma(4)=4$ in cycle notation.',
    options: ['$(1\\;2\\;3)$', '$(1\\;2)(3\\;4)$', '$(1\\;3\\;2)$', '$(1)(2)(3)(4)$'],
    correctIndex: 0,
    explanation: '$1\\to 2\\to 3\\to 1$ forms a $3$-cycle. $4$ is fixed (not written). So $\\sigma = (1\\;2\\;3)$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'Do $(1\\;2)$ and $(3\\;4)$ commute?',
    options: ['Yes, they are disjoint', 'No', 'Only sometimes', 'Undefined'],
    correctIndex: 0,
    explanation: 'Disjoint cycles always commute.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'What is $(1\\;2\\;3)^2$?',
    options: ['$(1\\;3\\;2)$', '$(1\\;2\\;3)$', 'Identity', '$(1\\;2)$'],
    correctIndex: 0,
    explanation: '$(1\\;2\\;3)^2$ sends $1\\to 2\\to 3$, $2\\to 3\\to 1$, $3\\to 1\\to 2$. So $(1\\;2\\;3)^2 = (1\\;3\\;2)$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'What is the order of $(1\\;2)(3\\;4)(5\\;6\\;7)$?',
    options: ['$6$', '$3$', '$12$', '$7$'],
    correctIndex: 0,
    explanation: 'Order $= \\text{lcm}(2, 2, 3) = 6$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Express $(1\\;2\\;3\\;4)$ as a product of transpositions.',
    options: ['$(1\\;4)(1\\;3)(1\\;2)$', '$(1\\;2)(2\\;3)(3\\;4)$', '$(1\\;2)(3\\;4)$', '$(1\\;4)$'],
    correctIndex: 0,
    explanation: '$(1\\;2\\;3\\;4) = (1\\;4)(1\\;3)(1\\;2)$. Verify: $1\\to 2$ by $(1\\;2)$, then fixed by others $\\to$ ends at $2$.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'How many $3$-cycles are in $S_4$?',
    options: ['$8$', '$4$', '$6$', '$12$'],
    correctIndex: 0,
    explanation: 'Choose $3$ elements from $4$: $\\binom{4}{3} = 4$. Each set gives $2$ distinct $3$-cycles. Total: $4 \\times 2 = 8$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If $\\sigma = (1\\;2\\;3)(4\\;5)$, what is $\\sigma^{-1}$?',
    options: ['$(1\\;3\\;2)(4\\;5)$', '$(3\\;2\\;1)(5\\;4)$', '$(1\\;2\\;3)(4\\;5)$', '$(1\\;2)(3)(4\\;5)$'],
    correctIndex: 0,
    explanation: 'Inverse of $(1\\;2\\;3)$ is $(1\\;3\\;2)$, inverse of $(4\\;5)$ is $(4\\;5)$. So $\\sigma^{-1} = (1\\;3\\;2)(4\\;5)$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'Compute $(1\\;2\\;3)(1\\;3)$.',
    options: ['$(1\\;2)$', '$(2\\;3)$', '$(1\\;3)$', '$(1\\;2\\;3)$'],
    correctIndex: 0,
    explanation: 'Apply $(1\\;3)$ first, then $(1\\;2\\;3)$. Track: $1\\to 3\\to 1$; $2\\to 2\\to 3$; $3\\to 1\\to 2$. Result: $(2\\;3)$.'
  },

  // Additional Easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'In cycle $(2\\;4\\;5)$, where does $4$ go?',
    options: ['$5$', '$2$', '$4$', '$1$'],
    correctIndex: 0,
    explanation: 'In $(2\\;4\\;5)$: $2\\to 4\\to 5\\to 2$, so $4$ goes to $5$.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'What is the order of $(1\\;2\\;3)$?',
    options: ['$3$', '$2$', '$6$', '$1$'],
    correctIndex: 0,
    explanation: 'A $3$-cycle has order $3$: $(1\\;2\\;3)^3 = e$.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'A $1$-cycle like $(5)$ represents:',
    options: ['Identity on that element', 'A transposition', 'Error', 'Order $1$'],
    correctIndex: 0,
    explanation: 'A $1$-cycle fixes the element, representing the identity.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'How many elements does the cycle $(1\\;2\\;3\\;4)$ move?',
    options: ['$4$', '$3$', '$2$', '$1$'],
    correctIndex: 0,
    explanation: 'A $4$-cycle moves all $4$ elements in the cycle.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'In $(5\\;6\\;7)$, where does $7$ go?',
    options: ['$5$', '$6$', '$7$', '$8$'],
    correctIndex: 0,
    explanation: 'In $(5\\;6\\;7)$: $5\\to 6\\to 7\\to 5$, so $7$ goes back to $5$.'
  },

  // Additional Medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'What is the order of $(1\\;2\\;3\\;4\\;5)$?',
    options: ['$5$', '$4$', '$10$', '$120$'],
    correctIndex: 0,
    explanation: 'A $k$-cycle has order $k$. So a $5$-cycle has order $5$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'What is the order of $(1\\;2\\;3)(4\\;5)$?',
    options: ['$6$', '$5$', '$3$', '$2$'],
    correctIndex: 0,
    explanation: 'Order $= \\text{lcm}(3, 2) = 6$.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'Write $\\sigma$ where $\\sigma(1)=3$, $\\sigma(2)=1$, $\\sigma(3)=2$, $\\sigma(4)=5$, $\\sigma(5)=4$ in cycle notation.',
    options: ['$(1\\;3\\;2)(4\\;5)$', '$(1\\;2\\;3)(4\\;5)$', '$(1\\;3)(2)(4\\;5)$', '$(1\\;2\\;3\\;4\\;5)$'],
    correctIndex: 0,
    explanation: '$1\\to 3\\to 2\\to 1$ forms $(1\\;3\\;2)$. $4\\to 5\\to 4$ forms $(4\\;5)$. Result: $(1\\;3\\;2)(4\\;5)$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'What is $(1\\;2\\;3)^3$?',
    options: ['Identity', '$(1\\;2\\;3)$', '$(1\\;3\\;2)$', '$(1\\;2)$'],
    correctIndex: 0,
    explanation: 'A $3$-cycle has order $3$, so $(1\\;2\\;3)^3 = e$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'Do $(1\\;2\\;3)$ and $(4\\;5\\;6)$ commute?',
    options: ['Yes, they are disjoint', 'No', 'Only if applied twice', 'Sometimes'],
    correctIndex: 0,
    explanation: 'Disjoint cycles always commute.'
  },

  // Additional Hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'What is the order of $(1\\;2)(3\\;4\\;5\\;6)$?',
    options: ['$4$', '$6$', '$8$', '$2$'],
    correctIndex: 0,
    explanation: 'Order $= \\text{lcm}(2, 4) = 4$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'Express $(1\\;2\\;3\\;4\\;5)$ as a product of transpositions.',
    options: ['$(1\\;5)(1\\;4)(1\\;3)(1\\;2)$', '$(1\\;2)(2\\;3)(3\\;4)(4\\;5)$', '$(1\\;5)(2\\;4)$', '$(1\\;2\\;3)(4\\;5)$'],
    correctIndex: 0,
    explanation: 'A $k$-cycle can be written as $(1\\;k)(1\\;k-1)\\cdots(1\\;2)$. For $k=5$: $(1\\;5)(1\\;4)(1\\;3)(1\\;2)$.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'How many $4$-cycles are in $S_5$?',
    options: ['$30$', '$24$', '$20$', '$15$'],
    correctIndex: 0,
    explanation: 'Choose $4$ elements: $\\binom{5}{4} = 5$. Each gives $(4-1)! = 6$ distinct $4$-cycles. Total: $5 \\times 6 = 30$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'If $\\sigma = (1\\;2\\;3\\;4)(5\\;6)$, what is $\\sigma^{-1}$?',
    options: ['$(1\\;4\\;3\\;2)(5\\;6)$', '$(4\\;3\\;2\\;1)(6\\;5)$', '$(1\\;2\\;3\\;4)(5\\;6)$', '$(1\\;4)(2\\;3)(5\\;6)$'],
    correctIndex: 0,
    explanation: 'Inverse of $(1\\;2\\;3\\;4)$ is $(1\\;4\\;3\\;2)$, inverse of $(5\\;6)$ is $(5\\;6)$. So $\\sigma^{-1} = (1\\;4\\;3\\;2)(5\\;6)$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'Compute $(1\\;2)(2\\;3)(3\\;4)$.',
    options: ['$(1\\;2\\;3\\;4)$', '$(1\\;4)(2\\;3)$', '$(1\\;3)(2\\;4)$', '$(1\\;4\\;3\\;2)$'],
    correctIndex: 0,
    explanation: 'Apply right to left: $1\\to 1\\to 1\\to 2$, $2\\to 2\\to 3\\to 3$, $3\\to 4\\to 4\\to 4$, $4\\to 3\\to 2\\to 1$. Result: $(1\\;2\\;3\\;4)$.'
  }
];
