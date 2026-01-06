import { useEffect } from 'react';

export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid interference with inputs
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      
      // Find current section index based on scroll position
      let currentIndex = -1;
      let minDiff = Infinity;

      sections.forEach((id, index) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // We consider the element "current" if its top is close to 0 or it covers a significant part of the viewport
          // A simple metric is distance of top from 0
          const diff = Math.abs(rect.top);
          if (diff < minDiff) {
            minDiff = diff;
            currentIndex = index;
          }
        }
      });

      if (currentIndex === -1) currentIndex = 0;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        // Wrap around is optional, but usually portfolios don't wrap from bottom to top on arrow down
        // However, the prompt says "nav between sections", commonly implies linear.
        // If user wants wrap, I can add it, but standard is linear.
        // Let's do linear for now.
        if (nextIndex !== currentIndex) {
            document.getElementById(sections[nextIndex])?.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        if (prevIndex !== currentIndex) {
            document.getElementById(sections[prevIndex])?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
};
