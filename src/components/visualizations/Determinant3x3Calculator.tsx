import { useState } from 'react';

export function Determinant3x3Calculator() {
  const [matrix, setMatrix] = useState([
    [2, 1, 3],
    [0, 4, 1],
    [1, 2, 5],
  ]);

  const updateCell = (i: number, j: number, value: string) => {
    const num = parseFloat(value) || 0;
    const newMatrix = matrix.map((row, ri) =>
      row.map((cell, ci) => (ri === i && ci === j ? num : cell))
    );
    setMatrix(newMatrix);
  };

  // Calculate 2x2 determinant
  const det2x2 = (a: number, b: number, c: number, d: number) => a * d - b * c;

  // Calculate minors (2x2 determinants)
  const M11 = det2x2(matrix[1][1], matrix[1][2], matrix[2][1], matrix[2][2]);
  const M12 = det2x2(matrix[1][0], matrix[1][2], matrix[2][0], matrix[2][2]);
  const M13 = det2x2(matrix[1][0], matrix[1][1], matrix[2][0], matrix[2][1]);

  // Cofactors (with signs)
  const C11 = M11;      // +
  const C12 = -M12;     // -
  const C13 = M13;      // +

  // Determinant by expansion along first row
  const det = matrix[0][0] * C11 + matrix[0][1] * C12 + matrix[0][2] * C13;

  const [showSteps, setShowSteps] = useState(true);

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        3×3 Determinant Calculator
      </h3>

      {/* Matrix input */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-2 border-l-2 border-t-2 border-b-2 border-primary-500 rounded-l" />
          <div className="absolute right-0 top-0 bottom-0 w-2 border-r-2 border-t-2 border-b-2 border-primary-500 rounded-r" />

          <div className="px-4 py-3 grid grid-cols-3 gap-2">
            {matrix.map((row, i) =>
              row.map((cell, j) => (
                <input
                  key={`${i}-${j}`}
                  type="number"
                  value={cell}
                  onChange={(e) => updateCell(i, j, e.target.value)}
                  className={`w-14 h-12 text-center font-mono text-lg bg-dark-800 border rounded focus:outline-none ${
                    i === 0
                      ? 'border-primary-500/50 text-primary-400 focus:border-primary-500'
                      : 'border-dark-600 text-dark-200 focus:border-dark-500'
                  }`}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Toggle steps */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowSteps(!showSteps)}
          className="px-4 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
        >
          {showSteps ? 'Hide' : 'Show'} Steps
        </button>
      </div>

      {/* Expansion steps */}
      {showSteps && (
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4 space-y-4">
          <div className="text-dark-400 text-sm mb-2">Expansion along first row:</div>

          {/* First term */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-emerald-400">+</span>
            <span className="text-primary-400 font-mono">{matrix[0][0]}</span>
            <span className="text-dark-400">×</span>
            <span className="text-dark-300 font-mono text-sm">
              det([{matrix[1][1]},{matrix[1][2]}; {matrix[2][1]},{matrix[2][2]}])
            </span>
            <span className="text-dark-400">=</span>
            <span className="text-dark-300 font-mono">{matrix[0][0]} × {M11} = {matrix[0][0] * M11}</span>
          </div>

          {/* Second term */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-red-400">−</span>
            <span className="text-primary-400 font-mono">{matrix[0][1]}</span>
            <span className="text-dark-400">×</span>
            <span className="text-dark-300 font-mono text-sm">
              det([{matrix[1][0]},{matrix[1][2]}; {matrix[2][0]},{matrix[2][2]}])
            </span>
            <span className="text-dark-400">=</span>
            <span className="text-dark-300 font-mono">−{matrix[0][1]} × {M12} = {matrix[0][1] * C12}</span>
          </div>

          {/* Third term */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-emerald-400">+</span>
            <span className="text-primary-400 font-mono">{matrix[0][2]}</span>
            <span className="text-dark-400">×</span>
            <span className="text-dark-300 font-mono text-sm">
              det([{matrix[1][0]},{matrix[1][1]}; {matrix[2][0]},{matrix[2][1]}])
            </span>
            <span className="text-dark-400">=</span>
            <span className="text-dark-300 font-mono">{matrix[0][2]} × {M13} = {matrix[0][2] * M13}</span>
          </div>

          {/* Sum */}
          <div className="pt-2 border-t border-dark-700">
            <span className="text-dark-400">Sum: </span>
            <span className="font-mono text-dark-300">
              {matrix[0][0] * M11} + ({matrix[0][1] * C12}) + {matrix[0][2] * M13}
            </span>
            <span className="text-dark-400"> = </span>
            <span className="font-mono text-xl text-primary-400 font-bold">{det}</span>
          </div>
        </div>
      )}

      {/* Result */}
      <div className="p-6 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-4 text-center">
        <div className="text-dark-400 mb-2">Determinant</div>
        <div className="font-mono text-4xl text-primary-400 font-bold">{det}</div>
      </div>

      {/* Properties */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className={`p-3 rounded-xl border text-center ${det !== 0 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
          <div className="text-dark-500 text-xs mb-1">Invertible?</div>
          <div className={det !== 0 ? 'text-emerald-400' : 'text-red-400'}>
            {det !== 0 ? 'Yes' : 'No'}
          </div>
        </div>
        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
          <div className="text-dark-500 text-xs mb-1">Volume</div>
          <div className="text-cyan-400 font-mono">{Math.abs(det)}</div>
        </div>
      </div>

      {/* Presets */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { m: [[1,0,0],[0,1,0],[0,0,1]], label: 'Identity' },
          { m: [[1,2,3],[0,4,5],[0,0,6]], label: 'Upper triangular' },
          { m: [[1,2,3],[4,5,6],[7,8,9]], label: 'Singular' },
          { m: [[2,1,3],[0,4,1],[1,2,5]], label: 'det = 25' },
        ].map(({ m, label }) => (
          <button
            key={label}
            onClick={() => setMatrix(m)}
            className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Signs alternate: <span className="text-emerald-400">+</span><span className="text-red-400">−</span><span className="text-emerald-400">+</span> in first row
      </p>
    </div>
  );
}
