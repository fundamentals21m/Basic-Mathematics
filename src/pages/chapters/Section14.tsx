import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section14Questions } from '../../data/quizzes';
import { MappingComposer, FunctionIterator, PermutationCalculator } from '../../components/visualizations';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        A <strong>mapping</strong> (or <strong>map</strong>) generalizes the concept of a function.
        While functions typically deal with numbers, mappings can relate elements of any sets.
        This chapter explores the algebra of mappings and introduces <strong>permutations</strong>.
      </p>

      {/* Definition of Mapping */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Mappings</h2>

      <Definition title="Mapping">
        <p>
          A <strong>mapping</strong> <Math>f: S \to T</Math> is a rule that assigns to each element
          of set <Math>S</Math> exactly one element of set <Math>T</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          We call <Math>S</Math> the <strong>domain</strong> and <Math>T</Math> the <strong>codomain</strong>.
        </p>
      </Definition>

      <Definition title="Identity Mapping" className="mt-6">
        <p>
          The <strong>identity mapping</strong> <Math>I_S: S \to S</Math> maps every element to itself:
        </p>
        <MathBlock>I_S(x) = x \text{'{ for all }'} x \in S</MathBlock>
      </Definition>

      {/* Composition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Composition of Mappings</h2>

      <Definition title="Composite Mapping">
        <p>
          If <Math>f: S \to T</Math> and <Math>g: T \to U</Math>, then the <strong>composite</strong>{' '}
          <Math>g \circ f: S \to U</Math> is defined by:
        </p>
        <MathBlock>(g \circ f)(x) = g(f(x))</MathBlock>
        <p className="mt-2 text-dark-400">
          Read: "g composed with f" or "g after f". Apply <Math>f</Math> first, then <Math>g</Math>.
        </p>
      </Definition>

      <Example title="Composing Functions">
        <p>Let <Math>f(x) = x + 2</Math> and <Math>g(x) = 3x</Math>. Then:</p>
        <ul className="list-disc list-inside mt-2 text-dark-300">
          <li><Math>(g \circ f)(x) = g(f(x)) = g(x + 2) = 3(x + 2) = 3x + 6</Math></li>
          <li><Math>(f \circ g)(x) = f(g(x)) = f(3x) = 3x + 2</Math></li>
        </ul>
        <p className="mt-2 text-dark-400">
          Note: <Math>g \circ f \neq f \circ g</Math> in general!
        </p>
      </Example>

      <Callout type="warning" title="Order Matters!">
        <p>
          Composition is <strong>not commutative</strong>. The order in which you compose matters:
          <Math>g \circ f</Math> is usually different from <Math>f \circ g</Math>.
        </p>
      </Callout>

      <MappingComposer />

      {/* Inverse Mappings */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Inverse Mappings</h2>

      <Definition title="Inverse Mapping">
        <p>
          A mapping <Math>g: T \to S</Math> is an <strong>inverse</strong> of <Math>f: S \to T</Math> if:
        </p>
        <MathBlock>g \circ f = I_S \quad \text{'{ and }'} \quad f \circ g = I_T</MathBlock>
        <p className="mt-2 text-dark-400">
          We write <Math>f^{'{-1}'}</Math> for the inverse of <Math>f</Math>.
        </p>
      </Definition>

      <Example title="Inverse Functions">
        <ul className="space-y-2 mt-2">
          <li>
            <strong>Square and square root:</strong> On positive reals,{' '}
            <Math>f(x) = x^2</Math> and <Math>g(x) = \sqrt{'{x}'}</Math> are inverses.
          </li>
          <li>
            <strong>Exponential and logarithm:</strong>{' '}
            <Math>f(x) = a^x</Math> and <Math>g(x) = \log_a(x)</Math> are inverses.
          </li>
          <li>
            <strong>Linear:</strong> <Math>f(x) = 2x + 3</Math> has inverse{' '}
            <Math>f^{'{-1}'}(x) = \frac{'{x - 3}'}{'{2}'}</Math>.
          </li>
        </ul>
      </Example>

      {/* Iteration */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Iteration of Mappings</h2>

      <Definition title="Iteration">
        <p>
          For a mapping <Math>f: S \to S</Math>, we define <strong>powers</strong>:
        </p>
        <div className="mt-2 space-y-1 text-dark-300">
          <p><Math>f^0 = I</Math> (identity)</p>
          <p><Math>f^1 = f</Math></p>
          <p><Math>f^2 = f \circ f</Math></p>
          <p><Math>f^k = f \circ f \circ \cdots \circ f</Math> (<Math>k</Math> times)</p>
        </div>
      </Definition>

      <Theorem title="Exponent Rule for Mappings">
        <p>For any integers <Math>m, n</Math> (when inverses exist):</p>
        <MathBlock>f^{'{m+n}'} = f^m \circ f^n</MathBlock>
      </Theorem>

      <Example title="Iteration Examples">
        <p>Let <Math>f(x) = x + 3</Math>. Then:</p>
        <ul className="list-disc list-inside mt-2 text-dark-300">
          <li><Math>f^2(x) = f(f(x)) = f(x + 3) = x + 6</Math></li>
          <li><Math>f^3(x) = x + 9</Math></li>
          <li>In general: <Math>f^k(x) = x + 3k</Math></li>
        </ul>
      </Example>

      <FunctionIterator />

      {/* Permutations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Permutations</h2>

      <Definition title="Permutation">
        <p>
          A <strong>permutation</strong> of <Math>J_n = \{'{1, 2, \\ldots, n}\}'}</Math> is a mapping{' '}
          <Math>\sigma: J_n \to J_n</Math> that rearranges the elements (each element maps to a distinct element).
        </p>
      </Definition>

      <Definition title="Two-Row Notation" className="mt-6">
        <p>We write a permutation showing where each element goes:</p>
        <MathBlock>
          \sigma = \begin{'{bmatrix}'} 1 & 2 & 3 & \cdots & n \\ \sigma(1) & \sigma(2) & \sigma(3) & \cdots & \sigma(n) \end{'{bmatrix}'}
        </MathBlock>
      </Definition>

      <Example title="Permutation Example">
        <p>The permutation <Math>\sigma</Math> of <Math>\{'{1,2,3,4}\}'}</Math>:</p>
        <MathBlock>
          \sigma = \begin{'{bmatrix}'} 1 & 2 & 3 & 4 \\ 3 & 1 & 4 & 2 \end{'{bmatrix}'}
        </MathBlock>
        <p className="mt-2 text-dark-300">
          means <Math>\sigma(1) = 3</Math>, <Math>\sigma(2) = 1</Math>,{' '}
          <Math>\sigma(3) = 4</Math>, <Math>\sigma(4) = 2</Math>.
        </p>
      </Example>

      {/* Transpositions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Transpositions</h2>

      <Definition title="Transposition">
        <p>
          A <strong>transposition</strong> swaps exactly two elements and leaves all others fixed.
        </p>
        <p className="mt-2 text-dark-400">
          If <Math>\tau</Math> is a transposition, then <Math>\tau^2 = I</Math> (applying it twice returns to the original).
        </p>
      </Definition>

      <Theorem title="Transposition Factorization">
        <p>
          Every permutation can be expressed as a <strong>product of transpositions</strong>.
        </p>
      </Theorem>

      <Example title="Factoring a Permutation">
        <p>Express as transpositions:</p>
        <MathBlock>
          \sigma = \begin{'{bmatrix}'} 1 & 2 & 3 \\ 3 & 1 & 2 \end{'{bmatrix}'}
        </MathBlock>
        <p className="mt-2 text-dark-300">
          Let <Math>\tau_1</Math> swap 1 and 3, and <Math>\tau_2</Math> swap 1 and 2.
          Then <Math>\sigma = \tau_1 \circ \tau_2</Math>.
        </p>
      </Example>

      {/* Even and Odd */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Even and Odd Permutations</h2>

      <Definition title="Even and Odd Permutations">
        <ul className="space-y-2 mt-2">
          <li>
            <strong>Even permutation:</strong> Product of an <em>even</em> number of transpositions
          </li>
          <li>
            <strong>Odd permutation:</strong> Product of an <em>odd</em> number of transpositions
          </li>
        </ul>
        <p className="mt-3 text-dark-400">
          The <strong>sign</strong> of a permutation is <Math>+1</Math> (even) or <Math>-1</Math> (odd).
        </p>
      </Definition>

      <Theorem title="Well-Defined Parity">
        <p>
          A permutation is either always even or always odd, regardless of how it's factored into transpositions.
        </p>
      </Theorem>

      {/* Cycles */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Cycles and Orbits</h2>

      <Definition title="Cycle">
        <p>
          A <strong>cycle</strong> <Math>[a_1, a_2, \ldots, a_k]</Math> is a permutation that sends:
        </p>
        <MathBlock>a_1 \to a_2 \to a_3 \to \cdots \to a_k \to a_1</MathBlock>
        <p className="mt-2 text-dark-400">
          and leaves all other elements fixed. The number <Math>k</Math> is the <strong>length</strong> of the cycle.
        </p>
      </Definition>

      <Example title="Cycle Notation">
        <p>The permutation:</p>
        <MathBlock>
          \sigma = \begin{'{bmatrix}'} 1 & 2 & 3 & 4 & 5 \\ 3 & 5 & 4 & 1 & 2 \end{'{bmatrix}'}
        </MathBlock>
        <p className="mt-2 text-dark-300">
          has two cycles: <Math>[1, 3, 4]</Math> and <Math>[2, 5]</Math>.
        </p>
        <p className="text-dark-300">
          We write: <Math>\sigma = [1, 3, 4][2, 5]</Math>
        </p>
      </Example>

      <Theorem title="Sign from Orbits">
        <p>
          If a permutation of <Math>n</Math> elements has <Math>k</Math> orbits (cycles), then:
        </p>
        <ul className="list-disc list-inside mt-2 text-dark-300">
          <li><Math>n - k</Math> even → even permutation (sign = +1)</li>
          <li><Math>n - k</Math> odd → odd permutation (sign = −1)</li>
        </ul>
      </Theorem>

      <PermutationCalculator />

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Composition</strong> <Math>g \circ f</Math> means "apply f, then g" — order matters!</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Inverse</strong> <Math>f^{'{-1}'}</Math> undoes <Math>f</Math>: <Math>f^{'{-1}'} \circ f = I</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Every <strong>permutation</strong> can be written as a product of transpositions.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Permutations are <strong>even or odd</strong> based on the number of transpositions.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionTitle="Mappings" questions={section14Questions} />
    </LessonLayout>
  );
}
