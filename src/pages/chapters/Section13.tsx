import { Link } from 'react-router-dom';
import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example } from '../../components/common/ContentBlocks';
import { Math as MathComponent } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section13Questions } from '../../data/quizzes';
import { useGamification } from '../../contexts/GamificationContext';

const REQUIRED_XP = 2000;

function LockedContent({ currentXP }: { currentXP: number }) {
  const progress = Math.min(100, Math.round((currentXP / REQUIRED_XP) * 100));
  const xpNeeded = REQUIRED_XP - currentXP;

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* Lock Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-dark-800/60 border border-dark-700/50 flex items-center justify-center">
          <svg className="w-12 h-12 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-dark-100 mb-3">Interlude: Logic</h1>
        <p className="text-dark-400 mb-6">
          This special section is locked until you earn <span className="text-primary-400 font-semibold">{REQUIRED_XP.toLocaleString()} XP</span>.
          Keep learning and practicing to unlock it!
        </p>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-dark-400">Progress</span>
            <span className="text-dark-300 font-medium">{currentXP.toLocaleString()} / {REQUIRED_XP.toLocaleString()} XP</span>
          </div>
          <div className="h-3 bg-dark-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-cyan-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-dark-500 mt-2">
            {xpNeeded > 0 ? `${xpNeeded.toLocaleString()} XP needed to unlock` : 'Almost there!'}
          </p>
        </div>

        {/* Tips */}
        <div className="p-4 rounded-xl bg-dark-800/40 border border-dark-700/50 text-left mb-6">
          <p className="text-sm font-semibold text-dark-300 mb-2">Ways to earn XP:</p>
          <ul className="text-sm text-dark-400 space-y-1">
            <li>• Visit new sections (+10 XP)</li>
            <li>• Complete sections (+25 XP)</li>
            <li>• Take quizzes (+15-40 XP)</li>
            <li>• Get perfect scores (+50% bonus)</li>
          </ul>
        </div>

        <Link
          to="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function Section13() {
  const { state } = useGamification();
  const currentXP = state.user.totalXP;
  const isUnlocked = currentXP >= REQUIRED_XP;

  if (!isUnlocked) {
    return <LockedContent currentXP={currentXP} />;
  }

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
              <li><MathComponent>2 + 3 = 5</MathComponent> (true)</li>
              <li><MathComponent>7 {'<'} 4</MathComponent> (false)</li>
              <li>"Every even number greater than 2 is the sum of two primes" (unknown, but still a statement)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-red-400 mb-2">Not Statements:</p>
            <ul className="list-disc list-inside text-dark-300 space-y-1">
              <li>"Is <MathComponent>x</MathComponent> positive?" (a question)</li>
              <li>"Let <MathComponent>n = 5</MathComponent>" (a command)</li>
              <li><MathComponent>x + 3 = 7</MathComponent> (depends on <MathComponent>x</MathComponent>)</li>
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
            <MathComponent>x + 2 = 5</MathComponent>
            <div className="text-dark-400 ml-4">
              True when <MathComponent>x = 3</MathComponent>, false when <MathComponent>x = 7</MathComponent>
            </div>
          </li>
          <li>
            <MathComponent>x^2 = 4</MathComponent>
            <div className="text-dark-400 ml-4">
              True when <MathComponent>x = 2</MathComponent> or <MathComponent>x = -2</MathComponent>, false otherwise
            </div>
          </li>
          <li>
            <MathComponent>x {'>'} 0</MathComponent>
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
            "<MathComponent>P</MathComponent> and <MathComponent>Q</MathComponent>" is true only when <em>both</em> <MathComponent>P</MathComponent> and <MathComponent>Q</MathComponent> are true.
          </p>
          <div className="text-dark-400 text-sm">
            <p>"<MathComponent>2 {'<'} 5</MathComponent> and <MathComponent>3 {'<'} 4</MathComponent>" is true</p>
            <p>"<MathComponent>2 {'<'} 5</MathComponent> and <MathComponent>3 {'>'} 4</MathComponent>" is false</p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-3">OR (Disjunction)</h3>
          <p className="text-dark-300 mb-2">
            "<MathComponent>P</MathComponent> or <MathComponent>Q</MathComponent>" is true when <em>at least one</em> of <MathComponent>P</MathComponent> or <MathComponent>Q</MathComponent> is true.
          </p>
          <div className="text-dark-400 text-sm">
            <p>"<MathComponent>2 {'<'} 5</MathComponent> or <MathComponent>3 {'>'} 4</MathComponent>" is true</p>
            <p>"<MathComponent>2 {'>'} 5</MathComponent> or <MathComponent>3 {'>'} 4</MathComponent>" is false</p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-3">NOT (Negation)</h3>
          <p className="text-dark-300 mb-2">
            "not <MathComponent>P</MathComponent>" is true when <MathComponent>P</MathComponent> is false, and false when <MathComponent>P</MathComponent> is true.
          </p>
          <div className="text-dark-400 text-sm">
            <p>"not (<MathComponent>2 {'>'} 5</MathComponent>)" is true</p>
            <p>"not (<MathComponent>2 {'<'} 5</MathComponent>)" is false</p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-3">IF-THEN (Implication)</h3>
          <p className="text-dark-300 mb-2">
            "If <MathComponent>P</MathComponent> then <MathComponent>Q</MathComponent>" is false only when <MathComponent>P</MathComponent> is true and <MathComponent>Q</MathComponent> is false.
          </p>
          <div className="text-dark-400 text-sm">
            <p>"If <MathComponent>x = 2</MathComponent> then <MathComponent>x^2 = 4</MathComponent>" is true</p>
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
          "<strong>For all</strong> <MathComponent>x</MathComponent>, <MathComponent>P(x)</MathComponent>" means <MathComponent>P(x)</MathComponent> is true for every value of <MathComponent>x</MathComponent>.
        </p>
        <p className="mt-2 text-dark-400">
          Written symbolically: <MathComponent>\forall x, P(x)</MathComponent>
        </p>
      </Definition>

      <Example title="Universal Statements" className="mt-6">
        <ul className="list-disc list-inside text-dark-300 space-y-2">
          <li>"For all real numbers <MathComponent>x</MathComponent>, <MathComponent>x^2 \geq 0</MathComponent>" — TRUE</li>
          <li>"For all integers <MathComponent>n</MathComponent>, <MathComponent>n^2</MathComponent> is even" — FALSE (e.g., <MathComponent>3^2 = 9</MathComponent>)</li>
          <li>"For all <MathComponent>x {'>'} 0</MathComponent>, <MathComponent>\sqrt{'{x}'}</MathComponent> exists" — TRUE</li>
        </ul>
      </Example>

      <Definition title="Existential Quantifier" className="mt-6">
        <p>
          "<strong>There exists</strong> an <MathComponent>x</MathComponent> such that <MathComponent>P(x)</MathComponent>" means <MathComponent>P(x)</MathComponent> is true for at least one value of <MathComponent>x</MathComponent>.
        </p>
        <p className="mt-2 text-dark-400">
          Written symbolically: <MathComponent>\exists x, P(x)</MathComponent>
        </p>
      </Definition>

      <Example title="Existential Statements" className="mt-6">
        <ul className="list-disc list-inside text-dark-300 space-y-2">
          <li>"There exists an integer <MathComponent>n</MathComponent> such that <MathComponent>n^2 = 4</MathComponent>" — TRUE (<MathComponent>n = 2</MathComponent>)</li>
          <li>"There exists a real number <MathComponent>x</MathComponent> such that <MathComponent>x^2 = -1</MathComponent>" — FALSE</li>
          <li>"There exists a prime <MathComponent>p {'>'} 100</MathComponent>" — TRUE (infinitely many, in fact)</li>
        </ul>
      </Example>

      {/* Negating Quantified Statements */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Negating Quantified Statements</h2>

      <Callout type="info" title="Key Principle">
        <p>To negate a quantified statement, switch the quantifier and negate the predicate:</p>
        <ul className="list-disc list-inside mt-2">
          <li>NOT (for all <MathComponent>x</MathComponent>, <MathComponent>P(x)</MathComponent>) = there exists <MathComponent>x</MathComponent> such that NOT <MathComponent>P(x)</MathComponent></li>
          <li>NOT (there exists <MathComponent>x</MathComponent>, <MathComponent>P(x)</MathComponent>) = for all <MathComponent>x</MathComponent>, NOT <MathComponent>P(x)</MathComponent></li>
        </ul>
      </Callout>

      <Example title="Negation Examples" className="mt-6">
        <div className="space-y-4 mt-2">
          <div>
            <p className="text-dark-200">Original: "All cats are black"</p>
            <p className="text-dark-400">Negation: "There exists a cat that is not black"</p>
          </div>
          <div>
            <p className="text-dark-200">Original: "There exists a solution to <MathComponent>x^2 + 1 = 0</MathComponent> in the reals"</p>
            <p className="text-dark-400">Negation: "For all real <MathComponent>x</MathComponent>, <MathComponent>x^2 + 1 \neq 0</MathComponent>"</p>
          </div>
        </div>
      </Example>

      {/* Implications and Converses */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Implications, Converses, and Contrapositives</h2>

      <Definition title="Implication">
        <p>
          An <strong>implication</strong> is a statement of the form "If <MathComponent>P</MathComponent>, then <MathComponent>Q</MathComponent>",
          written <MathComponent>P \Rightarrow Q</MathComponent>.
        </p>
        <ul className="list-disc list-inside mt-2 text-dark-400">
          <li><MathComponent>P</MathComponent> is called the <strong>hypothesis</strong> (or antecedent)</li>
          <li><MathComponent>Q</MathComponent> is called the <strong>conclusion</strong> (or consequent)</li>
        </ul>
      </Definition>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h4 className="font-semibold text-primary-400 mb-2">Converse</h4>
          <p className="text-dark-300 text-sm">If <MathComponent>Q</MathComponent>, then <MathComponent>P</MathComponent></p>
          <p className="text-dark-500 text-xs mt-1">(<MathComponent>Q \Rightarrow P</MathComponent>)</p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h4 className="font-semibold text-cyan-400 mb-2">Inverse</h4>
          <p className="text-dark-300 text-sm">If not <MathComponent>P</MathComponent>, then not <MathComponent>Q</MathComponent></p>
          <p className="text-dark-500 text-xs mt-1">(<MathComponent>\neg P \Rightarrow \neg Q</MathComponent>)</p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Contrapositive</h4>
          <p className="text-dark-300 text-sm">If not <MathComponent>Q</MathComponent>, then not <MathComponent>P</MathComponent></p>
          <p className="text-dark-500 text-xs mt-1">(<MathComponent>\neg Q \Rightarrow \neg P</MathComponent>)</p>
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
          "<MathComponent>P</MathComponent> if and only if <MathComponent>Q</MathComponent>" (written <MathComponent>P \Leftrightarrow Q</MathComponent>) means:
        </p>
        <ul className="list-disc list-inside mt-2 text-dark-400">
          <li>If <MathComponent>P</MathComponent> then <MathComponent>Q</MathComponent>, AND</li>
          <li>If <MathComponent>Q</MathComponent> then <MathComponent>P</MathComponent></li>
        </ul>
        <p className="mt-2 text-dark-400">
          Both the statement and its converse must be true.
        </p>
      </Definition>

      <Example title="Biconditional Examples" className="mt-6">
        <ul className="space-y-3 mt-2">
          <li>
            "<MathComponent>x^2 = 9</MathComponent> if and only if <MathComponent>x = 3</MathComponent> or <MathComponent>x = -3</MathComponent>" — TRUE
          </li>
          <li>
            "A triangle is equilateral if and only if all its angles are 60°" — TRUE
          </li>
          <li>
            "<MathComponent>n</MathComponent> is even if and only if <MathComponent>n^2</MathComponent> is even" — TRUE
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
            To prove <MathComponent>P \Rightarrow Q</MathComponent>: Assume <MathComponent>P</MathComponent> is true, then show <MathComponent>Q</MathComponent> must follow.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Proof by Contrapositive</h3>
          <p className="text-dark-400">
            To prove <MathComponent>P \Rightarrow Q</MathComponent>: Prove <MathComponent>\neg Q \Rightarrow \neg P</MathComponent> instead (they're equivalent).
          </p>
        </div>

        <div className="p-5 rounded-xl bg-dark-800/40 border border-dark-700/50">
          <h3 className="font-semibold text-dark-100 mb-2">Proof by Contradiction</h3>
          <p className="text-dark-400">
            To prove <MathComponent>P</MathComponent>: Assume <MathComponent>\neg P</MathComponent>, then derive a contradiction. This forces <MathComponent>P</MathComponent> to be true.
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
        <p className="mb-2"><strong>Claim:</strong> If <MathComponent>n^2</MathComponent> is even, then <MathComponent>n</MathComponent> is even.</p>
        <p className="mb-2 text-dark-400"><strong>Contrapositive:</strong> If <MathComponent>n</MathComponent> is odd, then <MathComponent>n^2</MathComponent> is odd.</p>
        <p className="text-dark-300">
          <strong>Proof:</strong> Let <MathComponent>n = 2k + 1</MathComponent> be odd. Then <MathComponent>n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1</MathComponent>,
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
            <span>An implication <MathComponent>P \Rightarrow Q</MathComponent> is equivalent to its <strong>contrapositive</strong>, not its converse.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={13} sectionTitle="Logic and Mathematical Expressions" questions={section13Questions} />
    </LessonLayout>
  );
}
