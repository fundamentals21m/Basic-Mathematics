import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section52Questions } from '../../data/quizzes';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Cycle notation</strong> provides a compact way to write permutations by showing how
        elements cycle through positions. Every permutation can be decomposed into disjoint cycles.
      </p>

      {/* Cycle Notation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Cycle Notation</h2>

      <Definition title="Cycle">
        <p>
          A <strong>cycle</strong> <Math>{'(a_1 \\, a_2 \\, \\cdots \\, a_k)'}</Math> is the permutation:
        </p>
        <MathBlock>
          {'a_1 \\mapsto a_2 \\mapsto a_3 \\mapsto \\cdots \\mapsto a_k \\mapsto a_1'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          All elements not in the cycle are fixed.
        </p>
      </Definition>

      <Example title="Reading a Cycle">
        <p>The cycle <Math>{'(1 \\, 3 \\, 4)'}</Math> on <Math>{'\\{1, 2, 3, 4\\}'}</Math>:</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'1 \\mapsto 3, \\quad 3 \\mapsto 4, \\quad 4 \\mapsto 1'}</Math></p>
          <p><Math>{'2 \\mapsto 2'}</Math> (fixed)</p>
          <MathBlock>
            {'(1 \\, 3 \\, 4) = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 3 & 2 & 4 & 1 \\end{pmatrix}'}
          </MathBlock>
        </div>
      </Example>

      <Definition title="Cycle Length">
        <p>
          A cycle involving <Math>k</Math> elements is called a <strong><Math>k</Math>-cycle</strong>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>A 2-cycle is a transposition</li>
          <li>A 3-cycle moves three elements cyclically</li>
        </ul>
      </Definition>

      {/* Disjoint Cycles */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Disjoint Cycles</h2>

      <Definition title="Disjoint Cycles">
        <p>
          Two cycles are <strong>disjoint</strong> if they move completely different elements.
        </p>
      </Definition>

      <Theorem title="Disjoint Cycle Decomposition">
        <p>
          Every permutation can be written as a product of disjoint cycles (uniquely up to order).
        </p>
      </Theorem>

      <Example title="Decomposing into Cycles">
        <p>Write <Math>{'\\sigma = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 \\\\ 3 & 5 & 4 & 1 & 2 \\end{pmatrix}'}</Math> in cycle notation.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Trace where elements go:</p>
          <ul className="list-disc list-inside">
            <li><Math>{'1 \\to 3 \\to 4 \\to 1'}</Math> (a 3-cycle)</li>
            <li><Math>{'2 \\to 5 \\to 2'}</Math> (a 2-cycle)</li>
          </ul>
          <MathBlock>
            {'\\sigma = (1 \\, 3 \\, 4)(2 \\, 5)'}
          </MathBlock>
        </div>
      </Example>

      <Callout type="info" title="Disjoint Cycles Commute">
        <p>
          If cycles are disjoint, their order doesn't matter: <Math>{'(1 \\, 2)(3 \\, 4) = (3 \\, 4)(1 \\, 2)'}</Math>.
        </p>
      </Callout>

      {/* Order of a Permutation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Order of a Permutation</h2>

      <Definition title="Order">
        <p>
          The <strong>order</strong> of a permutation <Math>\\sigma</Math> is the smallest positive integer <Math>n</Math>
          such that <Math>{'\\sigma^n = e'}</Math>.
        </p>
      </Definition>

      <Theorem title="Order of a Cycle">
        <p>
          A <Math>k</Math>-cycle has order <Math>k</Math>.
        </p>
      </Theorem>

      <Theorem title="Order from Disjoint Cycles">
        <p>
          If <Math>\\sigma</Math> is a product of disjoint cycles of lengths <Math>{'k_1, k_2, \\ldots, k_m'}</Math>:
        </p>
        <MathBlock>
          {'\\text{order}(\\sigma) = \\text{lcm}(k_1, k_2, \\ldots, k_m)'}
        </MathBlock>
      </Theorem>

      <Example title="Finding Order">
        <p>Find the order of <Math>{'\\sigma = (1 \\, 2 \\, 3)(4 \\, 5)'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>The 3-cycle has order 3; the 2-cycle has order 2.</p>
          <MathBlock>
            {'\\text{order}(\\sigma) = \\text{lcm}(3, 2) = 6'}
          </MathBlock>
        </div>
      </Example>

      {/* Decomposing into Transpositions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Cycles as Products of Transpositions</h2>

      <Theorem title="Cycle as Transpositions">
        <p>
          A <Math>k</Math>-cycle can be written as <Math>{'k - 1'}</Math> transpositions:
        </p>
        <MathBlock>
          {'(a_1 \\, a_2 \\, \\cdots \\, a_k) = (a_1 \\, a_k)(a_1 \\, a_{k-1}) \\cdots (a_1 \\, a_2)'}
        </MathBlock>
      </Theorem>

      <Example title="3-Cycle as Transpositions">
        <MathBlock>
          {'(1 \\, 2 \\, 3) = (1 \\, 3)(1 \\, 2)'}
        </MathBlock>
        <p className="text-dark-300">Check: <Math>{'(1 \\, 2)(1) = 2'}</Math>, <Math>{'(1 \\, 3)(2) = 2'}</Math>... Actually: apply right-to-left.</p>
        <p className="text-dark-300">More clearly: <Math>{'(1 \\, 3)(1 \\, 2): 1 \\to 2 \\to 2; 2 \\to 1 \\to 3; 3 \\to 3 \\to 1'}</Math>.</p>
      </Example>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>Cycle notation: <Math>{'(a_1 \\, a_2 \\, \\cdots \\, a_k)'}</Math> means <Math>{'a_i \\to a_{i+1}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Every permutation is a product of disjoint cycles</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Order of disjoint cycles = lcm of cycle lengths</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>A <Math>k</Math>-cycle = product of <Math>{'k - 1'}</Math> transpositions</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={52} sectionTitle="Cycles" questions={section52Questions} />
    </LessonLayout>
  );
}
