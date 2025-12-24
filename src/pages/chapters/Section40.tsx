import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section40Questions } from '../../data/quizzes';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The <strong>ellipse</strong> is the stretched circle—a conic section with two foci.
        Ellipses describe planetary orbits and have beautiful reflective properties.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Definition of an Ellipse</h2>

      <Definition title="Ellipse">
        <p>
          An <strong>ellipse</strong> is the set of all points <Math>P</Math> such that the sum of
          distances from <Math>P</Math> to two fixed points (the <strong>foci</strong>) is constant.
        </p>
        <MathBlock>
          {'PF_1 + PF_2 = 2a'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>{'2a'}</Math> is greater than the distance between the foci.
        </p>
      </Definition>

      {/* Standard Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Standard Form</h2>

      <Theorem title="Standard Equation (Center at Origin)">
        <p>
          An ellipse centered at the origin with semi-major axis <Math>a</Math> and semi-minor axis <Math>b</Math>:
        </p>
        <MathBlock>
          {'\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1'}
        </MathBlock>
        <p className="mt-2">
          If <Math>{'a > b'}</Math>, the major axis is horizontal. If <Math>{'b > a'}</Math>, it's vertical.
        </p>
      </Theorem>

      <Definition title="Key Parameters">
        <p>For an ellipse with <Math>{'a > b'}</Math>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Semi-major axis:</strong> <Math>a</Math></li>
          <li><strong>Semi-minor axis:</strong> <Math>b</Math></li>
          <li><strong>Distance from center to focus:</strong> <Math>{'c = \\sqrt{a^2 - b^2}'}</Math></li>
          <li><strong>Foci:</strong> <Math>{'(\\pm c, 0)'}</Math></li>
          <li><strong>Vertices:</strong> <Math>{'(\\pm a, 0)'}</Math></li>
        </ul>
      </Definition>

      <Example title="Finding Foci">
        <p>Find the foci of <Math>{'\\frac{x^2}{25} + \\frac{y^2}{9} = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Here <Math>{'a^2 = 25'}</Math> (so <Math>{'a = 5'}</Math>) and <Math>{'b^2 = 9'}</Math> (so <Math>{'b = 3'}</Math>).</p>
          <MathBlock>
            {'c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4'}
          </MathBlock>
          <p>Foci: <Math>{'(\\pm 4, 0)'}</Math>, i.e., <Math>{'(-4, 0)'}</Math> and <Math>{'(4, 0)'}</Math>.</p>
        </div>
      </Example>

      {/* Eccentricity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Eccentricity</h2>

      <Definition title="Eccentricity">
        <p>
          The <strong>eccentricity</strong> <Math>e</Math> of an ellipse measures how "stretched" it is:
        </p>
        <MathBlock>
          {'e = \\frac{c}{a} = \\frac{\\sqrt{a^2 - b^2}}{a}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          For an ellipse, <Math>{'0 < e < 1'}</Math>. When <Math>{'e \\to 0'}</Math>, the ellipse approaches a circle.
        </p>
      </Definition>

      <Example title="Computing Eccentricity">
        <p>Find the eccentricity of <Math>{'\\frac{x^2}{16} + \\frac{y^2}{12} = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'a^2 = 16'}</Math>, <Math>{'b^2 = 12'}</Math>, so <Math>{'c^2 = 16 - 12 = 4'}</Math>, <Math>{'c = 2'}</Math>.</p>
          <MathBlock>
            {'e = \\frac{c}{a} = \\frac{2}{4} = \\frac{1}{2}'}
          </MathBlock>
        </div>
      </Example>

      <Callout type="info" title="Planetary Orbits">
        <p>
          Earth's orbit has eccentricity <Math>{'e \\approx 0.017'}</Math> (nearly circular).
          Pluto's orbit has <Math>{'e \\approx 0.25'}</Math> (noticeably elliptical).
        </p>
      </Callout>

      {/* Translated Ellipses */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Translated Ellipses</h2>

      <Theorem title="Ellipse with Center (h, k)">
        <MathBlock>
          {'\\frac{(x - h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = 1'}
        </MathBlock>
        <p className="mt-2">
          The center is at <Math>{'(h, k)'}</Math>. All other properties shift accordingly.
        </p>
      </Theorem>

      <Example title="Translated Ellipse">
        <p>Find the center and foci of <Math>{'\\frac{(x - 2)^2}{9} + \\frac{(y + 1)^2}{4} = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Center:</strong> <Math>{'(2, -1)'}</Math></p>
          <p><Math>{'a^2 = 9'}</Math>, <Math>{'b^2 = 4'}</Math>, so <Math>{'c = \\sqrt{9 - 4} = \\sqrt{5}'}</Math>.</p>
          <p>Since <Math>{'a > b'}</Math>, major axis is horizontal.</p>
          <p><strong>Foci:</strong> <Math>{'(2 \\pm \\sqrt{5}, -1)'}</Math></p>
        </div>
      </Example>

      {/* Reflective Property */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Reflective Property</h2>

      <Theorem title="Reflective Property">
        <p>
          A ray from one focus reflects off the ellipse and passes through the other focus.
        </p>
      </Theorem>

      <Callout type="info" title="Whispering Galleries">
        <p>
          In elliptical rooms (like the Capitol dome), a whisper at one focus can be heard
          clearly at the other focus because sound waves follow this reflective path.
        </p>
      </Callout>

      {/* Parametric Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Parametric Form</h2>

      <Theorem title="Parametric Equations">
        <p>
          The ellipse <Math>{'\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1'}</Math> can be parameterized as:
        </p>
        <MathBlock>
          {'x = a\\cos\\theta, \\quad y = b\\sin\\theta'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>{'0 \\leq \\theta < 2\\pi'}</Math>.
        </p>
      </Theorem>

      <Example title="Using Parametric Form">
        <p>Parameterize the ellipse <Math>{'\\frac{x^2}{4} + \\frac{y^2}{9} = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>With <Math>{'a = 2'}</Math>, <Math>{'b = 3'}</Math>:</p>
          <MathBlock>
            {'x = 2\\cos\\theta, \\quad y = 3\\sin\\theta'}
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
            <span>Standard form: <Math>{'\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Relationship: <Math>{'c^2 = a^2 - b^2'}</Math> where <Math>c</Math> is focus distance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Eccentricity: <Math>{'e = c/a'}</Math> with <Math>{'0 < e < 1'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Sum of distances from any point to foci equals <Math>{'2a'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={40} sectionTitle="The Ellipse" questions={section40Questions} />
    </LessonLayout>
  );
}
