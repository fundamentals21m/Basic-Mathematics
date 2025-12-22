import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section07Questions } from '../../data/quizzes';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The elimination method extends naturally to systems with <strong>three unknowns</strong>.
        The strategy is the same: eliminate variables one at a time until we have a single equation.
      </p>

      {/* Definition */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Systems of Three Equations</h2>

      <Definition title="System of Three Equations">
        <p>
          A <strong>system of three linear equations in three unknowns</strong> has the form:
        </p>
        <MathBlock>
          {`\\begin{cases}
a_1x + b_1y + c_1z = d_1 \\\\
a_2x + b_2y + c_2z = d_2 \\\\
a_3x + b_3y + c_3z = d_3
\\end{cases}`}
        </MathBlock>
      </Definition>

      {/* Method */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Method</h2>

      <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700/50">
        <h4 className="text-lg font-semibold text-dark-100 mb-4">Steps for Three Unknowns</h4>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            <strong>Reduce to 2 equations in 2 unknowns:</strong><br />
            Choose one variable to eliminate. Use pairs of equations to create
            two new equations that don't contain that variable.
          </li>
          <li>
            <strong>Solve the 2×2 system:</strong><br />
            Use the elimination method from the previous section.
          </li>
          <li>
            <strong>Back-substitute:</strong><br />
            Plug the values back into one of the original equations to find the third variable.
          </li>
        </ol>
      </div>

      <Callout type="info" title="Strategy">
        <p>
          Choose which variable to eliminate first by looking at the coefficients.
          Pick the one that requires the least computation (e.g., if one coefficient is already 1 or -1).
        </p>
      </Callout>

      {/* Worked Example */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Worked Example</h2>

      <Example title="Solving a 3×3 System">
        <p>Solve the system:</p>
        <MathBlock>
          {`\\begin{cases}
3x + 2y + 4z = 1 & \\text{(Equation 1)} \\\\
-x + y + 2z = 2 & \\text{(Equation 2)} \\\\
x - 3y + z = -1 & \\text{(Equation 3)}
\\end{cases}`}
        </MathBlock>

        <div className="mt-6 space-y-6">
          <div className="p-4 rounded-lg bg-dark-800/40">
            <p className="font-semibold text-primary-400">Step 1: Eliminate x</p>
            <div className="text-dark-300 mt-3 space-y-3">
              <div>
                <p className="text-dark-200">From Equations 2 and 3:</p>
                <p>Add them: <Math>(-x + y + 2z) + (x - 3y + z) = 2 + (-1)</Math></p>
                <p><Math>-2y + 3z = 1</Math> — call this Equation 2'</p>
              </div>
              <div>
                <p className="text-dark-200">From Equations 1 and 2:</p>
                <p>Multiply Eq. 2 by 3: <Math>-3x + 3y + 6z = 6</Math></p>
                <p>Add to Eq. 1: <Math>(3x + 2y + 4z) + (-3x + 3y + 6z) = 1 + 6</Math></p>
                <p><Math>5y + 10z = 7</Math> — call this Equation 3'</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-dark-800/40">
            <p className="font-semibold text-cyan-400">Step 2: Solve the 2×2 System</p>
            <div className="text-dark-300 mt-3">
              <p>We have:</p>
              <MathBlock>
                {`\\begin{cases}
-2y + 3z = 1 & \\text{(2')} \\\\
5y + 10z = 7 & \\text{(3')}
\\end{cases}`}
              </MathBlock>
              <div className="mt-3 space-y-2">
                <p>Multiply (2') by 5: <Math>-10y + 15z = 5</Math></p>
                <p>Multiply (3') by 2: <Math>10y + 20z = 14</Math></p>
                <p>Add: <Math>35z = 19</Math></p>
                <p className="font-semibold"><Math>z = \frac{'{19}'}{'{35}'}</Math></p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-dark-800/40">
            <p className="font-semibold text-emerald-400">Step 3: Find y</p>
            <div className="text-dark-300 mt-3 space-y-2">
              <p>Substitute <Math>z = \frac{'{19}'}{'{35}'}</Math> into Equation 2':</p>
              <p><Math>-2y + 3 \cdot \frac{'{19}'}{'{35}'} = 1</Math></p>
              <p><Math>-2y + \frac{'{57}'}{'{35}'} = 1</Math></p>
              <p><Math>-2y = 1 - \frac{'{57}'}{'{35}'} = \frac{'{35 - 57}'}{'{35}'} = -\frac{'{22}'}{'{35}'}</Math></p>
              <p className="font-semibold"><Math>y = \frac{'{11}'}{'{35}'}</Math></p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-dark-800/40">
            <p className="font-semibold text-yellow-400">Step 4: Find x</p>
            <div className="text-dark-300 mt-3 space-y-2">
              <p>Substitute into Equation 3:</p>
              <p><Math>x - 3y + z = -1</Math></p>
              <p><Math>x = -1 + 3y - z = -1 + 3 \cdot \frac{'{11}'}{'{35}'} - \frac{'{19}'}{'{35}'}</Math></p>
              <p><Math>x = -\frac{'{35}'}{'{35}'} + \frac{'{33}'}{'{35}'} - \frac{'{19}'}{'{35}'} = \frac{'{-35 + 33 - 19}'}{'{35}'} = -\frac{'{21}'}{'{35}'}</Math></p>
              <p className="font-semibold"><Math>x = -\frac{'{3}'}{'{5}'}</Math></p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-primary-500/10 border border-primary-500/30">
          <p className="font-semibold text-primary-400">Final Answer:</p>
          <MathBlock>x = -\frac{'{3}'}{'{5}'}, \quad y = \frac{'{11}'}{'{35}'}, \quad z = \frac{'{19}'}{'{35}'}</MathBlock>
        </div>
      </Example>

      {/* Verification */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Verifying Solutions</h2>

      <Callout type="warning" title="Always Check Your Work">
        <p>
          With three equations, there are many opportunities for arithmetic errors.
          Always substitute your solution back into <em>all three</em> original equations
          to verify.
        </p>
      </Callout>

      {/* Practice Strategy */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Tips for Success</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-dark-800/40">
          <h4 className="font-semibold text-dark-100 mb-2">Choose Wisely</h4>
          <p className="text-dark-400 text-sm">
            Eliminate the variable with the simplest coefficients first.
            Look for coefficients of 1, -1, or matching numbers.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-dark-800/40">
          <h4 className="font-semibold text-dark-100 mb-2">Stay Organized</h4>
          <p className="text-dark-400 text-sm">
            Label your equations clearly (1, 2, 3, 2', 3').
            This helps track what you've done.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-dark-800/40">
          <h4 className="font-semibold text-dark-100 mb-2">Use Common Denominators</h4>
          <p className="text-dark-400 text-sm">
            When fractions appear, find a common denominator early
            to simplify calculations.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-dark-800/40">
          <h4 className="font-semibold text-dark-100 mb-2">Check Each Step</h4>
          <p className="text-dark-400 text-sm">
            Errors compound quickly. Verify arithmetic at each step,
            not just at the end.
          </p>
        </div>
      </div>

      {/* Additional Example */}
      <Example title="A Simpler System" className="mt-8">
        <p>Solve:</p>
        <MathBlock>
          {`\\begin{cases}
x + y + z = 6 \\\\
2x - y + z = 3 \\\\
x + 2y - z = 2
\\end{cases}`}
        </MathBlock>

        <div className="mt-4 text-dark-300">
          <p><strong>Solution approach:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Add equations 1 and 2: <Math>3x + 2z = 9</Math></li>
            <li>Add equations 1 and 3: <Math>2x + 3y = 8</Math></li>
            <li>From equation 1: <Math>z = 6 - x - y</Math></li>
            <li>Solving yields: <Math>x = 1, y = 2, z = 3</Math></li>
          </ul>
          <p className="mt-3">
            <strong>Verify:</strong> <Math>1 + 2 + 3 = 6</Math> ✓, <Math>2(1) - 2 + 3 = 3</Math> ✓, <Math>1 + 2(2) - 3 = 2</Math> ✓
          </p>
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
            <span>For 3 unknowns: first reduce to 2 unknowns, then to 1 unknown.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span>Choose which variable to eliminate based on simplest coefficients.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span>After solving for two variables, back-substitute to find the third.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span>Always verify your solution in all original equations.</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionTitle="Three Unknowns" questions={section07Questions} />
    </LessonLayout>
  );
}
