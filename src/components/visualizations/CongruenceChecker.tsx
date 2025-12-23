import { useState } from 'react';

interface Triangle {
  a: number; // side opposite to A
  b: number; // side opposite to B
  c: number; // side opposite to C
}

export function CongruenceChecker() {
  const [triangle1, setTriangle1] = useState<Triangle>({ a: 3, b: 4, c: 5 });
  const [triangle2, setTriangle2] = useState<Triangle>({ a: 3, b: 4, c: 5 });

  // Check if triangles are valid (triangle inequality)
  const isValidTriangle = (t: Triangle): boolean => {
    return t.a + t.b > t.c && t.b + t.c > t.a && t.c + t.a > t.b && t.a > 0 && t.b > 0 && t.c > 0;
  };

  // Calculate angles using law of cosines
  const getAngles = (t: Triangle): { A: number; B: number; C: number } | null => {
    if (!isValidTriangle(t)) return null;
    const { a, b, c } = t;
    const A = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 180 / Math.PI;
    const B = Math.acos((a * a + c * c - b * b) / (2 * a * c)) * 180 / Math.PI;
    const C = 180 - A - B;
    return { A, B, C };
  };

  // Check congruence (sides match in some order)
  const checkCongruence = (): { isCongruent: boolean; correspondence: string | null } => {
    if (!isValidTriangle(triangle1) || !isValidTriangle(triangle2)) {
      return { isCongruent: false, correspondence: null };
    }

    const sides1 = [triangle1.a, triangle1.b, triangle1.c].sort((a, b) => a - b);
    const sides2 = [triangle2.a, triangle2.b, triangle2.c].sort((a, b) => a - b);

    const isCongruent =
      Math.abs(sides1[0] - sides2[0]) < 0.01 &&
      Math.abs(sides1[1] - sides2[1]) < 0.01 &&
      Math.abs(sides1[2] - sides2[2]) < 0.01;

    if (!isCongruent) return { isCongruent: false, correspondence: null };

    // Find correspondence
    // This is simplified - just show if they match
    return { isCongruent: true, correspondence: 'SSS' };
  };

  const { isCongruent, correspondence } = checkCongruence();
  const angles1 = getAngles(triangle1);
  const angles2 = getAngles(triangle2);
  const valid1 = isValidTriangle(triangle1);
  const valid2 = isValidTriangle(triangle2);

  // Draw triangle in SVG
  const drawTriangle = (t: Triangle, color: string, offsetX: number) => {
    if (!isValidTriangle(t)) return null;

    // Place C at origin, B on positive x-axis
    const scale = 25;
    const cx = offsetX + 80;
    const cy = 120;

    // C at origin
    const Cx = cx;
    const Cy = cy;

    // B along positive x from C, distance = a (side opposite A)
    const Bx = cx + t.a * scale;
    const By = cy;

    // A using law of cosines to find angle at C
    const cosC = (t.a * t.a + t.b * t.b - t.c * t.c) / (2 * t.a * t.b);
    const angleC = Math.acos(Math.max(-1, Math.min(1, cosC)));
    const Ax = cx + t.b * scale * Math.cos(angleC);
    const Ay = cy - t.b * scale * Math.sin(angleC);

    return (
      <g>
        <polygon
          points={`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`}
          fill={`${color}20`}
          stroke={color}
          strokeWidth={2}
        />
        <circle cx={Ax} cy={Ay} r={4} fill={color} />
        <circle cx={Bx} cy={By} r={4} fill={color} />
        <circle cx={Cx} cy={Cy} r={4} fill={color} />
        <text x={Ax - 10} y={Ay - 8} fill={color} fontSize={12}>A</text>
        <text x={Bx + 5} y={By + 15} fill={color} fontSize={12}>B</text>
        <text x={Cx - 15} y={Cy + 15} fill={color} fontSize={12}>C</text>
      </g>
    );
  };

  const presets = [
    { t1: { a: 3, b: 4, c: 5 }, t2: { a: 3, b: 4, c: 5 }, label: 'Same (3-4-5)' },
    { t1: { a: 3, b: 4, c: 5 }, t2: { a: 5, b: 3, c: 4 }, label: 'Reordered' },
    { t1: { a: 3, b: 4, c: 5 }, t2: { a: 6, b: 8, c: 10 }, label: 'Similar (2x)' },
    { t1: { a: 5, b: 5, c: 5 }, t2: { a: 5, b: 5, c: 5 }, label: 'Equilateral' },
  ];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Congruence Checker
      </h3>

      {/* Input panels */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Triangle 1 */}
        <div className={`p-3 rounded-xl border ${valid1 ? 'bg-primary-500/10 border-primary-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
          <div className="text-sm font-semibold text-primary-400 mb-2">Triangle 1</div>
          <div className="grid grid-cols-3 gap-2">
            {(['a', 'b', 'c'] as const).map((side) => (
              <div key={side}>
                <label className="block text-xs text-dark-500 mb-1">{side}</label>
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={triangle1[side]}
                  onChange={(e) => setTriangle1({ ...triangle1, [side]: Number(e.target.value) || 0.1 })}
                  className="w-full h-8 text-center font-mono text-sm bg-dark-700 border border-dark-600 rounded text-dark-200"
                />
              </div>
            ))}
          </div>
          {!valid1 && <div className="text-xs text-red-400 mt-1">Invalid triangle</div>}
        </div>

        {/* Triangle 2 */}
        <div className={`p-3 rounded-xl border ${valid2 ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
          <div className="text-sm font-semibold text-cyan-400 mb-2">Triangle 2</div>
          <div className="grid grid-cols-3 gap-2">
            {(['a', 'b', 'c'] as const).map((side) => (
              <div key={side}>
                <label className="block text-xs text-dark-500 mb-1">{side}</label>
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={triangle2[side]}
                  onChange={(e) => setTriangle2({ ...triangle2, [side]: Number(e.target.value) || 0.1 })}
                  className="w-full h-8 text-center font-mono text-sm bg-dark-700 border border-dark-600 rounded text-dark-200"
                />
              </div>
            ))}
          </div>
          {!valid2 && <div className="text-xs text-red-400 mt-1">Invalid triangle</div>}
        </div>
      </div>

      {/* Visualization */}
      <div className="flex justify-center mb-4">
        <svg width="400" height="160" className="bg-dark-800 rounded-xl">
          {drawTriangle(triangle1, '#3b82f6', 0)}
          {drawTriangle(triangle2, '#06b6d4', 200)}
        </svg>
      </div>

      {/* Result */}
      <div className={`p-4 rounded-xl border mb-4 text-center ${
        isCongruent
          ? 'bg-emerald-500/10 border-emerald-500/30'
          : 'bg-dark-800/50 border-dark-700'
      }`}>
        {valid1 && valid2 ? (
          <>
            <div className={`text-xl font-bold ${isCongruent ? 'text-emerald-400' : 'text-dark-400'}`}>
              {isCongruent ? '△₁ ≅ △₂' : '△₁ ≇ △₂'}
            </div>
            <div className="text-sm text-dark-400 mt-1">
              {isCongruent
                ? `Congruent by ${correspondence}!`
                : 'Not congruent (different side lengths)'}
            </div>
          </>
        ) : (
          <div className="text-dark-500">Enter valid triangles to check</div>
        )}
      </div>

      {/* Angle comparison */}
      {valid1 && valid2 && angles1 && angles2 && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 rounded-xl bg-dark-800/50 border border-dark-700">
            <div className="text-xs text-dark-500 mb-1">Triangle 1 angles</div>
            <div className="text-sm font-mono text-dark-300">
              A: {angles1.A.toFixed(1)}° B: {angles1.B.toFixed(1)}° C: {angles1.C.toFixed(1)}°
            </div>
          </div>
          <div className="p-3 rounded-xl bg-dark-800/50 border border-dark-700">
            <div className="text-xs text-dark-500 mb-1">Triangle 2 angles</div>
            <div className="text-sm font-mono text-dark-300">
              A: {angles2.A.toFixed(1)}° B: {angles2.B.toFixed(1)}° C: {angles2.C.toFixed(1)}°
            </div>
          </div>
        </div>
      )}

      {/* Presets */}
      <div className="flex flex-wrap justify-center gap-2">
        {presets.map((preset, i) => (
          <button
            key={i}
            onClick={() => {
              setTriangle1(preset.t1);
              setTriangle2(preset.t2);
            }}
            className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Congruent triangles have equal corresponding sides and angles.
      </p>
    </div>
  );
}
