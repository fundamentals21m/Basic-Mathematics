import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Axiom, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section09Questions } from '../../data/quizzes';
import { PositivityExplorer, SquareRootCalculator, AbsoluteValueVisualizer, RationalizingDemo } from '../../components/visualizations';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Numbers can be positive, negative, or zero. Understanding <strong>positivity</strong>
        leads to important concepts like <strong>square roots</strong> and <strong>absolute value</strong>.
      </p>

      {/* Positivity Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Positive and Negative Numbers</h2>

      <Definition title="Positive Numbers">
        <p>
          A number is <strong>positive</strong> if it lies to the <em>right</em> of 0 on the
          number line. We write <Math>a {'>'} 0</Math>.
        </p>
      </Definition>

      <Definition title="Negative Numbers" className="mt-6">
        <p>
          A number is <strong>negative</strong> if it lies to the <em>left</em> of 0.
          Equivalently, <Math>a</Math> is negative if <Math>-a</Math> is positive.
        </p>
      </Definition>

      {/* Axioms */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Positivity Axioms</h2>

      <Axiom title="POS 1: Closure">
        <p>If <Math>a</Math> and <Math>b</Math> are positive, then:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The sum <Math>a + b</Math> is positive</li>
          <li>The product <Math>ab</Math> is positive</li>
        </ul>
      </Axiom>

      <Axiom title="POS 2: Trichotomy" className="mt-6">
        <p>For every real number <Math>a</Math>, exactly one of the following is true:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>a</Math> is positive (<Math>a {'>'} 0</Math>)</li>
          <li><Math>a = 0</Math></li>
          <li><Math>-a</Math> is positive (<Math>a {'<'} 0</Math>)</li>
        </ul>
      </Axiom>

      {/* Derived Properties */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Derived Properties</h2>

      <Theorem
        title="1 is Positive"
        proof={
          <>
            <p>By POS 2 (trichotomy), exactly one of these holds: <Math>1 {'>'} 0</Math>, or <Math>1 = 0</Math>, or <Math>-1 {'>'} 0</Math>.</p>
            <p className="mt-2">Since <Math>1 \neq 0</Math>, either 1 or -1 is positive.</p>
            <p className="mt-2">Suppose <Math>-1 {'>'} 0</Math>. Then by POS 1 (closure under multiplication):</p>
            <MathBlock>(-1) \cdot (-1) {'>'} 0</MathBlock>
            <p className="mt-2">But <Math>(-1)(-1) = 1</Math>, so <Math>1 {'>'} 0</Math>.</p>
            <p className="mt-2">Either way, we conclude <Math>1 {'>'} 0</Math>.</p>
          </>
        }
      >
        <p>The number 1 is positive.</p>
      </Theorem>

      <Theorem
        title="Sign Rules for Products"
        className="mt-6"
        proof={
          <>
            <p><strong>Positive × Positive:</strong> Follows directly from POS 1.</p>
            <p className="mt-2"><strong>Positive × Negative:</strong> Let <Math>a {'>'} 0</Math> and <Math>b {'<'} 0</Math>.</p>
            <p>Then <Math>-b {'>'} 0</Math>, so <Math>a(-b) {'>'} 0</Math> by POS 1.</p>
            <p>Since <Math>a(-b) = -(ab)</Math>, we have <Math>-(ab) {'>'} 0</Math>, meaning <Math>ab {'<'} 0</Math>.</p>
            <p className="mt-2"><strong>Negative × Negative:</strong> Let <Math>a {'<'} 0</Math> and <Math>b {'<'} 0</Math>.</p>
            <p>Then <Math>-a {'>'} 0</Math> and <Math>-b {'>'} 0</Math>.</p>
            <p>By POS 1: <Math>(-a)(-b) {'>'} 0</Math>.</p>
            <p>Since <Math>(-a)(-b) = ab</Math>, we have <Math>ab {'>'} 0</Math>.</p>
          </>
        }
      >
        <ul className="space-y-2">
          <li><strong>Positive × Positive = Positive</strong></li>
          <li><strong>Positive × Negative = Negative</strong></li>
          <li><strong>Negative × Negative = Positive</strong></li>
        </ul>
      </Theorem>

      <Theorem
        title="Squares are Non-Negative"
        className="mt-6"
        proof={
          <>
            <p>Let <Math>a</Math> be any real number. By trichotomy, either <Math>a {'>'} 0</Math>, <Math>a = 0</Math>, or <Math>a {'<'} 0</Math>.</p>
            <p className="mt-2"><strong>Case 1:</strong> If <Math>a {'>'} 0</Math>, then <Math>a^2 = a \cdot a {'>'} 0</Math> by POS 1.</p>
            <p className="mt-2"><strong>Case 2:</strong> If <Math>a = 0</Math>, then <Math>a^2 = 0</Math>.</p>
            <p className="mt-2"><strong>Case 3:</strong> If <Math>a {'<'} 0</Math>, then <Math>a^2 = a \cdot a {'>'} 0</Math> (negative × negative = positive).</p>
            <p className="mt-2">In all cases, <Math>a^2 \geq 0</Math>.</p>
          </>
        }
      >
        <p>For any real number <Math>a</Math>:</p>
        <MathBlock>a^2 \geq 0</MathBlock>
        <p className="mt-2 text-dark-400">
          A square is always positive or zero. It's zero only when <Math>a = 0</Math>.
        </p>
      </Theorem>

      <PositivityExplorer />

      {/* Square Roots */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Square Roots</h2>

      <Theorem
        title="Existence of Square Roots"
        proof={
          <>
            <p>This is a consequence of the <strong>completeness</strong> of the real numbers.</p>
            <p className="mt-2">Consider the set <Math>S = \{'{x \\in \\mathbb{R} : x > 0 \\text{ and } x^2 < a}'}\</Math>.</p>
            <p className="mt-2">This set is non-empty (e.g., small positive numbers are in it) and bounded above.</p>
            <p className="mt-2">By completeness, <Math>S</Math> has a supremum <Math>b = \sup S</Math>.</p>
            <p className="mt-2">One can show <Math>b^2 = a</Math> by ruling out <Math>b^2 {'<'} a</Math> and <Math>b^2 {'>'} a</Math>.</p>
          </>
        }
      >
        <p>
          Every <strong>positive</strong> real number has a square root.
        </p>
        <p className="mt-2">
          If <Math>a {'>'} 0</Math>, then there exists <Math>b {'>'} 0</Math> such that <Math>b^2 = a</Math>.
        </p>
      </Theorem>

      <Definition title="The Square Root Symbol" className="mt-6">
        <p>
          For <Math>a {'>'} 0</Math>, we write <Math>\sqrt{'{a}'}</Math> for the <strong>unique positive</strong>
          number whose square is <Math>a</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          Note: <Math>\sqrt{'{a}'}</Math> is always positive by convention!
        </p>
      </Definition>

      <Theorem
        title="Solutions of x² = a"
        className="mt-6"
        proof={
          <>
            <p>Let <Math>a {'>'} 0</Math> and suppose <Math>x^2 = a</Math>.</p>
            <p className="mt-2">By definition, <Math>\sqrt{'{a}'}</Math> is the positive number with <Math>(\sqrt{'{a}'})^2 = a</Math>.</p>
            <p className="mt-2">Also, <Math>(-\sqrt{'{a}'})^2 = \sqrt{'{a}'} \cdot \sqrt{'{a}'} = a</Math>.</p>
            <p className="mt-2">So both <Math>\sqrt{'{a}'}</Math> and <Math>-\sqrt{'{a}'}</Math> are solutions.</p>
            <p className="mt-2">To show these are the <em>only</em> solutions: if <Math>x^2 = a</Math>, then</p>
            <MathBlock>x^2 - a = 0 \Rightarrow x^2 - (\sqrt{'{a}'})^2 = 0 \Rightarrow (x - \sqrt{'{a}'})(x + \sqrt{'{a}'}) = 0</MathBlock>
            <p className="mt-2">By the zero product property, <Math>x = \sqrt{'{a}'}</Math> or <Math>x = -\sqrt{'{a}'}</Math>.</p>
          </>
        }
      >
        <p>For <Math>a {'>'} 0</Math>, the solutions of <Math>x^2 = a</Math> are:</p>
        <MathBlock>x = \sqrt{'{a}'} \quad \text{'{or}'} \quad x = -\sqrt{'{a}'}</MathBlock>
        <p className="mt-2 text-dark-400">
          We often write this as <Math>x = \pm\sqrt{'{a}'}</Math>.
        </p>
      </Theorem>

      <Example title="Square Root Examples">
        <ul className="space-y-2 mt-2">
          <li><Math>\sqrt{'{4}'} = 2</Math> (not <Math>\pm 2</Math>!)</li>
          <li><Math>\sqrt{'{9}'} = 3</Math></li>
          <li><Math>\sqrt{'{2}'} \approx 1.414...</Math></li>
          <li>Solutions of <Math>x^2 = 16</Math>: <Math>x = \pm 4</Math></li>
        </ul>
      </Example>

      <SquareRootCalculator />

      {/* Absolute Value */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Absolute Value</h2>

      <Definition title="Absolute Value">
        <p>The <strong>absolute value</strong> of <Math>x</Math> is defined as:</p>
        <MathBlock>|x| = \sqrt{'{x^2}'}</MathBlock>
        <p className="mt-3 text-dark-400">
          Equivalently: <Math>|x| = x</Math> if <Math>x \geq 0</Math>, and <Math>|x| = -x</Math> if <Math>x {'<'} 0</Math>.
        </p>
      </Definition>

      <Example title="Absolute Value Examples">
        <ul className="space-y-2 mt-2">
          <li><Math>|5| = 5</Math></li>
          <li><Math>|-3| = \sqrt{'{9}'} = 3</Math></li>
          <li><Math>|0| = 0</Math></li>
          <li><Math>|-\pi| = \pi</Math></li>
        </ul>
      </Example>

      <Callout type="info" title="Geometric Meaning">
        <p>
          <Math>|x|</Math> represents the <strong>distance</strong> from <Math>x</Math> to 0
          on the number line. Distance is always non-negative!
        </p>
      </Callout>

      <AbsoluteValueVisualizer />

      {/* Solving Absolute Value Equations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Solving Absolute Value Equations</h2>

      <Example title="Solving |x + 5| = 2">
        <p>Find all <Math>x</Math> such that <Math>|x + 5| = 2</Math>.</p>
        <div className="mt-4 text-dark-300">
          <p>The expression inside can be 2 or -2:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li><Math>x + 5 = 2 \Rightarrow x = -3</Math></li>
            <li><Math>x + 5 = -2 \Rightarrow x = -7</Math></li>
          </ul>
          <p className="mt-3"><strong>Solutions:</strong> <Math>x = -3</Math> or <Math>x = -7</Math></p>
        </div>
      </Example>

      {/* Rationalizing */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Rationalizing</h2>

      <p className="text-dark-300 mb-6">
        Sometimes we want to eliminate square roots from denominators or numerators.
      </p>

      <Example title="Rationalizing the Denominator">
        <p>Simplify <Math>\frac{'{3}'}{'{2 + \\sqrt{5}}'}</Math>:</p>
        <div className="mt-4 text-dark-300 space-y-2">
          <p>Multiply by the conjugate:</p>
          <MathBlock>\frac{'{3}'}{'{2 + \\sqrt{5}}'} \cdot \frac{'{2 - \\sqrt{5}}'}{'{2 - \\sqrt{5}}'} = \frac{'{3(2 - \\sqrt{5})}'}{'{4 - 5}'} = \frac{'{6 - 3\\sqrt{5}}'}{'{-1}'}</MathBlock>
          <p><strong>Result:</strong> <Math>-6 + 3\sqrt{'{5}'}</Math></p>
        </div>
      </Example>

      <Example title="Rationalizing the Numerator" className="mt-6">
        <p>Simplify <Math>\frac{'{{\\sqrt{x+h}} - \\sqrt{x}}'}{'{h}'}</Math>:</p>
        <div className="mt-4 text-dark-300 space-y-2">
          <p>Multiply by the conjugate:</p>
          <MathBlock>\frac{'{{\\sqrt{x+h}} - \\sqrt{x}}'}{'{h}'} \cdot \frac{'{{\\sqrt{x+h}} + \\sqrt{x}}'}{'{\\sqrt{x+h} + \\sqrt{x}}'} = \frac{'{(x+h) - x}'}{'{h(\\sqrt{x+h} + \\sqrt{x})}'}</MathBlock>
          <p><strong>Result:</strong> <Math>\frac{'{1}'}{'{{\\sqrt{x+h}} + \\sqrt{x}}'}</Math></p>
          <p className="text-dark-400 text-sm mt-2">(This form is useful in calculus!)</p>
        </div>
      </Example>

      <RationalizingDemo />

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>Every real number is positive, negative, or zero (trichotomy).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Every positive number has a unique positive square root: <Math>\sqrt{'{a}'}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Absolute value:</strong> <Math>|x| = \sqrt{'{x^2}'}</Math> gives distance from zero.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Use <strong>conjugates</strong> to rationalize expressions with square roots.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={9} sectionTitle="Positivity" questions={section09Questions} />
    </LessonLayout>
  );
}
