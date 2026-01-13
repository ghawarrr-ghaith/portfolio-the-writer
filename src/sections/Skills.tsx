import React from 'react';
import content from '../data/content.json';

const SectionSkills: React.FC = () => {
  const { skills: skillsData } = content;

  return (
    <section id="skills" className="py-24 bg-gray-100 dark:bg-aw-dark relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col mb-16 md:mb-24 text-center items-center`}>
          <span className="font-display tracking-[0.2em] text-sm md:text-base text-gray-500 dark:text-gray-400 uppercase mb-2 block">
            {skillsData.sectionTitle.subtitle}
          </span>
          <h2 className="font-display text-aw-scarlet text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.85] tracking-tight relative z-10 mix-blend-multiply dark:mix-blend-screen transition-all duration-500">
            {skillsData.sectionTitle.title}
          </h2>
          <div className="h-1 w-24 bg-aw-scarlet mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {skillsData.categories.map((skillGroup, index) => (
            <div key={skillGroup.category} className="relative">
              {/* Polaroid/Card Effect */}
              <div className="bg-white p-6 transform transition-transform hover:-translate-y-2 duration-300 shadow-xl rotate-1 md:rotate-0 hover:rotate-0 border border-gray-200 dark:border-transparent">
                <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-2">
                  <h3 className="text-black font-display text-3xl font-bold uppercase">{skillGroup.category}</h3>
                  <span className="text-aw-scarlet font-bold text-xl">0{index + 1}</span>
                </div>

                <ul className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="flex items-center group">
                      <span className="w-2 h-2 bg-black mr-3 group-hover:bg-aw-scarlet transition-colors"></span>
                      <span className="font-display text-gray-800 text-lg uppercase tracking-wide group-hover:line-through decoration-aw-scarlet decoration-2">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 font-handwriting text-gray-500 text-sm italic border-t border-gray-300 pt-2 flex justify-between">
                  <span>{skillsData.statusLabel}</span>
                  <span>{skillsData.confidentialLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-display text-aw-scarlet text-xl uppercase tracking-[0.2em] animate-pulse">
            {skillsData.deductionText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;