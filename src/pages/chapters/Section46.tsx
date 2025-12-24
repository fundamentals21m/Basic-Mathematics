import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section46Questions } from '../../data/quizzes';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Exponential functions</strong> model phenomena with constant percentage growth or decay,
        from population growth to radioactive decay to compound interest.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Definition</h2>

      <Definition title="Exponential Function">
        <p>
          An <strong>exponential function</strong> with base <Math>b</Math> is:
        </p>
        <MathBlock>
          {'f(x) = b^x'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>{'b > 0'}</Math> and <Math>{'b \\neq 1'}</Math>.
        </p>
      </Definition>

      <Definition title="General Exponential Form">
        <p>
          More generally, we often write:
        </p>
        <MathBlock>
          {'f(x) = a \\cdot b^x'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          where <Math>a</Math> is the initial value (value at <Math>{'x = 0'}</Math>).
        </p>
      </Definition>

      {/* Properties */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties</h2>

      <Theorem title="Properties of Exponential Functions">
        <p>For <Math>{'f(x) = b^x'}</Math> with <Math>{'b > 0'}</Math>, <Math>{'b \\neq 1'}</Math>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Domain:</strong> All real numbers</li>
          <li><strong>Range:</strong> <Math>{'(0, \\infty)'}</Math></li>
          <li><Math>{'b^0 = 1'}</Math> (passes through <Math>{'(0, 1)'}</Math>)</li>
          <li>Horizontal asymptote: <Math>{'y = 0'}</Math></li>
          <li>If <Math>{'b > 1'}</Math>: increasing (exponential growth)</li>
          <li>If <Math>{'0 < b < 1'}</Math>: decreasing (exponential decay)</li>
        </ul>
      </Theorem>

      <Example title="Graphing Exponential Functions">
        <p>Compare <Math>{'f(x) = 2^x'}</Math> and <Math>{'g(x) = (1/2)^x'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><Math>{'f(x) = 2^x'}</Math>: growth function, increases as <Math>x</Math> increases</p>
          <p><Math>{'g(x) = (1/2)^x = 2^{-x}'}</Math>: decay function, decreases as <Math>x</Math> increases</p>
          <p>Both pass through <Math>{'(0, 1)'}</Math> and are reflections of each other across the y-axis.</p>
        </div>
      </Example>

      {/* The Natural Exponential */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Natural Exponential</h2>

      <Definition title="The Number e">
        <p>
          The number <Math>e</Math> (Euler's number) is defined as:
        </p>
        <MathBlock>
          {'e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n \\approx 2.71828...'}
        </MathBlock>
      </Definition>

      <Definition title="Natural Exponential Function">
        <p>
          The <strong>natural exponential function</strong> is:
        </p>
        <MathBlock>
          {'f(x) = e^x'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This is the most important exponential function in calculus and applications.
        </p>
      </Definition>

      <Callout type="info" title="Why e?">
        <p>
          The function <Math>{'e^x'}</Math> is special because its derivative equals itself:
          <Math>{'\\frac{d}{dx}e^x = e^x'}</Math>.
        </p>
      </Callout>

      {/* Laws of Exponents */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Laws of Exponents</h2>

      <Theorem title="Exponent Rules">
        <p>For any base <Math>{'b > 0'}</Math>:</p>
        <MathBlock>
          {'b^m \\cdot b^n = b^{m+n}'}
        </MathBlock>
        <MathBlock>
          {'\\frac{b^m}{b^n} = b^{m-n}'}
        </MathBlock>
        <MathBlock>
          {'(b^m)^n = b^{mn}'}
        </MathBlock>
        <MathBlock>
          {'b^{-n} = \\frac{1}{b^n}'}
        </MathBlock>
      </Theorem>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Applications</h2>

      <Definition title="Compound Interest">
        <p>With principal <Math>P</Math>, rate <Math>r</Math>, and <Math>n</Math> compounding periods per year:</p>
        <MathBlock>
          {'A = P\\left(1 + \\frac{r}{n}\\right)^{nt}'}
        </MathBlock>
        <p className="mt-2">For continuous compounding:</p>
        <MathBlock>
          {'A = Pe^{rt}'}
        </MathBlock>
      </Definition>

      <Example title="Compound Interest">
        <p>$1000 invested at 5% compounded continuously for 10 years.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'A = 1000 \\cdot e^{0.05 \\times 10} = 1000 \\cdot e^{0.5} \\approx 1648.72'}
          </MathBlock>
        </div>
      </Example>

      <Definition title="Exponential Growth/Decay">
        <p>General model:</p>
        <MathBlock>
          {'N(t) = N_0 e^{kt}'}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>{'k > 0'}</Math>: exponential growth</li>
          <li><Math>{'k < 0'}</Math>: exponential decay</li>
          <li><Math>{'N_0'}</Math>: initial quantity</li>
        </ul>
      </Definition>

      <Example title="Half-Life">
        <p>A substance has half-life of 5 years. If we start with 100g, how much remains after 15 years?</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>After 15 years = 3 half-lives:</p>
          <MathBlock>
            {'100 \\times \\left(\\frac{1}{2}\\right)^3 = 100 \\times \\frac{1}{8} = 12.5 \\text{ grams}'}
          </MathBlock>
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
            <span><Math>{'f(x) = b^x'}</Math> grows if <Math>{'b > 1'}</Math>, decays if <Math>{'0 < b < 1'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><Math>{'e \\approx 2.718'}</Math> is the natural base for exponential functions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Domain is all real numbers; range is positive numbers only</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Continuous compounding: <Math>{'A = Pe^{rt}'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={46} sectionTitle="Exponential Functions" questions={section46Questions} />
    </LessonLayout>
  );
}
