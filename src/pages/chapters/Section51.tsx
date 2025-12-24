import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section51Questions } from '../../data/quizzes';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        A <strong>permutation</strong> is a bijection from a finite set to itself—essentially a rearrangement.
        Permutations are fundamental in combinatorics and algebra.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Definition</h2>

      <Definition title="Permutation">
        <p>
          A <strong>permutation</strong> of a set <Math>{'S = \\{1, 2, \\ldots, n\\}'}</Math> is a bijection
          <Math>{'\\sigma: S \\to S'}</Math>.
        </p>
      </Definition>

      <Definition title="Two-Line Notation">
        <p>
          We can write a permutation by showing where each element goes:
        </p>
        <MathBlock>
          {'\\sigma = \\begin{pmatrix} 1 & 2 & 3 & \\cdots & n \\\\ \\sigma(1) & \\sigma(2) & \\sigma(3) & \\cdots & \\sigma(n) \\end{pmatrix}'}
        </MathBlock>
      </Definition>

      <Example title="A Permutation">
        <p>Let <Math>{'\\sigma: \\{1, 2, 3\\} \\to \\{1, 2, 3\\}'}</Math> be defined by <Math>{'\\sigma(1) = 2'}</Math>, <Math>{'\\sigma(2) = 3'}</Math>, <Math>{'\\sigma(3) = 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\sigma = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 1 \\end{pmatrix}'}
          </MathBlock>
        </div>
      </Example>

      {/* Counting Permutations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Counting Permutations</h2>

      <Theorem title="Number of Permutations">
        <p>
          The number of permutations of <Math>n</Math> elements is:
        </p>
        <MathBlock>
          {'n! = n \\times (n-1) \\times \\cdots \\times 2 \\times 1'}
        </MathBlock>
      </Theorem>

      <Example title="Counting">
        <p>How many permutations of <Math>{'\\{1, 2, 3, 4\\}'}</Math> are there?</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'4! = 4 \\times 3 \\times 2 \\times 1 = 24'}
          </MathBlock>
        </div>
      </Example>

      {/* Composition of Permutations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Composition of Permutations</h2>

      <Definition title="Composition">
        <p>
          The composition <Math>{'\\tau \\circ \\sigma'}</Math> applies <Math>\\sigma</Math> first, then <Math>\\tau</Math>:
        </p>
        <MathBlock>
          {'(\\tau \\circ \\sigma)(x) = \\tau(\\sigma(x))'}
        </MathBlock>
      </Definition>

      <Example title="Composing Permutations">
        <p>Let <Math>{'\\sigma = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 1 \\end{pmatrix}'}</Math> and <Math>{'\\tau = \\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 3 & 2 \\end{pmatrix}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'(\\tau \\circ \\sigma)(1) = \\tau(\\sigma(1)) = \\tau(2) = 3'}</Math></p>
          <p><Math>{'(\\tau \\circ \\sigma)(2) = \\tau(\\sigma(2)) = \\tau(3) = 2'}</Math></p>
          <p><Math>{'(\\tau \\circ \\sigma)(3) = \\tau(\\sigma(3)) = \\tau(1) = 1'}</Math></p>
          <MathBlock>
            {'\\tau \\circ \\sigma = \\begin{pmatrix} 1 & 2 & 3 \\\\ 3 & 2 & 1 \\end{pmatrix}'}
          </MathBlock>
        </div>
      </Example>

      {/* Special Permutations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Permutations</h2>

      <Definition title="Identity Permutation">
        <p>
          The <strong>identity permutation</strong> <Math>e</Math> leaves everything in place:
        </p>
        <MathBlock>
          {'e = \\begin{pmatrix} 1 & 2 & \\cdots & n \\\\ 1 & 2 & \\cdots & n \\end{pmatrix}'}
        </MathBlock>
      </Definition>

      <Definition title="Inverse Permutation">
        <p>
          Every permutation <Math>\\sigma</Math> has an inverse <Math>{'\\sigma^{-1}'}</Math> satisfying:
        </p>
        <MathBlock>
          {'\\sigma \\circ \\sigma^{-1} = \\sigma^{-1} \\circ \\sigma = e'}
        </MathBlock>
      </Definition>

      <Definition title="Transposition">
        <p>
          A <strong>transposition</strong> swaps exactly two elements and fixes the rest.
          The transposition swapping <Math>i</Math> and <Math>j</Math> is written <Math>{'(i \\, j)'}</Math>.
        </p>
      </Definition>

      <Example title="A Transposition">
        <MathBlock>
          {'(1 \\, 3) = \\begin{pmatrix} 1 & 2 & 3 \\\\ 3 & 2 & 1 \\end{pmatrix}'}
        </MathBlock>
        <p className="text-dark-300">This swaps 1 and 3, keeping 2 fixed.</p>
      </Example>

      <Callout type="info" title="Transpositions Generate All Permutations">
        <p>
          Every permutation can be written as a composition of transpositions.
        </p>
      </Callout>

      {/* Symmetric Group */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Symmetric Group</h2>

      <Definition title="Symmetric Group">
        <p>
          The <strong>symmetric group</strong> <Math>{'S_n'}</Math> is the set of all permutations of
          <Math>{'\\{1, 2, \\ldots, n\\}'}</Math> together with composition as the operation.
        </p>
        <p className="mt-2 text-dark-400">
          <Math>{'|S_n| = n!'}</Math>
        </p>
      </Definition>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>A permutation is a bijection from a set to itself</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>There are <Math>{'n!'}</Math> permutations of <Math>n</Math> elements</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Every permutation has an inverse</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>A transposition swaps exactly two elements</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={51} sectionTitle="Permutations" questions={section51Questions} />
    </LessonLayout>
  );
}
