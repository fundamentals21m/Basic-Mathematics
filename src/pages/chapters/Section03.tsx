import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { EvenOddExplorer, ParityCalculator, DivisibilityExplorer } from '../../components/visualizations';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section03Questions } from '../../data/quizzes';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Among the integers, some are <strong>even</strong> and some are <strong>odd</strong>.
        Understanding these properties leads us to the important concept of <strong>divisibility</strong>.
      </p>

      {/* Even and Odd */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Even and Odd Integers</h2>

      <Definition title="Odd Integers">
        <p>
          The <strong>odd integers</strong> are the numbers:
        </p>
        <MathBlock>1, 3, 5, 7, 9, 11, 13, \ldots</MathBlock>
        <p className="mt-3">
          An integer is odd if it can be written as <Math>2n + 1</Math> for some integer <Math>n</Math>,
          or equivalently as <Math>2m - 1</Math> for some positive integer <Math>m</Math>.
        </p>
      </Definition>

      <Definition title="Even Integers" className="mt-6">
        <p>
          The <strong>even integers</strong> are the numbers:
        </p>
        <MathBlock>2, 4, 6, 8, 10, 12, 14, \ldots</MathBlock>
        <p className="mt-3">
          An integer is even if it can be written as <Math>2n</Math> for some integer <Math>n</Math>.
        </p>
      </Definition>

      <Callout type="info" title="What about 0?">
        <p>
          Zero is <strong>even</strong> because <Math>0 = 2 \cdot 0</Math>.
          Similarly, negative even numbers like <Math>-2, -4, -6, \ldots</Math> are even,
          and <Math>-1, -3, -5, \ldots</Math> are odd.
        </p>
      </Callout>

      {/* Interactive Even/Odd Explorer */}
      <EvenOddExplorer />

      {/* Addition Rules */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Adding Even and Odd</h2>

      <Theorem title="Addition of Even and Odd Integers">
        <ul className="space-y-2 mt-2">
          <li><strong>Even + Even = Even:</strong> <Math>4 + 6 = 10</Math></li>
          <li><strong>Odd + Odd = Even:</strong> <Math>3 + 5 = 8</Math></li>
          <li><strong>Even + Odd = Odd:</strong> <Math>4 + 5 = 9</Math></li>
          <li><strong>Odd + Even = Odd:</strong> <Math>3 + 6 = 9</Math></li>
        </ul>
        <details className="mt-4">
          <summary className="cursor-pointer text-primary-400 hover:text-primary-300">Show proof for Odd + Odd</summary>
          <div className="mt-2 p-4 bg-dark-800/50 rounded-lg text-dark-300">
            <p>Let <Math>a = 2m + 1</Math> and <Math>b = 2n + 1</Math> be odd integers.</p>
            <p className="mt-2">Then:</p>
            <MathBlock>a + b = (2m + 1) + (2n + 1) = 2m + 2n + 2 = 2(m + n + 1)</MathBlock>
            <p className="mt-2">Since <Math>m + n + 1</Math> is an integer, <Math>a + b</Math> is even.</p>
          </div>
        </details>
      </Theorem>

      {/* Multiplication Rules */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Multiplying Even and Odd</h2>

      <Theorem title="Multiplication of Even and Odd Integers">
        <ul className="space-y-2 mt-2">
          <li><strong>Even × Even = Even:</strong> <Math>4 \times 6 = 24</Math></li>
          <li><strong>Odd × Odd = Odd:</strong> <Math>3 \times 5 = 15</Math></li>
          <li><strong>Even × Odd = Even:</strong> <Math>4 \times 5 = 20</Math></li>
        </ul>
        <p className="mt-3 text-dark-400">
          Notice: Any product involving an even number is even.
        </p>
      </Theorem>

      {/* Interactive Parity Calculator */}
      <ParityCalculator />

      {/* Squares */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Squares of Even and Odd</h2>

      <Theorem title="Squares Preserve Parity">
        <ul className="space-y-2 mt-2">
          <li>If <Math>a</Math> is <strong>even</strong>, then <Math>a^2</Math> is even.</li>
          <li>If <Math>a</Math> is <strong>odd</strong>, then <Math>a^2</Math> is odd.</li>
        </ul>
      </Theorem>

      <Theorem title="Corollary: Detecting Parity from Squares" className="mt-6">
        <ul className="space-y-2 mt-2">
          <li>If <Math>a^2</Math> is <strong>even</strong>, then <Math>a</Math> is even.</li>
          <li>If <Math>a^2</Math> is <strong>odd</strong>, then <Math>a</Math> is odd.</li>
        </ul>
        <p className="mt-3 text-dark-400">
          This is the contrapositive of the previous theorem.
        </p>
      </Theorem>

      <Example title="Verifying Parity">
        <ul className="space-y-2 mt-2">
          <li><Math>4^2 = 16</Math> — even squared is even</li>
          <li><Math>7^2 = 49</Math> — odd squared is odd</li>
          <li><Math>(-3)^2 = 9</Math> — odd squared is odd</li>
        </ul>
      </Example>

      {/* Divisibility */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Divisibility</h2>

      <Definition title="Divisibility">
        <p>
          We say <Math>d</Math> <strong>divides</strong> <Math>n</Math> (or <Math>n</Math> is
          <strong> divisible by</strong> <Math>d</Math>) if there exists an integer <Math>k</Math> such that:
        </p>
        <MathBlock>n = dk</MathBlock>
        <p className="mt-2 text-dark-400">
          We write <Math>d \mid n</Math> to denote "<Math>d</Math> divides <Math>n</Math>."
        </p>
      </Definition>

      <Example title="Divisibility Examples">
        <ul className="space-y-2 mt-2">
          <li><Math>3 \mid 12</Math> because <Math>12 = 3 \cdot 4</Math></li>
          <li><Math>5 \mid 35</Math> because <Math>35 = 5 \cdot 7</Math></li>
          <li><Math>2 \mid n</Math> means <Math>n</Math> is even</li>
          <li><Math>3 \nmid 10</Math> (3 does not divide 10)</li>
        </ul>
      </Example>

      <Callout type="warning" title="Divisibility vs. Division">
        <p>
          Divisibility is about whether one integer divides another <em>evenly</em> (with no remainder).
          It's different from division, which always gives a result.
          For example, <Math>10 \div 3 = 3.33\ldots</Math>, but <Math>3 \nmid 10</Math>.
        </p>
      </Callout>

      {/* Interactive Divisibility Explorer */}
      <DivisibilityExplorer />

      {/* Properties of Divisibility */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Divisibility</h2>

      <Theorem title="Divisibility is Transitive">
        <p>If <Math>a \mid b</Math> and <Math>b \mid c</Math>, then <Math>a \mid c</Math>.</p>
        <details className="mt-3">
          <summary className="cursor-pointer text-primary-400 hover:text-primary-300">Show proof</summary>
          <div className="mt-2 p-4 bg-dark-800/50 rounded-lg text-dark-300">
            <p>Since <Math>a \mid b</Math>, we have <Math>b = ak</Math> for some integer <Math>k</Math>.</p>
            <p className="mt-2">Since <Math>b \mid c</Math>, we have <Math>c = bm</Math> for some integer <Math>m</Math>.</p>
            <p className="mt-2">Substituting: <Math>c = bm = (ak)m = a(km)</Math>.</p>
            <p className="mt-2">Since <Math>km</Math> is an integer, <Math>a \mid c</Math>.</p>
          </div>
        </details>
      </Theorem>

      <Theorem title="Divisibility and Sums" className="mt-6">
        <p>If <Math>d \mid a</Math> and <Math>d \mid b</Math>, then <Math>d \mid (a + b)</Math> and <Math>d \mid (a - b)</Math>.</p>
      </Theorem>

      <Example title="Applying Divisibility Properties">
        <p>Since <Math>3 \mid 12</Math> and <Math>3 \mid 15</Math>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>3 \mid (12 + 15) = 27</Math> ✓</li>
          <li><Math>3 \mid (15 - 12) = 3</Math> ✓</li>
        </ul>
      </Example>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Even</strong> numbers are multiples of 2; <strong>odd</strong> numbers are not.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Odd + Odd = Even</strong>, and <strong>Even + Odd = Odd</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>The <strong>square</strong> of an even is even; the square of an odd is odd.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><Math>d \mid n</Math> means <Math>n = dk</Math> for some integer <Math>k</Math>.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionTitle="Even and Odd; Divisibility" questions={section03Questions} />
    </LessonLayout>
  );
}
