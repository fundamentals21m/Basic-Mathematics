import { Link } from 'react-router-dom';
import { curriculum, getPartTitle } from '../data/curriculum';
import { useGamification } from '../contexts/GamificationContext';
import { DailyGoalCard } from '../components/gamification/DailyGoalCard';
import { ProgressStats } from '../components/gamification/ProgressStats';
import { AchievementGrid } from '../components/gamification/AchievementGrid';

export default function Home() {
  const { state } = useGamification();
  const hasProgress = state.user.totalXP > 0;
  // Group chapters by part
  const parts = [1, 2, 3];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating decoration */}
          <div className="absolute top-32 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute top-48 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-2s' }} />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-sm font-medium text-primary-400">Based on Lang's Basic Mathematics</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-gradient">Basic Algebra</span>
            </h1>

            <p className="text-xl md:text-2xl text-dark-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Master the fundamentals of algebra through interactive lessons,
              visualizations, and hands-on exercises.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/section/0"
                className="btn-primary text-lg px-8 py-4"
              >
                <span>Start Learning</span>
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="#curriculum"
                className="btn-secondary text-lg px-8 py-4"
              >
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Dashboard - only shown if user has progress */}
      {hasProgress && (
        <section className="relative py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <DailyGoalCard />
              <ProgressStats />
            </div>
            <AchievementGrid />
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="relative py-16 px-6 border-y border-dark-800/50 bg-dark-900/30 backdrop-blur">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">17</div>
              <div className="text-dark-400">Chapters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">64</div>
              <div className="text-dark-400">Sections</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100+</div>
              <div className="text-dark-400">Exercises</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">∞</div>
              <div className="text-dark-400">Practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Curriculum</span>
            </h2>
            <p className="text-xl text-dark-400 max-w-2xl mx-auto">
              A complete journey from integers to complex numbers, covering algebra, geometry, and trigonometry.
            </p>
          </div>

          {parts.map((partNum) => {
            const chaptersInPart = curriculum.filter(c => c.part === partNum);
            return (
              <div key={partNum} className="mb-16">
                <h3 className="text-2xl font-bold text-dark-200 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/10 flex items-center justify-center">
                    <span className="text-primary-400 font-bold">{partNum}</span>
                  </span>
                  {getPartTitle(partNum)}
                </h3>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {chaptersInPart.map((chapter) => (
                    <Link
                      key={`ch-${chapter.id}`}
                      to={`/section/${chapter.sections[0].id}`}
                      className="group card hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary-500/30 group-hover:to-cyan-500/20 transition-all">
                          <span className="text-lg font-bold text-primary-400">{chapter.id || '∗'}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-dark-100 group-hover:text-primary-400 transition-colors mb-1">
                            {chapter.title}
                          </h4>
                          <p className="text-sm text-dark-500">
                            {chapter.sections.length} section{chapter.sections.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-dark-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-6 bg-dark-900/30 border-t border-dark-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Interactive Learning</span>
            </h2>
            <p className="text-xl text-dark-400 max-w-2xl mx-auto">
              Learn algebra the way it should be taught — with visual intuition and hands-on practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyan-500/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-100 mb-3">Visual Intuition</h3>
              <p className="text-dark-400">
                Interactive number lines, graphs, and geometric visualizations bring abstract concepts to life.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyan-500/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-100 mb-3">Practice Quizzes</h3>
              <p className="text-dark-400">
                Test your understanding with quizzes at multiple difficulty levels and instant feedback.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyan-500/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-100 mb-3">Rigorous Content</h3>
              <p className="text-dark-400">
                Based on Serge Lang's classic textbook, with clear definitions, theorems, and proofs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to begin?
          </h2>
          <p className="text-xl text-dark-400 mb-10">
            Start with the integers and work your way up to complex numbers and beyond.
          </p>
          <Link
            to="/section/0"
            className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2"
          >
            <span>Start with Chapter 1</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
