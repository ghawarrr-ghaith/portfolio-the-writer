import React from 'react';
import SectionTitle from '../components/section-title';
import content from '../data/content.json';

const About: React.FC = () => {
  const { about } = content;

  return (
    <section id="about" className="py-24 md:py-32 relative bg-gray-100 dark:bg-aw-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle={about.sectionTitle.subtitle} title={about.sectionTitle.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="font-display text-3xl md:text-4xl text-gray-900 dark:text-white uppercase mb-4 border-l-4 border-aw-scarlet pl-6 transition-colors duration-500">
              {about.heading}
            </h3>
            <p className="font-body text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-500">
              {about.description1}
            </p>
            <p className="font-body text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-500">
              {about.description2}
            </p>

            <div className="pt-8">
              <div className="inline-block p-4 border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/50 backdrop-blur-sm transform -rotate-1 transition-colors duration-500 shadow-sm">
                <p className="font-display text-aw-scarlet dark:text-aw-yellow uppercase text-sm tracking-widest mb-1">{about.currentObjectiveLabel}</p>
                <p className="font-body text-gray-900 dark:text-white">{about.currentObjectiveText}</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 border-2 border-aw-scarlet opacity-20 transform rotate-2"></div>
            <div className="absolute -inset-4 border border-gray-900 dark:border-white opacity-10 transform -rotate-2"></div>
            <img
              src={about.profileImage}
              alt="Profile"
              className="relative w-full h-[500px] object-cover filter grayscale contrast-125 brightness-90 shadow-2xl"
            />

            {/* Overlay Text Effect */}
            <div className="absolute bottom-10 -left-10 bg-aw-scarlet px-6 py-2 transform -rotate-3 z-10 shadow-lg">
              <span className="font-display text-white text-xl font-bold uppercase tracking-widest">{about.profileLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;