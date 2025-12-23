import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section20Questions } from '../../data/quizzes';
import { ParallelogramAreaDemo, AreaCalculator, ShearingDemo } from '../../components/visualizations';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        <strong>Area</strong> measures the amount of space enclosed by a two-dimensional figure.
        In this section, we develop the area formula for parallelograms, building from the
        familiar formula for rectangles.
      </p>

      {/* Area Basics */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Concept of Area</h2>

      <Definition title="Area">
        <p>
          The <strong>area</strong> of a plane figure is a non-negative number that measures
          the region enclosed by the figure. We denote the area of figure <Math>F</Math> as <Math>\text{'{Area}'}(F)</Math>.
        </p>
      </Definition>

      <Theorem title="Properties of Area">
        <p>Area satisfies the following fundamental properties:</p>
        <ul className="mt-2 space-y-2 text-dark-300">
          <li><strong>A1 (Non-negative):</strong> <Math>\text{'{Area}'}(F) \geq 0</Math></li>
          <li><strong>A2 (Unit square):</strong> A unit square has area 1</li>
          <li><strong>A3 (Congruence):</strong> Congruent figures have equal areas</li>
          <li><strong>A4 (Additivity):</strong> If <Math>F = F_1 \cup F_2</Math> with no overlap, then <Math>\text{'{Area}'}(F) = \text{'{Area}'}(F_1) + \text{'{Area}'}(F_2)</Math></li>
        </ul>
      </Theorem>

      <Callout type="info" title="Why These Properties Matter">
        <p>
          These properties allow us to derive area formulas by decomposing complex shapes
          into simpler ones. We can cut, rearrange, and combine regions as long as we
          don't create overlaps or gaps.
        </p>
      </Callout>

      {/* Rectangles */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Area of Rectangles</h2>

      <Theorem title="Rectangle Area">
        <p>
          A rectangle with base <Math>b</Math> and height <Math>h</Math> has area:
        </p>
        <MathBlock>
          \text{'{Area}'} = b \times h
        </MathBlock>
      </Theorem>

      <Example title="Rectangle Calculation">
        <p>A rectangle has base 5 units and height 3 units.</p>
        <p className="mt-2 text-dark-300">
          <Math>\text{'{Area}'} = 5 \times 3 = 15</Math> square units
        </p>
        <p className="mt-2 text-dark-400 text-sm">
          We can verify this by counting: 15 unit squares fit inside.
        </p>
      </Example>

      <Definition title="Base and Height">
        <p>
          For any parallelogram (including rectangles):
        </p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li><strong>Base:</strong> Any side of the parallelogram</li>
          <li><strong>Height:</strong> The perpendicular distance from the base to the opposite side</li>
        </ul>
      </Definition>

      {/* Parallelograms */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Area of Parallelograms</h2>

      <p className="text-dark-300 mb-4">
        A parallelogram can be transformed into a rectangle with the same area by cutting
        and rearranging. This leads to the same formula.
      </p>

      <Theorem title="Parallelogram Area">
        <p>
          A parallelogram with base <Math>b</Math> and height <Math>h</Math> has area:
        </p>
        <MathBlock>
          \text{'{Area}'} = b \times h
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Note: <Math>h</Math> is the perpendicular height, not the length of the slanted side.
        </p>
      </Theorem>

      <ParallelogramAreaDemo />

      <Example title="Parallelogram vs. Rectangle">
        <p>
          Consider a parallelogram with base 6, slant side 5, and height 4.
        </p>
        <div className="mt-2 text-dark-300">
          <p><Math>\text{'{Area}'} = 6 \times 4 = 24</Math> square units</p>
          <p className="mt-2 text-dark-400 text-sm">
            The slant side (5) is not used in the area formula—only the perpendicular height matters.
          </p>
        </div>
      </Example>

      {/* Deriving the Formula */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Deriving the Formula</h2>

      <p className="text-dark-300 mb-4">
        We can prove the parallelogram area formula by showing how to transform a
        parallelogram into a rectangle with the same area.
      </p>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Method 1: Cut and Rearrange</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Draw a perpendicular from one vertex to the base</li>
          <li>Cut off the right triangle that forms</li>
          <li>Move this triangle to the other side</li>
          <li>The result is a rectangle with base <Math>b</Math> and height <Math>h</Math></li>
        </ol>
        <p className="mt-3 text-dark-400 text-sm">
          Since we only moved pieces without changing their size, the area is preserved.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Method 2: Shearing</h4>
        <p className="text-dark-300 mb-2">
          A <strong>shear transformation</strong> slides one edge parallel to itself while
          keeping the base fixed. Shearing preserves:
        </p>
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li>The base length</li>
          <li>The height (perpendicular distance)</li>
          <li>The area</li>
        </ul>
        <p className="mt-3 text-dark-400 text-sm">
          Any parallelogram can be sheared into a rectangle with the same base and height.
        </p>
      </div>

      <ShearingDemo />

      {/* Computing Areas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Computing Areas</h2>

      <Example title="Finding Height from Coordinates">
        <p>
          A parallelogram has vertices at <Math>A(0,0)</Math>, <Math>B(5,0)</Math>, <Math>C(7,3)</Math>, <Math>D(2,3)</Math>.
        </p>
        <div className="mt-2 text-dark-300">
          <p>Base <Math>AB</Math> has length <Math>5</Math></p>
          <p>Height = vertical distance = <Math>3</Math></p>
          <p className="mt-2"><Math>\text{'{Area}'} = 5 \times 3 = 15</Math> square units</p>
        </div>
      </Example>

      <Example title="Given Slant Side and Angle">
        <p>
          A parallelogram has base 8, slant side 5, and the angle between them is 60°.
        </p>
        <div className="mt-2 text-dark-300">
          <p>Height = slant side × sin(angle) = <Math>5 \sin(60°) = 5 \cdot \frac{'{\sqrt{3}}'}{'{2}'} \approx 4.33</Math></p>
          <p className="mt-2"><Math>\text{'{Area}'} = 8 \times 4.33 \approx 34.64</Math> square units</p>
        </div>
      </Example>

      <AreaCalculator />

      {/* Special Cases */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Special Cases</h2>

      <Theorem title="Square Area">
        <p>A square with side <Math>s</Math> has area:</p>
        <MathBlock>\text{'{Area}'} = s^2</MathBlock>
      </Theorem>

      <Theorem title="Rhombus Area (using diagonals)">
        <p>A rhombus with diagonals <Math>d_1</Math> and <Math>d_2</Math> has area:</p>
        <MathBlock>\text{'{Area}'} = \frac{'{1}'}{'{2}'} d_1 \cdot d_2</MathBlock>
        <p className="mt-2 text-dark-400">
          This follows because the diagonals of a rhombus bisect each other at right angles.
        </p>
      </Theorem>

      <Example title="Rhombus Area">
        <p>A rhombus has diagonals of length 6 and 8.</p>
        <p className="mt-2 text-dark-300">
          <Math>\text{'{Area}'} = \frac{'{1}'}{'{2}'} \times 6 \times 8 = 24</Math> square units
        </p>
      </Example>

      {/* Connection to Determinants */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Connection to Determinants</h2>

      <Theorem title="Area via Determinant">
        <p>
          If a parallelogram has adjacent sides represented by vectors <Math>\mathbf{'{u}'} = (a, b)</Math> and <Math>\mathbf{'{v}'} = (c, d)</Math>, then:
        </p>
        <MathBlock>
          \text{'{Area}'} = |ad - bc| = \left| \det \begin{'{bmatrix}'} a & c \\ b & d \end{'{bmatrix}'} \right|
        </MathBlock>
      </Theorem>

      <Example title="Using Determinants">
        <p>
          Find the area of the parallelogram with vertices at <Math>O(0,0)</Math>, <Math>P(3,1)</Math>, <Math>Q(5,4)</Math>, <Math>R(2,3)</Math>.
        </p>
        <div className="mt-2 text-dark-300">
          <p>Vectors from origin: <Math>\overrightarrow{'{OP}'} = (3,1)</Math>, <Math>\overrightarrow{'{OR}'} = (2,3)</Math></p>
          <p className="mt-2">
            <Math>\text{'{Area}'} = |3 \cdot 3 - 1 \cdot 2| = |9 - 2| = 7</Math> square units
          </p>
        </div>
      </Example>

      <Callout type="info" title="Why Determinants Give Area">
        <p>
          The determinant measures how much a linear transformation scales areas.
          The parallelogram spanned by <Math>\mathbf{'{u}'}</Math> and <Math>\mathbf{'{v}'}</Math> is the image of the
          unit square under a linear map, so its area equals |det|.
        </p>
      </Callout>

      {/* Units */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Area Units</h2>

      <p className="text-dark-300 mb-4">
        Area is measured in <strong>square units</strong>. If lengths are in meters, area is in square meters (m²).
      </p>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h4 className="font-semibold text-dark-200 mb-3">Common Conversions</h4>
        <ul className="space-y-2 text-dark-300 font-mono text-sm">
          <li>1 m² = 10,000 cm²</li>
          <li>1 km² = 1,000,000 m²</li>
          <li>1 ft² = 144 in²</li>
          <li>1 acre = 43,560 ft²</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Rectangle:</strong> Area = base × height</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Parallelogram:</strong> Area = base × perpendicular height</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Key insight:</strong> Shearing preserves area but changes shape</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Rhombus:</strong> Area = ½ × d₁ × d₂ (using diagonals)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Determinant:</strong> |det| gives parallelogram area from vectors</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={20} sectionTitle="Area of Parallelograms" questions={section20Questions} />
    </LessonLayout>
  );
}
