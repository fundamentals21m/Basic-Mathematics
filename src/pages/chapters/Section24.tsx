import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section24Questions } from '../../data/quizzes';
import { DistanceFormulaDemo, DistanceCalculator, PythagorasConnection } from '../../components/visualizations';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        One of the most fundamental questions in coordinate geometry is: what is the distance
        between two points? The answer comes from an elegant application of the Pythagorean
        theorem, giving us a formula that bridges algebra and geometry.
      </p>

      {/* Horizontal and Vertical Distances */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Simple Distances</h2>

      <p className="text-dark-300 mb-4">
        Before tackling the general case, let's consider the simple cases where points
        are aligned horizontally or vertically.
      </p>

      <Theorem title="Horizontal Distance">
        <p>
          For two points with the <strong>same y-coordinate</strong>, <Math>(x_1, y)</Math> and <Math>(x_2, y)</Math>:
        </p>
        <MathBlock>
          {`\\text{distance} = |x_2 - x_1|`}
        </MathBlock>
      </Theorem>

      <Theorem title="Vertical Distance">
        <p>
          For two points with the <strong>same x-coordinate</strong>, <Math>(x, y_1)</Math> and <Math>(x, y_2)</Math>:
        </p>
        <MathBlock>
          {`\\text{distance} = |y_2 - y_1|`}
        </MathBlock>
      </Theorem>

      <Example title="Aligned Points">
        <div className="space-y-3 text-dark-300">
          <p>
            <strong>Horizontal:</strong> Distance from <Math>(2, 5)</Math> to <Math>(8, 5)</Math>
          </p>
          <MathBlock>
            d = |8 - 2| = 6
          </MathBlock>
          <p>
            <strong>Vertical:</strong> Distance from <Math>(3, 1)</Math> to <Math>(3, 7)</Math>
          </p>
          <MathBlock>
            d = |7 - 1| = 6
          </MathBlock>
        </div>
      </Example>

      {/* Derivation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Distance Formula</h2>

      <p className="text-dark-300 mb-4">
        What if the two points are neither on the same horizontal nor vertical line?
        We use the Pythagorean theorem by constructing a right triangle.
      </p>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Deriving the Formula</h4>
        <p className="text-dark-300 mb-3">
          Given points <Math>P_1(x_1, y_1)</Math> and <Math>P_2(x_2, y_2)</Math>:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Draw a horizontal line through <Math>P_1</Math> and a vertical line through <Math>P_2</Math></li>
          <li>These lines meet at point <Math>Q(x_2, y_1)</Math></li>
          <li>Triangle <Math>P_1QP_2</Math> is a right triangle with the right angle at <Math>Q</Math></li>
          <li>The legs have lengths <Math>|x_2 - x_1|</Math> and <Math>|y_2 - y_1|</Math></li>
          <li>By the Pythagorean theorem, the hypotenuse (distance) satisfies <Math>d^2 = (\Delta x)^2 + (\Delta y)^2</Math></li>
        </ol>
      </div>

      <PythagorasConnection />

      <Definition title="The Distance Formula">
        <p>
          The distance <Math>d</Math> between points <Math>(x_1, y_1)</Math> and <Math>(x_2, y_2)</Math> is:
        </p>
        <MathBlock>
          d = \sqrt{'{(x_2 - x_1)^2 + (y_2 - y_1)^2}'}
        </MathBlock>
      </Definition>

      <Callout type="info" title="Order Doesn't Matter">
        <p>
          Since we square the differences, it doesn't matter which point we call <Math>(x_1, y_1)</Math>:
        </p>
        <MathBlock>
          (x_2 - x_1)^2 = (x_1 - x_2)^2
        </MathBlock>
        <p className="mt-2">
          The distance from <Math>A</Math> to <Math>B</Math> equals the distance from <Math>B</Math> to <Math>A</Math>.
        </p>
      </Callout>

      <DistanceFormulaDemo />

      {/* Examples */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Computing Distances</h2>

      <Example title="Distance Between Two Points">
        <p>Find the distance from <Math>A(1, 2)</Math> to <Math>B(4, 6)</Math>.</p>
        <div className="mt-3 text-dark-300">
          <MathBlock>
            {`d = \\sqrt{(4-1)^2 + (6-2)^2}`}
          </MathBlock>
          <MathBlock>
            {`= \\sqrt{3^2 + 4^2}`}
          </MathBlock>
          <MathBlock>
            {`= \\sqrt{9 + 16}`}
          </MathBlock>
          <MathBlock>
            {`= \\sqrt{25} = 5`}
          </MathBlock>
        </div>
      </Example>

      <Callout type="info" title="3-4-5 Triangle!">
        <p>
          The example above gives the famous 3-4-5 right triangle. When the horizontal
          and vertical distances are 3 and 4, the diagonal distance is 5.
        </p>
      </Callout>

      <Example title="With Negative Coordinates">
        <p>Find the distance from <Math>P(-2, 3)</Math> to <Math>Q(4, -1)</Math>.</p>
        <div className="mt-3 text-dark-300">
          <MathBlock>
            {`d = \\sqrt{(4-(-2))^2 + ((-1)-3)^2}`}
          </MathBlock>
          <MathBlock>
            {`= \\sqrt{6^2 + (-4)^2}`}
          </MathBlock>
          <MathBlock>
            {`= \\sqrt{36 + 16}`}
          </MathBlock>
          <MathBlock>
            {`= \\sqrt{52} = \\sqrt{4 \\cdot 13} = 2\\sqrt{13}`}
          </MathBlock>
        </div>
      </Example>

      <Example title="Leaving the Answer as a Radical">
        <p>Find the distance from <Math>(0, 0)</Math> to <Math>(1, 1)</Math>.</p>
        <div className="mt-3 text-dark-300">
          <MathBlock>
            {`d = \\sqrt{1^2 + 1^2} = \\sqrt{2}`}
          </MathBlock>
          <p className="mt-2">
            This is the diagonal of a unit square. We leave the answer as <Math>\sqrt{'{2}'}</Math> rather
            than using a decimal approximation like 1.414...
          </p>
        </div>
      </Example>

      <DistanceCalculator />

      {/* Distance from Origin */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Distance from the Origin</h2>

      <Theorem title="Distance from Origin">
        <p>
          The distance from the origin <Math>O(0, 0)</Math> to point <Math>P(x, y)</Math> is:
        </p>
        <MathBlock>
          d = \sqrt{'{x^2 + y^2}'}
        </MathBlock>
      </Theorem>

      <Example title="Distance from Origin">
        <div className="space-y-3 text-dark-300">
          <p>Distance from origin to <Math>(3, 4)</Math>:</p>
          <MathBlock>
            d = \sqrt{'{3^2 + 4^2}'} = \sqrt{'{25}'} = 5
          </MathBlock>
          <p>Distance from origin to <Math>(-5, 12)</Math>:</p>
          <MathBlock>
            d = \sqrt{'{(-5)^2 + 12^2}'} = \sqrt{'{25 + 144}'} = \sqrt{'{169}'} = 13
          </MathBlock>
        </div>
      </Example>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Applications</h2>

      <Example title="Verifying a Right Triangle">
        <p>
          Show that the triangle with vertices <Math>A(0, 0)</Math>, <Math>B(3, 0)</Math>, and <Math>C(0, 4)</Math> is
          a right triangle.
        </p>
        <div className="mt-3 text-dark-300">
          <p>Calculate all three side lengths:</p>
          <MathBlock>
            AB = \sqrt{'{(3-0)^2 + (0-0)^2}'} = 3
          </MathBlock>
          <MathBlock>
            AC = \sqrt{'{(0-0)^2 + (4-0)^2}'} = 4
          </MathBlock>
          <MathBlock>
            BC = \sqrt{'{(3-0)^2 + (0-4)^2}'} = \sqrt{'{9 + 16}'} = 5
          </MathBlock>
          <p className="mt-2">
            Check the Pythagorean theorem: <Math>3^2 + 4^2 = 9 + 16 = 25 = 5^2</Math>. Yes!
          </p>
        </div>
      </Example>

      <Example title="Testing if a Triangle is Isosceles">
        <p>
          Is the triangle with vertices <Math>A(1, 1)</Math>, <Math>B(4, 1)</Math>, and <Math>C(2.5, 4)</Math> isosceles?
        </p>
        <div className="mt-3 text-dark-300">
          <MathBlock>
            AB = \sqrt{'{(4-1)^2 + (1-1)^2}'} = \sqrt{'{9}'} = 3
          </MathBlock>
          <MathBlock>
            AC = \sqrt{'{(2.5-1)^2 + (4-1)^2}'} = \sqrt{'{1.5^2 + 9}'} = \sqrt{'{2.25 + 9}'} = \sqrt{'{11.25}'}
          </MathBlock>
          <MathBlock>
            BC = \sqrt{'{(4-2.5)^2 + (1-4)^2}'} = \sqrt{'{1.5^2 + 9}'} = \sqrt{'{11.25}'}
          </MathBlock>
          <p className="mt-2">
            Since <Math>AC = BC</Math>, the triangle is isosceles with <Math>AC = BC</Math>.
          </p>
        </div>
      </Example>

      <Example title="Finding a Point Given Distance">
        <p>
          Find a point on the x-axis that is exactly 5 units from <Math>P(3, 4)</Math>.
        </p>
        <div className="mt-3 text-dark-300">
          <p>A point on the x-axis has coordinates <Math>(x, 0)</Math>. We need:</p>
          <MathBlock>
            \sqrt{'{(x-3)^2 + (0-4)^2}'} = 5
          </MathBlock>
          <p>Squaring both sides:</p>
          <MathBlock>
            (x-3)^2 + 16 = 25
          </MathBlock>
          <MathBlock>
            (x-3)^2 = 9
          </MathBlock>
          <MathBlock>
            x - 3 = \pm 3
          </MathBlock>
          <p className="mt-2">
            So <Math>x = 6</Math> or <Math>x = 0</Math>. The points are <Math>(6, 0)</Math> and <Math>(0, 0)</Math>.
          </p>
        </div>
      </Example>

      {/* Common Mistakes */}
      <Callout type="warning" title="Common Mistakes to Avoid">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Don't forget to square:</strong> <Math>d \neq (x_2 - x_1) + (y_2 - y_1)</Math>
          </li>
          <li>
            <strong>Don't forget the square root:</strong> <Math>d \neq (x_2 - x_1)^2 + (y_2 - y_1)^2</Math>
          </li>
          <li>
            <strong>Handle signs carefully:</strong> When subtracting negative numbers
          </li>
          <li>
            <strong>Simplify radicals:</strong> <Math>\sqrt{'{50}'} = 5\sqrt{'{2}'}</Math>, not just <Math>\sqrt{'{50}'}</Math>
          </li>
        </ul>
      </Callout>

      {/* Preview: Circles */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Preview: The Circle Equation</h2>

      <p className="text-dark-300 mb-4">
        The distance formula leads directly to the equation of a circle. A circle with center <Math>(h, k)</Math> and
        radius <Math>r</Math> is the set of all points at distance <Math>r</Math> from the center:
      </p>

      <MathBlock>
        \sqrt{'{(x-h)^2 + (y-k)^2}'} = r
      </MathBlock>

      <p className="text-dark-300 mt-4">
        Squaring both sides gives the standard form of the circle equation:
      </p>

      <MathBlock>
        (x-h)^2 + (y-k)^2 = r^2
      </MathBlock>

      <p className="text-dark-400 mt-4">
        We'll explore circles in detail in the next section.
      </p>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Distance formula:</strong> <Math>d = \sqrt{'{(x_2-x_1)^2 + (y_2-y_1)^2}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>From Pythagoras:</strong> The formula comes from the Pythagorean theorem on the right triangle formed</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Order doesn't matter:</strong> Squaring eliminates the sign of the differences</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>From origin:</strong> Distance to <Math>(x, y)</Math> simplifies to <Math>\sqrt{'{x^2+y^2}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Applications:</strong> Verify triangle types, find points at given distances</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={24} sectionTitle="Distance in the Plane" questions={section24Questions} />
    </LessonLayout>
  );
}
