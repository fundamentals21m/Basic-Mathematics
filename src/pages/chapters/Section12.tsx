import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        We know how to solve linear equations like <Math>3x - 2 = 0</Math>. Now we tackle
        <strong> quadratic equations</strong>, where <Math>x</Math> appears to the second power.
        The key technique is <strong>completing the square</strong>.
      </p>

      {/* Quadratic Equations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Quadratic Equations</h2>

      <Definition title="Quadratic Equation">
        <p>A <strong>quadratic equation</strong> has the form:</p>
        <MathBlock>ax^2 + bx + c = 0</MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>a \neq 0</Math> and <Math>a, b, c</Math> are real numbers.
        </p>
      </Definition>

      {/* Key Identity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Key Identity</h2>

      <div className="p-6 rounded-xl bg-primary-500/10 border border-primary-500/30">
        <p className="text-lg text-dark-100 font-semibold mb-4">The Perfect Square Pattern</p>
        <MathBlock>(x - s)^2 = x^2 - 2sx + s^2</MathBlock>
        <p className="text-dark-300 mt-4">
          This identity tells us: if we have <Math>x^2 - 2sx</Math>, we can add <Math>s^2</Math>
          to make it a perfect square.
        </p>
      </div>

      {/* Completing the Square */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Completing the Square</h2>

      <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700/50">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">The Method</h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>Move the constant term to the right: <Math>ax^2 + bx = -c</Math></li>
          <li>Divide by <Math>a</Math>: <Math>x^2 + \frac{'{b}'}{'{a}'}x = -\frac{'{c}'}{'{a}'}</Math></li>
          <li>Find <Math>s = \frac{'{b}'}{'{2a}'}</Math> (half the coefficient of <Math>x</Math>)</li>
          <li>Add <Math>s^2 = \frac{'{b^2}'}{'{4a^2}'}</Math> to both sides</li>
          <li>Left side becomes <Math>\left(x + \frac{'{b}'}{'{2a}'}\right)^2</Math></li>
          <li>Take square roots (if the right side is ≥ 0)</li>
          <li>Solve for <Math>x</Math></li>
        </ol>
      </div>

      {/* Example 1 */}
      <Example title="Example 1: Two Solutions" className="mt-8">
        <p>Solve <Math>x^2 - 3x + 1 = 0</Math>:</p>
        <div className="mt-4 text-dark-300 space-y-3">
          <p><strong>Step 1:</strong> Rewrite as <Math>x^2 - 3x = -1</Math></p>
          <p><strong>Step 2:</strong> Coefficient of <Math>x</Math> is <Math>-3</Math>, so <Math>s = \frac{'{3}'}{'{2}'}</Math></p>
          <p><strong>Step 3:</strong> Add <Math>s^2 = \frac{'{9}'}{'{4}'}</Math> to both sides:</p>
          <MathBlock>x^2 - 3x + \frac{'{9}'}{'{4}'} = -1 + \frac{'{9}'}{'{4}'} = \frac{'{5}'}{'{4}'}</MathBlock>
          <p><strong>Step 4:</strong> Left side is a perfect square:</p>
          <MathBlock>\left(x - \frac{'{3}'}{'{2}'}\right)^2 = \frac{'{5}'}{'{4}'}</MathBlock>
          <p><strong>Step 5:</strong> Take square roots:</p>
          <MathBlock>x - \frac{'{3}'}{'{2}'} = \pm\frac{'{{\\sqrt{5}}}'}{'{2}'}</MathBlock>
          <p><strong>Solution:</strong></p>
          <MathBlock>x = \frac{'{3 \\pm \\sqrt{5}}'}{'{2}'}</MathBlock>
        </div>
      </Example>

      {/* Example 2 - No Solution */}
      <Example title="Example 2: No Real Solution" className="mt-8">
        <p>Solve <Math>x^2 + 2x + 2 = 0</Math>:</p>
        <div className="mt-4 text-dark-300 space-y-3">
          <p>Rewrite: <Math>x^2 + 2x = -2</Math></p>
          <p>Add 1 to both sides: <Math>x^2 + 2x + 1 = -2 + 1 = -1</Math></p>
          <MathBlock>(x + 1)^2 = -1</MathBlock>
          <p className="text-red-400 font-semibold mt-3">
            A square cannot be negative! No real solution exists.
          </p>
        </div>
      </Example>

      {/* Example 3 */}
      <Example title="Example 3: With Leading Coefficient" className="mt-8">
        <p>Solve <Math>2x^2 - 3x - 5 = 0</Math>:</p>
        <div className="mt-4 text-dark-300 space-y-3">
          <p>Rewrite: <Math>2x^2 - 3x = 5</Math></p>
          <p>Divide by 2: <Math>x^2 - \frac{'{3}'}{'{2}'}x = \frac{'{5}'}{'{2}'}</Math></p>
          <p>Half of <Math>-\frac{'{3}'}{'{2}'}</Math> is <Math>-\frac{'{3}'}{'{4}'}</Math>, square is <Math>\frac{'{9}'}{'{16}'}</Math></p>
          <MathBlock>x^2 - \frac{'{3}'}{'{2}'}x + \frac{'{9}'}{'{16}'} = \frac{'{5}'}{'{2}'} + \frac{'{9}'}{'{16}'} = \frac{'{40 + 9}'}{'{16}'} = \frac{'{49}'}{'{16}'}</MathBlock>
          <MathBlock>\left(x - \frac{'{3}'}{'{4}'}\right)^2 = \frac{'{49}'}{'{16}'}</MathBlock>
          <MathBlock>x - \frac{'{3}'}{'{4}'} = \pm\frac{'{7}'}{'{4}'}</MathBlock>
          <p><strong>Solutions:</strong> <Math>x = \frac{'{3+7}'}{'{4}'} = \frac{'{5}'}{'{2}'}</Math> and <Math>x = \frac{'{3-7}'}{'{4}'} = -1</Math></p>
        </div>
      </Example>

      {/* The Quadratic Formula */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Quadratic Formula</h2>

      <Theorem title="The Quadratic Formula">
        <p>
          The solutions of <Math>ax^2 + bx + c = 0</Math> (with <Math>a \neq 0</Math>) are:
        </p>
        <MathBlock>x = \frac{'{-b \\pm \\sqrt{b^2 - 4ac}}'}{'{2a}'}</MathBlock>
        <p className="mt-3 text-dark-400">
          provided that <Math>b^2 - 4ac \geq 0</Math>.
        </p>
      </Theorem>

      <Callout type="info" title="The Discriminant">
        <p>
          The expression <Math>b^2 - 4ac</Math> under the square root is called the <strong>discriminant</strong>.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li><Math>b^2 - 4ac {'>'} 0</Math>: Two distinct real solutions</li>
          <li><Math>b^2 - 4ac = 0</Math>: One real solution (repeated root): <Math>x = -\frac{'{b}'}{'{2a}'}</Math></li>
          <li><Math>b^2 - 4ac {'<'} 0</Math>: No real solutions</li>
        </ul>
      </Callout>

      {/* Deriving the Formula */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Deriving the Formula</h2>

      <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700/50">
        <p className="text-dark-200 font-semibold mb-4">Proof by Completing the Square</p>
        <div className="text-dark-300 space-y-3">
          <p>Start with <Math>ax^2 + bx + c = 0</Math></p>
          <p>Rewrite: <Math>ax^2 + bx = -c</Math></p>
          <p>Divide by <Math>a</Math>: <Math>x^2 + \frac{'{b}'}{'{a}'}x = -\frac{'{c}'}{'{a}'}</Math></p>
          <p>Complete the square (add <Math>\frac{'{b^2}'}{'{4a^2}'}</Math>):</p>
          <MathBlock>x^2 + \frac{'{b}'}{'{a}'}x + \frac{'{b^2}'}{'{4a^2}'} = -\frac{'{c}'}{'{a}'} + \frac{'{b^2}'}{'{4a^2}'}</MathBlock>
          <MathBlock>\left(x + \frac{'{b}'}{'{2a}'}\right)^2 = \frac{'{b^2 - 4ac}'}{'{4a^2}'}</MathBlock>
          <p>Take square roots (if <Math>b^2 - 4ac \geq 0</Math>):</p>
          <MathBlock>x + \frac{'{b}'}{'{2a}'} = \pm\frac{'{{\\sqrt{b^2 - 4ac}}}'}{'{2a}'}</MathBlock>
          <MathBlock>x = \frac{'{-b \\pm \\sqrt{b^2 - 4ac}}'}{'{2a}'}</MathBlock>
        </div>
      </div>

      {/* Using the Formula */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Using the Formula</h2>

      <Example title="Example: Using the Quadratic Formula">
        <p>Solve <Math>2x^2 + 3x - 4 = 0</Math>:</p>
        <div className="mt-4 text-dark-300 space-y-3">
          <p>Here <Math>a = 2</Math>, <Math>b = 3</Math>, <Math>c = -4</Math></p>
          <p>Discriminant: <Math>b^2 - 4ac = 9 - 4(2)(-4) = 9 + 32 = 41</Math></p>
          <MathBlock>x = \frac{'{-3 \\pm \\sqrt{41}}'}{'{4}'}</MathBlock>
          <p><strong>Solutions:</strong> <Math>x = \frac{'{-3 + \\sqrt{41}}'}{'{4}'}</Math> and <Math>x = \frac{'{-3 - \\sqrt{41}}'}{'{4}'}</Math></p>
        </div>
      </Example>

      <Example title="Example: No Real Solutions" className="mt-6">
        <p>Solve <Math>3x^2 - 2x + 1 = 0</Math>:</p>
        <div className="mt-4 text-dark-300 space-y-3">
          <p>Discriminant: <Math>b^2 - 4ac = 4 - 4(3)(1) = 4 - 12 = -8</Math></p>
          <p className="text-red-400 font-semibold">
            Since <Math>-8 {'<'} 0</Math>, there is no real solution.
          </p>
        </div>
      </Example>

      {/* Factoring Connection */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Connection to Factoring</h2>

      <Callout type="info" title="Roots and Factors">
        <p>
          If <Math>r</Math> is a solution of <Math>ax^2 + bx + c = 0</Math>, then <Math>(x - r)</Math> is a factor.
        </p>
        <p className="mt-2">
          If the solutions are <Math>r_1</Math> and <Math>r_2</Math>, then:
        </p>
        <MathBlock>ax^2 + bx + c = a(x - r_1)(x - r_2)</MathBlock>
      </Callout>

      <Example title="Factoring Using Roots">
        <p>Factor <Math>x^2 - 5x + 6</Math>:</p>
        <div className="mt-4 text-dark-300 space-y-2">
          <p>Using the formula: <Math>x = \frac{'{5 \\pm \\sqrt{25-24}}'}{'{2}'} = \frac{'{5 \\pm 1}'}{'{2}'}</Math></p>
          <p>Solutions: <Math>x = 3</Math> and <Math>x = 2</Math></p>
          <p>Therefore: <Math>x^2 - 5x + 6 = (x - 3)(x - 2)</Math></p>
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
            <span><strong>Completing the square</strong> transforms <Math>x^2 + bx</Math> into a perfect square.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>The <strong>quadratic formula</strong>: <Math>x = \frac{'{-b \\pm \\sqrt{b^2 - 4ac}}'}{'{2a}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>The <strong>discriminant</strong> <Math>b^2 - 4ac</Math> determines the number of real solutions.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>No real solutions when the discriminant is negative (requires complex numbers).</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
