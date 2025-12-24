import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section39Questions } from '../../data/quizzes';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The <strong>parabola</strong> is one of the fundamental conic sections. It arises naturally
        as the graph of a quadratic function and has beautiful geometric properties related to
        focus and directrix.
      </p>

      {/* Standard Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Standard Form</h2>

      <Definition title="Parabola (Vertex at Origin)">
        <p>
          A <strong>parabola</strong> with vertex at the origin and axis along the <Math>y</Math>-axis:
        </p>
        <MathBlock>
          {'y = ax^2 \\quad \\text{or} \\quad x^2 = 4py'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          When <Math>{'a > 0'}</Math> (or <Math>{'p > 0'}</Math>), the parabola opens upward.
        </p>
      </Definition>

      <Definition title="Focus and Directrix">
        <p>
          For the parabola <Math>{'x^2 = 4py'}</Math>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Focus:</strong> <Math>(0, p)</Math></li>
          <li><strong>Directrix:</strong> <Math>{'y = -p'}</Math></li>
        </ul>
        <p className="mt-2 text-dark-400">
          Every point on the parabola is equidistant from the focus and directrix.
        </p>
      </Definition>

      <Example title="Finding Focus and Directrix">
        <p>Find the focus and directrix of <Math>{'y = \\frac{1}{8}x^2'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Rewrite as <Math>{'x^2 = 8y'}</Math>, so <Math>{'4p = 8'}</Math>, giving <Math>{'p = 2'}</Math>.</p>
          <p><strong>Focus:</strong> <Math>(0, 2)</Math></p>
          <p><strong>Directrix:</strong> <Math>{'y = -2'}</Math></p>
        </div>
      </Example>

      {/* Vertex Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Vertex Form</h2>

      <Theorem title="Vertex Form">
        <p>
          A parabola with vertex at <Math>(h, k)</Math> and vertical axis:
        </p>
        <MathBlock>
          {'y - k = a(x - h)^2'}
        </MathBlock>
        <p className="mt-2">Or equivalently:</p>
        <MathBlock>
          {'y = a(x - h)^2 + k'}
        </MathBlock>
      </Theorem>

      <Example title="Identifying the Vertex">
        <p>Find the vertex of <Math>{'y = 2(x - 3)^2 + 5'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Comparing with <Math>{'y = a(x - h)^2 + k'}</Math>:</p>
          <p>Vertex: <Math>(h, k) = (3, 5)</Math></p>
        </div>
      </Example>

      <Callout type="info" title="Converting to Vertex Form">
        <p>
          To convert <Math>{'y = ax^2 + bx + c'}</Math> to vertex form, complete the square:
        </p>
        <MathBlock>
          {'h = -\\frac{b}{2a}, \\quad k = c - \\frac{b^2}{4a}'}
        </MathBlock>
      </Callout>

      {/* Horizontal Parabolas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Horizontal Parabolas</h2>

      <Definition title="Horizontal Axis">
        <p>
          A parabola with horizontal axis (vertex at origin):
        </p>
        <MathBlock>
          {'x = ay^2 \\quad \\text{or} \\quad y^2 = 4px'}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Focus:</strong> <Math>(p, 0)</Math></li>
          <li><strong>Directrix:</strong> <Math>{'x = -p'}</Math></li>
        </ul>
      </Definition>

      <Example title="Horizontal Parabola">
        <p>Find the focus of <Math>{'y^2 = 12x'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Here <Math>{'4p = 12'}</Math>, so <Math>{'p = 3'}</Math>.</p>
          <p><strong>Focus:</strong> <Math>(3, 0)</Math></p>
          <p><strong>Directrix:</strong> <Math>{'x = -3'}</Math></p>
        </div>
      </Example>

      {/* Reflective Property */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Reflective Property</h2>

      <Theorem title="Reflective Property of Parabolas">
        <p>
          Light rays parallel to the axis of a parabola reflect off the parabola and pass
          through the focus. Conversely, light from the focus reflects parallel to the axis.
        </p>
      </Theorem>

      <Callout type="info" title="Applications">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><strong>Satellite dishes:</strong> Concentrate signals at the focus</li>
          <li><strong>Car headlights:</strong> Bulb at focus creates parallel beam</li>
          <li><strong>Telescopes:</strong> Parabolic mirrors focus starlight</li>
        </ul>
      </Callout>

      {/* Latus Rectum */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Latus Rectum</h2>

      <Definition title="Latus Rectum">
        <p>
          The <strong>latus rectum</strong> is the chord through the focus perpendicular to the axis.
          For <Math>{'x^2 = 4py'}</Math>, its length is <Math>{'|4p|'}</Math>.
        </p>
      </Definition>

      <Example title="Finding the Latus Rectum">
        <p>Find the length of the latus rectum for <Math>{'y = \\frac{1}{4}x^2'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Rewrite: <Math>{'x^2 = 4y'}</Math>, so <Math>{'4p = 4'}</Math> and <Math>{'p = 1'}</Math>.</p>
          <p>Latus rectum length = <Math>{'|4p| = 4'}</Math>.</p>
        </div>
      </Example>

      {/* Parametric Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Parametric Form</h2>

      <Theorem title="Parametric Equations">
        <p>
          The parabola <Math>{'y^2 = 4px'}</Math> can be parameterized as:
        </p>
        <MathBlock>
          {'x = pt^2, \\quad y = 2pt'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          As <Math>t</Math> varies over all real numbers, the point traces out the entire parabola.
        </p>
      </Theorem>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>Standard form: <Math>{'x^2 = 4py'}</Math> (vertical) or <Math>{'y^2 = 4px'}</Math> (horizontal)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Focus is at distance <Math>p</Math> from vertex; directrix is at distance <Math>p</Math> on opposite side</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Vertex form: <Math>{'y = a(x - h)^2 + k'}</Math> with vertex <Math>(h, k)</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Parabolas have the reflective property: parallel rays converge at focus</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={39} sectionTitle="The Parabola" questions={section39Questions} />
    </LessonLayout>
  );
}
