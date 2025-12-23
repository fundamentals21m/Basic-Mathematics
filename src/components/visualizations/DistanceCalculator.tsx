import { useState } from 'react';

export function DistanceCalculator() {
  const [x1, setX1] = useState('0');
  const [y1, setY1] = useState('0');
  const [x2, setX2] = useState('3');
  const [y2, setY2] = useState('4');
  const [showSteps, setShowSteps] = useState(true);

  const parseNum = (s: string) => {
    const n = parseFloat(s);
    return isNaN(n) ? 0 : n;
  };

  const p1 = { x: parseNum(x1), y: parseNum(y1) };
  const p2 = { x: parseNum(x2), y: parseNum(y2) };
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const dxSq = dx * dx;
  const dySq = dy * dy;
  const sum = dxSq + dySq;
  const distance = Math.sqrt(sum);

  // Try to simplify the radical
  const simplifyRadical = (n: number): { coefficient: number; radicand: number } => {
    if (n <= 0) return { coefficient: 0, radicand: 0 };
    if (Number.isInteger(Math.sqrt(n))) return { coefficient: Math.sqrt(n), radicand: 1 };

    let coefficient = 1;
    let radicand = n;

    for (let i = Math.floor(Math.sqrt(n)); i >= 2; i--) {
      if (radicand % (i * i) === 0) {
        coefficient *= i;
        radicand /= i * i;
      }
    }

    return { coefficient, radicand };
  };

  const simplified = Number.isInteger(sum) ? simplifyRadical(sum) : null;

  const commonTriples = [
    { name: '3-4-5', x1: 0, y1: 0, x2: 3, y2: 4 },
    { name: '5-12-13', x1: 0, y1: 0, x2: 5, y2: 12 },
    { name: '8-15-17', x1: 0, y1: 0, x2: 8, y2: 15 },
    { name: '7-24-25', x1: 0, y1: 0, x2: 7, y2: 24 },
  ];

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Distance Calculator
      </h3>

      {/* Input fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-xl bg-dark-800/50 border border-cyan-500/30">
          <div className="text-cyan-400 font-semibold mb-2 text-center">Point 1</div>
          <div className="flex gap-2 justify-center">
            <div className="flex items-center gap-1">
              <span className="text-dark-400 text-sm">x₁:</span>
              <input
                type="number"
                value={x1}
                onChange={(e) => setX1(e.target.value)}
                className="w-16 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-dark-200 text-center"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-dark-400 text-sm">y₁:</span>
              <input
                type="number"
                value={y1}
                onChange={(e) => setY1(e.target.value)}
                className="w-16 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-dark-200 text-center"
              />
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-dark-800/50 border border-purple-500/30">
          <div className="text-purple-400 font-semibold mb-2 text-center">Point 2</div>
          <div className="flex gap-2 justify-center">
            <div className="flex items-center gap-1">
              <span className="text-dark-400 text-sm">x₂:</span>
              <input
                type="number"
                value={x2}
                onChange={(e) => setX2(e.target.value)}
                className="w-16 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-dark-200 text-center"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-dark-400 text-sm">y₂:</span>
              <input
                type="number"
                value={y2}
                onChange={(e) => setY2(e.target.value)}
                className="w-16 px-2 py-1 bg-dark-700 border border-dark-600 rounded text-dark-200 text-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Common triples buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <span className="text-dark-500 text-sm">Try:</span>
        {commonTriples.map((triple) => (
          <button
            key={triple.name}
            onClick={() => {
              setX1(triple.x1.toString());
              setY1(triple.y1.toString());
              setX2(triple.x2.toString());
              setY2(triple.y2.toString());
            }}
            className="px-2 py-1 rounded text-xs bg-dark-700 hover:bg-dark-600 text-dark-300 transition-all"
          >
            {triple.name}
          </button>
        ))}
      </div>

      {/* Toggle steps */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowSteps(!showSteps)}
          className={`px-3 py-1 rounded text-sm transition-all ${
            showSteps
              ? 'bg-primary-500 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          {showSteps ? 'Hide Steps' : 'Show Steps'}
        </button>
      </div>

      {/* Calculation */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        {showSteps && (
          <div className="space-y-2 text-sm mb-4">
            <div className="text-dark-400 text-center">
              d = √[(x₂ - x₁)² + (y₂ - y₁)²]
            </div>
            <div className="text-dark-300 text-center font-mono">
              = √[({p2.x} - {p1.x})² + ({p2.y} - {p1.y})²]
            </div>
            <div className="text-dark-300 text-center font-mono">
              = √[({dx})² + ({dy})²]
            </div>
            <div className="text-dark-300 text-center font-mono">
              = √[{dxSq} + {dySq}]
            </div>
            <div className="text-dark-300 text-center font-mono">
              = √{sum}
            </div>
          </div>
        )}

        {/* Result */}
        <div className="text-center">
          <div className="text-dark-400 text-sm mb-1">Distance</div>
          <div className="text-2xl font-bold text-primary-400">
            {Number.isInteger(distance) ? (
              distance
            ) : simplified && simplified.radicand === 1 ? (
              simplified.coefficient
            ) : simplified && simplified.coefficient > 1 ? (
              <span>
                {simplified.coefficient}√{simplified.radicand}
              </span>
            ) : (
              <span>√{sum}</span>
            )}
          </div>
          {!Number.isInteger(distance) && (
            <div className="text-dark-500 text-sm mt-1">
              ≈ {distance.toFixed(4)}
            </div>
          )}
        </div>
      </div>

      {/* Perfect squares indicator */}
      {Number.isInteger(distance) && (
        <div className="mt-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center">
          <span className="text-emerald-400 text-sm">
            Perfect result! {Math.round(Math.abs(dx))}-{Math.round(Math.abs(dy))}-{Math.round(distance)} is a Pythagorean triple.
          </span>
        </div>
      )}
    </div>
  );
}
