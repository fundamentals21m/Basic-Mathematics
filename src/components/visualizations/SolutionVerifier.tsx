import { useState } from 'react';

export function SolutionVerifier() {
  // System coefficients (fixed example)
  const [system, setSystem] = useState({
    a1: 1, b1: 1, c1: 1, d1: 6,
    a2: 2, b2: -1, c2: 1, d2: 3,
    a3: 1, b3: 2, c3: -1, d3: 2,
  });

  // User's proposed solution
  const [x, setX] = useState(1);
  const [y, setY] = useState(2);
  const [z, setZ] = useState(3);

  // Calculate LHS for each equation
  const lhs1 = system.a1 * x + system.b1 * y + system.c1 * z;
  const lhs2 = system.a2 * x + system.b2 * y + system.c2 * z;
  const lhs3 = system.a3 * x + system.b3 * y + system.c3 * z;

  const check1 = lhs1 === system.d1;
  const check2 = lhs2 === system.d2;
  const check3 = lhs3 === system.d3;

  const allCorrect = check1 && check2 && check3;

  const presets = [
    { name: 'Simple', a1: 1, b1: 1, c1: 1, d1: 6, a2: 2, b2: -1, c2: 1, d2: 3, a3: 1, b3: 2, c3: -1, d3: 2, sol: { x: 1, y: 2, z: 3 } },
    { name: 'Harder', a1: 2, b1: 1, c1: -1, d1: 1, a2: 1, b2: -1, c2: 2, d2: 5, a3: 3, b3: 2, c3: 1, d3: 8, sol: { x: 1, y: 2, z: 3 } },
    { name: 'Fractions', a1: 1, b1: 2, c1: 3, d1: 14, a2: 2, b2: 1, c2: 1, d2: 7, a3: 3, b3: 3, c3: 2, d3: 14, sol: { x: 1, y: 2, z: 3 } },
  ];

  const formatCoeff = (coeff: number, isFirst: boolean) => {
    if (coeff === 0) return '';
    if (coeff === 1 && !isFirst) return '+';
    if (coeff === -1) return '-';
    if (coeff > 0 && !isFirst) return `+${coeff}`;
    return coeff.toString();
  };

  const EquationRow = ({
    label,
    a, b, c, d,
    lhs,
    isCorrect,
    color,
  }: {
    label: string;
    a: number; b: number; c: number; d: number;
    lhs: number;
    isCorrect: boolean;
    color: string;
  }) => (
    <div className={`p-4 rounded-lg border ${
      isCorrect
        ? 'bg-emerald-500/10 border-emerald-500/50'
        : 'bg-red-500/10 border-red-500/50'
    }`}>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="font-mono text-sm">
          <span className={`text-${color}-400`}>{label}:</span>
          <span className="text-dark-300 ml-2">
            {a !== 0 && <>{a}x</>}
            {b !== 0 && <>{formatCoeff(b, a === 0)}y</>}
            {c !== 0 && <>{formatCoeff(c, a === 0 && b === 0)}z</>}
            {' = '}{d}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="font-mono text-sm">
            <span className="text-dark-500">LHS = </span>
            <span className={isCorrect ? 'text-emerald-400' : 'text-red-400'}>{lhs}</span>
          </div>
          <div className={`text-lg ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
            {isCorrect ? '✓' : '✗'}
          </div>
        </div>
      </div>
      {!isCorrect && (
        <div className="text-red-400 text-xs mt-1">
          Off by {Math.abs(lhs - d)} (expected {d}, got {lhs})
        </div>
      )}
    </div>
  );

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Solution Verifier
      </h3>

      <p className="text-dark-400 text-sm text-center mb-4">
        Enter a proposed solution and check if it satisfies all three equations.
      </p>

      {/* System display */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="text-xs text-dark-500 text-center mb-2">Current System:</div>
        <div className="font-mono text-sm text-center space-y-1">
          <div className="text-cyan-400">
            {system.a1}x + {system.b1}y + {system.c1}z = {system.d1}
          </div>
          <div className="text-emerald-400">
            {system.a2}x {system.b2 >= 0 ? '+' : ''} {system.b2}y + {system.c2}z = {system.d2}
          </div>
          <div className="text-purple-400">
            {system.a3}x + {system.b3}y {system.c3 >= 0 ? '+' : ''} {system.c3}z = {system.d3}
          </div>
        </div>
      </div>

      {/* Solution input */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">x =</label>
          <input
            type="number"
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 text-primary-400 text-center font-mono text-lg"
          />
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">y =</label>
          <input
            type="number"
            value={y}
            onChange={(e) => setY(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 text-primary-400 text-center font-mono text-lg"
          />
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">z =</label>
          <input
            type="number"
            value={z}
            onChange={(e) => setZ(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 text-primary-400 text-center font-mono text-lg"
          />
        </div>
      </div>

      {/* Verification results */}
      <div className="space-y-3 mb-4">
        <EquationRow
          label="Eq. 1"
          a={system.a1} b={system.b1} c={system.c1} d={system.d1}
          lhs={lhs1}
          isCorrect={check1}
          color="cyan"
        />
        <EquationRow
          label="Eq. 2"
          a={system.a2} b={system.b2} c={system.c2} d={system.d2}
          lhs={lhs2}
          isCorrect={check2}
          color="emerald"
        />
        <EquationRow
          label="Eq. 3"
          a={system.a3} b={system.b3} c={system.c3} d={system.d3}
          lhs={lhs3}
          isCorrect={check3}
          color="purple"
        />
      </div>

      {/* Overall result */}
      <div className={`p-4 rounded-xl border text-center ${
        allCorrect
          ? 'bg-emerald-500/20 border-emerald-500/50'
          : 'bg-red-500/20 border-red-500/50'
      }`}>
        {allCorrect ? (
          <div className="text-emerald-400 font-semibold">
            ✓ Correct! ({x}, {y}, {z}) is the solution.
          </div>
        ) : (
          <div className="text-red-400 font-semibold">
            ✗ Not correct. Check your values and try again.
          </div>
        )}
      </div>

      {/* Preset systems */}
      <div className="mt-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 mb-2">Try different systems:</div>
        <div className="flex flex-wrap gap-2 justify-center">
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSystem({
                  a1: preset.a1, b1: preset.b1, c1: preset.c1, d1: preset.d1,
                  a2: preset.a2, b2: preset.b2, c2: preset.c2, d2: preset.d2,
                  a3: preset.a3, b3: preset.b3, c3: preset.c3, d3: preset.d3,
                });
                setX(0); setY(0); setZ(0); // Reset solution
              }}
              className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Always verify your solution by substituting into all original equations.
      </p>
    </div>
  );
}
