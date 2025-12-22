import { useState } from 'react';

type Permutation = number[];

// Preset permutations of {1,2,3,4}
const presetPerms: { name: string; perm: Permutation }[] = [
  { name: 'Identity', perm: [1, 2, 3, 4] },
  { name: 'Swap 1,2', perm: [2, 1, 3, 4] },
  { name: 'Swap 3,4', perm: [1, 2, 4, 3] },
  { name: 'Cycle [1,2,3]', perm: [2, 3, 1, 4] },
  { name: 'Cycle [1,2,3,4]', perm: [2, 3, 4, 1] },
  { name: 'Reverse', perm: [4, 3, 2, 1] },
];

export function PermutationCalculator() {
  const [sigma, setSigma] = useState<Permutation>([2, 3, 4, 1]);
  const [tau, setTau] = useState<Permutation>([2, 1, 3, 4]);
  const [mode, setMode] = useState<'compose' | 'inverse' | 'cycles'>('compose');

  const n = 4;

  // Compose two permutations: (τ ∘ σ)(i) = τ(σ(i))
  const compose = (p1: Permutation, p2: Permutation): Permutation => {
    return p1.map((_, i) => p2[p1[i] - 1]);
  };

  // Find inverse permutation
  const inverse = (p: Permutation): Permutation => {
    const inv = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      inv[p[i] - 1] = i + 1;
    }
    return inv;
  };

  // Find cycles
  const findCycles = (p: Permutation): number[][] => {
    const visited = new Array(n).fill(false);
    const cycles: number[][] = [];

    for (let start = 0; start < n; start++) {
      if (visited[start]) continue;

      const cycle: number[] = [];
      let current = start;

      while (!visited[current]) {
        visited[current] = true;
        cycle.push(current + 1);
        current = p[current] - 1;
      }

      if (cycle.length > 0) {
        cycles.push(cycle);
      }
    }

    return cycles;
  };

  // Determine sign (even/odd)
  const getSign = (p: Permutation): { sign: number; numOrbits: number } => {
    const cycles = findCycles(p);
    const numOrbits = cycles.length;
    const signVal = (n - numOrbits) % 2 === 0 ? 1 : -1;
    return { sign: signVal, numOrbits };
  };

  const composed = compose(sigma, tau);
  const sigmaInverse = inverse(sigma);
  const sigmaCycles = findCycles(sigma);
  const sigmaSignInfo = getSign(sigma);

  const formatPerm = (p: Permutation) => (
    <span className="font-mono">
      [
      {p.map((v, i) => (
        <span key={i}>
          <span className={v !== i + 1 ? 'text-primary-400' : 'text-dark-400'}>{v}</span>
          {i < p.length - 1 && <span className="text-dark-500">, </span>}
        </span>
      ))}
      ]
    </span>
  );

  const formatTwoRow = (p: Permutation) => (
    <div className="font-mono text-center">
      <div className="text-dark-400">
        [{[1, 2, 3, 4].join('  ')}]
      </div>
      <div className="text-primary-400">
        [{p.join('  ')}]
      </div>
    </div>
  );

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Permutation Calculator
      </h3>

      {/* Mode selector */}
      <div className="flex justify-center gap-2 mb-6">
        {[
          { key: 'compose', label: 'Compose' },
          { key: 'inverse', label: 'Inverse' },
          { key: 'cycles', label: 'Cycles & Sign' },
        ].map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key as typeof mode)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === m.key
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Permutation selector for σ */}
      <div className="mb-6">
        <label className="block text-sm text-dark-400 mb-2 text-center">
          Permutation σ (select preset or customize):
        </label>
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {presetPerms.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => setSigma([...preset.perm])}
              className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                JSON.stringify(sigma) === JSON.stringify(preset.perm)
                  ? 'bg-cyan-600 text-white'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-dark-800/60 border border-dark-700 text-center">
          <div className="text-dark-500 text-xs mb-1">Two-row notation:</div>
          {formatTwoRow(sigma)}
        </div>
      </div>

      {mode === 'compose' && (
        <>
          {/* Permutation selector for τ */}
          <div className="mb-6">
            <label className="block text-sm text-dark-400 mb-2 text-center">
              Permutation τ:
            </label>
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {presetPerms.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setTau([...preset.perm])}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                    JSON.stringify(tau) === JSON.stringify(preset.perm)
                      ? 'bg-purple-600 text-white'
                      : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>
            <div className="p-3 rounded-lg bg-dark-800/60 border border-dark-700 text-center">
              {formatTwoRow(tau)}
            </div>
          </div>

          {/* Composition steps */}
          <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
            <div className="text-dark-500 text-sm mb-3 text-center">
              (τ ∘ σ)(i) = τ(σ(i)) — Apply σ first, then τ:
            </div>
            <div className="grid grid-cols-4 gap-2 text-center font-mono text-sm">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-2 rounded bg-dark-700">
                  <div className="text-dark-400">{i}</div>
                  <div className="text-cyan-400">↓ σ</div>
                  <div className="text-yellow-400">{sigma[i - 1]}</div>
                  <div className="text-purple-400">↓ τ</div>
                  <div className="text-emerald-400 font-bold">{tau[sigma[i - 1] - 1]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
            <div className="text-dark-400 text-sm mb-2">τ ∘ σ =</div>
            {formatTwoRow(composed)}
          </div>
        </>
      )}

      {mode === 'inverse' && (
        <>
          <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
            <div className="text-dark-500 text-sm mb-3 text-center">
              σ⁻¹(j) = i where σ(i) = j
            </div>
            <div className="grid grid-cols-4 gap-2 text-center font-mono text-sm">
              {[1, 2, 3, 4].map((j) => {
                const i = sigmaInverse[j - 1];
                return (
                  <div key={j} className="p-2 rounded bg-dark-700">
                    <div className="text-dark-400">σ(?) = {j}</div>
                    <div className="text-cyan-400">σ({i}) = {j}</div>
                    <div className="text-emerald-400 font-bold">σ⁻¹({j}) = {i}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
            <div className="text-dark-400 text-sm mb-2">σ⁻¹ =</div>
            {formatTwoRow(sigmaInverse)}
          </div>

          {/* Verify */}
          <div className="mt-4 p-3 rounded-lg bg-dark-800/40 text-center text-sm">
            <span className="text-dark-400">Verify: σ ∘ σ⁻¹ = </span>
            {formatPerm(compose(sigmaInverse, sigma))}
            <span className="text-emerald-400 ml-2">= Identity ✓</span>
          </div>
        </>
      )}

      {mode === 'cycles' && (
        <>
          <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
            <div className="text-dark-500 text-sm mb-3 text-center">Cycle decomposition:</div>
            <div className="flex justify-center gap-3 font-mono text-lg">
              {sigmaCycles.map((cycle, idx) => (
                <span key={idx} className={`px-3 py-1 rounded ${
                  cycle.length > 1 ? 'bg-primary-500/20 text-primary-400' : 'bg-dark-700 text-dark-400'
                }`}>
                  [{cycle.join(', ')}]
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 text-center">
              <div className="text-dark-500 text-sm">Number of orbits (k)</div>
              <div className="font-mono text-2xl text-cyan-400">{sigmaSignInfo.numOrbits}</div>
            </div>
            <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 text-center">
              <div className="text-dark-500 text-sm">n − k</div>
              <div className="font-mono text-2xl text-purple-400">{n} − {sigmaSignInfo.numOrbits} = {n - sigmaSignInfo.numOrbits}</div>
            </div>
          </div>

          <div className={`p-4 rounded-xl border text-center ${
            sigmaSignInfo.sign === 1
              ? 'bg-emerald-500/10 border-emerald-500/30'
              : 'bg-orange-500/10 border-orange-500/30'
          }`}>
            <div className="text-dark-400 text-sm mb-1">Sign of σ:</div>
            <div className={`font-mono text-2xl font-bold ${
              sigmaSignInfo.sign === 1 ? 'text-emerald-400' : 'text-orange-400'
            }`}>
              {sigmaSignInfo.sign === 1 ? '+1 (even)' : '−1 (odd)'}
            </div>
            <div className="text-dark-500 text-sm mt-1">
              {n - sigmaSignInfo.numOrbits} is {(n - sigmaSignInfo.numOrbits) % 2 === 0 ? 'even' : 'odd'}
            </div>
          </div>
        </>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        Explore composition, inverse, and cycle structure of permutations.
      </p>
    </div>
  );
}
