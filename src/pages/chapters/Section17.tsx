import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section17Questions } from '../../data/quizzes';
import { MatrixBuilder, Determinant2x2Calculator, Determinant3x3Calculator, CramersRuleSolver } from '../../components/visualizations';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Determinants</strong> are special numbers associated with square matrices.
        They have profound geometric meaning (area, volume) and algebraic applications
        (solving systems of equations, testing invertibility).
      </p>

      {/* Matrices Introduction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Matrices</h2>

      <Definition title="Matrix">
        <p>
          A <strong>matrix</strong> is a rectangular array of numbers arranged in rows and columns.
          An <Math>m \times n</Math> matrix has <Math>m</Math> rows and <Math>n</Math> columns.
        </p>
        <MathBlock>
          A = \begin{'{bmatrix}'} a_{'{11}'} & a_{'{12}'} & \cdots & a_{'{1n}'} \\ a_{'{21}'} & a_{'{22}'} & \cdots & a_{'{2n}'} \\ \vdots & \vdots & \ddots & \vdots \\ a_{'{m1}'} & a_{'{m2}'} & \cdots & a_{'{mn}'} \end{'{bmatrix}'}
        </MathBlock>
      </Definition>

      <Example title="Matrix Examples">
        <div className="space-y-3">
          <div>
            <p className="text-dark-400 text-sm">2×2 matrix:</p>
            <MathBlock>\begin{'{bmatrix}'} 1 & 2 \\ 3 & 4 \end{'{bmatrix}'}</MathBlock>
          </div>
          <div>
            <p className="text-dark-400 text-sm">2×3 matrix:</p>
            <MathBlock>\begin{'{bmatrix}'} 1 & 0 & -1 \\ 2 & 5 & 3 \end{'{bmatrix}'}</MathBlock>
          </div>
          <div>
            <p className="text-dark-400 text-sm">3×3 matrix:</p>
            <MathBlock>\begin{'{bmatrix}'} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{'{bmatrix}'}</MathBlock>
          </div>
        </div>
      </Example>

      <MatrixBuilder />

      {/* 2x2 Determinants */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Determinants of Order 2</h2>

      <Definition title="2×2 Determinant">
        <p>
          The <strong>determinant</strong> of a 2×2 matrix is:
        </p>
        <MathBlock>
          \det \begin{'{bmatrix}'} a & b \\ c & d \end{'{bmatrix}'} = ad - bc
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Written as <Math>|A|</Math> or <Math>\det(A)</Math>. Multiply diagonals and subtract.
        </p>
      </Definition>

      <Example title="Computing 2×2 Determinants">
        <div className="space-y-4">
          <div>
            <MathBlock>
              \det \begin{'{bmatrix}'} 3 & 2 \\ 1 & 4 \end{'{bmatrix}'} = (3)(4) - (2)(1) = 12 - 2 = 10
            </MathBlock>
          </div>
          <div>
            <MathBlock>
              \det \begin{'{bmatrix}'} 5 & -2 \\ 3 & 1 \end{'{bmatrix}'} = (5)(1) - (-2)(3) = 5 + 6 = 11
            </MathBlock>
          </div>
        </div>
      </Example>

      <Determinant2x2Calculator />

      <Callout type="info" title="Geometric Interpretation">
        <p>
          The absolute value of a 2×2 determinant equals the <strong>area</strong> of the
          parallelogram formed by the row (or column) vectors. If the determinant is negative,
          the vectors have opposite orientation.
        </p>
      </Callout>

      {/* Properties of 2x2 Determinants */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Determinants</h2>

      <Theorem title="D1: Determinant of Identity">
        <MathBlock>\det(I) = \det \begin{'{bmatrix}'} 1 & 0 \\ 0 & 1 \end{'{bmatrix}'} = 1</MathBlock>
      </Theorem>

      <Theorem title="D2: Row Swap Changes Sign">
        <p>Swapping two rows (or columns) multiplies the determinant by −1.</p>
        <MathBlock>
          \det \begin{'{bmatrix}'} c & d \\ a & b \end{'{bmatrix}'} = -\det \begin{'{bmatrix}'} a & b \\ c & d \end{'{bmatrix}'}
        </MathBlock>
      </Theorem>

      <Theorem title="D3: Scalar Multiplication">
        <p>Multiplying a row by scalar <Math>k</Math> multiplies the determinant by <Math>k</Math>.</p>
        <MathBlock>
          \det \begin{'{bmatrix}'} ka & kb \\ c & d \end{'{bmatrix}'} = k \cdot \det \begin{'{bmatrix}'} a & b \\ c & d \end{'{bmatrix}'}
        </MathBlock>
      </Theorem>

      <Theorem title="D4: Row Addition">
        <p>Adding a multiple of one row to another does not change the determinant.</p>
        <MathBlock>
          \det \begin{'{bmatrix}'} a & b \\ c + ka & d + kb \end{'{bmatrix}'} = \det \begin{'{bmatrix}'} a & b \\ c & d \end{'{bmatrix}'}
        </MathBlock>
      </Theorem>

      <Theorem title="D5: Zero Row">
        <p>If any row (or column) is all zeros, the determinant is 0.</p>
      </Theorem>

      <Theorem title="D6: Equal Rows">
        <p>If two rows (or columns) are equal, the determinant is 0.</p>
      </Theorem>

      <Theorem title="Multiplicative Property">
        <p>For square matrices <Math>A</Math> and <Math>B</Math>:</p>
        <MathBlock>\det(AB) = \det(A) \cdot \det(B)</MathBlock>
      </Theorem>

      {/* 3x3 Determinants */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Determinants of Order 3</h2>

      <Definition title="3×3 Determinant (Expansion by First Row)">
        <p>
          For a 3×3 matrix, expand along the first row:
        </p>
        <MathBlock>
          \det \begin{'{bmatrix}'} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{'{bmatrix}'} = a_1 \begin{'{vmatrix}'} b_2 & c_2 \\ b_3 & c_3 \end{'{vmatrix}'} - b_1 \begin{'{vmatrix}'} a_2 & c_2 \\ a_3 & c_3 \end{'{vmatrix}'} + c_1 \begin{'{vmatrix}'} a_2 & b_2 \\ a_3 & b_3 \end{'{vmatrix}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          The pattern of signs is +, −, + (alternating, starting with +).
        </p>
      </Definition>

      <Definition title="Minor and Cofactor">
        <p>
          The <strong>minor</strong> <Math>M_{'{ij}'}</Math> is the determinant of the submatrix
          obtained by deleting row <Math>i</Math> and column <Math>j</Math>.
        </p>
        <p className="mt-2">
          The <strong>cofactor</strong> <Math>C_{'{ij}'} = (-1)^{'{i+j}'} M_{'{ij}'}</Math> includes the sign.
        </p>
      </Definition>

      <Example title="Computing a 3×3 Determinant">
        <p>Find the determinant of:</p>
        <MathBlock>
          A = \begin{'{bmatrix}'} 2 & 1 & 3 \\ 0 & 4 & 1 \\ 1 & 2 & 5 \end{'{bmatrix}'}
        </MathBlock>
        <p className="mt-3 text-dark-300">Expanding along the first row:</p>
        <div className="mt-2 space-y-2 text-dark-300 font-mono text-sm">
          <p>= 2·det([4,1; 2,5]) − 1·det([0,1; 1,5]) + 3·det([0,4; 1,2])</p>
          <p>= 2·(4·5 − 1·2) − 1·(0·5 − 1·1) + 3·(0·2 − 4·1)</p>
          <p>= 2·(20 − 2) − 1·(0 − 1) + 3·(0 − 4)</p>
          <p>= 2·18 − 1·(−1) + 3·(−4)</p>
          <p>= 36 + 1 − 12 = <span className="text-primary-400">25</span></p>
        </div>
      </Example>

      <Determinant3x3Calculator />

      <Callout type="info" title="Geometric Interpretation">
        <p>
          The absolute value of a 3×3 determinant equals the <strong>volume</strong> of the
          parallelepiped (3D parallelogram) formed by the three row vectors.
        </p>
      </Callout>

      {/* Rule of Sarrus */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Rule of Sarrus (3×3 Shortcut)</h2>

      <Definition title="Sarrus' Rule">
        <p>
          For 3×3 matrices only, copy the first two columns to the right, then:
        </p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li>Add products along the three downward diagonals (↘)</li>
          <li>Subtract products along the three upward diagonals (↗)</li>
        </ul>
        <MathBlock>
          \det(A) = a_1b_2c_3 + b_1c_2a_3 + c_1a_2b_3 - c_1b_2a_3 - a_1c_2b_3 - b_1a_2c_3
        </MathBlock>
      </Definition>

      {/* Cramer's Rule */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Cramer's Rule</h2>

      <Theorem title="Cramer's Rule (2×2 System)">
        <p>
          For the system <Math>ax + by = e</Math>, <Math>cx + dy = f</Math>:
        </p>
        <MathBlock>
          x = \frac{'{\det \\begin{bmatrix} e & b \\\\ f & d \\end{bmatrix}}'}{'{\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}}'} \quad \text{'{and}'} \quad y = \frac{'{\det \\begin{bmatrix} a & e \\\\ c & f \\end{bmatrix}}'}{'{\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Replace the column of the variable you're solving for with the constants.
        </p>
      </Theorem>

      <Example title="Solving with Cramer's Rule">
        <p>Solve: <Math>2x + 3y = 8</Math>, <Math>x - y = 1</Math></p>
        <div className="mt-3 space-y-2 text-dark-300">
          <p>
            <Math>D = \det \begin{'{bmatrix}'} 2 & 3 \\ 1 & -1 \end{'{bmatrix}'} = -2 - 3 = -5</Math>
          </p>
          <p>
            <Math>D_x = \det \begin{'{bmatrix}'} 8 & 3 \\ 1 & -1 \end{'{bmatrix}'} = -8 - 3 = -11</Math>
          </p>
          <p>
            <Math>D_y = \det \begin{'{bmatrix}'} 2 & 8 \\ 1 & 1 \end{'{bmatrix}'} = 2 - 8 = -6</Math>
          </p>
          <p className="mt-2">
            <Math>x = \frac{'{D_x}'}{'{D}'} = \frac{'{-11}'}{'{-5}'} = \frac{'{11}'}{'{5}'}</Math>,{' '}
            <Math>y = \frac{'{D_y}'}{'{D}'} = \frac{'{-6}'}{'{-5}'} = \frac{'{6}'}{'{5}'}</Math>
          </p>
        </div>
      </Example>

      <Theorem title="Cramer's Rule (3×3 System)">
        <p>
          For a 3×3 system <Math>Ax = b</Math> where <Math>\det(A) \neq 0</Math>:
        </p>
        <MathBlock>
          x_i = \frac{'{\det(A_i)}'}{'{\det(A)}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>A_i</Math> is <Math>A</Math> with column <Math>i</Math> replaced by <Math>b</Math>.
        </p>
      </Theorem>

      <CramersRuleSolver />

      <Callout type="warning" title="When Cramer's Rule Fails">
        <p>
          If <Math>\det(A) = 0</Math>, Cramer's Rule cannot be used. The system either has
          no solution (inconsistent) or infinitely many solutions (dependent).
        </p>
      </Callout>

      {/* Invertibility */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Determinants and Invertibility</h2>

      <Theorem title="Invertibility Criterion">
        <p>A square matrix <Math>A</Math> is <strong>invertible</strong> if and only if <Math>\det(A) \neq 0</Math>.</p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li><Math>\det(A) \neq 0</Math> → unique solution to <Math>Ax = b</Math></li>
          <li><Math>\det(A) = 0</Math> → no unique solution (singular matrix)</li>
        </ul>
      </Theorem>

      <Theorem title="Determinant of Inverse">
        <p>If <Math>A</Math> is invertible:</p>
        <MathBlock>\det(A^{'{-1}'}) = \frac{'{1}'}{'{\det(A)}'}</MathBlock>
      </Theorem>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>2×2 determinant:</strong> <Math>ad - bc</Math> (diagonal product minus anti-diagonal)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>3×3 determinant:</strong> Expand by cofactors along any row or column</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Geometric meaning:</strong> |det| = area (2D) or volume (3D)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Cramer's Rule:</strong> Solve systems by replacing columns with constants</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Invertibility:</strong> <Math>\det(A) \neq 0 \Leftrightarrow A</Math> is invertible</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={17} sectionTitle="Determinants" questions={section17Questions} />
    </LessonLayout>
  );
}
