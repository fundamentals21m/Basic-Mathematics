import { type ReactNode, useState } from 'react';

interface ContentBlockProps {
  title: string;
  children: ReactNode;
  className?: string;
}

interface TheoremProps extends ContentBlockProps {
  proof?: ReactNode;
}

export function Definition({ title, children, className = '' }: ContentBlockProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500/10 via-dark-800/80 to-dark-800/60 backdrop-blur border border-primary-500/20 p-5 transition-all duration-300 hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/5 ${className}`}>
      {/* Decorative gradient orb */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl group-hover:bg-primary-500/30 transition-colors" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/20 text-primary-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-500">Definition</span>
            <h4 className="font-semibold text-dark-100">{title}</h4>
          </div>
        </div>
        <div className="text-dark-300 leading-relaxed pl-11">{children}</div>
      </div>
    </div>
  );
}

export function Theorem({ title, children, proof, className = '' }: TheoremProps) {
  const [showProof, setShowProof] = useState(false);

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/10 via-dark-800/80 to-dark-800/60 backdrop-blur border border-amber-500/20 p-5 transition-all duration-300 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5 ${className}`}
      >
        {/* Decorative gradient orb */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/30 transition-colors" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Theorem</span>
                {proof && (
                  <button
                    onClick={() => setShowProof(true)}
                    className="text-xs text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    View Proof
                  </button>
                )}
              </div>
              <h4 className="font-semibold text-dark-100">{title}</h4>
            </div>
          </div>
          <div className="text-dark-300 leading-relaxed pl-11">{children}</div>
        </div>
      </div>

      {/* Proof Modal */}
      {proof && showProof && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-sm"
          onClick={() => setShowProof(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-dark-900 border border-amber-500/30 shadow-2xl shadow-amber-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-4 border-b border-dark-700 bg-dark-900/95 backdrop-blur">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">Proof</span>
                <h3 className="font-semibold text-dark-100">{title}</h3>
              </div>
              <button
                onClick={() => setShowProof(false)}
                className="p-2 rounded-lg hover:bg-dark-800 text-dark-400 hover:text-dark-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="text-dark-300 leading-relaxed">{proof}</div>
              <div className="flex justify-end mt-6">
                <span className="px-4 py-2 text-sm font-semibold bg-dark-800 text-dark-300 rounded-lg border border-dark-700">
                  ∎ QED
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Example({ title, children, className = '' }: ContentBlockProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 via-dark-800/80 to-dark-800/60 backdrop-blur border border-emerald-500/20 p-5 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 ${className}`}>
      {/* Decorative gradient orb */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/30 transition-colors" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">Example</span>
            <h4 className="font-semibold text-dark-100">{title}</h4>
          </div>
        </div>
        <div className="text-dark-300 leading-relaxed pl-11">{children}</div>
      </div>
    </div>
  );
}

export function Proof({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-dark-900/60 backdrop-blur border border-dark-700/50 p-5 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center justify-center w-6 h-6 rounded-md bg-dark-700/50 text-dark-400">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-sm font-medium text-dark-400 italic">Proof</span>
      </div>
      <div className="text-dark-300 leading-relaxed pl-8">{children}</div>
      <div className="flex justify-end mt-4">
        <span className="px-3 py-1 text-xs font-semibold bg-dark-800/80 text-dark-400 rounded-lg border border-dark-700/50">
          ∎ QED
        </span>
      </div>
    </div>
  );
}

// Additional block for Axioms (common in basic algebra)
export function Axiom({ title, children, className = '' }: ContentBlockProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 via-dark-800/80 to-dark-800/60 backdrop-blur border border-cyan-500/20 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 ${className}`}>
      {/* Decorative gradient orb */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-colors" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500">Axiom</span>
            <h4 className="font-semibold text-dark-100">{title}</h4>
          </div>
        </div>
        <div className="text-dark-300 leading-relaxed pl-11">{children}</div>
      </div>
    </div>
  );
}
