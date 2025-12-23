import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section22Questions } from '../../data/quizzes';
import { PythagorasProofDemo, SquaresOnSidesDemo, ProofByRearrangement } from '../../components/visualizations';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        In Section 16, we stated the Pythagorean theorem. Now we prove it rigorously using
        the area concepts developed in the previous sections. This elegant proof shows how
        algebra and geometry work together.
      </p>

      {/* Statement */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Theorem Restated</h2>

      <Theorem title="Pythagorean Theorem">
        <p>
          In a right triangle with legs <Math>a</Math> and <Math>b</Math> and hypotenuse <Math>c</Math>:
        </p>
        <MathBlock>
          a^2 + b^2 = c^2
        </MathBlock>
      </Theorem>

      <Definition title="The Squares on the Sides">
        <p>
          Geometrically, the theorem states: the area of the square built on the hypotenuse
          equals the sum of the areas of the squares built on the two legs.
        </p>
      </Definition>

      <SquaresOnSidesDemo />

      {/* The Proof */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Proof by Area Rearrangement</h2>

      <p className="text-dark-300 mb-4">
        We prove the theorem by computing the area of a large square in two different ways.
      </p>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Construction</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Start with a right triangle having legs <Math>a</Math> and <Math>b</Math>, hypotenuse <Math>c</Math></li>
          <li>Make four copies of this triangle</li>
          <li>Arrange them inside a square of side <Math>(a + b)</Math></li>
          <li>The four triangles leave a square "hole" in the middle</li>
        </ol>
      </div>

      <ProofByRearrangement />

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Computing the Area Two Ways</h4>

        <div className="space-y-4 text-dark-300">
          <div>
            <span className="text-primary-400 font-semibold">Method 1:</span> The outer square has side <Math>(a + b)</Math>, so:
            <MathBlock>
              \text{'{Area}'} = (a + b)^2 = a^2 + 2ab + b^2
            </MathBlock>
          </div>

          <div>
            <span className="text-cyan-400 font-semibold">Method 2:</span> The outer square consists of:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Four triangles, each with area <Math>\frac{'{1}'}{'{2}'}ab</Math></li>
              <li>One inner square with side <Math>c</Math></li>
            </ul>
            <MathBlock>
              \text{'{Area}'} = 4 \cdot \frac{'{1}'}{'{2}'}ab + c^2 = 2ab + c^2
            </MathBlock>
          </div>
        </div>
      </div>

      <Theorem title="Completing the Proof">
        <p>Since both methods compute the same area:</p>
        <MathBlock>
          a^2 + 2ab + b^2 = 2ab + c^2
        </MathBlock>
        <p className="mt-2">Subtracting <Math>2ab</Math> from both sides:</p>
        <MathBlock>
          a^2 + b^2 = c^2
        </MathBlock>
      </Theorem>

      <PythagorasProofDemo />

      {/* Why the Inner Figure is a Square */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Why Is the Inner Figure a Square?</h2>

      <p className="text-dark-300 mb-4">
        A careful proof requires showing that the inner quadrilateral is actually a square,
        not just any four-sided figure.
      </p>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Proof that the Inner Figure is a Square</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            <strong>Equal sides:</strong> Each side of the inner figure is the hypotenuse <Math>c</Math> of
            one of the four congruent triangles
          </li>
          <li>
            <strong>Right angles:</strong> At each corner, two angles of the right triangles meet.
            Since the angles of a triangle sum to 180°, and one angle is 90°, the other two sum to 90°.
          </li>
          <li>
            <strong>Therefore:</strong> The inner figure has four equal sides and four right angles—it is a square
          </li>
        </ol>
      </div>

      <Example title="Angle Calculation at a Corner">
        <p>
          Let the acute angles of the right triangle be <Math>\alpha</Math> and <Math>\beta</Math>.
        </p>
        <p className="mt-2 text-dark-300">
          We know <Math>\alpha + \beta + 90° = 180°</Math>, so <Math>\alpha + \beta = 90°</Math>.
        </p>
        <p className="mt-2 text-dark-300">
          At each corner of the inner square, one angle <Math>\alpha</Math> and one angle <Math>\beta</Math> meet,
          leaving <Math>180° - (\alpha + \beta) = 180° - 90° = 90°</Math>.
        </p>
      </Example>

      <Callout type="info" title="The Key Insight">
        <p>
          The proof uses the fact that any angle can be "split" between the two acute angles
          of a right triangle. This is what makes the arrangement work.
        </p>
      </Callout>

      {/* Alternative Arrangement */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Alternative Proof</h2>

      <p className="text-dark-300 mb-4">
        There's another beautiful area-based proof that directly shows the areas of the
        squares on the legs equal the area of the square on the hypotenuse.
      </p>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">Proof by Two Arrangements</h4>
        <p className="text-dark-300 mb-3">
          Take four copies of the right triangle and arrange them in two different ways
          inside a square of side <Math>(a + b)</Math>:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Arrangement 1:</strong> The four triangles surround one square of side <Math>c</Math>
          </li>
          <li>
            <strong>Arrangement 2:</strong> The four triangles leave two squares, one of side <Math>a</Math> and one of side <Math>b</Math>
          </li>
        </ul>
        <p className="text-dark-300 mt-3">
          Since both arrangements use the same four triangles inside the same outer square,
          the remaining areas must be equal: <Math>c^2 = a^2 + b^2</Math>.
        </p>
      </div>

      {/* Converse */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Converse</h2>

      <Theorem title="Converse of the Pythagorean Theorem">
        <p>
          If a triangle has sides <Math>a</Math>, <Math>b</Math>, <Math>c</Math> satisfying <Math>a^2 + b^2 = c^2</Math>,
          then the triangle is a right triangle with the right angle opposite side <Math>c</Math>.
        </p>
      </Theorem>

      <Example title="Testing if a Triangle is Right">
        <p>Does a triangle with sides 5, 12, 13 have a right angle?</p>
        <div className="mt-2 text-dark-300">
          <p>Check: <Math>5^2 + 12^2 = 25 + 144 = 169 = 13^2</Math></p>
          <p className="mt-1">Yes! The triangle is a right triangle with legs 5 and 12.</p>
        </div>
      </Example>

      <Example title="Not a Right Triangle">
        <p>Does a triangle with sides 4, 5, 6 have a right angle?</p>
        <div className="mt-2 text-dark-300">
          <p>Check: <Math>4^2 + 5^2 = 16 + 25 = 41</Math></p>
          <p className="mt-1"><Math>6^2 = 36 \neq 41</Math></p>
          <p className="mt-1">No, this is not a right triangle.</p>
        </div>
      </Example>

      {/* Pythagorean Triples */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Pythagorean Triples</h2>

      <Definition title="Pythagorean Triple">
        <p>
          A <strong>Pythagorean triple</strong> is a set of three positive integers <Math>(a, b, c)</Math> such
          that <Math>a^2 + b^2 = c^2</Math>.
        </p>
      </Definition>

      <Example title="Common Pythagorean Triples">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {[
            { triple: '(3, 4, 5)', check: '9 + 16 = 25' },
            { triple: '(5, 12, 13)', check: '25 + 144 = 169' },
            { triple: '(8, 15, 17)', check: '64 + 225 = 289' },
            { triple: '(7, 24, 25)', check: '49 + 576 = 625' },
          ].map(({ triple, check }) => (
            <div key={triple} className="p-3 rounded-lg bg-dark-700/50 text-center">
              <div className="text-primary-400 font-mono">{triple}</div>
              <div className="text-xs text-dark-500 mt-1">{check}</div>
            </div>
          ))}
        </div>
      </Example>

      <Callout type="info" title="Generating Triples">
        <p>
          For any integers <Math>m {'>'} n {'>'} 0</Math>, the formulas <Math>a = m^2 - n^2</Math>,
          <Math>b = 2mn</Math>, <Math>c = m^2 + n^2</Math> produce a Pythagorean triple.
        </p>
      </Callout>

      <Example title="Generating a Triple">
        <p>Use <Math>m = 3</Math>, <Math>n = 2</Math>:</p>
        <div className="mt-2 text-dark-300">
          <p><Math>a = 3^2 - 2^2 = 9 - 4 = 5</Math></p>
          <p><Math>b = 2 \cdot 3 \cdot 2 = 12</Math></p>
          <p><Math>c = 3^2 + 2^2 = 9 + 4 = 13</Math></p>
          <p className="mt-2">This gives the triple (5, 12, 13).</p>
        </div>
      </Example>

      {/* Historical Note */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Historical Context</h2>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
        <h4 className="font-semibold text-dark-200 mb-3">A Theorem with Many Proofs</h4>
        <p className="text-dark-300">
          The Pythagorean theorem has been proved in hundreds of different ways throughout
          history. The proof we presented is attributed to the ancient Chinese (in the
          Zhoubi Suanjing) and also to the Indian mathematician Bhaskara II. President
          James Garfield even discovered his own proof in 1876!
        </p>
      </div>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Applications</h2>

      <Example title="Finding a Missing Side">
        <p>A right triangle has one leg of 6 and hypotenuse of 10. Find the other leg.</p>
        <div className="mt-2 text-dark-300">
          <p><Math>a^2 + 6^2 = 10^2</Math></p>
          <p><Math>a^2 + 36 = 100</Math></p>
          <p><Math>a^2 = 64</Math></p>
          <p><Math>a = 8</Math></p>
        </div>
      </Example>

      <Example title="Distance Problem">
        <p>
          A ladder 13 feet long leans against a wall. If the base is 5 feet from the wall,
          how high does the ladder reach?
        </p>
        <div className="mt-2 text-dark-300">
          <p>Let <Math>h</Math> be the height reached.</p>
          <p><Math>5^2 + h^2 = 13^2</Math></p>
          <p><Math>25 + h^2 = 169</Math></p>
          <p><Math>h^2 = 144</Math></p>
          <p><Math>h = 12</Math> feet</p>
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
            <span><strong>The proof:</strong> Four triangles in a square give <Math>a^2 + b^2 = c^2</Math></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Why it works:</strong> The acute angles sum to 90°, making the inner figure a square</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Converse:</strong> If <Math>a^2 + b^2 = c^2</Math>, the triangle is right</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>Pythagorean triples:</strong> Integer solutions like (3, 4, 5) and (5, 12, 13)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Many proofs exist:</strong> This is one of the most-proved theorems in mathematics</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={22} sectionTitle="The Pythagoras Theorem Proof" questions={section22Questions} />
    </LessonLayout>
  );
}
