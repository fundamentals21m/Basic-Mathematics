import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import Home from './pages/Home';
import Section00 from './pages/chapters/Section00';
import PlaceholderSection from './pages/chapters/PlaceholderSection';

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

function App() {
  return (
    <HashRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Section 0: The Integers - fully implemented */}
          <Route path="/section/0" element={<Section00 />} />
          {/* All other sections use placeholder for now */}
          {Array.from({ length: 63 }, (_, i) => i + 1).map((id) => (
            <Route
              key={id}
              path={`/section/${id}`}
              element={<PlaceholderSection sectionId={id} />}
            />
          ))}
          {/* Chapter routes (placeholders) */}
          <Route path="/chapter/:id" element={<Home />} />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
}

export default App;
