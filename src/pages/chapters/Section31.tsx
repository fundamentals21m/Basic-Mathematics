import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section31Questions } from '../../data/quizzes';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        We've studied parallel lines—lines with the same direction. Now we turn to
        <strong> perpendicular lines</strong>: lines that meet at right angles. The algebraic
        condition for perpendicularity is elegant and leads to many practical applications.
      </p>

      {/* Perpendicular Vectors */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Perpendicular Vectors</h2>

      <Definition title="Perpendicular Vectors">
        <p>
          Two vectors <Math>\mathbf{'{u}'} = (a, b)</Math> and <Math>\mathbf{'{v}'} = (c, d)</Math> are
          <strong> perpendicular</strong> (or <em>orthogonal</em>) if their <strong>dot product</strong> is zero:
        </p>
        <MathBlock>
          \mathbf{'{u}'} \cdot \mathbf{'{v}'} = ac + bd = 0
        </MathBlock>
      </Definition>

      <Example title="Perpendicular Vectors">
        <p>Are <Math>\mathbf{'{u}'} = (3, 2)</Math> and <Math>\mathbf{'{v}'} = (2, -3)</Math> perpendicular?</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            \mathbf{'{u}'} \cdot \mathbf{'{v}'} = (3)(2) + (2)(-3) = 6 - 6 = 0
          </MathBlock>
          <p className="mt-2">Yes! The dot product is zero, so they are perpendicular.</p>
        </div>
      </Example>

      <Theorem
        title="Perpendicular Direction Pattern"
        proof={
          <>
            <p>Let <Math>\mathbf{'{u}'} = (a, b)</Math>. We seek <Math>\mathbf{'{v}'} = (c, d)</Math> with <Math>\mathbf{'{u}'} \cdot \mathbf{'{v}'} = 0</Math>.</p>
            <MathBlock>ac + bd = 0</MathBlock>
            <p className="mt-2">One solution: set <Math>c = -b</Math> and <Math>d = a</Math>.</p>
            <MathBlock>a(-b) + b(a) = -ab + ab = 0 \quad \checkmark</MathBlock>
            <p className="mt-2">Another solution: <Math>c = b</Math> and <Math>d = -a</Math>.</p>
            <MathBlock>a(b) + b(-a) = ab - ab = 0 \quad \checkmark</MathBlock>
          </>
        }
      >
        <p>
          If <Math>(a, b)</Math> is a direction vector, then <Math>(-b, a)</Math> and <Math>(b, -a)</Math> are
          perpendicular to it.
        </p>
        <p className="mt-2 text-dark-400">
          To get a perpendicular direction: swap the components and negate one.
        </p>
      </Theorem>

      <Example title="Finding a Perpendicular Vector">
        <p>Find a vector perpendicular to <Math>(4, 7)</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Using the pattern: swap and negate one component.</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Option 1: <Math>(-7, 4)</Math></li>
            <li>Option 2: <Math>(7, -4)</Math></li>
          </ul>
          <p className="mt-2">Let's verify: <Math>(4)(−7) + (7)(4) = −28 + 28 = 0</Math> ✓</p>
        </div>
      </Example>

      {/* Perpendicular Lines */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Perpendicular Lines</h2>

      <Definition title="Perpendicular Lines">
        <p>
          Two lines are <strong>perpendicular</strong> if their direction vectors are perpendicular.
        </p>
      </Definition>

      <Theorem title="Perpendicular Lines and Slopes">
        <p>
          Two non-vertical lines with slopes <Math>m_1</Math> and <Math>m_2</Math> are perpendicular if and only if:
        </p>
        <MathBlock>
          m_1 \cdot m_2 = -1
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Equivalently: <Math>m_2 = -\frac{'{1}'}{'{m_1}'}</Math> (negative reciprocal).
        </p>
      </Theorem>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6 mt-4">
        <h4 className="font-semibold text-dark-200 mb-3">Why Negative Reciprocals?</h4>
        <div className="text-dark-300 space-y-2 text-sm">
          <p>If line 1 has direction <Math>(d_1, d_2)</Math> and slope <Math>m_1 = \frac{'{d_2}'}{'{d_1}'}</Math>.</p>
          <p>A perpendicular direction is <Math>(-d_2, d_1)</Math>, with slope:</p>
          <MathBlock>
            m_2 = \frac{'{d_1}'}{'{-d_2}'} = -\frac{'{1}'}{'{m_1}'}
          </MathBlock>
        </div>
      </div>

      <Example title="Checking Perpendicularity">
        <p>Are the lines <Math>y = 3x + 1</Math> and <Math>y = -\frac{'{1}'}{'{3}'}x + 5</Math> perpendicular?</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Slopes: <Math>m_1 = 3</Math> and <Math>m_2 = -\frac{'{1}'}{'{3}'}</Math>.</p>
          <MathBlock>
            m_1 \cdot m_2 = 3 \cdot \left(-\frac{'{1}'}{'{3}'}\right) = -1
          </MathBlock>
          <p className="mt-2">Yes, they are perpendicular!</p>
        </div>
      </Example>

      <Callout type="warning" title="Vertical and Horizontal Lines">
        <p>
          A vertical line (<Math>x = c</Math>) and a horizontal line (<Math>y = c</Math>) are perpendicular,
          but the "negative reciprocal" rule doesn't apply since vertical lines have undefined slope.
        </p>
      </Callout>

      {/* Finding Perpendicular Lines */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Finding Perpendicular Lines</h2>

      <Example title="Line Perpendicular Through a Point">
        <p>Find the line through <Math>(2, 5)</Math> perpendicular to <Math>y = 4x - 3</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Step 1:</strong> Find the perpendicular slope.</p>
          <p className="ml-4">Original slope: <Math>m_1 = 4</Math></p>
          <p className="ml-4">Perpendicular slope: <Math>m_2 = -\frac{'{1}'}{'{4}'}</Math></p>
          <p className="mt-2"><strong>Step 2:</strong> Use point-slope form with <Math>(2, 5)</Math>.</p>
          <MathBlock>
            y - 5 = -\frac{'{1}'}{'{4}'}(x - 2)
          </MathBlock>
          <MathBlock>
            y = -\frac{'{1}'}{'{4}'}x + \frac{'{1}'}{'{2}'} + 5 = -\frac{'{1}'}{'{4}'}x + \frac{'{11}'}{'{2}'}
          </MathBlock>
        </div>
      </Example>

      {/* Distance from Point to Line */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Distance from Point to Line</h2>

      <p className="text-dark-300 mb-4">
        A powerful application of perpendicularity: finding the shortest distance from a point to a line.
      </p>

      <Theorem
        title="Distance Formula"
        proof={
          <>
            <p>The perpendicular from point <Math>P = (x_0, y_0)</Math> to line <Math>Ax + By = C</Math> has length:</p>
            <MathBlock>
              d = \frac{'{|Ax_0 + By_0 - C|}'}{'{\\sqrt{A^2 + B^2}}'}
            </MathBlock>
            <p className="mt-2">
              The numerator measures how far <Math>P</Math> is from satisfying the line equation.
              The denominator normalizes by the line's direction magnitude.
            </p>
          </>
        }
      >
        <p>
          The distance from point <Math>(x_0, y_0)</Math> to line <Math>Ax + By = C</Math> is:
        </p>
        <MathBlock>
          d = \frac{'{|Ax_0 + By_0 - C|}'}{'{\\sqrt{A^2 + B^2}}'}
        </MathBlock>
      </Theorem>

      <Example title="Distance to a Line">
        <p>Find the distance from <Math>P = (3, 1)</Math> to the line <Math>4x + 3y = 10</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Using the formula with <Math>A = 4</Math>, <Math>B = 3</Math>, <Math>C = 10</Math>:</p>
          <MathBlock>
            d = \frac{'{|4(3) + 3(1) - 10|}'}{'{\\sqrt{4^2 + 3^2}}'} = \frac{'{|12 + 3 - 10|}'}{'{\\sqrt{16 + 9}}'} = \frac{'{|5|}'}{'{\\sqrt{25}}'} = \frac{'{5}'}{'{5}'} = 1
          </MathBlock>
        </div>
      </Example>

      {/* Perpendicular Bisector */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Perpendicular Bisector</h2>

      <Definition title="Perpendicular Bisector">
        <p>
          The <strong>perpendicular bisector</strong> of segment <Math>\overline{'{AB}'}</Math> is the line that:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-dark-300">
          <li>Passes through the midpoint of <Math>\overline{'{AB}'}</Math></li>
          <li>Is perpendicular to <Math>\overline{'{AB}'}</Math></li>
        </ol>
      </Definition>

      <Theorem title="Perpendicular Bisector Property">
        <p>
          A point lies on the perpendicular bisector of <Math>\overline{'{AB}'}</Math> if and only if it is
          equidistant from <Math>A</Math> and <Math>B</Math>.
        </p>
      </Theorem>

      <Example title="Finding the Perpendicular Bisector">
        <p>Find the perpendicular bisector of the segment from <Math>A = (1, 3)</Math> to <Math>B = (5, 7)</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Step 1:</strong> Find the midpoint.</p>
          <MathBlock>
            M = \left(\frac{'{1 + 5}'}{'{2}'}, \frac{'{3 + 7}'}{'{2}'}\right) = (3, 5)
          </MathBlock>
          <p className="mt-2"><strong>Step 2:</strong> Find the slope of <Math>\overline{'{AB}'}</Math>.</p>
          <MathBlock>
            m_{'{AB}'} = \frac{'{7 - 3}'}{'{5 - 1}'} = \frac{'{4}'}{'{4}'} = 1
          </MathBlock>
          <p className="mt-2"><strong>Step 3:</strong> Find the perpendicular slope.</p>
          <p className="ml-4"><Math>m_\perp = -\frac{'{1}'}{'{1}'} = -1</Math></p>
          <p className="mt-2"><strong>Step 4:</strong> Write the line through <Math>M</Math> with slope <Math>-1</Math>.</p>
          <MathBlock>
            y - 5 = -1(x - 3)
          </MathBlock>
          <MathBlock>
            y = -x + 8
          </MathBlock>
        </div>
      </Example>

      {/* Angle Between Lines */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Angle Between Lines</h2>

      <Theorem title="Angle Formula">
        <p>
          If two lines have slopes <Math>m_1</Math> and <Math>m_2</Math>, the acute angle <Math>\theta</Math> between them satisfies:
        </p>
        <MathBlock>
          \tan \theta = \left| \frac{'{m_1 - m_2}'}{'{1 + m_1 m_2}'} \right|
        </MathBlock>
        <p className="mt-2 text-dark-400">
          When <Math>m_1 m_2 = -1</Math>, the denominator is zero, giving <Math>\theta = 90°</Math>.
        </p>
      </Theorem>

      <Example title="Finding the Angle">
        <p>Find the acute angle between <Math>y = 2x + 1</Math> and <Math>y = \frac{'{1}'}{'{2}'}x - 3</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Slopes: <Math>m_1 = 2</Math>, <Math>m_2 = \frac{'{1}'}{'{2}'}</Math></p>
          <MathBlock>
            \tan \theta = \left| \frac{'{2 - \\frac{1}{2}}'}{'{1 + 2 \\cdot \\frac{1}{2}}'} \right| = \left| \frac{'{\\frac{3}{2}}'}{'{1 + 1}'} \right| = \left| \frac{'{\\frac{3}{2}}'}{'{2}'} \right| = \frac{'{3}'}{'{4}'}
          </MathBlock>
          <p className="mt-2">So <Math>\theta = \arctan\left(\frac{'{3}'}{'{4}'}\right) \approx 36.87°</Math></p>
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
            <span><strong>Perpendicular vectors:</strong> <Math>(a, b) \perp (c, d)</Math> iff <Math>ac + bd = 0</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>To get a perpendicular direction: <Math>(a, b) \to (-b, a)</Math> or <Math>(b, -a)</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Perpendicular lines:</strong> <Math>m_1 \cdot m_2 = -1</Math> (negative reciprocal slopes)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Distance to line:</strong> <Math>d = \frac{'{|Ax_0 + By_0 - C|}'}{'{\\sqrt{A^2 + B^2}}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Perpendicular bisector</strong> passes through midpoint, perpendicular to segment</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={31} sectionTitle="Perpendicularity" questions={section31Questions} />
    </LessonLayout>
  );
}
