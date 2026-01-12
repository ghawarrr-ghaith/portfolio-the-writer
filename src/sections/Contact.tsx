import React from 'react';
import SectionTitle from '../components/section-title';
import Button from '../components/button';
import Input from '../components/input';
import InputWide from '../components/input-wide';
import content from '../data/content.json';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { contact: contactData } = content;

  return (
    <section id="contact" className="py-24 bg-aw-paper dark:bg-aw-black min-h-[80vh] flex flex-col justify-center transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <SectionTitle subtitle={contactData.sectionTitle.subtitle} title={contactData.sectionTitle.title} align="left" />

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
            <Input
              label={contactData.form.nameLabel}
              type="text"
              placeholder={contactData.form.namePlaceholder}
            />

            <Input
              label={contactData.form.emailLabel}
              type="email"
              placeholder={contactData.form.emailPlaceholder}
            />

            <InputWide
              label={contactData.form.messageLabel}
              rows={4}
              placeholder={contactData.form.messagePlaceholder}
            />

            <Button type="submit">
              {contactData.form.submitButton}
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;