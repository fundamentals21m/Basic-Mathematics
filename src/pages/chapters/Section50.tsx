import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section50Questions } from '../../data/quizzes';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Composition</strong> combines two mappings by applying one after the other.
        <strong> Inverse mappings</strong> "undo" a function. Both concepts are fundamental
        in algebra and analysis.
      </p>

      {/* Composition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Composition of Mappings</h2>

      <Definition title="Composition">
        <p>
          Given <Math>{'f: A \\to B'}</Math> and <Math>{'g: B \\to C'}</Math>, the <strong>composition</strong>
          <Math>{'g \\circ f'}</Math> is:
        </p>
        <MathBlock>
          {'g \\circ f: A \\to C, \\quad (g \\circ f)(a) = g(f(a))'}
        </MathBlock>
      </Definition>

      <Callout type="warning" title="Order Matters!">
        <p>
          In <Math>{'g \\circ f'}</Math>, we apply <Math>f</Math> first, then <Math>g</Math>.
          Read right-to-left: "<Math>g</Math> after <Math>f</Math>."
        </p>
      </Callout>

      <Example title="Computing a Composition">
        <p>Let <Math>{'f(x) = 2x + 1'}</Math> and <Math>{'g(x) = x^2'}</Math>. Find <Math>{'g \\circ f'}</Math> and <Math>{'f \\circ g'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'(g \\circ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)^2'}
          </MathBlock>
          <MathBlock>
            {'(f \\circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 1'}
          </MathBlock>
          <p>Note: <Math>{'g \\circ f \\neq f \\circ g'}</Math> in general!</p>
        </div>
      </Example>

      <Theorem title="Associativity">
        <p>Composition is associative:</p>
        <MathBlock>
          {'(h \\circ g) \\circ f = h \\circ (g \\circ f)'}
        </MathBlock>
      </Theorem>

      <Theorem title="Composition Preserves Properties">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li>If <Math>f</Math> and <Math>g</Math> are injective, so is <Math>{'g \\circ f'}</Math></li>
          <li>If <Math>f</Math> and <Math>g</Math> are surjective, so is <Math>{'g \\circ f'}</Math></li>
          <li>If <Math>f</Math> and <Math>g</Math> are bijective, so is <Math>{'g \\circ f'}</Math></li>
        </ul>
      </Theorem>

      {/* Inverse Mappings */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Inverse Mappings</h2>

      <Definition title="Inverse Mapping">
        <p>
          If <Math>{'f: A \\to B'}</Math> is bijective, its <strong>inverse</strong> <Math>{'f^{-1}: B \\to A'}</Math> satisfies:
        </p>
        <MathBlock>
          {'f^{-1}(b) = a \\quad \\Longleftrightarrow \\quad f(a) = b'}
        </MathBlock>
      </Definition>

      <Theorem title="Inverse Properties">
        <p>For a bijection <Math>f</Math>:</p>
        <MathBlock>
          {'f^{-1} \\circ f = \\text{id}_A \\quad \\text{and} \\quad f \\circ f^{-1} = \\text{id}_B'}
        </MathBlock>
      </Theorem>

      <Example title="Finding an Inverse">
        <p>Find the inverse of <Math>{'f(x) = 2x + 3'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Solve <Math>{'y = 2x + 3'}</Math> for <Math>x</Math>:</p>
          <MathBlock>
            {'x = \\frac{y - 3}{2}'}
          </MathBlock>
          <p>Therefore: <Math>{'f^{-1}(x) = \\frac{x - 3}{2}'}</Math></p>
        </div>
      </Example>

      <Theorem title="When Does an Inverse Exist?">
        <p>
          <Math>f</Math> has an inverse if and only if <Math>f</Math> is bijective.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Injective</strong> ensures <Math>{'f^{-1}'}</Math> is well-defined (unique preimage)</li>
          <li><strong>Surjective</strong> ensures <Math>{'f^{-1}'}</Math> is defined on all of <Math>B</Math></li>
        </ul>
      </Theorem>

      <Example title="Non-Invertible Function">
        <p>Why is <Math>{'f(x) = x^2'}</Math> from <Math>{'\\mathbb{R}'}</Math> to <Math>{'\\mathbb{R}'}</Math> not invertible?</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Not injective: <Math>{'f(-2) = f(2) = 4'}</Math></p>
          <p>Not surjective: No <Math>x</Math> gives <Math>{'f(x) = -1'}</Math></p>
        </div>
      </Example>

      {/* Left and Right Inverses */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">One-Sided Inverses</h2>

      <Definition title="Left and Right Inverses">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><Math>g</Math> is a <strong>left inverse</strong> of <Math>f</Math> if <Math>{'g \\circ f = \\text{id}_A'}</Math></li>
          <li><Math>h</Math> is a <strong>right inverse</strong> of <Math>f</Math> if <Math>{'f \\circ h = \\text{id}_B'}</Math></li>
        </ul>
      </Definition>

      <Theorem title="One-Sided Inverse Existence">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><Math>f</Math> has a left inverse ⟺ <Math>f</Math> is injective</li>
          <li><Math>f</Math> has a right inverse ⟺ <Math>f</Math> is surjective</li>
          <li><Math>f</Math> has a two-sided inverse ⟺ <Math>f</Math> is bijective</li>
        </ul>
      </Theorem>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><Math>{'(g \\circ f)(x) = g(f(x))'}</Math> — apply <Math>f</Math> first, then <Math>g</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Composition is associative but not commutative</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Only bijections have (two-sided) inverses</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><Math>{'f^{-1} \\circ f = \\text{id}'}</Math> and <Math>{'f \\circ f^{-1} = \\text{id}'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={50} sectionTitle="Composition and Inverses" questions={section50Questions} />
    </LessonLayout>
  );
}
