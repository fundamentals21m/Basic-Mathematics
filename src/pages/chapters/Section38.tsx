import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section38Questions } from '../../data/quizzes';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The <strong>straight line</strong> is the simplest geometric object in analytic geometry.
        We explore various ways to express lines algebraically and the relationships between them.
      </p>

      {/* Slope-Intercept Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Slope-Intercept Form</h2>

      <Definition title="Slope-Intercept Form">
        <p>
          A non-vertical line with slope <Math>m</Math> and <Math>y</Math>-intercept <Math>b</Math> has equation:
        </p>
        <MathBlock>
          {'y = mx + b'}
        </MathBlock>
      </Definition>

      <Example title="Finding the Equation">
        <p>Find the equation of the line with slope <Math>3</Math> passing through <Math>(0, -2)</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>The <Math>y</Math>-intercept is <Math>b = -2</Math> (since the point is on the <Math>y</Math>-axis).</p>
          <MathBlock>
            {'y = 3x - 2'}
          </MathBlock>
        </div>
      </Example>

      {/* Point-Slope Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Point-Slope Form</h2>

      <Theorem title="Point-Slope Form">
        <p>
          The line with slope <Math>m</Math> passing through point <Math>{'(x_1, y_1)'}</Math> has equation:
        </p>
        <MathBlock>
          {'y - y_1 = m(x - x_1)'}
        </MathBlock>
      </Theorem>

      <Example title="Using Point-Slope Form">
        <p>Find the equation of the line with slope <Math>{'-\\frac{1}{2}'}</Math> through <Math>(4, 3)</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'y - 3 = -\\frac{1}{2}(x - 4)'}
          </MathBlock>
          <MathBlock>
            {'y = -\\frac{1}{2}x + 2 + 3 = -\\frac{1}{2}x + 5'}
          </MathBlock>
        </div>
      </Example>

      {/* Two-Point Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Two-Point Form</h2>

      <Theorem title="Line Through Two Points">
        <p>
          The line through points <Math>{'(x_1, y_1)'}</Math> and <Math>{'(x_2, y_2)'}</Math> has slope:
        </p>
        <MathBlock>
          {'m = \\frac{y_2 - y_1}{x_2 - x_1}'}
        </MathBlock>
        <p className="mt-2">
          And equation (when <Math>{'x_1 \\neq x_2'}</Math>):
        </p>
        <MathBlock>
          {'\\frac{y - y_1}{y_2 - y_1} = \\frac{x - x_1}{x_2 - x_1}'}
        </MathBlock>
      </Theorem>

      <Example title="Line Through Two Points">
        <p>Find the equation of the line through <Math>(1, 2)</Math> and <Math>(4, 8)</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>First, find the slope:</p>
          <MathBlock>
            {'m = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2'}
          </MathBlock>
          <p>Using point-slope form with <Math>(1, 2)</Math>:</p>
          <MathBlock>
            {'y - 2 = 2(x - 1) \\implies y = 2x'}
          </MathBlock>
        </div>
      </Example>

      {/* General Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">General Form</h2>

      <Definition title="General (Standard) Form">
        <p>
          The <strong>general form</strong> of a line equation is:
        </p>
        <MathBlock>
          {'Ax + By + C = 0'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>A</Math>, <Math>B</Math>, <Math>C</Math> are constants with <Math>A</Math> and <Math>B</Math> not both zero.
        </p>
      </Definition>

      <Callout type="info" title="Converting Forms">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li>From <Math>{'y = mx + b'}</Math>: rearrange to <Math>{'mx - y + b = 0'}</Math></li>
          <li>From <Math>{'Ax + By + C = 0'}</Math>: solve for <Math>y</Math> to get <Math>{'y = -\\frac{A}{B}x - \\frac{C}{B}'}</Math></li>
        </ul>
      </Callout>

      {/* Intercept Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Intercept Form</h2>

      <Theorem title="Intercept Form">
        <p>
          If a line has <Math>x</Math>-intercept <Math>a</Math> and <Math>y</Math>-intercept <Math>b</Math> (both nonzero):
        </p>
        <MathBlock>
          {'\\frac{x}{a} + \\frac{y}{b} = 1'}
        </MathBlock>
      </Theorem>

      <Example title="Using Intercept Form">
        <p>Find the equation of the line with <Math>x</Math>-intercept <Math>3</Math> and <Math>y</Math>-intercept <Math>-6</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\frac{x}{3} + \\frac{y}{-6} = 1'}
          </MathBlock>
          <p>Multiplying by <Math>6</Math>:</p>
          <MathBlock>
            {'2x - y = 6 \\quad \\text{or} \\quad y = 2x - 6'}
          </MathBlock>
        </div>
      </Example>

      {/* Parallel and Perpendicular */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Parallel and Perpendicular Lines</h2>

      <Theorem title="Conditions for Parallelism and Perpendicularity">
        <p>For two non-vertical lines with slopes <Math>{'m_1'}</Math> and <Math>{'m_2'}</Math>:</p>
        <ul className="list-disc list-inside mt-2 space-y-2 text-dark-300">
          <li><strong>Parallel:</strong> <Math>{'m_1 = m_2'}</Math></li>
          <li><strong>Perpendicular:</strong> <Math>{'m_1 \\cdot m_2 = -1'}</Math></li>
        </ul>
      </Theorem>

      <Example title="Finding a Parallel Line">
        <p>Find the line parallel to <Math>{'y = 3x + 1'}</Math> through <Math>(2, -1)</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>The parallel line has slope <Math>m = 3</Math>.</p>
          <MathBlock>
            {'y - (-1) = 3(x - 2)'}
          </MathBlock>
          <MathBlock>
            {'y = 3x - 7'}
          </MathBlock>
        </div>
      </Example>

      <Example title="Finding a Perpendicular Line">
        <p>Find the line perpendicular to <Math>{'y = 2x + 5'}</Math> through the origin.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>The perpendicular slope is <Math>{'m = -\\frac{1}{2}'}</Math>.</p>
          <MathBlock>
            {'y = -\\frac{1}{2}x'}
          </MathBlock>
        </div>
      </Example>

      {/* Distance from Point to Line */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Distance from Point to Line</h2>

      <Theorem title="Point-to-Line Distance">
        <p>
          The distance from point <Math>{'(x_0, y_0)'}</Math> to line <Math>{'Ax + By + C = 0'}</Math> is:
        </p>
        <MathBlock>
          {'d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}'}
        </MathBlock>
      </Theorem>

      <Example title="Computing Distance">
        <p>Find the distance from <Math>(3, 1)</Math> to the line <Math>{'4x - 3y + 5 = 0'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'d = \\frac{|4(3) - 3(1) + 5|}{\\sqrt{16 + 9}} = \\frac{|12 - 3 + 5|}{5} = \\frac{14}{5}'}
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
            <span>Slope-intercept: <Math>{'y = mx + b'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Point-slope: <Math>{'y - y_1 = m(x - x_1)'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Parallel lines have equal slopes; perpendicular slopes multiply to <Math>{'-1'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Distance formula: <Math>{'d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={38} sectionTitle="The Straight Line" questions={section38Questions} />
    </LessonLayout>
  );
}
