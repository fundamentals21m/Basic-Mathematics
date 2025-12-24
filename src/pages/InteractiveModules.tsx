import { Link } from 'react-router-dom';

interface InteractiveModule {
  sectionId: number;
  sectionTitle: string;
  name: string;
  description: string;
  type: 'visualizer' | 'calculator' | 'explorer' | 'demo';
}

// All interactive modules in the course
const modules: InteractiveModule[] = [
  // Section 1: Addition Rules
  { sectionId: 1, sectionTitle: 'Rules for Addition', name: 'Number Line', description: 'Visualize addition and subtraction on the number line', type: 'visualizer' },
  { sectionId: 1, sectionTitle: 'Rules for Addition', name: 'Associativity Demo', description: 'Interactive demonstration of associative property', type: 'demo' },

  // Section 2: Multiplication Rules
  { sectionId: 2, sectionTitle: 'Rules for Multiplication', name: 'Sign Rules Demo', description: 'Explore why negative × negative = positive', type: 'demo' },
  { sectionId: 2, sectionTitle: 'Rules for Multiplication', name: 'Distributive Demo', description: 'Visualize the distributive property', type: 'demo' },
  { sectionId: 2, sectionTitle: 'Rules for Multiplication', name: 'Powers Explorer', description: 'Experiment with exponents and their rules', type: 'explorer' },

  // Section 3: Even/Odd
  { sectionId: 3, sectionTitle: 'Even and Odd; Divisibility', name: 'Even/Odd Explorer', description: 'Discover parity rules through experimentation', type: 'explorer' },
  { sectionId: 3, sectionTitle: 'Even and Odd; Divisibility', name: 'Parity Calculator', description: 'Calculate parity of arithmetic expressions', type: 'calculator' },
  { sectionId: 3, sectionTitle: 'Even and Odd; Divisibility', name: 'Divisibility Explorer', description: 'Test divisibility rules interactively', type: 'explorer' },

  // Section 4: Rational Numbers
  { sectionId: 4, sectionTitle: 'Rational Numbers', name: 'Fraction Equality Checker', description: 'Check if two fractions are equal', type: 'calculator' },
  { sectionId: 4, sectionTitle: 'Rational Numbers', name: 'Fraction Reducer', description: 'Reduce fractions to lowest terms step-by-step', type: 'calculator' },
  { sectionId: 4, sectionTitle: 'Rational Numbers', name: 'Fraction Calculator', description: 'Add, subtract, multiply, and divide fractions', type: 'calculator' },
  { sectionId: 4, sectionTitle: 'Rational Numbers', name: 'Irrational Explorer', description: 'Explore why √2 is irrational', type: 'explorer' },

  // Section 5: Multiplicative Inverses
  { sectionId: 5, sectionTitle: 'Multiplicative Inverses', name: 'Reciprocal Explorer', description: 'Find and verify reciprocals', type: 'explorer' },
  { sectionId: 5, sectionTitle: 'Multiplicative Inverses', name: 'Division Demo', description: 'Division as multiplication by reciprocal', type: 'demo' },
  { sectionId: 5, sectionTitle: 'Multiplicative Inverses', name: 'Cross Multiplication Solver', description: 'Solve equations using cross multiplication', type: 'calculator' },

  // Section 6: Two Unknowns
  { sectionId: 6, sectionTitle: 'Equations in Two Unknowns', name: 'System Solver', description: 'Solve 2×2 systems step-by-step', type: 'calculator' },
  { sectionId: 6, sectionTitle: 'Equations in Two Unknowns', name: 'Line Intersection Visualizer', description: 'See where two lines meet graphically', type: 'visualizer' },
  { sectionId: 6, sectionTitle: 'Equations in Two Unknowns', name: 'Determinant Calculator', description: 'Compute 2×2 determinants', type: 'calculator' },

  // Section 7: Three Unknowns
  { sectionId: 7, sectionTitle: 'Equations in Three Unknowns', name: '3-Variable System Solver', description: 'Solve 3×3 systems with elimination', type: 'calculator' },
  { sectionId: 7, sectionTitle: 'Equations in Three Unknowns', name: 'Solution Verifier', description: 'Verify solutions to 3×3 systems', type: 'calculator' },

  // Section 9: Positivity
  { sectionId: 9, sectionTitle: 'Positivity', name: 'Positivity Explorer', description: 'Explore positive and negative numbers', type: 'explorer' },
  { sectionId: 9, sectionTitle: 'Positivity', name: 'Square Root Calculator', description: 'Calculate and simplify square roots', type: 'calculator' },
  { sectionId: 9, sectionTitle: 'Positivity', name: 'Absolute Value Visualizer', description: 'Understand |x| on the number line', type: 'visualizer' },

  // Section 10: Powers and Roots
  { sectionId: 10, sectionTitle: 'Powers and Roots', name: 'Exponent Explorer', description: 'Experiment with integer and fractional exponents', type: 'explorer' },
  { sectionId: 10, sectionTitle: 'Powers and Roots', name: 'Nth Root Calculator', description: 'Calculate any root of any number', type: 'calculator' },
  { sectionId: 10, sectionTitle: 'Powers and Roots', name: 'Power Rules Demo', description: 'Visualize exponent laws', type: 'demo' },

  // Section 11: Inequalities
  { sectionId: 11, sectionTitle: 'Inequalities', name: 'Inequality Number Line', description: 'Graph inequalities on the number line', type: 'visualizer' },
  { sectionId: 11, sectionTitle: 'Inequalities', name: 'Inequality Solver', description: 'Solve linear inequalities step-by-step', type: 'calculator' },
  { sectionId: 11, sectionTitle: 'Inequalities', name: 'Interval Notation Explorer', description: 'Convert between notations', type: 'explorer' },

  // Section 12: Quadratics
  { sectionId: 12, sectionTitle: 'Completing the Square', name: 'Completing the Square Demo', description: 'Step-by-step completing the square', type: 'demo' },
  { sectionId: 12, sectionTitle: 'Completing the Square', name: 'Quadratic Formula Solver', description: 'Solve quadratics with the formula', type: 'calculator' },
  { sectionId: 12, sectionTitle: 'Completing the Square', name: 'Discriminant Explorer', description: 'See how discriminant affects roots', type: 'explorer' },

  // Section 13: Logic
  { sectionId: 13, sectionTitle: 'On Logic', name: 'Truth Table Builder', description: 'Build truth tables for logical expressions', type: 'calculator' },
  { sectionId: 13, sectionTitle: 'On Logic', name: 'Implication Explorer', description: 'Understand if-then statements', type: 'explorer' },

  // Section 14: Mappings Intro
  { sectionId: 14, sectionTitle: 'Distance', name: 'Mapping Composer', description: 'Compose functions step by step', type: 'calculator' },
  { sectionId: 14, sectionTitle: 'Distance', name: 'Function Iterator', description: 'Apply a function repeatedly', type: 'explorer' },

  // Section 15: Complex Numbers
  { sectionId: 15, sectionTitle: 'Angles', name: 'Complex Plane Visualizer', description: 'Plot complex numbers geometrically', type: 'visualizer' },
  { sectionId: 15, sectionTitle: 'Angles', name: 'Complex Arithmetic', description: 'Add, subtract, multiply complex numbers', type: 'calculator' },
  { sectionId: 15, sectionTitle: 'Angles', name: 'Polar Form Converter', description: 'Convert between forms', type: 'calculator' },

  // Section 16: Pythagoras
  { sectionId: 16, sectionTitle: 'The Pythagoras Theorem', name: 'Pythagorean Triple Finder', description: 'Generate Pythagorean triples', type: 'calculator' },
  { sectionId: 16, sectionTitle: 'The Pythagoras Theorem', name: 'Right Triangle Calculator', description: 'Find the missing side', type: 'calculator' },

  // Section 17: Matrices
  { sectionId: 17, sectionTitle: 'Standard Mappings', name: 'Matrix Builder', description: 'Create and manipulate matrices', type: 'explorer' },
  { sectionId: 17, sectionTitle: 'Standard Mappings', name: '2×2 Determinant Calculator', description: 'Compute determinants visually', type: 'calculator' },
  { sectionId: 17, sectionTitle: 'Standard Mappings', name: "Cramer's Rule Solver", description: 'Solve systems using determinants', type: 'calculator' },

  // Section 18: Isometries
  { sectionId: 18, sectionTitle: 'Isometries', name: 'Isometry Explorer', description: 'Apply translations, rotations, reflections', type: 'explorer' },
  { sectionId: 18, sectionTitle: 'Isometries', name: 'Transformation Composer', description: 'Combine multiple isometries', type: 'demo' },

  // Section 19: Congruence
  { sectionId: 19, sectionTitle: 'Congruence', name: 'Congruence Checker', description: 'Test triangle congruence criteria', type: 'calculator' },
  { sectionId: 19, sectionTitle: 'Congruence', name: 'Triangle Criteria Explorer', description: 'SSS, SAS, ASA, AAS demonstrations', type: 'explorer' },

  // Section 20-22: Area
  { sectionId: 20, sectionTitle: 'Area of Parallelograms', name: 'Parallelogram Area Demo', description: 'Visualize base × height', type: 'demo' },
  { sectionId: 20, sectionTitle: 'Area of Parallelograms', name: 'Shearing Demo', description: 'See how shearing preserves area', type: 'demo' },
  { sectionId: 21, sectionTitle: 'Area of Triangles', name: 'Triangle Area Demo', description: 'Multiple methods for triangle area', type: 'demo' },
  { sectionId: 21, sectionTitle: 'Area of Triangles', name: "Heron's Calculator", description: 'Area from three side lengths', type: 'calculator' },
  { sectionId: 22, sectionTitle: 'Pythagoras Proof', name: 'Pythagorean Proof Demo', description: 'Interactive area-based proof', type: 'demo' },

  // Section 23-25: Coordinate Geometry
  { sectionId: 23, sectionTitle: 'Coordinate Systems', name: 'Coordinate Plane Explorer', description: 'Plot and manipulate points', type: 'explorer' },
  { sectionId: 23, sectionTitle: 'Coordinate Systems', name: 'Quadrant Identifier', description: 'Identify quadrants instantly', type: 'calculator' },
  { sectionId: 24, sectionTitle: 'Distance in the Plane', name: 'Distance Formula Demo', description: 'Compute distances between points', type: 'calculator' },
  { sectionId: 25, sectionTitle: 'Equation of a Circle', name: 'Circle Equation Explorer', description: 'Graph circles from equations', type: 'explorer' },
  { sectionId: 25, sectionTitle: 'Equation of a Circle', name: 'Circle from Points', description: 'Find circle through three points', type: 'calculator' },

  // Section 26-28: Operations on Points
  { sectionId: 26, sectionTitle: 'Dilations and Reflections', name: 'Dilation Explorer', description: 'Scale figures from a center', type: 'explorer' },
  { sectionId: 26, sectionTitle: 'Dilations and Reflections', name: 'Reflection Explorer', description: 'Reflect across lines', type: 'explorer' },
  { sectionId: 27, sectionTitle: 'Point Addition', name: 'Point Addition Explorer', description: 'Add and subtract point coordinates', type: 'explorer' },
  { sectionId: 27, sectionTitle: 'Point Addition', name: 'Vector Operations Demo', description: 'Visualize vector-like operations', type: 'demo' },
  { sectionId: 28, sectionTitle: 'Parallelogram Law', name: 'Parallelogram Law Demo', description: 'See the geometric addition law', type: 'demo' },
  { sectionId: 28, sectionTitle: 'Parallelogram Law', name: 'Midpoint Explorer', description: 'Find midpoints geometrically', type: 'explorer' },
];

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  visualizer: { bg: 'from-cyan-500/10 to-cyan-600/5', text: 'text-cyan-400', border: 'border-cyan-500/20' },
  calculator: { bg: 'from-emerald-500/10 to-emerald-600/5', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  explorer: { bg: 'from-violet-500/10 to-violet-600/5', text: 'text-violet-400', border: 'border-violet-500/20' },
  demo: { bg: 'from-amber-500/10 to-amber-600/5', text: 'text-amber-400', border: 'border-amber-500/20' },
};

