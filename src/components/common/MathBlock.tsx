import { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathProps {
  children: string;
  display?: boolean;
  className?: string;
}

export function Math({ children, display = false, className = '' }: MathProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(children, containerRef.current, {
          displayMode: display,
          throwOnError: false,
          strict: false,
        });
      } catch (error) {
        console.error('KaTeX error:', error);
        if (containerRef.current) {
          containerRef.current.textContent = children;
        }
      }
    }
  }, [children, display]);

  if (display) {
    return (
      <div className={`math-block ${className}`}>
        <span ref={containerRef} />
      </div>
    );
  }

  return <span ref={containerRef} className={className} />;
}

interface MathBlockProps {
  children: string;
  className?: string;
  label?: string;
}

export function MathBlock({ children, className = '', label }: MathBlockProps) {
  return (
    <div className={`relative ${className}`}>
      <Math display>{children}</Math>
      {label && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-500 text-sm">
          ({label})
        </span>
      )}
    </div>
  );
}

// Common math expressions for basic algebra
export const MathSymbols = {
  // Number sets
  naturals: '\\mathbb{N}',
  integers: '\\mathbb{Z}',
  rationals: '\\mathbb{Q}',
  reals: '\\mathbb{R}',
  complex: '\\mathbb{C}',

  // Basic operations
  plus: '+',
  minus: '-',
  times: '\\times',
  cdot: '\\cdot',
  divide: '\\div',
  equals: '=',
  notEquals: '\\neq',

  // Inequalities
  lessThan: '<',
  greaterThan: '>',
  lessOrEqual: '\\leq',
  greaterOrEqual: '\\geq',

  // Common symbols
  plusMinus: '\\pm',
  infinity: '\\infty',
  therefore: '\\therefore',
  because: '\\because',

  // Greek letters commonly used
  alpha: '\\alpha',
  beta: '\\beta',
  theta: '\\theta',
  pi: '\\pi',

  // Set notation
  element: '\\in',
  notElement: '\\notin',
  subset: '\\subseteq',
  emptySet: '\\emptyset',
  union: '\\cup',
  intersection: '\\cap',

  // Arrows
  to: '\\to',
  mapsto: '\\mapsto',
  implies: '\\Rightarrow',
  iff: '\\Leftrightarrow',

  // Functions
  sqrt: (x: string | number) => `\\sqrt{${x}}`,
  nthRoot: (n: string | number, x: string | number) => `\\sqrt[${n}]{${x}}`,
  abs: (x: string | number) => `|${x}|`,
  gcd: '\\gcd',
  lcm: '\\text{lcm}',
};

// Helper functions for common patterns
export function fraction(num: string | number, denom: string | number): string {
  return `\\frac{${num}}{${denom}}`;
}

export function power(base: string | number, exp: string | number): string {
  return `${base}^{${exp}}`;
}

export function subscript(base: string, sub: string | number): string {
  return `${base}_{${sub}}`;
}

export function sqrt(x: string | number): string {
  return `\\sqrt{${x}}`;
}

export function nthRoot(n: string | number, x: string | number): string {
  return `\\sqrt[${n}]{${x}}`;
}

export function abs(expr: string | number): string {
  return `|${expr}|`;
}

export function set(...elements: (string | number)[]): string {
  return `\\{${elements.join(', ')}\\}`;
}

export function tuple(...elements: (string | number)[]): string {
  return `(${elements.join(', ')})`;
}

export function paren(expr: string): string {
  return `\\left(${expr}\\right)`;
}

export function bracket(expr: string): string {
  return `\\left[${expr}\\right]`;
}
