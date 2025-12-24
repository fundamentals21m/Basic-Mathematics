import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section37Questions } from '../../data/quizzes';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        One of the most beautiful applications of trigonometry is describing <strong>rotations</strong>
        in the plane. Using sine and cosine, we can rotate any point around the origin by any angle.
      </p>

      {/* Rotation Formula */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Rotation Formula</h2>

      <Theorem
        title="Rotation Around the Origin"
        proof={
          <>
            <p>Let <Math>P = (x, y)</Math> be written in polar form: <Math>x = r\cos\alpha</Math>, <Math>y = r\sin\alpha</Math>.</p>
            <p className="mt-2">After rotating by angle <Math>\theta</Math>, the new point has angle <Math>\alpha + \theta</Math>:</p>
            <MathBlock>
              x' = r\cos(\alpha + \theta) = r(\cos\alpha\cos\theta - \sin\alpha\sin\theta)
            </MathBlock>
            <MathBlock>
              = r\cos\alpha\cos\theta - r\sin\alpha\sin\theta = x\cos\theta - y\sin\theta
            </MathBlock>
            <p className="mt-2">Similarly for <Math>y'</Math>:</p>
            <MathBlock>
              y' = r\sin(\alpha + \theta) = x\sin\theta + y\cos\theta
            </MathBlock>
          </>
        }
      >
        <p>
          To rotate the point <Math>(x, y)</Math> counterclockwise by angle <Math>\theta</Math> around the origin:
        </p>
        <MathBlock>
          \begin{'{pmatrix}'} x' \\ y' \end{'{pmatrix}'} = \begin{'{pmatrix}'} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{'{pmatrix}'} \begin{'{pmatrix}'} x \\ y \end{'{pmatrix}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Or explicitly: <Math>x' = x\cos\theta - y\sin\theta</Math>, <Math>y' = x\sin\theta + y\cos\theta</Math>
        </p>
      </Theorem>

      <Example title="Rotating by 90°">
        <p>Rotate the point <Math>(3, 2)</Math> counterclockwise by <Math>90°</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>With <Math>{'\\theta = 90° = \\frac{\\pi}{2}'}</Math>: <Math>\cos 90° = 0</Math>, <Math>\sin 90° = 1</Math>.</p>
          <MathBlock>
            x' = 3(0) - 2(1) = -2
          </MathBlock>
          <MathBlock>
            y' = 3(1) + 2(0) = 3
          </MathBlock>
          <p className="mt-2">The rotated point is <Math>(-2, 3)</Math>.</p>
        </div>
      </Example>

      <Callout type="info" title="90° Rotation Shortcut">
        <p>
          Rotating <Math>(x, y)</Math> by 90° counterclockwise gives <Math>(-y, x)</Math>.
          Rotating by 90° clockwise gives <Math>(y, -x)</Math>.
        </p>
      </Callout>

      {/* Matrix Form */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Rotation Matrix</h2>

      <Definition title="Rotation Matrix">
        <p>
          The <strong>rotation matrix</strong> for angle <Math>\theta</Math> is:
        </p>
        <MathBlock>
          {'R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}'}
        </MathBlock>
      </Definition>

      <Theorem title="Properties of Rotation Matrices">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Determinant:</strong> <Math>\det(R_\theta) = \cos^2\theta + \sin^2\theta = 1</Math></li>
          <li><strong>Composition:</strong> <Math>{'R_\\alpha R_\\beta = R_{\\alpha + \\beta}'}</Math></li>
          <li><strong>Inverse:</strong> <Math>{'R_\\theta^{-1} = R_{-\\theta}'}</Math></li>
        </ul>
      </Theorem>

      <Example title="Rotating by 45°">
        <p>Rotate <Math>(1, 0)</Math> by <Math>45°</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'\\cos 45° = \\sin 45° = \\frac{\\sqrt{2}}{2}'}</Math></p>
          <MathBlock>
            {"x' = 1 \\cdot \\frac{\\sqrt{2}}{2} - 0 \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2}}{2}"}
          </MathBlock>
          <MathBlock>
            {"y' = 1 \\cdot \\frac{\\sqrt{2}}{2} + 0 \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2}}{2}"}
          </MathBlock>
          <p className="mt-2">The result is <Math>{'\\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)'}</Math>, which lies on the unit circle at angle 45°.</p>
        </div>
      </Example>

      {/* Rotation Around Other Points */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Rotation Around Any Point</h2>

      <p className="text-dark-300 mb-4">
        To rotate around a point <Math>C = (a, b)</Math> other than the origin:
      </p>

      <Theorem title="Rotation Around Point C">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Translate so <Math>C</Math> is at the origin: <Math>(x - a, y - b)</Math></li>
          <li>Apply the rotation matrix</li>
          <li>Translate back: add <Math>(a, b)</Math></li>
        </ol>
        <MathBlock>
          \begin{'{pmatrix}'} x' \\ y' \end{'{pmatrix}'} = R_\theta \begin{'{pmatrix}'} x - a \\ y - b \end{'{pmatrix}'} + \begin{'{pmatrix}'} a \\ b \end{'{pmatrix}'}
        </MathBlock>
      </Theorem>

      <Example title="Rotation Around (1, 1)">
        <p>Rotate <Math>(3, 1)</Math> by <Math>90°</Math> around the point <Math>(1, 1)</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Step 1:</strong> Translate: <Math>(3 - 1, 1 - 1) = (2, 0)</Math></p>
          <p><strong>Step 2:</strong> Rotate by 90°: <Math>(2, 0) \to (0, 2)</Math></p>
          <p><strong>Step 3:</strong> Translate back: <Math>(0 + 1, 2 + 1) = (1, 3)</Math></p>
        </div>
      </Example>

      {/* Clockwise Rotation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Clockwise Rotation</h2>

      <Theorem title="Clockwise Rotation">
        <p>
          A clockwise rotation by <Math>\theta</Math> is the same as a counterclockwise rotation by <Math>-\theta</Math>:
        </p>
        <MathBlock>
          R_{'{-\theta}'} = \begin{'{pmatrix}'} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{'{pmatrix}'}
        </MathBlock>
      </Theorem>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Applications</h2>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <h4 className="font-semibold text-dark-200 mb-3">Computer Graphics</h4>
          <p className="text-dark-300 text-sm">
            Rotating sprites, 3D models, and camera views all use rotation matrices.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <h4 className="font-semibold text-dark-200 mb-3">Physics</h4>
          <p className="text-dark-300 text-sm">
            Describing circular motion, angular momentum, and reference frame changes.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><Math>x' = x\cos\theta - y\sin\theta</Math>, <Math>y' = x\sin\theta + y\cos\theta</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Rotation matrix: <Math>R_\theta</Math> with <Math>\det(R_\theta) = 1</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>90° rotation: <Math>(x, y) \to (-y, x)</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>To rotate around <Math>(a, b)</Math>: translate, rotate, translate back</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={37} sectionTitle="Rotations" questions={section37Questions} />
    </LessonLayout>
  );
}
