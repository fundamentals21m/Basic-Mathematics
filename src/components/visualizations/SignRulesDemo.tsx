import { useState } from 'react';

export function SignRulesDemo() {
  const [num1, setNum1] = useState(3);
  const [num2, setNum2] = useState(-4);

  const product = num1 * num2;
  const sign1 = num1 >= 0 ? '+' : '−';
  const sign2 = num2 >= 0 ? '+' : '−';
  const signProduct = product >= 0 ? '+' : '−';

  const getSignColor = (n: number) => {
    if (n > 0) return 'text-emerald-400';
    if (n < 0) return 'text-red-400';
    return 'text-dark-400';
  };

  const getSignBg = (n: number) => {
    if (n > 0) return 'bg-emerald-500/20 border-emerald-500/30';
    if (n < 0) return 'bg-red-500/20 border-red-500/30';
    return 'bg-dark-700/50 border-dark-600/30';
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-6">Sign Rules for Multiplication</h3>

      {/* Interactive section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        {/* First number */}
        <div className="text-center">
          <label className="block text-sm text-dark-400 mb-2">First Number</label>
          <input
            type="range"
            min="-10"
            max="10"
            value={num1}
            onChange={(e) => setNum1(parseInt(e.target.value))}
            className="w-32 accent-primary-500"
          />
          <div className={`mt-2 text-3xl font-mono font-bold ${getSignColor(num1)}`}>
            {num1}
          </div>
          <div className={`mt-1 px-3 py-1 rounded-full text-sm border ${getSignBg(num1)}`}>
            {num1 > 0 ? 'Positive' : num1 < 0 ? 'Negative' : 'Zero'}
          </div>
        </div>

        {/* Multiplication sign */}
        <div className="text-4xl text-dark-500 font-bold">×</div>

        {/* Second number */}
        <div className="text-center">
          <label className="block text-sm text-dark-400 mb-2">Second Number</label>
          <input
            type="range"
            min="-10"
            max="10"
            value={num2}
            onChange={(e) => setNum2(parseInt(e.target.value))}
            className="w-32 accent-primary-500"
          />
          <div className={`mt-2 text-3xl font-mono font-bold ${getSignColor(num2)}`}>
            {num2}
          </div>
          <div className={`mt-1 px-3 py-1 rounded-full text-sm border ${getSignBg(num2)}`}>
            {num2 > 0 ? 'Positive' : num2 < 0 ? 'Negative' : 'Zero'}
          </div>
        </div>

        {/* Equals sign */}
        <div className="text-4xl text-dark-500 font-bold">=</div>

        {/* Product */}
        <div className="text-center">
          <label className="block text-sm text-dark-400 mb-2">Product</label>
          <div className={`text-4xl font-mono font-bold ${getSignColor(product)}`}>
            {product}
          </div>
          <div className={`mt-1 px-3 py-1 rounded-full text-sm border ${getSignBg(product)}`}>
            {product > 0 ? 'Positive' : product < 0 ? 'Negative' : 'Zero'}
          </div>
        </div>
      </div>

      {/* Rule display */}
      {num1 !== 0 && num2 !== 0 && (
        <div className="text-center p-4 rounded-xl bg-dark-800/60 border border-dark-700/50">
          <span className={`text-xl ${getSignColor(num1)}`}>({sign1})</span>
          <span className="text-xl text-dark-400 mx-2">×</span>
          <span className={`text-xl ${getSignColor(num2)}`}>({sign2})</span>
          <span className="text-xl text-dark-400 mx-2">=</span>
          <span className={`text-xl ${getSignColor(product)}`}>({signProduct})</span>
        </div>
      )}

      {/* Sign rules table */}
      <div className="mt-8">
        <h4 className="text-md font-semibold text-dark-200 mb-4 text-center">Sign Rules Summary</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl mx-auto">
          <div className={`p-3 rounded-lg text-center ${num1 > 0 && num2 > 0 ? 'ring-2 ring-primary-500' : ''} bg-emerald-500/10 border border-emerald-500/20`}>
            <div className="text-emerald-400">(+) × (+)</div>
            <div className="text-emerald-400 font-bold">=  (+)</div>
          </div>
          <div className={`p-3 rounded-lg text-center ${num1 > 0 && num2 < 0 ? 'ring-2 ring-primary-500' : ''} bg-red-500/10 border border-red-500/20`}>
            <div className="text-dark-300">(+) × (−)</div>
            <div className="text-red-400 font-bold">=  (−)</div>
          </div>
          <div className={`p-3 rounded-lg text-center ${num1 < 0 && num2 > 0 ? 'ring-2 ring-primary-500' : ''} bg-red-500/10 border border-red-500/20`}>
            <div className="text-dark-300">(−) × (+)</div>
            <div className="text-red-400 font-bold">=  (−)</div>
          </div>
          <div className={`p-3 rounded-lg text-center ${num1 < 0 && num2 < 0 ? 'ring-2 ring-primary-500' : ''} bg-emerald-500/10 border border-emerald-500/20`}>
            <div className="text-dark-300">(−) × (−)</div>
            <div className="text-emerald-400 font-bold">=  (+)</div>
          </div>
        </div>
      </div>

      <p className="text-sm text-dark-500 mt-6 text-center">
        Drag the sliders to explore different combinations of positive and negative numbers.
      </p>
    </div>
  );
}
