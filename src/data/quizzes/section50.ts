import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section50Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'In $(g \\circ f)(x)$, which function is applied first?',
    options: ['$f$', '$g$', 'Both simultaneously', 'Neither'],
    correctIndex: 0,
    explanation: '$(g \\circ f)(x) = g(f(x))$: apply $f$ first, then $g$ to the result.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'If $f(x) = x + 1$ and $g(x) = 2x$, what is $(g \\circ f)(3)$?',
    options: ['$8$', '$7$', '$6$', '$9$'],
    correctIndex: 0,
    explanation: '$f(3) = 4$, then $g(4) = 8$.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'For a bijection $f$, what is $f^{-1} \\circ f$?',
    options: ['Identity', 'Zero', '$f$', '$f^2$'],
    correctIndex: 0,
    explanation: 'The inverse "undoes" $f$, so $f^{-1}(f(x)) = x$ for all $x$.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'Is composition of functions commutative?',
    options: ['No, generally', 'Yes, always', 'Only for linear functions', 'Only for bijections'],
    correctIndex: 0,
    explanation: 'In general, $g \\circ f \\neq f \\circ g$.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'A function has an inverse if and only if it is:',
    options: ['Bijective', 'Injective', 'Surjective', 'Constant'],
    correctIndex: 0,
    explanation: 'Bijective = injective + surjective, which is necessary and sufficient for invertibility.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'If $f(x) = 3x - 2$, find $f^{-1}(x)$.',
    options: ['$\\frac{x + 2}{3}$', '$\\frac{x - 2}{3}$', '$3x + 2$', '$-3x + 2$'],
    correctIndex: 0,
    explanation: 'Solve $y = 3x - 2$ for $x$: $x = \\frac{y + 2}{3}$. So $f^{-1}(x) = \\frac{x + 2}{3}$.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'If $f$ and $g$ are both injective, is $g \\circ f$ injective?',
    options: ['Yes', 'No', 'Only if $f = g$', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'The composition of injective functions is injective.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Let $f(x) = x^2$ and $g(x) = \\sqrt{x}$. What is $(g \\circ f)(x)$ for $x \\geq 0$?',
    options: ['$x$', '$x^2$', '$\\sqrt{x}$', '$x^4$'],
    correctIndex: 0,
    explanation: '$g(f(x)) = g(x^2) = \\sqrt{x^2} = |x| = x$ for $x \\geq 0$.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'If $(f \\circ g)(x) = x$ for all $x$ in the domain of $g$, then $g$ is:',
    options: ['A right inverse of $f$', 'A left inverse of $f$', 'Equal to $f$', 'The identity'],
    correctIndex: 0,
    explanation: '$f \\circ g = \\text{id}$ means $g$ is a right inverse of $f$.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'If $f: \\mathbb{R} \\to \\mathbb{R}$ is $f(x) = e^x$, what is $f^{-1}(x)$?',
    options: ['$\\ln(x)$', '$e^{-x}$', '$\\frac{1}{e^x}$', '$\\frac{x}{e}$'],
    correctIndex: 0,
    explanation: 'The inverse of $e^x$ is the natural logarithm: $f^{-1}(x) = \\ln(x)$.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'If $f: A \\to B$ and $g: B \\to C$, what are the domain and codomain of $g \\circ f$?',
    options: ['Domain $A$, codomain $C$', 'Domain $B$, codomain $C$', 'Domain $A$, codomain $B$', 'Domain $C$, codomain $A$'],
    correctIndex: 0,
    explanation: '$g \\circ f: A \\to C$ takes inputs from $A$ and outputs to $C$.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'If $g \\circ f$ is bijective, what can we conclude about $f$?',
    options: ['$f$ is injective', '$f$ is surjective', '$f$ is bijective', 'Nothing'],
    correctIndex: 0,
    explanation: 'If $g \\circ f$ is injective, then $f$ must be injective (since distinct inputs to $f$ give distinct outputs through the composition).'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'For bijection $f$, what is $(f^{-1})^{-1}$?',
    options: ['$f$', '$f^{-1}$', 'Identity', 'Undefined'],
    correctIndex: 0,
    explanation: 'Taking the inverse twice returns to the original: $(f^{-1})^{-1} = f$.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If $f$ and $g$ are bijections, what is $(g \\circ f)^{-1}$?',
    options: ['$f^{-1} \\circ g^{-1}$', '$g^{-1} \\circ f^{-1}$', '$(f \\circ g)^{-1}$', '$f^{-1} + g^{-1}$'],
    correctIndex: 0,
    explanation: 'To undo $g \\circ f$, first undo $g$, then undo $f$: $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'If $f$ has a left inverse $g$ and a right inverse $h$, then:',
    options: ['$g = h$ and $f$ is bijective', '$g \\neq h$ always', '$f$ has no inverse', '$g$ and $h$ are both identity'],
    correctIndex: 0,
    explanation: 'If both one-sided inverses exist, they are equal and $f$ is bijective.'
  },

  // Additional easy questions (5)
  {
    id: 16,
    difficulty: 'easy',
    question: 'In $(h \\circ g)(x)$, which function is applied first?',
    options: ['$g$', '$h$', 'Both simultaneously', 'Neither'],
    correctIndex: 0,
    explanation: '$(h \\circ g)(x) = h(g(x))$: apply $g$ first, then $h$.'
  },
  {
    id: 17,
    difficulty: 'easy',
    question: 'If $f(x) = x - 3$ and $g(x) = 2x$, what is $(g \\circ f)(5)$?',
    options: ['$4$', '$7$', '$10$', '$2$'],
    correctIndex: 0,
    explanation: '$f(5) = 2$, then $g(2) = 4$.'
  },
  {
    id: 18,
    difficulty: 'easy',
    question: 'For a bijection $f$, what is $f \\circ f^{-1}$?',
    options: ['Identity on codomain', 'Zero', '$f$', '$f^2$'],
    correctIndex: 0,
    explanation: '$f(f^{-1}(y)) = y$ for all $y$ in the codomain.'
  },
  {
    id: 19,
    difficulty: 'easy',
    question: 'Is function composition associative?',
    options: ['Yes, always', 'No, generally', 'Only for linear functions', 'Only for bijections'],
    correctIndex: 0,
    explanation: '$(h \\circ g) \\circ f = h \\circ (g \\circ f)$ always holds.'
  },
  {
    id: 20,
    difficulty: 'easy',
    question: 'An invertible function must be:',
    options: ['Bijective', 'Injective only', 'Surjective only', 'Linear'],
    correctIndex: 0,
    explanation: 'Only bijective functions have inverses.'
  },

  // Additional medium questions (5)
  {
    id: 21,
    difficulty: 'medium',
    question: 'If $f(x) = 2x + 1$, find $f^{-1}(x)$.',
    options: ['$\\frac{x - 1}{2}$', '$\\frac{x + 1}{2}$', '$2x - 1$', '$-2x + 1$'],
    correctIndex: 0,
    explanation: 'Solve $y = 2x + 1$ for $x$: $x = \\frac{y - 1}{2}$. So $f^{-1}(x) = \\frac{x - 1}{2}$.'
  },
  {
    id: 22,
    difficulty: 'medium',
    question: 'If $f$ and $g$ are both surjective, is $g \\circ f$ surjective?',
    options: ['Yes', 'No', 'Only if $f = g$', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'The composition of surjective functions is surjective.'
  },
  {
    id: 23,
    difficulty: 'medium',
    question: 'Let $f(x) = \\sqrt{x}$ and $g(x) = x^2$. What is $(f \\circ g)(x)$ for $x \\geq 0$?',
    options: ['$x$', '$x^2$', '$\\sqrt{x}$', '$x^4$'],
    correctIndex: 0,
    explanation: '$f(g(x)) = f(x^2) = \\sqrt{x^2} = |x| = x$ for $x \\geq 0$.'
  },
  {
    id: 24,
    difficulty: 'medium',
    question: 'If $(g \\circ f)(x) = x$ for all $x$ in the domain of $f$, then $f$ is:',
    options: ['A left inverse of $g$', 'A right inverse of $g$', 'Equal to $g$', 'The identity'],
    correctIndex: 0,
    explanation: '$g \\circ f = \\text{id}$ means $f$ is a left inverse of $g$ (or equivalently, $g$ is a right inverse of $f$).'
  },
  {
    id: 25,
    difficulty: 'medium',
    question: 'If $f: \\mathbb{R} \\to (0, \\infty)$ is $f(x) = e^x$, what is $f^{-1}(x)$?',
    options: ['$\\ln(x)$', '$e^{-x}$', '$\\frac{1}{e^x}$', '$\\log(x)$'],
    correctIndex: 0,
    explanation: 'The inverse of $e^x$ is the natural logarithm: $f^{-1}(x) = \\ln(x)$.'
  },

  // Additional hard questions (5)
  {
    id: 26,
    difficulty: 'hard',
    question: 'If $f: A \\to B$, $g: B \\to C$, and $h: C \\to D$, what are the domain and codomain of $(h \\circ g) \\circ f$?',
    options: ['Domain $A$, codomain $D$', 'Domain $B$, codomain $D$', 'Domain $A$, codomain $C$', 'Domain $C$, codomain $D$'],
    correctIndex: 0,
    explanation: 'Composition is associative, so $(h \\circ g) \\circ f = h \\circ (g \\circ f): A \\to D$.'
  },
  {
    id: 27,
    difficulty: 'hard',
    question: 'If $g \\circ f$ is surjective, what can we conclude about $g$?',
    options: ['$g$ is surjective', '$g$ is injective', '$g$ is bijective', 'Nothing'],
    correctIndex: 0,
    explanation: 'If $g \\circ f$ is surjective, then $g$ must be surjective (since the composition hits everything in the codomain).'
  },
  {
    id: 28,
    difficulty: 'hard',
    question: 'For bijection $f: A \\to B$, what is $(f^{-1})^{-1}$?',
    options: ['$f$', '$f^{-1}$', 'Identity', 'Undefined'],
    correctIndex: 0,
    explanation: 'The inverse of the inverse is the original function: $(f^{-1})^{-1} = f$.'
  },
  {
    id: 29,
    difficulty: 'hard',
    question: 'If $f$ and $g$ are bijections, what is $(g \\circ f)^{-1}$?',
    options: ['$f^{-1} \\circ g^{-1}$', '$g^{-1} \\circ f^{-1}$', '$(f \\circ g)^{-1}$', '$f^{-1} \\cdot g^{-1}$'],
    correctIndex: 0,
    explanation: 'To undo $g \\circ f$, first undo $g$, then undo $f$: $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.'
  },
  {
    id: 30,
    difficulty: 'hard',
    question: 'If $f: A \\to B$ has only a right inverse $h: B \\to A$ (but no left inverse), then:',
    options: ['$f$ is surjective but not injective', '$f$ is injective but not surjective', '$f$ is bijective', '$f$ has no inverse'],
    correctIndex: 0,
    explanation: 'A right inverse exists iff $f$ is surjective. If no left inverse exists, $f$ is not injective.'
  }
];
