import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { GamificationProvider } from './contexts/GamificationContext';
import { NostrAuthProvider } from '@shared/contexts/NostrAuthContext';
import { AchievementToastContainer } from './components/gamification';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import {
  Section00,
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
  Section07,
  Section08,
  Section09,
  Section10,
  Section11,
  Section12,
  Section13,
  Section14,
  Section15,
  Section16,
  Section17,
  Section18,
  Section19,
  Section20,
  Section21,
  Section22,
  Section23,
  Section24,
  Section25,
  Section26,
  Section27,
  PlaceholderSection,
} from './pages/chapters';
import {
  NumbersQuiz,
  LinearEquationsQuiz,
  RealNumbersQuiz,
  QuadraticsQuiz,
} from './components/quiz';

function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-950">
      <Header
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="pt-16 lg:pl-72">
        {children}
      </main>
    </div>
  );
}

// Quiz wrapper component
function QuizPage({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-dark-100 mb-8">{title}</h1>
      {children}
    </div>
  );
}

function App() {
  return (
    <GamificationProvider>
      <NostrAuthProvider>
        <AchievementToastContainer />
        <HashRouter>
          <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />

          {/* Chapter 1: Numbers (Sections 0-5) */}
          <Route path="/section/0" element={<Section00 />} />
          <Route path="/section/1" element={<Section01 />} />
          <Route path="/section/2" element={<Section02 />} />
          <Route path="/section/3" element={<Section03 />} />
          <Route path="/section/4" element={<Section04 />} />
          <Route path="/section/5" element={<Section05 />} />

          {/* Chapter 2: Linear Equations (Sections 6-7) */}
          <Route path="/section/6" element={<Section06 />} />
          <Route path="/section/7" element={<Section07 />} />

          {/* Chapter 3: Real Numbers (Sections 8-11) */}
          <Route path="/section/8" element={<Section08 />} />
          <Route path="/section/9" element={<Section09 />} />
          <Route path="/section/10" element={<Section10 />} />
          <Route path="/section/11" element={<Section11 />} />

          {/* Chapter 4: Quadratic Equations (Section 12) */}
          <Route path="/section/12" element={<Section12 />} />

          {/* Chapter 13: Functions (Section 13) */}
          <Route path="/section/13" element={<Section13 />} />

          {/* Chapter 14: Mappings (Section 14) */}
          <Route path="/section/14" element={<Section14 />} />

          {/* Chapter 15: Complex Numbers (Section 15) */}
          <Route path="/section/15" element={<Section15 />} />

          {/* Chapter 16: Induction and Summations (Section 16) */}
          <Route path="/section/16" element={<Section16 />} />

          {/* Chapter 17: Determinants (Section 17) */}
          <Route path="/section/17" element={<Section17 />} />

          {/* Chapter 6: Isometries (Section 18) */}
          <Route path="/section/18" element={<Section18 />} />

          {/* Chapter 6: Congruence (Section 19) */}
          <Route path="/section/19" element={<Section19 />} />

          {/* Chapter 7: Area of Parallelograms (Section 20) */}
          <Route path="/section/20" element={<Section20 />} />

          {/* Chapter 7: Area of Triangles (Section 21) */}
          <Route path="/section/21" element={<Section21 />} />

          {/* Chapter 7: Pythagoras Theorem Proof (Section 22) */}
          <Route path="/section/22" element={<Section22 />} />

          {/* Chapter 8: Coordinate Systems (Section 23) */}
          <Route path="/section/23" element={<Section23 />} />

          {/* Chapter 8: Distance in the Plane (Section 24) */}
          <Route path="/section/24" element={<Section24 />} />

          {/* Chapter 8: Equation of a Circle (Section 25) */}
          <Route path="/section/25" element={<Section25 />} />

          {/* Chapter 9: Dilations and Reflections (Section 26) */}
          <Route path="/section/26" element={<Section26 />} />

          {/* Chapter 9: Addition and Subtraction of Points (Section 27) */}
          <Route path="/section/27" element={<Section27 />} />

          {/* Remaining sections (28-63) use placeholder */}
          {Array.from({ length: 36 }, (_, i) => i + 28).map((id) => (
            <Route
              key={id}
              path={`/section/${id}`}
              element={<PlaceholderSection sectionId={id} />}
            />
          ))}

          {/* Quiz routes */}
          <Route
            path="/quiz/numbers"
            element={
              <QuizPage title="Chapter 1 Quiz: Numbers">
                <NumbersQuiz />
              </QuizPage>
            }
          />
          <Route
            path="/quiz/linear-equations"
            element={
              <QuizPage title="Chapter 2 Quiz: Linear Equations">
                <LinearEquationsQuiz />
              </QuizPage>
            }
          />
          <Route
            path="/quiz/real-numbers"
            element={
              <QuizPage title="Chapter 3 Quiz: Real Numbers">
                <RealNumbersQuiz />
              </QuizPage>
            }
          />
          <Route
            path="/quiz/quadratics"
            element={
              <QuizPage title="Chapter 4 Quiz: Quadratic Equations">
                <QuadraticsQuiz />
              </QuizPage>
            }
          />
            </Routes>
          </AppLayout>
        </HashRouter>
      </NostrAuthProvider>
    </GamificationProvider>
  );
}

export default App;
