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
  },

  // Additional easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'The codomain of $f: A \\to B$ is:',
    options: ['$B$', '$A$', 'Both', 'Neither'],
    correctIndex: 0,
    explanation: 'In $f: A \\to B$, the set $B$ (on the right of the arrow) is the codomain.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'A surjective function is also called:',
    options: ['Onto', 'One-to-one', 'Into', 'Identity'],
    correctIndex: 0,
    explanation: 'Surjective functions are also called onto functions.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'An injective function is also called:',
    options: ['One-to-one', 'Onto', 'Many-to-one', 'Constant'],
    correctIndex: 0,
    explanation: 'Injective functions are also called one-to-one functions.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'If every element of the codomain is mapped to, the function is:',
    options: ['Surjective', 'Injective', 'Constant', 'Linear'],
    correctIndex: 0,
    explanation: 'This is the definition of surjective (onto).'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'The image of $f: A \\to B$ is denoted:',
    options: ['$f(A)$ or $\\text{Im}(f)$', '$f(B)$', '$A$', '$B$'],
    correctIndex: 0,
    explanation: 'The image is the set of all outputs, written $f(A)$ or $\\text{Im}(f)$.'
  },

  // Additional medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Is $f(x) = x^3$ from $\\mathbb{R}$ to $\\mathbb{R}$ injective?',
    options: ['Yes', 'No', 'Only for $x > 0$', 'Depends on domain'],
    correctIndex: 0,
    explanation: '$x^3$ is strictly increasing, so different inputs give different outputs. Injective.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'Is $f(x) = x + 5$ from $\\mathbb{R}$ to $\\mathbb{R}$ bijective?',
    options: ['Yes', 'Injective only', 'Surjective only', 'Neither'],
    correctIndex: 0,
    explanation: 'Linear functions with nonzero slope are both injective and surjective, hence bijective.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'If $|A| = 3$ and $|B| = 5$, can there be a surjective $f: A \\to B$?',
    options: ['No', 'Yes', 'Only if $A \\subset B$', 'Always'],
    correctIndex: 0,
    explanation: 'Surjective requires every element of $B$ be hit. With only $3$ inputs and $5$ outputs, impossible.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'For $f(x) = 2x$, what is $f^{-1}(\\{10\\})$?',
    options: ['$\\{5\\}$', '$\\{20\\}$', '$\\{10\\}$', '$\\emptyset$'],
    correctIndex: 0,
    explanation: '$f^{-1}(\\{10\\}) =$ all $x$ where $2x = 10$, which is $\\{5\\}$.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'Is $f(x) = \\sin(x)$ from $\\mathbb{R}$ to $[-1, 1]$ surjective?',
    options: ['Yes', 'No, not injective', 'No, not surjective', 'No, neither'],
    correctIndex: 0,
    explanation: 'Every value in $[-1, 1]$ is achieved by $\\sin(x)$, so it\'s surjective.'
  },

  // Additional hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'If $f: A \\to B$ and $g: B \\to C$ are both injective, is $g \\circ f$ injective?',
    options: ['Yes', 'No', 'Only if $A = C$', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'Composition of injective functions is injective.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'Let $f: \\mathbb{N} \\to \\mathbb{N}$ be $f(n) = 2n$. Is $f$ surjective?',
    options: ['No', 'Yes', 'Only for even $n$', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'Odd numbers in codomain $\\mathbb{N}$ are never hit (e.g., $1, 3, 5, ...$), so not surjective.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'If $f: \\{1,2,3\\} \\to \\{a,b\\}$ is surjective, how many such functions exist?',
    options: ['$6$', '$8$', '$9$', '$3$'],
    correctIndex: 0,
    explanation: 'Both $a$ and $b$ must be hit. Use inclusion-exclusion: $2^3 - 2 \\cdot 1^3 = 8 - 2 = 6$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'Let $f: \\mathbb{R} \\to \\mathbb{R}$ be $f(x) = x^2$. Is $f$ surjective?',
    options: ['No', 'Yes', 'Only for $x \\geq 0$', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'Negative numbers are never outputs of $x^2$, so not surjective onto $\\mathbb{R}$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'A function $f: A \\to B$ is bijective iff it has:',
    options: ['An inverse function $f^{-1}: B \\to A$', 'A left inverse only', 'A right inverse only', 'No inverse'],
    correctIndex: 0,
    explanation: 'Bijective functions have two-sided inverses.'
  }
];
