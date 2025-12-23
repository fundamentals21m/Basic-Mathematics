import { useState } from 'react';

type Criterion = 'SSS' | 'SAS' | 'ASA' | 'AAS' | 'AAA' | 'SSA';

interface CriterionInfo {
  name: string;
  description: string;
  provesCongruence: boolean;
  reason: string;
  parts: string[];
}

const criteriaInfo: Record<Criterion, CriterionInfo> = {
  SSS: {
    name: 'Side-Side-Side',
    description: 'Three pairs of congruent sides',
    provesCongruence: true,
    reason: 'If all three sides match, the triangle is uniquely determined.',
    parts: ['side a', 'side b', 'side c'],
  },
  SAS: {
    name: 'Side-Angle-Side',
    description: 'Two sides and the included angle',
    provesCongruence: true,
    reason: 'Two sides and the angle between them uniquely determine the triangle.',
    parts: ['side a', 'angle C', 'side b'],
  },
  ASA: {
    name: 'Angle-Side-Angle',
    description: 'Two angles and the included side',
    provesCongruence: true,
    reason: 'Two angles fix the third, and the side between them sets the scale.',
    parts: ['angle A', 'side c', 'angle B'],
  },
  AAS: {
    name: 'Angle-Angle-Side',
    description: 'Two angles and a non-included side',
    provesCongruence: true,
    reason: 'Two angles fix all angles; the side sets the scale.',
    parts: ['angle A', 'angle B', 'side a'],
  },
  AAA: {
    name: 'Angle-Angle-Angle',
    description: 'Three pairs of congruent angles',
    provesCongruence: false,
    reason: 'Same angles only means similar, not congruent. Size can vary!',
    parts: ['angle A', 'angle B', 'angle C'],
  },
  SSA: {
    name: 'Side-Side-Angle',
    description: 'Two sides and a non-included angle',
    provesCongruence: false,
    reason: 'Ambiguous case: two different triangles can satisfy these conditions.',
    parts: ['side a', 'side b', 'angle A'],
  },
};

