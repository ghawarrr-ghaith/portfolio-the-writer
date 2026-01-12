import React, { useState, useEffect } from 'react';
import TopBar from './components/bar-top';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import FadeInSection from './components/fade-in-section';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import BottomBar from './components/bar-bottom';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useKeyboardNavigation();

  useEffect(() => {
    // Initialize theme based on state
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    // Check system preference on load if strictly needed, but default to dark for this brand
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      // Optional: setIsDark(false);
    }
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div>
      <div className="relative bg-aw-paper dark:bg-aw-black text-aw-ink dark:text-gray-200 min-h-screen selection:bg-aw-scarlet selection:text-white transition-colors duration-500">

        {/* Vignette effect - lighter in light mode */}
        <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>

        <TopBar isDark={isDark} toggleTheme={toggleTheme} />

        <main className="relative z-10">
          <FadeInSection id="hero">
            <Hero />
          </FadeInSection>

          <FadeInSection id="about">
            <About />
          </FadeInSection>

          <FadeInSection id="projects">
            <Projects />
          </FadeInSection>

          <FadeInSection id="skills">
            <Skills />
          </FadeInSection>

          <FadeInSection id="contact">
            <Contact />
          </FadeInSection>
        </main>

        <BottomBar />
      </div>
    </div>
  );
};

export default App;