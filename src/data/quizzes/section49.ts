import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section49Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'To fully specify a mapping, we need domain, codomain, and:',
    options: ['A rule', 'The range', 'A graph', 'An inverse'],
    correctIndex: 0,
    explanation: 'A mapping is specified by its domain, codomain, and rule of assignment.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'In $f: A \\to B$, $x \\mapsto x^2$, what does $\\to$ indicate?',
    options: ['Connects sets', 'Connects elements', 'Equals', 'Contains'],
    correctIndex: 0,
    explanation: '$\\to$ connects sets (domain to codomain); $\\mapsto$ shows what happens to elements.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is $\\text{id}_A(5)$ where $\\text{id}_A$ is the identity on $\\mathbb{R}$?',
    options: ['$5$', '$0$', '$1$', 'Undefined'],
    correctIndex: 0,
    explanation: 'The identity mapping returns its input: $\\text{id}_A(5) = 5$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'If $f(x) = 3$ for all $x$, what kind of mapping is $f$?',
    options: ['Constant', 'Identity', 'Linear', 'Injective'],
    correctIndex: 0,
    explanation: 'A mapping that sends every element to the same value is constant.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'The graph of a mapping $f: A \\to B$ is a subset of:',
    options: ['$A \\times B$', '$A$', '$B$', '$A \\cup B$'],
    correctIndex: 0,
    explanation: 'The graph consists of ordered pairs $(a, f(a))$, which lie in $A \\times B$.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Are $f: \\mathbb{R} \\to \\mathbb{R}$, $x \\mapsto x^2$ and $g: [0,\\infty) \\to \\mathbb{R}$, $x \\mapsto x^2$ the same mapping?',
    options: ['No, different domains', 'Yes, same formula', 'Depends on $x$', 'Yes, same codomain'],
    correctIndex: 0,
    explanation: 'Different domains mean different mappings, even with the same formula.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'If $f: \\mathbb{R} \\to \\mathbb{R}$ is $f(x) = x^2$, what is $f|_{[0,\\infty)}$?',
    options: ['The same formula restricted to non-negative $x$', 'A new function $x^3$', 'The inverse of $f$', 'Undefined'],
    correctIndex: 0,
    explanation: 'Restriction limits the domain: $f|_{[0,\\infty)}$ is $x^2$ but only for $x \\geq 0$.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'The inclusion $\\iota: S \\to A$ where $S \\subseteq A$ is:',
    options: ['$\\iota(s) = s$', '$\\iota(s) = 0$', '$\\iota(s) = A$', 'Undefined'],
    correctIndex: 0,
    explanation: 'Inclusion sends each element to itself: $\\iota(s) = s$, but viewed as an element of $A$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'If $g$ extends $f$, then:',
    options: ['$\\text{Domain}(f) \\subseteq \\text{Domain}(g)$', '$\\text{Domain}(g) \\subseteq \\text{Domain}(f)$', '$\\text{Domain}(f) = \\text{Domain}(g)$', 'They are unrelated'],
    correctIndex: 0,
    explanation: 'An extension has a larger (or equal) domain that agrees with $f$ where $f$ is defined.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'For mappings $f$ and $g$ to be equal, they must agree on:',
    options: ['Domain, codomain, and values', 'Just values', 'Just domain', 'Just codomain'],
    correctIndex: 0,
    explanation: 'Equal mappings must have the same domain, same codomain, and same values at all points.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Let $f: \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2$, and $g: \\mathbb{R} \\to [0,\\infty)$, $g(x) = x^2$. Are $f$ and $g$ equal?',
    options: ['No, different codomains', 'Yes, same formula and domain', 'Depends on $x$', 'Yes, same range'],
    correctIndex: 0,
    explanation: 'Different codomains make them different mappings, even with identical domains and formulas.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'A subset $\\Gamma \\subseteq A \\times B$ is the graph of a function iff:',
    options: ['Each $a \\in A$ appears in exactly one pair', 'Each $b \\in B$ appears in exactly one pair', '$\\Gamma = A \\times B$', '$\\Gamma$ is finite'],
    correctIndex: 0,
    explanation: 'Function definition: each input has exactly one output.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If $f|_S$ is injective but $f$ is not, what can we conclude?',
    options: ['The non-injectivity of $f$ comes from outside $S$', '$S$ is empty', '$f$ is constant', '$S = $ domain of $f$'],
    correctIndex: 0,
    explanation: 'Restricting can remove the points causing non-injectivity.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'The composition $\\text{id}_B \\circ f$ equals:',
    options: ['$f$', '$\\text{id}_B$', '$\\text{id}_A$', '$f \\circ f$'],
    correctIndex: 0,
    explanation: 'Composing with identity: $\\text{id}_B(f(x)) = f(x)$, so $\\text{id}_B \\circ f = f$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'If $f: A \\to B$ and $g: B \\to C$, how many elements are in the graph of $g \\circ f$?',
    options: ['$|A|$', '$|B|$', '$|C|$', '$|A| \\times |C|$'],
    correctIndex: 0,
    explanation: 'The graph has one pair for each element in the domain, which is $A$. So $|A|$ pairs.'
  },

  // Additional easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'In $f: A \\to B$, $x \\mapsto 2x$, what does $\\mapsto$ indicate?',
    options: ['Maps elements', 'Connects sets', 'Equals', 'Contains'],
    correctIndex: 0,
    explanation: '$\\mapsto$ shows how individual elements are mapped; $\\to$ connects domain to codomain.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'What is $\\text{id}_\\mathbb{R}(10)$ where $\\text{id}_\\mathbb{R}$ is the identity?',
    options: ['$10$', '$0$', '$1$', 'Undefined'],
    correctIndex: 0,
    explanation: 'The identity mapping returns its input: $\\text{id}(10) = 10$.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'If $f(x) = 7$ for all $x$, the image of $f$ is:',
    options: ['$\\{7\\}$', 'All real numbers', '$\\{0, 7\\}$', 'Empty set'],
    correctIndex: 0,
    explanation: 'A constant function has a single-element image.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'The graph of $f: A \\to B$ consists of ordered pairs $(a, b)$ where:',
    options: ['$b = f(a)$', '$a = f(b)$', '$a \\in B$', '$b \\in A$'],
    correctIndex: 0,
    explanation: 'The graph contains pairs $(a, f(a))$ for all $a \\in A$.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'How many elements must a mapping assign to each domain element?',
    options: ['Exactly one', 'At least one', 'At most one', 'Any number'],
    correctIndex: 0,
    explanation: 'By definition, a mapping assigns exactly one codomain element to each domain element.'
  },

  // Additional medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'Are $f: \\mathbb{R} \\to \\mathbb{R}$, $x \\mapsto |x|$ and $g: \\mathbb{R} \\to [0,\\infty)$, $x \\mapsto |x|$ the same mapping?',
    options: ['No, different codomains', 'Yes, same formula', 'Depends on $x$', 'Yes, same domain'],
    correctIndex: 0,
    explanation: 'Different codomains make them different mappings.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'If $f: \\mathbb{R} \\to \\mathbb{R}$ is $f(x) = |x|$, what is $f|_{[0,\\infty)}$?',
    options: ['The same formula restricted to non-negative $x$', 'A new function $x^2$', 'The inverse of $f$', 'Undefined'],
    correctIndex: 0,
    explanation: 'Restriction limits the domain to $[0,\\infty)$ where $f$ behaves like the identity.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'The inclusion $\\iota: \\mathbb{N} \\to \\mathbb{Z}$ is:',
    options: ['$\\iota(n) = n$', '$\\iota(n) = 0$', '$\\iota(n) = -n$', 'Undefined'],
    correctIndex: 0,
    explanation: 'Inclusion maps each element to itself but in a larger set.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'If $h$ extends $f$, and $x$ is in the domain of $f$, then:',
    options: ['$h(x) = f(x)$', '$h(x) \\neq f(x)$', '$h(x) > f(x)$', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'An extension agrees with the original function on the original domain.'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'For two mappings to be equal, they must have:',
    options: ['Same domain, codomain, and rule', 'Just same rule', 'Just same domain', 'Just same codomain'],
    correctIndex: 0,
    explanation: 'Equality requires all three components to match.'
  },

  // Additional hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'Let $f: \\mathbb{R} \\to \\mathbb{R}$, $f(x) = |x|$, and $g: \\mathbb{R} \\to \\mathbb{R}^+$, $g(x) = |x|$. Are $f$ and $g$ equal?',
    options: ['No, $g$ is not well-defined since $|0| = 0 \\notin \\mathbb{R}^+$', 'Yes, same formula', 'No, different domains', 'Yes, same outputs'],
    correctIndex: 0,
    explanation: 'If $\\mathbb{R}^+$ means positive reals, then $g(0) = 0$ is not in the codomain, making $g$ not well-defined.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'A subset $\\Gamma \\subseteq A \\times B$ is the graph of a function iff for each $a \\in A$:',
    options: ['There exists exactly one $b$ with $(a,b) \\in \\Gamma$', 'There exists at least one $b$ with $(a,b) \\in \\Gamma$', '$\\Gamma$ contains all of $A \\times B$', '$\\Gamma$ is finite'],
    correctIndex: 0,
    explanation: 'Each input must map to exactly one output.'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'If $f|_S$ is surjective onto $T$, what can we conclude?',
    options: ['$f(S) = T$', '$S = T$', '$f$ is surjective', '$S \\subseteq T$'],
    correctIndex: 0,
    explanation: 'If the restriction is surjective onto $T$, then $f(S) = T$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'The composition $f \\circ \\text{id}_A$ equals:',
    options: ['$f$', '$\\text{id}_A$', '$\\text{id}_B$', '$f^{-1}$'],
    correctIndex: 0,
    explanation: 'Composing with identity on the right: $f(\\text{id}_A(x)) = f(x)$, so $f \\circ \\text{id}_A = f$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'If $f: A \\to B$, the graph of $f$ has cardinality:',
    options: ['$|A|$', '$|B|$', '$|A| + |B|$', '$|A| \\times |B|$'],
    correctIndex: 0,
    explanation: 'The graph has one ordered pair for each element of the domain $A$.'
  }
];
