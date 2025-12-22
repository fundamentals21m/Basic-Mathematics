import { useState, useMemo } from 'react';

export function DivisibilityExplorer() {
  const [n, setN] = useState(24);
  const [testDivisor, setTestDivisor] = useState(3);

  // Find all divisors of n
  const divisors = useMemo(() => {
    if (n === 0) return [];
    const absN = Math.abs(n);
    const result: number[] = [];
    for (let i = 1; i <= absN; i++) {
      if (absN % i === 0) {
        result.push(i);
      }
    }
    return result;
  }, [n]);

  // Check if testDivisor divides n
  const isDivisible = n !== 0 && n % testDivisor === 0;
  const quotient = isDivisible ? n / testDivisor : null;
  const remainder = n % testDivisor;

  // Generate visual representation (dots grouped by divisor)
  const visualDots = useMemo(() => {
    if (n <= 0 || n > 60) return null;
    const rows: number[][] = [];
    let count = 0;
    while (count < n) {
      const row: number[] = [];
      for (let i = 0; i < testDivisor && count < n; i++) {
        row.push(count + 1);
        count++;
      }
      rows.push(row);
    }
    return rows;
  }, [n, testDivisor]);

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Explore Divisibility
      </h3>

      {/* Value selectors */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">Number (n)</label>
          <input
            type="range"
            min={1}
            max={60}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-2xl text-cyan-400">{n}</div>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Divisor (d)</label>
          <input
            type="range"
            min={1}
            max={12}
            value={testDivisor}
            onChange={(e) => setTestDivisor(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-2xl text-emerald-400">{testDivisor}</div>
        </div>
      </div>

      {/* Divisibility test result */}
      <div className={`p-6 rounded-xl border mb-6 ${
        isDivisible
          ? 'bg-emerald-500/10 border-emerald-500/50'
          : 'bg-red-500/10 border-red-500/50'
      }`}>
        <div className="text-center">
          <div className="text-xl font-mono mb-2">
            <span className="text-emerald-400">{testDivisor}</span>
            <span className={`mx-2 ${isDivisible ? 'text-emerald-400' : 'text-red-400'}`}>
              {isDivisible ? '|' : '∤'}
            </span>
            <span className="text-cyan-400">{n}</span>
          </div>
          <div className={`text-lg ${isDivisible ? 'text-emerald-400' : 'text-red-400'}`}>
            {isDivisible
              ? `${testDivisor} divides ${n}`
              : `${testDivisor} does not divide ${n}`
            }
          </div>
          <div className="mt-3 text-dark-300 font-mono">
            {isDivisible ? (
              <span>{n} = {testDivisor} × <span className="text-primary-400 font-bold">{quotient}</span></span>
            ) : (
              <span>{n} = {testDivisor} × {Math.floor(n / testDivisor)} + <span className="text-red-400 font-bold">{remainder}</span> (remainder)</span>
            )}
          </div>
        </div>
      </div>

      {/* Visual dot representation */}
      {visualDots && n <= 60 && (
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-6">
          <div className="text-sm text-dark-400 mb-3 text-center">
            {n} items grouped by {testDivisor}:
          </div>
          <div className="flex flex-col items-center gap-1">
            {visualDots.map((row, rowIdx) => (
              <div key={rowIdx} className="flex gap-1">
                {row.map((dot) => (
                  <div
                    key={dot}
                    className={`w-4 h-4 rounded-full ${
                      rowIdx === visualDots.length - 1 && row.length < testDivisor
                        ? 'bg-red-500/60'
                        : 'bg-emerald-500/60'
                    }`}
                    title={`${dot}`}
                  />
                ))}
              </div>
            ))}
          </div>
          {!isDivisible && (
            <div className="text-sm text-red-400 mt-3 text-center">
              The last row has only {remainder} dot{remainder !== 1 ? 's' : ''} — there's a remainder!
            </div>
          )}
          {isDivisible && (
            <div className="text-sm text-emerald-400 mt-3 text-center">
              All {quotient} rows have exactly {testDivisor} dots — it divides evenly!
            </div>
          )}
        </div>
      )}

      {/* All divisors of n */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 mb-3">
          All divisors of <span className="text-cyan-400 font-mono">{n}</span>:
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {divisors.map((d) => (
            <button
              key={d}
              onClick={() => setTestDivisor(d)}
              className={`px-3 py-1 rounded-lg font-mono text-sm transition-all ${
                d === testDivisor
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="text-xs text-dark-500 mt-3 text-center">
          {n} has {divisors.length} divisor{divisors.length !== 1 ? 's' : ''}
          {divisors.length === 2 && n > 1 && ' (prime number!)'}
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Click any divisor to test it, or use the slider to try any number 1-12.
      </p>
    </div>
  );
}
