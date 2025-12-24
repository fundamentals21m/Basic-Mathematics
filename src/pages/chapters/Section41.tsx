import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section41Questions } from '../../data/quizzes';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The <strong>hyperbola</strong> is the conic section with two branches that approach asymptotes.
        Like the ellipse, it has two foci, but the defining property involves a difference of distances.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Definition of a Hyperbola</h2>

      <Definition title="Hyperbola">
        <p>
          A <strong>hyperbola</strong> is the set of all points <Math>P</Math> such that the absolute
          difference of distances from <Math>P</Math> to two fixed points (foci) is constant.
        </p>
        <MathBlock>
          {'|PF_1 - PF_2| = 2a'}
        </MathBlock>
      </Definition>

      {/* Standard Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Standard Form</h2>

      <Theorem title="Standard Equation (Center at Origin)">
        <p>
          <strong>Horizontal transverse axis:</strong>
        </p>
        <MathBlock>
          {'\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1'}
        </MathBlock>
        <p className="mt-3">
          <strong>Vertical transverse axis:</strong>
        </p>
        <MathBlock>
          {'\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1'}
        </MathBlock>
      </Theorem>

      <Definition title="Key Parameters">
        <p>For a hyperbola <Math>{'\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1'}</Math>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Vertices:</strong> <Math>{'(\\pm a, 0)'}</Math></li>
          <li><strong>Foci:</strong> <Math>{'(\\pm c, 0)'}</Math> where <Math>{'c = \\sqrt{a^2 + b^2}'}</Math></li>
          <li><strong>Asymptotes:</strong> <Math>{'y = \\pm \\frac{b}{a}x'}</Math></li>
        </ul>
      </Definition>

      <Callout type="warning" title="Key Difference from Ellipse">
        <p>
          For hyperbolas: <Math>{'c^2 = a^2 + b^2'}</Math><br/>
          For ellipses: <Math>{'c^2 = a^2 - b^2'}</Math>
        </p>
      </Callout>

      <Example title="Finding Vertices and Foci">
        <p>Find the vertices, foci, and asymptotes of <Math>{'\\frac{x^2}{9} - \\frac{y^2}{16} = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'a^2 = 9'}</Math>, so <Math>{'a = 3'}</Math>. <Math>{'b^2 = 16'}</Math>, so <Math>{'b = 4'}</Math>.</p>
          <p><strong>Vertices:</strong> <Math>{'(\\pm 3, 0)'}</Math></p>
          <MathBlock>
            {'c = \\sqrt{a^2 + b^2} = \\sqrt{9 + 16} = 5'}
          </MathBlock>
          <p><strong>Foci:</strong> <Math>{'(\\pm 5, 0)'}</Math></p>
          <p><strong>Asymptotes:</strong> <Math>{'y = \\pm \\frac{4}{3}x'}</Math></p>
        </div>
      </Example>

      {/* Asymptotes */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Asymptotes</h2>

      <Theorem title="Asymptote Equations">
        <p>
          For <Math>{'\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1'}</Math>, the asymptotes are:
        </p>
        <MathBlock>
          {'y = \\pm \\frac{b}{a}x'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The hyperbola approaches these lines as <Math>{'|x| \\to \\infty'}</Math>.
        </p>
      </Theorem>

      <Definition title="Rectangular Box">
        <p>
          The asymptotes pass through the corners of a rectangle with dimensions <Math>{'2a \\times 2b'}</Math>
          centered at the origin. This "box" helps sketch the hyperbola.
        </p>
      </Definition>

      {/* Eccentricity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Eccentricity</h2>

      <Definition title="Eccentricity">
        <MathBlock>
          {'e = \\frac{c}{a} = \\frac{\\sqrt{a^2 + b^2}}{a}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          For a hyperbola, <Math>{'e > 1'}</Math>. Larger eccentricity means the branches open wider.
        </p>
      </Definition>

      <Example title="Computing Eccentricity">
        <p>Find the eccentricity of <Math>{'\\frac{x^2}{4} - \\frac{y^2}{12} = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'a^2 = 4'}</Math>, <Math>{'b^2 = 12'}</Math>, so <Math>{'c^2 = 4 + 12 = 16'}</Math>, <Math>{'c = 4'}</Math>.</p>
          <MathBlock>
            {'e = \\frac{c}{a} = \\frac{4}{2} = 2'}
          </MathBlock>
        </div>
      </Example>

      {/* Conjugate Hyperbola */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Conjugate Hyperbola</h2>

      <Definition title="Conjugate Hyperbola">
        <p>
          The <strong>conjugate</strong> of <Math>{'\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1'}</Math> is:
        </p>
        <MathBlock>
          {'\\frac{y^2}{b^2} - \\frac{x^2}{a^2} = 1'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The conjugate hyperbola has the same asymptotes but opens vertically.
        </p>
      </Definition>

      {/* Rectangular Hyperbola */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Rectangular Hyperbola</h2>

      <Definition title="Rectangular Hyperbola">
        <p>
          When <Math>{'a = b'}</Math>, the hyperbola is called <strong>rectangular</strong> (or equilateral):
        </p>
        <MathBlock>
          {'x^2 - y^2 = a^2'}
        </MathBlock>
        <p className="mt-2">
          The asymptotes are <Math>{'y = \\pm x'}</Math>, perpendicular to each other.
        </p>
      </Definition>

      <Example title="Rectangular Hyperbola">
        <p>Consider <Math>{'x^2 - y^2 = 4'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Here <Math>{'a = b = 2'}</Math>, so this is a rectangular hyperbola.</p>
          <p><strong>Vertices:</strong> <Math>{'(\\pm 2, 0)'}</Math></p>
          <p><strong>Asymptotes:</strong> <Math>{'y = \\pm x'}</Math></p>
          <p><Math>{'c = \\sqrt{4 + 4} = 2\\sqrt{2}'}</Math>, so eccentricity <Math>{'e = \\sqrt{2}'}</Math>.</p>
        </div>
      </Example>

      {/* Translated Hyperbolas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Translated Hyperbolas</h2>

      <Theorem title="Center at (h, k)">
        <MathBlock>
          {'\\frac{(x - h)^2}{a^2} - \\frac{(y - k)^2}{b^2} = 1'}
        </MathBlock>
        <p className="mt-2">
          Center at <Math>{'(h, k)'}</Math>. Asymptotes: <Math>{'y - k = \\pm \\frac{b}{a}(x - h)'}</Math>.
        </p>
      </Theorem>

      <Example title="Translated Hyperbola">
        <p>Find the center and asymptotes of <Math>{'\\frac{(x + 1)^2}{4} - \\frac{(y - 2)^2}{9} = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Center:</strong> <Math>{'(-1, 2)'}</Math></p>
          <p><Math>{'a = 2'}</Math>, <Math>{'b = 3'}</Math></p>
          <p><strong>Asymptotes:</strong> <Math>{'y - 2 = \\pm \\frac{3}{2}(x + 1)'}</Math></p>
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
            <span>Standard form: <Math>{'\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1'}</Math> (horizontal) or swap for vertical</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Key relationship: <Math>{'c^2 = a^2 + b^2'}</Math> (sum, not difference!)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Asymptotes: <Math>{'y = \\pm \\frac{b}{a}x'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Eccentricity <Math>{'e > 1'}</Math> for all hyperbolas</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={41} sectionTitle="The Hyperbola" questions={section41Questions} />
    </LessonLayout>
  );
}
