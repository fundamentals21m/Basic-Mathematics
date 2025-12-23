import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section27Questions } from '../../data/quizzes';
import { PointAdditionExplorer, PointSubtractionDemo, VectorOperationsDemo } from '../../components/visualizations';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Having learned how to scale points (dilations) in the previous section, we now introduce
        <strong> addition</strong> and <strong>subtraction</strong> of points. These operations give
        the plane a rich algebraic structure similar to vectors.
      </p>

      {/* Point Addition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Adding Points</h2>

      <Definition title="Point Addition">
        <p>
          Given two points <Math>P = (x_1, y_1)</Math> and <Math>Q = (x_2, y_2)</Math>, their
          <strong> sum</strong> is:
        </p>
        <MathBlock>
          P + Q = (x_1 + x_2, y_1 + y_2)
        </MathBlock>
        <p className="mt-2 text-dark-400">
          We add corresponding coordinates.
        </p>
      </Definition>

      <Example title="Point Addition Examples">
        <div className="space-y-4 text-dark-300">
          <div>
            <p><strong>Example 1:</strong> Let <Math>P = (3, 2)</Math> and <Math>Q = (1, 4)</Math>.</p>
            <MathBlock>P + Q = (3 + 1, 2 + 4) = (4, 6)</MathBlock>
          </div>
          <div>
            <p><strong>Example 2:</strong> Let <Math>A = (-2, 5)</Math> and <Math>B = (4, -3)</Math>.</p>
            <MathBlock>A + B = (-2 + 4, 5 + (-3)) = (2, 2)</MathBlock>
          </div>
          <div>
            <p><strong>Example 3:</strong> Let <Math>P = (a, b)</Math> and <Math>O = (0, 0)</Math>.</p>
            <MathBlock>P + O = (a + 0, b + 0) = (a, b) = P</MathBlock>
            <p className="text-dark-400">The origin acts as an <em>identity element</em> for addition.</p>
          </div>
        </div>
      </Example>

      <PointAdditionExplorer />

      {/* Properties of Addition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Point Addition</h2>

      <Theorem
        title="Commutativity of Addition"
        proof={
          <>
            <p>Let <Math>P = (x_1, y_1)</Math> and <Math>Q = (x_2, y_2)</Math>.</p>
            <MathBlock>P + Q = (x_1 + x_2, y_1 + y_2)</MathBlock>
            <MathBlock>Q + P = (x_2 + x_1, y_2 + y_1)</MathBlock>
            <p className="mt-2">
              Since addition of real numbers is commutative (<Math>x_1 + x_2 = x_2 + x_1</Math>), we have:
            </p>
            <MathBlock>P + Q = Q + P</MathBlock>
          </>
        }
      >
        <p>
          For any points <Math>P</Math> and <Math>Q</Math>:
        </p>
        <MathBlock>P + Q = Q + P</MathBlock>
      </Theorem>

      <Theorem
        title="Associativity of Addition"
        proof={
          <>
            <p>Let <Math>P = (x_1, y_1)</Math>, <Math>Q = (x_2, y_2)</Math>, and <Math>R = (x_3, y_3)</Math>.</p>
            <p className="mt-2"><strong>Left side:</strong></p>
            <MathBlock>(P + Q) + R = (x_1 + x_2, y_1 + y_2) + (x_3, y_3) = ((x_1 + x_2) + x_3, (y_1 + y_2) + y_3)</MathBlock>
            <p className="mt-2"><strong>Right side:</strong></p>
            <MathBlock>P + (Q + R) = (x_1, y_1) + (x_2 + x_3, y_2 + y_3) = (x_1 + (x_2 + x_3), y_1 + (y_2 + y_3))</MathBlock>
            <p className="mt-2">
              By associativity of real number addition, both sides equal <Math>(x_1 + x_2 + x_3, y_1 + y_2 + y_3)</Math>.
            </p>
          </>
        }
      >
        <p>
          For any points <Math>P</Math>, <Math>Q</Math>, and <Math>R</Math>:
        </p>
        <MathBlock>(P + Q) + R = P + (Q + R)</MathBlock>
      </Theorem>

      <Theorem
        title="Identity Element"
        proof={
          <>
            <p>Let <Math>P = (x, y)</Math> and <Math>O = (0, 0)</Math>.</p>
            <MathBlock>P + O = (x + 0, y + 0) = (x, y) = P</MathBlock>
            <MathBlock>O + P = (0 + x, 0 + y) = (x, y) = P</MathBlock>
          </>
        }
      >
        <p>
          The origin <Math>O = (0, 0)</Math> is the <strong>identity element</strong> for point addition:
        </p>
        <MathBlock>P + O = O + P = P</MathBlock>
      </Theorem>

      {/* Subtraction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Subtracting Points</h2>

      <Definition title="Point Subtraction">
        <p>
          Given two points <Math>P = (x_1, y_1)</Math> and <Math>Q = (x_2, y_2)</Math>, their
          <strong> difference</strong> is:
        </p>
        <MathBlock>
          P - Q = (x_1 - x_2, y_1 - y_2)
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Equivalently, <Math>P - Q = P + (-Q)</Math> where <Math>-Q = (-x_2, -y_2)</Math>.
        </p>
      </Definition>

      <Example title="Point Subtraction Examples">
        <div className="space-y-4 text-dark-300">
          <div>
            <p><strong>Example 1:</strong> Let <Math>P = (5, 3)</Math> and <Math>Q = (2, 1)</Math>.</p>
            <MathBlock>P - Q = (5 - 2, 3 - 1) = (3, 2)</MathBlock>
          </div>
          <div>
            <p><strong>Example 2:</strong> Let <Math>A = (1, 4)</Math> and <Math>B = (3, -2)</Math>.</p>
            <MathBlock>A - B = (1 - 3, 4 - (-2)) = (-2, 6)</MathBlock>
          </div>
        </div>
      </Example>

      <Theorem
        title="Additive Inverse"
        proof={
          <>
            <p>Let <Math>P = (x, y)</Math>. Then <Math>-P = (-x, -y)</Math>.</p>
            <MathBlock>P + (-P) = (x + (-x), y + (-y)) = (0, 0) = O</MathBlock>
            <MathBlock>(-P) + P = ((-x) + x, (-y) + y) = (0, 0) = O</MathBlock>
          </>
        }
      >
        <p>
          Every point <Math>P</Math> has an <strong>additive inverse</strong> <Math>-P</Math> such that:
        </p>
        <MathBlock>P + (-P) = (-P) + P = O</MathBlock>
      </Theorem>

      <Callout type="info" title="Connection to Section 26">
        <p>
          Note that <Math>-P = (-1) \cdot P</Math>, so the additive inverse is the same as dilation by <Math>-1</Math>
          (reflection through the origin).
        </p>
      </Callout>

      <PointSubtractionDemo />

      {/* Geometric Interpretation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Geometric Interpretation</h2>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Thinking in Vectors</h4>
        <p className="text-dark-300 mb-3">
          A point <Math>P = (a, b)</Math> can be thought of as a <strong>displacement vector</strong> from
          the origin to <Math>P</Math>.
        </p>
        <ul className="space-y-2 text-dark-300">
          <li><strong>P + Q:</strong> Apply displacement <Math>P</Math>, then displacement <Math>Q</Math></li>
          <li><strong>P - Q:</strong> The displacement <em>from</em> <Math>Q</Math> <em>to</em> <Math>P</Math></li>
        </ul>
      </div>

      <Example title="Vector Interpretation">
        <div className="space-y-4 text-dark-300">
          <div>
            <p>
              If you're at point <Math>A = (1, 2)</Math> and want to reach <Math>B = (4, 5)</Math>,
              the displacement needed is:
            </p>
            <MathBlock>B - A = (4 - 1, 5 - 2) = (3, 3)</MathBlock>
            <p className="text-dark-400">
              Move 3 units right and 3 units up to get from <Math>A</Math> to <Math>B</Math>.
            </p>
          </div>
          <div className="mt-4">
            <p>
              Conversely, if you start at the origin and apply displacement <Math>(3, 3)</Math> starting
              from <Math>A</Math>:
            </p>
            <MathBlock>A + (3, 3) = (1 + 3, 2 + 3) = (4, 5) = B</MathBlock>
          </div>
        </div>
      </Example>

      <Theorem
        title="Subtraction as Vector"
        proof={
          <>
            <p>Let <Math>A</Math> and <Math>B</Math> be points. We want to show that <Math>A + (B - A) = B</Math>.</p>
            <p className="mt-2">Let <Math>A = (a_1, a_2)</Math> and <Math>B = (b_1, b_2)</Math>.</p>
            <MathBlock>B - A = (b_1 - a_1, b_2 - a_2)</MathBlock>
            <MathBlock>A + (B - A) = (a_1, a_2) + (b_1 - a_1, b_2 - a_2)</MathBlock>
            <MathBlock>= (a_1 + (b_1 - a_1), a_2 + (b_2 - a_2)) = (b_1, b_2) = B</MathBlock>
          </>
        }
      >
        <p>
          For any points <Math>A</Math> and <Math>B</Math>, the difference <Math>B - A</Math> is the
          vector that takes you from <Math>A</Math> to <Math>B</Math>:
        </p>
        <MathBlock>A + (B - A) = B</MathBlock>
      </Theorem>

      <VectorOperationsDemo />

      {/* Combining with Scalar Multiplication */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Combining with Scalar Multiplication</h2>

      <p className="text-dark-300 mb-4">
        Point addition interacts beautifully with scalar multiplication (dilation) from Section 26.
      </p>

      <Theorem
        title="Distributive Law"
        proof={
          <>
            <p>Let <Math>P = (x_1, y_1)</Math>, <Math>Q = (x_2, y_2)</Math>, and <Math>c</Math> be a scalar.</p>
            <p className="mt-2"><strong>Left side:</strong></p>
            <MathBlock>c(P + Q) = c(x_1 + x_2, y_1 + y_2) = (c(x_1 + x_2), c(y_1 + y_2))</MathBlock>
            <p className="mt-2"><strong>Right side:</strong></p>
            <MathBlock>cP + cQ = (cx_1, cy_1) + (cx_2, cy_2) = (cx_1 + cx_2, cy_1 + cy_2)</MathBlock>
            <p className="mt-2">
              By the distributive law for real numbers, <Math>c(x_1 + x_2) = cx_1 + cx_2</Math>,
              so both sides are equal.
            </p>
          </>
        }
      >
        <p>
          Scalar multiplication distributes over point addition:
        </p>
        <MathBlock>c(P + Q) = cP + cQ</MathBlock>
      </Theorem>

      <Theorem
        title="Scalar Addition"
        proof={
          <>
            <p>Let <Math>P = (x, y)</Math> and let <Math>a, b</Math> be scalars.</p>
            <p className="mt-2"><strong>Left side:</strong></p>
            <MathBlock>(a + b)P = ((a + b)x, (a + b)y)</MathBlock>
            <p className="mt-2"><strong>Right side:</strong></p>
            <MathBlock>aP + bP = (ax, ay) + (bx, by) = (ax + bx, ay + by)</MathBlock>
            <p className="mt-2">
              By the distributive law, <Math>(a + b)x = ax + bx</Math>, so both sides are equal.
            </p>
          </>
        }
      >
        <p>
          For scalars <Math>a, b</Math> and point <Math>P</Math>:
        </p>
        <MathBlock>(a + b)P = aP + bP</MathBlock>
      </Theorem>

      <Example title="Using Both Properties">
        <p>Simplify <Math>2(P + Q) - 3P + Q</Math> where <Math>P = (1, 2)</Math> and <Math>Q = (3, -1)</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Method 1 (Algebraic):</strong></p>
          <MathBlock>2(P + Q) - 3P + Q = 2P + 2Q - 3P + Q = -P + 3Q</MathBlock>
          <MathBlock>= -(1, 2) + 3(3, -1) = (-1, -2) + (9, -3) = (8, -5)</MathBlock>

          <p className="mt-4"><strong>Method 2 (Direct):</strong></p>
          <MathBlock>P + Q = (1, 2) + (3, -1) = (4, 1)</MathBlock>
          <MathBlock>2(P + Q) = (8, 2)</MathBlock>
          <MathBlock>2(P + Q) - 3P + Q = (8, 2) - 3(1, 2) + (3, -1)</MathBlock>
          <MathBlock>= (8, 2) + (-3, -6) + (3, -1) = (8, -5)</MathBlock>
        </div>
      </Example>

      {/* Translation Connection */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Connection to Translations</h2>

      <Callout type="info" title="Addition as Translation">
        <p>
          Adding a fixed point <Math>V</Math> to every point in the plane defines a <strong>translation</strong>:
        </p>
        <MathBlock>T_V(P) = P + V</MathBlock>
        <p className="mt-2">
          Every point moves by the same displacement <Math>V</Math>.
        </p>
      </Callout>

      <Example title="Translation Example">
        <p>
          Let <Math>V = (2, -3)</Math>. The translation <Math>T_V</Math> maps:
        </p>
        <div className="mt-3 text-dark-300 space-y-1">
          <p><Math>(0, 0) \to (0, 0) + (2, -3) = (2, -3)</Math></p>
          <p><Math>(1, 1) \to (1, 1) + (2, -3) = (3, -2)</Math></p>
          <p><Math>(4, 5) \to (4, 5) + (2, -3) = (6, 2)</Math></p>
        </div>
        <p className="mt-3 text-dark-400">
          Every point shifts 2 units right and 3 units down.
        </p>
      </Example>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Addition:</strong> <Math>P + Q = (x_1 + x_2, y_1 + y_2)</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Subtraction:</strong> <Math>P - Q = (x_1 - x_2, y_1 - y_2)</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Addition is <strong>commutative</strong> and <strong>associative</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>The origin <Math>O</Math> is the <strong>identity</strong>; <Math>-P</Math> is the <strong>inverse</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><Math>B - A</Math> is the <strong>displacement from A to B</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">6</span>
            </span>
            <span><strong>Distributive:</strong> <Math>c(P + Q) = cP + cQ</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={27} sectionTitle="Addition and Subtraction of Points" questions={section27Questions} />
    </LessonLayout>
  );
}
