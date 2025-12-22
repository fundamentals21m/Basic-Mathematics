import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Axiom, Theorem } from '../../components/common/ContentBlocks';
import { Math } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section11Questions } from '../../data/quizzes';
import { InequalityNumberLine, InequalityRulesDemo, LinearInequalitySolver, IntervalNotationExplorer } from '../../components/visualizations';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Equations tell us when two things are <em>equal</em>. But often we need to know when
        one thing is <em>greater</em> or <em>less</em> than another. This is the domain of
        <strong> inequalities</strong>.
      </p>

      {/* Definitions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Defining Order</h2>

      <Definition title="Greater Than">
        <p>We write <Math>a {'>'} b</Math> (read "a is greater than b") when <Math>a - b {'>'} 0</Math>.</p>
        <p className="mt-2 text-dark-400">
          Geometrically: <Math>a</Math> lies to the <em>right</em> of <Math>b</Math> on the number line.
        </p>
      </Definition>

      <Definition title="Less Than" className="mt-6">
        <p>We write <Math>a {'<'} b</Math> (read "a is less than b") when <Math>b {'>'} a</Math>.</p>
        <p className="mt-2 text-dark-400">
          Geometrically: <Math>a</Math> lies to the <em>left</em> of <Math>b</Math> on the number line.
        </p>
      </Definition>

      <Definition title="Greater Than or Equal" className="mt-6">
        <p>We write <Math>a \geq b</Math> when <Math>a {'>'} b</Math> or <Math>a = b</Math>.</p>
        <p className="mt-2 text-dark-400">
          Similarly, <Math>a \leq b</Math> means <Math>a {'<'} b</Math> or <Math>a = b</Math>.
        </p>
      </Definition>

      <InequalityNumberLine />

      {/* Inequality Rules */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Rules for Inequalities</h2>

      <Axiom title="IN 1: Transitivity">
        <p>If <Math>a {'>'} b</Math> and <Math>b {'>'} c</Math>, then <Math>a {'>'} c</Math>.</p>
        <details className="mt-3">
          <summary className="cursor-pointer text-primary-400 hover:text-primary-300">Show proof</summary>
          <div className="mt-2 p-4 bg-dark-800/50 rounded-lg text-dark-300">
            <p><Math>a - b {'>'} 0</Math> and <Math>b - c {'>'} 0</Math></p>
            <p className="mt-2">By POS 1: <Math>(a - b) + (b - c) {'>'} 0</Math></p>
            <p className="mt-2">Simplifying: <Math>a - c {'>'} 0</Math>, so <Math>a {'>'} c</Math>.</p>
          </div>
        </details>
      </Axiom>

      <Axiom title="IN 2: Multiplication by Positive" className="mt-6">
        <p>If <Math>a {'>'} b</Math> and <Math>c {'>'} 0</Math>, then <Math>ac {'>'} bc</Math>.</p>
        <p className="mt-2 text-dark-400">
          Multiplying both sides by a <strong>positive</strong> number preserves the inequality.
        </p>
      </Axiom>

      <Axiom title="IN 3: Multiplication by Negative" className="mt-6">
        <p>If <Math>a {'>'} b</Math> and <Math>c {'<'} 0</Math>, then <Math>ac {'<'} bc</Math>.</p>
        <p className="mt-2 text-dark-400">
          Multiplying both sides by a <strong>negative</strong> number <em>reverses</em> the inequality.
        </p>
      </Axiom>

      <Callout type="warning" title="Critical Rule!">
        <p>
          When multiplying or dividing an inequality by a negative number,
          you <strong>must flip the inequality sign</strong>!
        </p>
        <p className="mt-2">
          Example: <Math>1 {'<'} 3</Math>, but <Math>-2 \cdot 1 = -2 {'>'} -6 = -2 \cdot 3</Math>
        </p>
      </Callout>

      <InequalityRulesDemo />

      {/* More Properties */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Additional Properties</h2>

      <Theorem title="Adding to Both Sides">
        <p>If <Math>a {'<'} b</Math>, then <Math>a + c {'<'} b + c</Math> for any <Math>c</Math>.</p>
        <p className="mt-2 text-dark-400">
          Adding the same number to both sides preserves the inequality.
        </p>
      </Theorem>

      <Theorem title="Inverses with Positive Numbers" className="mt-6">
        <p>If <Math>0 {'<'} a {'<'} b</Math>, then <Math>\frac{'{1}'}{'{b}'} {'<'} \frac{'{1}'}{'{a}'}</Math>.</p>
        <p className="mt-2 text-dark-400">
          Taking reciprocals of positive numbers reverses the inequality.
        </p>
      </Theorem>

      <Theorem title="Powers of Positive Numbers" className="mt-6">
        <p>If <Math>0 {'<'} a {'<'} b</Math>, then <Math>a^n {'<'} b^n</Math> for every positive integer <Math>n</Math>.</p>
      </Theorem>

      {/* Solving Inequalities */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Solving Linear Inequalities</h2>

      <Example title="Simple Linear Inequality">
        <p>Solve <Math>2x - 4 {'>'} 5</Math>:</p>
        <div className="mt-4 text-dark-300 space-y-2">
          <p>Add 4 to both sides: <Math>2x {'>'} 9</Math></p>
          <p>Divide by 2 (positive, no flip): <Math>x {'>'} \frac{'{9}'}{'{2}'}</Math></p>
          <p className="mt-3"><strong>Solution:</strong> All <Math>x {'>'} \frac{'{9}'}{'{2}'}</Math></p>
        </div>
      </Example>

      <Example title="Inequality with Negative Coefficient" className="mt-6">
        <p>Solve <Math>-3x + 2 \leq 8</Math>:</p>
        <div className="mt-4 text-dark-300 space-y-2">
          <p>Subtract 2: <Math>-3x \leq 6</Math></p>
          <p>Divide by -3 (<strong>flip the sign!</strong>): <Math>x \geq -2</Math></p>
          <p className="mt-3"><strong>Solution:</strong> All <Math>x \geq -2</Math></p>
        </div>
      </Example>

      <LinearInequalitySolver />

      {/* Rational Inequalities */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Rational Inequalities</h2>

      <Example title="Solving a Rational Inequality">
        <p>Solve <Math>\frac{'{3x + 5}'}{'{x - 4}'} {'<'} 2</Math>:</p>
        <div className="mt-4 text-dark-300">
          <p className="text-dark-200 font-semibold">Case 1: <Math>x {'>'} 4</Math> (so <Math>x - 4 {'>'} 0</Math>)</p>
          <div className="ml-4 mt-2 space-y-1">
            <p>Multiply by <Math>(x - 4)</Math>: <Math>3x + 5 {'<'} 2(x - 4)</Math></p>
            <p>Simplify: <Math>3x + 5 {'<'} 2x - 8</Math></p>
            <p><Math>x {'<'} -13</Math></p>
            <p className="text-red-400">But <Math>x {'>'} 4</Math> contradicts <Math>x {'<'} -13</Math>. No solution in this case.</p>
          </div>

          <p className="text-dark-200 font-semibold mt-4">Case 2: <Math>x {'<'} 4</Math> (so <Math>x - 4 {'<'} 0</Math>)</p>
          <div className="ml-4 mt-2 space-y-1">
            <p>Multiply by <Math>(x - 4)</Math> and <strong>flip</strong>: <Math>3x + 5 {'>'} 2(x - 4)</Math></p>
            <p>Simplify: <Math>3x + 5 {'>'} 2x - 8</Math></p>
            <p><Math>x {'>'} -13</Math></p>
            <p className="text-emerald-400">Combined with <Math>x {'<'} 4</Math>: <Math>-13 {'<'} x {'<'} 4</Math></p>
          </div>

          <p className="mt-4"><strong>Solution:</strong> <Math>-13 {'<'} x {'<'} 4</Math></p>
        </div>
      </Example>

      {/* Intervals */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Interval Notation</h2>

      <Definition title="Intervals">
        <p>An <strong>interval</strong> is a set of numbers satisfying an inequality:</p>
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-32 text-primary-400 font-mono">{"(a, b)"}</span>
            <span><Math>a {'<'} x {'<'} b</Math></span>
            <span className="text-dark-400">(open)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-32 text-primary-400 font-mono">{"[a, b]"}</span>
            <span><Math>a \leq x \leq b</Math></span>
            <span className="text-dark-400">(closed)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-32 text-primary-400 font-mono">{"[a, b)"}</span>
            <span><Math>a \leq x {'<'} b</Math></span>
            <span className="text-dark-400">(half-open)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-32 text-primary-400 font-mono">{"(a, ∞)"}</span>
            <span><Math>x {'>'} a</Math></span>
            <span className="text-dark-400">(infinite)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-32 text-primary-400 font-mono">{"(-∞, b]"}</span>
            <span><Math>x \leq b</Math></span>
            <span className="text-dark-400">(infinite)</span>
          </div>
        </div>
      </Definition>

      <Example title="Interval Examples" className="mt-6">
        <ul className="space-y-2 mt-2">
          <li><Math>x {'>'} 3</Math> is the interval <Math>(3, \infty)</Math></li>
          <li><Math>-2 \leq x {'<'} 5</Math> is the interval <Math>[-2, 5)</Math></li>
          <li><Math>x \leq 0</Math> is the interval <Math>(-\infty, 0]</Math></li>
        </ul>
      </Example>

      <IntervalNotationExplorer />

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><Math>a {'>'} b</Math> means <Math>a - b</Math> is positive.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Multiplying by a <strong>negative</strong> number <strong>reverses</strong> the inequality.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>For rational inequalities, consider cases based on the sign of the denominator.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Solutions are often written as <strong>intervals</strong>: <Math>(a, b)</Math>, <Math>[a, b]</Math>, etc.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={11} sectionTitle="Inequalities" questions={section11Questions} />
    </LessonLayout>
  );
}
