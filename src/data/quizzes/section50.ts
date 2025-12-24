import type { SectionQuizQuestion } from '../../components/quiz/SectionQuiz';

export const section50Questions: SectionQuizQuestion[] = [
  // Easy questions (5)
  {
    id: 1,
    difficulty: 'easy',
    question: 'In (g ∘ f)(x), which function is applied first?',
    options: ['f', 'g', 'Both simultaneously', 'Neither'],
    correctIndex: 0,
    explanation: '(g ∘ f)(x) = g(f(x)): apply f first, then g to the result.'
  },
  {
    id: 2,
    difficulty: 'easy',
    question: 'If f(x) = x + 1 and g(x) = 2x, what is (g ∘ f)(3)?',
    options: ['8', '7', '6', '9'],
    correctIndex: 0,
    explanation: 'f(3) = 4, then g(4) = 8.'
  },
  {
    id: 3,
    difficulty: 'easy',
    question: 'For a bijection f, what is f⁻¹ ∘ f?',
    options: ['Identity', 'Zero', 'f', 'f²'],
    correctIndex: 0,
    explanation: 'The inverse "undoes" f, so f⁻¹(f(x)) = x for all x.'
  },
  {
    id: 4,
    difficulty: 'easy',
    question: 'Is composition of functions commutative?',
    options: ['No, generally', 'Yes, always', 'Only for linear functions', 'Only for bijections'],
    correctIndex: 0,
    explanation: 'In general, g ∘ f ≠ f ∘ g.'
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
    question: 'If f(x) = 3x - 2, find f⁻¹(x).',
    options: ['(x + 2)/3', '(x - 2)/3', '3x + 2', '-3x + 2'],
    correctIndex: 0,
    explanation: 'Solve y = 3x - 2 for x: x = (y + 2)/3. So f⁻¹(x) = (x + 2)/3.'
  },
  {
    id: 7,
    difficulty: 'medium',
    question: 'If f and g are both injective, is g ∘ f injective?',
    options: ['Yes', 'No', 'Only if f = g', 'Cannot determine'],
    correctIndex: 0,
    explanation: 'The composition of injective functions is injective.'
  },
  {
    id: 8,
    difficulty: 'medium',
    question: 'Let f(x) = x² and g(x) = √x. What is (g ∘ f)(x) for x ≥ 0?',
    options: ['x', 'x²', '√x', 'x⁴'],
    correctIndex: 0,
    explanation: 'g(f(x)) = g(x²) = √(x²) = |x| = x for x ≥ 0.'
  },
  {
    id: 9,
    difficulty: 'medium',
    question: 'If (f ∘ g)(x) = x for all x in the domain of g, then g is:',
    options: ['A right inverse of f', 'A left inverse of f', 'Equal to f', 'The identity'],
    correctIndex: 0,
    explanation: 'f ∘ g = id means g is a right inverse of f.'
  },
  {
    id: 10,
    difficulty: 'medium',
    question: 'If f: ℝ → ℝ is f(x) = eˣ, what is f⁻¹(x)?',
    options: ['ln(x)', 'e⁻ˣ', '1/eˣ', 'x/e'],
    correctIndex: 0,
    explanation: 'The inverse of eˣ is the natural logarithm: f⁻¹(x) = ln(x).'
  },

  // Hard questions (5)
  {
    id: 11,
    difficulty: 'hard',
    question: 'If f: A → B and g: B → C, what are the domain and codomain of g ∘ f?',
    options: ['Domain A, codomain C', 'Domain B, codomain C', 'Domain A, codomain B', 'Domain C, codomain A'],
    correctIndex: 0,
    explanation: 'g ∘ f: A → C takes inputs from A and outputs to C.'
  },
  {
    id: 12,
    difficulty: 'hard',
    question: 'If g ∘ f is bijective, what can we conclude about f?',
    options: ['f is injective', 'f is surjective', 'f is bijective', 'Nothing'],
    correctIndex: 0,
    explanation: 'If g ∘ f is injective, then f must be injective (since distinct inputs to f give distinct outputs through the composition).'
  },
  {
    id: 13,
    difficulty: 'hard',
    question: 'For bijection f, what is (f⁻¹)⁻¹?',
    options: ['f', 'f⁻¹', 'Identity', 'Undefined'],
    correctIndex: 0,
    explanation: 'Taking the inverse twice returns to the original: (f⁻¹)⁻¹ = f.'
  },
  {
    id: 14,
    difficulty: 'hard',
    question: 'If f and g are bijections, what is (g ∘ f)⁻¹?',
    options: ['f⁻¹ ∘ g⁻¹', 'g⁻¹ ∘ f⁻¹', '(f ∘ g)⁻¹', 'f⁻¹ + g⁻¹'],
    correctIndex: 0,
    explanation: 'To undo g ∘ f, first undo g, then undo f: (g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹.'
  },
  {
    id: 15,
    difficulty: 'hard',
    question: 'If f has a left inverse g and a right inverse h, then:',
    options: ['g = h and f is bijective', 'g ≠ h always', 'f has no inverse', 'g and h are both identity'],
    correctIndex: 0,
    explanation: 'If both one-sided inverses exist, they are equal and f is bijective.'
  }
];
