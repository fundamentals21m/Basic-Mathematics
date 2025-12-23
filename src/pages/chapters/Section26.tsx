import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section26Questions } from '../../data/quizzes';
import { DilationExplorer, ReflectionExplorer, DilationReflectionComposer } from '../../components/visualizations';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Now that we understand coordinates, we can describe geometric transformations algebraically.
        In this section, we study two fundamental operations on points: <strong>dilations</strong> (scaling)
        and <strong>reflections</strong> (flipping across axes).
      </p>

      {/* Dilations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Dilations (Scalar Multiplication)</h2>

      <Definition title="Dilation">
        <p>
          A <strong>dilation</strong> centered at the origin with scale factor <Math>c</Math> transforms
          a point <Math>P(x, y)</Math> to:
        </p>
        <MathBlock>
          cP = (cx, cy)
        </MathBlock>
        <p className="mt-2 text-dark-400">
          We multiply both coordinates by the same scalar <Math>c</Math>.
        </p>
      </Definition>

      <Callout type="info" title="Notation">
        <p>
          We write <Math>cP</Math> to mean "scale point <Math>P</Math> by factor <Math>c</Math>."
          This is similar to scalar multiplication with vectors.
        </p>
      </Callout>

      <Example title="Dilation Examples">
        <div className="space-y-4 text-dark-300">
          <div>
            <p><strong>Scaling up:</strong> If <Math>P = (3, 2)</Math> and <Math>c = 2</Math>:</p>
            <MathBlock>2P = (2 \cdot 3, 2 \cdot 2) = (6, 4)</MathBlock>
            <p className="text-dark-400">The point moves twice as far from the origin.</p>
          </div>
          <div>
            <p><strong>Scaling down:</strong> If <Math>P = (4, 6)</Math> and <Math>c = \frac{'{1}'}{'{2}'}</Math>:</p>
            <MathBlock>\frac{'{1}'}{'{2}'}P = \left(\frac{'{4}'}{'{2}'}, \frac{'{6}'}{'{2}'}\right) = (2, 3)</MathBlock>
            <p className="text-dark-400">The point moves halfway toward the origin.</p>
          </div>
          <div>
            <p><strong>Negative scale:</strong> If <Math>P = (3, 2)</Math> and <Math>c = -1</Math>:</p>
            <MathBlock>-1 \cdot P = (-3, -2)</MathBlock>
            <p className="text-dark-400">The point is reflected through the origin.</p>
          </div>
        </div>
      </Example>

      <DilationExplorer />

      <Theorem
        title="Properties of Dilations"
        proof={
          <>
            <p>Let <Math>P = (x, y)</Math> and let <Math>a, b</Math> be scalars.</p>
            <p className="mt-2"><strong>1. Identity:</strong> <Math>1 \cdot P = (1 \cdot x, 1 \cdot y) = (x, y) = P</Math></p>
            <p className="mt-2"><strong>2. Associativity:</strong></p>
            <MathBlock>a(bP) = a(bx, by) = (abx, aby) = (ab)P</MathBlock>
            <p className="mt-2"><strong>3. Zero:</strong> <Math>0 \cdot P = (0 \cdot x, 0 \cdot y) = (0, 0) = O</Math></p>
          </>
        }
      >
        <p>For any point <Math>P</Math> and scalars <Math>a, b</Math>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>1 \cdot P = P</Math> (identity)</li>
          <li><Math>a(bP) = (ab)P</Math> (associativity)</li>
          <li><Math>0 \cdot P = O</Math> (zero maps to origin)</li>
        </ul>
      </Theorem>

      {/* Geometric Interpretation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Geometric Interpretation</h2>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">What Dilation Does</h4>
        <ul className="space-y-2 text-dark-300">
          <li><Math>c {'>'} 1</Math>: Point moves <strong>away</strong> from origin (enlargement)</li>
          <li><Math>0 {'<'} c {'<'} 1</Math>: Point moves <strong>toward</strong> origin (shrinking)</li>
          <li><Math>c = 0</Math>: Point collapses to the origin</li>
          <li><Math>c {'<'} 0</Math>: Point moves through origin to opposite side</li>
        </ul>
      </div>

      <Theorem
        title="Dilations Preserve Rays"
        proof={
          <>
            <p>Consider a point <Math>P</Math> on the ray from origin through <Math>Q</Math>.</p>
            <p className="mt-2">Then <Math>P = tQ</Math> for some <Math>t \geq 0</Math>.</p>
            <p className="mt-2">Applying dilation by <Math>c {'>'} 0</Math>:</p>
            <MathBlock>cP = c(tQ) = (ct)Q</MathBlock>
            <p className="mt-2">Since <Math>ct \geq 0</Math>, the image <Math>cP</Math> is still on the ray from origin through <Math>Q</Math>.</p>
          </>
        }
      >
        <p>
          For <Math>c {'>'} 0</Math>, dilation by <Math>c</Math> maps points on a ray from the
          origin to points on the same ray.
        </p>
      </Theorem>

      {/* Reflections */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Reflections Across Axes</h2>

      <Definition title="Reflection Across the x-axis">
        <p>
          Reflecting a point <Math>P(x, y)</Math> across the <Math>x</Math>-axis gives:
        </p>
        <MathBlock>
          P' = (x, -y)
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The <Math>x</Math>-coordinate stays the same; the <Math>y</Math>-coordinate changes sign.
        </p>
      </Definition>

      <Definition title="Reflection Across the y-axis" className="mt-6">
        <p>
          Reflecting a point <Math>P(x, y)</Math> across the <Math>y</Math>-axis gives:
        </p>
        <MathBlock>
          P' = (-x, y)
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The <Math>y</Math>-coordinate stays the same; the <Math>x</Math>-coordinate changes sign.
        </p>
      </Definition>

      <Example title="Reflection Examples">
        <div className="space-y-3 text-dark-300">
          <p>Let <Math>P = (3, 4)</Math>.</p>
          <div>
            <p><strong>Reflect across x-axis:</strong></p>
            <MathBlock>P' = (3, -4)</MathBlock>
          </div>
          <div>
            <p><strong>Reflect across y-axis:</strong></p>
            <MathBlock>P' = (-3, 4)</MathBlock>
          </div>
          <div>
            <p><strong>Reflect across both axes</strong> (same as rotation by 180°):</p>
            <MathBlock>P' = (-3, -4)</MathBlock>
          </div>
        </div>
      </Example>

      <ReflectionExplorer />

      {/* Reflection Through Origin */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Reflection Through the Origin</h2>

      <Definition title="Central Reflection">
        <p>
          Reflecting a point <Math>P(x, y)</Math> through the origin gives:
        </p>
        <MathBlock>
          P' = (-x, -y) = -P
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This is the same as dilation by <Math>-1</Math>.
        </p>
      </Definition>

      <Theorem
        title="Central Reflection = Double Axis Reflection"
        proof={
          <>
            <p>Start with <Math>P = (x, y)</Math>.</p>
            <p className="mt-2">Reflect across x-axis: <Math>(x, y) \to (x, -y)</Math></p>
            <p className="mt-2">Then reflect across y-axis: <Math>(x, -y) \to (-x, -y)</Math></p>
            <p className="mt-2">The result is <Math>(-x, -y) = -P</Math>, which is reflection through the origin.</p>
            <p className="mt-3">Alternatively, reflecting across y-axis first, then x-axis, gives the same result:</p>
            <MathBlock>(x, y) \to (-x, y) \to (-x, -y)</MathBlock>
          </>
        }
      >
        <p>
          Reflecting across the x-axis and then the y-axis (or vice versa) is equivalent to
          reflecting through the origin.
        </p>
      </Theorem>

      {/* Composition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Composing Transformations</h2>

      <p className="text-dark-300 mb-4">
        We can combine dilations and reflections. The order sometimes matters!
      </p>

      <Example title="Composing Transformations">
        <p>Let <Math>P = (2, 3)</Math>. Apply dilation by 2, then reflection across the x-axis:</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Step 1:</strong> Dilate by 2: <Math>(2, 3) \to (4, 6)</Math></p>
          <p><strong>Step 2:</strong> Reflect across x-axis: <Math>(4, 6) \to (4, -6)</Math></p>
        </div>
        <p className="mt-3">Now try the other order:</p>
        <div className="mt-2 text-dark-300 space-y-2">
          <p><strong>Step 1:</strong> Reflect across x-axis: <Math>(2, 3) \to (2, -3)</Math></p>
          <p><strong>Step 2:</strong> Dilate by 2: <Math>(2, -3) \to (4, -6)</Math></p>
        </div>
        <p className="mt-3 text-dark-400">
          In this case, both orders give the same result! (This is not always true for all transformations.)
        </p>
      </Example>

      <DilationReflectionComposer />

      <Theorem
        title="Dilations and Axis Reflections Commute"
        proof={
          <>
            <p>Let <Math>P = (x, y)</Math> and <Math>c</Math> be a scalar.</p>
            <p className="mt-2"><strong>Dilation then x-reflection:</strong></p>
            <MathBlock>(x, y) \xrightarrow{'{\\times c}'} (cx, cy) \xrightarrow{'{\\text{reflect}}'} (cx, -cy)</MathBlock>
            <p className="mt-2"><strong>x-reflection then dilation:</strong></p>
            <MathBlock>(x, y) \xrightarrow{'{\\text{reflect}}'} (x, -y) \xrightarrow{'{\\times c}'} (cx, -cy)</MathBlock>
            <p className="mt-2">Both give <Math>(cx, -cy)</Math>, so the operations commute.</p>
            <p className="mt-2">The same argument works for y-axis reflection.</p>
          </>
        }
      >
        <p>
          Dilations commute with reflections across the x-axis or y-axis. That is, the order
          of these operations doesn't affect the final result.
        </p>
      </Theorem>

      {/* Distance Under Transformations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Distance Under Transformations</h2>

      <Theorem
        title="Dilation Scales Distance"
        proof={
          <>
            <p>Let <Math>P = (x, y)</Math>. The distance from origin to <Math>P</Math> is:</p>
            <MathBlock>d = \sqrt{'{x^2 + y^2}'}</MathBlock>
            <p className="mt-2">After dilation by <Math>c</Math>, the point becomes <Math>(cx, cy)</Math>.</p>
            <p className="mt-2">The new distance is:</p>
            <MathBlock>d' = \sqrt{'{(cx)^2 + (cy)^2}'} = \sqrt{'{c^2(x^2 + y^2)}'} = |c| \sqrt{'{x^2 + y^2}'} = |c| \cdot d</MathBlock>
          </>
        }
      >
        <p>
          If <Math>P</Math> is at distance <Math>d</Math> from the origin, then <Math>cP</Math> is
          at distance <Math>|c| \cdot d</Math> from the origin.
        </p>
      </Theorem>

      <Theorem
        title="Reflections Preserve Distance"
        proof={
          <>
            <p>Let <Math>P = (x, y)</Math> with distance <Math>d = \sqrt{'{x^2 + y^2}'}</Math> from origin.</p>
            <p className="mt-2">After reflection across x-axis: <Math>P' = (x, -y)</Math></p>
            <MathBlock>d' = \sqrt{'{x^2 + (-y)^2}'} = \sqrt{'{x^2 + y^2}'} = d</MathBlock>
            <p className="mt-2">After reflection across y-axis: <Math>P' = (-x, y)</Math></p>
            <MathBlock>d' = \sqrt{'{(-x)^2 + y^2}'} = \sqrt{'{x^2 + y^2}'} = d</MathBlock>
          </>
        }
      >
        <p>
          Reflections across the axes preserve the distance from the origin. They are <strong>isometries</strong>.
        </p>
      </Theorem>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Dilation:</strong> <Math>cP = (cx, cy)</Math> — scales distance by <Math>|c|</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>x-reflection:</strong> <Math>(x, y) \to (x, -y)</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>y-reflection:</strong> <Math>(x, y) \to (-x, y)</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Central reflection:</strong> <Math>(x, y) \to (-x, -y) = -P</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span>Reflections are <strong>isometries</strong> (preserve distance)</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={26} sectionTitle="Dilations and Reflections" questions={section26Questions} />
    </LessonLayout>
  );
}
