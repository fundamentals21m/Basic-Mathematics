import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section34Questions } from '../../data/quizzes';

export default function Section34() {
  return (
    <LessonLayout sectionId={34}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Visualizing sine and cosine as graphs reveals their wave-like nature. These graphs are
        fundamental to understanding periodic phenomena—from sound waves to seasonal patterns.
      </p>

      {/* Graph of Sine */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Sine Graph</h2>

      <Definition title="Graph of y = sin x">
        <p>
          The graph of <Math>{'y = \\sin x'}</Math> is a smooth wave that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Oscillates between <Math>{'-1'}</Math> and <Math>{'1'}</Math></li>
          <li>Passes through the origin <Math>{'(0, 0)'}</Math></li>
          <li>Has period <Math>{'2\\pi'}</Math></li>
          <li>Reaches maximum <Math>{'1'}</Math> at <Math>{'x = \\frac{\\pi}{2}'}</Math></li>
          <li>Reaches minimum <Math>{'-1'}</Math> at <Math>{'x = \\frac{3\\pi}{2}'}</Math></li>
        </ul>
      </Definition>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 my-6">
        <h4 className="font-semibold text-dark-200 mb-3">Key Points on y = sin x</h4>
        <div className="grid grid-cols-5 gap-2 text-center text-sm text-dark-300">
          <div><Math>{'x = 0'}</Math><br/><Math>{'y = 0'}</Math></div>
          <div><Math>{'x = \\frac{\\pi}{2}'}</Math><br/><Math>{'y = 1'}</Math></div>
          <div><Math>{'x = \\pi'}</Math><br/><Math>{'y = 0'}</Math></div>
          <div><Math>{'x = \\frac{3\\pi}{2}'}</Math><br/><Math>{'y = -1'}</Math></div>
          <div><Math>{'x = 2\\pi'}</Math><br/><Math>{'y = 0'}</Math></div>
        </div>
      </div>

      {/* Graph of Cosine */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Cosine Graph</h2>

      <Definition title="Graph of y = cos x">
        <p>
          The graph of <Math>{'y = \\cos x'}</Math> is a smooth wave that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Oscillates between <Math>{'-1'}</Math> and <Math>{'1'}</Math></li>
          <li>Passes through <Math>{'(0, 1)'}</Math></li>
          <li>Has period <Math>{'2\\pi'}</Math></li>
          <li>Reaches maximum <Math>{'1'}</Math> at <Math>{'x = 0'}</Math> (and <Math>{'2\\pi'}</Math>)</li>
          <li>Reaches minimum <Math>{'-1'}</Math> at <Math>{'x = \\pi'}</Math></li>
        </ul>
      </Definition>

      <Theorem title="Relationship Between Sine and Cosine Graphs">
        <p>
          The cosine graph is the sine graph shifted left by <Math>{'\\frac{\\pi}{2}'}</Math>:
        </p>
        <MathBlock>
          {'\\cos x = \\sin\\left(x + \\frac{\\pi}{2}\\right)'}
        </MathBlock>
      </Theorem>

      {/* Amplitude and Period */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Amplitude and Period</h2>

      <Definition title="Amplitude">
        <p>
          The <strong>amplitude</strong> of a wave is half the distance between its maximum and minimum values.
          For <Math>{'y = A\\sin x'}</Math>, the amplitude is <Math>{'|A|'}</Math>.
        </p>
      </Definition>

      <Definition title="Period">
        <p>
          The <strong>period</strong> is the horizontal length of one complete cycle.
          For <Math>{'y = \\sin(Bx)'}</Math>, the period is <Math>{'\\frac{2\\pi}{|B|}'}</Math>.
        </p>
      </Definition>

      <Theorem title="General Form">
        <p>
          For <Math>{'y = A\\sin(Bx)'}</Math> or <Math>{'y = A\\cos(Bx)'}</Math>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><strong>Amplitude:</strong> <Math>{'|A|'}</Math></li>
          <li><strong>Period:</strong> <Math>{'\\frac{2\\pi}{|B|}'}</Math></li>
        </ul>
      </Theorem>

      <Example title="Finding Amplitude and Period">
        <p>Find the amplitude and period of <Math>{'y = 3\\sin(2x)'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p><strong>Amplitude:</strong> <Math>{'|A| = |3| = 3'}</Math></p>
          <p><strong>Period:</strong> <Math>{'\\frac{2\\pi}{|B|} = \\frac{2\\pi}{2} = \\pi'}</Math></p>
          <p className="mt-2">The wave oscillates between <Math>{'-3'}</Math> and <Math>{'3'}</Math>, completing one cycle every <Math>{'\\pi'}</Math> units.</p>
        </div>
      </Example>

      {/* Phase Shift */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Phase Shift</h2>

      <Definition title="Phase Shift">
        <p>
          For <Math>{'y = A\\sin(B(x - C))'}</Math> or <Math>{'y = A\\cos(B(x - C))'}</Math>, the graph is shifted
          horizontally by <Math>{'C'}</Math> units. This is called the <strong>phase shift</strong>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>{'C > 0'}</Math>: shift right</li>
          <li><Math>{'C < 0'}</Math>: shift left</li>
        </ul>
      </Definition>

      <Example title="Graphing with Phase Shift">
        <p>Describe the graph of <Math>{'y = \\sin(x - \\frac{\\pi}{4})'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <p>This is <Math>{'y = \\sin x'}</Math> shifted right by <Math>{'\\frac{\\pi}{4}'}</Math>.</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Amplitude: 1</li>
            <li>Period: <Math>{'2\\pi'}</Math></li>
            <li>Phase shift: <Math>{'\\frac{\\pi}{4}'}</Math> to the right</li>
          </ul>
          <p className="mt-2">The wave starts its cycle at <Math>{'x = \\frac{\\pi}{4}'}</Math> instead of <Math>{'x = 0'}</Math>.</p>
        </div>
      </Example>

      {/* Vertical Shift */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Vertical Shift</h2>

      <Definition title="Vertical Shift">
        <p>
          For <Math>{'y = A\\sin(Bx) + D'}</Math>, the graph is shifted vertically by <Math>{'D'}</Math> units.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>{'D > 0'}</Math>: shift up</li>
          <li><Math>{'D < 0'}</Math>: shift down</li>
        </ul>
      </Definition>

      <Example title="Complete Transformation">
        <p>Describe <Math>{'y = 2\\sin(3x) + 1'}</Math>.</p>
        <div className="mt-3 text-dark-300 space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Amplitude:</strong> 2</li>
            <li><strong>Period:</strong> <Math>{'\\frac{2\\pi}{3}'}</Math></li>
            <li><strong>Vertical shift:</strong> 1 unit up</li>
          </ul>
          <p className="mt-2">Range: <Math>{'[-2 + 1, 2 + 1] = [-1, 3]'}</Math></p>
        </div>
      </Example>

      <Callout type="info" title="Full General Form">
        <p>
          <Math>{'y = A\\sin(B(x - C)) + D'}</Math> has:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Amplitude <Math>{'|A|'}</Math>, Period <Math>{'\\frac{2\\pi}{|B|}'}</Math></li>
          <li>Phase shift <Math>{'C'}</Math>, Vertical shift <Math>{'D'}</Math></li>
        </ul>
      </Callout>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span>Both <Math>{'\\sin x'}</Math> and <Math>{'\\cos x'}</Math> oscillate between <Math>{'-1'}</Math> and <Math>{'1'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Amplitude</strong> = <Math>{'|A|'}</Math>, <strong>Period</strong> = <Math>{'\\frac{2\\pi}{|B|}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>Cosine is sine shifted left by <Math>{'\\frac{\\pi}{2}'}</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Phase shift</strong> <Math>{'C'}</Math> moves the graph horizontally</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Vertical shift</strong> <Math>{'D'}</Math> moves the graph up or down</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={34} sectionTitle="The Graphs" questions={section34Questions} />
    </LessonLayout>
  );
}
