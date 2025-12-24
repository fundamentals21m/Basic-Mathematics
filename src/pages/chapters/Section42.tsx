import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section42Questions } from '../../data/quizzes';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        When a hyperbola's asymptotes are not parallel to the coordinate axes, we need to
        <strong> rotate the coordinate system</strong> to obtain the standard form. The most
        important example is the hyperbola <Math>{'xy = c'}</Math>.
      </p>

      {/* The Hyperbola xy = c */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Hyperbola xy = c</h2>

      <Definition title="Rectangular Hyperbola xy = c">
        <p>
          The curve <Math>{'xy = c'}</Math> (where <Math>{'c \\neq 0'}</Math>) is a <strong>rectangular hyperbola</strong>
          with asymptotes along the coordinate axes (<Math>{'x = 0'}</Math> and <Math>{'y = 0'}</Math>).
        </p>
      </Definition>

      <Callout type="info" title="Why Rectangular?">
        <p>
          A rectangular hyperbola has perpendicular asymptotes. For <Math>{'xy = c'}</Math>, the
          asymptotes are the <Math>{'x'}</Math>-axis and <Math>{'y'}</Math>-axis, which meet at right angles.
        </p>
      </Callout>

      <Example title="Graphing xy = 1">
        <p>Describe the hyperbola <Math>{'xy = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>This hyperbola has two branches:</p>
          <ul className="list-disc list-inside ml-4">
            <li>First branch: <Math>{'x > 0'}</Math>, <Math>{'y > 0'}</Math> (first quadrant)</li>
            <li>Second branch: <Math>{'x < 0'}</Math>, <Math>{'y < 0'}</Math> (third quadrant)</li>
          </ul>
          <p>As <Math>{'x \\to \\infty'}</Math>, <Math>{'y \\to 0^+'}</Math>. As <Math>{'x \\to 0^+'}</Math>, <Math>{'y \\to \\infty'}</Math>.</p>
        </div>
      </Example>

      {/* Rotation of Coordinates */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Rotation of Coordinates</h2>

      <Theorem title="Rotation Formulas">
        <p>
          Rotating the coordinate system by angle <Math>{'\\theta'}</Math> counterclockwise:
        </p>
        <MathBlock>
          {'x = X\\cos\\theta - Y\\sin\\theta'}
        </MathBlock>
        <MathBlock>
          {'y = X\\sin\\theta + Y\\cos\\theta'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Here <Math>{'(X, Y)'}</Math> are coordinates in the new (rotated) system.
        </p>
      </Theorem>

      <Definition title="Inverse Rotation">
        <p>
          To find <Math>{'(X, Y)'}</Math> from <Math>{'(x, y)'}</Math>:
        </p>
        <MathBlock>
          {'X = x\\cos\\theta + y\\sin\\theta'}
        </MathBlock>
        <MathBlock>
          {'Y = -x\\sin\\theta + y\\cos\\theta'}
        </MathBlock>
      </Definition>

      {/* Rotating xy = c */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Transforming xy = c to Standard Form</h2>

      <Theorem title="45° Rotation">
        <p>
          Rotating <Math>{'xy = c'}</Math> by <Math>{'\\theta = 45°'}</Math>:
        </p>
        <MathBlock>
          {'xy = c \\quad \\Longrightarrow \\quad \\frac{X^2}{2c} - \\frac{Y^2}{2c} = 1 \\text{ (when } c > 0 \\text{)}'}
        </MathBlock>
        <p className="mt-2">Or equivalently: <Math>{'X^2 - Y^2 = 2c'}</Math></p>
      </Theorem>

      <Example title="Rotating xy = 2">
        <p>Transform <Math>{'xy = 2'}</Math> using a 45° rotation.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>With <Math>{'\\theta = 45°'}</Math>: <Math>{'\\cos 45° = \\sin 45° = \\frac{\\sqrt{2}}{2}'}</Math></p>
          <MathBlock>
            {'x = \\frac{X - Y}{\\sqrt{2}}, \\quad y = \\frac{X + Y}{\\sqrt{2}}'}
          </MathBlock>
          <p>Substituting into <Math>{'xy = 2'}</Math>:</p>
          <MathBlock>
            {'\\frac{X - Y}{\\sqrt{2}} \\cdot \\frac{X + Y}{\\sqrt{2}} = 2'}
          </MathBlock>
          <MathBlock>
            {'\\frac{X^2 - Y^2}{2} = 2 \\implies X^2 - Y^2 = 4'}
          </MathBlock>
          <p>In standard form: <Math>{'\\frac{X^2}{4} - \\frac{Y^2}{4} = 1'}</Math></p>
        </div>
      </Example>

      {/* General Rotation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">General Second-Degree Equations</h2>

      <Definition title="General Conic Equation">
        <p>
          The general second-degree equation is:
        </p>
        <MathBlock>
          {'Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0'}
        </MathBlock>
      </Definition>

      <Theorem title="Eliminating the xy Term">
        <p>
          To eliminate the <Math>{'Bxy'}</Math> term, rotate by angle <Math>{'\\theta'}</Math> where:
        </p>
        <MathBlock>
          {'\\cot 2\\theta = \\frac{A - C}{B}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          After this rotation, the equation in <Math>{'(X, Y)'}</Math> has no <Math>{'XY'}</Math> term.
        </p>
      </Theorem>

      <Example title="Finding the Rotation Angle">
        <p>Find the angle to eliminate the <Math>{'xy'}</Math> term from <Math>{'x^2 + xy + y^2 = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Here <Math>{'A = 1'}</Math>, <Math>{'B = 1'}</Math>, <Math>{'C = 1'}</Math>.</p>
          <MathBlock>
            {'\\cot 2\\theta = \\frac{A - C}{B} = \\frac{1 - 1}{1} = 0'}
          </MathBlock>
          <p>So <Math>{'2\\theta = 90°'}</Math>, giving <Math>{'\\theta = 45°'}</Math>.</p>
        </div>
      </Example>

      {/* Discriminant */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Discriminant</h2>

      <Theorem title="Conic Classification by Discriminant">
        <p>
          For <Math>{'Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0'}</Math>, the discriminant <Math>{'\\Delta = B^2 - 4AC'}</Math> determines the conic type:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>{'\\Delta < 0'}</Math>: Ellipse (or circle if <Math>{'A = C'}</Math> and <Math>{'B = 0'}</Math>)</li>
          <li><Math>{'\\Delta = 0'}</Math>: Parabola</li>
          <li><Math>{'\\Delta > 0'}</Math>: Hyperbola</li>
        </ul>
        <p className="mt-2 text-dark-400">
          This discriminant is invariant under rotation.
        </p>
      </Theorem>

      <Example title="Classifying a Conic">
        <p>Classify <Math>{'2x^2 + 4xy + 5y^2 = 10'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'A = 2'}</Math>, <Math>{'B = 4'}</Math>, <Math>{'C = 5'}</Math>.</p>
          <MathBlock>
            {'\\Delta = B^2 - 4AC = 16 - 40 = -24 < 0'}
          </MathBlock>
          <p>Since <Math>{'\\Delta < 0'}</Math>, this is an <strong>ellipse</strong>.</p>
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
            <span><Math>{'xy = c'}</Math> is a rectangular hyperbola with axes as asymptotes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>A 45° rotation transforms <Math>{'xy = c'}</Math> to <Math>{'X^2 - Y^2 = 2c'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Use <Math>{'\\cot 2\\theta = \\frac{A-C}{B}'}</Math> to find the rotation angle</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Discriminant <Math>{'B^2 - 4AC'}</Math> classifies conics (invariant under rotation)</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={42} sectionTitle="Rotation of Hyperbolas" questions={section42Questions} />
    </LessonLayout>
  );
}
