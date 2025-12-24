import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section48Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'A mapping assigns each element of the domain to how many elements in the codomain?',
    options: ['Exactly one', 'At least one', 'At most one', 'Any number'],
    correctIndex: 0,
    explanation: 'By definition, a mapping assigns each domain element to exactly one codomain element.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'If $f: A \\to B$, which set is the domain?',
    options: ['$A$', '$B$', 'Both', 'Neither'],
    correctIndex: 0,
    explanation: 'In $f: A \\to B$, the set $A$ (on the left of the arrow) is the domain.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'A function that is both injective and surjective is called:',
    options: ['Bijective', 'Reflective', 'Transitive', 'Symmetric'],
    correctIndex: 0,
    explanation: 'Bijective = injective + surjective.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'If $f(a) = f(b)$ implies $a = b$, the function is:',
    options: ['Injective', 'Surjective', 'Constant', 'Continuous'],
    correctIndex: 0,
    explanation: 'This is the definition of injective (one-to-one).'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'The image of a mapping $f: A \\to B$ is a subset of:',
    options: ['$B$', '$A$', '$A \\cup B$', '$A \\cap B$'],
    correctIndex: 0,
    explanation: 'The image consists of elements in the codomain $B$ that are actually hit by $f$.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Is $f(x) = x^2$ from $\\mathbb{R}$ to $\\mathbb{R}$ injective?',
    options: ['No', 'Yes', 'Only for $x > 0$', 'Depends on domain'],
    correctIndex: 0,
    explanation: '$f(-1) = f(1) = 1$, so different inputs can give the same output. Not injective.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'Is $f(x) = 2x + 1$ from $\\mathbb{R}$ to $\\mathbb{R}$ surjective?',
    options: ['Yes', 'No', 'Only for $x > 0$', 'Undefined'],
    correctIndex: 0,
    explanation: 'For any $y \\in \\mathbb{R}$, $x = (y-1)/2$ gives $f(x) = y$. So every $y$ is hit.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'If $|A| = 5$ and $|B| = 3$, can there be an injective $f: A \\to B$?',
    options: ['No', 'Yes', 'Only if $A \\subset B$', 'Always'],
    correctIndex: 0,
    explanation: 'Injective requires different inputs map to different outputs. With 5 inputs and only 3 possible outputs, impossible.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'For $f(x) = x^2$, what is $f^{-1}(\\{9\\})$?',
    options: ['$\\{-3, 3\\}$', '$\\{3\\}$', '$\\{9\\}$', '$\\emptyset$'],
    correctIndex: 0,
    explanation: '$f^{-1}(\\{9\\}) =$ all $x$ where $x^2 = 9$, which is $\\{-3, 3\\}$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'Is $f(x) = e^x$ from $\\mathbb{R}$ to $\\mathbb{R}^+$ bijective?',
    options: ['Yes', 'No, not injective', 'No, not surjective', 'No, neither'],
    correctIndex: 0,
    explanation: '$e^x$ is strictly increasing (injective) and its range is $(0, \\infty) = \\mathbb{R}^+$ (surjective). So bijective.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'If $f: A \\to B$ is bijective, then $|A| = |B|$ (for finite sets). True or false?',
    options: ['True', 'False', 'Only for infinite sets', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'A bijection pairs elements one-to-one, so the sets must have equal cardinality.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'Let $f: \\mathbb{Z} \\to \\mathbb{Z}$ be $f(n) = n + 1$. Is $f$ bijective?',
    options: ['Yes', 'Injective only', 'Surjective only', 'Neither'],
    correctIndex: 0,
    explanation: '$n + 1 = m + 1$ implies $n = m$ (injective). For any $m$, $n = m - 1$ gives $f(n) = m$ (surjective). So bijective.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If $f: \\{1,2,3\\} \\to \\{a,b,c,d\\}$ is injective, how many such functions exist?',
    options: ['$24$', '$12$', '$64$', '$6$'],
    correctIndex: 0,
    explanation: 'First element: 4 choices. Second: 3 choices. Third: 2 choices. Total: $4 \\times 3 \\times 2 = 24$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'Let $f: \\mathbb{R} \\to \\mathbb{R}$ be $f(x) = x^3 - x$. At which points is $f$ not injective?',
    options: ['$f$ fails injectivity (e.g., $f(-1) = f(0) = f(1) = 0$)', '$f$ is injective everywhere', 'Only at $x = 0$', 'Only at $x = \\pm 1$'],
    correctIndex: 0,
    explanation: '$f(-1) = 0$, $f(0) = 0$, $f(1) = 0$. Three different inputs give the same output, so not injective.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'A function $f: A \\to B$ is surjective iff for all $b \\in B$, $|f^{-1}(\\{b\\})|$ is:',
    options: ['At least $1$', 'Exactly $1$', 'At most $1$', 'Equal to $|A|$'],
    correctIndex: 0,
    explanation: 'Surjective means every element of $B$ has at least one preimage.'
  }
];
