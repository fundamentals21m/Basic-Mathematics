import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section61Questions } from '../../data/quizzes';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The determinant extends naturally to 3×3 matrices. While more complex to compute,
        3×3 determinants are essential for solving systems of three equations and understanding
        transformations in 3D space.
      </p>

      {/* 3×3 Determinant Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The 3×3 Determinant</h2>

      <Definition title="3×3 Determinant">
        <p>For a 3×3 matrix:</p>
        <MathBlock>
          {'A = \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}'}
        </MathBlock>
        <p>The determinant is:</p>
        <MathBlock>
          {'\\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)'}
        </MathBlock>
      </Definition>

      {/* Expansion Methods */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Cofactor Expansion</h2>

      <Definition title="Minor and Cofactor">
        <p>
          The <strong>minor</strong> <Math>{'M_{ij}'}</Math> is the determinant of the
          <Math>{'(n-1) \\times (n-1)'}</Math> matrix obtained by deleting row <Math>i</Math> and column <Math>j</Math>.
        </p>
        <p className="mt-2">
          The <strong>cofactor</strong> is: <Math>{'C_{ij} = (-1)^{i+j} M_{ij}'}</Math>
        </p>
      </Definition>

      <Theorem title="Expansion Along First Row">
        <MathBlock>
          {'\\det(A) = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Expand along any row or column; the result is the same.
        </p>
      </Theorem>

      <Example title="Computing a 3×3 Determinant">
        <p>Find <Math>{'\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Expand along the first row:</p>
          <MathBlock>
            {'= 1 \\cdot \\det\\begin{pmatrix} 5 & 6 \\\\ 8 & 9 \\end{pmatrix} - 2 \\cdot \\det\\begin{pmatrix} 4 & 6 \\\\ 7 & 9 \\end{pmatrix} + 3 \\cdot \\det\\begin{pmatrix} 4 & 5 \\\\ 7 & 8 \\end{pmatrix}'}
          </MathBlock>
          <MathBlock>
            {'= 1(45-48) - 2(36-42) + 3(32-35)'}
          </MathBlock>
          <MathBlock>
            {'= 1(-3) - 2(-6) + 3(-3) = -3 + 12 - 9 = 0'}
          </MathBlock>
        </div>
      </Example>

      <Callout type="info" title="Why Zero?">
        <p>
          This determinant is zero because the rows are linearly dependent:
          Row 2 = Row 1 + 3(1,1,1) and Row 3 = Row 1 + 6(1,1,1).
        </p>
      </Callout>

      {/* Rule of Sarrus */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Rule of Sarrus</h2>

      <Theorem title="Sarrus' Rule (3×3 Only)">
        <p>Copy the first two columns to the right, then:</p>
        <MathBlock>
          {'\\det(A) = aei + bfg + cdh - ceg - afh - bdi'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Sum of down-diagonals minus sum of up-diagonals.
        </p>
      </Theorem>

      <Example title="Using Sarrus' Rule">
        <p>Find <Math>{'\\det\\begin{pmatrix} 2 & 1 & 3 \\\\ 1 & 0 & 2 \\\\ 4 & 1 & 1 \\end{pmatrix}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Down-diagonals: <Math>{'2(0)(1) + 1(2)(4) + 3(1)(1) = 0 + 8 + 3 = 11'}</Math></p>
          <p>Up-diagonals: <Math>{'3(0)(4) + 2(2)(1) + 1(1)(1) = 0 + 4 + 1 = 5'}</Math></p>
          <MathBlock>
            {'\\det = 11 - 5 = 6'}
          </MathBlock>
        </div>
      </Example>

      {/* Another Example */}
      <Example title="Determinant with Nice Numbers">
        <p>Find <Math>{'\\det\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>For a diagonal matrix, the determinant is the product of diagonal entries:</p>
          <MathBlock>
            {'\\det = 1 \\cdot 2 \\cdot 3 = 6'}
          </MathBlock>
        </div>
      </Example>

      {/* Triangular Matrices */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Triangular Matrices</h2>

      <Theorem title="Determinant of Triangular Matrix">
        <p>For upper or lower triangular matrices, the determinant equals the product of diagonal entries:</p>
        <MathBlock>
          {'\\det\\begin{pmatrix} a & b & c \\\\ 0 & d & e \\\\ 0 & 0 & f \\end{pmatrix} = adf'}
        </MathBlock>
      </Theorem>

      <Example title="Upper Triangular Matrix">
        <MathBlock>
          {'\\det\\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & 4 \\\\ 0 & 0 & 7 \\end{pmatrix} = 2 \\cdot 3 \\cdot 7 = 42'}
        </MathBlock>
      </Example>

      {/* Geometric Interpretation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Geometric Interpretation</h2>

      <Theorem title="Volume Scaling">
        <p>
          For a 3×3 matrix, <Math>{'|\\det(A)|'}</Math> gives the factor by which the
          transformation scales volumes. If <Math>{'\\det(A) < 0'}</Math>, orientation is reversed.
        </p>
      </Theorem>

      <Example title="Volume Interpretation">
        <p>
          The matrix <Math>{'\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix}'}</Math> has
          determinant <Math>{'2 \\cdot 3 \\cdot 4 = 24'}</Math>.
        </p>
        <p className="mt-2 text-dark-300">
          This transformation scales volumes by 24 (stretches by 2, 3, and 4 along each axis).
        </p>
      </Example>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>Expand along any row or column using cofactors</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Sarrus' rule: down-diagonals minus up-diagonals (3×3 only)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Triangular/diagonal: det = product of diagonal entries</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>|det| = volume scaling factor in 3D</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={61} sectionTitle="Determinants of Order 3" questions={section61Questions} />
    </LessonLayout>
  );
}
