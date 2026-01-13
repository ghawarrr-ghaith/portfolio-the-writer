import React, { useState, useEffect, useRef } from 'react';
import SectionHero from './sections/Hero';
import SectionAbout from './sections/About';
import SectionProjects from './sections/Projects';
import SectionSkills from './sections/Skills';
import SectionContact from './sections/Contact';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { Menu, X, Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // States for intersection observer (fade in effect)
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useKeyboardNavigation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setVisibleSections(prev => ({ ...prev, [id]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    [heroRef, aboutRef, projectsRef, skillsRef, contactRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const navItems = [
    { label: 'Start', href: '#hero' },
    { label: 'The Story', href: '#about' },
    { label: 'Case Files', href: '#projects' },
    { label: 'Mind Place', href: '#skills' },
    { label: 'End Line', href: '#contact' },
  ];

  return (
    <div>
      <div className="relative bg-aw-paper dark:bg-aw-black text-aw-ink dark:text-gray-200 min-h-screen selection:bg-aw-scarlet selection:text-white transition-colors duration-500">

        {/* Vignette effect */}
        <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>

        {/* TopBar Inline */}
        <nav
          className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out px-6 py-4 md:px-12 ${scrolled ? 'bg-white/90 dark:bg-aw-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'
            }`}
        >
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <a href="#hero" className="font-display text-2xl font-bold tracking-widest text-aw-ink dark:text-white hover:text-aw-scarlet transition-colors">
              WAKE<span className="text-aw-scarlet">.DEV</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-display text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:line-through decoration-aw-scarlet decoration-2 transition-all"
                >
                  {item.label}
                </a>
              ))}

              <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>

              <button
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-400 hover:text-aw-scarlet transition-colors"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="text-gray-800 dark:text-white"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="text-gray-800 dark:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white dark:bg-aw-black border-b border-gray-200 dark:border-gray-800 p-8 flex flex-col gap-6 md:hidden shadow-2xl">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-xl uppercase tracking-widest text-gray-900 dark:text-white border-l-2 border-transparent hover:border-aw-scarlet pl-4 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </nav>

        <main className="relative z-10">
          <div
            id="hero"
            ref={heroRef}
            className={`transition-all duration-1000 ease-out transform ${visibleSections['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
          >
            <SectionHero />
          </div>

          <div
            id="about"
            ref={aboutRef}
            className={`transition-all duration-1000 ease-out transform ${visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
          >
            <SectionAbout />
          </div>

          <div
            id="projects"
            ref={projectsRef}
            className={`transition-all duration-1000 ease-out transform ${visibleSections['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
          >
            <SectionProjects />
          </div>

          <div
            id="skills"
            ref={skillsRef}
            className={`transition-all duration-1000 ease-out transform ${visibleSections['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
          >
            <SectionSkills />
          </div>

          <div
            id="contact"
            ref={contactRef}
            className={`transition-all duration-1000 ease-out transform ${visibleSections['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
          >
            <SectionContact />
          </div>
        </main>

        {/* BottomBar Inline */}
        <footer className="bg-white dark:bg-black py-8 border-t border-gray-200 dark:border-gray-900 relative z-10 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 dark:text-gray-600 text-sm font-display tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} The Creator.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>Twitter</span>
              <span>LinkedIn</span>
              <span>Github</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;