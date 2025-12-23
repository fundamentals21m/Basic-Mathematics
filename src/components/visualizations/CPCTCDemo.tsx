import { useState } from 'react';

type HighlightPart = 'none' | 'A-D' | 'B-E' | 'C-F' | 'AB-DE' | 'BC-EF' | 'CA-FD';

export function CPCTCDemo() {
  const [highlight, setHighlight] = useState<HighlightPart>('none');

  // Triangle 1 vertices (ABC)
  const A1 = { x: 80, y: 40 };
  const B1 = { x: 160, y: 120 };
  const C1 = { x: 40, y: 120 };

  // Triangle 2 vertices (DEF) - congruent, translated
  const D2 = { x: 280, y: 40 };
  const E2 = { x: 360, y: 120 };
  const F2 = { x: 240, y: 120 };

  const parts: { id: HighlightPart; label: string; type: 'angle' | 'side' }[] = [
    { id: 'A-D', label: '∠A ≅ ∠D', type: 'angle' },
    { id: 'B-E', label: '∠B ≅ ∠E', type: 'angle' },
    { id: 'C-F', label: '∠C ≅ ∠F', type: 'angle' },
    { id: 'AB-DE', label: 'AB ≅ DE', type: 'side' },
    { id: 'BC-EF', label: 'BC ≅ EF', type: 'side' },
    { id: 'CA-FD', label: 'CA ≅ FD', type: 'side' },
  ];

  const getColor = (partId: HighlightPart) => {
    if (highlight === 'none') return '#6b7280';
    if (highlight === partId) return '#10b981';
    return '#374151';
  };

  const isHighlighted = (partId: HighlightPart) => highlight === partId;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        CPCTC: Corresponding Parts
      </h3>

      <p className="text-dark-400 text-sm mb-4 text-center">
        If △ABC ≅ △DEF, then all corresponding parts are congruent:
      </p>

      {/* Visualization */}
      <div className="flex justify-center mb-4">
        <svg width="400" height="160" className="bg-dark-800 rounded-xl">
          {/* Triangle ABC */}
          <polygon
            points={`${A1.x},${A1.y} ${B1.x},${B1.y} ${C1.x},${C1.y}`}
            fill="rgba(59, 130, 246, 0.15)"
            stroke="#3b82f6"
            strokeWidth={2}
          />

          {/* Triangle DEF */}
          <polygon
            points={`${D2.x},${D2.y} ${E2.x},${E2.y} ${F2.x},${F2.y}`}
            fill="rgba(6, 182, 212, 0.15)"
            stroke="#06b6d4"
            strokeWidth={2}
          />

          {/* Highlighted sides */}
          {isHighlighted('AB-DE') && (
            <>
              <line x1={A1.x} y1={A1.y} x2={B1.x} y2={B1.y} stroke="#10b981" strokeWidth={4} />
              <line x1={D2.x} y1={D2.y} x2={E2.x} y2={E2.y} stroke="#10b981" strokeWidth={4} />
            </>
          )}
          {isHighlighted('BC-EF') && (
            <>
              <line x1={B1.x} y1={B1.y} x2={C1.x} y2={C1.y} stroke="#10b981" strokeWidth={4} />
              <line x1={E2.x} y1={E2.y} x2={F2.x} y2={F2.y} stroke="#10b981" strokeWidth={4} />
            </>
          )}
          {isHighlighted('CA-FD') && (
            <>
              <line x1={C1.x} y1={C1.y} x2={A1.x} y2={A1.y} stroke="#10b981" strokeWidth={4} />
              <line x1={F2.x} y1={F2.y} x2={D2.x} y2={D2.y} stroke="#10b981" strokeWidth={4} />
            </>
          )}

          {/* Highlighted angles */}
          {isHighlighted('A-D') && (
            <>
              <circle cx={A1.x} cy={A1.y} r={12} fill="none" stroke="#10b981" strokeWidth={3} />
              <circle cx={D2.x} cy={D2.y} r={12} fill="none" stroke="#10b981" strokeWidth={3} />
            </>
          )}
          {isHighlighted('B-E') && (
            <>
              <circle cx={B1.x} cy={B1.y} r={12} fill="none" stroke="#10b981" strokeWidth={3} />
              <circle cx={E2.x} cy={E2.y} r={12} fill="none" stroke="#10b981" strokeWidth={3} />
            </>
          )}
          {isHighlighted('C-F') && (
            <>
              <circle cx={C1.x} cy={C1.y} r={12} fill="none" stroke="#10b981" strokeWidth={3} />
              <circle cx={F2.x} cy={F2.y} r={12} fill="none" stroke="#10b981" strokeWidth={3} />
            </>
          )}

          {/* Vertex labels ABC */}
          <circle cx={A1.x} cy={A1.y} r={5} fill={getColor('A-D')} />
          <circle cx={B1.x} cy={B1.y} r={5} fill={getColor('B-E')} />
          <circle cx={C1.x} cy={C1.y} r={5} fill={getColor('C-F')} />
          <text x={A1.x} y={A1.y - 12} textAnchor="middle" fill="#3b82f6" fontSize={14} fontWeight="bold">A</text>
          <text x={B1.x + 12} y={B1.y + 5} fill="#3b82f6" fontSize={14} fontWeight="bold">B</text>
          <text x={C1.x - 12} y={C1.y + 5} fill="#3b82f6" fontSize={14} fontWeight="bold">C</text>

          {/* Vertex labels DEF */}
          <circle cx={D2.x} cy={D2.y} r={5} fill={getColor('A-D')} />
          <circle cx={E2.x} cy={E2.y} r={5} fill={getColor('B-E')} />
          <circle cx={F2.x} cy={F2.y} r={5} fill={getColor('C-F')} />
          <text x={D2.x} y={D2.y - 12} textAnchor="middle" fill="#06b6d4" fontSize={14} fontWeight="bold">D</text>
          <text x={E2.x + 12} y={E2.y + 5} fill="#06b6d4" fontSize={14} fontWeight="bold">E</text>
          <text x={F2.x - 12} y={F2.y + 5} fill="#06b6d4" fontSize={14} fontWeight="bold">F</text>

          {/* Triangle labels */}
          <text x={90} y={145} fill="#3b82f6" fontSize={12}>△ABC</text>
          <text x={280} y={145} fill="#06b6d4" fontSize={12}>△DEF</text>

          {/* Congruence symbol */}
          <text x={200} y={85} textAnchor="middle" fill="#10b981" fontSize={18} fontWeight="bold">≅</text>
        </svg>
      </div>

      {/* Corresponding parts buttons */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="text-xs text-dark-500 mb-3 text-center">Click to highlight corresponding parts:</div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="text-xs text-amber-400 mb-2 text-center">Angles</div>
            <div className="flex flex-col gap-1">
              {parts.filter(p => p.type === 'angle').map((part) => (
                <button
                  key={part.id}
                  onClick={() => setHighlight(highlight === part.id ? 'none' : part.id)}
                  className={`px-3 py-2 rounded text-sm transition-all ${
                    highlight === part.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                  }`}
                >
                  {part.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs text-blue-400 mb-2 text-center">Sides</div>
            <div className="flex flex-col gap-1">
              {parts.filter(p => p.type === 'side').map((part) => (
                <button
                  key={part.id}
                  onClick={() => setHighlight(highlight === part.id ? 'none' : part.id)}
                  className={`px-3 py-2 rounded text-sm transition-all ${
                    highlight === part.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                  }`}
                >
                  {part.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
        <div className="font-semibold text-emerald-400 mb-1">CPCTC</div>
        <div className="text-sm text-dark-300">
          Once triangles are proven congruent, <strong>all</strong> corresponding parts
          are automatically congruent. This is the key tool for proving equal lengths and angles.
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        A↔D, B↔E, C↔F are corresponding vertices in △ABC ≅ △DEF.
      </p>
    </div>
  );
}
