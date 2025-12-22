import { useState } from 'react';

export function FractionEqualityChecker() {
  const [m, setM] = useState(3);
  const [n, setN] = useState(4);
  const [r, setR] = useState(6);
  const [s, setS] = useState(8);

  // Cross products
  const crossProduct1 = m * s;
  const crossProduct2 = r * n;
  const areEqual = crossProduct1 === crossProduct2;

  // GCD for simplification display
  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const gcd1 = gcd(m, n);
  const gcd2 = gcd(r, s);
  const simplified1 = { num: m / gcd1, den: n / gcd1 };
  const simplified2 = { num: r / gcd2, den: s / gcd2 };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Fraction Equality Checker
      </h3>

      {/* Fraction inputs */}
      <div className="grid grid-cols-2 gap-8 mb-6">
        {/* First fraction */}
        <div className="space-y-4">
          <div className="text-sm text-dark-400 text-center">First Fraction</div>
          <div className="flex flex-col items-center">
            <div>
              <label className="block text-xs text-dark-500 mb-1">Numerator (m)</label>
              <input
                type="range"
                min={-12}
                max={12}
                value={m}
                onChange={(e) => setM(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-center font-mono text-lg text-cyan-400">{m}</div>
            </div>
            <div className="my-2 w-16 h-0.5 bg-dark-500"></div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">Denominator (n)</label>
              <input
                type="range"
                min={1}
                max={12}
                value={n}
                onChange={(e) => setN(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-center font-mono text-lg text-cyan-400">{n}</div>
            </div>
          </div>
        </div>

        {/* Second fraction */}
        <div className="space-y-4">
          <div className="text-sm text-dark-400 text-center">Second Fraction</div>
          <div className="flex flex-col items-center">
            <div>
              <label className="block text-xs text-dark-500 mb-1">Numerator (r)</label>
              <input
                type="range"
                min={-12}
                max={12}
                value={r}
                onChange={(e) => setR(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className="text-center font-mono text-lg text-emerald-400">{r}</div>
            </div>
            <div className="my-2 w-16 h-0.5 bg-dark-500"></div>
            <div>
              <label className="block text-xs text-dark-500 mb-1">Denominator (s)</label>
              <input
                type="range"
                min={1}
                max={12}
                value={s}
                onChange={(e) => setS(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className="text-center font-mono text-lg text-emerald-400">{s}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual comparison */}
      <div className="flex items-center justify-center gap-4 text-3xl font-mono mb-6">
        <div className="flex flex-col items-center">
          <span className="text-cyan-400">{m}</span>
          <div className="w-8 h-0.5 bg-cyan-400"></div>
          <span className="text-cyan-400">{n}</span>
        </div>
        <span className={`text-2xl ${areEqual ? 'text-emerald-400' : 'text-red-400'}`}>
          {areEqual ? '=' : '≠'}
        </span>
        <div className="flex flex-col items-center">
          <span className="text-emerald-400">{r}</span>
          <div className="w-8 h-0.5 bg-emerald-400"></div>
          <span className="text-emerald-400">{s}</span>
        </div>
      </div>

      {/* Cross multiplication */}
      <div className={`p-6 rounded-xl border mb-4 ${
        areEqual
          ? 'bg-emerald-500/10 border-emerald-500/50'
          : 'bg-red-500/10 border-red-500/50'
      }`}>
        <div className="text-center mb-4">
          <div className="text-sm text-dark-400 mb-2">Cross-Multiplication Test:</div>
          <div className="text-lg font-mono">
            <span className="text-cyan-400">{m}</span>
            <span className="text-dark-400"> × </span>
            <span className="text-emerald-400">{s}</span>
            <span className="mx-3 text-dark-400">=</span>
            <span className="text-purple-400 font-bold">{crossProduct1}</span>
          </div>
          <div className="text-lg font-mono mt-1">
            <span className="text-emerald-400">{r}</span>
            <span className="text-dark-400"> × </span>
            <span className="text-cyan-400">{n}</span>
            <span className="mx-3 text-dark-400">=</span>
            <span className="text-purple-400 font-bold">{crossProduct2}</span>
          </div>
        </div>
        <div className={`text-center text-lg font-semibold ${areEqual ? 'text-emerald-400' : 'text-red-400'}`}>
          {crossProduct1} {areEqual ? '=' : '≠'} {crossProduct2}
          <span className="ml-2">→</span>
          <span className="ml-2">Fractions are {areEqual ? 'EQUAL' : 'NOT EQUAL'}</span>
        </div>
      </div>

      {/* Simplified forms */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-sm text-dark-400 mb-3 text-center">Simplified (Lowest) Forms:</div>
        <div className="flex items-center justify-center gap-8 font-mono">
          <div className="text-center">
            <div className="flex flex-col items-center">
              <span className="text-cyan-400">{m}</span>
              <div className="w-6 h-0.5 bg-dark-500"></div>
              <span className="text-cyan-400">{n}</span>
            </div>
            <span className="text-dark-500 mx-2">=</span>
            <div className="flex flex-col items-center inline-flex">
              <span className="text-primary-400 font-bold">{simplified1.num}</span>
              <div className="w-6 h-0.5 bg-primary-400"></div>
              <span className="text-primary-400 font-bold">{simplified1.den}</span>
            </div>
          </div>
          <div className="text-dark-500">|</div>
          <div className="text-center">
            <div className="flex flex-col items-center">
              <span className="text-emerald-400">{r}</span>
              <div className="w-6 h-0.5 bg-dark-500"></div>
              <span className="text-emerald-400">{s}</span>
            </div>
            <span className="text-dark-500 mx-2">=</span>
            <div className="flex flex-col items-center inline-flex">
              <span className="text-primary-400 font-bold">{simplified2.num}</span>
              <div className="w-6 h-0.5 bg-primary-400"></div>
              <span className="text-primary-400 font-bold">{simplified2.den}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Two fractions are equal when their cross products are equal: m × s = r × n
      </p>
    </div>
  );
}
