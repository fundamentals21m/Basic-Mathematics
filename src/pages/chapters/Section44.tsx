import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section44Questions } from '../../data/quizzes';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Polynomial functions</strong> are among the most fundamental and well-behaved functions
        in mathematics. They are sums of terms involving non-negative integer powers of the variable.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Definition</h2>

      <Definition title="Polynomial Function">
        <p>
          A <strong>polynomial function</strong> of degree <Math>n</Math> is a function of the form:
        </p>
        <MathBlock>
          {'f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>{'a_n \\neq 0'}</Math> and the coefficients <Math>{'a_0, a_1, \\ldots, a_n'}</Math> are constants.
        </p>
      </Definition>

      <Definition title="Terminology">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><strong>Leading coefficient:</strong> <Math>{'a_n'}</Math></li>
          <li><strong>Leading term:</strong> <Math>{'a_n x^n'}</Math></li>
          <li><strong>Constant term:</strong> <Math>{'a_0'}</Math></li>
          <li><strong>Degree:</strong> The highest power <Math>n</Math></li>
        </ul>
      </Definition>

      {/* Types of Polynomials */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Types by Degree</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2 px-3">Degree</th>
              <th className="text-left py-2 px-3">Name</th>
              <th className="text-left py-2 px-3">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800"><td className="py-2 px-3">0</td><td className="py-2 px-3">Constant</td><td className="py-2 px-3"><Math>{'f(x) = 5'}</Math></td></tr>
            <tr className="border-b border-dark-800"><td className="py-2 px-3">1</td><td className="py-2 px-3">Linear</td><td className="py-2 px-3"><Math>{'f(x) = 3x + 2'}</Math></td></tr>
            <tr className="border-b border-dark-800"><td className="py-2 px-3">2</td><td className="py-2 px-3">Quadratic</td><td className="py-2 px-3"><Math>{'f(x) = x^2 - 4x + 3'}</Math></td></tr>
            <tr className="border-b border-dark-800"><td className="py-2 px-3">3</td><td className="py-2 px-3">Cubic</td><td className="py-2 px-3"><Math>{'f(x) = x^3 - 1'}</Math></td></tr>
            <tr><td className="py-2 px-3">4</td><td className="py-2 px-3">Quartic</td><td className="py-2 px-3"><Math>{'f(x) = x^4 + 2x^2 + 1'}</Math></td></tr>
          </tbody>
        </table>
      </div>

      {/* Polynomial Arithmetic */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Polynomial Arithmetic</h2>

      <Theorem title="Addition and Subtraction">
        <p>Add polynomials by combining like terms (terms with the same power of <Math>x</Math>).</p>
      </Theorem>

      <Example title="Adding Polynomials">
        <p>Compute <Math>{'(3x^2 + 2x - 1) + (x^2 - 5x + 4)'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'= (3 + 1)x^2 + (2 - 5)x + (-1 + 4) = 4x^2 - 3x + 3'}
          </MathBlock>
        </div>
      </Example>

      <Theorem title="Multiplication">
        <p>
          When multiplying polynomials of degrees <Math>m</Math> and <Math>n</Math>,
          the result has degree <Math>{'m + n'}</Math>.
        </p>
      </Theorem>

      <Example title="Multiplying Polynomials">
        <p>Compute <Math>{'(x + 2)(x^2 - x + 3)'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'= x(x^2 - x + 3) + 2(x^2 - x + 3)'}
          </MathBlock>
          <MathBlock>
            {'= x^3 - x^2 + 3x + 2x^2 - 2x + 6 = x^3 + x^2 + x + 6'}
          </MathBlock>
        </div>
      </Example>

      {/* Roots and Factors */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Roots and Factors</h2>

      <Definition title="Root (Zero)">
        <p>
          A <strong>root</strong> of polynomial <Math>{'f(x)'}</Math> is a value <Math>r</Math> such that <Math>{'f(r) = 0'}</Math>.
        </p>
      </Definition>

      <Theorem title="Factor Theorem">
        <p>
          <Math>r</Math> is a root of <Math>{'f(x)'}</Math> if and only if <Math>{'(x - r)'}</Math> is a factor of <Math>{'f(x)'}</Math>.
        </p>
      </Theorem>

      <Example title="Using the Factor Theorem">
        <p>Show that <Math>{'x = 2'}</Math> is a root of <Math>{'f(x) = x^3 - 4x^2 + x + 6'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'f(2) = 8 - 16 + 2 + 6 = 0'}
          </MathBlock>
          <p>Since <Math>{'f(2) = 0'}</Math>, we know <Math>{'(x - 2)'}</Math> is a factor.</p>
        </div>
      </Example>

      <Theorem title="Fundamental Theorem of Algebra">
        <p>
          A polynomial of degree <Math>n</Math> has exactly <Math>n</Math> roots (counting multiplicity and complex roots).
        </p>
      </Theorem>

      <Callout type="info" title="Rational Root Theorem">
        <p>
          If <Math>{'f(x) = a_n x^n + \\cdots + a_0'}</Math> has integer coefficients and <Math>{'p/q'}</Math>
          (in lowest terms) is a rational root, then <Math>p</Math> divides <Math>{'a_0'}</Math>
          and <Math>q</Math> divides <Math>{'a_n'}</Math>.
        </p>
      </Callout>

      {/* End Behavior */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">End Behavior</h2>

      <Theorem title="End Behavior">
        <p>For large <Math>{'|x|'}</Math>, the behavior of <Math>{'f(x) = a_n x^n + \\cdots'}</Math> is dominated by the leading term:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>If <Math>{'a_n > 0'}</Math> and <Math>n</Math> is even: <Math>{'f(x) \\to +\\infty'}</Math> as <Math>{'x \\to \\pm\\infty'}</Math></li>
          <li>If <Math>{'a_n > 0'}</Math> and <Math>n</Math> is odd: <Math>{'f(x) \\to +\\infty'}</Math> as <Math>{'x \\to +\\infty'}</Math>, <Math>{'f(x) \\to -\\infty'}</Math> as <Math>{'x \\to -\\infty'}</Math></li>
        </ul>
      </Theorem>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>A polynomial of degree <Math>n</Math> has at most <Math>n</Math> real roots</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><Math>r</Math> is a root iff <Math>{'(x - r)'}</Math> is a factor</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Product of degrees <Math>m</Math> and <Math>n</Math> polynomials has degree <Math>{'m + n'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>End behavior is determined by the leading term</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={44} sectionTitle="Polynomial Functions" questions={section44Questions} />
    </LessonLayout>
  );
}