export function TriangleCriteriaExplorer() {
  const [selected, setSelected] = useState<Criterion>('SSS');
  const info = criteriaInfo[selected];

  // Draw a triangle with highlighted parts
  const drawTriangle = (criterion: Criterion) => {
    const cx = 150;
    const cy = 130;
    const scale = 50;

    // Triangle vertices
    const A = { x: cx, y: cy - scale * 1.2 };
    const B = { x: cx + scale, y: cy + scale * 0.6 };
    const C = { x: cx - scale, y: cy + scale * 0.6 };

    // Midpoints for side labels
    const midAB = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
    const midBC = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
    const midCA = { x: (C.x + A.x) / 2, y: (C.y + A.y) / 2 };

    // Determine what to highlight based on criterion
    const highlightSides: Record<Criterion, string[]> = {
      SSS: ['a', 'b', 'c'],
      SAS: ['a', 'b'],
      ASA: ['c'],
      AAS: ['a'],
      AAA: [],
      SSA: ['a', 'b'],
    };

    const highlightAngles: Record<Criterion, string[]> = {
      SSS: [],
      SAS: ['C'],
      ASA: ['A', 'B'],
      AAS: ['A', 'B'],
      AAA: ['A', 'B', 'C'],
      SSA: ['A'],
    };

    const sides = highlightSides[criterion];
    const angles = highlightAngles[criterion];

    // Colors
    const sideColor = '#3b82f6';
    const angleColor = '#f59e0b';
    const dimColor = '#4b5563';

    return (
      <svg width="300" height="180" className="mx-auto">
        {/* Triangle outline */}
        <polygon
          points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
          fill="rgba(59, 130, 246, 0.1)"
          stroke={dimColor}
          strokeWidth={1}
        />

        {/* Side c (A to B) */}
        <line
          x1={A.x} y1={A.y} x2={B.x} y2={B.y}
          stroke={sides.includes('c') ? sideColor : dimColor}
          strokeWidth={sides.includes('c') ? 3 : 1}
        />
        <text x={midAB.x + 8} y={midAB.y - 5} fill={sides.includes('c') ? sideColor : dimColor} fontSize={12}>c</text>

        {/* Side a (B to C) */}
        <line
          x1={B.x} y1={B.y} x2={C.x} y2={C.y}
          stroke={sides.includes('a') ? sideColor : dimColor}
          strokeWidth={sides.includes('a') ? 3 : 1}
        />
        <text x={midBC.x} y={midBC.y + 18} fill={sides.includes('a') ? sideColor : dimColor} fontSize={12}>a</text>

        {/* Side b (C to A) */}
        <line
          x1={C.x} y1={C.y} x2={A.x} y2={A.y}
          stroke={sides.includes('b') ? sideColor : dimColor}
          strokeWidth={sides.includes('b') ? 3 : 1}
        />
        <text x={midCA.x - 15} y={midCA.y - 5} fill={sides.includes('b') ? sideColor : dimColor} fontSize={12}>b</text>

        {/* Angle arcs */}
        {/* Angle A (at vertex A) */}
        {angles.includes('A') && (
          <path
            d={`M ${A.x - 12} ${A.y + 15} A 15 15 0 0 1 ${A.x + 12} ${A.y + 15}`}
            fill="none"
            stroke={angleColor}
            strokeWidth={2}
          />
        )}

        {/* Angle B (at vertex B) */}
        {angles.includes('B') && (
          <path
            d={`M ${B.x - 15} ${B.y - 8} A 15 15 0 0 0 ${B.x - 5} ${B.y + 12}`}
            fill="none"
            stroke={angleColor}
            strokeWidth={2}
          />
        )}

        {/* Angle C (at vertex C) */}
        {angles.includes('C') && (
          <path
            d={`M ${C.x + 5} ${C.y + 12} A 15 15 0 0 0 ${C.x + 15} ${C.y - 8}`}
            fill="none"
            stroke={angleColor}
            strokeWidth={2}
          />
        )}

        {/* Vertices */}
        <circle cx={A.x} cy={A.y} r={4} fill={angles.includes('A') ? angleColor : '#6b7280'} />
        <circle cx={B.x} cy={B.y} r={4} fill={angles.includes('B') ? angleColor : '#6b7280'} />
        <circle cx={C.x} cy={C.y} r={4} fill={angles.includes('C') ? angleColor : '#6b7280'} />

        {/* Vertex labels */}
        <text x={A.x} y={A.y - 12} textAnchor="middle" fill={angles.includes('A') ? angleColor : '#9ca3af'} fontSize={14} fontWeight="bold">A</text>
        <text x={B.x + 12} y={B.y + 5} fill={angles.includes('B') ? angleColor : '#9ca3af'} fontSize={14} fontWeight="bold">B</text>
        <text x={C.x - 12} y={C.y + 5} fill={angles.includes('C') ? angleColor : '#9ca3af'} fontSize={14} fontWeight="bold">C</text>
      </svg>
    );
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Triangle Congruence Criteria
      </h3>

      {/* Criterion selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {(Object.keys(criteriaInfo) as Criterion[]).map((criterion) => (
          <button
            key={criterion}
            onClick={() => setSelected(criterion)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              selected === criterion
                ? criteriaInfo[criterion].provesCongruence
                  ? 'bg-emerald-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {criterion}
          </button>
        ))}
      </div>

      {/* Triangle visualization */}
      <div className="bg-dark-800 rounded-xl p-4 mb-4">
        {drawTriangle(selected)}
      </div>

      {/* Info panel */}
      <div className={`p-4 rounded-xl border mb-4 ${
        info.provesCongruence
          ? 'bg-emerald-500/10 border-emerald-500/30'
          : 'bg-red-500/10 border-red-500/30'
      }`}>
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xl font-bold ${info.provesCongruence ? 'text-emerald-400' : 'text-red-400'}`}>
            {selected}
          </span>
          <span className="text-dark-400">—</span>
          <span className="text-dark-300">{info.name}</span>
        </div>

        <p className="text-dark-400 text-sm mb-3">{info.description}</p>

        <div className={`inline-block px-3 py-1 rounded-full text-sm ${
          info.provesCongruence
            ? 'bg-emerald-500/20 text-emerald-400'
            : 'bg-red-500/20 text-red-400'
        }`}>
          {info.provesCongruence ? '✓ Proves Congruence' : '✗ Does NOT Prove Congruence'}
        </div>

        <p className="text-dark-300 text-sm mt-3">{info.reason}</p>
      </div>

      {/* Known parts */}
      <div className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="text-xs text-dark-500 mb-2">Known congruent parts:</div>
        <div className="flex flex-wrap gap-2">
          {info.parts.map((part, i) => (
            <span
              key={i}
              className={`px-2 py-1 rounded text-xs ${
                part.startsWith('side')
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-amber-500/20 text-amber-400'
              }`}
            >
              {part}
            </span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-1 bg-blue-500 rounded" />
          <span className="text-dark-400">Side</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-2 border-amber-500" />
          <span className="text-dark-400">Angle</span>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        SSS, SAS, ASA, and AAS prove congruence. AAA and SSA do not!
      </p>
    </div>
  );
}
