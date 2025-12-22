import { useState } from 'react';

export function ZeroProductExplorer() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);

  const product = a * b;
  const isZeroProduct = product === 0;
  const aIsZero = a === 0;
  const bIsZero = b === 0;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Zero Product Property Explorer
      </h3>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <div className="text-sm text-dark-400 text-center">Factor a</div>
          <input
            type="range"
            min={-8}
            max={8}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className={`text-center font-mono text-3xl ${aIsZero ? 'text-red-400' : 'text-cyan-400'}`}>
            {a}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-sm text-dark-400 text-center">Factor b</div>
          <input
            type="range"
            min={-8}
            max={8}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className={`text-center font-mono text-3xl ${bIsZero ? 'text-red-400' : 'text-emerald-400'}`}>
            {b}
          </div>
        </div>
      </div>

      {/* Product display */}
      <div className={`p-6 rounded-xl border mb-4 ${
        isZeroProduct
          ? 'bg-yellow-500/10 border-yellow-500/50'
          : 'bg-dark-800/50 border-dark-700'
      }`}>
        <div className="flex items-center justify-center gap-4 text-2xl font-mono">
          <span className={aIsZero ? 'text-red-400' : 'text-cyan-400'}>{a}</span>
          <span className="text-dark-400">×</span>
          <span className={bIsZero ? 'text-red-400' : 'text-emerald-400'}>{b}</span>
          <span className="text-dark-400">=</span>
          <span className={`text-3xl font-bold ${isZeroProduct ? 'text-yellow-400' : 'text-purple-400'}`}>
            {product}
          </span>
        </div>
      </div>

      {/* Property explanation */}
      <div className={`p-4 rounded-xl border ${
        isZeroProduct
          ? 'bg-emerald-500/10 border-emerald-500/50'
          : 'bg-dark-800/50 border-dark-700'
      }`}>
        {isZeroProduct ? (
          <div className="text-center">
            <div className="text-emerald-400 font-semibold text-lg mb-2">
              Product is zero!
            </div>
            <p className="text-dark-300">
              {aIsZero && bIsZero ? (
                <>Both <span className="text-red-400">a = 0</span> and <span className="text-red-400">b = 0</span></>
              ) : aIsZero ? (
                <>Because <span className="text-red-400">a = 0</span></>
              ) : (
                <>Because <span className="text-red-400">b = 0</span></>
              )}
            </p>
            <p className="text-dark-400 text-sm mt-2">
              The Zero Product Property states: if ab = 0, then a = 0 or b = 0 (or both).
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-dark-300 font-semibold text-lg mb-2">
              Product is not zero
            </div>
            <p className="text-dark-400 text-sm">
              Since neither factor is zero, the product cannot be zero.
              <br />
              Try moving either slider to 0 to see the Zero Product Property in action!
            </p>
          </div>
        )}
      </div>

      {/* Visual representation */}
      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 mb-3 text-center">
          The only way to get zero:
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <button
            onClick={() => { setA(0); setB(5); }}
            className={`p-3 rounded-lg transition-all ${
              aIsZero && !bIsZero
                ? 'bg-yellow-500/20 border border-yellow-500/50'
                : 'bg-dark-700 hover:bg-dark-600'
            }`}
          >
            <div className="font-mono">
              <span className="text-red-400">0</span> × <span className="text-emerald-400">b</span> = 0
            </div>
          </button>
          <button
            onClick={() => { setA(5); setB(0); }}
            className={`p-3 rounded-lg transition-all ${
              !aIsZero && bIsZero
                ? 'bg-yellow-500/20 border border-yellow-500/50'
                : 'bg-dark-700 hover:bg-dark-600'
            }`}
          >
            <div className="font-mono">
              <span className="text-cyan-400">a</span> × <span className="text-red-400">0</span> = 0
            </div>
          </button>
          <button
            onClick={() => { setA(0); setB(0); }}
            className={`p-3 rounded-lg transition-all ${
              aIsZero && bIsZero
                ? 'bg-yellow-500/20 border border-yellow-500/50'
                : 'bg-dark-700 hover:bg-dark-600'
            }`}
          >
            <div className="font-mono">
              <span className="text-red-400">0</span> × <span className="text-red-400">0</span> = 0
            </div>
          </button>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        If ab = 0, then at least one factor must be zero. Non-zero × non-zero can never equal zero.
      </p>
    </div>
  );
}
