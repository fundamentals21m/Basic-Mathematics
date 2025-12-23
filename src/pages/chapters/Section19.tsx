import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Example, Theorem } from '../../components/common/ContentBlocks';
import { Math, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';
import { SectionQuiz } from '../../components/quiz/SectionQuiz';
import { section19Questions } from '../../data/quizzes';
import { CongruenceChecker, TriangleCriteriaExplorer, CPCTCDemo } from '../../components/visualizations';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      {/* Introduction */}
      <p className="text-lg text-dark-300 leading-relaxed">
        Two geometric figures are <strong>congruent</strong> if one can be transformed into
        the other by an isometry. Congruence captures the intuitive idea that two shapes
        are "the same" in terms of size and shape, even if they're in different positions or orientations.
      </p>

      {/* Definition of Congruence */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">What is Congruence?</h2>

      <Definition title="Congruence">
        <p>
          Two figures <Math>F_1</Math> and <Math>F_2</Math> are <strong>congruent</strong>,
          written <Math>F_1 \cong F_2</Math>, if there exists an isometry <Math>T</Math> such that:
        </p>
        <MathBlock>
          T(F_1) = F_2
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Since isometries preserve distances and angles, congruent figures have exactly the same size and shape.
        </p>
      </Definition>

      <Example title="Congruent Triangles">
        <p>
          Consider triangle <Math>ABC</Math> with vertices <Math>A(0,0)</Math>, <Math>B(3,0)</Math>, <Math>C(0,4)</Math>.
        </p>
        <p className="mt-2 text-dark-300">
          Reflect across the y-axis to get triangle <Math>A'B'C'</Math> with
          <Math>A'(0,0)</Math>, <Math>B'(-3,0)</Math>, <Math>C'(0,4)</Math>.
        </p>
        <p className="mt-2 text-dark-300">
          These triangles are congruent: the reflection is an isometry that maps one to the other.
        </p>
      </Example>

      <Callout type="info" title="Key Insight">
        <p>
          Congruence is defined through isometries. This means we don't need to check every
          measurement—if we can find one isometry mapping one figure to another, they're congruent.
        </p>
      </Callout>

      {/* Properties of Congruence */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Properties of Congruence</h2>

      <Theorem title="Congruence is an Equivalence Relation">
        <p>Congruence satisfies three key properties:</p>
        <ul className="mt-2 space-y-2 text-dark-300">
          <li><strong>Reflexive:</strong> <Math>F \cong F</Math> (use identity isometry)</li>
          <li><strong>Symmetric:</strong> If <Math>F_1 \cong F_2</Math>, then <Math>F_2 \cong F_1</Math> (use inverse isometry)</li>
          <li><strong>Transitive:</strong> If <Math>F_1 \cong F_2</Math> and <Math>F_2 \cong F_3</Math>, then <Math>F_1 \cong F_3</Math> (compose isometries)</li>
        </ul>
      </Theorem>

      <Theorem title="Congruent Figures Have Equal Measurements">
        <p>If <Math>F_1 \cong F_2</Math>, then:</p>
        <ul className="mt-2 space-y-1 text-dark-300">
          <li>Corresponding lengths are equal</li>
          <li>Corresponding angles are equal</li>
          <li>Corresponding areas are equal</li>
          <li>Corresponding perimeters are equal</li>
        </ul>
      </Theorem>

      <CongruenceChecker />

      {/* Congruent Segments and Angles */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Congruent Segments and Angles</h2>

      <Definition title="Congruent Segments">
        <p>
          Two line segments are congruent if and only if they have the same length:
        </p>
        <MathBlock>
          \overline{'{AB}'} \cong \overline{'{CD}'} \iff |AB| = |CD|
        </MathBlock>
      </Definition>

      <Definition title="Congruent Angles">
        <p>
          Two angles are congruent if and only if they have the same measure:
        </p>
        <MathBlock>
          \angle ABC \cong \angle DEF \iff m\angle ABC = m\angle DEF
        </MathBlock>
      </Definition>

      <Example title="Using Congruent Segments">
        <p>
          If <Math>\overline{'{AB}'} \cong \overline{'{CD}'}</Math> and <Math>|AB| = 5</Math>, then <Math>|CD| = 5</Math>.
        </p>
        <p className="mt-2 text-dark-300">
          If <Math>\angle P \cong \angle Q</Math> and <Math>m\angle P = 60°</Math>, then <Math>m\angle Q = 60°</Math>.
        </p>
      </Example>

      {/* Triangle Congruence Criteria */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Triangle Congruence Criteria</h2>

      <p className="text-dark-300 mb-4">
        For triangles, we don't need to verify all six measurements (three sides and three angles).
        Certain combinations guarantee congruence.
      </p>

      <Theorem title="SSS (Side-Side-Side)">
        <p>
          If three sides of one triangle are congruent to three sides of another triangle,
          the triangles are congruent.
        </p>
        <MathBlock>
          |AB| = |DE|, \; |BC| = |EF|, \; |CA| = |FD| \implies \triangle ABC \cong \triangle DEF
        </MathBlock>
      </Theorem>

      <Theorem title="SAS (Side-Angle-Side)">
        <p>
          If two sides and the <em>included angle</em> of one triangle are congruent to
          two sides and the included angle of another, the triangles are congruent.
        </p>
        <MathBlock>
          |AB| = |DE|, \; \angle B = \angle E, \; |BC| = |EF| \implies \triangle ABC \cong \triangle DEF
        </MathBlock>
      </Theorem>

      <Theorem title="ASA (Angle-Side-Angle)">
        <p>
          If two angles and the <em>included side</em> of one triangle are congruent to
          two angles and the included side of another, the triangles are congruent.
        </p>
        <MathBlock>
          \angle A = \angle D, \; |AB| = |DE|, \; \angle B = \angle E \implies \triangle ABC \cong \triangle DEF
        </MathBlock>
      </Theorem>

      <Theorem title="AAS (Angle-Angle-Side)">
        <p>
          If two angles and a <em>non-included side</em> of one triangle are congruent to
          the corresponding parts of another, the triangles are congruent.
        </p>
        <MathBlock>
          \angle A = \angle D, \; \angle B = \angle E, \; |BC| = |EF| \implies \triangle ABC \cong \triangle DEF
        </MathBlock>
      </Theorem>

      <TriangleCriteriaExplorer />

      <Callout type="warning" title="AAA Does NOT Prove Congruence">
        <p>
          If three angles of one triangle equal three angles of another (AAA), the triangles
          are <strong>similar</strong> but not necessarily congruent. They could have
          different sizes.
        </p>
      </Callout>

      <Callout type="warning" title="SSA is Ambiguous">
        <p>
          Two sides and a non-included angle (SSA) does <strong>not</strong> guarantee
          congruence. This is the "ambiguous case" where two different triangles
          might be possible.
        </p>
      </Callout>

      {/* CPCTC */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">CPCTC</h2>

      <Definition title="CPCTC">
        <p>
          <strong>CPCTC</strong> stands for "Corresponding Parts of Congruent Triangles are Congruent."
        </p>
        <p className="mt-2 text-dark-400">
          Once you prove two triangles are congruent, you can conclude that all their
          corresponding sides and angles are congruent.
        </p>
      </Definition>

      <Example title="Using CPCTC">
        <p>Given: In quadrilateral ABCD, diagonal AC bisects both angles A and C.</p>
        <p className="mt-2 text-dark-300">Prove: <Math>AB = AD</Math></p>
        <div className="mt-3 space-y-2 text-dark-300 text-sm">
          <p>1. <Math>\angle BAC = \angle DAC</Math> (AC bisects angle A)</p>
          <p>2. <Math>\angle BCA = \angle DCA</Math> (AC bisects angle C)</p>
          <p>3. <Math>AC = AC</Math> (reflexive property)</p>
          <p>4. <Math>\triangle ABC \cong \triangle ADC</Math> (ASA)</p>
          <p>5. <Math>AB = AD</Math> (CPCTC)</p>
        </div>
      </Example>

      <CPCTCDemo />

      {/* Congruence of Other Figures */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Congruence of Other Figures</h2>

      <Theorem title="Congruent Circles">
        <p>Two circles are congruent if and only if they have the same radius:</p>
        <MathBlock>
          \text{'{Circle }'} C_1 \cong \text{'{Circle }'} C_2 \iff r_1 = r_2
        </MathBlock>
      </Theorem>

      <Theorem title="Congruent Polygons">
        <p>
          Two polygons are congruent if and only if there is a one-to-one correspondence
          between their vertices such that all corresponding sides and angles are congruent.
        </p>
      </Theorem>

      <Example title="Congruent Rectangles">
        <p>
          Two rectangles are congruent if they have the same length and width.
        </p>
        <p className="mt-2 text-dark-300">
          A 3×5 rectangle is congruent to any other 3×5 rectangle, regardless of position or orientation.
        </p>
      </Example>

      {/* Isometry Types and Congruence */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Isometry Types and Congruence</h2>

      <p className="text-dark-300 mb-4">
        The type of isometry relating two congruent figures tells us about their orientation:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <h4 className="font-semibold text-emerald-400 mb-2">Direct Congruence</h4>
          <p className="text-sm text-dark-300">
            Related by translation or rotation. Figures have the <strong>same orientation</strong>
            (like a moved copy).
          </p>
        </div>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
          <h4 className="font-semibold text-amber-400 mb-2">Opposite Congruence</h4>
          <p className="text-sm text-dark-300">
            Related by reflection or glide reflection. Figures have <strong>opposite orientation</strong>
            (like a mirror image).
          </p>
        </div>
      </div>

      <Example title="Direct vs. Opposite Congruence">
        <p>
          Your left hand and right hand are <strong>opposite congruent</strong>—they're mirror
          images. No matter how you rotate or translate one, you can't make it look exactly
          like the other without a reflection.
        </p>
        <p className="mt-2 text-dark-300">
          Two copies of the same photograph are <strong>directly congruent</strong>—you can
          slide one to match the other.
        </p>
      </Example>

      {/* The Fundamental Theorem */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">The Fundamental Theorem</h2>

      <Theorem title="Unique Isometry for Triangles">
        <p>
          Given two congruent triangles <Math>\triangle ABC \cong \triangle DEF</Math>,
          there is exactly one isometry mapping:
        </p>
        <MathBlock>
          A \mapsto D, \quad B \mapsto E, \quad C \mapsto F
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This isometry is determined by three non-collinear point correspondences.
        </p>
      </Theorem>

      <Callout type="info" title="Why This Matters">
        <p>
          This theorem shows that congruent triangles are essentially "the same" triangle,
          just in a different position. The correspondence between vertices completely
          determines how they're related.
        </p>
      </Callout>

      {/* Applications */}
      <h2 className="text-2xl font-bold text-dark-100 mt-12 mb-6">Applications of Congruence</h2>

      <Example title="Proving Equal Lengths">
        <p>
          To prove two segments are equal, find two triangles containing them and
          prove the triangles congruent. Then use CPCTC.
        </p>
      </Example>

      <Example title="Proving Parallel Lines">
        <p>
          If corresponding angles formed by a transversal are congruent, the lines are parallel.
          Congruent triangles can help establish these angle relationships.
        </p>
      </Example>

      <Example title="Construction Problems">
        <p>
          Geometric constructions rely on creating congruent triangles. For example, bisecting
          an angle creates two congruent triangles by SAS.
        </p>
      </Example>

      {/* Summary */}
      <div className="mt-12 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
        <h3 className="text-xl font-semibold text-dark-100 mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-dark-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">1</span>
            </span>
            <span><strong>Congruence:</strong> Figures related by an isometry (<Math>\cong</Math>)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">2</span>
            </span>
            <span><strong>Triangle criteria:</strong> SSS, SAS, ASA, AAS prove congruence</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">3</span>
            </span>
            <span><strong>Not sufficient:</strong> AAA (similar only) and SSA (ambiguous)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">4</span>
            </span>
            <span><strong>CPCTC:</strong> Corresponding parts of congruent triangles are congruent</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-400 text-sm font-bold">5</span>
            </span>
            <span><strong>Orientation:</strong> Direct (same) or opposite (mirror) congruence</span>
          </li>
        </ul>
      </div>

      {/* Section Quiz */}
      <SectionQuiz sectionId={19} sectionTitle="Congruence" questions={section19Questions} />
    </LessonLayout>
  );
}
