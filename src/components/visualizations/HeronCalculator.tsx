import { useState } from 'react';

export function HeronCalculator() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(6);
  const [c, setC] = useState(7);

  // Check triangle inequality
  const isValid = a + b > c && b + c > a && c + a > b && a > 0 && b > 0 && c > 0;

  // Calculate semi-perimeter and area
  const s = (a + b + c) / 2;
  const areaSquared = isValid ? s * (s - a) * (s - b) * (s - c) : 0;
  const area = isValid && areaSquared >= 0 ? Math.sqrt(areaSquared) : 0;

  // Calculate intermediate values for display
  const sMinusA = s - a;
  const sMinusB = s - b;
  const sMinusC = s - c;

  const presets = [
    { a: 3, b: 4, c: 5, label: '3-4-5 (right)' },
    { a: 5, b: 5, c: 5, label: 'Equilateral 5' },
    { a: 5, b: 6, c: 7, label: '5-6-7' },
    { a: 13, b: 14, c: 15, label: '13-14-15' },
  ];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Heron's Formula Calculator
      </h3>

      {/* Side inputs */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[
          { label: 'Side a', value: a, setter: setA, color: 'primary' },
          { label: 'Side b', value: b, setter: setB, color: 'cyan' },
          { label: 'Side c', value: c, setter: setC, color: 'emerald' },
        ].map(({ label, value, setter, color }) => (
          <div key={label}>
            <label className="block text-xs text-dark-500 mb-1">{label}</label>
            <input
              type="number"
              min="0.1"
              step="0.5"
              value={value}
              onChange={(e) => setter(Number(e.target.value) || 0.1)}
              className={`w-full h-10 text-center font-mono bg-dark-700 border border-dark-600 rounded text-${color}-400 focus:border-${color}-500 focus:outline-none`}
            />
          </div>
        ))}
      </div>

      {/* Validity check */}
      {!isValid && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-center mb-4">
          <span className="text-red-400">Invalid triangle (violates triangle inequality)</span>
        </div>
      )}

      {isValid && (
        <>
          {/* Step-by-step calculation */}
          <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
            <div className="text-sm text-dark-400 mb-3">Step-by-step calculation:</div>
            <div className="space-y-2 font-mono text-sm">
              <div className="text-dark-300">
                <span className="text-dark-500">1.</span> s = (a + b + c) / 2 = ({a} + {b} + {c}) / 2 = <span className="text-amber-400">{s}</span>
              </div>
              <div className="text-dark-300">
                <span className="text-dark-500">2.</span> s - a = {s} - {a} = <span className="text-primary-400">{sMinusA}</span>
              </div>
              <div className="text-dark-300">
                <span className="text-dark-500">3.</span> s - b = {s} - {b} = <span className="text-cyan-400">{sMinusB}</span>
              </div>
              <div className="text-dark-300">
                <span className="text-dark-500">4.</span> s - c = {s} - {c} = <span className="text-emerald-400">{sMinusC}</span>
              </div>
              <div className="text-dark-300 pt-2 border-t border-dark-700">
                <span className="text-dark-500">5.</span> Area = √(s × (s-a) × (s-b) × (s-c))
              </div>
              <div className="text-dark-300 pl-4">
                = √(<span className="text-amber-400">{s}</span> × <span className="text-primary-400">{sMinusA}</span> × <span className="text-cyan-400">{sMinusB}</span> × <span className="text-emerald-400">{sMinusC}</span>)
              </div>
              <div className="text-dark-300 pl-4">
                = √({(s * sMinusA * sMinusB * sMinusC).toFixed(2)})
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 text-center mb-4">
            <div className="text-dark-400 text-sm mb-1">Area</div>
            <div className="text-3xl font-bold text-primary-400">
              {area.toFixed(4)}
            </div>
            <div className="text-dark-500 text-sm mt-1">
              ≈ {area.toFixed(2)} square units
            </div>
          </div>

          {/* Additional info */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 text-center">
              <div className="text-xs text-dark-500 mb-1">Perimeter</div>
              <div className="font-mono text-dark-300">{a + b + c}</div>
            </div>
            <div className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 text-center">
              <div className="text-xs text-dark-500 mb-1">Semi-perimeter (s)</div>
              <div className="font-mono text-amber-400">{s}</div>
            </div>
          </div>
        </>
      )}

      {/* Presets */}
      <div className="flex flex-wrap justify-center gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => {
              setA(preset.a);
              setB(preset.b);
              setC(preset.c);
            }}
            className="px-3 py-1 rounded text-sm bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2
      </p>
    </div>
  );
}
