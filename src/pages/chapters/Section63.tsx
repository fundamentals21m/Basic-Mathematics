import { LessonLayout } from '../../components/layout/LessonLayout';
import { Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section63Questions } from '../../data/quizzes';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Cramer's Rule</strong> provides an elegant formula for solving systems of linear
        equations using determinants. While not the most efficient method computationally, it
        offers theoretical insight and works well for small systems.
      </p>

      {/* 2×2 Cramer's Rule */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Cramer's Rule for 2×2 Systems</h2>

      <Theorem title="Cramer's Rule (2 Variables)">
        <p>For the system:</p>
        <MathBlock>
          {'\\begin{cases} ax + by = e \\\\ cx + dy = f \\end{cases}'}
        </MathBlock>
        <p>If <Math>{'D = ad - bc \\neq 0'}</Math>:</p>
        <MathBlock>
          {'x = \\frac{D_x}{D} = \\frac{ed - bf}{ad - bc}, \\quad y = \\frac{D_y}{D} = \\frac{af - ec}{ad - bc}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          <Math>{'D_x'}</Math>: replace column 1 with constants.
          <Math>{'D_y'}</Math>: replace column 2 with constants.
        </p>
      </Theorem>

      <Example title="Solving a 2×2 System">
        <p>Solve:</p>
        <MathBlock>
          {'\\begin{cases} 2x + 3y = 8 \\\\ x - y = 1 \\end{cases}'}
        </MathBlock>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'D = \\det\\begin{pmatrix} 2 & 3 \\\\ 1 & -1 \\end{pmatrix} = -2 - 3 = -5'}
          </MathBlock>
          <MathBlock>
            {'D_x = \\det\\begin{pmatrix} 8 & 3 \\\\ 1 & -1 \\end{pmatrix} = -8 - 3 = -11'}
          </MathBlock>
          <MathBlock>
            {'D_y = \\det\\begin{pmatrix} 2 & 8 \\\\ 1 & 1 \\end{pmatrix} = 2 - 8 = -6'}
          </MathBlock>
          <MathBlock>
            {'x = \\frac{-11}{-5} = \\frac{11}{5}, \\quad y = \\frac{-6}{-5} = \\frac{6}{5}'}
          </MathBlock>
        </div>
      </Example>

      {/* 3×3 Cramer's Rule */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Cramer's Rule for 3×3 Systems</h2>

      <Theorem title="Cramer's Rule (3 Variables)">
        <p>For the system <Math>{'Ax = b'}</Math> where <Math>A</Math> is 3×3:</p>
        <MathBlock>
          {'x_i = \\frac{D_i}{D}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          <Math>{'D_i'}</Math> = determinant of <Math>A</Math> with column <Math>i</Math> replaced by <Math>b</Math>.
        </p>
      </Theorem>

      <Example title="Solving a 3×3 System">
        <p>Solve:</p>
        <MathBlock>
          {'\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}'}
        </MathBlock>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Coefficient matrix:</strong></p>
          <MathBlock>
            {'A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{pmatrix}'}
          </MathBlock>
          <MathBlock>
            {'D = 1(1-2) - 1(-2-1) + 1(4+1) = -1 + 3 + 5 = 7'}
          </MathBlock>
          <p><strong>For x</strong> (replace column 1 with (6, 3, 2)):</p>
          <MathBlock>
            {'D_x = \\det\\begin{pmatrix} 6 & 1 & 1 \\\\ 3 & -1 & 1 \\\\ 2 & 2 & -1 \\end{pmatrix} = 6(1-2) - 1(-3-2) + 1(6+2) = -6 + 5 + 8 = 7'}
          </MathBlock>
          <p><strong>For y</strong> (replace column 2 with (6, 3, 2)):</p>
          <MathBlock>
            {'D_y = \\det\\begin{pmatrix} 1 & 6 & 1 \\\\ 2 & 3 & 1 \\\\ 1 & 2 & -1 \\end{pmatrix} = 1(-3-2) - 6(-2-1) + 1(4-3) = -5 + 18 + 1 = 14'}
          </MathBlock>
          <p><strong>For z</strong> (replace column 3 with (6, 3, 2)):</p>
          <MathBlock>
            {'D_z = \\det\\begin{pmatrix} 1 & 1 & 6 \\\\ 2 & -1 & 3 \\\\ 1 & 2 & 2 \\end{pmatrix} = 1(-2-6) - 1(4-3) + 6(4+1) = -8 - 1 + 30 = 21'}
          </MathBlock>
          <p><strong>Solution:</strong></p>
          <MathBlock>
            {'x = \\frac{7}{7} = 1, \\quad y = \\frac{14}{7} = 2, \\quad z = \\frac{21}{7} = 3'}
          </MathBlock>
        </div>
      </Example>

      {/* Special Cases */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Cases</h2>

      <Theorem title="When D = 0">
        <p>If <Math>{'D = 0'}</Math>, the system either has:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>No solution</strong>: if some <Math>{'D_i \\neq 0'}</Math></li>
          <li><strong>Infinitely many solutions</strong>: if all <Math>{'D_i = 0'}</Math></li>
        </ul>
      </Theorem>

      <Example title="Inconsistent System">
        <p>Analyze:</p>
        <MathBlock>
          {'\\begin{cases} x + y = 2 \\\\ x + y = 3 \\end{cases}'}
        </MathBlock>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'D = \\det\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix} = 0'}
          </MathBlock>
          <MathBlock>
            {'D_x = \\det\\begin{pmatrix} 2 & 1 \\\\ 3 & 1 \\end{pmatrix} = 2 - 3 = -1 \\neq 0'}
          </MathBlock>
          <p>Since <Math>{'D = 0'}</Math> but <Math>{'D_x \\neq 0'}</Math>: <strong>no solution</strong> (parallel lines).</p>
        </div>
      </Example>

      <Callout type="info" title="Computational Note">
        <p>
          Cramer's Rule requires computing <Math>{'n + 1'}</Math> determinants for an <Math>{'n \\times n'}</Math> system.
          For large systems, Gaussian elimination is more efficient.
        </p>
      </Callout>

      {/* Advantages and Limitations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">When to Use Cramer's Rule</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
          <h4 className="font-semibold text-green-400 mb-2">Advantages</h4>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Explicit formula for each variable</li>
            <li>Good for theoretical analysis</li>
            <li>Works well for 2×2 and 3×3</li>
            <li>Easy to solve for one variable</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
          <h4 className="font-semibold text-red-400 mb-2">Limitations</h4>
          <ul className="list-disc list-inside text-dark-300 space-y-1">
            <li>Computationally expensive for large n</li>
            <li>Requires <Math>{'D \\neq 0'}</Math></li>
            <li>Many determinant calculations</li>
            <li>Gaussian elimination is faster</li>
          </ul>
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
            <span><Math>{'x_i = D_i / D'}</Math> where <Math>{'D_i'}</Math> replaces column <Math>i</Math> with constants</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><Math>{'D \\neq 0'}</Math>: unique solution exists</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><Math>{'D = 0'}</Math>: no solution or infinitely many</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Best for small systems and theoretical understanding</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={63} sectionTitle="Cramer's Rule" questions={section63Questions} />
    </LessonLayout>
  );
}
