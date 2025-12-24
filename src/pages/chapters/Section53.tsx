import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section53Questions } from '../../data/quizzes';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Complex numbers</strong> extend the real numbers by introducing <Math>i</Math>, the
        square root of <Math>{'-1'}</Math>. The <strong>complex plane</strong> visualizes these
        numbers geometrically.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Complex Numbers</h2>

      <Definition title="Complex Number">
        <p>
          A <strong>complex number</strong> has the form:
        </p>
        <MathBlock>
          {'z = a + bi'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>{'a, b \\in \\mathbb{R}'}</Math> and <Math>{'i^2 = -1'}</Math>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>a</Math> is the <strong>real part</strong>: <Math>{'\\text{Re}(z) = a'}</Math></li>
          <li><Math>b</Math> is the <strong>imaginary part</strong>: <Math>{'\\text{Im}(z) = b'}</Math></li>
        </ul>
      </Definition>

      <Example title="Examples of Complex Numbers">
        <div className="text-dark-300 space-y-2">
          <p><Math>{'3 + 4i'}</Math>: real part 3, imaginary part 4</p>
          <p><Math>{'-2i'}</Math>: real part 0, imaginary part <Math>{'-2'}</Math></p>
          <p><Math>{'5'}</Math>: real part 5, imaginary part 0 (a real number)</p>
        </div>
      </Example>

      {/* The Complex Plane */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Complex Plane</h2>

      <Definition title="Complex Plane (Argand Diagram)">
        <p>
          The <strong>complex plane</strong> represents complex numbers as points:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Horizontal axis: real part</li>
          <li>Vertical axis: imaginary part</li>
          <li><Math>{'z = a + bi'}</Math> corresponds to point <Math>{'(a, b)'}</Math></li>
        </ul>
      </Definition>

      <Callout type="info" title="Visualization">
        <p>
          Real numbers lie on the horizontal axis. Pure imaginary numbers (<Math>{'bi'}</Math>)
          lie on the vertical axis.
        </p>
      </Callout>

      {/* Arithmetic */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Arithmetic of Complex Numbers</h2>

      <Theorem title="Addition and Subtraction">
        <MathBlock>
          {'(a + bi) + (c + di) = (a + c) + (b + d)i'}
        </MathBlock>
        <MathBlock>
          {'(a + bi) - (c + di) = (a - c) + (b - d)i'}
        </MathBlock>
      </Theorem>

      <Theorem title="Multiplication">
        <MathBlock>
          {'(a + bi)(c + di) = (ac - bd) + (ad + bc)i'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Use <Math>{'i^2 = -1'}</Math> when expanding.
        </p>
      </Theorem>

      <Example title="Multiplying Complex Numbers">
        <p>Compute <Math>{'(2 + 3i)(1 - 4i)'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'= 2(1) + 2(-4i) + 3i(1) + 3i(-4i)'}
          </MathBlock>
          <MathBlock>
            {'= 2 - 8i + 3i - 12i^2 = 2 - 5i + 12 = 14 - 5i'}
          </MathBlock>
        </div>
      </Example>

      {/* Conjugate */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Complex Conjugate</h2>

      <Definition title="Conjugate">
        <p>
          The <strong>conjugate</strong> of <Math>{'z = a + bi'}</Math> is:
        </p>
        <MathBlock>
          {'\\bar{z} = a - bi'}
        </MathBlock>
      </Definition>

      <Theorem title="Properties of Conjugate">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><Math>{'\\overline{z + w} = \\bar{z} + \\bar{w}'}</Math></li>
          <li><Math>{'\\overline{zw} = \\bar{z} \\cdot \\bar{w}'}</Math></li>
          <li><Math>{'z \\cdot \\bar{z} = a^2 + b^2'}</Math> (always real and non-negative)</li>
          <li><Math>{'\\overline{\\bar{z}} = z'}</Math></li>
        </ul>
      </Theorem>

      {/* Division */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Division</h2>

      <Theorem title="Division Formula">
        <p>To divide by <Math>{'z = c + di \\neq 0'}</Math>, multiply by <Math>{'\\bar{z}/\\bar{z}'}</Math>:</p>
        <MathBlock>
          {'\\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{c^2 + d^2}'}
        </MathBlock>
      </Theorem>

      <Example title="Dividing Complex Numbers">
        <p>Compute <Math>{'\\frac{3 + 4i}{1 + 2i}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'= \\frac{(3 + 4i)(1 - 2i)}{(1 + 2i)(1 - 2i)} = \\frac{3 - 6i + 4i - 8i^2}{1 + 4}'}
          </MathBlock>
          <MathBlock>
            {'= \\frac{3 - 2i + 8}{5} = \\frac{11 - 2i}{5} = \\frac{11}{5} - \\frac{2}{5}i'}
          </MathBlock>
        </div>
      </Example>

      {/* Modulus */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Modulus</h2>

      <Definition title="Modulus (Absolute Value)">
        <p>
          The <strong>modulus</strong> of <Math>{'z = a + bi'}</Math> is:
        </p>
        <MathBlock>
          {'|z| = \\sqrt{a^2 + b^2} = \\sqrt{z \\cdot \\bar{z}}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Geometrically, <Math>{'|z|'}</Math> is the distance from <Math>z</Math> to the origin.
        </p>
      </Definition>

      <Example title="Computing Modulus">
        <p>Find <Math>{'|3 + 4i|'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'|3 + 4i| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5'}
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
            <span><Math>{'z = a + bi'}</Math> where <Math>{'i^2 = -1'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>The complex plane: <Math>{'z = a + bi \\leftrightarrow (a, b)'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Conjugate: <Math>{'\\overline{a + bi} = a - bi'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Modulus: <Math>{'|z| = \\sqrt{a^2 + b^2}'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={53} sectionTitle="The Complex Plane" questions={section53Questions} />
    </LessonLayout>
  );
}
