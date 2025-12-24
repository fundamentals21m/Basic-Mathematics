import { LessonLayout } from '../../components/layout/LessonLayout';
import { Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section36Questions } from '../../data/quizzes';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The <strong>addition formulas</strong> express <Math>{'\\sin(A + B)'}</Math> and <Math>{'\\cos(A + B)'}</Math>
        in terms of <Math>{'\\sin A'}</Math>, <Math>{'\\cos A'}</Math>, <Math>{'\\sin B'}</Math>, and <Math>{'\\cos B'}</Math>.
        These are among the most important identities in trigonometry.
      </p>

      {/* Main Formulas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Addition Formulas</h2>

      <Theorem title="Sine Addition Formula">
        <MathBlock>
          {'\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B'}
        </MathBlock>
      </Theorem>

      <Theorem title="Cosine Addition Formula">
        <MathBlock>
          {'\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B'}
        </MathBlock>
      </Theorem>

      <Callout type="info" title="Memory Aid">
        <p>
          For sine: "sine-cosine plus cosine-sine" (alternating functions)<br/>
          For cosine: "cosine-cosine minus sine-sine" (same functions, minus in between)
        </p>
      </Callout>

      <Example title="Exact Value of sin 75°">
        <p>Find <Math>{'\\sin 75°'}</Math> exactly.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Write <Math>{'75° = 45° + 30°'}</Math>.</p>
          <MathBlock>
            {'\\sin 75° = \\sin(45° + 30°) = \\sin 45° \\cos 30° + \\cos 45° \\sin 30°'}
          </MathBlock>
          <MathBlock>
            {'= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}'}
          </MathBlock>
        </div>
      </Example>

      {/* Subtraction Formulas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Subtraction Formulas</h2>

      <Theorem title="Subtraction Formulas">
        <p>
          Replacing <Math>B</Math> with <Math>{'-B'}</Math> and using <Math>{'\\sin(-B) = -\\sin B'}</Math>, <Math>{'\\cos(-B) = \\cos B'}</Math>:
        </p>
        <MathBlock>
          {'\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B'}
        </MathBlock>
        <MathBlock>
          {'\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B'}
        </MathBlock>
      </Theorem>

      <Example title="Exact Value of cos 15°">
        <p>Find <Math>{'\\cos 15°'}</Math> exactly.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Write <Math>{'15° = 45° - 30°'}</Math>.</p>
          <MathBlock>
            {'\\cos 15° = \\cos(45° - 30°) = \\cos 45° \\cos 30° + \\sin 45° \\sin 30°'}
          </MathBlock>
          <MathBlock>
            {'= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}'}
          </MathBlock>
        </div>
      </Example>

      {/* Double Angle Formulas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Double Angle Formulas</h2>

      <p className="text-dark-300 mb-4">
        Setting <Math>{'A = B = \\theta'}</Math> in the addition formulas gives the double angle formulas.
      </p>

      <Theorem title="Double Angle Formulas">
        <MathBlock>
          {'\\sin 2\\theta = 2\\sin\\theta\\cos\\theta'}
        </MathBlock>
        <MathBlock>
          {'\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta'}
        </MathBlock>
      </Theorem>

      <Example title="Using Double Angle">
        <p>If <Math>{'\\sin\\theta = \\frac{3}{5}'}</Math> and <Math>\theta</Math> is in Q1, find <Math>{'\\sin 2\\theta'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>First, find <Math>{'\\cos\\theta = \\frac{4}{5}'}</Math> (using Pythagorean identity).</p>
          <MathBlock>
            {'\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2 \\cdot \\frac{3}{5} \\cdot \\frac{4}{5} = \\frac{24}{25}'}
          </MathBlock>
        </div>
      </Example>

      {/* Half Angle Formulas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Half Angle Formulas</h2>

      <Theorem title="Half Angle Formulas">
        <p>
          Derived from the double angle formula for cosine:
        </p>
        <MathBlock>
          {'\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}'}
        </MathBlock>
        <MathBlock>
          {'\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The sign depends on the quadrant of <Math>{'\\frac{\\theta}{2}'}</Math>.
        </p>
      </Theorem>

      {/* Tangent Addition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Tangent Addition Formula</h2>

      <Theorem title="Tangent Addition">
        <MathBlock>
          {'\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}'}
        </MathBlock>
        <MathBlock>
          {'\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}'}
        </MathBlock>
      </Theorem>

      <Theorem title="Double Angle for Tangent">
        <MathBlock>
          {'\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}'}
        </MathBlock>
      </Theorem>

      {/* Product-to-Sum */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Product-to-Sum Formulas</h2>

      <Theorem title="Product-to-Sum">
        <MathBlock>
          {'\\sin A \\cos B = \\frac{1}{2}[\\sin(A + B) + \\sin(A - B)]'}
        </MathBlock>
        <MathBlock>
          {'\\cos A \\cos B = \\frac{1}{2}[\\cos(A - B) + \\cos(A + B)]'}
        </MathBlock>
        <MathBlock>
          {'\\sin A \\sin B = \\frac{1}{2}[\\cos(A - B) - \\cos(A + B)]'}
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
            <span><Math>{'\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><Math>{'\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><Math>{'\\sin 2\\theta = 2\\sin\\theta\\cos\\theta'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><Math>{'\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={36} sectionTitle="Addition Formulas" questions={section36Questions} />
    </LessonLayout>
  );
}
