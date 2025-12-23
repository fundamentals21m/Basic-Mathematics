import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section21Questions } from '../../data/quizzes';
import { TriangleAreaDemo, HeronCalculator, ShoelaceDemo } from '../../components/visualizations';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        The area of a triangle is exactly half the area of a parallelogram with the same
        base and height. This fundamental relationship leads to the familiar formula
        <Math>\frac{'{1}'}{'{2}'} \times \text{'{base}'} \times \text{'{height}'}</Math> and several powerful variations.
      </p>

      {/* Triangle Area Formula */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Basic Formula</h2>

      <Theorem title="Triangle Area">
        <p>
          A triangle with base <Math>b</Math> and corresponding height <Math>h</Math> has area:
        </p>
        <MathBlock>
          \text{'{Area}'} = \frac{'{1}'}{'{2}'} bh
        </MathBlock>
      </Theorem>

      <Definition title="Base and Height of a Triangle">
        <p>
          Any side of a triangle can serve as the <strong>base</strong>. The corresponding
          <strong> height</strong> (or altitude) is the perpendicular distance from the
          opposite vertex to the line containing the base.
        </p>
      </Definition>

      <TriangleAreaDemo />

      {/* Derivation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Why Half a Parallelogram?</h2>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Proof by Doubling</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Take any triangle with base <Math>b</Math> and height <Math>h</Math></li>
          <li>Create a copy of the triangle and rotate it 180°</li>
          <li>Attach the rotated copy to the original along one side</li>
          <li>The result is a parallelogram with base <Math>b</Math> and height <Math>h</Math></li>
          <li>Since the parallelogram has area <Math>bh</Math>, the triangle has area <Math>\frac{'{1}'}{'{2}'}bh</Math></li>
        </ol>
      </div>

      <Example title="Computing Triangle Area">
        <p>Find the area of a triangle with base 8 and height 5.</p>
        <p className="mt-2 text-dark-300">
          <Math>\text{'{Area}'} = \frac{'{1}'}{'{2}'} \times 8 \times 5 = \frac{'{1}'}{'{2}'} \times 40 = 20</Math> square units
        </p>
      </Example>

      <Callout type="info" title="Three Pairs of Base-Height">
        <p>
          Every triangle has three possible base-height pairs (one for each side as base).
          All three give the same area! This is because area is an intrinsic property of
          the triangle.
        </p>
      </Callout>

      {/* Different Triangles */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Triangle Types</h2>

      <Example title="Right Triangle">
        <p>
          In a right triangle, the two legs are perpendicular, so one leg can serve as
          the base and the other as the height:
        </p>
        <MathBlock>
          \text{'{Area}'} = \frac{'{1}'}{'{2}'} \times \text{'{leg}'}_{'{1}'} \times \text{'{leg}'}_{'{2}'}
        </MathBlock>
        <p className="mt-2 text-dark-300">
          A right triangle with legs 3 and 4 has area <Math>\frac{'{1}'}{'{2}'} \times 3 \times 4 = 6</Math>.
        </p>
      </Example>

      <Example title="Equilateral Triangle">
        <p>
          For an equilateral triangle with side <Math>s</Math>, the height can be found using the
          Pythagorean theorem: <Math>h = \frac{'{s\sqrt{3}}'}{'{2}'}</Math>
        </p>
        <MathBlock>
          \text{'{Area}'} = \frac{'{1}'}{'{2}'} \times s \times \frac{'{s\sqrt{3}}'}{'{2}'} = \frac{'{s^2\sqrt{3}}'}{'{4}'}
        </MathBlock>
        <p className="mt-2 text-dark-300">
          An equilateral triangle with side 6 has area <Math>\frac{'{36\sqrt{3}}'}{'{4}'} = 9\sqrt{'{3}'} \approx 15.59</Math>.
        </p>
      </Example>

      <Example title="Isosceles Triangle">
        <p>
          For an isosceles triangle with equal sides <Math>a</Math> and base <Math>b</Math>:
        </p>
        <MathBlock>
          h = \sqrt{'{a^2 - \\frac{b^2}{4}}'} \quad \text{'{and}'} \quad \text{'{Area}'} = \frac{'{b}'}{'{4}'}\sqrt{'{4a^2 - b^2}'}
        </MathBlock>
      </Example>

      {/* Heron's Formula */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Heron's Formula</h2>

      <p className="text-dark-300 mb-4">
        When you know all three sides but not the height, Heron's formula computes the
        area directly from the side lengths.
      </p>

      <Theorem title="Heron's Formula">
        <p>
          For a triangle with sides <Math>a</Math>, <Math>b</Math>, <Math>c</Math>, let <Math>s = \frac{'{a+b+c}'}{'{2}'}</Math> be the
          <strong> semi-perimeter</strong>. Then:
        </p>
        <MathBlock>
          \text{'{Area}'} = \sqrt{'{s(s-a)(s-b)(s-c)}'}
        </MathBlock>
      </Theorem>

      <Example title="Using Heron's Formula">
        <p>Find the area of a triangle with sides 5, 6, and 7.</p>
        <div className="mt-2 text-dark-300 space-y-1">
          <p>Semi-perimeter: <Math>s = \frac{'{5+6+7}'}{'{2}'} = 9</Math></p>
          <p><Math>s - a = 9 - 5 = 4</Math></p>
          <p><Math>s - b = 9 - 6 = 3</Math></p>
          <p><Math>s - c = 9 - 7 = 2</Math></p>
          <p className="mt-2">
            <Math>\text{'{Area}'} = \sqrt{'{9 \times 4 \times 3 \times 2}'} = \sqrt{'{216}'} = 6\sqrt{'{6}'} \approx 14.7</Math>
          </p>
        </div>
      </Example>

      <HeronCalculator />

      <Callout type="info" title="When to Use Heron's Formula">
        <p>
          Use Heron's formula when you know all three sides but don't have the height.
          If you have a base and height, the basic formula <Math>\frac{'{1}'}{'{2}'}bh</Math> is simpler.
        </p>
      </Callout>

      {/* Coordinate Formula */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Area from Coordinates</h2>

      <p className="text-dark-300 mb-4">
        When vertices are given as coordinates, we can use the "shoelace formula" (related
        to determinants) to find the area.
      </p>

      <Theorem title="Shoelace Formula">
        <p>
          For a triangle with vertices <Math>(x_1, y_1)</Math>, <Math>(x_2, y_2)</Math>, <Math>(x_3, y_3)</Math>:
        </p>
        <MathBlock>
          \text{'{Area}'} = \frac{'{1}'}{'{2}'} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This equals <Math>\frac{'{1}'}{'{2}'}</Math> times the absolute value of the determinant:
        </p>
        <MathBlock>
          \text{'{Area}'} = \frac{'{1}'}{'{2}'} \left| \det \begin{'{bmatrix}'} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{'{bmatrix}'} \right|
        </MathBlock>
      </Theorem>

      <Example title="Area from Vertices">
        <p>Find the area of the triangle with vertices <Math>A(1, 2)</Math>, <Math>B(4, 6)</Math>, <Math>C(5, 1)</Math>.</p>
        <div className="mt-2 text-dark-300">
          <p>Using the shoelace formula:</p>
          <p className="mt-1 font-mono text-sm">
            Area = ½|1(6-1) + 4(1-2) + 5(2-6)|
          </p>
          <p className="font-mono text-sm">
            = ½|1(5) + 4(-1) + 5(-4)|
          </p>
          <p className="font-mono text-sm">
            = ½|5 - 4 - 20| = ½|-19| = 9.5
          </p>
        </div>
      </Example>

      <ShoelaceDemo />

      {/* Comparison with Parallelogram */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Relationship to Parallelograms</h2>

      <Theorem title="Triangle as Half a Parallelogram">
        <p>
          A diagonal of any parallelogram divides it into two congruent triangles.
          Therefore, each triangle has exactly half the area of the parallelogram.
        </p>
      </Theorem>

      <Example title="Finding Parallelogram Area from Triangle">
        <p>
          If a triangle has area 15, then the parallelogram formed by doubling the triangle
          (attaching a rotated copy) has area <Math>2 \times 15 = 30</Math>.
        </p>
      </Example>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Applications</h2>

      <Example title="Finding Unknown Height">
        <p>A triangle has area 24 and base 8. What is the height?</p>
        <div className="mt-2 text-dark-300">
          <p><Math>24 = \frac{'{1}'}{'{2}'} \times 8 \times h</Math></p>
          <p><Math>24 = 4h</Math></p>
          <p><Math>h = 6</Math></p>
        </div>
      </Example>

      <Example title="Comparing Triangle Areas">
        <p>
          Two triangles share the same base. If one has height 4 and the other has height 6,
          their areas are in the ratio <Math>4:6 = 2:3</Math>.
        </p>
        <p className="mt-2 text-dark-400 text-sm">
          Triangles with the same base have areas proportional to their heights.
        </p>
      </Example>

      <Example title="Medians and Area">
        <p>
          Each median of a triangle divides it into two triangles of equal area.
          The three medians divide the triangle into six smaller triangles, all with equal area.
        </p>
      </Example>

      {/* Important Formulas */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Summary of Triangle Area Formulas</h4>
        <div className="space-y-3 text-dark-300">
          <div>
            <span className="text-primary-400">Basic:</span>
            <Math className="ml-2">\text{'{Area}'} = \frac{'{1}'}{'{2}'}bh</Math>
          </div>
          <div>
            <span className="text-cyan-400">Heron's:</span>
            <Math className="ml-2">\text{'{Area}'} = \sqrt{'{s(s-a)(s-b)(s-c)}'}</Math>
          </div>
          <div>
            <span className="text-emerald-400">Coordinates:</span>
            <Math className="ml-2">\text{'{Area}'} = \frac{'{1}'}{'{2}'}|x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|</Math>
          </div>
          <div>
            <span className="text-amber-400">Equilateral:</span>
            <Math className="ml-2">\text{'{Area}'} = \frac{'{s^2\sqrt{3}}'}{'{4}'}</Math>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Basic formula:</strong> Area = ½ × base × height</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Why ½:</strong> A triangle is exactly half of a parallelogram</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Heron's formula:</strong> √(s(s-a)(s-b)(s-c)) when you know all sides</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Shoelace formula:</strong> Compute area from vertex coordinates</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Three base-height pairs:</strong> All give the same area</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={21} sectionTitle="Area of Triangles" questions={section21Questions} />
    </LessonLayout>
  );
}
