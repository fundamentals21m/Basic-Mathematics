import { useState } from 'react';

type Property = 'add-comm' | 'add-assoc' | 'mult-comm' | 'mult-assoc' | 'distributive';

export function RealNumberPropertiesDemo() {
  const [property, setProperty] = useState<Property>('add-comm');
  const [a, setA] = useState(3.5);
  const [b, setB] = useState(2.7);
  const [c, setC] = useState(1.8);

  const properties: Record<Property, {
    title: string;
    formula: string;
    calculate: () => { left: number; right: number };
    leftExpr: string;
    rightExpr: string;
  }> = {
    'add-comm': {
      title: 'Additive Commutativity',
      formula: 'a + b = b + a',
      calculate: () => ({ left: a + b, right: b + a }),
      leftExpr: `${a} + ${b}`,
      rightExpr: `${b} + ${a}`,
    },
    'add-assoc': {
      title: 'Additive Associativity',
      formula: 'a + (b + c) = (a + b) + c',
      calculate: () => ({ left: a + (b + c), right: (a + b) + c }),
      leftExpr: `${a} + (${b} + ${c})`,
      rightExpr: `(${a} + ${b}) + ${c}`,
    },
    'mult-comm': {
      title: 'Multiplicative Commutativity',
      formula: 'a × b = b × a',
      calculate: () => ({ left: a * b, right: b * a }),
      leftExpr: `${a} × ${b}`,
      rightExpr: `${b} × ${a}`,
    },
    'mult-assoc': {
      title: 'Multiplicative Associativity',
      formula: 'a × (b × c) = (a × b) × c',
      calculate: () => ({ left: a * (b * c), right: (a * b) * c }),
      leftExpr: `${a} × (${b} × ${c})`,
      rightExpr: `(${a} × ${b}) × ${c}`,
    },
    'distributive': {
      title: 'Distributivity',
      formula: 'a × (b + c) = a × b + a × c',
      calculate: () => ({ left: a * (b + c), right: a * b + a * c }),
      leftExpr: `${a} × (${b} + ${c})`,
      rightExpr: `${a} × ${b} + ${a} × ${c}`,
    },
  };

  const current = properties[property];
  const result = current.calculate();
  const areEqual = Math.abs(result.left - result.right) < 0.0001;

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Real Number Properties Explorer
      </h3>

      {/* Property selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Object.entries(properties).map(([key, prop]) => (
          <button
            key={key}
            onClick={() => setProperty(key as Property)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              property === key
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {prop.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Current property display */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-6 text-center">
        <div className="text-primary-400 font-semibold mb-2">{current.title}</div>
        <div className="font-mono text-xl text-dark-200">{current.formula}</div>
      </div>

      {/* Value inputs */}
      <div className={`grid gap-4 mb-6 ${property === 'add-comm' || property === 'mult-comm' ? 'grid-cols-2' : 'grid-cols-3'}`}>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">a</label>
          <input
            type="number"
            step="0.1"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 text-cyan-400 text-center font-mono"
          />
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">b</label>
          <input
            type="number"
            step="0.1"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 text-emerald-400 text-center font-mono"
          />
        </div>
        {(property === 'add-assoc' || property === 'mult-assoc' || property === 'distributive') && (
          <div>
            <label className="block text-xs text-dark-500 mb-1 text-center">c</label>
            <input
              type="number"
              step="0.1"
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 text-purple-400 text-center font-mono"
            />
          </div>
        )}
      </div>

      {/* Calculation display */}
      <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="grid grid-cols-2 gap-6">
          {/* Left side */}
          <div className="text-center">
            <div className="text-xs text-dark-500 mb-2">Left Side</div>
            <div className="font-mono text-dark-300 mb-2">{current.leftExpr}</div>
            <div className="text-2xl font-bold text-cyan-400">
              {result.left.toFixed(4)}
            </div>
          </div>

          {/* Right side */}
          <div className="text-center">
            <div className="text-xs text-dark-500 mb-2">Right Side</div>
            <div className="font-mono text-dark-300 mb-2">{current.rightExpr}</div>
            <div className="text-2xl font-bold text-emerald-400">
              {result.right.toFixed(4)}
            </div>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className={`p-4 rounded-xl border text-center ${
        areEqual
          ? 'bg-emerald-500/10 border-emerald-500/50'
          : 'bg-red-500/10 border-red-500/50'
      }`}>
        {areEqual ? (
          <div className="text-emerald-400 font-semibold">
            ✓ Equal! The property holds for these real numbers.
          </div>
        ) : (
          <div className="text-red-400 font-semibold">
            ✗ Not equal (rounding error may occur with very large numbers)
          </div>
        )}
      </div>

      {/* Quick examples */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => { setA(Math.PI); setB(Math.E); setC(Math.SQRT2); }}
          className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
        >
          π, e, √2
        </button>
        <button
          onClick={() => { setA(-2.5); setB(3.7); setC(-1.2); }}
          className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
        >
          Negatives
        </button>
        <button
          onClick={() => { setA(0.333); setB(0.667); setC(0.5); }}
          className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm"
        >
          Fractions
        </button>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        These properties work for ALL real numbers—integers, fractions, and irrationals alike.
      </p>
    </div>
  );
}
