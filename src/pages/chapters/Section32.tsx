import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section32Questions } from '../../data/quizzes';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Before we can study the trigonometric functions, we need a way to measure angles.
        While degrees are familiar, <strong>radians</strong> are the natural unit for mathematics
        and lead to simpler formulas throughout calculus and beyond.
      </p>

      {/* Arc Length */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Arc Length and Central Angles</h2>

      <Definition title="Central Angle">
        <p>
          A <strong>central angle</strong> of a circle is an angle whose vertex is at the center of the circle.
          The <strong>arc</strong> it subtends is the portion of the circle between the two sides of the angle.
        </p>
      </Definition>

      <p className="text-dark-300 mb-4 mt-4">
        For a circle of radius <Math>{'r'}</Math>, there's a fundamental relationship between the central angle
        and the length of the arc it subtends.
      </p>

      <Theorem title="Arc Length Formula">
        <p>
          For a central angle <Math>{'\\theta'}</Math> (measured in radians) in a circle of radius <Math>{'r'}</Math>,
          the arc length <Math>{'s'}</Math> is:
        </p>
        <MathBlock>
          {'s = r\\theta'}
        </MathBlock>
      </Theorem>

      {/* Definition of Radian */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Radian</h2>

      <Definition title="Radian">
        <p>
          One <strong>radian</strong> is the angle subtended at the center of a circle by an arc
          whose length equals the radius of the circle.
        </p>
        <p className="mt-2 text-dark-400">
          Equivalently: if <Math>{'s = r'}</Math>, then <Math>{'\\theta = 1'}</Math> radian.
        </p>
      </Definition>

      <Callout type="info" title="Why Radians?">
        <p>
          The formula <Math>{'s = r\\theta'}</Math> is simple only when <Math>{'\\theta'}</Math> is in radians.
          With degrees, we'd need: <Math>{'s = \\frac{\\pi r \\theta}{180}'}</Math>.
        </p>
      </Callout>

      <Example title="Arc Length with Radians">
        <p>Find the arc length subtended by an angle of <Math>{'2'}</Math> radians in a circle of radius <Math>{'5'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'s = r\\theta = 5 \\cdot 2 = 10'}
          </MathBlock>
        </div>
      </Example>

      {/* Converting Between Degrees and Radians */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Degrees and Radians</h2>

      <p className="text-dark-300 mb-4">
        A full circle has <Math>{'360°'}</Math> or <Math>{'2\\pi'}</Math> radians. This gives us the conversion factor.
      </p>

      <Theorem title="Conversion Formulas">
        <p>
          To convert between degrees and radians:
        </p>
        <MathBlock>
          {'\\text{radians} = \\text{degrees} \\times \\frac{\\pi}{180}'}
        </MathBlock>
        <MathBlock>
          {'\\text{degrees} = \\text{radians} \\times \\frac{180}{\\pi}'}
        </MathBlock>
      </Theorem>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <h4 className="font-semibold text-dark-200 mb-3">Common Angles</h4>
          <table className="w-full text-sm text-dark-300">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left pb-2">Degrees</th>
                <th className="text-left pb-2">Radians</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0°</td><td>0</td></tr>
              <tr><td>30°</td><td><Math>{'\\frac{\\pi}{6}'}</Math></td></tr>
              <tr><td>45°</td><td><Math>{'\\frac{\\pi}{4}'}</Math></td></tr>
              <tr><td>60°</td><td><Math>{'\\frac{\\pi}{3}'}</Math></td></tr>
              <tr><td>90°</td><td><Math>{'\\frac{\\pi}{2}'}</Math></td></tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <h4 className="font-semibold text-dark-200 mb-3">More Angles</h4>
          <table className="w-full text-sm text-dark-300">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left pb-2">Degrees</th>
                <th className="text-left pb-2">Radians</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>120°</td><td><Math>{'\\frac{2\\pi}{3}'}</Math></td></tr>
              <tr><td>135°</td><td><Math>{'\\frac{3\\pi}{4}'}</Math></td></tr>
              <tr><td>150°</td><td><Math>{'\\frac{5\\pi}{6}'}</Math></td></tr>
              <tr><td>180°</td><td><Math>{'\\pi'}</Math></td></tr>
              <tr><td>360°</td><td><Math>{'2\\pi'}</Math></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <Example title="Converting Degrees to Radians">
        <p>Convert <Math>{'150°'}</Math> to radians.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'150° \\times \\frac{\\pi}{180} = \\frac{150\\pi}{180} = \\frac{5\\pi}{6}'}
          </MathBlock>
        </div>
      </Example>

      <Example title="Converting Radians to Degrees">
        <p>Convert <Math>{'\\frac{3\\pi}{4}'}</Math> radians to degrees.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\frac{3\\pi}{4} \\times \\frac{180}{\\pi} = \\frac{3 \\cdot 180}{4} = \\frac{540}{4} = 135°'}
          </MathBlock>
        </div>
      </Example>

      {/* Sector Area */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Area of a Sector</h2>

      <Definition title="Sector">
        <p>
          A <strong>sector</strong> of a circle is the "pie slice" region bounded by two radii and the arc between them.
        </p>
      </Definition>

      <Theorem title="Sector Area Formula">
        <p>
          The area of a sector with central angle <Math>{'\\theta'}</Math> (in radians) and radius <Math>{'r'}</Math> is:
        </p>
        <MathBlock>
          {'A = \\frac{1}{2}r^2\\theta'}
        </MathBlock>
      </Theorem>

      <Example title="Finding Sector Area">
        <p>Find the area of a sector with radius <Math>{'6'}</Math> and central angle <Math>{'\\frac{\\pi}{3}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'A = \\frac{1}{2} \\cdot 6^2 \\cdot \\frac{\\pi}{3} = \\frac{1}{2} \\cdot 36 \\cdot \\frac{\\pi}{3} = \\frac{36\\pi}{6} = 6\\pi'}
          </MathBlock>
        </div>
      </Example>

      {/* Angular Velocity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Angular Velocity</h2>

      <Definition title="Angular Velocity">
        <p>
          <strong>Angular velocity</strong> <Math>{'\\omega'}</Math> (omega) is the rate of change of angle with respect to time:
        </p>
        <MathBlock>
          {'\\omega = \\frac{\\theta}{t}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Common units: radians per second (rad/s) or revolutions per minute (rpm).
        </p>
      </Definition>

      <Example title="Angular Velocity and Linear Speed">
        <p>
          A wheel of radius <Math>{'0.5'}</Math> m rotates at <Math>{'4'}</Math> radians per second.
          What is the linear speed of a point on the rim?
        </p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>The arc length traveled per second is:</p>
          <MathBlock>
            {'v = r\\omega = 0.5 \\cdot 4 = 2 \\text{ m/s}'}
          </MathBlock>
        </div>
      </Example>

      <Callout type="info" title="Connection to Linear Speed">
        <p>
          For circular motion: <Math>{'v = r\\omega'}</Math>, where <Math>{'v'}</Math> is linear speed,
          <Math>{'r'}</Math> is radius, and <Math>{'\\omega'}</Math> is angular velocity in rad/s.
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
            <span><strong>Radian:</strong> Angle where arc length equals radius</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Arc length:</strong> <Math>{'s = r\\theta'}</Math> (with <Math>{'\\theta'}</Math> in radians)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Conversion:</strong> <Math>{'360° = 2\\pi'}</Math> radians, so <Math>{'180° = \\pi'}</Math> radians</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Sector area:</strong> <Math>{'A = \\frac{1}{2}r^2\\theta'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Linear speed:</strong> <Math>{'v = r\\omega'}</Math> (for circular motion)</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={32} sectionTitle="Radian Measure" questions={section32Questions} />
    </LessonLayout>
  );
}
