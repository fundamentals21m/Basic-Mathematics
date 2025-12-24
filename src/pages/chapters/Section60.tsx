import { LessonLayout } from '../../components/layout/LessonLayout';
import { Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section60Questions } from '../../data/quizzes';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Determinants satisfy many useful properties that simplify computation and reveal
        structural features of matrices. Understanding these properties is essential for
        working with larger matrices.
      </p>

      {/* Multiplicative Property */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Multiplicative Property</h2>

      <Theorem title="Product of Determinants">
        <p>For square matrices <Math>A</Math> and <Math>B</Math> of the same size:</p>
        <MathBlock>
          {'\\det(AB) = \\det(A) \\cdot \\det(B)'}
        </MathBlock>
      </Theorem>

      <Example title="Verifying the Product Property">
        <p>Let <Math>{'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}'}</Math> and <Math>{'B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'\\det(A) = 4 - 6 = -2'}</Math>, <Math>{'\\det(B) = 6 - 0 = 6'}</Math></p>
          <p><Math>{'\\det(A) \\cdot \\det(B) = -2 \\cdot 6 = -12'}</Math></p>
          <MathBlock>
            {'AB = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}, \\quad \\det(AB) = 48 - 60 = -12 \\checkmark'}
          </MathBlock>
        </div>
      </Example>

      {/* Row/Column Operations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Effects of Row Operations</h2>

      <Theorem title="Swapping Rows">
        <p>Swapping two rows (or columns) negates the determinant:</p>
        <MathBlock>
          {'\\det\\begin{pmatrix} c & d \\\\ a & b \\end{pmatrix} = -\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}'}
        </MathBlock>
      </Theorem>

      <Example title="Row Swap">
        <MathBlock>
          {'\\det\\begin{pmatrix} 3 & 4 \\\\ 1 & 2 \\end{pmatrix} = 6 - 4 = 2'}
        </MathBlock>
        <MathBlock>
          {'\\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = 4 - 6 = -2'}
        </MathBlock>
        <p className="mt-2 text-dark-300">Swapping rows changed sign: 2 → -2.</p>
      </Example>

      <Theorem title="Scaling a Row">
        <p>Multiplying a row (or column) by <Math>k</Math> multiplies the determinant by <Math>k</Math>:</p>
        <MathBlock>
          {'\\det\\begin{pmatrix} ka & kb \\\\ c & d \\end{pmatrix} = k \\cdot \\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}'}
        </MathBlock>
      </Theorem>

      <Example title="Scaling a Row">
        <MathBlock>
          {'\\det\\begin{pmatrix} 2 & 4 \\\\ 1 & 3 \\end{pmatrix} = 6 - 4 = 2'}
        </MathBlock>
        <p className="mt-2 text-dark-300">
          First row is 2 times <Math>{'(1, 2)'}</Math>, so <Math>{'2 \\cdot \\det\\begin{pmatrix} 1 & 2 \\\\ 1 & 3 \\end{pmatrix} = 2(3-2) = 2'}</Math>.
        </p>
      </Example>

      <Theorem title="Adding Multiple of a Row">
        <p>Adding a multiple of one row to another doesn't change the determinant:</p>
        <MathBlock>
          {'\\det\\begin{pmatrix} a & b \\\\ c + ka & d + kb \\end{pmatrix} = \\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}'}
        </MathBlock>
      </Theorem>

      {/* Transpose */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Determinant of Transpose</h2>

      <Theorem title="Transpose Property">
        <MathBlock>
          {'\\det(A^T) = \\det(A)'}
        </MathBlock>
        <p className="mt-2 text-dark-400">The determinant is unchanged by transposition.</p>
      </Theorem>

      <Example title="Verifying Transpose Property">
        <MathBlock>
          {'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}'}
        </MathBlock>
        <p className="mt-2 text-dark-300">
          <Math>{'\\det(A) = 4 - 6 = -2'}</Math>, <Math>{'\\det(A^T) = 4 - 6 = -2'}</Math>.
        </p>
      </Example>

      {/* Inverse Determinant */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Determinant of Inverse</h2>

      <Theorem title="Inverse Property">
        <p>If <Math>A</Math> is invertible:</p>
        <MathBlock>
          {'\\det(A^{-1}) = \\frac{1}{\\det(A)}'}
        </MathBlock>
      </Theorem>

      <Example title="Determinant of Inverse">
        <p>If <Math>{'\\det(A) = 5'}</Math>, then <Math>{'\\det(A^{-1}) = 1/5'}</Math>.</p>
        <p className="mt-2 text-dark-300">
          This follows from <Math>{'\\det(AA^{-1}) = \\det(I) = 1'}</Math>.
        </p>
      </Example>

      {/* Scalar Multiplication */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Scalar Multiplication</h2>

      <Theorem title="Determinant of Scalar Multiple">
        <p>For an <Math>{'n \\times n'}</Math> matrix and scalar <Math>c</Math>:</p>
        <MathBlock>
          {'\\det(cA) = c^n \\det(A)'}
        </MathBlock>
        <p className="mt-2 text-dark-400">For 2×2 matrices: <Math>{'\\det(cA) = c^2 \\det(A)'}</Math>.</p>
      </Theorem>

      <Example title="Scaling the Matrix">
        <p>If <Math>{'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}'}</Math>, find <Math>{'\\det(3A)'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'\\det(A) = -2'}</Math></p>
          <p><Math>{'\\det(3A) = 3^2 \\cdot (-2) = 9 \\cdot (-2) = -18'}</Math></p>
        </div>
      </Example>

      <Callout type="warning" title="Common Mistake">
        <p>
          <Math>{'\\det(cA) \\neq c \\cdot \\det(A)'}</Math>. Every row gets multiplied by <Math>c</Math>,
          so the determinant picks up a factor of <Math>{'c^n'}</Math>.
        </p>
      </Callout>

      {/* Special Cases */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Cases</h2>

      <Theorem title="Identical Rows">
        <p>If a matrix has two identical rows (or columns), its determinant is zero:</p>
        <MathBlock>
          {'\\det\\begin{pmatrix} a & b \\\\ a & b \\end{pmatrix} = ab - ba = 0'}
        </MathBlock>
      </Theorem>

      <Theorem title="Zero Row">
        <p>If a matrix has a row (or column) of zeros, its determinant is zero.</p>
      </Theorem>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><Math>{'\\det(AB) = \\det(A) \\cdot \\det(B)'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Row swap: negates det. Scale row by <Math>k</Math>: multiplies det by <Math>k</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><Math>{'\\det(A^T) = \\det(A)'}</Math> and <Math>{'\\det(A^{-1}) = 1/\\det(A)'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><Math>{'\\det(cA) = c^n \\det(A)'}</Math> for <Math>{'n \\times n'}</Math> matrix</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={60} sectionTitle="Properties of 2×2 Determinants" questions={section60Questions} />
    </LessonLayout>
  );
}
