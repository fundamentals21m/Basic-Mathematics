import { useState } from 'react';
import { useGamification } from '../../contexts/GamificationContext';

type Operator = 'AND' | 'OR' | 'IMPLIES' | 'IFF';

const OPERATORS: { id: Operator; symbol: string; name: string }[] = [
  { id: 'AND', symbol: '∧', name: 'AND' },
  { id: 'OR', symbol: '∨', name: 'OR' },
  { id: 'IMPLIES', symbol: '→', name: 'IMPLIES' },
  { id: 'IFF', symbol: '↔', name: 'IFF' },
];

function evaluate(p: boolean, q: boolean, op: Operator): boolean {
  switch (op) {
    case 'AND':
      return p && q;
    case 'OR':
      return p || q;
    case 'IMPLIES':
      return !p || q; // P → Q is equivalent to ¬P ∨ Q
    case 'IFF':
      return p === q;
  }
}

function BoolValue({ value }: { value: boolean }) {
  return (
    <span className={`font-mono font-bold ${value ? 'text-emerald-400' : 'text-red-400'}`}>
      {value ? 'T' : 'F'}
    </span>
  );
}

export function TruthTableBuilder() {
  const [operator, setOperator] = useState<Operator>('AND');
  const [includeNot, setIncludeNot] = useState(false);
  const { useVisualization } = useGamification();

  const handleInteraction = () => {
    useVisualization(13, 'TruthTableBuilder');
  };

  const rows: { p: boolean; q: boolean }[] = [
    { p: true, q: true },
    { p: true, q: false },
    { p: false, q: true },
    { p: false, q: false },
  ];

  const selectedOp = OPERATORS.find((o) => o.id === operator)!;

  return (
    <div className="my-8 p-6 rounded-2xl bg-dark-800/40 border border-dark-700/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-dark-100">Truth Table Builder</h3>
        <span className="text-xs text-dark-500">Interactive</span>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="block text-sm text-dark-400 mb-2">Operator</label>
          <div className="flex gap-2">
            {OPERATORS.map((op) => (
              <button
                key={op.id}
                onClick={() => {
                  setOperator(op.id);
                  handleInteraction();
                }}
                className={`px-4 py-2 rounded-lg font-mono text-lg transition-all ${
                  operator === op.id
                    ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                    : 'bg-dark-700/50 text-dark-400 border border-dark-600/50 hover:bg-dark-700'
                }`}
              >
                {op.symbol}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm text-dark-400 mb-2">Options</label>
          <button
            onClick={() => {
              setIncludeNot(!includeNot);
              handleInteraction();
            }}
            className={`px-4 py-2 rounded-lg transition-all ${
              includeNot
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                : 'bg-dark-700/50 text-dark-400 border border-dark-600/50 hover:bg-dark-700'
            }`}
          >
            Include ¬P, ¬Q
          </button>
        </div>
      </div>

      {/* Expression Display */}
      <div className="text-center mb-6 p-4 rounded-xl bg-dark-900/50">
        <span className="text-2xl font-mono text-dark-100">
          P {selectedOp.symbol} Q
        </span>
        <p className="text-sm text-dark-500 mt-1">
          {operator === 'AND' && '"P and Q" — true only when both are true'}
          {operator === 'OR' && '"P or Q" — true when at least one is true'}
          {operator === 'IMPLIES' && '"If P then Q" — false only when P is true and Q is false'}
          {operator === 'IFF' && '"P if and only if Q" — true when both have the same value'}
        </p>
      </div>

      {/* Truth Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="px-4 py-3 text-left text-sm font-semibold text-dark-300">P</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-dark-300">Q</th>
              {includeNot && (
                <>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-dark-400">¬P</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-dark-400">¬Q</th>
                </>
              )}
              <th className="px-4 py-3 text-left text-sm font-semibold text-primary-400">
                P {selectedOp.symbol} Q
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const result = evaluate(row.p, row.q, operator);
              return (
                <tr
                  key={i}
                  className={`border-b border-dark-800 ${
                    result ? 'bg-emerald-500/5' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <BoolValue value={row.p} />
                  </td>
                  <td className="px-4 py-3">
                    <BoolValue value={row.q} />
                  </td>
                  {includeNot && (
                    <>
                      <td className="px-4 py-3">
                        <BoolValue value={!row.p} />
                      </td>
                      <td className="px-4 py-3">
                        <BoolValue value={!row.q} />
                      </td>
                    </>
                  )}
                  <td className="px-4 py-3">
                    <BoolValue value={result} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Explanation */}
      <div className="mt-6 p-4 rounded-xl bg-dark-900/50 text-sm text-dark-400">
        <strong className="text-dark-300">How to read:</strong>{' '}
        {operator === 'AND' && 'The result is T only in the first row where both P and Q are true.'}
        {operator === 'OR' && 'The result is T in all rows except the last where both are false.'}
        {operator === 'IMPLIES' && 'The result is F only in row 2 where P is true but Q is false.'}
        {operator === 'IFF' && 'The result is T only when P and Q have matching values (rows 1 and 4).'}
      </div>
    </div>
  );
}
