import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section16Questions } from '../../data/quizzes';
import { InductionProofBuilder, SummationCalculator, GeometricSeriesExplorer } from '../../components/visualizations';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Mathematical induction</strong> is a powerful proof technique for establishing statements
        about all natural numbers. Combined with <strong>summation notation</strong>, it lets us derive
        and prove formulas for sums of sequences, including the famous <strong>geometric series</strong>.
      </p>

      {/* Mathematical Induction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Mathematical Induction</h2>

      <Definition title="Principle of Mathematical Induction">
        <p>
          To prove a statement <Math>P(n)</Math> is true for all natural numbers <Math>n \geq 1</Math>:
        </p>
        <ol className="mt-3 space-y-2 text-dark-300">
          <li>
            <strong>Base Case:</strong> Prove <Math>P(1)</Math> is true.
          </li>
          <li>
            <strong>Inductive Step:</strong> Prove that if <Math>P(k)</Math> is true for some <Math>k \geq 1</Math>,
            then <Math>P(k+1)</Math> is also true.
          </li>
        </ol>
        <p className="mt-3 text-dark-400">
          If both steps hold, then <Math>P(n)</Math> is true for all <Math>n \geq 1</Math>.
        </p>
      </Definition>

      <Callout type="info" title="The Domino Effect">
        <p>
          Think of induction like dominoes: the base case knocks over the first domino,
          and the inductive step ensures each domino knocks over the next. Together, they
          guarantee all dominoes fall.
        </p>
      </Callout>

      <Example title="Prove: 1 + 2 + 3 + ⋯ + n = n(n+1)/2">
        <p><strong>Base case (n = 1):</strong></p>
        <p className="mt-1 text-dark-300">
          Left side: <Math>1</Math>. Right side: <Math>\frac{'{1(1+1)}'}{'{2}'} = \frac{'{2}'}{'{2}'} = 1</Math>. ✓
        </p>

        <p className="mt-4"><strong>Inductive step:</strong></p>
        <p className="text-dark-300">
          Assume <Math>1 + 2 + \cdots + k = \frac{'{k(k+1)}'}{'{2}'}</Math> for some <Math>k</Math>.
        </p>
        <p className="mt-2 text-dark-300">Prove it holds for <Math>k + 1</Math>:</p>
        <div className="mt-2 space-y-1 text-dark-300 font-mono text-sm">
          <p>1 + 2 + ⋯ + k + (k+1)</p>
          <p>= [k(k+1)/2] + (k+1)  (by inductive hypothesis)</p>
          <p>= (k+1)[k/2 + 1]</p>
          <p>= (k+1)(k+2)/2</p>
          <p>= (k+1)((k+1)+1)/2  ✓</p>
        </div>
      </Example>

      <InductionProofBuilder />

      <Example title="Prove: 2ⁿ > n for all n ≥ 1">
        <p><strong>Base case (n = 1):</strong></p>
        <p className="mt-1 text-dark-300">
          <Math>2^1 = 2 {'>'} 1</Math>. ✓
        </p>

        <p className="mt-4"><strong>Inductive step:</strong></p>
        <p className="text-dark-300">
          Assume <Math>2^k {'>'} k</Math> for some <Math>k \geq 1</Math>.
        </p>
        <p className="mt-2 text-dark-300">Then:</p>
        <div className="mt-2 space-y-1 text-dark-300">
          <p><Math>2^{'{k+1}'} = 2 \cdot 2^k {'>'} 2k</Math> (by hypothesis)</p>
          <p>Since <Math>k \geq 1</Math>, we have <Math>2k = k + k \geq k + 1</Math></p>
          <p>Therefore <Math>2^{'{k+1}'} {'>'} k + 1</Math>. ✓</p>
        </div>
      </Example>

      {/* Strong Induction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Strong Induction</h2>

      <Definition title="Strong Induction">
        <p>
          A variant where the inductive step assumes <Math>P(1), P(2), \ldots, P(k)</Math> are all true
          (not just <Math>P(k)</Math>) to prove <Math>P(k+1)</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          Useful when the next case depends on multiple previous cases (e.g., Fibonacci, divisibility).
        </p>
      </Definition>

      {/* Summation Notation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Summation Notation</h2>

      <Definition title="Sigma Notation">
        <p>
          The symbol <Math>\sum</Math> (sigma) denotes a sum:
        </p>
        <MathBlock>\sum_{'{i=m}'}^{'{n}'} a_i = a_m + a_{'{m+1}'} + a_{'{m+2}'} + \cdots + a_n</MathBlock>
        <ul className="mt-3 space-y-1 text-dark-300">
          <li><Math>i</Math> is the <strong>index</strong> of summation</li>
          <li><Math>m</Math> is the <strong>lower limit</strong></li>
          <li><Math>n</Math> is the <strong>upper limit</strong></li>
          <li><Math>a_i</Math> is the <strong>general term</strong></li>
        </ul>
      </Definition>

      <Example title="Examples of Sigma Notation">
        <div className="space-y-3">
          <div>
            <MathBlock>\sum_{'{i=1}'}^{'{5}'} i = 1 + 2 + 3 + 4 + 5 = 15</MathBlock>
          </div>
          <div>
            <MathBlock>\sum_{'{i=1}'}^{'{4}'} i^2 = 1 + 4 + 9 + 16 = 30</MathBlock>
          </div>
          <div>
            <MathBlock>\sum_{'{i=0}'}^{'{3}'} 2^i = 1 + 2 + 4 + 8 = 15</MathBlock>
          </div>
        </div>
      </Example>

      {/* Properties of Sums */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Summations</h2>

      <Theorem
        title="Linearity of Summation"
        proof={
          <>
            <p><strong>Scalar multiplication:</strong></p>
            <MathBlock>\sum_{'{i=1}'}^{'{n}'} c \cdot a_i = ca_1 + ca_2 + \cdots + ca_n = c(a_1 + a_2 + \cdots + a_n) = c \cdot \sum_{'{i=1}'}^{'{n}'} a_i</MathBlock>
            <p className="mt-2"><strong>Addition:</strong></p>
            <MathBlock>\sum_{'{i=1}'}^{'{n}'} (a_i + b_i) = (a_1 + b_1) + (a_2 + b_2) + \cdots + (a_n + b_n)</MathBlock>
            <p className="mt-2">By commutativity and associativity of addition, we can regroup:</p>
            <MathBlock>= (a_1 + a_2 + \cdots + a_n) + (b_1 + b_2 + \cdots + b_n) = \sum_{'{i=1}'}^{'{n}'} a_i + \sum_{'{i=1}'}^{'{n}'} b_i</MathBlock>
          </>
        }
      >
        <p>For constants <Math>c</Math> and sequences <Math>a_i, b_i</Math>:</p>
        <div className="mt-3 space-y-2">
          <MathBlock>\sum_{'{i=1}'}^{'{n}'} c \cdot a_i = c \cdot \sum_{'{i=1}'}^{'{n}'} a_i</MathBlock>
          <MathBlock>\sum_{'{i=1}'}^{'{n}'} (a_i + b_i) = \sum_{'{i=1}'}^{'{n}'} a_i + \sum_{'{i=1}'}^{'{n}'} b_i</MathBlock>
        </div>
      </Theorem>

      <Theorem
        title="Splitting Sums"
        proof={
          <>
            <p>By definition of summation:</p>
            <MathBlock>\sum_{'{i=1}'}^{'{n}'} a_i = a_1 + a_2 + \cdots + a_k + a_{'{k+1}'} + \cdots + a_n</MathBlock>
            <p className="mt-2">Grouping the first <Math>k</Math> terms and the remaining terms:</p>
            <MathBlock>= (a_1 + a_2 + \cdots + a_k) + (a_{'{k+1}'} + \cdots + a_n) = \sum_{'{i=1}'}^{'{k}'} a_i + \sum_{'{i=k+1}'}^{'{n}'} a_i</MathBlock>
          </>
        }
      >
        <p>A sum can be split at any point:</p>
        <MathBlock>\sum_{'{i=1}'}^{'{n}'} a_i = \sum_{'{i=1}'}^{'{k}'} a_i + \sum_{'{i=k+1}'}^{'{n}'} a_i</MathBlock>
      </Theorem>

      <SummationCalculator />

      {/* Common Formulas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Important Sum Formulas</h2>

      <Theorem
        title="Sum of First n Natural Numbers"
        proof={
          <>
            <p>Let <Math>S = 1 + 2 + 3 + \cdots + n</Math>.</p>
            <p className="mt-2">Write S twice, once forward and once backward:</p>
            <MathBlock>{`\\begin{aligned} S &= 1 + 2 + 3 + \\cdots + n \\\\ S &= n + (n-1) + (n-2) + \\cdots + 1 \\end{aligned}`}</MathBlock>
            <p className="mt-2">Adding these equations column by column:</p>
            <MathBlock>2S = (n+1) + (n+1) + (n+1) + \cdots + (n+1) = n(n+1)</MathBlock>
            <p className="mt-2">Therefore <Math>S = \frac{'{n(n+1)}'}{'{2}'}</Math>.</p>
          </>
        }
      >
        <MathBlock>\sum_{'{i=1}'}^{'{n}'} i = 1 + 2 + 3 + \cdots + n = \frac{'{n(n+1)}'}{'{2}'}</MathBlock>
      </Theorem>

      <Theorem
        title="Sum of First n Squares"
        proof={
          <>
            <p>We prove by induction.</p>
            <p className="mt-2"><strong>Base case (n = 1):</strong> <Math>1^2 = 1 = \frac{'{1 \\cdot 2 \\cdot 3}'}{'{6}'}</Math>. ✓</p>
            <p className="mt-2"><strong>Inductive step:</strong> Assume <Math>\sum_{'{i=1}'}^{'{k}'} i^2 = \frac{'{k(k+1)(2k+1)}'}{'{6}'}</Math>.</p>
            <p className="mt-2">Then:</p>
            <MathBlock>\sum_{'{i=1}'}^{'{k+1}'} i^2 = \frac{'{k(k+1)(2k+1)}'}{'{6}'} + (k+1)^2</MathBlock>
            <p className="mt-2">Factoring out <Math>(k+1)</Math>:</p>
            <MathBlock>= (k+1)\left(\frac{'{k(2k+1)}'}{'{6}'} + (k+1)\right) = (k+1) \cdot \frac{'{k(2k+1) + 6(k+1)}'}{'{6}'}</MathBlock>
            <p className="mt-2">Simplifying the numerator: <Math>k(2k+1) + 6(k+1) = 2k^2 + 7k + 6 = (k+2)(2k+3)</Math></p>
            <MathBlock>= \frac{'{(k+1)(k+2)(2k+3)}'}{'{6}'} = \frac{'{(k+1)((k+1)+1)(2(k+1)+1)}'}{'{6}'}</MathBlock>
          </>
        }
      >
        <MathBlock>\sum_{'{i=1}'}^{'{n}'} i^2 = 1^2 + 2^2 + \cdots + n^2 = \frac{'{n(n+1)(2n+1)}'}{'{6}'}</MathBlock>
      </Theorem>

      <Theorem
        title="Sum of First n Cubes"
        proof={
          <>
            <p>We prove by induction.</p>
            <p className="mt-2"><strong>Base case (n = 1):</strong> <Math>1^3 = 1 = \left(\frac{'{1 \\cdot 2}'}{'{2}'}\right)^2 = 1^2 = 1</Math>. ✓</p>
            <p className="mt-2"><strong>Inductive step:</strong> Assume <Math>\sum_{'{i=1}'}^{'{k}'} i^3 = \left(\frac{'{k(k+1)}'}{'{2}'}\right)^2</Math>.</p>
            <p className="mt-2">Then:</p>
            <MathBlock>\sum_{'{i=1}'}^{'{k+1}'} i^3 = \left(\frac{'{k(k+1)}'}{'{2}'}\right)^2 + (k+1)^3</MathBlock>
            <p className="mt-2">Factoring out <Math>(k+1)^2</Math>:</p>
            <MathBlock>= (k+1)^2\left(\frac{'{k^2}'}{'{4}'} + (k+1)\right) = (k+1)^2 \cdot \frac{'{k^2 + 4k + 4}'}{'{4}'} = (k+1)^2 \cdot \frac{'{(k+2)^2}'}{'{4}'}</MathBlock>
            <MathBlock>= \left(\frac{'{(k+1)(k+2)}'}{'{2}'}\right)^2</MathBlock>
          </>
        }
      >
        <MathBlock>\sum_{'{i=1}'}^{'{n}'} i^3 = 1^3 + 2^3 + \cdots + n^3 = \left(\frac{'{n(n+1)}'}{'{2}'}\right)^2</MathBlock>
        <p className="mt-2 text-dark-400">
          Notice: The sum of cubes equals the square of the sum of first n numbers!
        </p>
      </Theorem>

      <Example title="Calculate Sum of 1² + 2² + ⋯ + 10²">
        <p>Using the formula with <Math>n = 10</Math>:</p>
        <MathBlock>\sum_{'{i=1}'}^{'{10}'} i^2 = \frac{'{10 \cdot 11 \cdot 21}'}{'{6}'} = \frac{'{2310}'}{'{6}'} = 385</MathBlock>
      </Example>

      {/* Geometric Series */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Geometric Series</h2>

      <Definition title="Geometric Sequence">
        <p>
          A <strong>geometric sequence</strong> has each term equal to the previous term times a constant ratio <Math>r</Math>:
        </p>
        <MathBlock>a, ar, ar^2, ar^3, \ldots, ar^{'{n-1}'}</MathBlock>
        <p className="mt-2 text-dark-400">
          Here <Math>a</Math> is the first term and <Math>r</Math> is the common ratio.
        </p>
      </Definition>

      <Theorem
        title="Finite Geometric Series"
        proof={
          <>
            <p>Let <Math>S = a + ar + ar^2 + \cdots + ar^{'{n-1}'}</Math>.</p>
            <p className="mt-2">Multiply both sides by <Math>r</Math>:</p>
            <MathBlock>rS = ar + ar^2 + ar^3 + \cdots + ar^n</MathBlock>
            <p className="mt-2">Subtract the second equation from the first:</p>
            <MathBlock>S - rS = a - ar^n</MathBlock>
            <p className="mt-2">Factor both sides:</p>
            <MathBlock>S(1 - r) = a(1 - r^n)</MathBlock>
            <p className="mt-2">Divide by <Math>(1 - r)</Math> (valid since <Math>r \neq 1</Math>):</p>
            <MathBlock>S = a \cdot \frac{'{1 - r^n}'}{'{1 - r}'}</MathBlock>
          </>
        }
      >
        <p>The sum of a finite geometric series with <Math>r \neq 1</Math>:</p>
        <MathBlock>\sum_{'{i=0}'}^{'{n-1}'} ar^i = a + ar + ar^2 + \cdots + ar^{'{n-1}'} = a \cdot \frac{'{1 - r^n}'}{'{1 - r}'}</MathBlock>
      </Theorem>

      <Example title="Derive the Geometric Series Formula">
        <p>Let <Math>S = a + ar + ar^2 + \cdots + ar^{'{n-1}'}</Math></p>
        <p className="mt-2 text-dark-300">Multiply both sides by <Math>r</Math>:</p>
        <p className="text-dark-300"><Math>rS = ar + ar^2 + \cdots + ar^n</Math></p>
        <p className="mt-2 text-dark-300">Subtract:</p>
        <p className="text-dark-300"><Math>S - rS = a - ar^n</Math></p>
        <p className="text-dark-300"><Math>S(1 - r) = a(1 - r^n)</Math></p>
        <p className="text-dark-300"><Math>S = a \cdot \frac{'{1 - r^n}'}{'{1 - r}'}</Math></p>
      </Example>

      <GeometricSeriesExplorer />

      {/* Infinite Geometric Series */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Infinite Geometric Series</h2>

      <Theorem
        title="Infinite Geometric Series"
        proof={
          <>
            <p>Start with the finite geometric series formula:</p>
            <MathBlock>S_n = a \cdot \frac{'{1 - r^n}'}{'{1 - r}'}</MathBlock>
            <p className="mt-2">When <Math>|r| {'<'} 1</Math>, as <Math>n \to \infty</Math>, the term <Math>r^n \to 0</Math>.</p>
            <p className="mt-2">To see this: if <Math>|r| = q {'<'} 1</Math>, then <Math>|r^n| = q^n</Math>, which approaches 0 as <Math>n</Math> grows.</p>
            <p className="mt-2">Taking the limit:</p>
            <MathBlock>\lim_{'{n \\to \\infty}'} S_n = a \cdot \frac{'{1 - 0}'}{'{1 - r}'} = \frac{'{a}'}{'{1 - r}'}</MathBlock>
            <p className="mt-2">If <Math>|r| \geq 1</Math>, then <Math>r^n</Math> does not approach 0, so the series diverges.</p>
          </>
        }
      >
        <p>
          If <Math>|r| {'<'} 1</Math>, the infinite geometric series converges:
        </p>
        <MathBlock>\sum_{'{i=0}'}^{'{\infty}'} ar^i = a + ar + ar^2 + \cdots = \frac{'{a}'}{'{1 - r}'}</MathBlock>
        <p className="mt-2 text-dark-400">
          This works because <Math>r^n \to 0</Math> as <Math>n \to \infty</Math> when <Math>|r| {'<'} 1</Math>.
        </p>
      </Theorem>

      <Example title="Infinite Series Examples">
        <div className="space-y-4">
          <div>
            <p><strong>Example 1:</strong> <Math>1 + \frac{'{1}'}{'{2}'} + \frac{'{1}'}{'{4}'} + \frac{'{1}'}{'{8}'} + \cdots</Math></p>
            <p className="text-dark-300 mt-1">
              Here <Math>a = 1</Math>, <Math>r = \frac{'{1}'}{'{2}'}</Math>.
              Sum = <Math>\frac{'{1}'}{'{1 - 1/2}'} = \frac{'{1}'}{'{1/2}'} = 2</Math>
            </p>
          </div>
          <div>
            <p><strong>Example 2:</strong> <Math>0.333\ldots = \frac{'{3}'}{'{10}'} + \frac{'{3}'}{'{100}'} + \frac{'{3}'}{'{1000}'} + \cdots</Math></p>
            <p className="text-dark-300 mt-1">
              Here <Math>a = \frac{'{3}'}{'{10}'}</Math>, <Math>r = \frac{'{1}'}{'{10}'}</Math>.
              Sum = <Math>\frac{'{3/10}'}{'{1 - 1/10}'} = \frac{'{3/10}'}{'{9/10}'} = \frac{'{1}'}{'{3}'}</Math>
            </p>
          </div>
        </div>
      </Example>

      <Callout type="warning" title="Divergence">
        <p>
          If <Math>|r| \geq 1</Math>, the infinite series <strong>diverges</strong> (does not have a finite sum).
          For example, <Math>1 + 2 + 4 + 8 + \cdots</Math> grows without bound.
        </p>
      </Callout>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Applications</h2>

      <Example title="Compound Interest">
        <p>
          Investing $100 at 5% interest compounded annually for <Math>n</Math> years:
        </p>
        <MathBlock>A = 100(1.05)^n</MathBlock>
        <p className="mt-2 text-dark-300">
          This is a geometric sequence with ratio <Math>r = 1.05</Math>.
        </p>
      </Example>

      <Example title="Present Value of Annuity">
        <p>
          The present value of receiving $P per year for n years at interest rate r:
        </p>
        <MathBlock>PV = P \cdot \frac{'{1 - (1+r)^{-n}}'}{'{r}'}</MathBlock>
        <p className="mt-2 text-dark-300">
          This is derived from the geometric series formula.
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
            <span><strong>Induction</strong> proves statements for all n: base case + inductive step.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Sigma notation</strong> <Math>\sum</Math> compactly represents sums.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Key formulas: <Math>\sum i = \frac{'{n(n+1)}'}{'{2}'}</Math>, <Math>\sum i^2 = \frac{'{n(n+1)(2n+1)}'}{'{6}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Finite geometric series:</strong> <Math>a\frac{'{1-r^n}'}{'{1-r}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Infinite geometric series:</strong> <Math>\frac{'{a}'}{'{1-r}'}</Math> when <Math>|r| {'<'} 1</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={16} sectionTitle="Induction and Summations" questions={section16Questions} />
    </LessonLayout>
  );
}
