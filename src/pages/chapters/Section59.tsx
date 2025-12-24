import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section59Questions } from '../../data/quizzes';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The <strong>determinant</strong> is a scalar value computed from a square matrix that
        encodes important properties: whether a matrix is invertible, and by how much it
        scales areas or volumes.
      </p>

      {/* 2×2 Determinant */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Determinant of a 2×2 Matrix</h2>

      <Definition title="2×2 Determinant">
        <p>
          For a 2×2 matrix:
        </p>
        <MathBlock>
          {'A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}'}
        </MathBlock>
        <p>The <strong>determinant</strong> is:</p>
        <MathBlock>
          {'\\det(A) = |A| = ad - bc'}
        </MathBlock>
        <p className="mt-2 text-dark-400">Main diagonal minus anti-diagonal.</p>
      </Definition>

      <Example title="Computing a 2×2 Determinant">
        <p>Find <Math>{'\\det\\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\det = 3(4) - 2(1) = 12 - 2 = 10'}
          </MathBlock>
        </div>
      </Example>

      <Example title="Another Example">
        <p>Find <Math>{'\\det\\begin{pmatrix} 5 & 7 \\\\ 2 & 3 \\end{pmatrix}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\det = 5(3) - 7(2) = 15 - 14 = 1'}
          </MathBlock>
        </div>
      </Example>

      {/* Geometric Interpretation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Geometric Interpretation</h2>

      <Theorem title="Area Scaling">
        <p>
          The absolute value <Math>{'|\\det(A)|'}</Math> gives the factor by which the matrix
          transformation scales areas. If <Math>{'\\det(A) < 0'}</Math>, orientation is reversed.
        </p>
      </Theorem>

      <Example title="Area Interpretation">
        <p>
          The matrix <Math>{'\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}'}</Math> has determinant <Math>{'2(3) - 0 = 6'}</Math>.
        </p>
        <p className="mt-2 text-dark-300">
          This transformation scales areas by a factor of 6 (stretches by 2 horizontally and 3 vertically).
        </p>
      </Example>

      {/* Invertibility */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Invertibility</h2>

      <Theorem title="Invertibility Criterion">
        <p>A 2×2 matrix <Math>A</Math> is invertible if and only if <Math>{'\\det(A) \\neq 0'}</Math>.</p>
      </Theorem>

      <Theorem title="Inverse Formula">
        <p>If <Math>{'\\det(A) \\neq 0'}</Math>:</p>
        <MathBlock>
          {'A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}'}
        </MathBlock>
      </Theorem>

      <Example title="Finding an Inverse">
        <p>Find the inverse of <Math>{'A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'\\det(A) = 12 - 2 = 10 \\neq 0'}</Math>, so <Math>A</Math> is invertible.</p>
          <MathBlock>
            {'A^{-1} = \\frac{1}{10} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix} = \\begin{pmatrix} 0.4 & -0.2 \\\\ -0.1 & 0.3 \\end{pmatrix}'}
          </MathBlock>
        </div>
      </Example>

      <Example title="Non-Invertible Matrix">
        <p>Is <Math>{'B = \\begin{pmatrix} 2 & 4 \\\\ 1 & 2 \\end{pmatrix}'}</Math> invertible?</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\det(B) = 2(2) - 4(1) = 4 - 4 = 0'}
          </MathBlock>
          <p>Since <Math>{'\\det(B) = 0'}</Math>, the matrix is <strong>not invertible</strong> (singular).</p>
        </div>
      </Example>

      <Callout type="info" title="Singular Matrix">
        <p>
          A matrix with determinant zero is called <strong>singular</strong>. Its rows (or columns)
          are linearly dependent—one is a multiple of the other.
        </p>
      </Callout>

      {/* Systems of Equations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Connection to Linear Systems</h2>

      <p className="text-dark-300">
        For a system <Math>{'Ax = b'}</Math>:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
        <li><Math>{'\\det(A) \\neq 0'}</Math>: unique solution <Math>{'x = A^{-1}b'}</Math></li>
        <li><Math>{'\\det(A) = 0'}</Math>: no solution or infinitely many solutions</li>
      </ul>

      <Example title="Solving a System">
        <p>Solve using the inverse:</p>
        <MathBlock>
          {'\\begin{cases} 3x + 2y = 5 \\\\ x + 4y = 6 \\end{cases}'}
        </MathBlock>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>
            <Math>{'A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}'}</Math>,
            <Math>{'b = \\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}'}</Math>
          </p>
          <MathBlock>
            {'x = A^{-1}b = \\frac{1}{10}\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}\\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix} = \\frac{1}{10}\\begin{pmatrix} 8 \\\\ 13 \\end{pmatrix} = \\begin{pmatrix} 0.8 \\\\ 1.3 \\end{pmatrix}'}
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
            <span>For <Math>{'\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}'}</Math>: <Math>{'\\det = ad - bc'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Matrix is invertible ⟺ determinant ≠ 0</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>|det| = area scaling factor of the transformation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>det = 0 means rows/columns are linearly dependent</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={59} sectionTitle="Determinants of Order 2" questions={section59Questions} />
    </LessonLayout>
  );
}
