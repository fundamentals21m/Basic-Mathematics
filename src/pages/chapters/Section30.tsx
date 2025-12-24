import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section30Questions } from '../../data/quizzes';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        In the previous section, we parameterized segments and rays. Now we extend these ideas to
        <strong> lines</strong>—objects that extend infinitely in both directions. We'll see that
        lines have a beautiful algebraic description using parametric equations.
      </p>

      {/* Parametric Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Parametric Equation of a Line</h2>

      <Definition title="Line Through Two Points">
        <p>
          The <strong>line</strong> through points <Math>P</Math> and <Math>Q</Math> (where <Math>P \neq Q</Math>)
          is the set of all points of the form:
        </p>
        <MathBlock>
          P + t(Q - P) \quad \text{'{where }'} t \in \mathbb{'{R}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This is called the <em>parametric form</em> of the line.
        </p>
      </Definition>

      <Callout type="info" title="Segments, Rays, and Lines">
        <p>
          The same formula <Math>P + t(Q - P)</Math> describes:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Segment:</strong> <Math>t \in [0, 1]</Math></li>
          <li><strong>Ray from P through Q:</strong> <Math>t \geq 0</Math></li>
          <li><strong>Line:</strong> <Math>t \in \mathbb{'{R}'}</Math> (all real numbers)</li>
        </ul>
      </Callout>

      <Example title="Parametric Form of a Line">
        <p>Find the parametric form of the line through <Math>P = (1, 2)</Math> and <Math>Q = (4, 6)</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>First, compute the direction: <Math>Q - P = (4 - 1, 6 - 2) = (3, 4)</Math>.</p>
          <p className="mt-2">The line is:</p>
          <MathBlock>
            (x, y) = (1, 2) + t(3, 4) = (1 + 3t, 2 + 4t)
          </MathBlock>
          <p className="mt-2">Some points on this line:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><Math>t = 0</Math>: <Math>(1, 2) = P</Math></li>
            <li><Math>t = 1</Math>: <Math>(4, 6) = Q</Math></li>
            <li><Math>t = -1</Math>: <Math>(-2, -2)</Math></li>
            <li><Math>t = 2</Math>: <Math>(7, 10)</Math></li>
          </ul>
        </div>
      </Example>

      {/* Direction Vector */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Direction Vectors</h2>

      <Definition title="Direction Vector">
        <p>
          A <strong>direction vector</strong> of a line is any nonzero vector parallel to the line.
          For the line through <Math>P</Math> and <Math>Q</Math>, the vector <Math>Q - P</Math> is a direction vector.
        </p>
      </Definition>

      <Theorem title="Equivalent Direction Vectors">
        <p>
          If <Math>\mathbf{'{d}'}</Math> is a direction vector for a line, then <Math>c\mathbf{'{d}'}</Math> is also
          a direction vector for any nonzero scalar <Math>c</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          Scaling a direction vector doesn't change which line it describes.
        </p>
      </Theorem>

      <Example title="Different Parameterizations">
        <p>The line through <Math>P = (0, 0)</Math> and <Math>Q = (2, 3)</Math> can be parameterized as:</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Using <Math>Q - P = (2, 3)</Math>:</strong></p>
          <MathBlock>(x, y) = (0, 0) + t(2, 3) = (2t, 3t)</MathBlock>
          <p className="mt-3"><strong>Using <Math>2(Q - P) = (4, 6)</Math>:</strong></p>
          <MathBlock>(x, y) = (0, 0) + s(4, 6) = (4s, 6s)</MathBlock>
          <p className="mt-3">Both describe the same line! Setting <Math>t = 2s</Math> shows they're equivalent.</p>
        </div>
      </Example>

      {/* Standard Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Standard Form of a Line</h2>

      <p className="text-dark-300 mb-4">
        The parametric form <Math>(x, y) = (a + td_1, b + td_2)</Math> can be converted to a single equation
        in <Math>x</Math> and <Math>y</Math> by eliminating <Math>t</Math>.
      </p>

      <Theorem
        title="Standard Form"
        proof={
          <>
            <p>From the parametric form:</p>
            <MathBlock>
              x = a + td_1, \quad y = b + td_2
            </MathBlock>
            <p className="mt-2">Solving for <Math>t</Math> from each equation (assuming <Math>d_1, d_2 \neq 0</Math>):</p>
            <MathBlock>
              t = \frac{'{x - a}'}{'{d_1}'}, \quad t = \frac{'{y - b}'}{'{d_2}'}
            </MathBlock>
            <p className="mt-2">Since both equal <Math>t</Math>:</p>
            <MathBlock>
              \frac{'{x - a}'}{'{d_1}'} = \frac{'{y - b}'}{'{d_2}'}
            </MathBlock>
            <p className="mt-2">Cross-multiplying:</p>
            <MathBlock>
              d_2(x - a) = d_1(y - b)
            </MathBlock>
            <MathBlock>
              d_2 x - d_1 y = d_2 a - d_1 b
            </MathBlock>
            <p className="mt-2">This has the form <Math>Ax + By = C</Math>.</p>
          </>
        }
      >
        <p>
          Every line can be written in <strong>standard form</strong>:
        </p>
        <MathBlock>
          Ax + By = C
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>A</Math> and <Math>B</Math> are not both zero.
        </p>
      </Theorem>

      <Example title="Converting to Standard Form">
        <p>Convert the line through <Math>P = (1, 2)</Math> with direction <Math>(3, 4)</Math> to standard form.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Parametric form: <Math>(x, y) = (1 + 3t, 2 + 4t)</Math></p>
          <p className="mt-2">Using the formula <Math>d_2(x - a) = d_1(y - b)</Math>:</p>
          <MathBlock>
            4(x - 1) = 3(y - 2)
          </MathBlock>
          <MathBlock>
            4x - 4 = 3y - 6
          </MathBlock>
          <MathBlock>
            4x - 3y = -2
          </MathBlock>
        </div>
      </Example>

      {/* Slope-Intercept Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Slope-Intercept Form</h2>

      <Definition title="Slope">
        <p>
          For a non-vertical line, the <strong>slope</strong> is:
        </p>
        <MathBlock>
          m = \frac{'{\\text{rise}}'}{'{\\text{run}}'} = \frac{'{y_2 - y_1}'}{'{x_2 - x_1}'} = \frac{'{d_2}'}{'{d_1}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>(d_1, d_2)</Math> is any direction vector.
        </p>
      </Definition>

      <Theorem title="Slope-Intercept Form">
        <p>
          A non-vertical line with slope <Math>m</Math> and <Math>y</Math>-intercept <Math>b</Math> has equation:
        </p>
        <MathBlock>
          y = mx + b
        </MathBlock>
      </Theorem>

      <Example title="Finding Slope and Intercept">
        <p>Find the slope-intercept form for the line through <Math>(1, 3)</Math> and <Math>(4, 9)</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Step 1:</strong> Find the slope.</p>
          <MathBlock>
            m = \frac{'{9 - 3}'}{'{4 - 1}'} = \frac{'{6}'}{'{3}'} = 2
          </MathBlock>
          <p className="mt-2"><strong>Step 2:</strong> Use point-slope form with <Math>(1, 3)</Math>.</p>
          <MathBlock>
            y - 3 = 2(x - 1)
          </MathBlock>
          <MathBlock>
            y = 2x - 2 + 3 = 2x + 1
          </MathBlock>
          <p className="mt-2">The line has slope <Math>m = 2</Math> and <Math>y</Math>-intercept <Math>b = 1</Math>.</p>
        </div>
      </Example>

      {/* Horizontal and Vertical Lines */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Horizontal and Vertical Lines</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <h4 className="font-semibold text-dark-200 mb-3">Horizontal Lines</h4>
          <p className="text-dark-300 text-sm">
            Direction vector: <Math>(1, 0)</Math>
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Equation: <Math>y = c</Math> (constant)
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Slope: <Math>m = 0</Math>
          </p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <h4 className="font-semibold text-dark-200 mb-3">Vertical Lines</h4>
          <p className="text-dark-300 text-sm">
            Direction vector: <Math>(0, 1)</Math>
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Equation: <Math>x = c</Math> (constant)
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Slope: <em>undefined</em>
          </p>
        </div>
      </div>

      <Callout type="warning" title="Vertical Lines">
        <p>
          Vertical lines cannot be written in slope-intercept form <Math>y = mx + b</Math> because
          their slope is undefined. Use the form <Math>x = c</Math> instead.
        </p>
      </Callout>

      {/* Parallel Lines */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Parallel Lines</h2>

      <Theorem title="Parallel Lines Criterion">
        <p>
          Two lines are <strong>parallel</strong> if and only if they have the same direction vector
          (up to a scalar multiple), or equivalently, the same slope.
        </p>
        <p className="mt-2 text-dark-400">
          Lines <Math>y = m_1 x + b_1</Math> and <Math>y = m_2 x + b_2</Math> are parallel if and only if <Math>m_1 = m_2</Math>.
        </p>
      </Theorem>

      <Example title="Finding Parallel Lines">
        <p>Find the equation of the line through <Math>(2, 5)</Math> parallel to <Math>y = 3x + 1</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>The given line has slope <Math>m = 3</Math>.</p>
          <p className="mt-2">A parallel line also has slope 3. Using point-slope form:</p>
          <MathBlock>
            y - 5 = 3(x - 2)
          </MathBlock>
          <MathBlock>
            y = 3x - 6 + 5 = 3x - 1
          </MathBlock>
        </div>
      </Example>

      {/* Point-Slope Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Point-Slope Form</h2>

      <Theorem title="Point-Slope Form">
        <p>
          The line through point <Math>(x_0, y_0)</Math> with slope <Math>m</Math> has equation:
        </p>
        <MathBlock>
          y - y_0 = m(x - x_0)
        </MathBlock>
      </Theorem>

      <Example title="Using Point-Slope Form">
        <p>Write the equation of the line through <Math>(-1, 4)</Math> with slope <Math>-2</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            y - 4 = -2(x - (-1)) = -2(x + 1)
          </MathBlock>
          <MathBlock>
            y = -2x - 2 + 4 = -2x + 2
          </MathBlock>
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
            <span><strong>Parametric form:</strong> <Math>(x, y) = P + t \cdot \mathbf{'{d}'}</Math> for <Math>t \in \mathbb{'{R}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Standard form:</strong> <Math>Ax + By = C</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Slope-intercept form:</strong> <Math>y = mx + b</Math> (non-vertical lines)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Point-slope form:</strong> <Math>y - y_0 = m(x - x_0)</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Parallel lines</strong> have the same slope (or direction)</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={30} sectionTitle="Lines" questions={section30Questions} />
    </LessonLayout>
  );
}
