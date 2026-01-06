import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavBarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navItems: NavItem[] = [
  { label: 'Start', href: '#hero' },
  { label: 'The Story', href: '#about' },
  { label: 'Case Files', href: '#projects' },
  { label: 'Mind Place', href: '#skills' },
  { label: 'End Line', href: '#contact' },
];

const NavBar: React.FC<NavBarProps> = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out px-6 py-4 md:px-12 ${
        scrolled ? 'bg-white/90 dark:bg-aw-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'
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
  );
};

export default NavBar;