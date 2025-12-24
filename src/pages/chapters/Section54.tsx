import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section54Questions } from '../../data/quizzes';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The <strong>polar form</strong> of a complex number expresses it using its distance from
        the origin (modulus) and angle (argument). This form makes multiplication and powers elegant.
      </p>

      {/* Polar Coordinates */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Polar Representation</h2>

      <Definition title="Polar Form">
        <p>
          A complex number <Math>{'z = a + bi'}</Math> can be written as:
        </p>
        <MathBlock>
          {'z = r(\\cos\\theta + i\\sin\\theta)'}
        </MathBlock>
        <p className="mt-2">where:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>{'r = |z| = \\sqrt{a^2 + b^2}'}</Math> is the <strong>modulus</strong></li>
          <li><Math>\\theta</Math> is the <strong>argument</strong> (angle with positive real axis)</li>
        </ul>
      </Definition>

      <Definition title="Argument">
        <p>
          The <strong>argument</strong> of <Math>z</Math>, written <Math>{'\\arg(z)'}</Math>, satisfies:
        </p>
        <MathBlock>
          {'\\cos\\theta = \\frac{a}{r}, \\quad \\sin\\theta = \\frac{b}{r}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The argument is determined up to multiples of <Math>{'2\\pi'}</Math>.
        </p>
      </Definition>

      <Example title="Converting to Polar Form">
        <p>Write <Math>{'z = 1 + i'}</Math> in polar form.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'r = |1 + i| = \\sqrt{1 + 1} = \\sqrt{2}'}</Math></p>
          <p><Math>{'\\theta = \\arctan(1/1) = \\pi/4'}</Math></p>
          <MathBlock>
            {'z = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)'}
          </MathBlock>
        </div>
      </Example>

      {/* Euler's Formula */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Euler's Formula</h2>

      <Theorem title="Euler's Formula">
        <MathBlock>
          {'e^{i\\theta} = \\cos\\theta + i\\sin\\theta'}
        </MathBlock>
      </Theorem>

      <Definition title="Exponential Form">
        <p>
          Using Euler's formula, polar form becomes:
        </p>
        <MathBlock>
          {'z = re^{i\\theta}'}
        </MathBlock>
      </Definition>

      <Callout type="info" title="Euler's Identity">
        <p>
          Setting <Math>{'\\theta = \\pi'}</Math>:
        </p>
        <MathBlock>
          {'e^{i\\pi} + 1 = 0'}
        </MathBlock>
        <p className="mt-2">This connects <Math>e</Math>, <Math>i</Math>, <Math>\\pi</Math>, 1, and 0.</p>
      </Callout>

      {/* Multiplication and Division */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Multiplication and Division in Polar Form</h2>

      <Theorem title="Multiplication">
        <p>For <Math>{'z_1 = r_1 e^{i\\theta_1}'}</Math> and <Math>{'z_2 = r_2 e^{i\\theta_2}'}</Math>:</p>
        <MathBlock>
          {'z_1 z_2 = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Multiply moduli, add arguments.
        </p>
      </Theorem>

      <Theorem title="Division">
        <MathBlock>
          {'\\frac{z_1}{z_2} = \\frac{r_1}{r_2} e^{i(\\theta_1 - \\theta_2)}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Divide moduli, subtract arguments.
        </p>
      </Theorem>

      {/* De Moivre's Theorem */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">De Moivre's Theorem</h2>

      <Theorem title="De Moivre's Theorem">
        <p>For any integer <Math>n</Math>:</p>
        <MathBlock>
          {'(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)'}
        </MathBlock>
        <p className="mt-2">Or equivalently:</p>
        <MathBlock>
          {'(re^{i\\theta})^n = r^n e^{in\\theta}'}
        </MathBlock>
      </Theorem>

      <Example title="Using De Moivre's Theorem">
        <p>Compute <Math>{'(1 + i)^8'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>First, write <Math>{'1 + i = \\sqrt{2} e^{i\\pi/4}'}</Math>.</p>
          <MathBlock>
            {'(1 + i)^8 = (\\sqrt{2})^8 e^{i \\cdot 8 \\cdot \\pi/4} = 16 e^{i \\cdot 2\\pi} = 16'}
          </MathBlock>
        </div>
      </Example>

      {/* Roots of Unity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Roots of Unity</h2>

      <Definition title="nth Roots of Unity">
        <p>
          The <Math>n</Math>th roots of unity are the solutions to <Math>{'z^n = 1'}</Math>:
        </p>
        <MathBlock>
          {'z_k = e^{2\\pi i k/n} = \\cos\\frac{2\\pi k}{n} + i\\sin\\frac{2\\pi k}{n}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          for <Math>{'k = 0, 1, 2, \\ldots, n-1'}</Math>.
        </p>
      </Definition>

      <Example title="Cube Roots of Unity">
        <p>Find all solutions to <Math>{'z^3 = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>The three cube roots of unity are:</p>
          <MathBlock>
            {'z_0 = 1, \\quad z_1 = e^{2\\pi i/3} = -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i, \\quad z_2 = e^{4\\pi i/3} = -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i'}
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
            <span>Polar form: <Math>{'z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Euler's formula: <Math>{'e^{i\\theta} = \\cos\\theta + i\\sin\\theta'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Multiply: add angles. Divide: subtract angles.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>De Moivre: <Math>{'(e^{i\\theta})^n = e^{in\\theta}'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={54} sectionTitle="Polar Form" questions={section54Questions} />
    </LessonLayout>
  );
}
