import { useState } from 'react';

export function MatrixBuilder() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [matrix, setMatrix] = useState<number[][]>([
    [1, 2],
    [3, 4],
  ]);

  const updateDimensions = (newRows: number, newCols: number) => {
    const newMatrix: number[][] = [];
    for (let i = 0; i < newRows; i++) {
      newMatrix[i] = [];
      for (let j = 0; j < newCols; j++) {
        newMatrix[i][j] = matrix[i]?.[j] ?? 0;
      }
    }
    setRows(newRows);
    setCols(newCols);
    setMatrix(newMatrix);
  };

  const updateCell = (i: number, j: number, value: string) => {
    const num = parseFloat(value) || 0;
    const newMatrix = matrix.map((row, ri) =>
      row.map((cell, ci) => (ri === i && ci === j ? num : cell))
    );
    setMatrix(newMatrix);
  };

  const transpose = () => {
    const transposed: number[][] = [];
    for (let j = 0; j < cols; j++) {
      transposed[j] = [];
      for (let i = 0; i < rows; i++) {
        transposed[j][i] = matrix[i][j];
      }
    }
    setMatrix(transposed);
    setRows(cols);
    setCols(rows);
  };

  const scalarMultiply = (k: number) => {
    setMatrix(matrix.map(row => row.map(cell => cell * k)));
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Matrix Builder
      </h3>

      {/* Dimension controls */}
      <div className="flex justify-center gap-6 mb-6">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">Rows</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => rows > 1 && updateDimensions(rows - 1, cols)}
              className="w-8 h-8 rounded bg-dark-700 hover:bg-dark-600 text-dark-300"
            >
              −
            </button>
            <span className="w-8 text-center font-mono text-lg text-primary-400">{rows}</span>
            <button
              onClick={() => rows < 4 && updateDimensions(rows + 1, cols)}
              className="w-8 h-8 rounded bg-dark-700 hover:bg-dark-600 text-dark-300"
            >
              +
            </button>
          </div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">Columns</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => cols > 1 && updateDimensions(rows, cols - 1)}
              className="w-8 h-8 rounded bg-dark-700 hover:bg-dark-600 text-dark-300"
            >
              −
            </button>
            <span className="w-8 text-center font-mono text-lg text-cyan-400">{cols}</span>
            <button
              onClick={() => cols < 4 && updateDimensions(rows, cols + 1)}
              className="w-8 h-8 rounded bg-dark-700 hover:bg-dark-600 text-dark-300"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Matrix input */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          {/* Left bracket */}
          <div className="absolute left-0 top-0 bottom-0 w-2 border-l-2 border-t-2 border-b-2 border-primary-500 rounded-l" />

          <div className="px-4 py-2">
            <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
              {matrix.map((row, i) =>
                row.map((cell, j) => (
                  <input
                    key={`${i}-${j}`}
                    type="number"
                    value={cell}
                    onChange={(e) => updateCell(i, j, e.target.value)}
                    className="w-14 h-10 text-center font-mono bg-dark-800 border border-dark-600 rounded text-dark-200 focus:border-primary-500 focus:outline-none"
                  />
                ))
              )}
            </div>
          </div>

          {/* Right bracket */}
          <div className="absolute right-0 top-0 bottom-0 w-2 border-r-2 border-t-2 border-b-2 border-primary-500 rounded-r" />
        </div>
      </div>

      {/* Matrix info */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4 text-center">
        <span className="text-dark-400">This is a </span>
        <span className="font-mono text-primary-400">{rows} × {cols}</span>
        <span className="text-dark-400"> matrix with </span>
        <span className="font-mono text-cyan-400">{rows * cols}</span>
        <span className="text-dark-400"> entries</span>
      </div>

      {/* Operations */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={transpose}
          className="px-4 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm transition-all"
        >
          Transpose
        </button>
        <button
          onClick={() => scalarMultiply(2)}
          className="px-4 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm transition-all"
        >
          ×2
        </button>
        <button
          onClick={() => scalarMultiply(-1)}
          className="px-4 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm transition-all"
        >
          ×(−1)
        </button>
        <button
          onClick={() => setMatrix(matrix.map(row => row.map(() => 0)))}
          className="px-4 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm transition-all"
        >
          Zero
        </button>
        <button
          onClick={() => {
            if (rows === cols) {
              const identity = matrix.map((row, i) => row.map((_, j) => (i === j ? 1 : 0)));
              setMatrix(identity);
            }
          }}
          disabled={rows !== cols}
          className="px-4 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm transition-all disabled:opacity-50"
        >
          Identity
        </button>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Click on entries to edit. Matrices are {rows}×{cols} (rows × columns).
      </p>
    </div>
  );
}
