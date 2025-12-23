import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section15Questions } from '../../data/quizzes';
import { ComplexPlaneVisualizer, ComplexArithmetic, PolarFormConverter } from '../../components/visualizations';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The <strong>complex numbers</strong> extend the real numbers by introducing a new number{' '}
        <Math>i</Math> with the property <Math>i^2 = -1</Math>. This seemingly simple idea opens up
        a rich geometric world where numbers can be visualized as points in a plane.
      </p>

      {/* The Imaginary Unit */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Imaginary Unit</h2>

      <Definition title="The Imaginary Unit i">
        <p>
          The <strong>imaginary unit</strong> <Math>i</Math> is defined by the property:
        </p>
        <MathBlock>i^2 = -1</MathBlock>
        <p className="mt-2 text-dark-400">
          Equivalently, <Math>i = \sqrt{'{-1}'}</Math>. This gives us a solution to <Math>x^2 + 1 = 0</Math>.
        </p>
      </Definition>

      <Callout type="info" title="Why 'Imaginary'?">
        <p>
          The term "imaginary" is historical and misleading—complex numbers are just as real and
          useful as the real numbers! They arise naturally in physics, engineering, and pure mathematics.
        </p>
      </Callout>

      {/* Complex Numbers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Complex Numbers</h2>

      <Definition title="Complex Number">
        <p>
          A <strong>complex number</strong> has the form:
        </p>
        <MathBlock>z = a + bi</MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>a</Math> and <Math>b</Math> are real numbers. We call <Math>a</Math> the{' '}
          <strong>real part</strong> and <Math>b</Math> the <strong>imaginary part</strong>.
        </p>
      </Definition>

      <Definition title="Notation" className="mt-6">
        <p>For a complex number <Math>z = a + bi</Math>:</p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li><Math>\text{'{Re}'}(z) = a</Math> — the real part</li>
          <li><Math>\text{'{Im}'}(z) = b</Math> — the imaginary part</li>
        </ul>
        <p className="mt-2 text-dark-400">
          Note: The imaginary part <Math>b</Math> is a <em>real</em> number (not <Math>bi</Math>).
        </p>
      </Definition>

      <Example title="Examples of Complex Numbers">
        <ul className="space-y-2 mt-2">
          <li>
            <Math>3 + 2i</Math> has real part 3 and imaginary part 2
          </li>
          <li>
            <Math>-1 + 4i</Math> has real part −1 and imaginary part 4
          </li>
          <li>
            <Math>5</Math> is complex with imaginary part 0 (pure real)
          </li>
          <li>
            <Math>3i</Math> has real part 0 and imaginary part 3 (pure imaginary)
          </li>
        </ul>
      </Example>

      {/* The Complex Plane */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Complex Plane</h2>

      <Definition title="The Complex Plane">
        <p>
          The <strong>complex plane</strong> (or Argand plane) represents complex numbers as points:
        </p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li>The horizontal axis is the <strong>real axis</strong></li>
          <li>The vertical axis is the <strong>imaginary axis</strong></li>
          <li>The point <Math>(a, b)</Math> represents <Math>z = a + bi</Math></li>
        </ul>
      </Definition>

      <ComplexPlaneVisualizer />

      {/* Arithmetic Operations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Arithmetic of Complex Numbers</h2>

      <Definition title="Addition">
        <p>Add real and imaginary parts separately:</p>
        <MathBlock>(a + bi) + (c + di) = (a + c) + (b + d)i</MathBlock>
      </Definition>

      <Definition title="Subtraction" className="mt-6">
        <p>Subtract real and imaginary parts separately:</p>
        <MathBlock>(a + bi) - (c + di) = (a - c) + (b - d)i</MathBlock>
      </Definition>

      <Definition title="Multiplication" className="mt-6">
        <p>Use FOIL and <Math>i^2 = -1</Math>:</p>
        <MathBlock>(a + bi)(c + di) = (ac - bd) + (ad + bc)i</MathBlock>
      </Definition>

      <Example title="Multiplication Example">
        <p>Compute <Math>(2 + 3i)(1 - 2i)</Math>:</p>
        <div className="mt-2 space-y-1 text-dark-300">
          <p><Math>= 2(1) + 2(-2i) + 3i(1) + 3i(-2i)</Math></p>
          <p><Math>= 2 - 4i + 3i - 6i^2</Math></p>
          <p><Math>= 2 - i - 6(-1)</Math></p>
          <p><Math>= 2 - i + 6 = 8 - i</Math></p>
        </div>
      </Example>

      <ComplexArithmetic />

      {/* Complex Conjugate */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Complex Conjugate</h2>

      <Definition title="Complex Conjugate">
        <p>
          The <strong>conjugate</strong> of <Math>z = a + bi</Math> is:
        </p>
        <MathBlock>\bar{'{z}'} = a - bi</MathBlock>
        <p className="mt-2 text-dark-400">
          Geometrically, the conjugate reflects <Math>z</Math> across the real axis.
        </p>
      </Definition>

      <Theorem
        title="Properties of Conjugates"
        proof={
          <>
            <p>Let <Math>z = a + bi</Math> and <Math>w = c + di</Math>.</p>
            <p className="mt-2"><strong>1. Sum:</strong> <Math>z + w = (a+c) + (b+d)i</Math>, so <Math>\overline{'{z+w}'} = (a+c) - (b+d)i = (a-bi) + (c-di) = \bar{'{z}'} + \bar{'{w}'}</Math>.</p>
            <p className="mt-2"><strong>2. Product:</strong> <Math>zw = (ac-bd) + (ad+bc)i</Math>, so <Math>\overline{'{zw}'} = (ac-bd) - (ad+bc)i</Math>.</p>
            <p>Also, <Math>\bar{'{z}'}\bar{'{w}'} = (a-bi)(c-di) = (ac-bd) + (-ad-bc)i = (ac-bd) - (ad+bc)i</Math>. ✓</p>
            <p className="mt-2"><strong>3. Double conjugate:</strong> <Math>\bar{'{z}'} = a - bi</Math>, so <Math>\overline{'{\bar{z}}'} = a - (-b)i = a + bi = z</Math>. ✓</p>
            <p className="mt-2"><strong>4. Product with conjugate:</strong> <Math>z\bar{'{z}'} = (a+bi)(a-bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2</Math>. ✓</p>
          </>
        }
      >
        <p>For complex numbers <Math>z</Math> and <Math>w</Math>:</p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li><Math>\overline{'{z + w}'} = \bar{'{z}'} + \bar{'{w}'}</Math></li>
          <li><Math>\overline{'{zw}'} = \bar{'{z}'} \cdot \bar{'{w}'}</Math></li>
          <li><Math>\overline{'{\bar{z}}'} = z</Math></li>
          <li><Math>z \cdot \bar{'{z}'} = a^2 + b^2</Math> (always real and non-negative)</li>
        </ul>
      </Theorem>

      {/* Modulus */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Modulus (Absolute Value)</h2>

      <Definition title="Modulus">
        <p>
          The <strong>modulus</strong> (or absolute value) of <Math>z = a + bi</Math> is:
        </p>
        <MathBlock>|z| = \sqrt{'{a^2 + b^2}'}</MathBlock>
        <p className="mt-2 text-dark-400">
          This is the distance from <Math>z</Math> to the origin in the complex plane.
        </p>
      </Definition>

      <Theorem
        title="Modulus and Conjugate"
        proof={
          <>
            <p>Let <Math>z = a + bi</Math>.</p>
            <p className="mt-2">Then <Math>z \cdot \bar{'{z}'} = (a + bi)(a - bi) = a^2 + b^2</Math> (proved above).</p>
            <p className="mt-2">Also, <Math>|z|^2 = (\sqrt{'{a^2 + b^2}'})^2 = a^2 + b^2</Math>.</p>
            <p className="mt-2">Therefore <Math>|z|^2 = z \cdot \bar{'{z}'}</Math>.</p>
          </>
        }
      >
        <MathBlock>|z|^2 = z \cdot \bar{'{z}'}</MathBlock>
      </Theorem>

      <Example title="Finding the Modulus">
        <p>Find <Math>|3 + 4i|</Math>:</p>
        <MathBlock>|3 + 4i| = \sqrt{'{3^2 + 4^2}'} = \sqrt{'{9 + 16}'} = \sqrt{'{25}'} = 5</MathBlock>
      </Example>

      {/* Division */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Division of Complex Numbers</h2>

      <Definition title="Division">
        <p>
          To divide by <Math>c + di</Math>, multiply numerator and denominator by the conjugate:
        </p>
        <MathBlock>
          \frac{'{a + bi}'}{'{c + di}'} = \frac{'{(a + bi)(c - di)}'}{'{(c + di)(c - di)}'} = \frac{'{(a + bi)(c - di)}'}{'{c^2 + d^2}'}
        </MathBlock>
      </Definition>

      <Example title="Division Example">
        <p>Compute <Math>\frac{'{1 + i}'}{'{2 - i}'}</Math>:</p>
        <div className="mt-2 space-y-1 text-dark-300">
          <p><Math>= \frac{'{(1 + i)(2 + i)}'}{'{(2 - i)(2 + i)}'}</Math></p>
          <p><Math>= \frac{'{2 + i + 2i + i^2}'}{'{4 + 1}'}</Math></p>
          <p><Math>= \frac{'{2 + 3i - 1}'}{'{5}'}</Math></p>
          <p><Math>= \frac{'{1 + 3i}'}{'{5}'} = \frac{'{1}'}{'{5}'} + \frac{'{3}'}{'{5}'}i</Math></p>
        </div>
      </Example>

      {/* Polar Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Polar Form</h2>

      <Definition title="Polar Representation">
        <p>
          A complex number <Math>z = a + bi</Math> can be written in <strong>polar form</strong>:
        </p>
        <MathBlock>z = r(\cos\theta + i\sin\theta) = r \cdot \text{'{cis}'}\theta</MathBlock>
        <p className="mt-2 text-dark-300">where:</p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li><Math>r = |z| = \sqrt{'{a^2 + b^2}'}</Math> is the modulus</li>
          <li><Math>\theta = \arg(z)</Math> is the <strong>argument</strong> (angle from positive real axis)</li>
        </ul>
      </Definition>

      <Definition title="Converting Between Forms" className="mt-6">
        <p><strong>Rectangular to polar:</strong></p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li><Math>r = \sqrt{'{a^2 + b^2}'}</Math></li>
          <li><Math>\theta = \arctan(b/a)</Math> (with appropriate quadrant adjustment)</li>
        </ul>
        <p className="mt-3"><strong>Polar to rectangular:</strong></p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li><Math>a = r\cos\theta</Math></li>
          <li><Math>b = r\sin\theta</Math></li>
        </ul>
      </Definition>

      <PolarFormConverter />

      {/* Multiplication in Polar Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Multiplication in Polar Form</h2>

      <Theorem
        title="Polar Multiplication"
        proof={
          <>
            <p>Let <Math>z_1 = r_1(\cos\theta_1 + i\sin\theta_1)</Math> and <Math>z_2 = r_2(\cos\theta_2 + i\sin\theta_2)</Math>.</p>
            <p className="mt-2">Then:</p>
            <MathBlock>z_1 z_2 = r_1 r_2 (\cos\theta_1 + i\sin\theta_1)(\cos\theta_2 + i\sin\theta_2)</MathBlock>
            <p className="mt-2">Expanding:</p>
            <MathBlock>= r_1 r_2 [(\cos\theta_1\cos\theta_2 - \sin\theta_1\sin\theta_2) + i(\sin\theta_1\cos\theta_2 + \cos\theta_1\sin\theta_2)]</MathBlock>
            <p className="mt-2">By the angle addition formulas:</p>
            <MathBlock>= r_1 r_2 [\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)]</MathBlock>
            <p className="mt-2"><Math>= r_1 r_2 \text{'{cis}'}(\theta_1 + \theta_2)</Math>.</p>
          </>
        }
      >
        <p>If <Math>z_1 = r_1 \text{'{cis}'}\theta_1</Math> and <Math>z_2 = r_2 \text{'{cis}'}\theta_2</Math>, then:</p>
        <MathBlock>z_1 z_2 = r_1 r_2 \text{'{cis}'}(\theta_1 + \theta_2)</MathBlock>
        <p className="mt-2 text-dark-400">
          To multiply: multiply the moduli, add the arguments.
        </p>
      </Theorem>

      <Theorem
        title="De Moivre's Theorem"
        proof={
          <>
            <p>We prove by induction for positive integers.</p>
            <p className="mt-2"><strong>Base case (n = 1):</strong> <Math>(r \text{'{cis}'}\theta)^1 = r^1 \text{'{cis}'}(1 \cdot \theta)</Math>. ✓</p>
            <p className="mt-2"><strong>Inductive step:</strong> Assume <Math>(r \text{'{cis}'}\theta)^k = r^k \text{'{cis}'}(k\theta)</Math>.</p>
            <p className="mt-2">Then:</p>
            <MathBlock>(r \text{'{cis}'}\theta)^{'{k+1}'} = (r \text{'{cis}'}\theta)^k \cdot (r \text{'{cis}'}\theta) = r^k \text{'{cis}'}(k\theta) \cdot r \text{'{cis}'}\theta</MathBlock>
            <p className="mt-2">By the polar multiplication rule:</p>
            <MathBlock>= r^{'{k+1}'} \text{'{cis}'}(k\theta + \theta) = r^{'{k+1}'} \text{'{cis}'}((k+1)\theta)</MathBlock>
            <p className="mt-2">For negative integers <Math>n = -m</Math> (where <Math>m {'>'} 0</Math>), use <Math>z^{'{-m}'} = 1/z^m</Math>.</p>
          </>
        }
      >
        <p>For any integer <Math>n</Math>:</p>
        <MathBlock>(r \text{'{cis}'}\theta)^n = r^n \text{'{cis}'}(n\theta)</MathBlock>
        <p className="mt-2 text-dark-400">
          This makes computing powers of complex numbers elegant.
        </p>
      </Theorem>

      <Example title="Powers Using De Moivre">
        <p>Compute <Math>(1 + i)^8</Math>:</p>
        <div className="mt-2 space-y-1 text-dark-300">
          <p>First, convert to polar: <Math>|1 + i| = \sqrt{'{2}'}</Math>, <Math>\arg(1 + i) = \pi/4</Math></p>
          <p><Math>1 + i = \sqrt{'{2}'} \text{'{cis}'}\frac{'{\pi}'}{'{4}'}</Math></p>
          <p>Apply De Moivre: <Math>(1 + i)^8 = (\sqrt{'{2}'})^8 \text{'{cis}'}\frac{'{8\pi}'}{'{4}'} = 16 \text{'{cis}'}(2\pi) = 16</Math></p>
        </div>
      </Example>

      {/* Euler's Formula */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Euler's Formula</h2>

      <Theorem
        title="Euler's Formula"
        proof={
          <>
            <p>Using Taylor series expansions:</p>
            <MathBlock>e^x = 1 + x + \frac{'{x^2}'}{'{2!}'} + \frac{'{x^3}'}{'{3!}'} + \frac{'{x^4}'}{'{4!}'} + \cdots</MathBlock>
            <p className="mt-2">Substituting <Math>x = i\theta</Math>:</p>
            <MathBlock>e^{'{i\\theta}'} = 1 + i\theta + \frac{'{(i\\theta)^2}'}{'{2!}'} + \frac{'{(i\\theta)^3}'}{'{3!}'} + \frac{'{(i\\theta)^4}'}{'{4!}'} + \cdots</MathBlock>
            <p className="mt-2">Since <Math>i^2 = -1</Math>, <Math>i^3 = -i</Math>, <Math>i^4 = 1</Math>, etc.:</p>
            <MathBlock>= 1 + i\theta - \frac{'{\theta^2}'}{'{2!}'} - i\frac{'{\theta^3}'}{'{3!}'} + \frac{'{\theta^4}'}{'{4!}'} + \cdots</MathBlock>
            <p className="mt-2">Grouping real and imaginary parts:</p>
            <MathBlock>= \left(1 - \frac{'{\theta^2}'}{'{2!}'} + \frac{'{\theta^4}'}{'{4!}'} - \cdots\right) + i\left(\theta - \frac{'{\theta^3}'}{'{3!}'} + \frac{'{\theta^5}'}{'{5!}'} - \cdots\right)</MathBlock>
            <p className="mt-2">These are the Taylor series for <Math>\cos\theta</Math> and <Math>\sin\theta</Math>:</p>
            <MathBlock>= \cos\theta + i\sin\theta</MathBlock>
          </>
        }
      >
        <p>For any real <Math>\theta</Math>:</p>
        <MathBlock>e^{'{i\theta}'} = \cos\theta + i\sin\theta</MathBlock>
        <p className="mt-2 text-dark-400">
          This remarkable formula connects exponentials with trigonometry.
        </p>
      </Theorem>

      <Callout type="info" title="Euler's Identity">
        <p>Setting <Math>\theta = \pi</Math> gives the famous identity:</p>
        <MathBlock>e^{'{i\pi}'} + 1 = 0</MathBlock>
        <p className="mt-2">
          This equation links five fundamental constants: <Math>e, i, \pi, 1, 0</Math>.
        </p>
      </Callout>

      <Definition title="Exponential Form" className="mt-6">
        <p>Using Euler's formula, we can write complex numbers as:</p>
        <MathBlock>z = re^{'{i\theta}'}</MathBlock>
        <p className="mt-2 text-dark-400">
          This form makes multiplication and powers even more intuitive.
        </p>
      </Definition>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Complex numbers</strong> have form <Math>z = a + bi</Math> where <Math>i^2 = -1</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>The <strong>complex plane</strong> plots <Math>a + bi</Math> at point <Math>(a, b)</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>The <strong>modulus</strong> <Math>|z| = \sqrt{'{a^2 + b^2}'}</Math> is the distance to the origin.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Polar form</strong> <Math>z = r \text{'{cis}'}\theta</Math> simplifies multiplication and powers.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Euler's formula</strong> <Math>e^{'{i\theta}'} = \cos\theta + i\sin\theta</Math> unifies exponentials and trig.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={15} sectionTitle="Complex Numbers" questions={section15Questions} />
    </LessonLayout>
  );
}
