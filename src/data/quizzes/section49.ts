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
  }
];
