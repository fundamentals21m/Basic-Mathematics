import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section33Questions } from '../../data/quizzes';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The sine and cosine functions are the foundation of trigonometry. They connect angles
        to coordinates, circles to triangles, and algebra to geometry. We'll define them using
        the <strong>unit circle</strong>—a circle of radius 1 centered at the origin.
      </p>

      {/* Unit Circle Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Unit Circle</h2>

      <Definition title="Unit Circle">
        <p>
          The <strong>unit circle</strong> is the circle of radius 1 centered at the origin:
        </p>
        <MathBlock>
          {'x^2 + y^2 = 1'}
        </MathBlock>
      </Definition>

      <p className="text-dark-300 mb-4 mt-4">
        For any angle <Math>{'\\theta'}</Math>, we can find a point on the unit circle by starting at <Math>{'(1, 0)'}</Math>
        and rotating counterclockwise by <Math>{'\\theta'}</Math> radians.
      </p>

      <Definition title="Sine and Cosine (Unit Circle)">
        <p>
          For an angle <Math>{'\\theta'}</Math>, the point on the unit circle at angle <Math>{'\\theta'}</Math> from the positive
          x-axis has coordinates:
        </p>
        <MathBlock>
          {'(\\cos\\theta, \\sin\\theta)'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          <Math>{'\\cos\\theta'}</Math> is the <strong>x-coordinate</strong>; <Math>{'\\sin\\theta'}</Math> is the <strong>y-coordinate</strong>.
        </p>
      </Definition>

      <Callout type="info" title="Why This Definition?">
        <p>
          The unit circle definition works for <em>any</em> angle—not just acute angles in triangles.
          It naturally extends to negative angles, angles greater than <Math>{'2\\pi'}</Math>, and more.
        </p>
      </Callout>

      {/* Special Angles */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Angles</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2 px-3">Angle <Math>{'\\theta'}</Math></th>
              <th className="text-left py-2 px-3">Degrees</th>
              <th className="text-left py-2 px-3"><Math>{'\\cos\\theta'}</Math></th>
              <th className="text-left py-2 px-3"><Math>{'\\sin\\theta'}</Math></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800"><td className="py-2 px-3"><Math>{'0'}</Math></td><td className="py-2 px-3">0°</td><td className="py-2 px-3"><Math>{'1'}</Math></td><td className="py-2 px-3"><Math>{'0'}</Math></td></tr>
            <tr className="border-b border-dark-800"><td className="py-2 px-3"><Math>{'\\frac{\\pi}{6}'}</Math></td><td className="py-2 px-3">30°</td><td className="py-2 px-3"><Math>{'\\frac{\\sqrt{3}}{2}'}</Math></td><td className="py-2 px-3"><Math>{'\\frac{1}{2}'}</Math></td></tr>
            <tr className="border-b border-dark-800"><td className="py-2 px-3"><Math>{'\\frac{\\pi}{4}'}</Math></td><td className="py-2 px-3">45°</td><td className="py-2 px-3"><Math>{'\\frac{\\sqrt{2}}{2}'}</Math></td><td className="py-2 px-3"><Math>{'\\frac{\\sqrt{2}}{2}'}</Math></td></tr>
            <tr className="border-b border-dark-800"><td className="py-2 px-3"><Math>{'\\frac{\\pi}{3}'}</Math></td><td className="py-2 px-3">60°</td><td className="py-2 px-3"><Math>{'\\frac{1}{2}'}</Math></td><td className="py-2 px-3"><Math>{'\\frac{\\sqrt{3}}{2}'}</Math></td></tr>
            <tr className="border-b border-dark-800"><td className="py-2 px-3"><Math>{'\\frac{\\pi}{2}'}</Math></td><td className="py-2 px-3">90°</td><td className="py-2 px-3"><Math>{'0'}</Math></td><td className="py-2 px-3"><Math>{'1'}</Math></td></tr>
            <tr className="border-b border-dark-800"><td className="py-2 px-3"><Math>{'\\pi'}</Math></td><td className="py-2 px-3">180°</td><td className="py-2 px-3"><Math>{'-1'}</Math></td><td className="py-2 px-3"><Math>{'0'}</Math></td></tr>
            <tr><td className="py-2 px-3"><Math>{'\\frac{3\\pi}{2}'}</Math></td><td className="py-2 px-3">270°</td><td className="py-2 px-3"><Math>{'0'}</Math></td><td className="py-2 px-3"><Math>{'-1'}</Math></td></tr>
          </tbody>
        </table>
      </div>

      <Example title="Finding Coordinates">
        <p>Find the coordinates of the point on the unit circle at angle <Math>{'\\frac{2\\pi}{3}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'\\frac{2\\pi}{3} = 120°'}</Math>, which is in the second quadrant.</p>
          <p>Reference angle: <Math>{'\\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}'}</Math></p>
          <p className="mt-2">From the table: <Math>{'\\cos\\frac{\\pi}{3} = \\frac{1}{2}'}</Math>, <Math>{'\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}'}</Math></p>
          <p className="mt-2">In quadrant II: x is negative, y is positive.</p>
          <MathBlock>
            {'\\left(\\cos\\frac{2\\pi}{3}, \\sin\\frac{2\\pi}{3}\\right) = \\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)'}
          </MathBlock>
        </div>
      </Example>

      {/* Fundamental Identity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Pythagorean Identity</h2>

      <Theorem title="Pythagorean Identity">
        <p>
          For all angles <Math>{'\\theta'}</Math>:
        </p>
        <MathBlock>
          {'\\cos^2\\theta + \\sin^2\\theta = 1'}
        </MathBlock>
      </Theorem>

      <Example title="Using the Identity">
        <p>If <Math>{'\\sin\\theta = \\frac{3}{5}'}</Math> and <Math>{'\\theta'}</Math> is in quadrant I, find <Math>{'\\cos\\theta'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\cos^2\\theta + \\sin^2\\theta = 1'}
          </MathBlock>
          <MathBlock>
            {'\\cos^2\\theta + \\frac{9}{25} = 1'}
          </MathBlock>
          <MathBlock>
            {'\\cos^2\\theta = \\frac{16}{25}'}
          </MathBlock>
          <MathBlock>
            {'\\cos\\theta = \\pm\\frac{4}{5}'}
          </MathBlock>
          <p className="mt-2">Since <Math>{'\\theta'}</Math> is in quadrant I, <Math>{'\\cos\\theta = \\frac{4}{5}'}</Math>.</p>
        </div>
      </Example>

      {/* Right Triangle Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Right Triangle Interpretation</h2>

      <p className="text-dark-300 mb-4">
        For acute angles <Math>{'\\theta'}</Math>, sine and cosine have a familiar interpretation in right triangles.
      </p>

      <Definition title="Right Triangle Definitions">
        <p>
          In a right triangle with an acute angle <Math>{'\\theta'}</Math>:
        </p>
        <MathBlock>
          {'\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} \\qquad \\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}'}
        </MathBlock>
      </Definition>

      <Callout type="info" title="SOH-CAH-TOA">
        <p>
          A mnemonic: <strong>S</strong>ine = <strong>O</strong>pposite / <strong>H</strong>ypotenuse,
          <strong>C</strong>osine = <strong>A</strong>djacent / <strong>H</strong>ypotenuse,
          <strong>T</strong>angent = <strong>O</strong>pposite / <strong>A</strong>djacent.
        </p>
      </Callout>

      {/* Symmetry Properties */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Symmetry Properties</h2>

      <Theorem title="Even and Odd Properties">
        <p>
          Cosine is an <strong>even function</strong> and sine is an <strong>odd function</strong>:
        </p>
        <MathBlock>
          {'\\cos(-\\theta) = \\cos\\theta \\qquad \\sin(-\\theta) = -\\sin\\theta'}
        </MathBlock>
      </Theorem>

      <Theorem title="Periodicity">
        <p>
          Both functions repeat every <Math>{'2\\pi'}</Math>:
        </p>
        <MathBlock>
          {'\\cos(\\theta + 2\\pi) = \\cos\\theta \\qquad \\sin(\\theta + 2\\pi) = \\sin\\theta'}
        </MathBlock>
      </Theorem>

      <Theorem title="Complementary Angles">
        <p>
          Sine and cosine are related through complementary angles:
        </p>
        <MathBlock>
          {'\\sin\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos\\theta \\qquad \\cos\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sin\\theta'}
        </MathBlock>
      </Theorem>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Unit circle:</strong> Point at angle <Math>{'\\theta'}</Math> is <Math>{'(\\cos\\theta, \\sin\\theta)'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Pythagorean identity:</strong> <Math>{'\\cos^2\\theta + \\sin^2\\theta = 1'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Symmetry:</strong> cos is even, sin is odd</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Periodicity:</strong> Both repeat every <Math>{'2\\pi'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span>Know the special values at <Math>{'0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={33} sectionTitle="Sine and Cosine" questions={section33Questions} />
    </LessonLayout>
  );
}
