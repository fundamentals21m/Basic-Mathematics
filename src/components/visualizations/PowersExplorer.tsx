import { useState } from 'react';

type Rule = 'product' | 'power' | 'product-power';

export function PowersExplorer() {
  const [base, setBase] = useState(2);
  const [exp1, setExp1] = useState(3);
  const [exp2, setExp2] = useState(2);
  const [activeRule, setActiveRule] = useState<Rule>('product');

  // Calculate results for each rule
  const productResult = Math.pow(base, exp1) * Math.pow(base, exp2);
  const productExponent = exp1 + exp2;
  const powerResult = Math.pow(Math.pow(base, exp1), exp2);
  const powerExponent = exp1 * exp2;
  const productPowerResult = Math.pow(base * exp1, exp2); // For (ab)^n = a^n * b^n visualization

  // Generate multiplication representation
  const generateMultiplication = (b: number, exp: number): string => {
    if (exp === 0) return '1';
    if (exp === 1) return String(b);
    return Array(exp).fill(b).join(' × ');
  };

  const rules = {
    product: {
      title: 'Product of Powers',
      formula: 'aᵐ × aⁿ = aᵐ⁺ⁿ',
      description: 'When multiplying powers with the same base, add the exponents.',
    },
    power: {
      title: 'Power of a Power',
      formula: '(aᵐ)ⁿ = aᵐ×ⁿ',
      description: 'When raising a power to a power, multiply the exponents.',
    },
    'product-power': {
      title: 'Power of a Product',
      formula: '(ab)ⁿ = aⁿ × bⁿ',
      description: 'When raising a product to a power, raise each factor to that power.',
    },
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Explore Exponent Rules
      </h3>

      {/* Rule selector */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {(Object.keys(rules) as Rule[]).map((rule) => (
          <button
            key={rule}
            onClick={() => setActiveRule(rule)}
            className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
              activeRule === rule
                ? 'bg-primary-600 text-white'
                : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
            }`}
          >
            {rules[rule].title}
          </button>
        ))}
      </div>

      {/* Current rule info */}
      <div className="text-center mb-6">
        <div className="text-2xl font-mono text-primary-400 mb-2">
          {rules[activeRule].formula}
        </div>
        <p className="text-dark-400">{rules[activeRule].description}</p>
      </div>

      {/* Value selectors */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">
            {activeRule === 'product-power' ? 'Value of a' : 'Base (a)'}
          </label>
          <input
            type="range"
            min={2}
            max={5}
            value={base}
            onChange={(e) => setBase(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{base}</div>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">
            {activeRule === 'product-power' ? 'Value of b' : 'Exponent m'}
          </label>
          <input
            type="range"
            min={1}
            max={4}
            value={exp1}
            onChange={(e) => setExp1(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-center font-mono text-lg text-emerald-400">{exp1}</div>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">
            {activeRule === 'product-power' ? 'Exponent n' : 'Exponent n'}
          </label>
          <input
            type="range"
            min={1}
            max={4}
            value={exp2}
            onChange={(e) => setExp2(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{exp2}</div>
        </div>
      </div>

      {/* Visualization based on active rule */}
      <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700">
        {activeRule === 'product' && (
          <div className="space-y-4">
            {/* First power */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-cyan-400 font-mono text-lg">{base}<sup>{exp1}</sup></span>
              <span className="text-dark-400">=</span>
              <span className="text-dark-300 font-mono">{generateMultiplication(base, exp1)}</span>
              <span className="text-dark-400">=</span>
              <span className="text-emerald-400 font-mono font-bold">{Math.pow(base, exp1)}</span>
            </div>

            {/* Second power */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-cyan-400 font-mono text-lg">{base}<sup>{exp2}</sup></span>
              <span className="text-dark-400">=</span>
              <span className="text-dark-300 font-mono">{generateMultiplication(base, exp2)}</span>
              <span className="text-dark-400">=</span>
              <span className="text-purple-400 font-mono font-bold">{Math.pow(base, exp2)}</span>
            </div>

            {/* Multiplication */}
            <div className="border-t border-dark-600 pt-4 mt-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-cyan-400 font-mono text-lg">{base}<sup>{exp1}</sup></span>
                <span className="text-dark-400">×</span>
                <span className="text-cyan-400 font-mono text-lg">{base}<sup>{exp2}</sup></span>
                <span className="text-dark-400">=</span>
                <span className="text-dark-300 font-mono">
                  {generateMultiplication(base, exp1)} × {generateMultiplication(base, exp2)}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-2 flex-wrap">
                <span className="text-dark-400">=</span>
                <span className="text-dark-300 font-mono">
                  {generateMultiplication(base, exp1 + exp2)}
                </span>
                <span className="text-dark-400">=</span>
                <span className="text-cyan-400 font-mono text-lg">{base}<sup>{exp1 + exp2}</sup></span>
                <span className="text-dark-400">=</span>
                <span className="text-primary-400 font-mono font-bold text-xl">{productResult}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 mt-4">
              <div className="text-center text-lg font-mono">
                <span className="text-cyan-400">{base}</span><sup className="text-emerald-400">{exp1}</sup>
                <span className="mx-2 text-dark-400">×</span>
                <span className="text-cyan-400">{base}</span><sup className="text-purple-400">{exp2}</sup>
                <span className="mx-2 text-dark-400">=</span>
                <span className="text-cyan-400">{base}</span><sup><span className="text-emerald-400">{exp1}</span><span className="text-dark-400">+</span><span className="text-purple-400">{exp2}</span></sup>
                <span className="mx-2 text-dark-400">=</span>
                <span className="text-cyan-400">{base}</span><sup className="text-primary-400">{productExponent}</sup>
                <span className="mx-2 text-dark-400">=</span>
                <span className="text-primary-400 font-bold">{productResult}</span>
              </div>
            </div>
          </div>
        )}

        {activeRule === 'power' && (
          <div className="space-y-4">
            {/* Inner power */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-dark-300">First, compute the inner power:</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-cyan-400 font-mono text-lg">{base}<sup>{exp1}</sup></span>
              <span className="text-dark-400">=</span>
              <span className="text-dark-300 font-mono">{generateMultiplication(base, exp1)}</span>
              <span className="text-dark-400">=</span>
              <span className="text-emerald-400 font-mono font-bold">{Math.pow(base, exp1)}</span>
            </div>

            {/* Outer power */}
            <div className="border-t border-dark-600 pt-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-dark-300">Then raise to the power of {exp2}:</span>
              </div>
              <div className="flex items-center gap-4 mt-2 flex-wrap">
                <span className="text-dark-400">(</span>
                <span className="text-cyan-400 font-mono text-lg">{base}<sup>{exp1}</sup></span>
                <span className="text-dark-400">)</span><sup className="text-purple-400">{exp2}</sup>
                <span className="text-dark-400">=</span>
                <span className="text-emerald-400 font-mono">{Math.pow(base, exp1)}<sup>{exp2}</sup></span>
                <span className="text-dark-400">=</span>
                <span className="text-dark-300 font-mono">
                  {generateMultiplication(Math.pow(base, exp1), exp2)}
                </span>
                <span className="text-dark-400">=</span>
                <span className="text-primary-400 font-mono font-bold text-xl">{powerResult}</span>
              </div>
            </div>

            {/* Alternative: multiply exponents */}
            <div className="border-t border-dark-600 pt-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-dark-300">Or multiply the exponents directly:</span>
              </div>
              <div className="flex items-center gap-4 mt-2 flex-wrap">
                <span className="text-cyan-400 font-mono text-lg">{base}<sup>{exp1} × {exp2}</sup></span>
                <span className="text-dark-400">=</span>
                <span className="text-cyan-400 font-mono text-lg">{base}<sup>{powerExponent}</sup></span>
                <span className="text-dark-400">=</span>
                <span className="text-dark-300 font-mono">{generateMultiplication(base, powerExponent)}</span>
                <span className="text-dark-400">=</span>
                <span className="text-primary-400 font-mono font-bold text-xl">{powerResult}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 mt-4">
              <div className="text-center text-lg font-mono">
                <span className="text-dark-400">(</span>
                <span className="text-cyan-400">{base}</span><sup className="text-emerald-400">{exp1}</sup>
                <span className="text-dark-400">)</span><sup className="text-purple-400">{exp2}</sup>
                <span className="mx-2 text-dark-400">=</span>
                <span className="text-cyan-400">{base}</span><sup><span className="text-emerald-400">{exp1}</span><span className="text-dark-400">×</span><span className="text-purple-400">{exp2}</span></sup>
                <span className="mx-2 text-dark-400">=</span>
                <span className="text-cyan-400">{base}</span><sup className="text-primary-400">{powerExponent}</sup>
                <span className="mx-2 text-dark-400">=</span>
                <span className="text-primary-400 font-bold">{powerResult}</span>
              </div>
            </div>
          </div>
        )}

        {activeRule === 'product-power' && (
          <div className="space-y-4">
            {/* Product to the power */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-dark-300">Compute (a × b)ⁿ:</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-dark-400">(</span>
              <span className="text-cyan-400 font-mono">{base}</span>
              <span className="text-dark-400">×</span>
              <span className="text-emerald-400 font-mono">{exp1}</span>
              <span className="text-dark-400">)</span><sup className="text-purple-400">{exp2}</sup>
              <span className="text-dark-400">=</span>
              <span className="text-yellow-400 font-mono">{base * exp1}<sup>{exp2}</sup></span>
              <span className="text-dark-400">=</span>
              <span className="text-dark-300 font-mono">
                {generateMultiplication(base * exp1, exp2)}
              </span>
              <span className="text-dark-400">=</span>
              <span className="text-primary-400 font-mono font-bold text-xl">{productPowerResult}</span>
            </div>

            {/* Split into separate powers */}
            <div className="border-t border-dark-600 pt-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-dark-300">Or split into separate powers:</span>
              </div>
              <div className="flex items-center gap-4 mt-2 flex-wrap">
                <span className="text-cyan-400 font-mono">{base}<sup>{exp2}</sup></span>
                <span className="text-dark-400">×</span>
                <span className="text-emerald-400 font-mono">{exp1}<sup>{exp2}</sup></span>
                <span className="text-dark-400">=</span>
                <span className="text-cyan-400 font-mono">{Math.pow(base, exp2)}</span>
                <span className="text-dark-400">×</span>
                <span className="text-emerald-400 font-mono">{Math.pow(exp1, exp2)}</span>
                <span className="text-dark-400">=</span>
                <span className="text-primary-400 font-mono font-bold text-xl">{productPowerResult}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 mt-4">
              <div className="text-center text-lg font-mono">
                <span className="text-dark-400">(</span>
                <span className="text-cyan-400">{base}</span>
                <span className="text-dark-400"> × </span>
                <span className="text-emerald-400">{exp1}</span>
                <span className="text-dark-400">)</span><sup className="text-purple-400">{exp2}</sup>
                <span className="mx-2 text-dark-400">=</span>
                <span className="text-cyan-400">{base}</span><sup className="text-purple-400">{exp2}</sup>
                <span className="text-dark-400"> × </span>
                <span className="text-emerald-400">{exp1}</span><sup className="text-purple-400">{exp2}</sup>
                <span className="mx-2 text-dark-400">=</span>
                <span className="text-primary-400 font-bold">{productPowerResult}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Adjust the sliders and switch between rules to see how exponent operations work.
      </p>
    </div>
  );
}
