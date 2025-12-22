import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example } from '../../components/common/ContentBlocks';
import { Math } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section13Questions } from '../../data/quizzes';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Before continuing further in mathematics, it is useful to pause and reflect on the
        <strong> logical structure</strong> of mathematical statements. Understanding how to
        read, write, and reason with mathematical expressions is essential for more advanced work.
      </p>

      {/* Mathematical Statements */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Mathematical Statements</h2>

      <Definition title="Statement">
        <p>
          A <strong>statement</strong> (or <strong>proposition</strong>) is a sentence that is either
          <em> true</em> or <em> false</em>, but not both.
        </p>
      </Definition>

      <Example title="Statements vs Non-Statements" className="mt-6">
        <div className="grid md:grid-cols-2 gap-6 mt-2">
          <div>
            <p className="font-semibold text-emerald-400 mb-2">Statements:</p>
            <ul className="list-disc list-inside text-dark-300 space-y-1">
              <li><Math>2 + 3 = 5</Math> (true)</li>
              <li><Math>7 {'<'} 4</Math> (false)</li>
              <li>"Every even number greater than 2 is the sum of two primes" (unknown, but still a statement)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-red-400 mb-2">Not Statements:</p>
            <ul className="list-disc list-inside text-dark-300 space-y-1">
              <li>"Is <Math>x</Math> positive?" (a question)</li>
              <li>"Let <Math>n = 5</Math>" (a command)</li>
              <li><Math>x + 3 = 7</Math> (depends on <Math>x</Math>)</li>
            </ul>
          </div>
        </div>
      </Example>

      {/* Open Sentences */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Open Sentences and Variables</h2>

      <Definition title="Open Sentence">
        <p>
          An <strong>open sentence</strong> is an expression containing one or more <strong>variables</strong>
          that becomes a statement when specific values are substituted for the variables.
        </p>
      </Definition>

      <Example title="Open Sentences" className="mt-6">
        <ul className="space-y-3 mt-2">
          <li>
            <Math>x + 2 = 5</Math>
            <div className="text-dark-400 ml-4">
              True when <Math>x = 3</Math>, false when <Math>x = 7</Math>
            </div>
          </li>
          <li>
            <Math>x^2 = 4</Math>
            <div className="text-dark-400 ml-4">
              True when <Math>x = 2</Math> or <Math>x = -2</Math>, false otherwise
            </div>
          </li>
          <li>
            <Math>x {'>'} 0</Math>
            <div className="text-dark-400 ml-4">
              True for all positive numbers, false for zero and negative numbers
            </div>
          </li>
        </ul>
      </Example>

      {/* Logical Connectives */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Logical Connectives</h2>

      <p className="text-dark-300 mb-6">
        We can combine statements using <strong>logical connectives</strong> to form new statements.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-3">AND (Conjunction)</h3>
          <p className="text-dark-300 mb-2">
            "<Math>P</Math> and <Math>Q</Math>" is true only when <em>both</em> <Math>P</Math> and <Math>Q</Math> are true.
          </p>
          <div className="text-dark-400 text-sm">
            <p>"<Math>2 {'<'} 5</Math> and <Math>3 {'<'} 4</Math>" is true</p>
            <p>"<Math>2 {'<'} 5</Math> and <Math>3 {'>'} 4</Math>" is false</p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-3">OR (Disjunction)</h3>
          <p className="text-dark-300 mb-2">
            "<Math>P</Math> or <Math>Q</Math>" is true when <em>at least one</em> of <Math>P</Math> or <Math>Q</Math> is true.
          </p>
          <div className="text-dark-400 text-sm">
            <p>"<Math>2 {'<'} 5</Math> or <Math>3 {'>'} 4</Math>" is true</p>
            <p>"<Math>2 {'>'} 5</Math> or <Math>3 {'>'} 4</Math>" is false</p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-3">NOT (Negation)</h3>
          <p className="text-dark-300 mb-2">
            "not <Math>P</Math>" is true when <Math>P</Math> is false, and false when <Math>P</Math> is true.
          </p>
          <div className="text-dark-400 text-sm">
            <p>"not (<Math>2 {'>'} 5</Math>)" is true</p>
            <p>"not (<Math>2 {'<'} 5</Math>)" is false</p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-3">IF-THEN (Implication)</h3>
          <p className="text-dark-300 mb-2">
            "If <Math>P</Math> then <Math>Q</Math>" is false only when <Math>P</Math> is true and <Math>Q</Math> is false.
          </p>
          <div className="text-dark-400 text-sm">
            <p>"If <Math>x = 2</Math> then <Math>x^2 = 4</Math>" is true</p>
          </div>
        </div>
      </div>

      {/* Quantifiers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Quantifiers</h2>

      <p className="text-dark-300 mb-6">
        To make statements about collections of objects, we use <strong>quantifiers</strong>.
      </p>

      <Definition title="Universal Quantifier">
        <p>
          "<strong>For all</strong> <Math>x</Math>, <Math>P(x)</Math>" means <Math>P(x)</Math> is true for every value of <Math>x</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          Written symbolically: <Math>\forall x, P(x)</Math>
        </p>
      </Definition>

      <Example title="Universal Statements" className="mt-6">
        <ul className="list-disc list-inside text-dark-300 space-y-2">
          <li>"For all real numbers <Math>x</Math>, <Math>x^2 \geq 0</Math>" — TRUE</li>
          <li>"For all integers <Math>n</Math>, <Math>n^2</Math> is even" — FALSE (e.g., <Math>3^2 = 9</Math>)</li>
          <li>"For all <Math>x {'>'} 0</Math>, <Math>\sqrt{'{x}'}</Math> exists" — TRUE</li>
        </ul>
      </Example>

      <Definition title="Existential Quantifier" className="mt-6">
        <p>
          "<strong>There exists</strong> an <Math>x</Math> such that <Math>P(x)</Math>" means <Math>P(x)</Math> is true for at least one value of <Math>x</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          Written symbolically: <Math>\exists x, P(x)</Math>
        </p>
      </Definition>

      <Example title="Existential Statements" className="mt-6">
        <ul className="list-disc list-inside text-dark-300 space-y-2">
          <li>"There exists an integer <Math>n</Math> such that <Math>n^2 = 4</Math>" — TRUE (<Math>n = 2</Math>)</li>
          <li>"There exists a real number <Math>x</Math> such that <Math>x^2 = -1</Math>" — FALSE</li>
          <li>"There exists a prime <Math>p {'>'} 100</Math>" — TRUE (infinitely many, in fact)</li>
        </ul>
      </Example>

      {/* Negating Quantified Statements */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Negating Quantified Statements</h2>

      <Callout type="info" title="Key Principle">
        <p>To negate a quantified statement, switch the quantifier and negate the predicate:</p>
        <ul className="list-disc list-inside mt-2">
          <li>NOT (for all <Math>x</Math>, <Math>P(x)</Math>) = there exists <Math>x</Math> such that NOT <Math>P(x)</Math></li>
          <li>NOT (there exists <Math>x</Math>, <Math>P(x)</Math>) = for all <Math>x</Math>, NOT <Math>P(x)</Math></li>
        </ul>
      </Callout>

      <Example title="Negation Examples" className="mt-6">
        <div className="space-y-4 mt-2">
          <div>
            <p className="text-dark-200">Original: "All cats are black"</p>
            <p className="text-dark-400">Negation: "There exists a cat that is not black"</p>
          </div>
          <div>
            <p className="text-dark-200">Original: "There exists a solution to <Math>x^2 + 1 = 0</Math> in the reals"</p>
            <p className="text-dark-400">Negation: "For all real <Math>x</Math>, <Math>x^2 + 1 \neq 0</Math>"</p>
          </div>
        </div>
      </Example>

      {/* Implications and Converses */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Implications, Converses, and Contrapositives</h2>

      <Definition title="Implication">
        <p>
          An <strong>implication</strong> is a statement of the form "If <Math>P</Math>, then <Math>Q</Math>",
          written <Math>P \Rightarrow Q</Math>.
        </p>
        <ul className="list-disc list-inside mt-2 text-dark-400">
          <li><Math>P</Math> is called the <strong>hypothesis</strong> (or antecedent)</li>
          <li><Math>Q</Math> is called the <strong>conclusion</strong> (or consequent)</li>
        </ul>
      </Definition>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h4 className="font-semibold text-primary-400 mb-2">Converse</h4>
          <p className="text-dark-300 text-sm">If <Math>Q</Math>, then <Math>P</Math></p>
          <p className="text-dark-500 text-xs mt-1">(<Math>Q \Rightarrow P</Math>)</p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h4 className="font-semibold text-cyan-400 mb-2">Inverse</h4>
          <p className="text-dark-300 text-sm">If not <Math>P</Math>, then not <Math>Q</Math></p>
          <p className="text-dark-500 text-xs mt-1">(<Math>\neg P \Rightarrow \neg Q</Math>)</p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Contrapositive</h4>
          <p className="text-dark-300 text-sm">If not <Math>Q</Math>, then not <Math>P</Math></p>
          <p className="text-dark-500 text-xs mt-1">(<Math>\neg Q \Rightarrow \neg P</Math>)</p>
        </div>
      </div>

      <Callout type="warning" title="Important" className="mt-6">
        <p>
          An implication and its <strong>contrapositive</strong> are logically equivalent (both true or both false).
        </p>
        <p className="mt-2">
          An implication and its <strong>converse</strong> are NOT necessarily equivalent!
        </p>
      </Callout>

      <Example title="Implication Analysis" className="mt-6">
        <p className="mb-3">Consider: "If a number is divisible by 6, then it is divisible by 2."</p>
        <ul className="space-y-2 text-dark-300">
          <li><strong>Original:</strong> TRUE (6 = 2 × 3, so divisibility by 6 implies divisibility by 2)</li>
          <li><strong>Converse:</strong> "If divisible by 2, then divisible by 6" — FALSE (4 is divisible by 2 but not 6)</li>
          <li><strong>Contrapositive:</strong> "If not divisible by 2, then not divisible by 6" — TRUE</li>
        </ul>
      </Example>

      {/* If and Only If */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">If and Only If (Biconditional)</h2>

      <Definition title="Biconditional">
        <p>
          "<Math>P</Math> if and only if <Math>Q</Math>" (written <Math>P \Leftrightarrow Q</Math>) means:
        </p>
        <ul className="list-disc list-inside mt-2 text-dark-400">
          <li>If <Math>P</Math> then <Math>Q</Math>, AND</li>
          <li>If <Math>Q</Math> then <Math>P</Math></li>
        </ul>
        <p className="mt-2 text-dark-400">
          Both the statement and its converse must be true.
        </p>
      </Definition>

      <Example title="Biconditional Examples" className="mt-6">
        <ul className="space-y-3 mt-2">
          <li>
            "<Math>x^2 = 9</Math> if and only if <Math>x = 3</Math> or <Math>x = -3</Math>" — TRUE
          </li>
          <li>
            "A triangle is equilateral if and only if all its angles are 60°" — TRUE
          </li>
          <li>
            "<Math>n</Math> is even if and only if <Math>n^2</Math> is even" — TRUE
          </li>
        </ul>
      </Example>

      {/* Proof Techniques Preview */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Proof Techniques</h2>

      <p className="text-dark-300 mb-6">
        Understanding logic helps us construct and understand mathematical proofs. Here are common techniques:
      </p>

      <div className="space-y-4">
        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Direct Proof</h3>
          <p className="text-dark-400">
            To prove <Math>P \Rightarrow Q</Math>: Assume <Math>P</Math> is true, then show <Math>Q</Math> must follow.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Proof by Contrapositive</h3>
          <p className="text-dark-400">
            To prove <Math>P \Rightarrow Q</Math>: Prove <Math>\neg Q \Rightarrow \neg P</Math> instead (they're equivalent).
          </p>
        </div>

        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Proof by Contradiction</h3>
          <p className="text-dark-400">
            To prove <Math>P</Math>: Assume <Math>\neg P</Math>, then derive a contradiction. This forces <Math>P</Math> to be true.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Proof by Cases</h3>
          <p className="text-dark-400">
            Divide into exhaustive cases, prove the result in each case.
          </p>
        </div>
      </div>

      <Example title="Proof by Contrapositive" className="mt-6">
        <p className="mb-2"><strong>Claim:</strong> If <Math>n^2</Math> is even, then <Math>n</Math> is even.</p>
        <p className="mb-2 text-dark-400"><strong>Contrapositive:</strong> If <Math>n</Math> is odd, then <Math>n^2</Math> is odd.</p>
        <p className="text-dark-300">
          <strong>Proof:</strong> Let <Math>n = 2k + 1</Math> be odd. Then <Math>n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1</Math>,
          which is odd. ∎
        </p>
      </Example>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>A <strong>statement</strong> is either true or false; an <strong>open sentence</strong> contains variables.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Logical connectives (AND, OR, NOT, IF-THEN) combine statements into new statements.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Quantifiers</strong> ("for all" and "there exists") make statements about collections.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>An implication <Math>P \Rightarrow Q</Math> is equivalent to its <strong>contrapositive</strong>, not its converse.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={13} sectionTitle="Logic and Mathematical Expressions" questions={section13Questions} />
    </LessonLayout>
  );
}
