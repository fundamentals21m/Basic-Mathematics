import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section35Questions } from '../../data/quizzes';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The <strong>tangent function</strong> completes the trio of basic trigonometric functions.
        While sine and cosine relate to coordinates, tangent relates to slope—making it essential
        for understanding angles in terms of rise over run.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Definition of Tangent</h2>

      <Definition title="Tangent Function">
        <p>
          The <strong>tangent</strong> of an angle <Math>\theta</Math> is defined as:
        </p>
        <MathBlock>
          {'\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}'}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Tangent is undefined when <Math>{'\\cos\\theta = 0'}</Math> (at odd multiples of <Math>{'\\frac{\\pi}{2}'}</Math>).
        </p>
      </Definition>

      <Callout type="info" title="Right Triangle Interpretation">
        <p>
          In a right triangle with acute angle <Math>\theta</Math>:
        </p>
        <MathBlock>
          {'\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}'}
        </MathBlock>
      </Callout>

      {/* Special Values */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Values</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm text-dark-300">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2 px-3">Angle</th>
              <th className="text-left py-2 px-3"><Math>\sin</Math></th>
              <th className="text-left py-2 px-3"><Math>\cos</Math></th>
              <th className="text-left py-2 px-3"><Math>\tan</Math></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800"><td className="py-2 px-3">0</td><td className="py-2 px-3">0</td><td className="py-2 px-3">1</td><td className="py-2 px-3">0</td></tr>
            <tr className="border-b border-dark-800"><td className="py-2 px-3"><Math>{'\\frac{\\pi}{6}'}</Math></td><td className="py-2 px-3"><Math>{'\\frac{1}{2}'}</Math></td><td className="py-2 px-3"><Math>{'\\frac{\\sqrt{3}}{2}'}</Math></td><td className="py-2 px-3"><Math>{'\\frac{\\sqrt{3}}{3}'}</Math></td></tr>
            <tr className="border-b border-dark-800"><td className="py-2 px-3"><Math>{'\\frac{\\pi}{4}'}</Math></td><td className="py-2 px-3"><Math>{'\\frac{\\sqrt{2}}{2}'}</Math></td><td className="py-2 px-3"><Math>{'\\frac{\\sqrt{2}}{2}'}</Math></td><td className="py-2 px-3">1</td></tr>
            <tr className="border-b border-dark-800"><td className="py-2 px-3"><Math>{'\\frac{\\pi}{3}'}</Math></td><td className="py-2 px-3"><Math>{'\\frac{\\sqrt{3}}{2}'}</Math></td><td className="py-2 px-3"><Math>{'\\frac{1}{2}'}</Math></td><td className="py-2 px-3"><Math>{'\\sqrt{3}'}</Math></td></tr>
            <tr><td className="py-2 px-3"><Math>{'\\frac{\\pi}{2}'}</Math></td><td className="py-2 px-3">1</td><td className="py-2 px-3">0</td><td className="py-2 px-3">undefined</td></tr>
          </tbody>
        </table>
      </div>

      <Example title="Computing Tangent">
        <p>Find <Math>{'\\tan\\frac{\\pi}{4}'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\tan\\frac{\\pi}{4} = \\frac{\\sin\\frac{\\pi}{4}}{\\cos\\frac{\\pi}{4}} = \\frac{\\sqrt{2}/2}{\\sqrt{2}/2} = 1'}
          </MathBlock>
        </div>
      </Example>

      {/* Properties */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Tangent</h2>

      <Theorem title="Tangent Properties">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Odd function:</strong> <Math>{'\\tan(-\\theta) = -\\tan\\theta'}</Math></li>
          <li><strong>Period:</strong> <Math>\pi</Math> (not <Math>{'2\\pi'}</Math>!)</li>
          <li><strong>Range:</strong> <Math>{'(-\\infty, \\infty)'}</Math></li>
          <li><strong>Undefined at:</strong> <Math>{'\\theta = \\frac{\\pi}{2} + n\\pi'}</Math> for integer <Math>n</Math></li>
        </ul>
      </Theorem>

      <Callout type="warning" title="Vertical Asymptotes">
        <p>
          The tangent function has vertical asymptotes where <Math>{'\\cos\\theta = 0'}</Math>.
          The graph approaches <Math>{'\\pm\\infty'}</Math> near these points.
        </p>
      </Callout>

      {/* Graph */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Graph of Tangent</h2>

      <Definition title="Graph Features">
        <p>
          The graph of <Math>{'y = \\tan x'}</Math>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Passes through the origin</li>
          <li>Has vertical asymptotes at <Math>{'x = \\pm\\frac{\\pi}{2}, \\pm\\frac{3\\pi}{2}, \\ldots'}</Math></li>
          <li>Increases on each interval between asymptotes</li>
          <li>Has period <Math>\pi</Math></li>
        </ul>
      </Definition>

      {/* Cotangent, Secant, Cosecant */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Other Trigonometric Functions</h2>

      <Definition title="Reciprocal Functions">
        <p>
          Three more trigonometric functions are defined as reciprocals:
        </p>
        <MathBlock>
          {'\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}'}
        </MathBlock>
        <MathBlock>
          {'\\sec\\theta = \\frac{1}{\\cos\\theta}'}
        </MathBlock>
        <MathBlock>
          {'\\csc\\theta = \\frac{1}{\\sin\\theta}'}
        </MathBlock>
      </Definition>

      {/* Pythagorean Identities */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Pythagorean Identities</h2>

      <Theorem title="Extended Pythagorean Identities">
        <p>
          From <Math>{'\\cos^2\\theta + \\sin^2\\theta = 1'}</Math>, we derive:
        </p>
        <MathBlock>
          {'1 + \\tan^2\\theta = \\sec^2\\theta'}
        </MathBlock>
        <MathBlock>
          {'1 + \\cot^2\\theta = \\csc^2\\theta'}
        </MathBlock>
      </Theorem>

      <Example title="Using an Identity">
        <p>If <Math>{'\\tan\\theta = 2'}</Math> and <Math>\theta</Math> is in Q1, find <Math>{'\\sec\\theta'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <MathBlock>
            {'\\sec^2\\theta = 1 + \\tan^2\\theta = 1 + 4 = 5'}
          </MathBlock>
          <MathBlock>
            {'\\sec\\theta = \\sqrt{5} \\quad \\text{(positive in Q1)}'}
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
            <span><Math>{'\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}'}</Math> (undefined when <Math>{'\\cos\\theta = 0'}</Math>)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Tangent has period <Math>\pi</Math>, not <Math>{'2\\pi'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Tangent is an odd function: <Math>{'\\tan(-\\theta) = -\\tan\\theta'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><Math>{'1 + \\tan^2\\theta = \\sec^2\\theta'}</Math></span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={35} sectionTitle="The Tangent" questions={section35Questions} />
    </LessonLayout>
  );
}
