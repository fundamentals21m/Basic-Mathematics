import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section45Questions } from '../../data/quizzes';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The <strong>graph</strong> of a function provides a visual representation of the relationship
        between inputs and outputs. Understanding graphs helps us analyze function behavior quickly.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Graph of a Function</h2>

      <Definition title="Graph">
        <p>
          The <strong>graph</strong> of a function <Math>f</Math> is the set of all points <Math>{'(x, f(x))'}</Math>
          in the coordinate plane:
        </p>
        <MathBlock>
          {'\\{(x, y) : y = f(x), x \\in \\text{Domain}(f)\\}'}
        </MathBlock>
      </Definition>

      <Theorem title="Vertical Line Test">
        <p>
          A curve in the plane is the graph of a function if and only if every vertical line
          intersects the curve at most once.
        </p>
      </Theorem>

      <Example title="Applying the Vertical Line Test">
        <p>Is the circle <Math>{'x^2 + y^2 = 1'}</Math> the graph of a function?</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>No. The vertical line <Math>{'x = 0'}</Math> intersects the circle at <Math>{'(0, 1)'}</Math> and <Math>{'(0, -1)'}</Math>—two points.</p>
        </div>
      </Example>

      {/* Key Features */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Key Features of Graphs</h2>

      <Definition title="Intercepts">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><strong>x-intercepts:</strong> Points where <Math>{'f(x) = 0'}</Math> (the graph crosses the x-axis)</li>
          <li><strong>y-intercept:</strong> The point <Math>{'(0, f(0))'}</Math> (where the graph crosses the y-axis)</li>
        </ul>
      </Definition>

      <Definition title="Increasing and Decreasing">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><Math>f</Math> is <strong>increasing</strong> on an interval if <Math>{'f(x_1) < f(x_2)'}</Math> whenever <Math>{'x_1 < x_2'}</Math></li>
          <li><Math>f</Math> is <strong>decreasing</strong> on an interval if <Math>{'f(x_1) > f(x_2)'}</Math> whenever <Math>{'x_1 < x_2'}</Math></li>
        </ul>
      </Definition>

      <Definition title="Maximum and Minimum">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><strong>Global maximum:</strong> The largest value of <Math>{'f(x)'}</Math> over its entire domain</li>
          <li><strong>Local maximum:</strong> A value <Math>{'f(c)'}</Math> that is larger than <Math>{'f(x)'}</Math> for all <Math>x</Math> near <Math>c</Math></li>
        </ul>
        <p className="mt-2 text-dark-400">Similarly for minimum values.</p>
      </Definition>

      {/* Symmetry */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Symmetry</h2>

      <Definition title="Even Functions">
        <p>
          A function is <strong>even</strong> if <Math>{'f(-x) = f(x)'}</Math> for all <Math>x</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          The graph is symmetric about the y-axis.
        </p>
      </Definition>

      <Definition title="Odd Functions">
        <p>
          A function is <strong>odd</strong> if <Math>{'f(-x) = -f(x)'}</Math> for all <Math>x</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          The graph is symmetric about the origin.
        </p>
      </Definition>

      <Example title="Testing for Symmetry">
        <p>Determine if <Math>{'f(x) = x^3'}</Math> is even or odd.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'f(-x) = (-x)^3 = -x^3 = -f(x)'}
          </MathBlock>
          <p>Since <Math>{'f(-x) = -f(x)'}</Math>, the function is <strong>odd</strong>.</p>
        </div>
      </Example>

      {/* Transformations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Graph Transformations</h2>

      <Theorem title="Basic Transformations">
        <p>Starting from <Math>{'y = f(x)'}</Math>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>{'y = f(x) + k'}</Math>: Shift up by <Math>k</Math> units</li>
          <li><Math>{'y = f(x - h)'}</Math>: Shift right by <Math>h</Math> units</li>
          <li><Math>{'y = af(x)'}</Math>: Vertical stretch by factor <Math>{'|a|'}</Math>; reflect if <Math>{'a < 0'}</Math></li>
          <li><Math>{'y = f(bx)'}</Math>: Horizontal compression by factor <Math>{'|b|'}</Math></li>
        </ul>
      </Theorem>

      <Example title="Applying Transformations">
        <p>Describe the graph of <Math>{'y = 2(x - 3)^2 + 1'}</Math> relative to <Math>{'y = x^2'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <ul className="list-disc list-inside">
            <li>Shift right by 3 units</li>
            <li>Vertical stretch by factor 2</li>
            <li>Shift up by 1 unit</li>
          </ul>
          <p>Vertex moves from <Math>{'(0, 0)'}</Math> to <Math>{'(3, 1)'}</Math>.</p>
        </div>
      </Example>

      <Callout type="info" title="Order of Transformations">
        <p>
          Apply transformations in this order: horizontal shifts/stretches first,
          then reflections/stretches, then vertical shifts.
        </p>
      </Callout>

      {/* Asymptotes */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Asymptotes</h2>

      <Definition title="Types of Asymptotes">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><strong>Vertical asymptote</strong> at <Math>{'x = a'}</Math>: <Math>{'f(x) \\to \\pm\\infty'}</Math> as <Math>{'x \\to a'}</Math></li>
          <li><strong>Horizontal asymptote</strong> <Math>{'y = L'}</Math>: <Math>{'f(x) \\to L'}</Math> as <Math>{'x \\to \\pm\\infty'}</Math></li>
        </ul>
      </Definition>

      <Example title="Finding Asymptotes">
        <p>Find the asymptotes of <Math>{'f(x) = \\frac{1}{x}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Vertical:</strong> <Math>{'x = 0'}</Math> (since <Math>{'f(x) \\to \\pm\\infty'}</Math> as <Math>{'x \\to 0'}</Math>)</p>
          <p><strong>Horizontal:</strong> <Math>{'y = 0'}</Math> (since <Math>{'f(x) \\to 0'}</Math> as <Math>{'x \\to \\pm\\infty'}</Math>)</p>
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
            <span>The vertical line test determines if a curve is a function's graph</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Even functions: <Math>{'f(-x) = f(x)'}</Math> (y-axis symmetry)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Odd functions: <Math>{'f(-x) = -f(x)'}</Math> (origin symmetry)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Transformations shift, stretch, compress, or reflect graphs</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={45} sectionTitle="Graphs of Functions" questions={section45Questions} />
    </LessonLayout>
  );
}
