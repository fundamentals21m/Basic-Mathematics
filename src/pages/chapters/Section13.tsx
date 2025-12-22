import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section13Questions } from '../../data/quizzes';
import { FunctionEvaluator, PolynomialExplorer, ExponentialGrapher, LogarithmCalculator } from '../../components/visualizations';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        A <strong>function</strong> is one of the most fundamental concepts in mathematics.
        It provides a way to describe relationships between quantities—how one value depends on another.
      </p>

      {/* Definition of a Function */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Definition of a Function</h2>

      <Definition title="Function">
        <p>
          A <strong>function</strong> is an association which to each number assigns another number.
          If we denote a function by <Math>f</Math>, this association is written:
        </p>
        <MathBlock>x \mapsto f(x)</MathBlock>
        <p className="mt-2 text-dark-400">
          We call <Math>f(x)</Math> the <strong>value</strong> of the function at <Math>x</Math>,
          or the <strong>image</strong> of <Math>x</Math> under <Math>f</Math>.
        </p>
      </Definition>

      <Example title="Common Functions" className="mt-6">
        <ul className="space-y-3 mt-2">
          <li>
            <strong>Square function:</strong> <Math>f(x) = x^2</Math>
            <div className="text-dark-400 ml-4">
              <Math>f(2) = 4</Math>, <Math>f(-3) = 9</Math>, <Math>f(0) = 0</Math>
            </div>
          </li>
          <li>
            <strong>Adding 1:</strong> <Math>g(x) = x + 1</Math>
            <div className="text-dark-400 ml-4">
              <Math>g(5) = 6</Math>, <Math>g(-2) = -1</Math>
            </div>
          </li>
          <li>
            <strong>Reciprocal:</strong> <Math>h(x) = \frac{'{1}'}{'{x}'}</Math> (defined for <Math>x \neq 0</Math>)
            <div className="text-dark-400 ml-4">
              <Math>h(2) = \frac{'{1}'}{'{2}'}</Math>, <Math>h(4) = \frac{'{1}'}{'{4}'}</Math>
            </div>
          </li>
          <li>
            <strong>Constant function:</strong> <Math>f(x) = c</Math> for all <Math>x</Math>
          </li>
        </ul>
      </Example>

      <Definition title="Domain" className="mt-6">
        <p>
          The <strong>domain</strong> of a function is the set of all inputs for which the function is defined.
        </p>
        <ul className="list-disc list-inside mt-2 text-dark-400">
          <li>Square root <Math>\sqrt{'{x}'}</Math> is defined only for <Math>x \geq 0</Math></li>
          <li>Reciprocal <Math>1/x</Math> is defined for <Math>x \neq 0</Math></li>
        </ul>
      </Definition>

      {/* Operations on Functions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Operations on Functions</h2>

      <Definition title="Sum of Functions">
        <p>If <Math>f</Math> and <Math>g</Math> are functions, their <strong>sum</strong> <Math>f + g</Math> is:</p>
        <MathBlock>(f + g)(x) = f(x) + g(x)</MathBlock>
      </Definition>

      <Definition title="Product of Functions" className="mt-6">
        <p>The <strong>product</strong> <Math>fg</Math> is:</p>
        <MathBlock>(fg)(x) = f(x) \cdot g(x)</MathBlock>
      </Definition>

      <Example title="Combining Functions" className="mt-6">
        <p>Let <Math>f(x) = x^2</Math> and <Math>g(x) = x + 1</Math>. Then:</p>
        <ul className="list-disc list-inside mt-2 text-dark-300">
          <li><Math>(f + g)(x) = x^2 + x + 1</Math></li>
          <li><Math>(fg)(x) = x^2(x + 1) = x^3 + x^2</Math></li>
          <li><Math>(f + g)(2) = 4 + 2 + 1 = 7</Math></li>
        </ul>
      </Example>

      <FunctionEvaluator />

      {/* Polynomial Functions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Polynomial Functions</h2>

      <Definition title="Polynomial">
        <p>A function <Math>f</Math> is a <strong>polynomial</strong> if it can be written as:</p>
        <MathBlock>f(x) = a_n x^n + a_{'{n-1}'} x^{'{n-1}'} + \cdots + a_1 x + a_0</MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>a_0, a_1, \ldots, a_n</Math> are numbers called <strong>coefficients</strong>.
        </p>
      </Definition>

      <Definition title="Degree" className="mt-6">
        <p>
          If <Math>a_n \neq 0</Math>, we say the polynomial has <strong>degree</strong> <Math>n</Math>.
        </p>
        <ul className="list-disc list-inside mt-2 text-dark-400">
          <li><Math>3x^2 - 5x + 1</Math> has degree 2</li>
          <li><Math>x^5 + 2x</Math> has degree 5</li>
          <li>The constant <Math>7</Math> has degree 0</li>
        </ul>
      </Definition>

      <Definition title="Root of a Polynomial" className="mt-6">
        <p>
          A number <Math>c</Math> is a <strong>root</strong> of polynomial <Math>f</Math> if <Math>f(c) = 0</Math>.
        </p>
      </Definition>

      <Example title="Finding Roots">
        <p>For <Math>f(x) = x^2 - 5x + 6</Math>:</p>
        <div className="mt-2 text-dark-300">
          <p><Math>f(2) = 4 - 10 + 6 = 0</Math> ✓</p>
          <p><Math>f(3) = 9 - 15 + 6 = 0</Math> ✓</p>
          <p>So 2 and 3 are roots. We can factor: <Math>f(x) = (x-2)(x-3)</Math></p>
        </div>
      </Example>

      <Theorem title="Maximum Number of Roots">
        <p>
          A polynomial of degree <Math>n</Math> has <strong>at most <Math>n</Math> roots</strong>.
        </p>
        <p className="mt-2 text-dark-400">
          A quadratic (degree 2) has at most 2 roots, a cubic (degree 3) has at most 3 roots, etc.
        </p>
      </Theorem>

      <Theorem title="Root Factorization" className="mt-6">
        <p>
          If <Math>c</Math> is a root of polynomial <Math>f</Math>, then <Math>(x - c)</Math> is a factor:
        </p>
        <MathBlock>f(x) = (x - c) \cdot g(x)</MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>g</Math> has degree one less than <Math>f</Math>.
        </p>
      </Theorem>

      <PolynomialExplorer />

      {/* Graphs of Functions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Graphs of Functions</h2>

      <Definition title="Graph">
        <p>
          The <strong>graph</strong> of a function <Math>f</Math> is the set of all points <Math>(x, f(x))</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          In the coordinate plane, plot <Math>x</Math> on the horizontal axis and <Math>f(x)</Math> on the vertical axis.
        </p>
      </Definition>

      <Example title="Graphing by Sign Analysis">
        <p>To sketch <Math>y = (x-1)(x-2)</Math>:</p>
        <ul className="list-disc list-inside mt-2 text-dark-300">
          <li><strong>Roots:</strong> <Math>x = 1</Math> and <Math>x = 2</Math></li>
          <li><strong>When <Math>x {'<'} 1</Math>:</strong> both factors negative, so <Math>y {'>'} 0</Math></li>
          <li><strong>When <Math>1 {'<'} x {'<'} 2</Math>:</strong> one positive, one negative, so <Math>y {'<'} 0</Math></li>
          <li><strong>When <Math>x {'>'} 2</Math>:</strong> both factors positive, so <Math>y {'>'} 0</Math></li>
        </ul>
      </Example>

      {/* Exponential Function */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Exponential Function</h2>

      <Definition title="Exponential Function">
        <p>
          For a base <Math>a {'>'} 0</Math>, the <strong>exponential function</strong> is:
        </p>
        <MathBlock>f(x) = a^x</MathBlock>
      </Definition>

      <div className="p-6 rounded-xl bg-primary-500/10 border border-primary-500/30 mt-6">
        <p className="text-dark-100 font-semibold mb-4">Properties of Exponential Functions</p>
        <div className="space-y-2 text-dark-300">
          <p><strong>EXP 1:</strong> <Math>a^{'{x+y}'} = a^x \cdot a^y</Math></p>
          <p><strong>EXP 2:</strong> <Math>(a^x)^y = a^{'{xy}'}</Math></p>
          <p><strong>EXP 3:</strong> <Math>(ab)^x = a^x \cdot b^x</Math></p>
          <p><strong>EXP 4:</strong> If <Math>a {'>'} 1</Math> and <Math>x {'<'} y</Math>, then <Math>a^x {'<'} a^y</Math> (increasing)</p>
        </div>
      </div>

      <Callout type="info" title="Key Facts">
        <ul className="list-disc list-inside space-y-1">
          <li><Math>a^0 = 1</Math> for any <Math>a {'>'} 0</Math></li>
          <li><Math>a^{'{-x}'} = \frac{'{1}'}{'{a^x}'}</Math></li>
          <li>The values of <Math>a^x</Math> are always <strong>positive</strong></li>
        </ul>
      </Callout>

      <Example title="Exponential Growth" className="mt-6">
        <p>A population doubles every year, starting at 100:</p>
        <MathBlock>P(t) = 100 \cdot 2^t</MathBlock>
        <div className="mt-2 text-dark-300">
          <p><Math>P(0) = 100</Math>, <Math>P(1) = 200</Math>, <Math>P(2) = 400</Math>, <Math>P(3) = 800</Math></p>
        </div>
      </Example>

      <Example title="Exponential Decay" className="mt-6">
        <p>Radioactive decay (substance decreases):</p>
        <MathBlock>f(t) = C \cdot a^{'{-kt}'}</MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>C</Math> is the initial amount and <Math>k {'>'} 0</Math>.
        </p>
      </Example>

      <ExponentialGrapher />

      {/* Logarithms */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Logarithms</h2>

      <Definition title="Logarithm">
        <p>
          If <Math>y = a^x</Math>, then <Math>x</Math> is the <strong>logarithm</strong> of <Math>y</Math> to base <Math>a</Math>:
        </p>
        <MathBlock>x = \log_a(y) \quad \Longleftrightarrow \quad a^x = y</MathBlock>
        <p className="mt-2 text-dark-400">
          The logarithm answers: "What power of <Math>a</Math> gives <Math>y</Math>?"
        </p>
      </Definition>

      <Example title="Evaluating Logarithms">
        <ul className="space-y-2 mt-2">
          <li><Math>\log_2(8) = 3</Math> because <Math>2^3 = 8</Math></li>
          <li><Math>\log_3(27) = 3</Math> because <Math>3^3 = 27</Math></li>
          <li><Math>\log_{'{10}'}(100) = 2</Math> because <Math>10^2 = 100</Math></li>
          <li><Math>\log_5(1) = 0</Math> because <Math>5^0 = 1</Math></li>
        </ul>
      </Example>

      <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mt-6">
        <p className="text-dark-100 font-semibold mb-4">Properties of Logarithms</p>
        <div className="space-y-2 text-dark-300">
          <p><strong>LOG 1:</strong> <Math>\log_a(xy) = \log_a(x) + \log_a(y)</Math></p>
          <p><strong>LOG 2:</strong> <Math>\log_a(1) = 0</Math></p>
          <p><strong>LOG 3:</strong> If <Math>x {'<'} y</Math>, then <Math>\log_a(x) {'<'} \log_a(y)</Math> (increasing)</p>
          <p><strong>LOG 4:</strong> <Math>\log_a(a^x) = x</Math></p>
          <p><strong>LOG 5:</strong> <Math>\log(a^x) = x \cdot \log(a)</Math></p>
        </div>
      </div>

      <Example title="Using Log Properties" className="mt-6">
        <p>Simplify <Math>\log_2(8 \cdot 4)</Math>:</p>
        <div className="mt-2 text-dark-300">
          <p><Math>\log_2(8 \cdot 4) = \log_2(8) + \log_2(4) = 3 + 2 = 5</Math></p>
          <p className="text-dark-400 mt-1">Check: <Math>2^5 = 32 = 8 \cdot 4</Math> ✓</p>
        </div>
      </Example>

      <Callout type="info" title="Inverse Relationship">
        <p>
          The exponential and logarithm are <strong>inverse functions</strong>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><Math>a^{'{{\\log_a(x)}}'} = x</Math></li>
          <li><Math>\log_a(a^x) = x</Math></li>
        </ul>
      </Callout>

      <LogarithmCalculator />

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>A <strong>function</strong> assigns to each input exactly one output: <Math>x \mapsto f(x)</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>A <strong>polynomial</strong> of degree <Math>n</Math> has at most <Math>n</Math> roots.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>The <strong>exponential function</strong> <Math>a^x</Math> grows rapidly; key rule: <Math>a^{'{x+y}'} = a^x a^y</Math>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>The <strong>logarithm</strong> is the inverse: <Math>\log_a(y) = x</Math> means <Math>a^x = y</Math>.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={13} sectionTitle="Functions" questions={section13Questions} />
    </LessonLayout>
  );
}
