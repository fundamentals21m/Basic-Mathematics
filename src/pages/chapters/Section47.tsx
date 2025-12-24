import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section47Questions } from '../../data/quizzes';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Logarithms</strong> are the inverse of exponential functions. They answer the question:
        "To what power must we raise the base to get a given number?"
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Definition</h2>

      <Definition title="Logarithm">
        <p>
          For <Math>{'b > 0'}</Math>, <Math>{'b \\neq 1'}</Math>, and <Math>{'x > 0'}</Math>:
        </p>
        <MathBlock>
          {'y = \\log_b x \\quad \\Longleftrightarrow \\quad b^y = x'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          "<Math>{'\\log_b x'}</Math>" reads "log base <Math>b</Math> of <Math>x</Math>."
        </p>
      </Definition>

      <Example title="Evaluating Logarithms">
        <p>Find <Math>{'\\log_2 8'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>We need <Math>y</Math> such that <Math>{'2^y = 8 = 2^3'}</Math>.</p>
          <p>Therefore, <Math>{'\\log_2 8 = 3'}</Math>.</p>
        </div>
      </Example>

      <Example title="More Logarithms">
        <div className="text-dark-300 space-y-2">
          <p><Math>{'\\log_3 9 = 2'}</Math> (since <Math>{'3^2 = 9'}</Math>)</p>
          <p><Math>{'\\log_{10} 1000 = 3'}</Math> (since <Math>{'10^3 = 1000'}</Math>)</p>
          <p><Math>{'\\log_5 1 = 0'}</Math> (since <Math>{'5^0 = 1'}</Math>)</p>
        </div>
      </Example>

      {/* Common and Natural Logs */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Common and Natural Logarithms</h2>

      <Definition title="Special Logarithms">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Common logarithm:</strong> <Math>{'\\log x = \\log_{10} x'}</Math></li>
          <li><strong>Natural logarithm:</strong> <Math>{'\\ln x = \\log_e x'}</Math></li>
        </ul>
      </Definition>

      <Callout type="info" title="The Natural Logarithm">
        <p>
          The natural logarithm <Math>{'\\ln x'}</Math> is the inverse of <Math>{'e^x'}</Math>:
        </p>
        <MathBlock>
          {'\\ln(e^x) = x \\quad \\text{and} \\quad e^{\\ln x} = x'}
        </MathBlock>
      </Callout>

      {/* Properties */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Logarithms</h2>

      <Theorem title="Logarithm Laws">
        <p>For <Math>{'b > 0'}</Math>, <Math>{'b \\neq 1'}</Math>, and <Math>{'x, y > 0'}</Math>:</p>
        <MathBlock>
          {'\\log_b(xy) = \\log_b x + \\log_b y'}
        </MathBlock>
        <MathBlock>
          {'\\log_b\\left(\\frac{x}{y}\\right) = \\log_b x - \\log_b y'}
        </MathBlock>
        <MathBlock>
          {'\\log_b(x^n) = n \\log_b x'}
        </MathBlock>
      </Theorem>

      <Example title="Using Logarithm Laws">
        <p>Expand <Math>{'\\log_2(8x^3)'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\log_2(8x^3) = \\log_2 8 + \\log_2(x^3) = 3 + 3\\log_2 x'}
          </MathBlock>
        </div>
      </Example>

      <Theorem title="Special Values">
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li><Math>{'\\log_b 1 = 0'}</Math> (since <Math>{'b^0 = 1'}</Math>)</li>
          <li><Math>{'\\log_b b = 1'}</Math> (since <Math>{'b^1 = b'}</Math>)</li>
          <li><Math>{'\\log_b(b^x) = x'}</Math></li>
          <li><Math>{'b^{\\log_b x} = x'}</Math></li>
        </ul>
      </Theorem>

      {/* Change of Base */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Change of Base Formula</h2>

      <Theorem title="Change of Base">
        <MathBlock>
          {'\\log_b x = \\frac{\\log_a x}{\\log_a b} = \\frac{\\ln x}{\\ln b}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This allows us to compute any logarithm using common or natural logs.
        </p>
      </Theorem>

      <Example title="Using Change of Base">
        <p>Compute <Math>{'\\log_2 10'}</Math> using natural logs.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\log_2 10 = \\frac{\\ln 10}{\\ln 2} \\approx \\frac{2.303}{0.693} \\approx 3.32'}
          </MathBlock>
        </div>
      </Example>

      {/* Graph */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Graph of the Logarithm</h2>

      <Definition title="Graph Properties">
        <p>For <Math>{'f(x) = \\log_b x'}</Math> with <Math>{'b > 1'}</Math>:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Domain:</strong> <Math>{'(0, \\infty)'}</Math></li>
          <li><strong>Range:</strong> <Math>{'(-\\infty, \\infty)'}</Math></li>
          <li>Passes through <Math>{'(1, 0)'}</Math></li>
          <li>Vertical asymptote: <Math>{'x = 0'}</Math></li>
          <li>Increasing function</li>
        </ul>
      </Definition>

      {/* Solving Equations */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Solving Logarithmic Equations</h2>

      <Example title="Solving Exponential Equations">
        <p>Solve <Math>{'3^x = 20'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Take the natural log of both sides:</p>
          <MathBlock>
            {'\\ln(3^x) = \\ln 20'}
          </MathBlock>
          <MathBlock>
            {'x \\ln 3 = \\ln 20'}
          </MathBlock>
          <MathBlock>
            {'x = \\frac{\\ln 20}{\\ln 3} \\approx 2.73'}
          </MathBlock>
        </div>
      </Example>

      <Example title="Solving Logarithmic Equations">
        <p>Solve <Math>{'\\log_2(x + 3) = 5'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>Convert to exponential form:</p>
          <MathBlock>
            {'x + 3 = 2^5 = 32'}
          </MathBlock>
          <MathBlock>
            {'x = 29'}
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
            <span><Math>{'\\log_b x = y'}</Math> means <Math>{'b^y = x'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><Math>{'\\log_b(xy) = \\log_b x + \\log_b y'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><Math>{'\\log_b(x^n) = n\\log_b x'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Change of base: <Math>{'\\log_b x = \\frac{\\ln x}{\\ln b}'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={47} sectionTitle="Logarithms" questions={section47Questions} />
    </LessonLayout>
  );
}
