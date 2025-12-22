import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Axiom } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section08Questions } from '../../data/quizzes';
import { RealNumberLineExplorer, RealNumberPropertiesDemo, AlgebraicIdentitiesVisualizer } from '../../components/visualizations';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        So far we've worked with integers and rational numbers. Now we expand to the
        <strong> real numbers</strong> — all numbers that correspond to points on the number line.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">What are Real Numbers?</h2>

      <Definition title="Real Numbers">
        <p>
          The <strong>real numbers</strong> are all numbers that can be represented as points
          on the number line, or equivalently, all numbers with a (possibly infinite) decimal expansion.
        </p>
        <p className="mt-3 text-dark-400">
          Unless otherwise specified, from now on "number" will mean "real number."
        </p>
      </Definition>

      <Example title="Real Numbers">
        <ul className="space-y-2 mt-2">
          <li>Integers: <Math>-3, 0, 5</Math></li>
          <li>Rationals: <Math>\frac{'{1}'}{'{2}'}, \frac{'{22}'}{'{7}'}, -0.75</Math></li>
          <li>Irrationals: <Math>\sqrt{'{2}'}, \pi, e</Math></li>
          <li>Infinite decimals: <Math>9.123145...</Math></li>
        </ul>
      </Example>

      <Callout type="info" title="The Real Number Line">
        <p>
          Every point on the number line corresponds to exactly one real number, and every
          real number corresponds to exactly one point. This one-to-one correspondence is
          fundamental to analysis.
        </p>
      </Callout>

      <RealNumberLineExplorer />

      {/* Properties of Addition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Addition</h2>

      <p className="text-dark-300 mb-6">
        Real numbers satisfy the same addition properties as integers and rationals:
      </p>

      <div className="space-y-4">
        <Axiom title="Commutativity">
          <MathBlock>a + b = b + a</MathBlock>
        </Axiom>

        <Axiom title="Associativity">
          <MathBlock>a + (b + c) = (a + b) + c</MathBlock>
        </Axiom>

        <Axiom title="Additive Identity">
          <MathBlock>0 + a = a</MathBlock>
        </Axiom>

        <Axiom title="Additive Inverse">
          <p>For every real number <Math>a</Math>, there exists <Math>-a</Math> such that:</p>
          <MathBlock>a + (-a) = 0</MathBlock>
          <p className="mt-2 text-dark-400">
            If <Math>a + b = 0</Math>, then <Math>b = -a</Math> (uniqueness).
          </p>
        </Axiom>
      </div>

      {/* Properties of Multiplication */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Multiplication</h2>

      <div className="space-y-4">
        <Axiom title="Commutativity">
          <MathBlock>ab = ba</MathBlock>
        </Axiom>

        <Axiom title="Associativity">
          <MathBlock>a(bc) = (ab)c</MathBlock>
        </Axiom>

        <Axiom title="Multiplicative Identity">
          <MathBlock>1 \cdot a = a</MathBlock>
        </Axiom>

        <Axiom title="Multiplicative Inverse">
          <p>For every real number <Math>a \neq 0</Math>, there exists <Math>a^{'{-1}'}</Math> such that:</p>
          <MathBlock>a \cdot a^{'{-1}'} = 1</MathBlock>
          <p className="mt-2 text-dark-400">
            If <Math>ab = 1</Math>, then <Math>b = a^{'{-1}'}</Math> (uniqueness).
          </p>
        </Axiom>

        <Axiom title="Zero Property">
          <MathBlock>0 \cdot a = 0</MathBlock>
        </Axiom>

        <Axiom title="Distributivity">
          <MathBlock>a(b + c) = ab + ac</MathBlock>
          <MathBlock>(b + c)a = ba + ca</MathBlock>
        </Axiom>
      </div>

      <RealNumberPropertiesDemo />

      {/* Important Formulas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Important Algebraic Identities</h2>

      <p className="text-dark-300 mb-6">
        These identities, which we derived for integers, hold for all real numbers:
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-dark-800/60 border border-dark-700/50 text-center">
          <p className="text-sm text-dark-400 mb-2">Square of Sum</p>
          <MathBlock>(a + b)^2 = a^2 + 2ab + b^2</MathBlock>
        </div>
        <div className="p-4 rounded-lg bg-dark-800/60 border border-dark-700/50 text-center">
          <p className="text-sm text-dark-400 mb-2">Square of Difference</p>
          <MathBlock>(a - b)^2 = a^2 - 2ab + b^2</MathBlock>
        </div>
        <div className="p-4 rounded-lg bg-dark-800/60 border border-dark-700/50 text-center">
          <p className="text-sm text-dark-400 mb-2">Difference of Squares</p>
          <MathBlock>(a + b)(a - b) = a^2 - b^2</MathBlock>
        </div>
      </div>

      <AlgebraicIdentitiesVisualizer />

      {/* Key Insight */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Power of Axioms</h2>

      <Callout type="warning" title="Universal Properties">
        <p>
          All theorems we proved using only these basic properties (like cross-multiplication,
          cancellation rules, and the zero product property) are now <em>automatically</em>
          valid for real numbers!
        </p>
        <p className="mt-2">
          This is the power of axiomatic reasoning: prove something from axioms once,
          and it applies to any system satisfying those axioms.
        </p>
      </Callout>

      <Example title="Properties That Transfer">
        <p>All of these work for real numbers:</p>
        <ul className="space-y-2 mt-3">
          <li><strong>Cross-multiplication:</strong> <Math>\frac{'{a}'}{'{b}'} = \frac{'{c}'}{'{d}'} \iff ad = bc</Math></li>
          <li><strong>Zero product:</strong> If <Math>ab = 0</Math>, then <Math>a = 0</Math> or <Math>b = 0</Math></li>
          <li><strong>Cancellation:</strong> <Math>\frac{'{ka}'}{'{kb}'} = \frac{'{a}'}{'{b}'}</Math> for <Math>k \neq 0</Math></li>
          <li><strong>Double negative:</strong> <Math>-(-a) = a</Math></li>
        </ul>
      </Example>

      {/* What's New */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">What's New About Real Numbers?</h2>

      <p className="text-dark-300">
        The key difference between real numbers and rationals is <strong>completeness</strong>:
        every point on the number line is a real number. This means:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><Math>\sqrt{'{2}'}</Math> exists as a real number (but not as a rational)</li>
        <li><Math>\pi</Math> and <Math>e</Math> exist as real numbers</li>
        <li>Every infinite decimal represents a real number</li>
        <li>There are no "gaps" in the real number line</li>
      </ul>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Real numbers</strong> = all points on the number line = all (infinite) decimals.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Addition and multiplication satisfy the same axioms as for rationals.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>All algebraic identities proved from axioms carry over automatically.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>The real numbers include irrationals like <Math>\sqrt{'{2}'}</Math> and <Math>\pi</Math>.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionTitle="Addition and Multiplication" questions={section08Questions} />
    </LessonLayout>
  );
}
