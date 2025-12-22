import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Axiom, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section02Questions } from '../../data/quizzes';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Just as we established rules for addition, we now need rules for <strong>multiplication</strong>.
        These rules, combined with the addition rules, form the complete foundation of arithmetic.
      </p>

      {/* Basic Properties */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Basic Properties</h2>

      <Axiom title="Commutativity of Multiplication">
        <p>For any integers <Math>a</Math> and <Math>b</Math>:</p>
        <MathBlock>ab = ba</MathBlock>
      </Axiom>

      <Axiom title="Associativity of Multiplication" className="mt-6">
        <p>For any integers <Math>a</Math>, <Math>b</Math>, and <Math>c</Math>:</p>
        <MathBlock>(ab)c = a(bc)</MathBlock>
      </Axiom>

      <Axiom title="N6: Multiplicative Identity and Zero" className="mt-6">
        <p>For any integer <Math>a</Math>:</p>
        <MathBlock>{"1 \\cdot a = a \\quad \\text{and} \\quad 0 \\cdot a = 0"}</MathBlock>
        <p className="mt-2 text-dark-400">
          Multiplying by 1 leaves a number unchanged; multiplying by 0 gives 0.
        </p>
      </Axiom>

      {/* Distributivity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Distributive Law</h2>

      <Axiom title="Distributivity">
        <p>For any integers <Math>a</Math>, <Math>b</Math>, and <Math>c</Math>:</p>
        <MathBlock>a(b + c) = ab + ac</MathBlock>
        <MathBlock>(b + c)a = ba + ca</MathBlock>
        <p className="mt-2 text-dark-400">
          Multiplication "distributes" over addition.
        </p>
      </Axiom>

      <Example title="Distributivity in Action">
        <ul className="space-y-2 mt-2">
          <li><Math>3(4 + 5) = 3 \cdot 4 + 3 \cdot 5 = 12 + 15 = 27</Math></li>
          <li><Math>2(x + 3) = 2x + 6</Math></li>
          <li><Math>(a + b)(c + d) = ac + ad + bc + bd</Math></li>
        </ul>
      </Example>

      {/* Sign Rules */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Sign Rules for Multiplication</h2>

      <Theorem title="N7: Multiplication by -1">
        <p>For any integer <Math>a</Math>:</p>
        <MathBlock>(-1) \cdot a = -a</MathBlock>
        <details className="mt-3">
          <summary className="cursor-pointer text-primary-400 hover:text-primary-300">Show proof</summary>
          <div className="mt-2 p-4 bg-dark-800/50 rounded-lg text-dark-300">
            <p>Using distributivity:</p>
            <MathBlock>(-1) \cdot a + a = (-1) \cdot a + 1 \cdot a = (-1 + 1) \cdot a = 0 \cdot a = 0</MathBlock>
            <p className="mt-2">Since <Math>(-1) \cdot a + a = 0</Math>, we have <Math>(-1) \cdot a = -a</Math> by N3.</p>
          </div>
        </details>
      </Theorem>

      <Theorem title="N8 & N9: Moving Negatives" className="mt-6">
        <p>For any integers <Math>a</Math> and <Math>b</Math>:</p>
        <MathBlock>-(ab) = (-a)b = a(-b)</MathBlock>
        <p className="mt-2 text-dark-400">
          The negative can be "moved" to either factor.
        </p>
      </Theorem>

      <Theorem title="N10: Negative Times Negative" className="mt-6">
        <p>For any integers <Math>a</Math> and <Math>b</Math>:</p>
        <MathBlock>(-a)(-b) = ab</MathBlock>
        <p className="mt-2 text-dark-400">
          The product of two negative numbers is positive.
        </p>
      </Theorem>

      <Callout type="warning" title="Sign Rules Summary">
        <ul className="space-y-1 mt-2">
          <li><strong>Positive × Positive = Positive:</strong> <Math>(+)(+) = +</Math></li>
          <li><strong>Positive × Negative = Negative:</strong> <Math>(+)(-) = -</Math></li>
          <li><strong>Negative × Positive = Negative:</strong> <Math>(-)(+) = -</Math></li>
          <li><strong>Negative × Negative = Positive:</strong> <Math>(-)(-) = +</Math></li>
        </ul>
      </Callout>

      <Example title="Sign Rule Examples">
        <ul className="space-y-2 mt-2">
          <li><Math>3 \cdot 4 = 12</Math></li>
          <li><Math>3 \cdot (-4) = -12</Math></li>
          <li><Math>(-3) \cdot 4 = -12</Math></li>
          <li><Math>(-3) \cdot (-4) = 12</Math></li>
        </ul>
      </Example>

      {/* Powers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Powers (Exponents)</h2>

      <Definition title="Power Notation">
        <p>For a positive integer <Math>n</Math>:</p>
        <MathBlock>{"a^n = \\underbrace{a \\cdot a \\cdot \\cdots \\cdot a}_{n \\text{ times}}"}</MathBlock>
        <p className="mt-2 text-dark-400">
          We call <Math>a</Math> the <strong>base</strong> and <Math>n</Math> the <strong>exponent</strong>.
        </p>
      </Definition>

      <Example title="Powers">
        <ul className="space-y-2 mt-2">
          <li><Math>2^3 = 2 \cdot 2 \cdot 2 = 8</Math></li>
          <li><Math>5^2 = 5 \cdot 5 = 25</Math></li>
          <li><Math>(-3)^2 = (-3)(-3) = 9</Math></li>
          <li><Math>(-2)^3 = (-2)(-2)(-2) = -8</Math></li>
        </ul>
      </Example>

      <Theorem title="N11: Product of Powers" className="mt-6">
        <p>For any integer <Math>a</Math> and positive integers <Math>m</Math> and <Math>n</Math>:</p>
        <MathBlock>a^m \cdot a^n = a^{'{m+n}'}</MathBlock>
      </Theorem>

      <Theorem title="N12: Power of a Power" className="mt-6">
        <p>For any integer <Math>a</Math> and positive integers <Math>m</Math> and <Math>n</Math>:</p>
        <MathBlock>(a^m)^n = a^{'{mn}'}</MathBlock>
      </Theorem>

      <Theorem title="Power of a Product" className="mt-6">
        <p>For any integers <Math>a</Math> and <Math>b</Math> and positive integer <Math>n</Math>:</p>
        <MathBlock>(ab)^n = a^n b^n</MathBlock>
      </Theorem>

      <Example title="Power Rule Examples">
        <ul className="space-y-2 mt-2">
          <li><Math>a^2 \cdot a^3 = a^{'{2+3}'} = a^5</Math></li>
          <li><Math>(a^3)^4 = a^{'{3 \\cdot 4}'} = a^{'{12}'}</Math></li>
          <li><Math>(4x)^2 = 4^2 \cdot x^2 = 16x^2</Math></li>
          <li><Math>(2a^3)^5 = 2^5 \cdot (a^3)^5 = 32a^{'{15}'}</Math></li>
        </ul>
      </Example>

      {/* Important Formulas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Important Algebraic Formulas</h2>

      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-dark-100 mb-3">Square of a Sum</h4>
          <MathBlock>(a + b)^2 = a^2 + 2ab + b^2</MathBlock>
          <p className="text-dark-400 mt-3">
            Example: <Math>(x + 3)^2 = x^2 + 6x + 9</Math>
          </p>
        </div>

        <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-dark-100 mb-3">Square of a Difference</h4>
          <MathBlock>(a - b)^2 = a^2 - 2ab + b^2</MathBlock>
          <p className="text-dark-400 mt-3">
            Example: <Math>(x - 5)^2 = x^2 - 10x + 25</Math>
          </p>
        </div>

        <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-dark-100 mb-3">Difference of Squares</h4>
          <MathBlock>(a + b)(a - b) = a^2 - b^2</MathBlock>
          <p className="text-dark-400 mt-3">
            Example: <Math>(x + 4)(x - 4) = x^2 - 16</Math>
          </p>
        </div>
      </div>

      <Callout type="info" title="Memorize These!">
        <p>
          These three formulas appear constantly in algebra. Memorizing them will save you
          time and prevent errors when expanding or factoring expressions.
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
            <span>Multiplication is <strong>commutative</strong> and <strong>associative</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Multiplication <strong>distributes</strong> over addition: <Math>a(b+c) = ab + ac</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Negative × Negative = Positive:</strong> <Math>(-a)(-b) = ab</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Power rules: <Math>a^m \cdot a^n = a^{'{m+n}'}</Math> and <Math>(a^m)^n = a^{'{mn}'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionTitle="Rules for Multiplication" questions={section02Questions} />
    </LessonLayout>
  );
}
