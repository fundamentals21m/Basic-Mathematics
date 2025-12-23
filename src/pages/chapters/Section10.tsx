import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Axiom, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section10Questions } from '../../data/quizzes';
import { ExponentExplorer, NthRootCalculator, FractionalExponentDemo, PowerRulesDemo } from '../../components/visualizations';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        We've seen positive integer powers like <Math>a^3 = a \cdot a \cdot a</Math>.
        Now we extend this to <strong>all powers</strong>: zero, negative, and fractional exponents.
      </p>

      {/* Integer Powers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Integer Powers</h2>

      <Definition title="Positive Integer Powers">
        <p>For a positive integer <Math>n</Math>:</p>
        <MathBlock>{"a^n = \\underbrace{a \\cdot a \\cdot \\cdots \\cdot a}_{n \\text{ times}}"}</MathBlock>
      </Definition>

      <Theorem
        title="Product of Powers"
        proof={
          <>
            <p>By definition of positive integer powers:</p>
            <MathBlock>{"a^m = \\underbrace{a \\cdot a \\cdots a}_{m \\text{ times}}, \\quad a^n = \\underbrace{a \\cdot a \\cdots a}_{n \\text{ times}}"}</MathBlock>
            <p className="mt-2">Multiplying these together:</p>
            <MathBlock>{"a^m \\cdot a^n = \\underbrace{a \\cdot a \\cdots a}_{m \\text{ times}} \\cdot \\underbrace{a \\cdot a \\cdots a}_{n \\text{ times}} = \\underbrace{a \\cdot a \\cdots a}_{m+n \\text{ times}} = a^{m+n}"}</MathBlock>
          </>
        }
      >
        <p>For positive integers <Math>m</Math> and <Math>n</Math>:</p>
        <MathBlock>a^m \cdot a^n = a^{'{m+n}'}</MathBlock>
      </Theorem>

      {/* Zero and Negative Exponents */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Zero and Negative Exponents</h2>

      <Theorem
        title="Zero Exponent"
        proof={
          <>
            <p>We want <Math>a^0 = 1</Math> to preserve the product rule <Math>a^m \cdot a^n = a^{'{m+n}'}</Math>.</p>
            <p className="mt-2">Let <Math>b = a^0</Math>. Using the product rule:</p>
            <MathBlock>a = a^1 = a^{'{0+1}'} = a^0 \cdot a^1 = b \cdot a</MathBlock>
            <p className="mt-2">So <Math>ba = a</Math>. Multiplying both sides by <Math>a^{'{-1}'}</Math>:</p>
            <MathBlock>b = 1</MathBlock>
            <p className="mt-2">Therefore <Math>a^0 = 1</Math>.</p>
          </>
        }
      >
        <p>For any <Math>a \neq 0</Math>:</p>
        <MathBlock>a^0 = 1</MathBlock>
      </Theorem>

      <Theorem
        title="Negative Exponent"
        className="mt-6"
        proof={
          <>
            <p>We want negative exponents to preserve the product rule <Math>a^m \cdot a^n = a^{'{m+n}'}</Math>.</p>
            <p className="mt-2">Using the product rule with exponents <Math>n</Math> and <Math>-n</Math>:</p>
            <MathBlock>a^n \cdot a^{'{-n}'} = a^{'{n + (-n)}'} = a^0 = 1</MathBlock>
            <p className="mt-2">This shows that <Math>a^{'{-n}'}</Math> is the multiplicative inverse of <Math>a^n</Math>.</p>
            <p className="mt-2">Therefore:</p>
            <MathBlock>a^{'{-n}'} = \frac{'{1}'}{'{a^n}'}</MathBlock>
          </>
        }
      >
        <p>For any <Math>a \neq 0</Math> and positive integer <Math>n</Math>:</p>
        <MathBlock>a^{'{-n}'} = \frac{'{1}'}{'{a^n}'}</MathBlock>
      </Theorem>

      <Example title="Zero and Negative Exponents">
        <ul className="space-y-2 mt-2">
          <li><Math>5^0 = 1</Math></li>
          <li><Math>(-3)^0 = 1</Math></li>
          <li><Math>2^{'{-3}'} = \frac{'{1}'}{'{2^3}'} = \frac{'{1}'}{'{8}'}</Math></li>
          <li><Math>10^{'{-2}'} = \frac{'{1}'}{'{100}'} = 0.01</Math></li>
        </ul>
      </Example>

      <ExponentExplorer />

      {/* n-th Roots */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">n-th Roots</h2>

      <Theorem
        title="Existence of n-th Roots"
        proof={
          <>
            <p>We prove existence using the completeness property of real numbers.</p>
            <p className="mt-2">Consider the set <Math>S = \{'{x \\in \\mathbb{R}^+ : x^n < a}'}\</Math>.</p>
            <p className="mt-2">This set is non-empty (it contains small positive numbers) and bounded above (if <Math>x {'>'} a+1</Math> and <Math>a {'>'} 1</Math>, then <Math>x^n {'>'} a</Math>).</p>
            <p className="mt-2">By the least upper bound property, <Math>S</Math> has a supremum <Math>r = \sup S</Math>.</p>
            <p className="mt-2">One can show that <Math>r^n = a</Math>: if <Math>r^n {'<'} a</Math>, we could find a larger element in <Math>S</Math>; if <Math>r^n {'>'} a</Math>, we could find a smaller upper bound.</p>
            <p className="mt-2"><strong>Uniqueness:</strong> If <Math>r^n = a</Math> and <Math>s^n = a</Math> with <Math>r, s {'>'} 0</Math>, then <Math>r^n = s^n</Math>. Since the function <Math>f(x) = x^n</Math> is strictly increasing for positive <Math>x</Math>, we must have <Math>r = s</Math>.</p>
          </>
        }
      >
        <p>
          For any positive real number <Math>a</Math> and positive integer <Math>n</Math>,
          there exists a unique positive real number <Math>r</Math> such that:
        </p>
        <MathBlock>r^n = a</MathBlock>
      </Theorem>

      <Definition title="n-th Root Notation" className="mt-6">
        <p>We write the n-th root of <Math>a</Math> as:</p>
        <MathBlock>a^{'{1/n}'} = \sqrt[n]{'{a}'}</MathBlock>
        <ul className="list-disc list-inside mt-3 text-dark-400">
          <li><Math>a^{'{1/2}'} = \sqrt{'{a}'}</Math> (square root)</li>
          <li><Math>a^{'{1/3}'} = \sqrt[3]{'{a}'}</Math> (cube root)</li>
          <li><Math>a^{'{1/4}'} = \sqrt[4]{'{a}'}</Math> (fourth root)</li>
        </ul>
      </Definition>

      <Example title="n-th Root Examples">
        <ul className="space-y-2 mt-2">
          <li><Math>8^{'{1/3}'} = \sqrt[3]{'{8}'} = 2</Math> because <Math>2^3 = 8</Math></li>
          <li><Math>16^{'{1/4}'} = 2</Math> because <Math>2^4 = 16</Math></li>
          <li><Math>32^{'{1/5}'} = 2</Math> because <Math>2^5 = 32</Math></li>
        </ul>
      </Example>

      <NthRootCalculator />

      {/* Fractional Exponents */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Fractional Exponents</h2>

      <Definition title="Fractional Powers">
        <p>For positive <Math>a</Math> and integers <Math>m</Math>, <Math>n</Math> with <Math>n {'>'} 0</Math>:</p>
        <MathBlock>a^{'{m/n}'} = (a^{'{1/n}'})^m = (a^m)^{'{1/n}'}</MathBlock>
        <p className="mt-2 text-dark-400">
          Take the n-th root, then raise to the m-th power (or vice versa).
        </p>
      </Definition>

      <Example title="Fractional Exponent Examples">
        <ul className="space-y-3 mt-2">
          <li>
            <Math>8^{'{2/3}'} = (8^{'{1/3}'})^2 = 2^2 = 4</Math>
          </li>
          <li>
            <Math>27^{'{2/3}'} = (27^{'{1/3}'})^2 = 3^2 = 9</Math>
          </li>
          <li>
            <Math>4^{'{3/2}'} = (4^{'{1/2}'})^3 = 2^3 = 8</Math>
          </li>
          <li>
            <Math>\left(\frac{'{25}'}{'{9}'}\right)^{'{3/2}'} = \frac{'{25^{3/2}}'}{'{9^{3/2}}'} = \frac{'{125}'}{'{27}'}</Math>
          </li>
        </ul>
      </Example>

      <FractionalExponentDemo />

      {/* Power Rules */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Power Rules</h2>

      <div className="space-y-4">
        <Axiom title="POW 1: Product of Powers">
          <p>For all rational exponents <Math>x</Math> and <Math>y</Math>:</p>
          <MathBlock>a^{'{x+y}'} = a^x \cdot a^y</MathBlock>
        </Axiom>

        <Axiom title="POW 2: Power of a Power">
          <p>For all rational exponents <Math>x</Math> and <Math>y</Math>:</p>
          <MathBlock>(a^x)^y = a^{'{xy}'}</MathBlock>
        </Axiom>

        <Axiom title="POW 3: Power of a Product">
          <p>For positive <Math>a</Math>, <Math>b</Math> and rational exponent <Math>x</Math>:</p>
          <MathBlock>(ab)^x = a^x \cdot b^x</MathBlock>
        </Axiom>
      </div>

      <Example title="Applying Power Rules" className="mt-6">
        <ul className="space-y-2 mt-2">
          <li><Math>2^{'{1/2}'} \cdot 2^{'{3/2}'} = 2^{'{(1/2)+(3/2)}'} = 2^2 = 4</Math></li>
          <li><Math>(8^2)^{'{1/3}'} = 8^{'{2/3}'} = 4</Math></li>
          <li><Math>(9 \cdot 4)^{'{1/2}'} = 9^{'{1/2}'} \cdot 4^{'{1/2}'} = 3 \cdot 2 = 6</Math></li>
        </ul>
      </Example>

      <PowerRulesDemo />

      {/* Simplification */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Simplifying Expressions</h2>

      <Example title="Simplifying with Exponents">
        <div className="space-y-4">
          <div>
            <p className="text-dark-200">Simplify <Math>(\sqrt{'{2}'})^3</Math>:</p>
            <p className="text-dark-300 mt-1">
              <Math>(\sqrt{'{2}'})^3 = (2^{'{1/2}'})^3 = 2^{'{3/2}'} = 2 \cdot 2^{'{1/2}'} = 2\sqrt{'{2}'}</Math>
            </p>
          </div>
          <div>
            <p className="text-dark-200">Simplify <Math>\sqrt{'{a^3}'}</Math>:</p>
            <p className="text-dark-300 mt-1">
              <Math>\sqrt{'{a^3}'} = a^{'{3/2}'} = a \cdot a^{'{1/2}'} = a\sqrt{'{a}'}</Math>
            </p>
          </div>
          <div>
            <p className="text-dark-200">Simplify <Math>\frac{'{a^{5/3}}'}{'{a^{2/3}}'}</Math>:</p>
            <p className="text-dark-300 mt-1">
              <Math>\frac{'{a^{5/3}}'}{'{a^{2/3}}'} = a^{'{5/3 - 2/3}'} = a^{'{3/3}'} = a</Math>
            </p>
          </div>
        </div>
      </Example>

      <Callout type="info" title="Irrational Exponents">
        <p>
          Defining numbers like <Math>2^{'{\\sqrt{2}}'}</Math> requires more advanced techniques
          (limits in calculus). For now, trust that such numbers exist and satisfy the power rules.
        </p>
      </Callout>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><Math>a^0 = 1</Math> for any <Math>a \neq 0</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><Math>a^{'{-n}'} = \frac{'{1}'}{'{a^n}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><Math>a^{'{1/n}'} = \sqrt[n]{'{a}'}</Math> (the n-th root)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><Math>a^{'{m/n}'} = (\sqrt[n]{'{a}'})^m = \sqrt[n]{'{a^m}'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={10} sectionTitle="Powers and Roots" questions={section10Questions} />
    </LessonLayout>
  );
}
