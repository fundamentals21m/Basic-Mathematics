import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section43Questions } from '../../data/quizzes';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        A <strong>function</strong> is a fundamental concept in mathematics—a rule that assigns
        each input exactly one output. Functions allow us to describe relationships between quantities
        precisely and form the foundation for calculus and analysis.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Definition of a Function</h2>

      <Definition title="Function">
        <p>
          A <strong>function</strong> <Math>f</Math> from set <Math>A</Math> to set <Math>B</Math> is a rule
          that assigns to each element <Math>{'x \\in A'}</Math> exactly one element <Math>{'f(x) \\in B'}</Math>.
        </p>
        <MathBlock>
          {'f: A \\to B'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          We call <Math>A</Math> the <strong>domain</strong> and <Math>B</Math> the <strong>codomain</strong>.
        </p>
      </Definition>

      <Definition title="Notation">
        <p>
          We write <Math>{'y = f(x)'}</Math> to mean that <Math>y</Math> is the value of <Math>f</Math> at <Math>x</Math>.
          The element <Math>x</Math> is called the <strong>input</strong> or <strong>argument</strong>,
          and <Math>{'f(x)'}</Math> is the <strong>output</strong> or <strong>value</strong>.
        </p>
      </Definition>

      <Example title="A Simple Function">
        <p>Let <Math>{'f(x) = x^2'}</Math> for all real numbers <Math>x</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'f(2) = 4'}</Math></p>
          <p><Math>{'f(-3) = 9'}</Math></p>
          <p><Math>{'f(0) = 0'}</Math></p>
        </div>
      </Example>

      {/* Domain and Range */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Domain and Range</h2>

      <Definition title="Domain">
        <p>
          The <strong>domain</strong> of a function is the set of all allowable inputs.
          Often we consider the <strong>natural domain</strong>: the largest set of real numbers
          for which the function formula makes sense.
        </p>
      </Definition>

      <Definition title="Range (Image)">
        <p>
          The <strong>range</strong> (or <strong>image</strong>) of a function is the set of all
          actual outputs:
        </p>
        <MathBlock>
          {'\\text{Range}(f) = \\{f(x) : x \\in \\text{Domain}(f)\\}'}
        </MathBlock>
      </Definition>

      <Example title="Finding Domain and Range">
        <p>Find the domain and range of <Math>{'f(x) = \\sqrt{x}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Domain:</strong> <Math>{'x \\geq 0'}</Math> (since we need non-negative inputs for real square roots)</p>
          <p><strong>Range:</strong> <Math>{'y \\geq 0'}</Math> (square roots are non-negative)</p>
        </div>
      </Example>

      <Example title="Domain with Restrictions">
        <p>Find the natural domain of <Math>{'f(x) = \\frac{1}{x - 2}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>The expression is undefined when <Math>{'x - 2 = 0'}</Math>.</p>
          <p><strong>Domain:</strong> <Math>{'x \\neq 2'}</Math>, or <Math>{'(-\\infty, 2) \\cup (2, \\infty)'}</Math>.</p>
        </div>
      </Example>

      {/* Function Equality */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Equality of Functions</h2>

      <Theorem title="When Functions Are Equal">
        <p>
          Two functions <Math>f</Math> and <Math>g</Math> are equal if and only if:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-dark-300">
          <li>They have the same domain</li>
          <li><Math>{'f(x) = g(x)'}</Math> for every <Math>x</Math> in that domain</li>
        </ol>
      </Theorem>

      <Callout type="warning" title="Domain Matters!">
        <p>
          The functions <Math>{'f(x) = x'}</Math> with domain <Math>{'\\mathbb{R}'}</Math> and
          <Math>{'g(x) = x'}</Math> with domain <Math>{'[0, 1]'}</Math> are <em>different</em> functions,
          even though they have the same formula.
        </p>
      </Callout>

      {/* Function Operations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Operations on Functions</h2>

      <Definition title="Arithmetic Operations">
        <p>For functions <Math>f</Math> and <Math>g</Math>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Sum:</strong> <Math>{'(f + g)(x) = f(x) + g(x)'}</Math></li>
          <li><strong>Difference:</strong> <Math>{'(f - g)(x) = f(x) - g(x)'}</Math></li>
          <li><strong>Product:</strong> <Math>{'(fg)(x) = f(x) \\cdot g(x)'}</Math></li>
          <li><strong>Quotient:</strong> <Math>{'(f/g)(x) = f(x)/g(x)'}</Math> (when <Math>{'g(x) \\neq 0'}</Math>)</li>
        </ul>
      </Definition>

      <Example title="Combining Functions">
        <p>Let <Math>{'f(x) = x^2'}</Math> and <Math>{'g(x) = 3x + 1'}</Math>. Find <Math>{'(f + g)(2)'}</Math> and <Math>{'(fg)(2)'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'(f + g)(2) = f(2) + g(2) = 4 + 7 = 11'}</Math></p>
          <p><Math>{'(fg)(2) = f(2) \\cdot g(2) = 4 \\cdot 7 = 28'}</Math></p>
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
            <span>A function assigns each input exactly one output</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Domain is the set of valid inputs; range is the set of actual outputs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Two functions are equal if they have the same domain and same values</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Functions can be added, subtracted, multiplied, and divided</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={43} sectionTitle="Definition of a Function" questions={section43Questions} />
    </LessonLayout>
  );
}
