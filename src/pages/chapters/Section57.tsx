import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section57Questions } from '../../data/quizzes';

export default function Section57() {
  return (
    <LessonLayout sectionId={57}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        A <strong>geometric series</strong> is a sum where each term is a constant multiple of
        the previous term. These series have elegant closed-form expressions and are fundamental
        in finance, physics, and analysis.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Geometric Series</h2>

      <Definition title="Geometric Sequence">
        <p>
          A <strong>geometric sequence</strong> has the form:
        </p>
        <MathBlock>
          {'a, ar, ar^2, ar^3, \\ldots'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>a</Math> is the first term and <Math>r</Math> is the <strong>common ratio</strong>.
        </p>
      </Definition>

      <Definition title="Geometric Series">
        <p>
          A <strong>geometric series</strong> is the sum of a geometric sequence:
        </p>
        <MathBlock>
          {'S_n = a + ar + ar^2 + \\cdots + ar^{n-1} = \\sum_{k=0}^{n-1} ar^k'}
        </MathBlock>
      </Definition>

      {/* Finite Sum */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Finite Geometric Sum</h2>

      <Theorem title="Sum of Finite Geometric Series">
        <p>For <Math>{'r \\neq 1'}</Math>:</p>
        <MathBlock>
          {'S_n = a + ar + ar^2 + \\cdots + ar^{n-1} = a \\cdot \\frac{1 - r^n}{1 - r}'}
        </MathBlock>
        <p className="mt-2">For <Math>{'r = 1'}</Math>: <Math>{'S_n = na'}</Math>.</p>
      </Theorem>

      <Example title="Finite Sum Calculation">
        <p>Compute <Math>{'1 + 2 + 4 + 8 + 16 + 32'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>This is geometric with <Math>{'a = 1'}</Math>, <Math>{'r = 2'}</Math>, <Math>{'n = 6'}</Math>.</p>
          <MathBlock>
            {'S_6 = \\frac{1 - 2^6}{1 - 2} = \\frac{1 - 64}{-1} = 63'}
          </MathBlock>
        </div>
      </Example>

      <Example title="Another Example">
        <p>Find <Math>{'\\sum_{k=0}^{4} 3 \\cdot 2^k'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'a = 3'}</Math>, <Math>{'r = 2'}</Math>, <Math>{'n = 5'}</Math>.</p>
          <MathBlock>
            {'S_5 = 3 \\cdot \\frac{1 - 2^5}{1 - 2} = 3 \\cdot \\frac{-31}{-1} = 93'}
          </MathBlock>
        </div>
      </Example>

      {/* Infinite Series */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Infinite Geometric Series</h2>

      <Theorem title="Sum of Infinite Geometric Series">
        <p>If <Math>{'|r| < 1'}</Math>, the infinite series converges:</p>
        <MathBlock>
          {'\\sum_{k=0}^{\\infty} ar^k = \\frac{a}{1 - r}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          If <Math>{'|r| \\geq 1'}</Math>, the series diverges.
        </p>
      </Theorem>

      <Example title="Infinite Sum">
        <p>Compute <Math>{'1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots'}</Math></p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'a = 1'}</Math>, <Math>{'r = \\frac{1}{2}'}</Math>.</p>
          <MathBlock>
            {'S = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2'}
          </MathBlock>
        </div>
      </Example>

      <Example title="Repeating Decimal">
        <p>Express <Math>{'0.\\overline{3} = 0.333...'}</Math> as a fraction.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'0.\\overline{3} = \\frac{3}{10} + \\frac{3}{100} + \\frac{3}{1000} + \\cdots'}
          </MathBlock>
          <p>Geometric with <Math>{'a = 3/10'}</Math>, <Math>{'r = 1/10'}</Math>.</p>
          <MathBlock>
            {'= \\frac{3/10}{1 - 1/10} = \\frac{3/10}{9/10} = \\frac{3}{9} = \\frac{1}{3}'}
          </MathBlock>
        </div>
      </Example>

      <Callout type="info" title="Convergence Condition">
        <p>
          An infinite geometric series only converges when <Math>{'|r| < 1'}</Math>. Otherwise, the
          terms don't approach zero and the sum grows without bound.
        </p>
      </Callout>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Applications</h2>

      <Example title="Compound Interest">
        <p>Deposit $100 annually at 5% interest. Value after <Math>n</Math> years?</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Each deposit grows: first for <Math>n</Math> years, second for <Math>{'n-1'}</Math> years, etc.</p>
          <MathBlock>
            {'V = 100(1.05)^n + 100(1.05)^{n-1} + \\cdots + 100(1.05)'}
          </MathBlock>
          <p>This is a geometric series that can be summed using the formula.</p>
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
            <span>Finite: <Math>{'\\sum_{k=0}^{n-1} ar^k = a \\cdot \\frac{1 - r^n}{1 - r}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Infinite (<Math>{'|r| < 1'}</Math>): <Math>{'\\sum_{k=0}^{\\infty} ar^k = \\frac{a}{1 - r}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Common ratio <Math>r</Math>: each term is <Math>r</Math> times the previous</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Converges only when <Math>{'|r| < 1'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={57} sectionTitle="Geometric Series" questions={section57Questions} />
    </LessonLayout>
  );
}
