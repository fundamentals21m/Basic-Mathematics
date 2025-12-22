import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem, Axiom } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Just as every number has an <em>additive</em> inverse (its negative), every non-zero
        number has a <strong>multiplicative inverse</strong>. This is what makes division possible.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Multiplicative Inverse</h2>

      <Axiom title="Existence of Multiplicative Inverse">
        <p>
          If <Math>a</Math> is a rational number and <Math>a \neq 0</Math>, then there exists
          a unique rational number <Math>a^{'{-1}'}</Math> such that:
        </p>
        <MathBlock>a^{'{-1}'} \cdot a = a \cdot a^{'{-1}'} = 1</MathBlock>
      </Axiom>

      <Definition title="Reciprocal" className="mt-6">
        <p>
          The <strong>multiplicative inverse</strong> of <Math>a</Math> is also called the
          <strong> reciprocal</strong> of <Math>a</Math>. We write it as <Math>a^{'{-1}'}</Math> or <Math>\frac{'{1}'}{'{a}'}</Math>.
        </p>
        <p className="mt-3">
          If <Math>a = \frac{'{m}'}{'{n}'}</Math> where <Math>m, n \neq 0</Math>, then:
        </p>
        <MathBlock>a^{'{-1}'} = \frac{'{n}'}{'{m}'}</MathBlock>
      </Definition>

      <Example title="Finding Reciprocals">
        <ul className="space-y-2 mt-2">
          <li>The reciprocal of <Math>2</Math> is <Math>\frac{'{1}'}{'{2}'}</Math> because <Math>2 \cdot \frac{'{1}'}{'{2}'} = 1</Math></li>
          <li>The reciprocal of <Math>\frac{'{2}'}{'{3}'}</Math> is <Math>\frac{'{3}'}{'{2}'}</Math></li>
          <li>The reciprocal of <Math>-\frac{'{5}'}{'{7}'}</Math> is <Math>-\frac{'{7}'}{'{5}'}</Math></li>
          <li>The reciprocal of <Math>1</Math> is <Math>1</Math></li>
        </ul>
      </Example>

      <Callout type="warning" title="Zero Has No Reciprocal">
        <p>
          Zero has no multiplicative inverse because there is no number <Math>x</Math> such
          that <Math>0 \cdot x = 1</Math>. (Any number times zero is zero!)
        </p>
      </Callout>

      {/* Division */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Division as Multiplication</h2>

      <Definition title="Quotient Notation">
        <p>
          We write <Math>\frac{'{a}'}{'{b}'}</Math> or <Math>a/b</Math> to mean <Math>a \cdot b^{'{-1}'}</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          Division by <Math>b</Math> is the same as multiplication by <Math>b^{'{-1}'}</Math>.
        </p>
      </Definition>

      <Example title="Division Examples">
        <ul className="space-y-2 mt-2">
          <li><Math>\frac{'{6}'}{'{2}'} = 6 \cdot 2^{'{-1}'} = 6 \cdot \frac{'{1}'}{'{2}'} = 3</Math></li>
          <li><Math>\frac{'{3/4}'}{'{5/7}'} = \frac{'{3}'}{'{4}'} \cdot \frac{'{7}'}{'{5}'} = \frac{'{21}'}{'{20}'}</Math></li>
        </ul>
      </Example>

      {/* Theorems */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Important Theorems</h2>

      <Theorem title="Uniqueness of Inverse">
        <p>If <Math>a</Math> and <Math>b</Math> are rational numbers such that <Math>ab = 1</Math>, then <Math>b = a^{'{-1}'}</Math>.</p>
        <details className="mt-3">
          <summary className="cursor-pointer text-primary-400 hover:text-primary-300">Show proof</summary>
          <div className="mt-2 p-4 bg-dark-800/50 rounded-lg text-dark-300">
            <p>Given <Math>ab = 1</Math>, multiply both sides by <Math>a^{'{-1}'}</Math>:</p>
            <MathBlock>a^{'{-1}'}(ab) = a^{'{-1}'} \cdot 1</MathBlock>
            <p className="mt-2">By associativity: <Math>(a^{'{-1}'}a)b = a^{'{-1}'}</Math></p>
            <p className="mt-2">Since <Math>a^{'{-1}'}a = 1</Math>: <Math>1 \cdot b = a^{'{-1}'}</Math></p>
            <p className="mt-2">Therefore <Math>b = a^{'{-1}'}</Math>.</p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Zero Product Property" className="mt-6">
        <p>If <Math>ab = 0</Math>, then <Math>a = 0</Math> or <Math>b = 0</Math> (or both).</p>
        <details className="mt-3">
          <summary className="cursor-pointer text-primary-400 hover:text-primary-300">Show proof</summary>
          <div className="mt-2 p-4 bg-dark-800/50 rounded-lg text-dark-300">
            <p>Suppose <Math>a \neq 0</Math>. Then <Math>a^{'{-1}'}</Math> exists.</p>
            <p className="mt-2">Multiply both sides of <Math>ab = 0</Math> by <Math>a^{'{-1}'}</Math>:</p>
            <MathBlock>a^{'{-1}'}(ab) = a^{'{-1}'} \cdot 0 = 0</MathBlock>
            <p className="mt-2">By associativity: <Math>(a^{'{-1}'}a)b = 0</Math></p>
            <p className="mt-2">So <Math>1 \cdot b = 0</Math>, meaning <Math>b = 0</Math>.</p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Cancellation Law" className="mt-6">
        <p>If <Math>a \neq 0</Math> and <Math>ab = ac</Math>, then <Math>b = c</Math>.</p>
      </Theorem>

      {/* Cross-Multiplication for Quotients */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Cross-Multiplication for Quotients</h2>

      <Theorem title="Cross-Multiplication (General)">
        <p>For rational numbers <Math>a, b, c, d</Math> with <Math>b \neq 0</Math> and <Math>d \neq 0</Math>:</p>
        <MathBlock>\frac{'{a}'}{'{b}'} = \frac{'{c}'}{'{d}'} \iff ad = bc</MathBlock>
      </Theorem>

      <Theorem title="Cancellation in Quotients" className="mt-6">
        <p>If <Math>a \neq 0</Math> and <Math>c \neq 0</Math>:</p>
        <MathBlock>\frac{'{ab}'}{'{ac}'} = \frac{'{b}'}{'{c}'}</MathBlock>
      </Theorem>

      {/* Solving Equations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Solving Equations with Fractions</h2>

      <Example title="Solving by Cross-Multiplication">
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-dark-200">Solve <Math>\frac{'{3}'}{'{x-1}'} = 2</Math>:</p>
            <div className="text-dark-300 mt-2 space-y-1">
              <p>Cross-multiply: <Math>3 = 2(x-1)</Math></p>
              <p><Math>3 = 2x - 2</Math></p>
              <p><Math>5 = 2x</Math></p>
              <p><Math>x = \frac{'{5}'}{'{2}'}</Math></p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-dark-200">Solve <Math>\frac{'{3x+1}'}{'{2x-5}'} = 4</Math>:</p>
            <div className="text-dark-300 mt-2 space-y-1">
              <p>Cross-multiply: <Math>3x + 1 = 4(2x - 5)</Math></p>
              <p><Math>3x + 1 = 8x - 20</Math></p>
              <p><Math>21 = 5x</Math></p>
              <p><Math>x = \frac{'{21}'}{'{5}'}</Math></p>
            </div>
          </div>
        </div>
      </Example>

      {/* Complex Fractions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Complex Fractions</h2>

      <Example title="Simplifying Complex Fractions">
        <p>Simplify <Math>\frac{'{1 + \\frac{1}{2}}'}{'{2 - \\frac{4}{3}}'}</Math>:</p>
        <div className="text-dark-300 mt-3 space-y-2">
          <p>Numerator: <Math>1 + \frac{'{1}'}{'{2}'} = \frac{'{3}'}{'{2}'}</Math></p>
          <p>Denominator: <Math>2 - \frac{'{4}'}{'{3}'} = \frac{'{6-4}'}{'{3}'} = \frac{'{2}'}{'{3}'}</Math></p>
          <p>Result: <Math>\frac{'{3/2}'}{'{2/3}'} = \frac{'{3}'}{'{2}'} \cdot \frac{'{3}'}{'{2}'} = \frac{'{9}'}{'{4}'}</Math></p>
        </div>
      </Example>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Applications</h2>

      <Example title="Speed-Distance-Time">
        <p>If you travel 5 miles in <Math>\frac{'{1}'}{'{2}'}</Math> hour, what's your speed?</p>
        <div className="text-dark-300 mt-3">
          <p>Speed = Distance ÷ Time</p>
          <MathBlock>\text{'{Speed}'} = \frac{'{5}'}{'{1/2}'} = 5 \cdot 2 = 10 \text{'{ mph}'}</MathBlock>
        </div>
      </Example>

      <Example title="Work Problem" className="mt-6">
        <p>If Alice can paint a room in 3 hours and Bob in 6 hours, how long together?</p>
        <div className="text-dark-300 mt-3">
          <p>Alice's rate: <Math>\frac{'{1}'}{'{3}'}</Math> room/hour</p>
          <p>Bob's rate: <Math>\frac{'{1}'}{'{6}'}</Math> room/hour</p>
          <p>Combined rate: <Math>\frac{'{1}'}{'{3}'} + \frac{'{1}'}{'{6}'} = \frac{'{2+1}'}{'{6}'} = \frac{'{1}'}{'{2}'}</Math> room/hour</p>
          <p className="mt-2">Time = <Math>\frac{'{1 \\text{ room}}'}{'{1/2 \\text{ room/hr}}'} = 2</Math> hours</p>
        </div>
      </Example>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>Every non-zero number has a <strong>multiplicative inverse</strong>: <Math>a \cdot a^{'{-1}'} = 1</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>The reciprocal of <Math>\frac{'{m}'}{'{n}'}</Math> is <Math>\frac{'{n}'}{'{m}'}</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Zero Product Property:</strong> If <Math>ab = 0</Math>, then <Math>a = 0</Math> or <Math>b = 0</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Division by <Math>b</Math> equals multiplication by <Math>b^{'{-1}'}</Math>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
