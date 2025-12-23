import { NavLink } from 'react-router-dom';
import { curriculum } from '../../data/curriculum';
import { useGamification, makeSectionId } from '../../contexts/GamificationContext';
import { MasteryIndicator } from '../gamification/MasteryIndicator';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const INTERLUDE_SECTION_ID = 13;
const INTERLUDE_REQUIRED_XP = 2000;

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { state } = useGamification();

  // Get mastery level for a section
  const getMasteryLevel = (sectionId: number) => {
    return state.sections[makeSectionId(sectionId)]?.masteryLevel ?? 'none';
  };

  // Check if section is completed
  const isCompleted = (sectionId: number) => {
    return state.user.sectionsCompleted.includes(makeSectionId(sectionId));
  };

  // Check if the Interlude is locked
  const isInterludeLocked = state.user.totalXP < INTERLUDE_REQUIRED_XP;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 bottom-0 w-72 bg-dark-900/95 backdrop-blur-xl border-r border-dark-700/50
          overflow-y-auto scrollbar-thin z-40
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.02] to-transparent pointer-events-none" />

        <nav className="relative p-4">
          {curriculum.map((chapter) => (
            <div key={`ch-${chapter.id}`} className="mb-6">
              <div className="flex items-center gap-2 px-3 py-2 mb-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary-500/20 to-cyan-500/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-400">{chapter.id || '∗'}</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-dark-500 truncate">
                  {chapter.title}
                </span>
              </div>

              <ul className="space-y-0.5">
                {chapter.sections.map((section) => {
                  const isSectionLocked = section.id === INTERLUDE_SECTION_ID && isInterludeLocked;

                  return (
                    <li key={section.id}>
                      <NavLink
                        to={`/section/${section.id}`}
                        onClick={() => onClose()}
                        className={({ isActive }) =>
                          `group flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl transition-all duration-200 ${
                            isSectionLocked
                              ? 'text-dark-600 cursor-pointer'
                              : isActive
                              ? 'text-primary-400 bg-primary-500/10 shadow-sm shadow-primary-500/5'
                              : 'text-dark-400 hover:text-dark-100 hover:bg-dark-800/50'
                          }`
                        }
                      >
                        {({ isActive }) => {
                          const mastery = getMasteryLevel(section.id);
                          const completed = isCompleted(section.id);
                          return (
                            <>
                              <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-medium transition-all duration-200 ${
                                isSectionLocked
                                  ? 'bg-dark-800/50 text-dark-600'
                                  : isActive
                                  ? 'bg-primary-500/20 text-primary-400'
                                  : completed
                                  ? 'bg-emerald-500/20 text-emerald-400'
                                  : 'bg-dark-800/50 text-dark-500 group-hover:bg-dark-700/50 group-hover:text-dark-300'
                              }`}>
                                {isSectionLocked ? (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                  </svg>
                                ) : completed ? '✓' : section.id}
                              </span>
                              <span className="truncate flex-1">{section.title}</span>
                              <div className="ml-auto flex items-center gap-1">
                                {isSectionLocked ? (
                                  <span className="text-xs text-dark-600">2K XP</span>
                                ) : (
                                  <>
                                    {mastery !== 'none' && <MasteryIndicator level={mastery} />}
                                    {isActive && (
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                                    )}
                                  </>
                                )}
                              </div>
                            </>
                          );
                        }}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
