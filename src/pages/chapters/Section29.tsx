import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section29Questions } from '../../data/quizzes';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        We've learned how to add and scale points. Now we use these operations to describe
        <strong> segments</strong> and <strong>rays</strong>—the building blocks of geometry.
        The key idea is <em>parameterization</em>: describing all points on a geometric object
        using a single variable.
      </p>

      {/* Segments */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Segments</h2>

      <Definition title="Segment">
        <p>
          The <strong>segment</strong> from point <Math>P</Math> to point <Math>Q</Math>, denoted <Math>\overline{'{PQ}'}</Math>,
          is the set of all points "between" <Math>P</Math> and <Math>Q</Math>, including the endpoints.
        </p>
      </Definition>

      <p className="text-dark-300 mb-4 mt-4">
        But what does "between" mean precisely? We can describe it algebraically using our point operations.
      </p>

      <Theorem
        title="Parameterization of a Segment"
        proof={
          <>
            <p>A point <Math>X</Math> lies on segment <Math>\overline{'{PQ}'}</Math> if and only if:</p>
            <MathBlock>
              X = P + t(Q - P) \quad \text{'{for some }'} t \in [0, 1]
            </MathBlock>
            <p className="mt-2">Let's verify the boundary cases:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
              <li>When <Math>t = 0</Math>: <Math>X = P + 0(Q - P) = P</Math></li>
              <li>When <Math>t = 1</Math>: <Math>X = P + 1(Q - P) = P + Q - P = Q</Math></li>
            </ul>
            <p className="mt-2">For <Math>0 {'<'} t {'<'} 1</Math>, the point <Math>X</Math> lies strictly between <Math>P</Math> and <Math>Q</Math>.</p>
          </>
        }
      >
        <p>
          The segment <Math>\overline{'{PQ}'}</Math> consists of all points of the form:
        </p>
        <MathBlock>
          P + t(Q - P) \quad \text{'{where }'} t \in [0, 1]
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Equivalently: <Math>(1 - t)P + tQ</Math> for <Math>t \in [0, 1]</Math>.
        </p>
      </Theorem>

      <Callout type="info" title="The Parameter t">
        <p>
          Think of <Math>t</Math> as measuring "how far along" you are from <Math>P</Math> to <Math>Q</Math>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>t = 0</Math>: at <Math>P</Math> (the start)</li>
          <li><Math>t = 0.5</Math>: at the midpoint</li>
          <li><Math>t = 1</Math>: at <Math>Q</Math> (the end)</li>
        </ul>
      </Callout>

      <Example title="Points on a Segment">
        <p>Let <Math>P = (1, 2)</Math> and <Math>Q = (5, 6)</Math>. Find the points at <Math>t = 0</Math>, <Math>t = 0.25</Math>, <Math>t = 0.5</Math>, <Math>t = 0.75</Math>, and <Math>t = 1</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>First, compute <Math>Q - P = (5 - 1, 6 - 2) = (4, 4)</Math>.</p>
          <p className="mt-2"><strong><Math>t = 0</Math>:</strong> <Math>P + 0(4, 4) = (1, 2)</Math></p>
          <p><strong><Math>t = 0.25</Math>:</strong> <Math>(1, 2) + 0.25(4, 4) = (1, 2) + (1, 1) = (2, 3)</Math></p>
          <p><strong><Math>t = 0.5</Math>:</strong> <Math>(1, 2) + 0.5(4, 4) = (1, 2) + (2, 2) = (3, 4)</Math> (midpoint)</p>
          <p><strong><Math>t = 0.75</Math>:</strong> <Math>(1, 2) + 0.75(4, 4) = (1, 2) + (3, 3) = (4, 5)</Math></p>
          <p><strong><Math>t = 1</Math>:</strong> <Math>(1, 2) + 1(4, 4) = (5, 6) = Q</Math></p>
        </div>
      </Example>

      {/* Alternative Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Alternative Parameterization</h2>

      <p className="text-dark-300 mb-4">
        The formula <Math>P + t(Q - P)</Math> can be rewritten:
      </p>

      <MathBlock>
        P + t(Q - P) = P + tQ - tP = (1 - t)P + tQ
      </MathBlock>

      <Theorem title="Weighted Average Form">
        <p>
          A point <Math>X</Math> lies on segment <Math>\overline{'{PQ}'}</Math> if and only if:
        </p>
        <MathBlock>
          X = (1 - t)P + tQ \quad \text{'{for some }'} t \in [0, 1]
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This expresses <Math>X</Math> as a <em>weighted average</em> of <Math>P</Math> and <Math>Q</Math>,
          with weights <Math>(1 - t)</Math> and <Math>t</Math> that sum to 1.
        </p>
      </Theorem>

      <Example title="Weighted Average Interpretation">
        <p>For the segment from <Math>P = (0, 0)</Math> to <Math>Q = (6, 3)</Math>:</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>At <Math>t = \frac{'{1}'}{'{3}'}</Math>:</strong></p>
          <MathBlock>
            X = \frac{'{2}'}{'{3}'}P + \frac{'{1}'}{'{3}'}Q = \frac{'{2}'}{'{3}'}(0, 0) + \frac{'{1}'}{'{3}'}(6, 3) = (2, 1)
          </MathBlock>
          <p className="mt-2">This point is <Math>\frac{'{1}'}{'{3}'}</Math> of the way from <Math>P</Math> to <Math>Q</Math>.</p>
        </div>
      </Example>

      {/* Rays */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Rays</h2>

      <Definition title="Ray">
        <p>
          A <strong>ray</strong> is a "half-line" starting at a point and extending infinitely in one direction.
          The ray from <Math>P</Math> through <Math>Q</Math> is denoted <Math>\overrightarrow{'{PQ}'}</Math>.
        </p>
      </Definition>

      <p className="text-dark-300 mb-4 mt-4">
        To get a ray instead of a segment, we simply allow <Math>t</Math> to be any non-negative number.
      </p>

      <Theorem title="Parameterization of a Ray">
        <p>
          The ray <Math>\overrightarrow{'{PQ}'}</Math> from <Math>P</Math> through <Math>Q</Math> consists of all points:
        </p>
        <MathBlock>
          P + t(Q - P) \quad \text{'{where }'} t \geq 0
        </MathBlock>
        <p className="mt-2 text-dark-400">
          For <Math>t \in [0, 1]</Math>, we get the segment <Math>\overline{'{PQ}'}</Math>.
          For <Math>t {'>'} 1</Math>, we get points beyond <Math>Q</Math>.
        </p>
      </Theorem>

      <Example title="Points on a Ray">
        <p>Let <Math>P = (2, 1)</Math> and <Math>Q = (4, 3)</Math>. Find points on ray <Math>\overrightarrow{'{PQ}'}</Math> for <Math>t = 0, 1, 2, 3</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>First, compute <Math>Q - P = (2, 2)</Math>.</p>
          <p className="mt-2"><strong><Math>t = 0</Math>:</strong> <Math>(2, 1) + 0(2, 2) = (2, 1) = P</Math></p>
          <p><strong><Math>t = 1</Math>:</strong> <Math>(2, 1) + 1(2, 2) = (4, 3) = Q</Math></p>
          <p><strong><Math>t = 2</Math>:</strong> <Math>(2, 1) + 2(2, 2) = (2, 1) + (4, 4) = (6, 5)</Math></p>
          <p><strong><Math>t = 3</Math>:</strong> <Math>(2, 1) + 3(2, 2) = (2, 1) + (6, 6) = (8, 7)</Math></p>
        </div>
        <p className="mt-3 text-dark-400">
          As <Math>t</Math> increases, we move further along the ray, past <Math>Q</Math>.
        </p>
      </Example>

      {/* Opposite Ray */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Opposite Rays</h2>

      <Definition title="Opposite Ray">
        <p>
          The <strong>opposite ray</strong> from <Math>P</Math> away from <Math>Q</Math> consists of all points:
        </p>
        <MathBlock>
          P + t(Q - P) \quad \text{'{where }'} t \leq 0
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Using negative values of <Math>t</Math> moves us in the opposite direction from <Math>P</Math>.
        </p>
      </Definition>

      <Example title="Opposite Ray">
        <p>For <Math>P = (3, 2)</Math> and <Math>Q = (5, 4)</Math>, find points on the opposite ray for <Math>t = -1, -2</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>We have <Math>Q - P = (2, 2)</Math>.</p>
          <p className="mt-2"><strong><Math>t = -1</Math>:</strong> <Math>(3, 2) + (-1)(2, 2) = (3, 2) + (-2, -2) = (1, 0)</Math></p>
          <p><strong><Math>t = -2</Math>:</strong> <Math>(3, 2) + (-2)(2, 2) = (3, 2) + (-4, -4) = (-1, -2)</Math></p>
        </div>
        <p className="mt-3 text-dark-400">
          These points extend from <Math>P</Math> in the direction opposite to <Math>Q</Math>.
        </p>
      </Example>

      {/* Testing if a Point is on a Segment */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Testing Point Location</h2>

      <p className="text-dark-300 mb-4">
        Given three points <Math>P</Math>, <Math>Q</Math>, and <Math>X</Math>, how do we determine if <Math>X</Math> lies on
        segment <Math>\overline{'{PQ}'}</Math>, ray <Math>\overrightarrow{'{PQ}'}</Math>, or neither?
      </p>

      <Theorem title="Point Location Test">
        <p>
          If <Math>X = P + t(Q - P)</Math> for some value <Math>t</Math>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>t \in [0, 1]</Math>: <Math>X</Math> is on segment <Math>\overline{'{PQ}'}</Math></li>
          <li><Math>t \geq 0</Math>: <Math>X</Math> is on ray <Math>\overrightarrow{'{PQ}'}</Math></li>
          <li><Math>t {'<'} 0</Math>: <Math>X</Math> is on the opposite ray</li>
          <li><Math>t {'>'} 1</Math>: <Math>X</Math> is on the ray, beyond <Math>Q</Math></li>
        </ul>
      </Theorem>

      <Example title="Point Location">
        <p>Let <Math>P = (0, 0)</Math>, <Math>Q = (4, 2)</Math>. Determine where <Math>X = (6, 3)</Math> lies relative to <Math>P</Math> and <Math>Q</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>We need to find <Math>t</Math> such that <Math>X = P + t(Q - P)</Math>.</p>
          <MathBlock>
            (6, 3) = (0, 0) + t(4, 2)
          </MathBlock>
          <p className="mt-2">From the first coordinate: <Math>6 = 4t</Math>, so <Math>t = 1.5</Math></p>
          <p>Check: <Math>3 = 2t = 2(1.5) = 3</Math> ✓</p>
          <p className="mt-2">Since <Math>t = 1.5 {'>'} 1</Math>, point <Math>X</Math> is on ray <Math>\overrightarrow{'{PQ}'}</Math> but <em>not</em> on segment <Math>\overline{'{PQ}'}</Math>.</p>
        </div>
      </Example>

      <Callout type="warning" title="Collinearity Required">
        <p>
          If you solve for <Math>t</Math> and get different values from the <Math>x</Math>-coordinate and <Math>y</Math>-coordinate,
          then <Math>X</Math> is not on the line through <Math>P</Math> and <Math>Q</Math> at all!
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
            <span><strong>Segment <Math>\overline{'{PQ}'}</Math>:</strong> <Math>P + t(Q - P)</Math> for <Math>t \in [0, 1]</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Ray <Math>\overrightarrow{'{PQ}'}</Math>:</strong> <Math>P + t(Q - P)</Math> for <Math>t \geq 0</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Opposite ray:</strong> <Math>P + t(Q - P)</Math> for <Math>t \leq 0</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Equivalent form:</strong> <Math>(1 - t)P + tQ</Math> (weighted average)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span>The parameter <Math>t</Math> tells you "how far" from <Math>P</Math> toward <Math>Q</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={29} sectionTitle="Segments and Rays" questions={section29Questions} />
    </LessonLayout>
  );
}
