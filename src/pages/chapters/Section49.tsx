import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section49Questions } from '../../data/quizzes';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        In this section, we establish the <strong>formal language</strong> of mappings: precise notation,
        the distinction between functions with the same formula but different domains, and how to properly
        specify a mapping.
      </p>

      {/* Specifying Mappings */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">How to Specify a Mapping</h2>

      <Definition title="Complete Specification">
        <p>A mapping is fully specified by:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-dark-300">
          <li>The <strong>domain</strong> <Math>A</Math></li>
          <li>The <strong>codomain</strong> <Math>B</Math></li>
          <li>The <strong>rule</strong> assigning elements of <Math>A</Math> to elements of <Math>B</Math></li>
        </ol>
      </Definition>

      <Callout type="warning" title="Domain Matters">
        <p>
          The functions <Math>{'f: \\mathbb{R} \\to \\mathbb{R}'}</Math>, <Math>{'f(x) = x^2'}</Math>
          and <Math>{'g: [0, \\infty) \\to \\mathbb{R}'}</Math>, <Math>{'g(x) = x^2'}</Math>
          are <em>different</em> mappings, even though they have the same formula.
        </p>
      </Callout>

      <Example title="Arrow Notation">
        <p>We can write a mapping as:</p>
        <MathBlock>
          {'f: \\mathbb{R} \\to \\mathbb{R}, \\quad x \\mapsto x^2'}
        </MathBlock>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>This means: <Math>f</Math> takes a real number <Math>x</Math> and maps it to <Math>{'x^2'}</Math>.</p>
          <p>Note: <Math>{'\\to'}</Math> connects sets; <Math>{'\\mapsto'}</Math> shows what happens to elements.</p>
        </div>
      </Example>

      {/* Restriction and Extension */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Restriction and Extension</h2>

      <Definition title="Restriction">
        <p>
          If <Math>{'f: A \\to B'}</Math> and <Math>{'S \\subseteq A'}</Math>, the <strong>restriction</strong> of
          <Math>f</Math> to <Math>S</Math> is:
        </p>
        <MathBlock>
          {'f|_S: S \\to B, \\quad (f|_S)(x) = f(x)'}
        </MathBlock>
      </Definition>

      <Example title="Restriction Example">
        <p>Let <Math>{'f: \\mathbb{R} \\to \\mathbb{R}'}</Math>, <Math>{'f(x) = x^2'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>The restriction <Math>{'f|_{[0, \\infty)}'}</Math> is the same formula but with domain <Math>{'[0, \\infty)'}</Math>.</p>
          <p>This restricted function <em>is</em> injective (unlike the original).</p>
        </div>
      </Example>

      <Definition title="Extension">
        <p>
          <Math>g</Math> is an <strong>extension</strong> of <Math>f</Math> if <Math>f</Math> is a restriction of <Math>g</Math>.
          That is, the domain of <Math>g</Math> contains the domain of <Math>f</Math>, and they agree where both are defined.
        </p>
      </Definition>

      {/* Graph of a Mapping */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Graph of a Mapping</h2>

      <Definition title="Graph">
        <p>
          The <strong>graph</strong> of <Math>{'f: A \\to B'}</Math> is the set of ordered pairs:
        </p>
        <MathBlock>
          {'\\Gamma_f = \\{(a, f(a)) : a \\in A\\} \\subseteq A \\times B'}
        </MathBlock>
      </Definition>

      <Theorem title="Graph Characterization">
        <p>
          A subset <Math>{'\\Gamma \\subseteq A \\times B'}</Math> is the graph of a function iff
          for each <Math>{'a \\in A'}</Math>, there is exactly one <Math>{'b \\in B'}</Math> with <Math>{'(a, b) \\in \\Gamma'}</Math>.
        </p>
      </Theorem>

      {/* Identity and Constant */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Mappings</h2>

      <Definition title="Identity Mapping">
        <p>
          The <strong>identity mapping</strong> on set <Math>A</Math> is:
        </p>
        <MathBlock>
          {'\\text{id}_A: A \\to A, \\quad \\text{id}_A(a) = a'}
        </MathBlock>
      </Definition>

      <Definition title="Constant Mapping">
        <p>
          A <strong>constant mapping</strong> sends every element to the same value <Math>{'c \\in B'}</Math>:
        </p>
        <MathBlock>
          {'f: A \\to B, \\quad f(a) = c \\text{ for all } a \\in A'}
        </MathBlock>
      </Definition>

      <Definition title="Inclusion Mapping">
        <p>
          If <Math>{'S \\subseteq A'}</Math>, the <strong>inclusion</strong> is:
        </p>
        <MathBlock>
          {'\\iota: S \\to A, \\quad \\iota(s) = s'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This is like identity, but the codomain is larger than the domain.
        </p>
      </Definition>

      {/* Equality of Mappings */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Equality of Mappings</h2>

      <Theorem title="When Mappings Are Equal">
        <p>
          Two mappings <Math>{'f: A \\to B'}</Math> and <Math>{'g: C \\to D'}</Math> are equal iff:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>{'A = C'}</Math> (same domain)</li>
          <li><Math>{'B = D'}</Math> (same codomain)</li>
          <li><Math>{'f(a) = g(a)'}</Math> for all <Math>{'a \\in A'}</Math></li>
        </ol>
      </Theorem>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>A mapping requires specifying domain, codomain, and rule</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Same formula, different domain = different function</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Notation: <Math>{'f: A \\to B'}</Math> (sets), <Math>{'x \\mapsto f(x)'}</Math> (elements)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Restriction limits the domain; extension expands it</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={49} sectionTitle="Formalism of Mappings" questions={section49Questions} />
    </LessonLayout>
  );
}
