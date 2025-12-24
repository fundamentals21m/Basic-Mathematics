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
    question: 'In f: A → B, x ↦ x², what does → indicate?',
    options: ['Connects sets', 'Connects elements', 'Equals', 'Contains'],
    correctIndex: 0,
    explanation: '→ connects sets (domain to codomain); ↦ shows what happens to elements.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'What is id_A(5) where id_A is the identity on ℝ?',
    options: ['5', '0', '1', 'Undefined'],
    correctIndex: 0,
    explanation: 'The identity mapping returns its input: id_A(5) = 5.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'If f(x) = 3 for all x, what kind of mapping is f?',
    options: ['Constant', 'Identity', 'Linear', 'Injective'],
    correctIndex: 0,
    explanation: 'A mapping that sends every element to the same value is constant.'
  },
  {
    id: 5,
    difficulty: 'easy',
    question: 'The graph of a mapping f: A → B is a subset of:',
    options: ['A × B', 'A', 'B', 'A ∪ B'],
    correctIndex: 0,
    explanation: 'The graph consists of ordered pairs (a, f(a)), which lie in A × B.'
  },

  // Medium questions (5)
  {
    id: 6,
    difficulty: 'medium',
    question: 'Are f: ℝ → ℝ, x ↦ x² and g: [0,∞) → ℝ, x ↦ x² the same mapping?',
    options: ['No, different domains', 'Yes, same formula', 'Depends on x', 'Yes, same codomain'],
    correctIndex: 0,
    explanation: 'Different domains mean different mappings, even with the same formula.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'If f: ℝ → ℝ is f(x) = x², what is f|_{[0,∞)}?',
    options: ['The same formula restricted to non-negative x', 'A new function x³', 'The inverse of f', 'Undefined'],
    correctIndex: 0,
    explanation: 'Restriction limits the domain: f|_{[0,∞)} is x² but only for x ≥ 0.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'The inclusion ι: S → A where S ⊆ A is:',
    options: ['ι(s) = s', 'ι(s) = 0', 'ι(s) = A', 'Undefined'],
    correctIndex: 0,
    explanation: 'Inclusion sends each element to itself: ι(s) = s, but viewed as an element of A.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'If g extends f, then:',
    options: ['Domain(f) ⊆ Domain(g)', 'Domain(g) ⊆ Domain(f)', 'Domain(f) = Domain(g)', 'They are unrelated'],
    correctIndex: 0,
    explanation: 'An extension has a larger (or equal) domain that agrees with f where f is defined.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'For mappings f and g to be equal, they must agree on:',
    options: ['Domain, codomain, and values', 'Just values', 'Just domain', 'Just codomain'],
    correctIndex: 0,
    explanation: 'Equal mappings must have the same domain, same codomain, and same values at all points.'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'Let f: ℝ → ℝ, f(x) = x², and g: ℝ → [0,∞), g(x) = x². Are f and g equal?',
    options: ['No, different codomains', 'Yes, same formula and domain', 'Depends on x', 'Yes, same range'],
    correctIndex: 0,
    explanation: 'Different codomains make them different mappings, even with identical domains and formulas.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'A subset Γ ⊆ A × B is the graph of a function iff:',
    options: ['Each a ∈ A appears in exactly one pair', 'Each b ∈ B appears in exactly one pair', 'Γ = A × B', 'Γ is finite'],
    correctIndex: 0,
    explanation: 'Function definition: each input has exactly one output.'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'If f|_S is injective but f is not, what can we conclude?',
    options: ['The non-injectivity of f comes from outside S', 'S is empty', 'f is constant', 'S = domain of f'],
    correctIndex: 0,
    explanation: 'Restricting can remove the points causing non-injectivity.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'The composition id_B ∘ f equals:',
    options: ['f', 'id_B', 'id_A', 'f ∘ f'],
    correctIndex: 0,
    explanation: 'Composing with identity: id_B(f(x)) = f(x), so id_B ∘ f = f.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'If f: A → B and g: B → C, how many elements are in the graph of g ∘ f?',
    options: ['|A|', '|B|', '|C|', '|A| × |C|'],
    correctIndex: 0,
    explanation: 'The graph has one pair for each element in the domain, which is A. So |A| pairs.'
  }
];
