import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import Home from './pages/Home';
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
    <HashRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />

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

          {/* Remaining sections (13-63) use placeholder */}
          {Array.from({ length: 51 }, (_, i) => i + 13).map((id) => (
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
  );
}

export default App;
