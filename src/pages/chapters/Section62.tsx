import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section62Questions } from '../../data/quizzes';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The properties of 2×2 determinants extend to 3×3 (and higher) matrices. Understanding
        these properties allows efficient computation and deeper insight into matrix structure.
      </p>

      {/* Row Operations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Row and Column Operations</h2>

      <Theorem title="Swapping Rows or Columns">
        <p>Swapping two rows (or columns) negates the determinant:</p>
        <MathBlock>
          {'\\det(\\text{swap } R_i \\leftrightarrow R_j) = -\\det(A)'}
        </MathBlock>
      </Theorem>

      <Example title="Row Swap in 3×3">
        <MathBlock>
          {'\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 10 \\end{pmatrix} = -3'}
        </MathBlock>
        <p className="mt-2 text-dark-300">Swapping rows 1 and 2:</p>
        <MathBlock>
          {'\\det\\begin{pmatrix} 4 & 5 & 6 \\\\ 1 & 2 & 3 \\\\ 7 & 8 & 10 \\end{pmatrix} = 3'}
        </MathBlock>
      </Example>

      <Theorem title="Scaling a Row">
        <p>Multiplying a row by <Math>k</Math> multiplies the determinant by <Math>k</Math>:</p>
        <MathBlock>
          {'\\det(\\text{scale } R_i \\text{ by } k) = k \\cdot \\det(A)'}
        </MathBlock>
      </Theorem>

      <Theorem title="Adding Rows">
        <p>Adding a multiple of one row to another preserves the determinant:</p>
        <MathBlock>
          {'\\det(R_i \\to R_i + kR_j) = \\det(A)'}
        </MathBlock>
      </Theorem>

      {/* Transpose and Inverse */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Transpose and Inverse</h2>

      <Theorem title="Transpose">
        <MathBlock>
          {'\\det(A^T) = \\det(A)'}
        </MathBlock>
      </Theorem>

      <Theorem title="Inverse">
        <p>If <Math>A</Math> is invertible:</p>
        <MathBlock>
          {'\\det(A^{-1}) = \\frac{1}{\\det(A)}'}
        </MathBlock>
      </Theorem>

      {/* Products */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Products and Powers</h2>

      <Theorem title="Product Rule">
        <MathBlock>
          {'\\det(AB) = \\det(A) \\cdot \\det(B)'}
        </MathBlock>
      </Theorem>

      <Theorem title="Power Rule">
        <MathBlock>
          {'\\det(A^n) = (\\det(A))^n'}
        </MathBlock>
      </Theorem>

      <Example title="Powers">
        <p>If <Math>{'\\det(A) = 2'}</Math>, then <Math>{'\\det(A^3) = 2^3 = 8'}</Math>.</p>
      </Example>

      {/* Scalar Multiplication */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Scalar Multiplication</h2>

      <Theorem title="Scalar Multiple">
        <p>For an <Math>{'n \\times n'}</Math> matrix:</p>
        <MathBlock>
          {'\\det(cA) = c^n \\det(A)'}
        </MathBlock>
        <p className="mt-2 text-dark-400">For 3×3: <Math>{'\\det(cA) = c^3 \\det(A)'}</Math></p>
      </Theorem>

      <Example title="Scaling a 3×3 Matrix">
        <p>If <Math>{'\\det(A) = 4'}</Math> for a 3×3 matrix, find <Math>{'\\det(2A)'}</Math>.</p>
        <div className="mt-3 text-dark-300">
          <MathBlock>
            {'\\det(2A) = 2^3 \\cdot 4 = 8 \\cdot 4 = 32'}
          </MathBlock>
        </div>
      </Example>

      {/* Block Matrices */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Structure</h2>

      <Theorem title="Block Triangular">
        <p>For block triangular matrices:</p>
        <MathBlock>
          {'\\det\\begin{pmatrix} A & B \\\\ 0 & D \\end{pmatrix} = \\det(A) \\cdot \\det(D)'}
        </MathBlock>
      </Theorem>

      <Example title="Block Diagonal">
        <MathBlock>
          {'\\det\\begin{pmatrix} 2 & 1 & 0 \\\\ 3 & 4 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix} = \\det\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix} \\cdot 5 = (8-3) \\cdot 5 = 25'}
        </MathBlock>
      </Example>

      {/* Singular Matrices */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Conditions for Zero Determinant</h2>

      <Theorem title="det(A) = 0 When">
        <ul className="list-disc list-inside space-y-1">
          <li>A row or column is all zeros</li>
          <li>Two rows (or columns) are identical</li>
          <li>Two rows (or columns) are proportional</li>
          <li>Rows (or columns) are linearly dependent</li>
        </ul>
      </Theorem>

      <Example title="Proportional Rows">
        <MathBlock>
          {'\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 4 & 5 & 6 \\end{pmatrix} = 0'}
        </MathBlock>
        <p className="mt-2 text-dark-300">
          Row 2 = 2 × Row 1, so the rows are linearly dependent.
        </p>
      </Example>

      <Callout type="info" title="Computing Efficiently">
        <p>
          Use row operations to create zeros, making expansion easier. Row operations that
          preserve the determinant (adding multiples) let you reduce to triangular form.
        </p>
      </Callout>

      {/* Adjugate Matrix */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Adjugate Matrix</h2>

      <Definition title="Adjugate (Classical Adjoint)">
        <p>
          The <strong>adjugate</strong> adj(A) is the transpose of the cofactor matrix:
        </p>
        <MathBlock>
          {'(\\text{adj}(A))_{ij} = C_{ji}'}
        </MathBlock>
      </Definition>

      <Theorem title="Inverse via Adjugate">
        <p>If <Math>{'\\det(A) \\neq 0'}</Math>:</p>
        <MathBlock>
          {'A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)'}
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
            <span>Same row operation rules as 2×2: swap negates, scale multiplies</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><Math>{'\\det(AB) = \\det(A) \\det(B)'}</Math> and <Math>{'\\det(A^n) = (\\det(A))^n'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><Math>{'\\det(cA) = c^3 \\det(A)'}</Math> for 3×3 matrices</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><Math>{'A^{-1} = (1/\\det(A)) \\cdot \\text{adj}(A)'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={62} sectionTitle="Properties of 3×3 Determinants" questions={section62Questions} />
    </LessonLayout>
  );
}
