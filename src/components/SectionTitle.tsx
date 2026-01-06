import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, className = '', align = 'center' }) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col mb-16 md:mb-24 ${alignmentClasses[align]} ${className}`}>
      <span className="font-display tracking-[0.2em] text-sm md:text-base text-gray-500 dark:text-gray-400 uppercase mb-2 block">
        {subtitle}
      </span>
      {/* 
        Light mode: mix-blend-multiply to darken into the white background.
        Dark mode: mix-blend-screen to lighten/glow against black background.
      */}
      <h2 className="font-display text-aw-scarlet text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.85] tracking-tight relative z-10 mix-blend-multiply dark:mix-blend-screen transition-all duration-500">
        {title}
      </h2>
      <div className="h-1 w-24 bg-aw-scarlet mt-6"></div>
    </div>
  );
};

export default SectionTitle;