import { useState } from 'react';

type Operation = 'add' | 'multiply-positive' | 'multiply-negative';

export function InequalityRulesDemo() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(2);
  const [c, setC] = useState(3);
  const [operation, setOperation] = useState<Operation>('add');

  // Ensure a > b for the demo
  const left = Math.max(a, b);
  const right = Math.min(a, b);

  // Calculate results based on operation
  const calculate = () => {
    switch (operation) {
      case 'add': {
        const newLeft = left + c;
        const newRight = right + c;
        return {
          leftResult: newLeft,
          rightResult: newRight,
          newComparison: newLeft > newRight ? '>' : newLeft < newRight ? '<' : '=',
          flipped: false,
          explanation: `Adding ${c} to both sides preserves the inequality`,
        };
      }
      case 'multiply-positive': {
        const posC = Math.abs(c) || 1;
        const newLeft = left * posC;
        const newRight = right * posC;
        return {
          leftResult: newLeft,
          rightResult: newRight,
          newComparison: newLeft > newRight ? '>' : newLeft < newRight ? '<' : '=',
          flipped: false,
          multiplier: posC,
          explanation: `Multiplying by positive ${posC} preserves the inequality`,
        };
      }
      case 'multiply-negative': {
        const negC = -Math.abs(c) || -1;
        const newLeft = left * negC;
        const newRight = right * negC;
        return {
          leftResult: newLeft,
          rightResult: newRight,
          newComparison: newLeft > newRight ? '>' : newLeft < newRight ? '<' : '=',
          flipped: true,
          multiplier: negC,
          explanation: `Multiplying by negative ${negC} REVERSES the inequality!`,
        };
      }
    }
  };

  const result = calculate();

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Inequality Rules Demo
      </h3>

      {/* Operation selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => setOperation('add')}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            operation === 'add'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Add to Both Sides
        </button>
        <button
          onClick={() => setOperation('multiply-positive')}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            operation === 'multiply-positive'
              ? 'bg-emerald-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Multiply by Positive
        </button>
        <button
          onClick={() => setOperation('multiply-negative')}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            operation === 'multiply-negative'
              ? 'bg-red-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Multiply by Negative
        </button>
      </div>

      {/* Starting inequality */}
      <div className="p-4 rounded-xl bg-dark-800/60 border border-dark-700 mb-4 text-center">
        <div className="text-dark-500 text-sm mb-2">Starting with:</div>
        <div className="font-mono text-2xl">
          <span className="text-cyan-400">{left}</span>
          <span className="text-emerald-400 mx-3">&gt;</span>
          <span className="text-purple-400">{right}</span>
        </div>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">a</label>
          <input
            type="range"
            min={-5}
            max={10}
            step={1}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <div className="text-center font-mono text-lg text-cyan-400">{a}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">b</label>
          <input
            type="range"
            min={-5}
            max={10}
            step={1}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
          <div className="text-center font-mono text-lg text-purple-400">{b}</div>
        </div>
        <div>
          <label className="block text-xs text-dark-500 mb-1 text-center">c</label>
          <input
            type="range"
            min={-5}
            max={5}
            step={1}
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            className="w-full accent-yellow-500"
          />
          <div className="text-center font-mono text-lg text-yellow-400">{c}</div>
        </div>
      </div>

      {/* Operation display */}
      <div className="p-4 rounded-xl bg-dark-800/40 mb-4 text-center">
        <div className="text-dark-400 text-sm mb-2">
          {operation === 'add' && `Add ${c} to both sides:`}
          {operation === 'multiply-positive' && `Multiply both sides by ${Math.abs(c) || 1}:`}
          {operation === 'multiply-negative' && `Multiply both sides by ${-Math.abs(c) || -1}:`}
        </div>
        <div className="font-mono text-lg text-dark-300">
          {operation === 'add' && (
            <>
              ({left}) + ({c}) <span className="text-dark-500 mx-2">and</span> ({right}) + ({c})
            </>
          )}
          {operation === 'multiply-positive' && (
            <>
              ({left}) × ({Math.abs(c) || 1}) <span className="text-dark-500 mx-2">and</span> ({right}) × ({Math.abs(c) || 1})
            </>
          )}
          {operation === 'multiply-negative' && (
            <>
              ({left}) × ({-Math.abs(c) || -1}) <span className="text-dark-500 mx-2">and</span> ({right}) × ({-Math.abs(c) || -1})
            </>
          )}
        </div>
      </div>

      {/* Result */}
      <div className={`p-6 rounded-xl border ${
        result.flipped
          ? 'bg-red-500/10 border-red-500/50'
          : 'bg-emerald-500/10 border-emerald-500/50'
      } mb-4`}>
        <div className="text-center">
          <div className="font-mono text-2xl mb-3">
            <span className="text-cyan-400">{result.leftResult}</span>
            <span className={`mx-3 ${result.flipped ? 'text-red-400' : 'text-emerald-400'}`}>
              {result.newComparison}
            </span>
            <span className="text-purple-400">{result.rightResult}</span>
          </div>
          <div className={`text-sm ${result.flipped ? 'text-red-400' : 'text-emerald-400'}`}>
            {result.explanation}
          </div>
        </div>
      </div>

      {/* Warning for negative multiplication */}
      {operation === 'multiply-negative' && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 mb-4">
          <div className="flex items-center justify-center gap-2 text-red-400">
            <span className="text-xl">⚠️</span>
            <span className="font-semibold">
              The inequality sign FLIPPED from &gt; to &lt;
            </span>
          </div>
          <div className="text-center text-dark-400 text-sm mt-2">
            This is the critical rule: multiplying or dividing by a negative reverses the inequality!
          </div>
        </div>
      )}

      {/* Visual comparison */}
      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <div className="text-center text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-dark-500 mb-1">Before</div>
              <div className="font-mono text-emerald-400">{left} &gt; {right}</div>
            </div>
            <div>
              <div className="text-dark-500 mb-1">After</div>
              <div className={`font-mono ${result.flipped ? 'text-red-400' : 'text-emerald-400'}`}>
                {result.leftResult} {result.newComparison} {result.rightResult}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Remember: Negative multiplier = flip the inequality sign!
      </p>
    </div>
  );
}
