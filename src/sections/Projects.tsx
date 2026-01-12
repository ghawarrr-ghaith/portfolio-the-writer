import React from 'react';
import SectionTitle from '../components/section-title';
import content from '../data/content.json';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const { projects: projectsData } = content;

  return (
    <section id="projects" className="py-24 bg-aw-paper dark:bg-aw-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle={projectsData.sectionTitle.subtitle} title={projectsData.sectionTitle.title} align="right" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.items.map((project) => (
            <div key={project.id} className="group relative bg-white dark:bg-aw-grey border border-gray-200 dark:border-gray-800 hover:border-aw-scarlet transition-all duration-300 overflow-hidden shadow-sm dark:shadow-none">

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-aw-scarlet/0 group-hover:bg-aw-scarlet/20 transition-colors z-10 duration-300"></div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 dark:bg-aw-black/80 text-black dark:text-white text-xs font-display tracking-widest uppercase px-2 py-1 border border-gray-300 dark:border-gray-600">
                    Evidence #{project.id}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-aw-scarlet text-xs font-display font-bold uppercase tracking-widest mb-1">{project.category}</p>
                    <h3 className="text-gray-900 dark:text-white text-2xl font-display font-bold uppercase transition-colors">{project.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 font-body text-sm mb-6 leading-relaxed border-l-2 border-gray-300 dark:border-gray-700 pl-4 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs text-gray-500 dark:text-gray-500 font-mono bg-gray-100 dark:bg-black px-2 py-1 rounded-none border border-gray-200 dark:border-gray-800 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 transition-colors">
                  <a href="#" className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-aw-scarlet dark:hover:text-aw-scarlet transition-colors font-display uppercase tracking-wider text-sm">
                    <Github size={16} /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-aw-scarlet dark:hover:text-aw-yellow transition-colors font-display uppercase tracking-wider text-sm">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;