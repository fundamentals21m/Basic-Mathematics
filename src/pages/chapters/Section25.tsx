import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section25Questions } from '../../data/quizzes';
import { CircleEquationExplorer, CircleFromEquation, CompletingSquareCircle } from '../../components/visualizations';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        A circle is one of the most fundamental shapes in geometry. Using the distance formula
        from the previous section, we can derive an algebraic equation that describes every
        circle in the coordinate plane.
      </p>

      {/* Definition of Circle */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">What is a Circle?</h2>

      <Definition title="Circle">
        <p>
          A <strong>circle</strong> is the set of all points in a plane that are at a fixed
          distance <Math>r</Math> from a fixed point <Math>C</Math>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The fixed point <Math>C</Math> is called the <strong>center</strong></li>
          <li>The fixed distance <Math>r</Math> is called the <strong>radius</strong></li>
        </ul>
      </Definition>

      <Callout type="info" title="Key Insight">
        <p>
          The definition says a circle is a <em>set of points</em>, not a solid disk. The circle
          is just the boundary — the points exactly at distance <Math>r</Math> from the center.
        </p>
      </Callout>

      {/* Deriving the Equation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Deriving the Circle Equation</h2>

      <p className="text-dark-300 mb-4">
        Let the center of a circle be <Math>C(h, k)</Math> and the radius be <Math>r</Math>.
        A point <Math>P(x, y)</Math> is on the circle if and only if its distance from <Math>C</Math> equals <Math>r</Math>.
      </p>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Derivation</h4>
        <p className="text-dark-300 mb-2">Using the distance formula:</p>
        <MathBlock>
          {`\\sqrt{(x - h)^2 + (y - k)^2} = r`}
        </MathBlock>
        <p className="text-dark-300 mt-3 mb-2">Squaring both sides:</p>
        <MathBlock>
          {`(x - h)^2 + (y - k)^2 = r^2`}
        </MathBlock>
      </div>

      <Definition title="Standard Form of a Circle">
        <p>
          The equation of a circle with center <Math>(h, k)</Math> and radius <Math>r</Math> is:
        </p>
        <MathBlock>
          {`(x - h)^2 + (y - k)^2 = r^2`}
        </MathBlock>
      </Definition>

      <CircleEquationExplorer />

      {/* Circle Centered at Origin */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Circle Centered at the Origin</h2>

      <p className="text-dark-300 mb-4">
        When the center is at the origin <Math>(0, 0)</Math>, the equation simplifies considerably.
      </p>

      <Theorem title="Circle at the Origin">
        <p>
          The equation of a circle with center <Math>(0, 0)</Math> and radius <Math>r</Math> is:
        </p>
        <MathBlock>
          {`x^2 + y^2 = r^2`}
        </MathBlock>
      </Theorem>

      <Example title="Circle at Origin">
        <p>Write the equation of the circle centered at the origin with radius <Math>5</Math>.</p>
        <div className="mt-3 text-dark-300">
          <MathBlock>
            {`x^2 + y^2 = 5^2 = 25`}
          </MathBlock>
        </div>
      </Example>

      <Example title="Finding the Radius">
        <p>Find the radius of the circle <Math>x^2 + y^2 = 49</Math>.</p>
        <div className="mt-3 text-dark-300">
          <p>Since <Math>r^2 = 49</Math>, we have <Math>r = 7</Math> (radius is positive).</p>
        </div>
      </Example>

      {/* Writing Equations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Writing Circle Equations</h2>

      <Example title="Given Center and Radius">
        <p>Write the equation of the circle with center <Math>(3, -2)</Math> and radius <Math>4</Math>.</p>
        <div className="mt-3 text-dark-300">
          <p>Using the standard form with <Math>h = 3</Math>, <Math>k = -2</Math>, <Math>r = 4</Math>:</p>
          <MathBlock>
            {`(x - 3)^2 + (y - (-2))^2 = 4^2`}
          </MathBlock>
          <MathBlock>
            {`(x - 3)^2 + (y + 2)^2 = 16`}
          </MathBlock>
        </div>
      </Example>

      <Example title="Given Center and Point on Circle">
        <p>
          Write the equation of the circle with center <Math>(-1, 4)</Math> that passes
          through the point <Math>(2, 8)</Math>.
        </p>
        <div className="mt-3 text-dark-300">
          <p>First, find the radius using the distance formula:</p>
          <MathBlock>
            {`r = \\sqrt{(2 - (-1))^2 + (8 - 4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5`}
          </MathBlock>
          <p className="mt-2">Then write the equation:</p>
          <MathBlock>
            {`(x + 1)^2 + (y - 4)^2 = 25`}
          </MathBlock>
        </div>
      </Example>

      <Example title="Given Diameter Endpoints">
        <p>
          A circle has diameter endpoints <Math>A(1, 3)</Math> and <Math>B(7, 11)</Math>.
          Find its equation.
        </p>
        <div className="mt-3 text-dark-300">
          <p>The center is the midpoint of the diameter:</p>
          <MathBlock>
            {`C = \\left(\\frac{1 + 7}{2}, \\frac{3 + 11}{2}\\right) = (4, 7)`}
          </MathBlock>
          <p className="mt-2">The radius is half the diameter length:</p>
          <MathBlock>
            {`d = \\sqrt{(7-1)^2 + (11-3)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10`}
          </MathBlock>
          <p className="mt-2">So <Math>r = 5</Math>. The equation is:</p>
          <MathBlock>
            {`(x - 4)^2 + (y - 7)^2 = 25`}
          </MathBlock>
        </div>
      </Example>

      {/* Reading Information from Equations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Reading Circle Information</h2>

      <CircleFromEquation />

      <Example title="From Standard Form">
        <p>Find the center and radius of <Math>(x - 5)^2 + (y + 3)^2 = 36</Math>.</p>
        <div className="mt-3 text-dark-300">
          <p>Comparing with <Math>(x - h)^2 + (y - k)^2 = r^2</Math>:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><Math>h = 5</Math> (from <Math>x - 5</Math>)</li>
            <li><Math>k = -3</Math> (from <Math>y - (-3) = y + 3</Math>)</li>
            <li><Math>r^2 = 36</Math>, so <Math>r = 6</Math></li>
          </ul>
          <p className="mt-2">Center: <Math>(5, -3)</Math>, Radius: <Math>6</Math></p>
        </div>
      </Example>

      <Callout type="warning" title="Watch the Signs!">
        <p>
          In <Math>(x - h)^2 + (y - k)^2 = r^2</Math>, the signs flip:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><Math>(x - 3)^2</Math> means <Math>h = 3</Math> (positive)</li>
          <li><Math>(x + 3)^2 = (x - (-3))^2</Math> means <Math>h = -3</Math> (negative)</li>
        </ul>
      </Callout>

      {/* General Form and Completing the Square */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">General Form</h2>

      <p className="text-dark-300 mb-4">
        Sometimes circle equations are given in <strong>general form</strong> (expanded).
        To find the center and radius, we use completing the square.
      </p>

      <Definition title="General Form">
        <p>The general form of a circle equation is:</p>
        <MathBlock>
          {`x^2 + y^2 + Dx + Ey + F = 0`}
        </MathBlock>
        <p className="mt-2 text-dark-400">where <Math>D</Math>, <Math>E</Math>, and <Math>F</Math> are constants.</p>
      </Definition>

      <CompletingSquareCircle />

      <Example title="Converting to Standard Form">
        <p>Find the center and radius of <Math>x^2 + y^2 - 6x + 4y - 12 = 0</Math>.</p>
        <div className="mt-3 text-dark-300">
          <p>Group and complete the square:</p>
          <MathBlock>
            {`(x^2 - 6x) + (y^2 + 4y) = 12`}
          </MathBlock>
          <p className="mt-2">Complete the square for each variable:</p>
          <MathBlock>
            {`(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4`}
          </MathBlock>
          <MathBlock>
            {`(x - 3)^2 + (y + 2)^2 = 25`}
          </MathBlock>
          <p className="mt-2">Center: <Math>(3, -2)</Math>, Radius: <Math>5</Math></p>
        </div>
      </Example>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Completing the Square Reminder</h4>
        <p className="text-dark-300 mb-2">
          To complete the square for <Math>x^2 + bx</Math>:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-dark-300">
          <li>Take half of <Math>b</Math>: <Math>\frac{'{b}'}{'{2}'}</Math></li>
          <li>Square it: <Math>\left(\frac{'{b}'}{'{2}'}\right)^2</Math></li>
          <li>Add this to both sides</li>
          <li>Factor: <Math>\left(x + \frac{'{b}'}{'{2}'}\right)^2</Math></li>
        </ol>
      </div>

      {/* Special Cases */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Cases</h2>

      <Theorem title="When is it a Circle?">
        <p>The equation <Math>x^2 + y^2 + Dx + Ey + F = 0</Math> represents:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>A <strong>circle</strong> if <Math>\frac{'{D^2}'}{'{4}'} + \frac{'{E^2}'}{'{4}'} - F {'>'} 0</Math></li>
          <li>A single <strong>point</strong> if <Math>\frac{'{D^2}'}{'{4}'} + \frac{'{E^2}'}{'{4}'} - F = 0</Math></li>
          <li><strong>No graph</strong> (empty set) if <Math>\frac{'{D^2}'}{'{4}'} + \frac{'{E^2}'}{'{4}'} - F {'<'} 0</Math></li>
        </ul>
      </Theorem>

      <Example title="Point Circle">
        <p>What is the graph of <Math>x^2 + y^2 - 4x + 6y + 13 = 0</Math>?</p>
        <div className="mt-3 text-dark-300">
          <p>Completing the square:</p>
          <MathBlock>
            {`(x^2 - 4x + 4) + (y^2 + 6y + 9) = -13 + 4 + 9`}
          </MathBlock>
          <MathBlock>
            {`(x - 2)^2 + (y + 3)^2 = 0`}
          </MathBlock>
          <p className="mt-2">
            Since the sum of two squares equals zero, both must be zero.
            This gives the single point <Math>(2, -3)</Math>.
          </p>
        </div>
      </Example>

      {/* Unit Circle */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Unit Circle</h2>

      <Definition title="Unit Circle">
        <p>The <strong>unit circle</strong> is the circle centered at the origin with radius <Math>1</Math>:</p>
        <MathBlock>
          {`x^2 + y^2 = 1`}
        </MathBlock>
      </Definition>

      <p className="text-dark-300 mt-4">
        The unit circle is extremely important in trigonometry. Every point on the unit circle
        can be written as <Math>(\cos\theta, \sin\theta)</Math> for some angle <Math>\theta</Math>.
      </p>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Standard form:</strong> <Math>(x-h)^2 + (y-k)^2 = r^2</Math> with center <Math>(h, k)</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>At origin:</strong> <Math>x^2 + y^2 = r^2</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>From distance:</strong> Derived from the distance formula</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>General form:</strong> Use completing the square to convert</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Unit circle:</strong> <Math>x^2 + y^2 = 1</Math>, foundation for trigonometry</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={25} sectionTitle="Equation of a Circle" questions={section25Questions} />
    </LessonLayout>
  );
}
