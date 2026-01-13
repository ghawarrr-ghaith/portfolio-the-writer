import React from 'react';
import content from '../data/content.json';
import { Mail, MapPin } from 'lucide-react';

const SectionContact: React.FC = () => {
  const { contact: contactData } = content;

  return (
    <section id="contact" className="py-24 bg-aw-paper dark:bg-aw-black min-h-[80vh] flex flex-col justify-center transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className={`flex flex-col mb-16 md:mb-24 text-left items-start`}>
          <span className="font-display tracking-[0.2em] text-sm md:text-base text-gray-500 dark:text-gray-400 uppercase mb-2 block">
            {contactData.sectionTitle.subtitle}
          </span>
          <h2 className="font-display text-aw-scarlet text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.85] tracking-tight relative z-10 mix-blend-multiply dark:mix-blend-screen transition-all duration-500">
            {contactData.sectionTitle.title}
          </h2>
          <div className="h-1 w-24 bg-aw-scarlet mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info */}
          <div className="space-y-12">
            <p className="font-display text-3xl md:text-5xl text-gray-900 dark:text-white uppercase leading-tight transition-colors duration-500">
              {contactData.heading.line1} <br />
              <span className="text-gray-400 dark:text-gray-500 line-through decoration-aw-scarlet decoration-4">{contactData.heading.line2}</span>
              <span className="text-aw-scarlet dark:text-aw-yellow block mt-2 transition-colors">{contactData.heading.line3}</span>
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group">
                <div className="p-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 group-hover:border-aw-scarlet">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-gray-500">{contactData.email.label}</span>
                  <span className="font-display text-xl tracking-wider">{contactData.email.value}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group">
                <div className="p-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 group-hover:border-aw-scarlet">
                  <MapPin size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-gray-500">{contactData.location.label}</span>
                  <span className="font-display text-xl tracking-wider">{contactData.location.value}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6 p-8 border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm transition-colors duration-500 shadow-lg dark:shadow-none">
            <div>
              <label className="block font-display text-xs uppercase tracking-widest text-aw-scarlet mb-2">{contactData.form.nameLabel}</label>
              <input
                type="text"
                placeholder={contactData.form.namePlaceholder}
                className={`w-full bg-white dark:bg-black/50 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:border-aw-scarlet transition-colors font-body`}
              />
            </div>

            <div>
              <label className="block font-display text-xs uppercase tracking-widest text-aw-scarlet mb-2">{contactData.form.emailLabel}</label>
              <input
                type="email"
                placeholder={contactData.form.emailPlaceholder}
                className={`w-full bg-white dark:bg-black/50 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:border-aw-scarlet transition-colors font-body`}
              />
            </div>

            <div>
              <label className="block font-display text-xs uppercase tracking-widest text-aw-scarlet mb-2">{contactData.form.messageLabel}</label>
              <textarea
                rows={4}
                placeholder={contactData.form.messagePlaceholder}
                className={`w-full bg-white dark:bg-black/50 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-3 focus:outline-none focus:border-aw-scarlet transition-colors font-body resize-none`}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full bg-aw-scarlet text-white font-display font-bold uppercase tracking-[0.2em] py-4 hover:bg-red-700 transition-colors mt-4`}
            >
              {contactData.form.submitButton}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default SectionContact;