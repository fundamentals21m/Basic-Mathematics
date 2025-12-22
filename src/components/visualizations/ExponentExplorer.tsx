import { useState } from 'react';

export function ExponentExplorer() {
  const [base, setBase] = useState(2);
  const [exponent, setExponent] = useState(3);

  // Calculate the power
  const result = Math.pow(base, exponent);

  // Generate expansion for positive integer exponents
  const getExpansion = () => {
    if (exponent === 0) {
      return '1';
    } else if (exponent > 0 && Number.isInteger(exponent)) {
      return Array(exponent).fill(base).join(' × ');
    } else if (exponent < 0 && Number.isInteger(exponent)) {
      const positiveExp = Math.abs(exponent);
      const expansion = Array(positiveExp).fill(base).join(' × ');
      return `1 / (${expansion})`;
    }
    return null;
  };

  const expansion = getExpansion();

  // Color based on exponent type
  const getExponentColor = () => {
    if (exponent > 0) return 'text-emerald-400';
    if (exponent < 0) return 'text-red-400';
    return 'text-yellow-400';
  };

  const getExponentLabel = () => {
    if (exponent > 0) return 'Positive';
    if (exponent < 0) return 'Negative';
    return 'Zero';
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Exponent Explorer
      </h3>

      {/* Input controls */}
      <div className="grid grid-cols-2 gap-6 mb-6 max-w-sm mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">Base (a)</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={1}
            value={base}
            onChange={(e) => setBase(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-2xl text-cyan-400">{base}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">Exponent (n)</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={1}
            value={exponent}
            onChange={(e) => setExponent(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className={`text-center font-mono text-2xl ${getExponentColor()}`}>{exponent}</div>
        </div>
      </div>

      {/* Exponent type indicator */}
      <div className="flex justify-center mb-4">
        <span className={`px-4 py-1 rounded-full text-sm font-medium ${
          exponent > 0 ? 'bg-emerald-500/20 text-emerald-400' :
          exponent < 0 ? 'bg-red-500/20 text-red-400' :
          'bg-yellow-500/20 text-yellow-400'
        }`}>
          {getExponentLabel()} Exponent
        </span>
      </div>

      {/* Main expression */}
      <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700 mb-4 text-center">
        <div className="font-mono text-3xl mb-4">
          <span className="text-cyan-400">{base}</span>
          <sup className={getExponentColor()}>{exponent}</sup>
          <span className="text-dark-500 mx-3">=</span>
          <span className="text-primary-400">
            {base === 0 && exponent <= 0 ? (
              <span className="text-red-400">undefined</span>
            ) : Number.isFinite(result) ? (
              result % 1 === 0 ? result : result.toFixed(6).replace(/\.?0+$/, '')
            ) : (
              <span className="text-red-400">overflow</span>
            )}
          </span>
        </div>

        {/* Expansion */}
        {expansion && base !== 0 && Number.isFinite(result) && (
          <div className="text-dark-400 text-sm font-mono">
            = {expansion}
          </div>
        )}
      </div>

      {/* Special cases explanation */}
      {exponent === 0 && base !== 0 && (
        <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 mb-4">
          <div className="text-yellow-400 text-sm">
            <strong>Zero Exponent Rule:</strong> Any non-zero number raised to the power 0 equals 1.
            <div className="mt-2 font-mono">a⁰ = 1 (for a ≠ 0)</div>
          </div>
        </div>
      )}

      {exponent < 0 && base !== 0 && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 mb-4">
          <div className="text-red-400 text-sm">
            <strong>Negative Exponent Rule:</strong> a⁻ⁿ = 1/aⁿ
            <div className="mt-2 font-mono">
              {base}<sup>{exponent}</sup> = 1/{base}<sup>{Math.abs(exponent)}</sup> = 1/{Math.pow(base, Math.abs(exponent))}
            </div>
          </div>
        </div>
      )}

      {base === 0 && exponent <= 0 && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 mb-4">
          <div className="text-red-400 text-sm">
            <strong>Undefined:</strong> 0⁰ and 0 raised to negative powers are undefined.
          </div>
        </div>
      )}

      {/* Pattern table */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h4 className="text-sm font-semibold text-dark-300 mb-3 text-center">Pattern for base {base}</h4>
        <div className="grid grid-cols-5 gap-2 text-center text-sm font-mono">
          {[-2, -1, 0, 1, 2].map(exp => {
            const val = Math.pow(base, exp);
            const isSelected = exp === exponent;
            return (
              <button
                key={exp}
                onClick={() => setExponent(exp)}
                className={`p-2 rounded transition-all ${
                  isSelected
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-700/50 text-dark-300 hover:bg-dark-600'
                }`}
              >
                <div className="text-xs text-dark-500">{base}<sup>{exp}</sup></div>
                <div className={isSelected ? 'text-white' : ''}>
                  {base === 0 && exp <= 0 ? '—' :
                   Number.isFinite(val) ? (val % 1 === 0 ? val : val.toFixed(2)) : '∞'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick base examples */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {[2, 3, 5, 10, -2].map(b => (
          <button
            key={b}
            onClick={() => setBase(b)}
            className={`px-3 py-1 rounded text-sm transition-all ${
              base === b
                ? 'bg-cyan-600 text-white'
                : 'bg-dark-700 hover:bg-dark-600 text-dark-300'
            }`}
          >
            base = {b}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Explore how changing the base and exponent affects the result.
      </p>
    </div>
  );
}
