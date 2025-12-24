import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section56Questions } from '../../data/quizzes';

export default function Section56() {
  return (
    <LessonLayout sectionId={56}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Sigma notation</strong> provides a compact way to write sums. Understanding
        summation formulas is essential for calculus, discrete mathematics, and analysis.
      </p>

      {/* Sigma Notation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Sigma Notation</h2>

      <Definition title="Summation Notation">
        <p>
          The sum of terms <Math>{'a_i'}</Math> from <Math>{'i = m'}</Math> to <Math>{'i = n'}</Math>:
        </p>
        <MathBlock>
          {'\\sum_{i=m}^{n} a_i = a_m + a_{m+1} + \\cdots + a_n'}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>i</Math> is the <strong>index</strong></li>
          <li><Math>m</Math> is the <strong>lower limit</strong></li>
          <li><Math>n</Math> is the <strong>upper limit</strong></li>
        </ul>
      </Definition>

      <Example title="Expanding a Sum">
        <p>Write out <Math>{'\\sum_{k=1}^{4} k^2'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\sum_{k=1}^{4} k^2 = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30'}
          </MathBlock>
        </div>
      </Example>

      {/* Properties of Sums */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Summations</h2>

      <Theorem title="Linearity">
        <MathBlock>
          {'\\sum_{i=1}^{n} (a_i + b_i) = \\sum_{i=1}^{n} a_i + \\sum_{i=1}^{n} b_i'}
        </MathBlock>
        <MathBlock>
          {'\\sum_{i=1}^{n} c \\cdot a_i = c \\cdot \\sum_{i=1}^{n} a_i'}
        </MathBlock>
      </Theorem>

      <Theorem title="Constant Sum">
        <MathBlock>
          {'\\sum_{i=1}^{n} c = n \\cdot c'}
        </MathBlock>
      </Theorem>

      {/* Common Formulas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Important Formulas</h2>

      <Theorem title="Sum of First n Integers">
        <MathBlock>
          {'\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}'}
        </MathBlock>
      </Theorem>

      <Theorem title="Sum of Squares">
        <MathBlock>
          {'\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}'}
        </MathBlock>
      </Theorem>

      <Theorem title="Sum of Cubes">
        <MathBlock>
          {'\\sum_{k=1}^{n} k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2'}
        </MathBlock>
      </Theorem>

      <Callout type="info" title="Remarkable Fact">
        <p>
          The sum of cubes equals the square of the sum:
          <Math>{'1^3 + 2^3 + \\cdots + n^3 = (1 + 2 + \\cdots + n)^2'}</Math>
        </p>
      </Callout>

      <Example title="Using Formulas">
        <p>Compute <Math>{'\\sum_{k=1}^{10} (2k + 1)'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'= 2\\sum_{k=1}^{10} k + \\sum_{k=1}^{10} 1 = 2 \\cdot \\frac{10 \\cdot 11}{2} + 10'}
          </MathBlock>
          <MathBlock>
            {'= 110 + 10 = 120'}
          </MathBlock>
        </div>
      </Example>

      {/* Telescoping Sums */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Telescoping Sums</h2>

      <Definition title="Telescoping Sum">
        <p>
          A sum where consecutive terms cancel:
        </p>
        <MathBlock>
          {'\\sum_{k=1}^{n} (a_k - a_{k+1}) = a_1 - a_{n+1}'}
        </MathBlock>
      </Definition>

      <Example title="Telescoping Example">
        <p>Compute <Math>{'\\sum_{k=1}^{n} \\frac{1}{k(k+1)}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Use partial fractions: <Math>{'\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}'}</Math></p>
          <MathBlock>
            {'\\sum_{k=1}^{n} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) = 1 - \\frac{1}{n+1} = \\frac{n}{n+1}'}
          </MathBlock>
        </div>
      </Example>

      {/* Change of Index */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Change of Index</h2>

      <Theorem title="Index Substitution">
        <p>Let <Math>{'j = i - c'}</Math>. Then:</p>
        <MathBlock>
          {'\\sum_{i=m}^{n} a_i = \\sum_{j=m-c}^{n-c} a_{j+c}'}
        </MathBlock>
      </Theorem>

      <Example title="Shifting Index">
        <p>Rewrite <Math>{'\\sum_{k=3}^{7} k^2'}</Math> starting from <Math>{'k = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Let <Math>{'j = k - 2'}</Math>. When <Math>{'k = 3'}</Math>, <Math>{'j = 1'}</Math>. When <Math>{'k = 7'}</Math>, <Math>{'j = 5'}</Math>.</p>
          <MathBlock>
            {'\\sum_{k=3}^{7} k^2 = \\sum_{j=1}^{5} (j+2)^2'}
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
            <span><Math>{'\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><Math>{'\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Sums are linear: constants factor out, sums split</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Telescoping: <Math>{'\\sum (a_k - a_{k+1}) = a_1 - a_{n+1}'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={56} sectionTitle="Summations" questions={section56Questions} />
    </LessonLayout>
  );
}
