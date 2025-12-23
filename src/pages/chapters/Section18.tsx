import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section18Questions } from '../../data/quizzes';
import { IsometryExplorer, TransformationComposer, FixedPointFinder } from '../../components/visualizations';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        An <strong>isometry</strong> is a transformation of the plane that preserves distances.
        These special mappings are fundamental to geometry because they preserve the "shape"
        of figures—if two figures are related by an isometry, they are congruent.
      </p>

      {/* Definition of Isometry */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">What is an Isometry?</h2>

      <Definition title="Isometry">
        <p>
          A mapping <Math>F: \mathbb{'{R}'}^2 \to \mathbb{'{R}'}^2</Math> is an <strong>isometry</strong> if
          it preserves distances:
        </p>
        <MathBlock>
          d(F(P), F(Q)) = d(P, Q) \text{'{ for all points }'} P, Q
        </MathBlock>
        <p className="mt-2 text-dark-400">
          In other words, the distance between any two points equals the distance between their images.
        </p>
      </Definition>

      <Example title="Verifying an Isometry">
        <p>
          Consider the mapping <Math>F(x, y) = (-x, y)</Math> (reflection across the y-axis).
        </p>
        <p className="mt-2 text-dark-300">
          Take points <Math>P = (1, 2)</Math> and <Math>Q = (4, 6)</Math>.
        </p>
        <ul className="mt-2 space-y-2 text-dark-300">
          <li>Original distance: <Math>d(P, Q) = \sqrt{'{(4-1)^2 + (6-2)^2}'} = \sqrt{'{9 + 16}'} = 5</Math></li>
          <li>Images: <Math>F(P) = (-1, 2)</Math>, <Math>F(Q) = (-4, 6)</Math></li>
          <li>Image distance: <Math>d(F(P), F(Q)) = \sqrt{'{(-4-(-1))^2 + (6-2)^2}'} = \sqrt{'{9 + 16}'} = 5</Math></li>
        </ul>
        <p className="mt-2 text-dark-300">
          Since distances are preserved, <Math>F</Math> is an isometry.
        </p>
      </Example>

      <IsometryExplorer />

      {/* Properties of Isometries */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Isometries</h2>

      <Theorem
        title="Isometries Preserve Angles"
        proof={
          <>
            <p>An angle is determined by three points <Math>P, Q, R</Math> with <Math>Q</Math> at the vertex.</p>
            <p className="mt-2">By the law of cosines, the angle <Math>\theta</Math> at <Math>Q</Math> satisfies:</p>
            <MathBlock>\cos\theta = \frac{'{d(P,Q)^2 + d(Q,R)^2 - d(P,R)^2}'}{'{2 \\cdot d(P,Q) \\cdot d(Q,R)}'}</MathBlock>
            <p className="mt-2">Since isometries preserve all distances, all terms in this formula are unchanged.</p>
            <p className="mt-2">Therefore <Math>\cos\theta</Math> is preserved, and so is <Math>\theta</Math>.</p>
          </>
        }
      >
        <p>
          If <Math>F</Math> is an isometry, then the angle <Math>\angle PQR</Math> equals
          the angle <Math>\angle F(P)F(Q)F(R)</Math>.
        </p>
      </Theorem>

      <Theorem
        title="Isometries Preserve Lines"
        proof={
          <>
            <p>A line is the set of points <Math>X</Math> such that <Math>A, X, B</Math> are collinear for two fixed points <Math>A, B</Math>.</p>
            <p className="mt-2">Collinearity can be characterized by: <Math>d(A, X) + d(X, B) = d(A, B)</Math> or <Math>d(A, B) + d(B, X) = d(A, X)</Math>, etc.</p>
            <p className="mt-2">Since isometries preserve all distances, these relationships are preserved.</p>
            <p className="mt-2">Thus the image of a line is a line.</p>
          </>
        }
      >
        <p>
          If <Math>F</Math> is an isometry and <Math>\ell</Math> is a line, then <Math>F(\ell)</Math> is also a line.
        </p>
      </Theorem>

      <Theorem
        title="Isometries Preserve Betweenness"
        proof={
          <>
            <p><Math>B</Math> is between <Math>A</Math> and <Math>C</Math> if and only if:</p>
            <MathBlock>d(A, B) + d(B, C) = d(A, C)</MathBlock>
            <p className="mt-2">Since isometries preserve distances:</p>
            <MathBlock>d(F(A), F(B)) + d(F(B), F(C)) = d(A, B) + d(B, C) = d(A, C) = d(F(A), F(C))</MathBlock>
            <p className="mt-2">Therefore <Math>F(B)</Math> is between <Math>F(A)</Math> and <Math>F(C)</Math>.</p>
          </>
        }
      >
        <p>
          If <Math>B</Math> is between <Math>A</Math> and <Math>C</Math> on a line, then
          <Math>F(B)</Math> is between <Math>F(A)</Math> and <Math>F(C)</Math>.
        </p>
      </Theorem>

      <Callout type="info" title="Why These Properties Matter">
        <p>
          Because isometries preserve distances, angles, and lines, they preserve the
          entire "geometry" of figures. Triangles map to congruent triangles, circles
          to equal circles, and so on.
        </p>
      </Callout>

      {/* Types of Isometries */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Types of Isometries</h2>

      <Definition title="Translation">
        <p>
          A <strong>translation</strong> by vector <Math>\mathbf{'{v}'} = (a, b)</Math> moves every point
          by the same displacement:
        </p>
        <MathBlock>
          T_{'{\mathbf{v}}'}\!(x, y) = (x + a, y + b)
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Translations have no fixed points (unless <Math>\mathbf{'{v}'} = \mathbf{'{0}'}</Math>).
        </p>
      </Definition>

      <Definition title="Rotation">
        <p>
          A <strong>rotation</strong> by angle <Math>\theta</Math> about the origin:
        </p>
        <MathBlock>
          R_\theta(x, y) = (x\cos\theta - y\sin\theta, \; x\sin\theta + y\cos\theta)
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Rotations have exactly one fixed point: the center of rotation.
        </p>
      </Definition>

      <Definition title="Reflection">
        <p>
          A <strong>reflection</strong> across a line <Math>\ell</Math> maps each point to its
          mirror image across <Math>\ell</Math>.
        </p>
        <MathBlock>
          \text{'{Reflection across x-axis: }'} S_x(x, y) = (x, -y)
        </MathBlock>
        <MathBlock>
          \text{'{Reflection across y-axis: }'} S_y(x, y) = (-x, y)
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Every point on the line of reflection is a fixed point.
        </p>
      </Definition>

      <Definition title="Glide Reflection">
        <p>
          A <strong>glide reflection</strong> is a reflection followed by a translation
          parallel to the line of reflection:
        </p>
        <MathBlock>
          G = T_{'{\mathbf{v}}'} \circ S_\ell
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>\mathbf{'{v}'}</Math> is parallel to line <Math>\ell</Math>. Glide reflections have no fixed points.
        </p>
      </Definition>

      <Example title="Examples of Each Type">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-primary-400">Translation by (3, -2):</p>
            <p className="text-dark-300"><Math>(1, 4) \mapsto (4, 2)</Math>, <Math>(0, 0) \mapsto (3, -2)</Math></p>
          </div>
          <div>
            <p className="font-semibold text-cyan-400">Rotation by 90° about origin:</p>
            <p className="text-dark-300"><Math>(1, 0) \mapsto (0, 1)</Math>, <Math>(2, 3) \mapsto (-3, 2)</Math></p>
          </div>
          <div>
            <p className="font-semibold text-emerald-400">Reflection across y = x:</p>
            <p className="text-dark-300"><Math>(a, b) \mapsto (b, a)</Math></p>
          </div>
          <div>
            <p className="font-semibold text-amber-400">Glide reflection (reflect across x-axis, then translate by (2, 0)):</p>
            <p className="text-dark-300"><Math>(1, 3) \mapsto (3, -3)</Math></p>
          </div>
        </div>
      </Example>

      {/* Classification Theorem */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Classification of Isometries</h2>

      <Theorem
        title="Classification Theorem"
        proof={
          <>
            <p>This follows from analyzing fixed points and orientation:</p>
            <ul className="list-disc list-inside mt-2">
              <li>If <Math>F</Math> has at least 3 non-collinear fixed points, it's the identity.</li>
              <li>If <Math>F</Math> has a line of fixed points, it's a reflection.</li>
              <li>If <Math>F</Math> has exactly one fixed point, it's a rotation.</li>
              <li>If <Math>F</Math> has no fixed points and preserves orientation, it's a translation.</li>
              <li>If <Math>F</Math> has no fixed points and reverses orientation, it's a glide reflection.</li>
            </ul>
            <p className="mt-2">Every isometry falls into exactly one of these cases.</p>
          </>
        }
      >
        <p>
          Every isometry of the plane is one of exactly four types:
        </p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li>1. <strong>Translation</strong> (identity is a translation by <Math>\mathbf{'{0}'}</Math>)</li>
          <li>2. <strong>Rotation</strong> (including the identity as rotation by 0°)</li>
          <li>3. <strong>Reflection</strong></li>
          <li>4. <strong>Glide reflection</strong></li>
        </ul>
      </Theorem>

      <Callout type="info" title="Direct vs. Opposite Isometries">
        <p>
          Isometries are divided into two classes:
        </p>
        <ul className="mt-2 space-y-1">
          <li><strong>Direct isometries</strong> preserve orientation (translations, rotations)</li>
          <li><strong>Opposite isometries</strong> reverse orientation (reflections, glide reflections)</li>
        </ul>
      </Callout>

      {/* Composition of Isometries */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Composition of Isometries</h2>

      <Theorem
        title="Composition is an Isometry"
        proof={
          <>
            <p>Let <Math>F, G</Math> be isometries and <Math>P, Q</Math> be any points.</p>
            <MathBlock>d((G \circ F)(P), (G \circ F)(Q)) = d(G(F(P)), G(F(Q)))</MathBlock>
            <p className="mt-2">Since <Math>G</Math> is an isometry:</p>
            <MathBlock>= d(F(P), F(Q))</MathBlock>
            <p className="mt-2">Since <Math>F</Math> is an isometry:</p>
            <MathBlock>= d(P, Q)</MathBlock>
            <p className="mt-2">Therefore <Math>G \circ F</Math> preserves distances, so it's an isometry.</p>
          </>
        }
      >
        <p>
          If <Math>F</Math> and <Math>G</Math> are isometries, then <Math>G \circ F</Math> is also an isometry.
        </p>
      </Theorem>

      <Theorem
        title="Two Reflections Make a Rotation or Translation"
        proof={
          <>
            <p><strong>Case 1: Lines intersect at point <Math>O</Math></strong></p>
            <p className="mt-2">Each reflection fixes <Math>O</Math>, so the composition fixes <Math>O</Math>.</p>
            <p className="mt-2">The composition is a direct isometry (two orientation reversals = orientation preserved).</p>
            <p className="mt-2">A direct isometry with a fixed point is a rotation about that point.</p>
            <p className="mt-2">If the lines meet at angle <Math>\alpha</Math>, the rotation is by <Math>2\alpha</Math>.</p>
            <p className="mt-2"><strong>Case 2: Lines are parallel</strong></p>
            <p className="mt-2">The composition is direct and has no fixed points (can be verified), so it's a translation.</p>
            <p className="mt-2">The translation distance is twice the distance between the lines.</p>
          </>
        }
      >
        <p>
          The composition of two reflections is:
        </p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li>A <strong>rotation</strong> if the lines intersect (angle = twice the angle between lines)</li>
          <li>A <strong>translation</strong> if the lines are parallel (distance = twice the distance between lines)</li>
        </ul>
      </Theorem>

      <Example title="Composing Two Reflections">
        <p>
          Reflect across the x-axis, then across the line <Math>y = x</Math> (which makes a 45° angle with x-axis).
        </p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li>First: <Math>(a, b) \mapsto (a, -b)</Math></li>
          <li>Second: <Math>(a, -b) \mapsto (-b, a)</Math></li>
          <li>Combined: <Math>(a, b) \mapsto (-b, a)</Math></li>
        </ul>
        <p className="mt-2 text-dark-300">
          This is a rotation by 90° (= 2 × 45°) counterclockwise about the origin.
        </p>
      </Example>

      <TransformationComposer />

      <Theorem
        title="Three Reflections Theorem"
        proof={
          <>
            <p>We verify each case:</p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Reflection:</strong> 1 reflection (by definition)</li>
              <li><strong>Rotation:</strong> 2 reflections across lines through the center, meeting at half the rotation angle</li>
              <li><strong>Translation:</strong> 2 reflections across parallel lines, separated by half the translation distance</li>
              <li><strong>Glide reflection:</strong> = reflection + translation = 1 + 2 = 3 reflections</li>
            </ul>
            <p className="mt-2">Since every isometry is one of these four types, at most 3 reflections suffice.</p>
          </>
        }
      >
        <p>
          Every isometry can be expressed as the composition of at most three reflections.
        </p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li>Translation = 2 reflections across parallel lines</li>
          <li>Rotation = 2 reflections across intersecting lines</li>
          <li>Reflection = 1 reflection</li>
          <li>Glide reflection = 3 reflections</li>
        </ul>
      </Theorem>

      {/* Fixed Points */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Fixed Points</h2>

      <Definition title="Fixed Point">
        <p>
          A point <Math>P</Math> is a <strong>fixed point</strong> of isometry <Math>F</Math> if <Math>F(P) = P</Math>.
        </p>
      </Definition>

      <Theorem
        title="Fixed Points Characterize Isometries"
        proof={
          <>
            <p><strong>All points fixed:</strong> By definition, this is the identity map.</p>
            <p className="mt-2"><strong>Line of fixed points:</strong> Points off the line must map to points equidistant from the line. This forces reflection across the line.</p>
            <p className="mt-2"><strong>One fixed point:</strong> A direct isometry with one fixed point is a rotation. An opposite isometry with finitely many fixed points is impossible (would require a point both on and off the reflection line).</p>
            <p className="mt-2"><strong>No fixed points:</strong> A direct isometry with no fixed points is a translation. An opposite isometry with no fixed points is a glide reflection.</p>
          </>
        }
      >
        <p>
          The number and arrangement of fixed points determines the type of isometry:
        </p>
        <ul className="mt-2 space-y-2 text-dark-300">
          <li><strong>All points fixed:</strong> Identity</li>
          <li><strong>Exactly one point fixed:</strong> Rotation (non-identity)</li>
          <li><strong>Line of fixed points:</strong> Reflection</li>
          <li><strong>No fixed points:</strong> Translation or glide reflection</li>
        </ul>
      </Theorem>

      <Example title="Finding Fixed Points">
        <p>Find the fixed points of <Math>F(x, y) = (-y, -x)</Math>.</p>
        <p className="mt-2 text-dark-300">Set <Math>F(x, y) = (x, y)</Math>:</p>
        <MathBlock>
          -y = x \quad \text{'{and}'} \quad -x = y
        </MathBlock>
        <p className="mt-2 text-dark-300">
          Both equations give <Math>y = -x</Math>, so all points on the line <Math>y = -x</Math> are fixed.
          This is a reflection across <Math>y = -x</Math>.
        </p>
      </Example>

      <FixedPointFinder />

      {/* Isometry and Congruence */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Isometries and Congruence</h2>

      <Definition title="Congruence via Isometry">
        <p>
          Two figures <Math>F_1</Math> and <Math>F_2</Math> are <strong>congruent</strong> if there
          exists an isometry <Math>T</Math> such that <Math>T(F_1) = F_2</Math>.
        </p>
      </Definition>

      <Theorem
        title="Triangles and Isometries"
        proof={
          <>
            <p><strong>Existence:</strong></p>
            <p className="mt-2">First, translate <Math>A</Math> to <Math>A'</Math>. Call the image of <Math>B</Math> as <Math>B_1</Math>.</p>
            <p className="mt-2">Since <Math>|A'B_1| = |AB| = |A'B'|</Math>, point <Math>B_1</Math> lies on a circle around <Math>A'</Math>. Rotate about <Math>A'</Math> to map <Math>B_1</Math> to <Math>B'</Math>.</p>
            <p className="mt-2">The image of <Math>C</Math> (call it <Math>C_1</Math>) satisfies <Math>|A'C_1| = |A'C'|</Math> and <Math>|B'C_1| = |B'C'|</Math>.</p>
            <p className="mt-2">Either <Math>C_1 = C'</Math> (done), or <Math>C_1</Math> is the reflection of <Math>C'</Math> across line <Math>A'B'</Math>. In the latter case, reflect.</p>
            <p className="mt-2"><strong>Uniqueness:</strong> An isometry is determined by its action on three non-collinear points.</p>
          </>
        }
      >
        <p>
          Given triangles <Math>ABC</Math> and <Math>A'B'C'</Math> with:
        </p>
        <MathBlock>
          |AB| = |A'B'|, \quad |BC| = |B'C'|, \quad |CA| = |C'A'|
        </MathBlock>
        <p className="mt-2 text-dark-300">
          there exists a unique isometry mapping <Math>A \mapsto A'</Math>, <Math>B \mapsto B'</Math>, <Math>C \mapsto C'</Math>.
        </p>
      </Theorem>

      <Callout type="info" title="Why This Matters">
        <p>
          This theorem shows that SSS (Side-Side-Side) congruence is equivalent to the existence
          of an isometry between triangles. It connects the algebraic definition of isometry
          with the geometric concept of congruent figures.
        </p>
      </Callout>

      {/* Inverse Isometries */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Inverse Isometries</h2>

      <Theorem
        title="Isometries are Invertible"
        proof={
          <>
            <p>We verify each type has an inverse that is also an isometry:</p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Translation by <Math>\mathbf{'{v}'}</Math>:</strong> Inverse is translation by <Math>-\mathbf{'{v}'}</Math>. Both are isometries.</li>
              <li><strong>Rotation by <Math>\theta</Math>:</strong> Inverse is rotation by <Math>-\theta</Math>. Both are isometries.</li>
              <li><strong>Reflection:</strong> Applying the same reflection twice returns to the original. So <Math>S = S^{'{-1}'}</Math>.</li>
              <li><strong>Glide reflection:</strong> If <Math>G = T \circ S</Math>, then <Math>G^{'{-1}'} = S^{'{-1}'} \circ T^{'{-1}'} = S \circ T^{'{-1}'}</Math>, which is also a glide reflection.</li>
            </ul>
            <p className="mt-2">Since the inverse preserves distances (being an isometry), it's well-defined.</p>
          </>
        }
      >
        <p>
          Every isometry <Math>F</Math> has an inverse <Math>F^{'{-1}'}</Math>, which is also an isometry.
        </p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li>Inverse of translation by <Math>\mathbf{'{v}'}</Math>: translation by <Math>-\mathbf{'{v}'}</Math></li>
          <li>Inverse of rotation by <Math>\theta</Math>: rotation by <Math>-\theta</Math></li>
          <li>Inverse of reflection: the same reflection (reflections are self-inverse)</li>
        </ul>
      </Theorem>

      <Example title="Inverses">
        <div className="space-y-2 text-dark-300">
          <p>
            <strong>Translation:</strong> If <Math>T(x, y) = (x + 3, y - 2)</Math>, then
            <Math>T^{'{-1}'}(x, y) = (x - 3, y + 2)</Math>.
          </p>
          <p>
            <strong>Rotation:</strong> If <Math>R</Math> rotates by 60°, then <Math>R^{'{-1}'}</Math> rotates by -60°.
          </p>
          <p>
            <strong>Reflection:</strong> If <Math>S</Math> reflects across a line, then <Math>S^{'{-1}'} = S</Math>.
          </p>
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
            <span><strong>Isometry:</strong> A distance-preserving transformation of the plane</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Four types:</strong> Translations, rotations, reflections, glide reflections</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Preserved properties:</strong> Distance, angles, lines, betweenness</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Three reflections:</strong> Every isometry = at most 3 reflections</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Congruence:</strong> Figures are congruent iff related by an isometry</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={18} sectionTitle="Isometries" questions={section18Questions} />
    </LessonLayout>
  );
}
