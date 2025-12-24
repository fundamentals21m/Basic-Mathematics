import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section55Questions } from '../../data/quizzes';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Mathematical induction</strong> is a powerful proof technique for statements about
        all positive integers. It works like dominos falling: if the first falls, and each falling
        domino knocks over the next, then all dominos fall.
      </p>

      {/* Principle of Induction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Principle of Induction</h2>

      <Theorem title="Principle of Mathematical Induction">
        <p>
          Let <Math>{'P(n)'}</Math> be a statement about positive integers. If:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2 text-dark-300">
          <li><strong>Base case:</strong> <Math>{'P(1)'}</Math> is true</li>
          <li><strong>Inductive step:</strong> For all <Math>{'k \\geq 1'}</Math>, if <Math>{'P(k)'}</Math> is true, then <Math>{'P(k+1)'}</Math> is true</li>
        </ol>
        <p className="mt-2">
          Then <Math>{'P(n)'}</Math> is true for all positive integers <Math>n</Math>.
        </p>
      </Theorem>

      <Definition title="Terminology">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><strong>Base case:</strong> Verify the statement for the first value</li>
          <li><strong>Inductive hypothesis:</strong> Assume <Math>{'P(k)'}</Math> is true</li>
          <li><strong>Inductive step:</strong> Prove <Math>{'P(k+1)'}</Math> using the hypothesis</li>
        </ul>
      </Definition>

      {/* First Example */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Example: Sum of First n Integers</h2>

      <Theorem title="Sum Formula">
        <p>For all positive integers <Math>n</Math>:</p>
        <MathBlock>
          {'1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}'}
        </MathBlock>
      </Theorem>

      <Example title="Proof by Induction">
        <p><strong>Base case (n = 1):</strong></p>
        <div className="mt-2 text-dark-300">
          <p>LHS = 1. RHS = <Math>{'\\frac{1 \\cdot 2}{2} = 1'}</Math>. ✓</p>
        </div>
        <p className="mt-4"><strong>Inductive step:</strong></p>
        <div className="mt-2 text-dark-300 space-y-2">
          <p>Assume <Math>{'1 + 2 + \\cdots + k = \\frac{k(k+1)}{2}'}</Math>.</p>
          <p>We need to show: <Math>{'1 + 2 + \\cdots + k + (k+1) = \\frac{(k+1)(k+2)}{2}'}</Math>.</p>
          <MathBlock>
            {'1 + 2 + \\cdots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1)'}
          </MathBlock>
          <MathBlock>
            {'= \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}'}
          </MathBlock>
          <p>By induction, the formula holds for all <Math>{'n \\geq 1'}</Math>. ∎</p>
        </div>
      </Example>

      {/* Second Example */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Example: Inequality</h2>

      <Theorem title="Exponential Growth">
        <p>For all <Math>{'n \\geq 1'}</Math>:</p>
        <MathBlock>
          {'2^n > n'}
        </MathBlock>
      </Theorem>

      <Example title="Proof">
        <p><strong>Base case (n = 1):</strong> <Math>{'2^1 = 2 > 1'}</Math>. ✓</p>
        <p className="mt-4"><strong>Inductive step:</strong></p>
        <div className="mt-2 text-dark-300 space-y-2">
          <p>Assume <Math>{'2^k > k'}</Math> for some <Math>{'k \\geq 1'}</Math>.</p>
          <MathBlock>
            {'2^{k+1} = 2 \\cdot 2^k > 2k \\geq k + 1'}
          </MathBlock>
          <p>(since <Math>{'2k \\geq k + 1'}</Math> for <Math>{'k \\geq 1'}</Math>)</p>
          <p>Therefore <Math>{'2^{k+1} > k + 1'}</Math>. ∎</p>
        </div>
      </Example>

      {/* Strong Induction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Strong Induction</h2>

      <Theorem title="Strong Induction">
        <p>
          Let <Math>{'P(n)'}</Math> be a statement. If:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2 text-dark-300">
          <li><strong>Base case:</strong> <Math>{'P(1)'}</Math> is true</li>
          <li><strong>Strong inductive step:</strong> If <Math>{'P(1), P(2), \\ldots, P(k)'}</Math> are all true, then <Math>{'P(k+1)'}</Math> is true</li>
        </ol>
        <p className="mt-2">
          Then <Math>{'P(n)'}</Math> is true for all <Math>{'n \\geq 1'}</Math>.
        </p>
      </Theorem>

      <Callout type="info" title="When to Use Strong Induction">
        <p>
          Use strong induction when proving <Math>{'P(k+1)'}</Math> requires knowledge of
          <Math>{'P(k)'}</Math> and earlier cases, not just <Math>{'P(k)'}</Math>.
        </p>
      </Callout>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>Induction proves statements for all positive integers</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Two steps: base case and inductive step</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Inductive step: assume <Math>{'P(k)'}</Math>, prove <Math>{'P(k+1)'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Strong induction allows assuming all cases up to <Math>k</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={55} sectionTitle="Induction" questions={section55Questions} />
    </LessonLayout>
  );
}
