import React from 'react';
import content from '../data/content.json';

const Hero: React.FC = () => {
  const { hero } = content;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aw-paper dark:bg-aw-black transition-colors duration-500">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="mb-4 animate-fade-in-slow">
          <span className="font-display text-gray-900 dark:text-aw-yellow uppercase tracking-[0.3em] text-sm md:text-lg border border-gray-900 dark:border-aw-yellow px-4 py-1">
            {hero.tagline}
          </span>
        </div>

        <h1 className="font-display text-center leading-none">
          <span className="block text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white font-bold tracking-tight mb-2 opacity-90 transition-colors duration-500">
            {hero.titlePrefix}
          </span>
          <span className="block text-[15vw] md:text-[12rem] text-aw-scarlet font-bold uppercase tracking-tighter mix-blend-multiply dark:mix-blend-normal opacity-100 leading-[0.8] transition-all duration-500">
            {hero.titleMain}
          </span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row gap-8 items-center">
          <a href="#projects" className="group relative px-8 py-3 bg-transparent border border-gray-900 dark:border-white overflow-hidden transition-all hover:border-aw-scarlet">
            <span className="relative z-10 font-display text-gray-900 dark:text-white tracking-widest uppercase text-lg group-hover:text-white dark:group-hover:text-black transition-colors">{hero.ctaText}</span>
            <div className="absolute inset-0 bg-aw-black dark:bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-6 md:left-12 font-display text-xs text-gray-500 tracking-[0.2em] uppercase">
        <p>{hero.draftText}</p>
        <p>{hero.coordText}</p>
      </div>
    </section>
  );
};

export default Hero;