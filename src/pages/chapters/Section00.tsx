import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Axiom } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { NumberLine } from '../../components/visualizations/NumberLine';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section00Questions } from '../../data/quizzes';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        We begin our study of algebra with the most fundamental objects: the <strong>integers</strong>.
        These are the numbers we use for counting, measuring, and keeping track of quantities —
        both positive and negative.
      </p>

      {/* Positive Integers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Positive Integers</h2>

      <Definition title="Positive Integers">
        <p>
          The numbers <Math>1, 2, 3, 4, 5, \ldots</Math> are called the <strong>positive integers</strong>.
          These are the numbers we use for counting.
        </p>
      </Definition>

      <p className="text-dark-300 mt-6">
        We can represent the positive integers on a line, starting from a point we call the <strong>origin</strong>,
        represented by <Math>0</Math>:
      </p>

      <NumberLine min={0} max={10} highlightedPoints={[0, 1, 2, 3, 4, 5]} interactive={false} />

      {/* Zero and Natural Numbers */}
      <Definition title="Zero and Natural Numbers" className="mt-8">
        <p>
          <strong>Zero</strong>, written <Math>0</Math>, represents no quantity.
          The positive integers together with zero are called the <strong>natural numbers</strong>:
        </p>
        <MathBlock>0, 1, 2, 3, 4, 5, \ldots</MathBlock>
      </Definition>

      {/* Negative Integers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Negative Integers</h2>

      <p className="text-dark-300">
        What about quantities less than zero? A thermometer shows temperatures below freezing.
        A bank account can be overdrawn. To represent these, we need <strong>negative integers</strong>.
      </p>

      <Definition title="Negative Integers" className="mt-6">
        <p>
          The <strong>negative integers</strong> are the numbers <Math>-1, -2, -3, -4, \ldots</Math>,
          written with a minus sign. They represent quantities below zero.
        </p>
      </Definition>

      <p className="text-dark-300 mt-6">
        On the number line, negative integers are placed to the <em>left</em> of zero:
      </p>

      <NumberLine min={-10} max={10} highlightedPoints={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]} />

      {/* The Integers */}
      <Definition title="The Integers" className="mt-8">
        <p>
          The <strong>integers</strong> consist of all positive integers, all negative integers,
          and zero, taken together. We denote the set of integers by <Math>{"\\mathbb{Z}"}</Math>.
        </p>
        <MathBlock>{`\\mathbb{Z} = \\{\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots\\}`}</MathBlock>
      </Definition>

      <Example title="Real-World Applications">
        <p>Integers appear naturally in many contexts:</p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-dark-300">
          <li><strong>Temperature:</strong> <Math>-10°</Math>C is 10 degrees below freezing</li>
          <li><strong>Elevation:</strong> <Math>-50</Math> meters means 50 meters below sea level</li>
          <li><strong>Finance:</strong> <Math>-100</Math> dollars represents a debt of 100 dollars</li>
          <li><strong>Time:</strong> The year <Math>-500</Math> (or 500 BC) is 500 years before year 0</li>
        </ul>
      </Example>

      {/* The Additive Inverse */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Additive Inverse</h2>

      <p className="text-dark-300">
        Every integer <Math>a</Math> has a corresponding integer on the opposite side of zero,
        which we write as <Math>-a</Math>. This is called the <strong>additive inverse</strong> of <Math>a</Math>.
      </p>

      <Definition title="Additive Inverse" className="mt-6">
        <p>
          For any integer <Math>a</Math>, its <strong>additive inverse</strong> is the integer <Math>-a</Math>
          such that:
        </p>
        <MathBlock>a + (-a) = 0</MathBlock>
      </Definition>

      <Callout type="warning" title="Important Terminology">
        <p>
          We say "minus <Math>a</Math>" rather than "negative <Math>a</Math>" because <Math>-a</Math> is not
          always negative! For example, if <Math>a = -3</Math>, then <Math>-a = -(-3) = 3</Math>,
          which is positive.
        </p>
      </Callout>

      <Example title="Finding Additive Inverses">
        <ul className="space-y-2 mt-2">
          <li>The additive inverse of <Math>5</Math> is <Math>-5</Math>, since <Math>5 + (-5) = 0</Math></li>
          <li>The additive inverse of <Math>-7</Math> is <Math>7</Math>, since <Math>-7 + 7 = 0</Math></li>
          <li>The additive inverse of <Math>0</Math> is <Math>0</Math>, since <Math>0 + 0 = 0</Math></li>
        </ul>
      </Example>

      {/* Fundamental Rules */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Fundamental Rules for Zero</h2>

      <p className="text-dark-300 mb-6">
        We state two fundamental properties of the integers that involve zero and the additive inverse:
      </p>

      <Axiom title="N1: Additive Identity">
        <p>For any integer <Math>a</Math>:</p>
        <MathBlock>0 + a = a + 0 = a</MathBlock>
        <p className="mt-2 text-dark-400">
          Adding zero to any integer leaves it unchanged. Zero is called the <strong>additive identity</strong>.
        </p>
      </Axiom>

      <Axiom title="N2: Additive Inverse" className="mt-6">
        <p>For any integer <Math>a</Math>:</p>
        <MathBlock>a + (-a) = (-a) + a = 0</MathBlock>
        <p className="mt-2 text-dark-400">
          Any integer plus its additive inverse equals zero.
        </p>
      </Axiom>

      {/* Visual understanding */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Visualizing Addition</h2>

      <p className="text-dark-300 mb-6">
        On the number line, adding a positive number means moving to the <strong>right</strong>,
        while adding a negative number means moving to the <strong>left</strong>.
      </p>

      <Example title="Addition on the Number Line">
        <p>To compute <Math>3 + 4</Math>:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-dark-300">
          <li>Start at <Math>3</Math></li>
          <li>Move <Math>4</Math> units to the right</li>
          <li>Arrive at <Math>7</Math></li>
        </ol>
        <p className="mt-4">To compute <Math>5 + (-3)</Math>:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1 text-dark-300">
          <li>Start at <Math>5</Math></li>
          <li>Move <Math>3</Math> units to the left (since we're adding <Math>-3</Math>)</li>
          <li>Arrive at <Math>2</Math></li>
        </ol>
      </Example>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>The <strong>integers</strong> include positive integers, negative integers, and zero.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Every integer <Math>a</Math> has an <strong>additive inverse</strong> <Math>-a</Math> such that <Math>a + (-a) = 0</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Zero is the <strong>additive identity</strong>: adding zero to any number leaves it unchanged.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>On the number line, positive integers are to the right of zero, negative integers to the left.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionTitle="The Integers" questions={section00Questions} />
    </LessonLayout>
  );
}
