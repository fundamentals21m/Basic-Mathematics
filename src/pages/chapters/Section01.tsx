import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Axiom, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { NumberLine, AssociativityDemo } from '../../components/visualizations';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section01Questions } from '../../data/quizzes';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Now that we understand what integers are, we need to establish the <strong>rules</strong> that
        govern how we add them together. These rules are the foundation for all of arithmetic and algebra.
      </p>

      {/* Commutativity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Commutativity of Addition</h2>

      <Axiom title="Commutativity of Addition">
        <p>If <Math>a</Math> and <Math>b</Math> are integers, then:</p>
        <MathBlock>a + b = b + a</MathBlock>
        <p className="mt-2 text-dark-400">
          The order in which we add two numbers does not matter.
        </p>
      </Axiom>

      <Example title="Commutativity in Action">
        <ul className="space-y-2 mt-2">
          <li><Math>3 + 5 = 5 + 3 = 8</Math></li>
          <li><Math>-2 + 7 = 7 + (-2) = 5</Math></li>
          <li><Math>-4 + (-3) = -3 + (-4) = -7</Math></li>
        </ul>
      </Example>

      {/* Associativity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Associativity of Addition</h2>

      <Axiom title="Associativity of Addition">
        <p>If <Math>a</Math>, <Math>b</Math>, and <Math>c</Math> are integers, then:</p>
        <MathBlock>(a + b) + c = a + (b + c)</MathBlock>
        <p className="mt-2 text-dark-400">
          When adding three or more numbers, it doesn't matter how we group them.
        </p>
      </Axiom>

      <Example title="Associativity in Action">
        <p>Consider <Math>(3 + 5) + 9</Math>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>(3 + 5) + 9 = 8 + 9 = 17</Math></li>
          <li><Math>3 + (5 + 9) = 3 + 14 = 17</Math></li>
        </ul>
        <p className="mt-3">
          Because of associativity, we can simply write <Math>3 + 5 + 9</Math> without parentheses.
        </p>
      </Example>

      <Callout type="info" title="Dropping Parentheses">
        <p>
          Thanks to associativity, we can write sums like <Math>a + b + c + d</Math> without
          parentheses. No matter how we group the terms, we'll get the same result.
        </p>
      </Callout>

      {/* Interactive Associativity Demo */}
      <AssociativityDemo />

      {/* Subtraction Notation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Subtraction as Addition</h2>

      <Definition title="Subtraction Notation">
        <p>
          We write <Math>a - b</Math> instead of <Math>a + (-b)</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          Subtraction is just addition of the additive inverse.
        </p>
      </Definition>

      <Example title="Subtraction Examples">
        <ul className="space-y-2 mt-2">
          <li><Math>5 - 3 = 5 + (-3) = 2</Math></li>
          <li><Math>3 - 7 = 3 + (-7) = -4</Math></li>
          <li><Math>-2 - 5 = -2 + (-5) = -7</Math></li>
        </ul>
      </Example>

      {/* New Theorems */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Important Theorems</h2>

      <Theorem
        title="N3: Uniqueness of Additive Inverse"
        proof={
          <>
            <p>Given <Math>a + b = 0</Math>, add <Math>-a</Math> to both sides:</p>
            <MathBlock>-a + (a + b) = -a + 0</MathBlock>
            <p className="mt-2">By associativity:</p>
            <MathBlock>(-a + a) + b = -a</MathBlock>
            <p className="mt-2">By N2 (additive inverse):</p>
            <MathBlock>0 + b = -a</MathBlock>
            <p className="mt-2">By N1 (identity):</p>
            <MathBlock>b = -a</MathBlock>
            <p className="mt-2">By symmetry (swapping roles of <Math>a</Math> and <Math>b</Math>), we also get <Math>a = -b</Math>.</p>
          </>
        }
      >
        <p>If <Math>a + b = 0</Math>, then <Math>b = -a</Math> and <Math>a = -b</Math>.</p>
      </Theorem>

      <Theorem
        title="N4: Double Negative"
        className="mt-6"
        proof={
          <>
            <p>We need to show that <Math>a</Math> is the additive inverse of <Math>-a</Math>.</p>
            <p className="mt-2">By N2, we know:</p>
            <MathBlock>a + (-a) = 0</MathBlock>
            <p className="mt-2">By commutativity:</p>
            <MathBlock>(-a) + a = 0</MathBlock>
            <p className="mt-2">By N3 (uniqueness of additive inverse), since <Math>(-a) + a = 0</Math>, the additive inverse of <Math>-a</Math> must be <Math>a</Math>.</p>
            <p className="mt-2">Therefore:</p>
            <MathBlock>-(-a) = a</MathBlock>
          </>
        }
      >
        <p>For any integer <Math>a</Math>:</p>
        <MathBlock>-(-a) = a</MathBlock>
        <p className="mt-2 text-dark-400">
          The additive inverse of <Math>-a</Math> is <Math>a</Math> itself.
        </p>
      </Theorem>

      <Example title="Double Negative Examples">
        <ul className="space-y-2 mt-2">
          <li><Math>-(-3) = 3</Math></li>
          <li><Math>-(-(-5)) = -5</Math></li>
          <li><Math>-(-0) = 0</Math></li>
        </ul>
      </Example>

      <Theorem
        title="N5: Negation of a Sum"
        className="mt-6"
        proof={
          <>
            <p>We need to show that <Math>-a + (-b)</Math> is the additive inverse of <Math>a + b</Math>.</p>
            <p className="mt-2">Consider:</p>
            <MathBlock>(a + b) + (-a + (-b))</MathBlock>
            <p className="mt-2">By associativity and commutativity, we can rearrange:</p>
            <MathBlock>= (a + (-a)) + (b + (-b))</MathBlock>
            <p className="mt-2">By N2:</p>
            <MathBlock>= 0 + 0 = 0</MathBlock>
            <p className="mt-2">Since <Math>(a + b) + (-a + (-b)) = 0</Math>, by N3:</p>
            <MathBlock>-(a + b) = -a + (-b) = -a - b</MathBlock>
          </>
        }
      >
        <p>For any integers <Math>a</Math> and <Math>b</Math>:</p>
        <MathBlock>-(a + b) = -a - b</MathBlock>
        <p className="mt-2 text-dark-400">
          The additive inverse of a sum is the sum of the additive inverses.
        </p>
      </Theorem>

      <Example title="Negating Sums">
        <ul className="space-y-2 mt-2">
          <li><Math>-(3 + 5) = -3 - 5 = -8</Math></li>
          <li><Math>-(-4 + 5) = -(-4) - 5 = 4 - 5 = -1</Math></li>
          <li><Math>-(3 - 7) = -3 - (-7) = -3 + 7 = 4</Math></li>
        </ul>
      </Example>

      {/* Solving Equations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Solving Simple Equations</h2>

      <p className="text-dark-300 mb-6">
        From an equation <Math>a + b = c</Math>, we can solve for either variable by
        subtracting from both sides.
      </p>

      <Example title="Solving for x">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-dark-200">Solve <Math>x + 3 = 5</Math>:</p>
            <p className="text-dark-300 mt-1">Subtract 3 from both sides: <Math>x = 5 - 3 = 2</Math></p>
          </div>
          <div>
            <p className="font-semibold text-dark-200">Solve <Math>4 - a = 3</Math>:</p>
            <p className="text-dark-300 mt-1">Rewrite: <Math>4 + (-a) = 3</Math>, so <Math>-a = 3 - 4 = -1</Math>, thus <Math>a = 1</Math></p>
          </div>
          <div>
            <p className="font-semibold text-dark-200">Solve <Math>-2 - y = 5</Math>:</p>
            <p className="text-dark-300 mt-1">Rewrite: <Math>-2 + (-y) = 5</Math>, so <Math>-y = 5 + 2 = 7</Math>, thus <Math>y = -7</Math></p>
          </div>
        </div>
      </Example>

      {/* Properties of Positive and Negative */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Closure Properties</h2>

      <Definition title="Closure Under Addition">
        <ul className="space-y-2 mt-2">
          <li>The sum of two <strong>positive</strong> integers is positive.</li>
          <li>The sum of two <strong>negative</strong> integers is negative.</li>
        </ul>
      </Definition>

      <NumberLine min={-10} max={10} showAddition={{ start: -3, add: -4 }} interactive={false} />

      <p className="text-sm text-dark-400 text-center mt-2">
        Adding two negative numbers: <Math>-3 + (-4) = -7</Math>. We move left from <Math>-3</Math>.
      </p>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Commutativity:</strong> <Math>a + b = b + a</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Associativity:</strong> <Math>(a + b) + c = a + (b + c)</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Double Negative:</strong> <Math>-(-a) = a</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Negation of Sum:</strong> <Math>-(a + b) = -a - b</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={1} sectionTitle="Rules for Addition" questions={section01Questions} />
    </LessonLayout>
  );
}
