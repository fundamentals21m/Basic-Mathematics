import { useState } from 'react';

export function Determinant2x2Calculator() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(2);
  const [c, setC] = useState(1);
  const [d, setD] = useState(4);

  const det = a * d - b * c;
  const mainDiag = a * d;
  const antiDiag = b * c;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        2×2 Determinant Calculator
      </h3>

      {/* Matrix input */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <span className="text-dark-400 text-xl">det</span>
        <div className="relative">
          {/* Brackets */}
          <div className="absolute left-0 top-0 bottom-0 w-2 border-l-2 border-t-2 border-b-2 border-primary-500 rounded-l" />
          <div className="absolute right-0 top-0 bottom-0 w-2 border-r-2 border-t-2 border-b-2 border-primary-500 rounded-r" />

          <div className="px-4 py-3 grid grid-cols-2 gap-3">
            <input
              type="number"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-16 h-12 text-center font-mono text-lg bg-dark-800 border border-emerald-500/50 rounded text-emerald-400 focus:border-emerald-500 focus:outline-none"
            />
            <input
              type="number"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-16 h-12 text-center font-mono text-lg bg-dark-800 border border-red-500/50 rounded text-red-400 focus:border-red-500 focus:outline-none"
            />
            <input
              type="number"
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              className="w-16 h-12 text-center font-mono text-lg bg-dark-800 border border-red-500/50 rounded text-red-400 focus:border-red-500 focus:outline-none"
            />
            <input
              type="number"
              value={d}
              onChange={(e) => setD(Number(e.target.value))}
              className="w-16 h-12 text-center font-mono text-lg bg-dark-800 border border-emerald-500/50 rounded text-emerald-400 focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Visual diagonals */}
      <div className="flex justify-center mb-6">
        <svg width="160" height="100" className="overflow-visible">
          {/* Main diagonal (positive) */}
          <line x1="30" y1="25" x2="130" y2="75" stroke="#10b981" strokeWidth="2" strokeDasharray="5,3" />
          <text x="80" y="15" textAnchor="middle" fill="#10b981" fontSize="12">
            {a} × {d} = {mainDiag}
          </text>

          {/* Anti-diagonal (negative) */}
          <line x1="130" y1="25" x2="30" y2="75" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3" />
          <text x="80" y="95" textAnchor="middle" fill="#ef4444" fontSize="12">
            {b} × {c} = {antiDiag}
          </text>
        </svg>
      </div>

      {/* Calculation steps */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="text-center space-y-2 font-mono">
          <div className="text-dark-400">
            det = <span className="text-emerald-400">a·d</span> − <span className="text-red-400">b·c</span>
          </div>
          <div className="text-dark-300">
            = <span className="text-emerald-400">{a}×{d}</span> − <span className="text-red-400">{b}×{c}</span>
          </div>
          <div className="text-dark-300">
            = <span className="text-emerald-400">{mainDiag}</span> − <span className="text-red-400">{antiDiag}</span>
          </div>
          <div className="text-2xl text-primary-400 font-bold">
            = {det}
          </div>
        </div>
      </div>

      {/* Interpretation */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className={`p-3 rounded-xl border text-center ${det !== 0 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
          <div className="text-dark-500 text-xs mb-1">Invertible?</div>
          <div className={det !== 0 ? 'text-emerald-400' : 'text-red-400'}>
            {det !== 0 ? 'Yes (det ≠ 0)' : 'No (det = 0)'}
          </div>
        </div>
        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
          <div className="text-dark-500 text-xs mb-1">Area of parallelogram</div>
          <div className="text-cyan-400 font-mono">{Math.abs(det)}</div>
        </div>
      </div>

      {/* Presets */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { a: 1, b: 0, c: 0, d: 1, label: 'Identity' },
          { a: 2, b: 0, c: 0, d: 3, label: 'Diagonal' },
          { a: 1, b: 2, c: 2, d: 4, label: 'Singular' },
          { a: 3, b: 4, c: 1, d: 2, label: 'det = 2' },
        ].map(({ a: pa, b: pb, c: pc, d: pd, label }) => (
          <button
            key={label}
            onClick={() => { setA(pa); setB(pb); setC(pc); setD(pd); }}
            className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        <span className="text-emerald-400">Green</span> = main diagonal (add), <span className="text-red-400">Red</span> = anti-diagonal (subtract)
      </p>
    </div>
  );
}
