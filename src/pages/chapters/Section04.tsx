import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section04Questions } from '../../data/quizzes';
import { FractionEqualityChecker, FractionReducer, FractionCalculator, IrrationalExplorer } from '../../components/visualizations';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The integers are useful, but they're not enough. What if we need to divide 1 by 2?
        There's no integer that equals <Math>1/2</Math>. To handle division, we need
        <strong> rational numbers</strong>.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">What is a Rational Number?</h2>

      <Definition title="Rational Number">
        <p>
          A <strong>rational number</strong> is a quotient <Math>\frac{'{m}'}{'{n}'}</Math> where
          <Math>m</Math> and <Math>n</Math> are integers and <Math>n \neq 0</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          We cannot divide by zero, so the denominator must be non-zero.
        </p>
      </Definition>

      <Example title="Rational Numbers">
        <ul className="space-y-2 mt-2">
          <li><Math>\frac{'{1}'}{'{2}'}</Math>, <Math>\frac{'{3}'}{'{4}'}</Math>, <Math>\frac{'{-5}'}{'{7}'}</Math></li>
          <li><Math>\frac{'{22}'}{'{7}'}</Math> (an approximation of <Math>\pi</Math>)</li>
          <li><Math>3 = \frac{'{3}'}{'{1}'}</Math> (every integer is rational)</li>
        </ul>
      </Example>

      <Callout type="info" title="Integers are Rational">
        <p>
          Every integer <Math>m</Math> can be written as <Math>\frac{'{m}'}{'{1}'}</Math>,
          so integers are a subset of rational numbers.
        </p>
      </Callout>

      {/* Equality of Fractions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">When Are Two Fractions Equal?</h2>

      <Theorem title="Cross-Multiplication Rule">
        <p>Two fractions are equal if and only if their cross products are equal:</p>
        <MathBlock>\frac{'{m}'}{'{n}'} = \frac{'{r}'}{'{s}'} \iff ms = rn</MathBlock>
        <p className="mt-2 text-dark-400">
          (Assuming <Math>n \neq 0</Math> and <Math>s \neq 0</Math>)
        </p>
      </Theorem>

      <Example title="Verifying Equality">
        <p>Is <Math>\frac{'{3}'}{'{7}'} = \frac{'{9}'}{'{21}'}</Math>?</p>
        <p className="mt-2 text-dark-300">
          Cross-multiply: <Math>3 \cdot 21 = 63</Math> and <Math>9 \cdot 7 = 63</Math>.
          Since <Math>63 = 63</Math>, the fractions are equal. ✓
        </p>
      </Example>

      <FractionEqualityChecker />

      {/* Cancellation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Cancellation and Lowest Form</h2>

      <Theorem title="Cancellation Rule">
        <p>For any non-zero integer <Math>a</Math>:</p>
        <MathBlock>\frac{'{am}'}{'{an}'} = \frac{'{m}'}{'{n}'}</MathBlock>
        <p className="mt-2 text-dark-400">
          Common factors in the numerator and denominator can be cancelled.
        </p>
      </Theorem>

      <Definition title="Lowest Form" className="mt-6">
        <p>
          A fraction <Math>\frac{'{r}'}{'{s}'}</Math> is in <strong>lowest form</strong> (or <strong>reduced form</strong>)
          if the only common divisor of <Math>|r|</Math> and <Math>|s|</Math> is 1.
        </p>
      </Definition>

      <Example title="Reducing to Lowest Form">
        <ul className="space-y-2 mt-2">
          <li><Math>\frac{'{10}'}{'{15}'} = \frac{'{2 \\cdot 5}'}{'{3 \\cdot 5}'} = \frac{'{2}'}{'{3}'}</Math></li>
          <li><Math>\frac{'{24}'}{'{36}'} = \frac{'{2}'}{'{3}'}</Math> (GCD is 12)</li>
          <li><Math>\frac{'{-14}'}{'{21}'} = \frac{'{-2}'}{'{3}'}</Math></li>
        </ul>
      </Example>

      <FractionReducer />

      <Theorem title="Existence of Lowest Form" className="mt-6">
        <p>Any rational number can be expressed as a fraction in lowest form.</p>
      </Theorem>

      {/* Arithmetic */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Arithmetic of Fractions</h2>

      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-dark-100 mb-3">Addition</h4>
          <MathBlock>\frac{'{a}'}{'{d}'} + \frac{'{b}'}{'{d}'} = \frac{'{a + b}'}{'{d}'}</MathBlock>
          <p className="text-dark-400 mt-3">With same denominator, add numerators.</p>
          <MathBlock className="mt-3">\frac{'{m}'}{'{n}'} + \frac{'{r}'}{'{s}'} = \frac{'{ms + rn}'}{'{ns}'}</MathBlock>
          <p className="text-dark-400 mt-3">With different denominators, cross-multiply.</p>
        </div>

        <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-dark-100 mb-3">Multiplication</h4>
          <MathBlock>\frac{'{m}'}{'{n}'} \cdot \frac{'{r}'}{'{s}'} = \frac{'{mr}'}{'{ns}'}</MathBlock>
          <p className="text-dark-400 mt-3">Multiply numerators; multiply denominators.</p>
        </div>

        <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-dark-100 mb-3">Powers</h4>
          <MathBlock>\left(\frac{'{m}'}{'{n}'}\right)^k = \frac{'{m^k}'}{'{n^k}'}</MathBlock>
        </div>
      </div>

      <Example title="Fraction Arithmetic">
        <div className="space-y-3 mt-2">
          <p><strong>Addition:</strong> <Math>\frac{'{3}'}{'{5}'} + \frac{'{4}'}{'{7}'} = \frac{'{3 \\cdot 7 + 4 \\cdot 5}'}{'{5 \\cdot 7}'} = \frac{'{21 + 20}'}{'{35}'} = \frac{'{41}'}{'{35}'}</Math></p>
          <p><strong>Multiplication:</strong> <Math>\frac{'{3}'}{'{5}'} \cdot \frac{'{7}'}{'{8}'} = \frac{'{21}'}{'{40}'}</Math></p>
          <p><strong>Power:</strong> <Math>\left(\frac{'{1}'}{'{2}'}\right)^3 = \frac{'{1}'}{'{8}'}</Math></p>
        </div>
      </Example>

      <FractionCalculator />

      {/* Negative Signs */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Negative Signs in Fractions</h2>

      <Theorem title="Moving Negative Signs">
        <p>A negative sign can be placed in the numerator, denominator, or in front:</p>
        <MathBlock>-\frac{'{m}'}{'{n}'} = \frac{'{-m}'}{'{n}'} = \frac{'{m}'}{'{-n}'}</MathBlock>
      </Theorem>

      <Example title="Negative Fraction Examples">
        <ul className="space-y-2 mt-2">
          <li><Math>-\frac{'{3}'}{'{5}'} = \frac{'{-3}'}{'{5}'} = \frac{'{3}'}{'{-5}'}</Math></li>
          <li><Math>\frac{'{-5}'}{'{2}'} + \frac{'{3}'}{'{7}'} = \frac{'{-35 + 6}'}{'{14}'} = \frac{'{-29}'}{'{14}'}</Math></li>
        </ul>
      </Example>

      {/* Irrational Numbers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Beyond Rationals: Irrational Numbers</h2>

      <Definition title="Irrational Number">
        <p>
          An <strong>irrational number</strong> is a number that cannot be expressed as a
          fraction of two integers.
        </p>
      </Definition>

      <Theorem title="The Irrationality of √2">
        <p>There is no rational number whose square is 2.</p>
        <details className="mt-3">
          <summary className="cursor-pointer text-primary-400 hover:text-primary-300">Show proof</summary>
          <div className="mt-2 p-4 bg-dark-800/50 rounded-lg text-dark-300">
            <p><strong>Proof by contradiction:</strong></p>
            <p className="mt-2">Suppose <Math>\sqrt{'{2}'} = \frac{'{m}'}{'{n}'}</Math> in lowest form.</p>
            <p className="mt-2">Then <Math>2 = \frac{'{m^2}'}{'{n^2}'}</Math>, so <Math>m^2 = 2n^2</Math>.</p>
            <p className="mt-2">This means <Math>m^2</Math> is even, so <Math>m</Math> is even. Write <Math>m = 2k</Math>.</p>
            <p className="mt-2">Then <Math>(2k)^2 = 2n^2</Math>, giving <Math>4k^2 = 2n^2</Math>, so <Math>n^2 = 2k^2</Math>.</p>
            <p className="mt-2">This means <Math>n^2</Math> is even, so <Math>n</Math> is even.</p>
            <p className="mt-2">But if both <Math>m</Math> and <Math>n</Math> are even, the fraction wasn't in lowest form. <strong>Contradiction!</strong></p>
          </div>
        </details>
      </Theorem>

      <Callout type="warning" title="Approximating √2">
        <p>
          While <Math>\sqrt{'{2}'}</Math> is irrational, we can approximate it with rationals:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>1.4^2 = 1.96</Math> (too small)</li>
          <li><Math>1.5^2 = 2.25</Math> (too big)</li>
          <li><Math>1.414^2 = 1.999396</Math> (very close!)</li>
        </ul>
      </Callout>

      <IrrationalExplorer />

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>A <strong>rational number</strong> is <Math>\frac{'{m}'}{'{n}'}</Math> where <Math>m, n</Math> are integers and <Math>n \neq 0</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Cross-multiplication:</strong> <Math>\frac{'{m}'}{'{n}'} = \frac{'{r}'}{'{s}'} \iff ms = rn</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Every fraction can be reduced to <strong>lowest form</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><Math>\sqrt{'{2}'}</Math> is <strong>irrational</strong> — it cannot be expressed as a fraction.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionTitle="Rational Numbers" questions={section04Questions} />
    </LessonLayout>
  );
}
