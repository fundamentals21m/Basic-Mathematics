import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section48Questions } from '../../data/quizzes';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        A <strong>mapping</strong> (or function between sets) generalizes the concept of function
        beyond real numbers. Mappings are fundamental in abstract algebra, topology, and modern mathematics.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Definition of a Mapping</h2>

      <Definition title="Mapping">
        <p>
          A <strong>mapping</strong> <Math>f</Math> from set <Math>A</Math> to set <Math>B</Math>,
          written <Math>{'f: A \\to B'}</Math>, assigns to each element <Math>{'a \\in A'}</Math>
          exactly one element <Math>{'f(a) \\in B'}</Math>.
        </p>
      </Definition>

      <Definition title="Terminology">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><Math>A</Math> is called the <strong>domain</strong></li>
          <li><Math>B</Math> is called the <strong>codomain</strong></li>
          <li>For <Math>{'a \\in A'}</Math>, <Math>{'f(a)'}</Math> is the <strong>image</strong> of <Math>a</Math></li>
          <li><Math>a</Math> is a <strong>preimage</strong> of <Math>{'f(a)'}</Math></li>
        </ul>
      </Definition>

      <Example title="A Simple Mapping">
        <p>Let <Math>{'A = \\{1, 2, 3\\}'}</Math> and <Math>{'B = \\{a, b\\}'}</Math>. Define <Math>f</Math> by:</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'f(1) = a, \\quad f(2) = b, \\quad f(3) = a'}</Math></p>
          <p>This is a valid mapping since each element of <Math>A</Math> has exactly one image in <Math>B</Math>.</p>
        </div>
      </Example>

      {/* Image and Preimage */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Image and Preimage</h2>

      <Definition title="Image of a Set">
        <p>
          The <strong>image</strong> of a subset <Math>{'S \\subseteq A'}</Math> under <Math>f</Math> is:
        </p>
        <MathBlock>
          {'f(S) = \\{f(a) : a \\in S\\}'}
        </MathBlock>
        <p className="mt-2">
          The <strong>image</strong> (or range) of <Math>f</Math> is <Math>{'f(A)'}</Math>.
        </p>
      </Definition>

      <Definition title="Preimage of a Set">
        <p>
          The <strong>preimage</strong> of a subset <Math>{'T \\subseteq B'}</Math> is:
        </p>
        <MathBlock>
          {'f^{-1}(T) = \\{a \\in A : f(a) \\in T\\}'}
        </MathBlock>
      </Definition>

      <Callout type="warning" title="Notation Warning">
        <p>
          <Math>{'f^{-1}(T)'}</Math> denotes the preimage of <Math>T</Math>—this does NOT require
          <Math>f</Math> to be invertible!
        </p>
      </Callout>

      <Example title="Computing Preimages">
        <p>Let <Math>{'f: \\mathbb{R} \\to \\mathbb{R}'}</Math> be <Math>{'f(x) = x^2'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'f^{-1}(\\{4\\}) = \\{-2, 2\\}'}</Math></p>
          <p><Math>{'f^{-1}(\\{-1\\}) = \\emptyset'}</Math> (no real number squares to -1)</p>
          <p><Math>{'f^{-1}([0, 9]) = [-3, 3]'}</Math></p>
        </div>
      </Example>

      {/* Types of Mappings */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Types of Mappings</h2>

      <Definition title="Injective (One-to-One)">
        <p>
          A mapping <Math>f</Math> is <strong>injective</strong> if different inputs give different outputs:
        </p>
        <MathBlock>
          {'f(a_1) = f(a_2) \\implies a_1 = a_2'}
        </MathBlock>
      </Definition>

      <Definition title="Surjective (Onto)">
        <p>
          A mapping <Math>f</Math> is <strong>surjective</strong> if every element of <Math>B</Math>
          is the image of some element of <Math>A</Math>:
        </p>
        <MathBlock>
          {'\\forall b \\in B, \\exists a \\in A: f(a) = b'}
        </MathBlock>
      </Definition>

      <Definition title="Bijective (One-to-One and Onto)">
        <p>
          A mapping is <strong>bijective</strong> if it is both injective and surjective.
          Bijections establish a perfect pairing between <Math>A</Math> and <Math>B</Math>.
        </p>
      </Definition>

      <Example title="Classifying Mappings">
        <p>Let <Math>{'f: \\mathbb{R} \\to \\mathbb{R}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'f(x) = 2x + 1'}</Math>: <strong>Bijective</strong> (each output has exactly one preimage)</p>
          <p><Math>{'f(x) = x^2'}</Math>: <strong>Neither</strong> (not injective since <Math>{'f(-1) = f(1)'}</Math>, not surjective since <Math>{'f(x) \\geq 0'}</Math>)</p>
          <p><Math>{'f(x) = e^x'}</Math>: <strong>Injective</strong> but not surjective (range is <Math>{'(0, \\infty)'}</Math>)</p>
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
            <span>A mapping assigns each element of the domain to exactly one element of the codomain</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Injective: different inputs → different outputs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Surjective: every codomain element is hit</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Bijective: both injective and surjective (perfect pairing)</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={48} sectionTitle="Definition of Mappings" questions={section48Questions} />
    </LessonLayout>
  );
}