const typeIcons: Record<string, string> = {
  visualizer: '📊',
  calculator: '🧮',
  explorer: '🔍',
  demo: '▶️',
};

const typeLabels: Record<string, string> = {
  visualizer: 'Visualization',
  calculator: 'Calculator',
  explorer: 'Explorer',
  demo: 'Demo',
};

// Group modules by type
const modulesByType = {
  visualizer: modules.filter(m => m.type === 'visualizer'),
  calculator: modules.filter(m => m.type === 'calculator'),
  explorer: modules.filter(m => m.type === 'explorer'),
  demo: modules.filter(m => m.type === 'demo'),
};

export default function InteractiveModules() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-dark-100 mb-4">Interactive Modules</h1>
      <p className="text-dark-400 mb-8">
        Explore mathematical concepts through hands-on visualizations, calculators, and interactive demos.
        Each module provides immediate feedback to reinforce your understanding.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {(['visualizer', 'calculator', 'explorer', 'demo'] as const).map(type => (
          <div key={type} className={`rounded-xl bg-gradient-to-br ${typeColors[type].bg} border ${typeColors[type].border} p-4`}>
            <div className="text-2xl mb-1">{typeIcons[type]}</div>
            <div className={`text-2xl font-bold ${typeColors[type].text}`}>
              {modulesByType[type].length}
            </div>
            <div className="text-xs text-dark-500 uppercase tracking-wider">
              {typeLabels[type]}s
            </div>
          </div>
        ))}
      </div>

      {/* Modules by Type */}
      {(['visualizer', 'demo', 'calculator', 'explorer'] as const).map(type => (
        <div key={type} className="mb-10">
          <h2 className={`text-xl font-bold ${typeColors[type].text} mb-4 flex items-center gap-2`}>
            <span className="text-2xl">{typeIcons[type]}</span>
            {typeLabels[type]}s
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {modulesByType[type].map((module, idx) => (
              <Link
                key={`${module.sectionId}-${idx}`}
                to={`/section/${module.sectionId}`}
                className="group block"
              >
                <div className={`h-full rounded-xl bg-gradient-to-br ${typeColors[type].bg} border ${typeColors[type].border} p-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg`}>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-dark-500">
                      §{module.sectionId}
                    </span>
                    <span className={`text-xs font-medium ${typeColors[type].text} opacity-70`}>
                      {typeLabels[type]}
                    </span>
                  </div>

                  <h3 className={`font-semibold ${typeColors[type].text} mb-1 group-hover:brightness-125 transition-all`}>
                    {module.name}
                  </h3>

                  <p className="text-sm text-dark-400 mb-2">
                    {module.description}
                  </p>

                  <div className="text-xs text-dark-500">
                    {module.sectionTitle}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-12 pt-8 border-t border-dark-700/50 flex justify-between items-center">
        <Link
          to="/theorems"
          className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Table of Theorems
        </Link>

        <Link
          to="/"
          className="px-4 py-2 rounded-lg bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
