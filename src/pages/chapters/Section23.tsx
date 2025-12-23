import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section23Questions } from '../../data/quizzes';
import { CoordinatePlaneExplorer, QuadrantIdentifier, PointPlotter } from '../../components/visualizations';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The coordinate plane, invented by René Descartes, provides a powerful bridge between
        algebra and geometry. By assigning numerical coordinates to points, we can use
        algebraic equations to describe geometric shapes and use geometric intuition to
        understand algebraic relationships.
      </p>

      {/* The Coordinate Plane */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Cartesian Plane</h2>

      <Definition title="Coordinate Plane">
        <p>
          The <strong>coordinate plane</strong> (or Cartesian plane) consists of two perpendicular
          number lines called <strong>axes</strong>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The horizontal <strong>x-axis</strong></li>
          <li>The vertical <strong>y-axis</strong></li>
        </ul>
        <p className="mt-2">
          The point where the axes intersect is called the <strong>origin</strong>, denoted <Math>O</Math> or <Math>(0, 0)</Math>.
        </p>
      </Definition>

      <Definition title="Coordinates of a Point">
        <p>
          Every point <Math>P</Math> in the plane is represented by an <strong>ordered pair</strong> <Math>(x, y)</Math>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>x</Math> is the <strong>x-coordinate</strong> (or abscissa) — the horizontal distance from the y-axis</li>
          <li><Math>y</Math> is the <strong>y-coordinate</strong> (or ordinate) — the vertical distance from the x-axis</li>
        </ul>
      </Definition>

      <CoordinatePlaneExplorer />

      <Callout type="warning" title="Order Matters!">
        <p>
          The pair <Math>(3, 5)</Math> is different from <Math>(5, 3)</Math>. The x-coordinate
          always comes first, then the y-coordinate. That's why we call it an <em>ordered</em> pair.
        </p>
      </Callout>

      {/* The Four Quadrants */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Four Quadrants</h2>

      <p className="text-dark-300 mb-4">
        The axes divide the plane into four regions called <strong>quadrants</strong>,
        numbered counterclockwise starting from the upper right.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30">
          <div className="font-bold text-primary-400 mb-2">Quadrant I</div>
          <p className="text-dark-300 text-sm">
            <Math>x {'>'} 0</Math> and <Math>y {'>'} 0</Math>
          </p>
          <p className="text-dark-400 text-xs mt-1">Upper right: both positive</p>
        </div>
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
          <div className="font-bold text-cyan-400 mb-2">Quadrant II</div>
          <p className="text-dark-300 text-sm">
            <Math>x {'<'} 0</Math> and <Math>y {'>'} 0</Math>
          </p>
          <p className="text-dark-400 text-xs mt-1">Upper left: x negative, y positive</p>
        </div>
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <div className="font-bold text-emerald-400 mb-2">Quadrant III</div>
          <p className="text-dark-300 text-sm">
            <Math>x {'<'} 0</Math> and <Math>y {'<'} 0</Math>
          </p>
          <p className="text-dark-400 text-xs mt-1">Lower left: both negative</p>
        </div>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
          <div className="font-bold text-amber-400 mb-2">Quadrant IV</div>
          <p className="text-dark-300 text-sm">
            <Math>x {'>'} 0</Math> and <Math>y {'<'} 0</Math>
          </p>
          <p className="text-dark-400 text-xs mt-1">Lower right: x positive, y negative</p>
        </div>
      </div>

      <QuadrantIdentifier />

      <Callout type="info" title="Points on the Axes">
        <p>
          Points on the axes don't belong to any quadrant:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Points on the x-axis have <Math>y = 0</Math></li>
          <li>Points on the y-axis have <Math>x = 0</Math></li>
          <li>The origin <Math>(0, 0)</Math> is on both axes</li>
        </ul>
      </Callout>

      {/* Plotting Points */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Plotting Points</h2>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">How to Plot a Point <Math>(a, b)</Math></h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Start at the origin <Math>(0, 0)</Math></li>
          <li>Move <Math>a</Math> units horizontally (right if positive, left if negative)</li>
          <li>Move <Math>b</Math> units vertically (up if positive, down if negative)</li>
          <li>Mark the point</li>
        </ol>
      </div>

      <Example title="Plotting Points">
        <p>Plot the points <Math>A(3, 2)</Math>, <Math>B(-4, 1)</Math>, <Math>C(-2, -3)</Math>, and <Math>D(4, -2)</Math>.</p>
        <div className="mt-2 text-dark-300 space-y-1">
          <p><Math>A(3, 2)</Math>: right 3, up 2 → Quadrant I</p>
          <p><Math>B(-4, 1)</Math>: left 4, up 1 → Quadrant II</p>
          <p><Math>C(-2, -3)</Math>: left 2, down 3 → Quadrant III</p>
          <p><Math>D(4, -2)</Math>: right 4, down 2 → Quadrant IV</p>
        </div>
      </Example>

      <PointPlotter />

      {/* Reading Coordinates */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Reading Coordinates</h2>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">How to Read Coordinates</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>From the point, draw a vertical line to the x-axis — this gives the x-coordinate</li>
          <li>From the point, draw a horizontal line to the y-axis — this gives the y-coordinate</li>
          <li>Write the coordinates as <Math>(x, y)</Math></li>
        </ol>
      </div>

      <Example title="Reading Coordinates">
        <p>A point is 5 units to the left of the y-axis and 3 units above the x-axis. What are its coordinates?</p>
        <div className="mt-2 text-dark-300">
          <p>Left of y-axis means negative x: <Math>x = -5</Math></p>
          <p>Above x-axis means positive y: <Math>y = 3</Math></p>
          <p>The coordinates are <Math>(-5, 3)</Math>.</p>
        </div>
      </Example>

      {/* Special Points and Lines */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Points and Lines</h2>

      <Theorem
        title="Points on the Axes"
        proof={
          <>
            <p><strong>X-axis:</strong> The x-axis is the set of points with vertical distance 0 from the x-axis.</p>
            <p className="mt-2">By definition, the y-coordinate measures vertical distance from the x-axis.</p>
            <p className="mt-2">So a point is on the x-axis ⟺ its y-coordinate is 0.</p>
            <p className="mt-4"><strong>Y-axis:</strong> Similarly, the y-axis is the set of points with horizontal distance 0 from the y-axis.</p>
            <p className="mt-2">The x-coordinate measures horizontal distance from the y-axis.</p>
            <p className="mt-2">So a point is on the y-axis ⟺ its x-coordinate is 0.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li>A point is on the <strong>x-axis</strong> if and only if its y-coordinate is 0</li>
          <li>A point is on the <strong>y-axis</strong> if and only if its x-coordinate is 0</li>
        </ul>
      </Theorem>

      <Example title="Axis Points">
        <div className="space-y-2 text-dark-300">
          <p><Math>(4, 0)</Math> is on the x-axis (4 units right of origin)</p>
          <p><Math>(-3, 0)</Math> is on the x-axis (3 units left of origin)</p>
          <p><Math>(0, 5)</Math> is on the y-axis (5 units above origin)</p>
          <p><Math>(0, -2)</Math> is on the y-axis (2 units below origin)</p>
        </div>
      </Example>

      {/* Symmetry */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Symmetry and Reflections</h2>

      <Theorem
        title="Reflections Across Axes"
        proof={
          <>
            <p><strong>Reflection across x-axis:</strong> The point <Math>(a, b)</Math> is <Math>|b|</Math> units from the x-axis.</p>
            <p className="mt-2">Its reflection must be the same distance on the opposite side, which is <Math>(a, -b)</Math>.</p>
            <p className="mt-3"><strong>Reflection across y-axis:</strong> The point <Math>(a, b)</Math> is <Math>|a|</Math> units from the y-axis.</p>
            <p className="mt-2">Its reflection on the opposite side is <Math>(-a, b)</Math>.</p>
            <p className="mt-3"><strong>Reflection across origin:</strong> This is rotation by 180°, or equivalently, reflection across both axes.</p>
            <p className="mt-2">Reflecting <Math>(a, b)</Math> across x-axis gives <Math>(a, -b)</Math>, then across y-axis gives <Math>(-a, -b)</Math>.</p>
          </>
        }
      >
        <p>For a point <Math>(a, b)</Math>:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Reflection across the <strong>x-axis</strong>: <Math>(a, -b)</Math></li>
          <li>Reflection across the <strong>y-axis</strong>: <Math>(-a, b)</Math></li>
          <li>Reflection across the <strong>origin</strong>: <Math>(-a, -b)</Math></li>
        </ul>
      </Theorem>

      <Example title="Finding Reflections">
        <p>Find the reflections of <Math>P(3, 4)</Math> across each axis and the origin.</p>
        <div className="mt-2 text-dark-300 space-y-1">
          <p>Across x-axis: <Math>(3, -4)</Math> — negate y</p>
          <p>Across y-axis: <Math>(-3, 4)</Math> — negate x</p>
          <p>Across origin: <Math>(-3, -4)</Math> — negate both</p>
        </div>
      </Example>

      {/* Midpoint Preview */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Midpoint Formula</h2>

      <Theorem
        title="Midpoint of a Segment"
        proof={
          <>
            <p>Let <Math>P = (x_1, y_1)</Math> and <Math>Q = (x_2, y_2)</Math>. We need the point <Math>M</Math> equidistant from both.</p>
            <p className="mt-2">The midpoint lies halfway along the segment in both x and y directions.</p>
            <p className="mt-2">In the x-direction: start at <Math>x_1</Math>, move half the distance to <Math>x_2</Math>:</p>
            <p className="mt-2 text-center"><Math>x_M = x_1 + \frac{'{1}'}{'{2}'}(x_2 - x_1) = \frac{'{x_1 + x_2}'}{'{2}'}</Math></p>
            <p className="mt-2">Similarly for y: <Math>y_M = \frac{'{y_1 + y_2}'}{'{2}'}</Math></p>
            <p className="mt-2">So <Math>M = \left(\frac{'{x_1 + x_2}'}{'{2}'}, \frac{'{y_1 + y_2}'}{'{2}'}\right)</Math>.</p>
          </>
        }
      >
        <p>
          The midpoint of the segment from <Math>(x_1, y_1)</Math> to <Math>(x_2, y_2)</Math> is:
        </p>
        <MathBlock>
          M = \left( \frac{'{x_1 + x_2}'}{'{2}'}, \frac{'{y_1 + y_2}'}{'{2}'} \right)
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The midpoint coordinates are the averages of the corresponding coordinates.
        </p>
      </Theorem>

      <Example title="Finding a Midpoint">
        <p>Find the midpoint of the segment from <Math>A(2, 3)</Math> to <Math>B(8, 7)</Math>.</p>
        <div className="mt-2 text-dark-300">
          <MathBlock>
            M = \left( \frac{'{2 + 8}'}{'{2}'}, \frac{'{3 + 7}'}{'{2}'} \right) = \left( \frac{'{10}'}{'{2}'}, \frac{'{10}'}{'{2}'} \right) = (5, 5)
          </MathBlock>
        </div>
      </Example>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Applications</h2>

      <Example title="Describing a Rectangle">
        <p>
          A rectangle has vertices at <Math>A(1, 1)</Math>, <Math>B(5, 1)</Math>, <Math>C(5, 4)</Math>, and <Math>D(1, 4)</Math>.
          Find its dimensions.
        </p>
        <div className="mt-2 text-dark-300">
          <p>Width (along x-axis): <Math>|5 - 1| = 4</Math> units</p>
          <p>Height (along y-axis): <Math>|4 - 1| = 3</Math> units</p>
          <p>Area: <Math>4 \times 3 = 12</Math> square units</p>
        </div>
      </Example>

      <Example title="Checking if Points are Collinear">
        <p>
          Three points are <strong>collinear</strong> (on the same line) if the slopes between
          any two pairs are equal. We'll explore this more when we study lines.
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
            <span><strong>Ordered pairs:</strong> Every point is <Math>(x, y)</Math> where x comes first</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Quadrants:</strong> I (+,+), II (−,+), III (−,−), IV (+,−)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Axes:</strong> x-axis has y = 0, y-axis has x = 0</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Reflections:</strong> Negate coordinates to reflect across axes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Midpoint:</strong> Average the x's and average the y's</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={23} sectionTitle="Coordinate Systems" questions={section23Questions} />
    </LessonLayout>
  );
}
