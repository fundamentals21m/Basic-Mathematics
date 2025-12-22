import { useState } from 'react';

type Rule = 'product' | 'power-of-power' | 'power-of-product';

export function PowerRulesDemo() {
  const [rule, setRule] = useState<Rule>('product');
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const [x, setX] = useState(2);
  const [y, setY] = useState(3);

  const rules: Record<Rule, {
    title: string;
    formula: string;
    description: string;
  }> = {
    'product': {
      title: 'Product of Powers',
      formula: 'aˣ · aʸ = aˣ⁺ʸ',
      description: 'When multiplying powers with the same base, add the exponents',
    },
    'power-of-power': {
      title: 'Power of a Power',
      formula: '(aˣ)ʸ = aˣʸ',
      description: 'When raising a power to a power, multiply the exponents',
    },
    'power-of-product': {
      title: 'Power of a Product',
      formula: '(ab)ˣ = aˣ · bˣ',
      description: 'When raising a product to a power, raise each factor to that power',
    },
  };

  const currentRule = rules[rule];

  // Calculate values based on current rule
  const calculate = () => {
    switch (rule) {
      case 'product': {
        const left = Math.pow(a, x) * Math.pow(a, y);
        const right = Math.pow(a, x + y);
        return {
          leftExpr: `${a}^${x} × ${a}^${y}`,
          leftCalc: `${Math.pow(a, x)} × ${Math.pow(a, y)}`,
          leftResult: left,
          rightExpr: `${a}^(${x}+${y})`,
          rightCalc: `${a}^${x + y}`,
          rightResult: right,
          equal: Math.abs(left - right) < 0.0001,
        };
      }
      case 'power-of-power': {
        const left = Math.pow(Math.pow(a, x), y);
        const right = Math.pow(a, x * y);
        return {
          leftExpr: `(${a}^${x})^${y}`,
          leftCalc: `${Math.pow(a, x)}^${y}`,
          leftResult: left,
          rightExpr: `${a}^(${x}×${y})`,
          rightCalc: `${a}^${x * y}`,
          rightResult: right,
          equal: Math.abs(left - right) < 0.0001,
        };
      }
      case 'power-of-product': {
        const left = Math.pow(a * b, x);
        const right = Math.pow(a, x) * Math.pow(b, x);
        return {
          leftExpr: `(${a} × ${b})^${x}`,
          leftCalc: `${a * b}^${x}`,
          leftResult: left,
          rightExpr: `${a}^${x} × ${b}^${x}`,
          rightCalc: `${Math.pow(a, x)} × ${Math.pow(b, x)}`,
          rightResult: right,
          equal: Math.abs(left - right) < 0.0001,
        };
      }
    }
  };

  const result = calculate();

  const formatNumber = (n: number) => {
    if (!Number.isFinite(n)) return '∞';
    if (Math.abs(n) > 999999) return n.toExponential(2);
    return n % 1 === 0 ? n.toString() : n.toFixed(4);
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Power Rules Demo
      </h3>

      {/* Rule selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Object.entries(rules).map(([key, r]) => (
          <button
            key={key}
            onClick={() => setRule(key as Rule)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              rule === key
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {r.title}
          </button>
        ))}
      </div>

      {/* Current rule display */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-6 text-center">
        <div className="text-primary-400 font-semibold mb-2">{currentRule.title}</div>
        <div className="font-mono text-2xl text-dark-200 mb-2">{currentRule.formula}</div>
        <div className="text-dark-500 text-sm">{currentRule.description}</div>
      </div>

      {/* Input controls - different for each rule */}
      <div className={`grid gap-4 mb-6 max-w-md mx-auto ${
        rule === 'power-of-product' ? 'grid-cols-3' : 'grid-cols-3'
      }`}>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">a</label>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{a}</div>
        </div>

        {rule === 'power-of-product' && (
          <div>
            <label className="block text-xs text-dark-500 mb-1 text-center">b</label>
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <div className="text-center font-mono text-lg text-emerald-400">{b}</div>
          </div>
        )}

        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">x</label>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{x}</div>
        </div>

        {(rule === 'product' || rule === 'power-of-power') && (
          <div>
            <label className="block text-xs text-dark-500 mb-1 text-center">y</label>
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={y}
              onChange={(e) => setY(Number(e.target.value))}
              className="w-full accent-yellow-500"
            />
            <div className="text-center font-mono text-lg text-yellow-400">{y}</div>
          </div>
        )}
      </div>

      {/* Calculation comparison */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* Left side */}
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
          <div className="text-cyan-400 font-semibold text-sm mb-3 text-center">Left Side</div>
          <div className="space-y-2 text-center font-mono">
            <div className="text-dark-300">{result.leftExpr}</div>
            <div className="text-dark-500">= {result.leftCalc}</div>
            <div className="text-cyan-400 font-bold text-xl">
              = {formatNumber(result.leftResult)}
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <div className="text-emerald-400 font-semibold text-sm mb-3 text-center">Right Side</div>
          <div className="space-y-2 text-center font-mono">
            <div className="text-dark-300">{result.rightExpr}</div>
            <div className="text-dark-500">= {result.rightCalc}</div>
            <div className="text-emerald-400 font-bold text-xl">
              = {formatNumber(result.rightResult)}
            </div>
          </div>
        </div>
      </div>

      {/* Equality check */}
      <div className={`p-4 rounded-xl border text-center ${
        result.equal
          ? 'bg-emerald-500/10 border-emerald-500/50'
          : 'bg-red-500/10 border-red-500/50'
      }`}>
        {result.equal ? (
          <span className="text-emerald-400 font-semibold">
            ✓ Equal! {formatNumber(result.leftResult)} = {formatNumber(result.rightResult)}
          </span>
        ) : (
          <span className="text-red-400 font-semibold">
            ✗ Not equal (calculation overflow)
          </span>
        )}
      </div>

      {/* Quick examples */}
      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h4 className="text-sm font-semibold text-dark-300 mb-3 text-center">Try these examples:</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {rule === 'product' && (
            <>
              <button onClick={() => { setA(2); setX(3); setY(4); }} className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm">
                2³ × 2⁴
              </button>
              <button onClick={() => { setA(3); setX(2); setY(3); }} className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm">
                3² × 3³
              </button>
              <button onClick={() => { setA(5); setX(1); setY(2); }} className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm">
                5¹ × 5²
              </button>
            </>
          )}
          {rule === 'power-of-power' && (
            <>
              <button onClick={() => { setA(2); setX(2); setY(3); }} className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm">
                (2²)³
              </button>
              <button onClick={() => { setA(3); setX(2); setY(2); }} className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm">
                (3²)²
              </button>
              <button onClick={() => { setA(2); setX(3); setY(2); }} className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm">
                (2³)²
              </button>
            </>
          )}
          {rule === 'power-of-product' && (
            <>
              <button onClick={() => { setA(2); setB(3); setX(2); }} className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm">
                (2×3)²
              </button>
              <button onClick={() => { setA(2); setB(5); setX(3); }} className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm">
                (2×5)³
              </button>
              <button onClick={() => { setA(3); setB(4); setX(2); }} className="px-3 py-1 rounded bg-dark-700 hover:bg-dark-600 text-dark-300 text-sm">
                (3×4)²
              </button>
            </>
          )}
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        These rules work for all rational exponents, not just integers.
      </p>
    </div>
  );
}
