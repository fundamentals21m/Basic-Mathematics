import { useState } from 'react';

export function EvenOddExplorer() {
  const [highlightType, setHighlightType] = useState<'all' | 'even' | 'odd'>('all');
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  // Generate numbers from -10 to 20
  const numbers = Array.from({ length: 31 }, (_, i) => i - 10);

  const isEven = (n: number) => n % 2 === 0;

  const getNumberClass = (n: number) => {
    const even = isEven(n);
    const baseClass = 'w-10 h-10 rounded-lg flex items-center justify-center font-mono text-sm cursor-pointer transition-all';

    if (highlightType === 'even' && !even) {
      return `${baseClass} bg-dark-800/30 text-dark-600`;
    }
    if (highlightType === 'odd' && even) {
      return `${baseClass} bg-dark-800/30 text-dark-600`;
    }

    const isSelected = selectedNumber === n;

    if (even) {
      return `${baseClass} ${isSelected ? 'bg-emerald-500 text-white ring-2 ring-emerald-300' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'}`;
    } else {
      return `${baseClass} ${isSelected ? 'bg-purple-500 text-white ring-2 ring-purple-300' : 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30'}`;
    }
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">
        Explore Even and Odd Numbers
      </h3>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <button
          onClick={() => setHighlightType('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
            highlightType === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Show All
        </button>
        <button
          onClick={() => setHighlightType('even')}
          className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
            highlightType === 'even'
              ? 'bg-emerald-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Even Only
        </button>
        <button
          onClick={() => setHighlightType('odd')}
          className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
            highlightType === 'odd'
              ? 'bg-purple-600 text-white'
              : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
          }`}
        >
          Odd Only
        </button>
      </div>

      {/* Number grid */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {numbers.map((n) => (
          <div
            key={n}
            className={getNumberClass(n)}
            onClick={() => setSelectedNumber(selectedNumber === n ? null : n)}
          >
            {n}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-emerald-500/40"></div>
          <span className="text-dark-400 text-sm">Even (2n)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-purple-500/40"></div>
          <span className="text-dark-400 text-sm">Odd (2n + 1)</span>
        </div>
      </div>

      {/* Selected number details */}
      {selectedNumber !== null && (
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <div className="text-center">
            <span className={`text-3xl font-bold font-mono ${isEven(selectedNumber) ? 'text-emerald-400' : 'text-purple-400'}`}>
              {selectedNumber}
            </span>
            <span className="text-dark-400 text-lg ml-2">is</span>
            <span className={`text-lg font-semibold ml-2 ${isEven(selectedNumber) ? 'text-emerald-400' : 'text-purple-400'}`}>
              {isEven(selectedNumber) ? 'EVEN' : 'ODD'}
            </span>
          </div>
          <div className="mt-4 text-center text-dark-300 font-mono">
            {isEven(selectedNumber) ? (
              <span>
                {selectedNumber} = 2 × {selectedNumber / 2} = <span className="text-emerald-400">2n</span> where n = {selectedNumber / 2}
              </span>
            ) : (
              <span>
                {selectedNumber} = 2 × {Math.floor(selectedNumber / 2)} + 1 = <span className="text-purple-400">2n + 1</span> where n = {Math.floor(selectedNumber / 2)}
              </span>
            )}
          </div>
        </div>
      )}

      <p className="text-sm text-dark-500 mt-4 text-center">
        Click on any number to see why it's even or odd.
      </p>
    </div>
  );
}
