import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section06Questions } from '../../data/quizzes';
import { SystemSolver, DeterminantCalculator, LineIntersectionVisualizer, SpecialCasesExplorer } from '../../components/visualizations';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Sometimes we need to find values for <em>two</em> variables at once. This requires
        solving a <strong>system of equations</strong>. The key technique is <strong>elimination</strong>.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Systems of Two Equations</h2>

      <Definition title="System of Linear Equations">
        <p>
          A <strong>system of two linear equations in two unknowns</strong> looks like:
        </p>
        <MathBlock>
          {`\\begin{cases}
ax + by = e \\\\
cx + dy = f
\\end{cases}`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>a, b, c, d, e, f</Math> are known numbers and <Math>x, y</Math> are unknowns.
        </p>
      </Definition>

      {/* Elimination Method */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Elimination Method</h2>

      <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700/50">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Steps for Elimination</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Multiply equations by suitable numbers so that the coefficients of one variable become equal (in absolute value).</li>
          <li>Add or subtract the equations to eliminate that variable.</li>
          <li>Solve the resulting single-variable equation.</li>
          <li>Substitute back to find the other variable.</li>
        </ol>
      </div>

      <Example title="Solving a System" className="mt-8">
        <p>Solve the system:</p>
        <MathBlock>
          {`\\begin{cases}
2x + y = 1 \\\\
3x - 2y = 4
\\end{cases}`}
        </MathBlock>

        <div className="mt-6 space-y-4">
          <div className="p-4 rounded-lg bg-dark-800/40">
            <p className="font-semibold text-primary-400">Method 1: Eliminate x</p>
            <div className="text-dark-300 mt-2 space-y-2">
              <p>Multiply equation 1 by 3: <Math>6x + 3y = 3</Math></p>
              <p>Multiply equation 2 by 2: <Math>6x - 4y = 8</Math></p>
              <p>Subtract: <Math>(6x + 3y) - (6x - 4y) = 3 - 8</Math></p>
              <p><Math>7y = -5</Math>, so <Math>y = -\frac{'{5}'}{'{7}'}</Math></p>
              <p className="mt-2">Substitute into equation 1: <Math>2x + (-\frac{'{5}'}{'{7}'}) = 1</Math></p>
              <p><Math>2x = 1 + \frac{'{5}'}{'{7}'} = \frac{'{12}'}{'{7}'}</Math>, so <Math>x = \frac{'{6}'}{'{7}'}</Math></p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-dark-800/40">
            <p className="font-semibold text-cyan-400">Method 2: Eliminate y</p>
            <div className="text-dark-300 mt-2 space-y-2">
              <p>Multiply equation 1 by 2: <Math>4x + 2y = 2</Math></p>
              <p>Add equation 2: <Math>4x + 2y + 3x - 2y = 2 + 4</Math></p>
              <p><Math>7x = 6</Math>, so <Math>x = \frac{'{6}'}{'{7}'}</Math></p>
              <p className="mt-2">Substitute: <Math>y = 1 - 2x = 1 - \frac{'{12}'}{'{7}'} = -\frac{'{5}'}{'{7}'}</Math></p>
            </div>
          </div>
        </div>

        <p className="mt-4 font-semibold text-dark-100">
          Solution: <Math>x = \frac{'{6}'}{'{7}'}</Math>, <Math>y = -\frac{'{5}'}{'{7}'}</Math>
        </p>
      </Example>

      <SystemSolver />

      {/* Special Cases */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Cases</h2>

      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
          <h4 className="text-lg font-semibold text-red-400 mb-3">No Solution</h4>
          <p className="text-dark-300">
            A system may have <strong>no solution</strong> when the equations are contradictory.
          </p>
          <Example title="Contradictory System" className="mt-4">
            <MathBlock>
              {`\\begin{cases}
2x - y = 5 \\\\
2x - y = 7
\\end{cases}`}
            </MathBlock>
            <p className="text-dark-400 mt-2">
              The same left side can't equal both 5 and 7!
            </p>
          </Example>
        </div>

        <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
          <h4 className="text-lg font-semibold text-yellow-400 mb-3">Infinite Solutions</h4>
          <p className="text-dark-300">
            A system may have <strong>infinitely many solutions</strong> when one equation is
            a multiple of the other.
          </p>
          <Example title="Dependent System" className="mt-4">
            <MathBlock>
              {`\\begin{cases}
x + 2y = 3 \\\\
2x + 4y = 6
\\end{cases}`}
            </MathBlock>
            <p className="text-dark-400 mt-2">
              The second equation is just 2× the first. Any <Math>(x, y)</Math> satisfying <Math>x + 2y = 3</Math> works.
            </p>
          </Example>
        </div>
      </div>

      <SpecialCasesExplorer />

      <Theorem title="When Does a Unique Solution Exist?" className="mt-8">
        <p>For the system:</p>
        <MathBlock>
          {`\\begin{cases}
ax + by = e \\\\
cx + dy = f
\\end{cases}`}
        </MathBlock>
        <p className="mt-3">
          A unique solution exists if and only if <Math>ad - bc \neq 0</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          The quantity <Math>ad - bc</Math> is called the <strong>determinant</strong> of the system.
        </p>
      </Theorem>

      <DeterminantCalculator />

      {/* Application */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Application: Word Problem</h2>

      <Example title="Travel Time Problem">
        <p className="text-dark-300">
          A person drives for 8 hours, covering 400 miles total.
          On freeways, they average 60 mph. Through towns, they average 30 mph.
          How long did they spend driving through towns?
        </p>

        <div className="mt-4 p-4 rounded-lg bg-dark-800/40">
          <p className="font-semibold text-dark-200">Setup:</p>
          <p className="text-dark-300 mt-2">
            Let <Math>x</Math> = time on freeways, <Math>y</Math> = time through towns.
          </p>
          <MathBlock className="mt-3">
            {`\\begin{cases}
x + y = 8 & \\text{(total time)} \\\\
60x + 30y = 400 & \\text{(total distance)}
\\end{cases}`}
          </MathBlock>
        </div>

        <div className="mt-4 p-4 rounded-lg bg-dark-800/40">
          <p className="font-semibold text-dark-200">Solution:</p>
          <div className="text-dark-300 mt-2 space-y-2">
            <p>Multiply equation 1 by 60: <Math>60x + 60y = 480</Math></p>
            <p>Subtract equation 2: <Math>60y - 30y = 480 - 400</Math></p>
            <p><Math>30y = 80</Math></p>
            <p><Math>y = \frac{'{80}'}{'{30}'} = \frac{'{8}'}{'{3}'}</Math> hours through towns</p>
          </div>
        </div>

        <p className="mt-4 text-dark-100">
          <strong>Answer:</strong> <Math>\frac{'{8}'}{'{3}'}</Math> hours (2 hours 40 minutes) through towns.
        </p>
      </Example>

      {/* Geometric Interpretation */}
      <Callout type="info" title="Geometric Interpretation">
        <p>
          Each linear equation represents a <strong>straight line</strong> in the plane.
          The solution is the <strong>point of intersection</strong>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>One solution:</strong> Lines intersect at one point</li>
          <li><strong>No solution:</strong> Lines are parallel (never meet)</li>
          <li><strong>Infinite solutions:</strong> Lines are identical (same line)</li>
        </ul>
      </Callout>

      <LineIntersectionVisualizer />

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>The <strong>elimination method</strong> removes one variable to create a single-variable equation.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Multiply equations to match coefficients, then add or subtract.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>A unique solution exists when <Math>ad - bc \neq 0</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Geometrically, solutions are intersection points of lines.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={6} sectionTitle="Two Unknowns" questions={section06Questions} />
    </LessonLayout>
  );
}
