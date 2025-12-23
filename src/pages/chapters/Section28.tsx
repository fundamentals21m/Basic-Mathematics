import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section28Questions } from '../../data/quizzes';
import { ParallelogramLawDemo, MidpointExplorer, CentroidDemo } from '../../components/visualizations';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        In the previous section, we defined point addition algebraically. Now we discover its beautiful
        <strong> geometric meaning</strong>: the sum of two points completes a parallelogram. This
        connection between algebra and geometry is one of the most powerful ideas in mathematics.
      </p>

      {/* The Parallelogram Law */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Parallelogram Law</h2>

      <Theorem
        title="Parallelogram Law for Addition"
        proof={
          <>
            <p>Let <Math>P = (a, b)</Math> and <Math>Q = (c, d)</Math>. We need to show that <Math>O, P, P+Q, Q</Math> form a parallelogram.</p>
            <p className="mt-2">A quadrilateral is a parallelogram if opposite sides are parallel and equal in length.</p>
            <p className="mt-3"><strong>Side OP:</strong> From <Math>O = (0,0)</Math> to <Math>P = (a,b)</Math>. Displacement: <Math>(a, b)</Math>.</p>
            <p className="mt-2"><strong>Side Q to P+Q:</strong> From <Math>Q = (c,d)</Math> to <Math>P+Q = (a+c, b+d)</Math>.</p>
            <MathBlock>
              (P+Q) - Q = (a+c-c, b+d-d) = (a, b)
            </MathBlock>
            <p className="mt-2">Both sides have the same displacement <Math>(a, b)</Math>, so they are parallel and equal.</p>
            <p className="mt-3"><strong>Side OQ:</strong> Displacement <Math>(c, d)</Math>.</p>
            <p className="mt-2"><strong>Side P to P+Q:</strong></p>
            <MathBlock>
              (P+Q) - P = (a+c-a, b+d-b) = (c, d)
            </MathBlock>
            <p className="mt-2">Both have displacement <Math>(c, d)</Math>, so they are parallel and equal.</p>
            <p className="mt-3">Therefore, <Math>OPQP+Q</Math> is a parallelogram (with vertices in order O, P, P+Q, Q).</p>
          </>
        }
      >
        <p>
          Given points <Math>P</Math> and <Math>Q</Math>, the four points <Math>O</Math>, <Math>P</Math>,
          <Math>P + Q</Math>, and <Math>Q</Math> form a <strong>parallelogram</strong>.
        </p>
        <p className="mt-2 text-dark-400">
          The sum <Math>P + Q</Math> is the fourth vertex that completes the parallelogram.
        </p>
      </Theorem>

      <ParallelogramLawDemo />

      <Callout type="info" title="Geometric Construction">
        <p>
          To find <Math>P + Q</Math> geometrically:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-dark-300">
          <li>Draw the vector from <Math>O</Math> to <Math>P</Math></li>
          <li>Draw the vector from <Math>O</Math> to <Math>Q</Math></li>
          <li>Complete the parallelogram</li>
          <li>The fourth vertex is <Math>P + Q</Math></li>
        </ol>
      </Callout>

      {/* Commutativity Revisited */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Commutativity: A Geometric View</h2>

      <p className="text-dark-300 mb-4">
        We proved <Math>P + Q = Q + P</Math> algebraically. The parallelogram law gives a geometric explanation.
      </p>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Why P + Q = Q + P Geometrically</h4>
        <p className="text-dark-300">
          Both <Math>P + Q</Math> and <Math>Q + P</Math> are the fourth vertex of the <em>same</em> parallelogram!
          Starting from <Math>O</Math>, whether you go via <Math>P</Math> first or <Math>Q</Math> first,
          you end up at the same point.
        </p>
      </div>

      <Example title="Parallelogram Symmetry">
        <p>Let <Math>P = (3, 1)</Math> and <Math>Q = (1, 2)</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Path 1 (via P):</strong> <Math>O \to P \to P+Q</Math></p>
          <p className="ml-4">Go to <Math>(3, 1)</Math>, then add <Math>(1, 2)</Math> to get <Math>(4, 3)</Math>.</p>
          <p className="mt-2"><strong>Path 2 (via Q):</strong> <Math>O \to Q \to Q+P</Math></p>
          <p className="ml-4">Go to <Math>(1, 2)</Math>, then add <Math>(3, 1)</Math> to get <Math>(4, 3)</Math>.</p>
        </div>
        <p className="mt-3 text-dark-400">
          Both paths reach the same destination—the parallelogram's fourth vertex.
        </p>
      </Example>

      {/* The Midpoint Formula */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Midpoint Formula</h2>

      <Definition title="Midpoint">
        <p>
          The <strong>midpoint</strong> of two points <Math>P</Math> and <Math>Q</Math> is the point
          exactly halfway between them:
        </p>
        <MathBlock>
          M = \frac{'{1}'}{'{2}'}(P + Q)
        </MathBlock>
      </Definition>

      <Theorem
        title="Midpoint Formula"
        proof={
          <>
            <p>Let <Math>P = (x_1, y_1)</Math> and <Math>Q = (x_2, y_2)</Math>.</p>
            <MathBlock>
              M = \frac{'{1}'}{'{2}'}(P + Q) = \frac{'{1}'}{'{2}'}(x_1 + x_2, y_1 + y_2) = \left(\frac{'{x_1 + x_2}'}{'{2}'}, \frac{'{y_1 + y_2}'}{'{2}'}\right)
            </MathBlock>
            <p className="mt-2">
              To verify <Math>M</Math> is equidistant from <Math>P</Math> and <Math>Q</Math>:
            </p>
            <MathBlock>
              M - P = \frac{'{1}'}{'{2}'}(P + Q) - P = \frac{'{1}'}{'{2}'}Q - \frac{'{1}'}{'{2}'}P = \frac{'{1}'}{'{2}'}(Q - P)
            </MathBlock>
            <MathBlock>
              Q - M = Q - \frac{'{1}'}{'{2}'}(P + Q) = \frac{'{1}'}{'{2}'}Q - \frac{'{1}'}{'{2}'}P = \frac{'{1}'}{'{2}'}(Q - P)
            </MathBlock>
            <p className="mt-2">
              Both displacements are <Math>\frac{'{1}'}{'{2}'}(Q - P)</Math>, confirming <Math>M</Math> is the midpoint.
            </p>
          </>
        }
      >
        <p>
          The midpoint of <Math>P = (x_1, y_1)</Math> and <Math>Q = (x_2, y_2)</Math> is:
        </p>
        <MathBlock>
          M = \left(\frac{'{x_1 + x_2}'}{'{2}'}, \frac{'{y_1 + y_2}'}{'{2}'}\right)
        </MathBlock>
      </Theorem>

      <Example title="Finding the Midpoint">
        <p>Find the midpoint of <Math>P = (2, 5)</Math> and <Math>Q = (8, 1)</Math>.</p>
        <MathBlock>
          M = \left(\frac{'{2 + 8}'}{'{2}'}, \frac{'{5 + 1}'}{'{2}'}\right) = \left(\frac{'{10}'}{'{2}'}, \frac{'{6}'}{'{2}'}\right) = (5, 3)
        </MathBlock>
      </Example>

      <MidpointExplorer />

      {/* Weighted Averages and Centroids */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Centroids and Weighted Averages</h2>

      <p className="text-dark-300 mb-4">
        The midpoint is an <em>average</em> of two points. We can extend this idea to three or more points.
      </p>

      <Definition title="Centroid of a Triangle">
        <p>
          The <strong>centroid</strong> of a triangle with vertices <Math>A</Math>, <Math>B</Math>, <Math>C</Math> is:
        </p>
        <MathBlock>
          G = \frac{'{1}'}{'{3}'}(A + B + C)
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The centroid is the "center of mass" or "balance point" of the triangle.
        </p>
      </Definition>

      <Theorem
        title="Centroid Formula"
        proof={
          <>
            <p>Let <Math>A = (a_1, a_2)</Math>, <Math>B = (b_1, b_2)</Math>, <Math>C = (c_1, c_2)</Math>.</p>
            <MathBlock>
              G = \frac{'{1}'}{'{3}'}(A + B + C) = \frac{'{1}'}{'{3}'}(a_1 + b_1 + c_1, a_2 + b_2 + c_2)
            </MathBlock>
            <MathBlock>
              = \left(\frac{'{a_1 + b_1 + c_1}'}{'{3}'}, \frac{'{a_2 + b_2 + c_2}'}{'{3}'}\right)
            </MathBlock>
            <p className="mt-2">
              This is the average of the three vertices' coordinates.
            </p>
          </>
        }
      >
        <p>
          For a triangle with vertices <Math>(x_1, y_1)</Math>, <Math>(x_2, y_2)</Math>, <Math>(x_3, y_3)</Math>:
        </p>
        <MathBlock>
          G = \left(\frac{'{x_1 + x_2 + x_3}'}{'{3}'}, \frac{'{y_1 + y_2 + y_3}'}{'{3}'}\right)
        </MathBlock>
      </Theorem>

      <Example title="Finding the Centroid">
        <p>Find the centroid of the triangle with vertices <Math>A = (0, 0)</Math>, <Math>B = (6, 0)</Math>, <Math>C = (3, 6)</Math>.</p>
        <MathBlock>
          G = \left(\frac{'{0 + 6 + 3}'}{'{3}'}, \frac{'{0 + 0 + 6}'}{'{3}'}\right) = \left(\frac{'{9}'}{'{3}'}, \frac{'{6}'}{'{3}'}\right) = (3, 2)
        </MathBlock>
      </Example>

      <CentroidDemo />

      <Theorem
        title="Centroid Lies on Medians"
        proof={
          <>
            <p>A <em>median</em> connects a vertex to the midpoint of the opposite side.</p>
            <p className="mt-2">Consider the median from <Math>A</Math> to the midpoint <Math>M</Math> of <Math>BC</Math>:</p>
            <MathBlock>M = \frac{'{1}'}{'{2}'}(B + C)</MathBlock>
            <p className="mt-2">A point on segment <Math>AM</Math> can be written as <Math>A + t(M - A)</Math> for <Math>t \in [0, 1]</Math>.</p>
            <p className="mt-2">At <Math>t = \frac{'{2}'}{'{3}'}</Math>:</p>
            <MathBlock>
              A + \frac{'{2}'}{'{3}'}(M - A) = A + \frac{'{2}'}{'{3}'}\left(\frac{'{1}'}{'{2}'}(B + C) - A\right)
            </MathBlock>
            <MathBlock>
              = A + \frac{'{1}'}{'{3}'}(B + C) - \frac{'{2}'}{'{3}'}A = \frac{'{1}'}{'{3}'}A + \frac{'{1}'}{'{3}'}B + \frac{'{1}'}{'{3}'}C = G
            </MathBlock>
            <p className="mt-2">So <Math>G</Math> lies on the median from <Math>A</Math>, at <Math>\frac{'{2}'}{'{3}'}</Math> of the way from <Math>A</Math> to <Math>M</Math>.</p>
            <p className="mt-2">By symmetry, <Math>G</Math> lies on all three medians.</p>
          </>
        }
      >
        <p>
          The centroid lies on all three medians of a triangle, dividing each median in the ratio <Math>2:1</Math>
          from vertex to midpoint.
        </p>
      </Theorem>

      {/* General Weighted Averages */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Weighted Averages</h2>

      <Definition title="Weighted Average of Points">
        <p>
          Given points <Math>P_1, P_2, \ldots, P_n</Math> with weights <Math>w_1, w_2, \ldots, w_n</Math>
          (where <Math>w_1 + w_2 + \cdots + w_n = 1</Math>), the <strong>weighted average</strong> is:
        </p>
        <MathBlock>
          w_1 P_1 + w_2 P_2 + \cdots + w_n P_n
        </MathBlock>
      </Definition>

      <Example title="Weighted Average">
        <p>Find the point that is <Math>\frac{'{2}'}{'{3}'}</Math> of the way from <Math>A = (1, 2)</Math> to <Math>B = (7, 5)</Math>.</p>
        <div className="mt-3 text-dark-300">
          <p>This point gives weight <Math>\frac{'{1}'}{'{3}'}</Math> to <Math>A</Math> and <Math>\frac{'{2}'}{'{3}'}</Math> to <Math>B</Math>:</p>
          <MathBlock>
            P = \frac{'{1}'}{'{3}'}A + \frac{'{2}'}{'{3}'}B = \frac{'{1}'}{'{3}'}(1, 2) + \frac{'{2}'}{'{3}'}(7, 5)
          </MathBlock>
          <MathBlock>
            = \left(\frac{'{1}'}{'{3}'} + \frac{'{14}'}{'{3}'}, \frac{'{2}'}{'{3}'} + \frac{'{10}'}{'{3}'}\right) = \left(\frac{'{15}'}{'{3}'}, \frac{'{12}'}{'{3}'}\right) = (5, 4)
          </MathBlock>
        </div>
      </Example>

      <Callout type="info" title="Alternative Formula">
        <p>
          The point <Math>t</Math> of the way from <Math>A</Math> to <Math>B</Math> can also be written as:
        </p>
        <MathBlock>
          A + t(B - A) = (1 - t)A + tB
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Both expressions give the same result.
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
            <span><strong>Parallelogram Law:</strong> <Math>O, P, P+Q, Q</Math> form a parallelogram</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Commutativity (<Math>P + Q = Q + P</Math>) follows from parallelogram symmetry</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Midpoint:</strong> <Math>M = \frac{'{1}'}{'{2}'}(P + Q) = \left(\frac{'{x_1+x_2}'}{'{2}'}, \frac{'{y_1+y_2}'}{'{2}'}\right)</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Centroid:</strong> <Math>G = \frac{'{1}'}{'{3}'}(A + B + C)</Math> — the average of triangle vertices</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span>Weighted averages give points between (or beyond) given points</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={28} sectionTitle="The Parallelogram Law" questions={section28Questions} />
    </LessonLayout>
  );
}
