import { useState } from 'react';

type Operation = 'add' | 'multiply';

export function ParityCalculator() {
  const [a, setA] = useState(4);
  const [b, setB] = useState(7);
  const [operation, setOperation] = useState<Operation>('add');

  const isEven = (n: number) => n % 2 === 0;

  const result = operation === 'add' ? a + b : a * b;
  const aIsEven = isEven(a);
  const bIsEven = isEven(b);
  const resultIsEven = isEven(result);

  const getParityLabel = (even: boolean) => even ? 'Even' : 'Odd';
  const getParityColor = (even: boolean) => even ? 'text-emerald-400' : 'text-purple-400';
  const getParityBg = (even: boolean) => even ? 'bg-emerald-500/20' : 'bg-purple-500/20';

  // Get the parity rule explanation
  const getRule = () => {
    if (operation === 'add') {
      if (aIsEven && bIsEven) return { rule: 'Even + Even = Even', explanation: '2m + 2n = 2(m + n)' };
      if (!aIsEven && !bIsEven) return { rule: 'Odd + Odd = Even', explanation: '(2m+1) + (2n+1) = 2(m + n + 1)' };
      return { rule: 'Even + Odd = Odd', explanation: '2m + (2n+1) = 2(m + n) + 1' };
    } else {
      if (aIsEven && bIsEven) return { rule: 'Even × Even = Even', explanation: '2m × 2n = 2(2mn)' };
      if (!aIsEven && !bIsEven) return { rule: 'Odd × Odd = Odd', explanation: '(2m+1)(2n+1) = 2(2mn + m + n) + 1' };
      return { rule: 'Even × Odd = Even', explanation: '2m × (2n+1) = 2(m(2n+1))' };
    }
  };

  const { rule, explanation } = getRule();

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Parity Calculator
      </h3>

      {/* Operation selector */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setOperation('add')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            operation === 'add'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Addition
        </button>
        <button
          onClick={() => setOperation('multiply')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            operation === 'multiply'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Multiplication
        </button>
      </div>

      {/* Value selectors */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">First number (a)</label>
          <input
            type="range"
            min={-10}
            max={10}
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className={`w-full ${aIsEven ? 'accent-emerald-500' : 'accent-purple-500'}`}
          />
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className={`font-mono text-2xl font-bold ${getParityColor(aIsEven)}`}>{a}</span>
            <span className={`text-xs px-2 py-0.5 rounded ${getParityBg(aIsEven)} ${getParityColor(aIsEven)}`}>
              {getParityLabel(aIsEven)}
            </span>
          </div>
        </div>
        <div>
          <label className="block text-sm text-dark-400 mb-2">Second number (b)</label>
          <input
            type="range"
            min={-10}
            max={10}
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className={`w-full ${bIsEven ? 'accent-emerald-500' : 'accent-purple-500'}`}
          />
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className={`font-mono text-2xl font-bold ${getParityColor(bIsEven)}`}>{b}</span>
            <span className={`text-xs px-2 py-0.5 rounded ${getParityBg(bIsEven)} ${getParityColor(bIsEven)}`}>
              {getParityLabel(bIsEven)}
            </span>
          </div>
        </div>
      </div>

      {/* Calculation display */}
      <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 mb-4">
        <div className="flex items-center justify-center gap-4 text-2xl font-mono flex-wrap">
          <span className={getParityColor(aIsEven)}>{a}</span>
          <span className="text-dark-400">{operation === 'add' ? '+' : '×'}</span>
          <span className={getParityColor(bIsEven)}>{b}</span>
          <span className="text-dark-400">=</span>
          <span className={`font-bold ${getParityColor(resultIsEven)}`}>{result}</span>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4 text-sm flex-wrap">
          <span className={`px-2 py-1 rounded ${getParityBg(aIsEven)} ${getParityColor(aIsEven)}`}>
            {getParityLabel(aIsEven)}
          </span>
          <span className="text-dark-400">{operation === 'add' ? '+' : '×'}</span>
          <span className={`px-2 py-1 rounded ${getParityBg(bIsEven)} ${getParityColor(bIsEven)}`}>
            {getParityLabel(bIsEven)}
          </span>
          <span className="text-dark-400">=</span>
          <span className={`px-2 py-1 rounded ${getParityBg(resultIsEven)} ${getParityColor(resultIsEven)} font-semibold`}>
            {getParityLabel(resultIsEven)}
          </span>
        </div>
      </div>

      {/* Rule explanation */}
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30">
        <div className="text-center">
          <div className="text-lg font-semibold text-primary-400">{rule}</div>
          <div className="text-sm text-dark-400 mt-2 font-mono">{explanation}</div>
        </div>
      </div>

      {/* Quick reference */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-lg bg-dark-800/30">
          <div className="text-sm font-semibold text-dark-300 mb-2">Addition Rules:</div>
          <ul className="text-xs text-dark-400 space-y-1">
            <li><span className="text-emerald-400">Even</span> + <span className="text-emerald-400">Even</span> = <span className="text-emerald-400">Even</span></li>
            <li><span className="text-purple-400">Odd</span> + <span className="text-purple-400">Odd</span> = <span className="text-emerald-400">Even</span></li>
            <li><span className="text-emerald-400">Even</span> + <span className="text-purple-400">Odd</span> = <span className="text-purple-400">Odd</span></li>
          </ul>
        </div>
        <div className="p-3 rounded-lg bg-dark-800/30">
          <div className="text-sm font-semibold text-dark-300 mb-2">Multiplication Rules:</div>
          <ul className="text-xs text-dark-400 space-y-1">
            <li><span className="text-emerald-400">Even</span> × <span className="text-emerald-400">Even</span> = <span className="text-emerald-400">Even</span></li>
            <li><span className="text-purple-400">Odd</span> × <span className="text-purple-400">Odd</span> = <span className="text-purple-400">Odd</span></li>
            <li><span className="text-emerald-400">Even</span> × <span className="text-purple-400">Odd</span> = <span className="text-emerald-400">Even</span></li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-4 text-center">
        Adjust the sliders and switch between operations to explore parity rules.
      </p>
    </div>
  );
}
