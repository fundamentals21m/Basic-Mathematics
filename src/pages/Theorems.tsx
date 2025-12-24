import { Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum';

interface TheoremEntry {
  sectionId: number;
  title: string;
  statement: string;
  hasProof?: boolean;
}

// Comprehensive list of theorems from the course
const theorems: TheoremEntry[] = [
  // Chapter 1: Numbers
  { sectionId: 1, title: 'N3: Uniqueness of Additive Inverse', statement: 'If a + b = 0, then b = -a and a = -b.', hasProof: true },
  { sectionId: 1, title: 'Uniqueness of Zero', statement: 'If a + b = a for all a, then b = 0.', hasProof: true },
  { sectionId: 2, title: 'Sign Rules for Multiplication', statement: '(-a)(-b) = ab and (-a)(b) = -(ab).', hasProof: true },
  { sectionId: 2, title: 'Uniqueness of One', statement: 'If ab = a for all a, then b = 1.', hasProof: true },
  { sectionId: 3, title: 'Parity of Sum', statement: 'Even + Even = Even, Odd + Odd = Even, Even + Odd = Odd.', hasProof: true },
  { sectionId: 3, title: 'Parity of Product', statement: 'Even × anything = Even; Odd × Odd = Odd.', hasProof: true },
  { sectionId: 5, title: 'Uniqueness of Multiplicative Inverse', statement: 'If ab = 1, then b = 1/a.', hasProof: true },

  // Chapter 3: Real Numbers
  { sectionId: 9, title: 'Square Root Uniqueness', statement: 'Every positive real number has exactly one positive square root.', hasProof: true },
  { sectionId: 9, title: 'Absolute Value Properties', statement: '|ab| = |a||b| and |a + b| ≤ |a| + |b| (triangle inequality).', hasProof: true },
  { sectionId: 10, title: 'Exponent Rules', statement: 'a^m · a^n = a^(m+n), (a^m)^n = a^(mn), (ab)^n = a^n b^n.', hasProof: true },
  { sectionId: 10, title: 'Root Properties', statement: '√(ab) = √a · √b for a,b ≥ 0.', hasProof: true },
  { sectionId: 11, title: 'Inequality Preservation', statement: 'If a < b then a + c < b + c. If a < b and c > 0, then ac < bc.', hasProof: true },

  // Chapter 4: Quadratic Equations
  { sectionId: 12, title: 'Quadratic Formula', statement: 'Solutions of ax² + bx + c = 0 are x = (-b ± √(b² - 4ac)) / 2a.', hasProof: true },
  { sectionId: 12, title: 'Discriminant Criterion', statement: 'b² - 4ac > 0: two real roots; = 0: one root; < 0: no real roots.', hasProof: true },

  // Pythagoras
  { sectionId: 16, title: 'Pythagorean Theorem', statement: 'In a right triangle, a² + b² = c² where c is the hypotenuse.', hasProof: true },
  { sectionId: 22, title: 'Completing the Proof', statement: 'Rigorous area-based proof of the Pythagorean theorem.', hasProof: true },

  // Segments and Lines
  { sectionId: 29, title: 'Weighted Average Form', statement: 'Points on segment PQ: (1-t)P + tQ for t ∈ [0,1].', hasProof: true },
  { sectionId: 29, title: 'Parameterization of a Ray', statement: 'Ray from P through Q: P + t(Q-P) for t ≥ 0.', hasProof: true },
  { sectionId: 30, title: 'Equivalent Direction Vectors', statement: 'Two direction vectors are equivalent iff one is a scalar multiple of the other.', hasProof: true },
  { sectionId: 30, title: 'Slope-Intercept Form', statement: 'A line with slope m and y-intercept b: y = mx + b.', hasProof: true },
  { sectionId: 30, title: 'Parallel Lines Criterion', statement: 'Lines are parallel iff they have equal slopes or both are vertical.', hasProof: true },
  { sectionId: 30, title: 'Point-Slope Form', statement: 'Line through (x₀, y₀) with slope m: y - y₀ = m(x - x₀).', hasProof: true },
  { sectionId: 31, title: 'Perpendicular Lines and Slopes', statement: 'Lines with slopes m₁, m₂ are perpendicular iff m₁m₂ = -1.', hasProof: true },
  { sectionId: 31, title: 'Perpendicular Bisector Property', statement: 'The perpendicular bisector is the locus of points equidistant from two points.', hasProof: true },

  // Trigonometry
  { sectionId: 32, title: 'Arc Length Formula', statement: 's = rθ where θ is in radians.', hasProof: true },
  { sectionId: 32, title: 'Degree-Radian Conversion', statement: '180° = π radians.', hasProof: true },
  { sectionId: 32, title: 'Sector Area Formula', statement: 'A = ½r²θ where θ is in radians.', hasProof: true },
  { sectionId: 33, title: 'Pythagorean Identity', statement: 'sin²θ + cos²θ = 1.', hasProof: true },
  { sectionId: 33, title: 'Even and Odd Properties', statement: 'cos(-θ) = cos θ (even), sin(-θ) = -sin θ (odd).', hasProof: true },
  { sectionId: 33, title: 'Periodicity', statement: 'sin(θ + 2π) = sin θ and cos(θ + 2π) = cos θ.', hasProof: true },
  { sectionId: 33, title: 'Complementary Angles', statement: 'sin(π/2 - θ) = cos θ and cos(π/2 - θ) = sin θ.', hasProof: true },
  { sectionId: 34, title: 'Sine-Cosine Graph Relationship', statement: 'cos θ = sin(θ + π/2); the graphs are horizontal shifts.', hasProof: true },
  { sectionId: 35, title: 'Tangent Properties', statement: 'tan θ = sin θ / cos θ; undefined when cos θ = 0.', hasProof: true },
  { sectionId: 35, title: 'Extended Pythagorean Identities', statement: '1 + tan²θ = sec²θ and 1 + cot²θ = csc²θ.', hasProof: true },
  { sectionId: 36, title: 'Sine Addition Formula', statement: 'sin(α + β) = sin α cos β + cos α sin β.', hasProof: true },
  { sectionId: 36, title: 'Cosine Addition Formula', statement: 'cos(α + β) = cos α cos β - sin α sin β.', hasProof: true },
  { sectionId: 36, title: 'Double Angle Formulas', statement: 'sin 2θ = 2 sin θ cos θ; cos 2θ = cos²θ - sin²θ.', hasProof: true },
  { sectionId: 36, title: 'Half Angle Formulas', statement: 'sin²(θ/2) = (1 - cos θ)/2; cos²(θ/2) = (1 + cos θ)/2.', hasProof: true },
  { sectionId: 37, title: 'Rotation Matrix Properties', statement: 'Rotation by θ preserves distances and R_θ R_φ = R_{θ+φ}.', hasProof: true },
  { sectionId: 37, title: 'Rotation Around Point C', statement: 'Rotate about C: translate to origin, rotate, translate back.', hasProof: true },

  // Analytic Geometry
  { sectionId: 38, title: 'Point-Slope Form', statement: 'Line through P with direction D: P + tD.', hasProof: true },
  { sectionId: 38, title: 'Line Through Two Points', statement: 'P + t(Q - P) parameterizes the line through P and Q.', hasProof: true },
  { sectionId: 38, title: 'Point-to-Line Distance', statement: 'd = |ax₀ + by₀ + c| / √(a² + b²) for line ax + by + c = 0.', hasProof: true },
  { sectionId: 39, title: 'Vertex Form', statement: 'y = a(x - h)² + k where (h, k) is the vertex.', hasProof: true },
  { sectionId: 39, title: 'Reflective Property of Parabolas', statement: 'Rays parallel to axis reflect through focus.', hasProof: true },
  { sectionId: 40, title: 'Standard Ellipse Equation', statement: '(x/a)² + (y/b)² = 1 with foci at (±c, 0) where c² = a² - b².', hasProof: true },
  { sectionId: 40, title: 'Ellipse Reflective Property', statement: 'Ray from one focus reflects to the other focus.', hasProof: true },
  { sectionId: 41, title: 'Standard Hyperbola Equation', statement: '(x/a)² - (y/b)² = 1 with asymptotes y = ±(b/a)x.', hasProof: true },
  { sectionId: 42, title: 'Rotation Formulas', statement: 'x\' = x cos θ - y sin θ, y\' = x sin θ + y cos θ.', hasProof: true },
  { sectionId: 42, title: 'Conic Classification by Discriminant', statement: 'B² - 4AC: < 0 ellipse, = 0 parabola, > 0 hyperbola.', hasProof: true },

  // Functions
  { sectionId: 43, title: 'When Functions Are Equal', statement: 'f = g iff f(x) = g(x) for all x in the domain.', hasProof: true },
  { sectionId: 44, title: 'Factor Theorem', statement: 'P(r) = 0 iff (x - r) divides P(x).', hasProof: true },
  { sectionId: 44, title: 'Fundamental Theorem of Algebra', statement: 'Every polynomial of degree n ≥ 1 has at least one complex root.', hasProof: false },
  { sectionId: 45, title: 'Vertical Line Test', statement: 'A curve is a function iff every vertical line intersects it at most once.', hasProof: true },
  { sectionId: 46, title: 'Exponential Properties', statement: 'aˣ⁺ʸ = aˣaʸ, (aˣ)ʸ = aˣʸ, (ab)ˣ = aˣbˣ.', hasProof: true },
  { sectionId: 47, title: 'Logarithm Laws', statement: 'log(xy) = log x + log y, log(xⁿ) = n log x.', hasProof: true },
  { sectionId: 47, title: 'Change of Base', statement: 'logₐ x = logₓ x / logₓ a.', hasProof: true },

  // Mappings
  { sectionId: 49, title: 'Graph Characterization', statement: 'A mapping is determined by its graph.', hasProof: true },
  { sectionId: 50, title: 'Composition Associativity', statement: '(f ∘ g) ∘ h = f ∘ (g ∘ h).', hasProof: true },
  { sectionId: 50, title: 'Inverse Properties', statement: 'f ∘ f⁻¹ = id and f⁻¹ ∘ f = id.', hasProof: true },
  { sectionId: 50, title: 'When Does an Inverse Exist?', statement: 'f has an inverse iff f is bijective.', hasProof: true },
  { sectionId: 51, title: 'Number of Permutations', statement: 'There are n! permutations of n elements.', hasProof: true },
  { sectionId: 52, title: 'Disjoint Cycle Decomposition', statement: 'Every permutation is a product of disjoint cycles.', hasProof: true },
  { sectionId: 52, title: 'Order of a Cycle', statement: 'A k-cycle has order k.', hasProof: true },
  { sectionId: 52, title: 'Cycle as Transpositions', statement: 'Every cycle is a product of transpositions.', hasProof: true },

  // Complex Numbers
  { sectionId: 53, title: 'Complex Arithmetic', statement: '(a + bi)(c + di) = (ac - bd) + (ad + bc)i.', hasProof: true },
  { sectionId: 53, title: 'Conjugate Properties', statement: '|z|² = z · z̄ and z + z̄ = 2 Re(z).', hasProof: true },
  { sectionId: 54, title: "Euler's Formula", statement: 'e^(iθ) = cos θ + i sin θ.', hasProof: true },
  { sectionId: 54, title: "De Moivre's Theorem", statement: '(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ).', hasProof: true },

  // Induction
  { sectionId: 55, title: 'Principle of Mathematical Induction', statement: 'If P(1) and P(n)→P(n+1), then P(n) for all n ≥ 1.', hasProof: true },
  { sectionId: 55, title: 'Strong Induction', statement: 'If P(1) and [P(1)∧...∧P(n)]→P(n+1), then P(n) for all n.', hasProof: true },
  { sectionId: 56, title: 'Sum of First n Integers', statement: '1 + 2 + ... + n = n(n+1)/2.', hasProof: true },
  { sectionId: 56, title: 'Sum of Squares', statement: '1² + 2² + ... + n² = n(n+1)(2n+1)/6.', hasProof: true },
  { sectionId: 57, title: 'Finite Geometric Series', statement: 'a + ar + ar² + ... + arⁿ⁻¹ = a(1 - rⁿ)/(1 - r).', hasProof: true },
  { sectionId: 57, title: 'Infinite Geometric Series', statement: 'If |r| < 1: a + ar + ar² + ... = a/(1 - r).', hasProof: true },

  // Matrices and Determinants
  { sectionId: 58, title: 'Matrix Multiplication', statement: '(AB)ᵢⱼ = Σₖ AᵢₖBₖⱼ; matrix multiplication is associative.', hasProof: true },
  { sectionId: 58, title: 'Transpose Properties', statement: '(AB)ᵀ = BᵀAᵀ.', hasProof: true },
  { sectionId: 59, title: 'Invertibility Criterion', statement: 'A 2×2 matrix is invertible iff its determinant is nonzero.', hasProof: true },
  { sectionId: 59, title: '2×2 Inverse Formula', statement: 'A⁻¹ = (1/det A) [d -b; -c a] for A = [a b; c d].', hasProof: true },
  { sectionId: 60, title: 'Product of Determinants', statement: 'det(AB) = det(A) · det(B).', hasProof: true },
  { sectionId: 60, title: 'Row Operations on Determinants', statement: 'Swapping rows: sign change. Scaling a row: det scales.', hasProof: true },
  { sectionId: 61, title: "Sarrus' Rule (3×3)", statement: 'Compute 3×3 determinants using diagonal products.', hasProof: true },
  { sectionId: 61, title: 'Triangular Matrix Determinant', statement: 'Determinant of triangular matrix = product of diagonal entries.', hasProof: true },
  { sectionId: 62, title: 'Inverse via Adjugate', statement: 'A⁻¹ = (1/det A) · adj(A).', hasProof: true },
  { sectionId: 63, title: "Cramer's Rule", statement: 'xᵢ = det(Aᵢ)/det(A) where Aᵢ has column i replaced by b.', hasProof: true },
];

// Helper to get section info
const getSectionTitle = (sectionId: number): string => {
  for (const chapter of curriculum) {
    const section = chapter.sections.find(s => s.id === sectionId);
    if (section) return section.title;
  }
  return `Section ${sectionId}`;
};

const getChapterForSection = (sectionId: number): string => {
  for (const chapter of curriculum) {
    if (chapter.sections.some(s => s.id === sectionId)) {
      return chapter.title;
    }
  }
  return '';
};

// Group theorems by chapter
const groupedTheorems = curriculum.map(chapter => ({
  chapter,
  theorems: theorems.filter(t =>
    chapter.sections.some(s => s.id === t.sectionId)
  )
})).filter(group => group.theorems.length > 0);

export default function Theorems() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-dark-100 mb-4">Table of Theorems</h1>
      <p className="text-dark-400 mb-8">
        A comprehensive reference of all mathematical theorems in Basic Algebra, organized by chapter.
        Click any theorem to go to its section.
      </p>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 border border-amber-500/20 rounded-2xl p-4 mb-8">
        <p className="text-amber-300 text-sm">
          <span className="font-semibold">Tip:</span> Many theorems include clickable "View Proof" buttons on their section pages.
        </p>
      </div>

      <div className="space-y-8">
        {groupedTheorems.map(({ chapter, theorems: chapterTheorems }) => (
          <div key={chapter.id} className="space-y-3">
            <h2 className="text-xl font-bold text-dark-200 border-b border-dark-700/50 pb-2 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center text-sm font-bold text-amber-400">
                {chapter.id || '∗'}
              </span>
              {chapter.title}
            </h2>

            <div className="space-y-2">
              {chapterTheorems.map((theorem, idx) => (
                <Link
                  key={`${theorem.sectionId}-${idx}`}
                  to={`/section/${theorem.sectionId}`}
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-dark-800/40 border border-dark-700/50 p-4 transition-all duration-200 hover:border-amber-500/30 hover:bg-dark-800/60">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-orange-600 opacity-40 group-hover:opacity-100 transition-opacity" />

                    <div className="pl-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-dark-500">
                          §{theorem.sectionId}
                        </span>
                        <span className="text-[10px] text-dark-600">•</span>
                        <span className="text-[10px] text-dark-500">
                          {getSectionTitle(theorem.sectionId)}
                        </span>
                        {theorem.hasProof && (
                          <span className="ml-auto text-[10px] text-amber-500/70 font-medium">
                            Has Proof
                          </span>
                        )}
                      </div>

                      <h3 className="font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
                        {theorem.title}
                      </h3>

                      <p className="text-sm text-dark-400 mt-1">
                        {theorem.statement}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-dark-700/50 flex justify-between items-center">
        <Link
          to="/interactive"
          className="text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Interactive Modules
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
