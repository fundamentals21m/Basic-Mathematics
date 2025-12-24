import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section58Questions } from '../../data/quizzes';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Matrices</strong> are rectangular arrays of numbers that arise naturally when
        solving systems of linear equations. They provide a compact notation and powerful
        computational tools for linear algebra.
      </p>

      {/* Matrix Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">What is a Matrix?</h2>

      <Definition title="Matrix">
        <p>
          A <strong>matrix</strong> is a rectangular array of numbers arranged in rows and columns:
        </p>
        <MathBlock>
          {'A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This is an <Math>{'m \\times n'}</Math> matrix with <Math>m</Math> rows and <Math>n</Math> columns.
        </p>
      </Definition>

      <Example title="2×3 Matrix">
        <MathBlock>
          {'A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}'}
        </MathBlock>
        <p className="mt-2 text-dark-300">
          This matrix has 2 rows and 3 columns. The entry <Math>{'a_{12} = 2'}</Math> is in row 1, column 2.
        </p>
      </Example>

      {/* Special Matrices */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Types of Matrices</h2>

      <Definition title="Square Matrix">
        <p>
          A matrix with equal rows and columns (<Math>{'m = n'}</Math>):
        </p>
        <MathBlock>
          {'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\quad \\text{(2×2 square matrix)}'}
        </MathBlock>
      </Definition>

      <Definition title="Identity Matrix">
        <p>
          The <strong>identity matrix</strong> <Math>I_n</Math> has 1s on the diagonal and 0s elsewhere:
        </p>
        <MathBlock>
          {'I_2 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\quad I_3 = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}'}
        </MathBlock>
      </Definition>

      <Definition title="Zero Matrix">
        <p>
          A matrix with all entries equal to zero:
        </p>
        <MathBlock>
          {'O = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}'}
        </MathBlock>
      </Definition>

      {/* Matrix Operations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Matrix Operations</h2>

      <Theorem title="Matrix Addition">
        <p>Add matrices of the same size entry by entry:</p>
        <MathBlock>
          {'(A + B)_{ij} = a_{ij} + b_{ij}'}
        </MathBlock>
      </Theorem>

      <Example title="Adding Matrices">
        <MathBlock>
          {'\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} = \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}'}
        </MathBlock>
      </Example>

      <Theorem title="Scalar Multiplication">
        <p>Multiply each entry by the scalar:</p>
        <MathBlock>
          {'(cA)_{ij} = c \\cdot a_{ij}'}
        </MathBlock>
      </Theorem>

      <Example title="Scalar Multiplication">
        <MathBlock>
          {'3 \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}'}
        </MathBlock>
      </Example>

      {/* Matrix Multiplication */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Matrix Multiplication</h2>

      <Theorem title="Matrix Product">
        <p>
          For <Math>{'A'}</Math> (<Math>{'m \\times n'}</Math>) and <Math>{'B'}</Math> (<Math>{'n \\times p'}</Math>),
          the product <Math>{'AB'}</Math> is <Math>{'m \\times p'}</Math>:
        </p>
        <MathBlock>
          {'(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">Row <Math>i</Math> of <Math>A</Math> dots column <Math>j</Math> of <Math>B</Math>.</p>
      </Theorem>

      <Example title="2×2 Matrix Multiplication">
        <MathBlock>
          {'\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} = \\begin{pmatrix} 1(5)+2(7) & 1(6)+2(8) \\\\ 3(5)+4(7) & 3(6)+4(8) \\end{pmatrix} = \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}'}
        </MathBlock>
      </Example>

      <Callout type="warning" title="Non-Commutativity">
        <p>
          Matrix multiplication is <strong>not commutative</strong>: <Math>{'AB \\neq BA'}</Math> in general.
        </p>
      </Callout>

      {/* Transpose */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Transpose</h2>

      <Definition title="Transpose">
        <p>
          The <strong>transpose</strong> <Math>{'A^T'}</Math> swaps rows and columns:
        </p>
        <MathBlock>
          {'(A^T)_{ij} = a_{ji}'}
        </MathBlock>
      </Definition>

      <Example title="Matrix Transpose">
        <MathBlock>
          {'\\text{If } A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}, \\text{ then } A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}'}
        </MathBlock>
      </Example>

      <Theorem title="Transpose Properties">
        <ul className="list-disc list-inside space-y-1">
          <li><Math>{'(A^T)^T = A'}</Math></li>
          <li><Math>{'(A + B)^T = A^T + B^T'}</Math></li>
          <li><Math>{'(AB)^T = B^T A^T'}</Math></li>
        </ul>
      </Theorem>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>An <Math>{'m \\times n'}</Math> matrix has <Math>m</Math> rows and <Math>n</Math> columns</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Add/subtract matrices of the same size entry by entry</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Multiply <Math>{'m \\times n'}</Math> by <Math>{'n \\times p'}</Math> to get <Math>{'m \\times p'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Matrix multiplication is not commutative</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={58} sectionTitle="Matrices" questions={section58Questions} />
    </LessonLayout>
  );
}
