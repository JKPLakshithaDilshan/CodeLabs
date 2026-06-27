import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/websiteData';
import { Project } from '../types';
import { ExternalLink, MessageSquare, Plus, X, Layers, Code, CheckCircle2 } from 'lucide-react';

interface PortfolioProps {
  whatsappUrl: string;
}

export default function Portfolio({ whatsappUrl }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-zinc-900 tracking-tight">
            Exemplary Portfolios
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 font-sans">
            A handpicked selection of system architectures and applications built to guide students in understanding clean architectures, database relations, and interactive interfaces.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg hover:border-zinc-300 transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 border-b border-zinc-200/60">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />

                {/* Category pill */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs border border-zinc-200 px-3 py-1 rounded-full text-[10px] font-bold font-mono text-zinc-800 tracking-wider uppercase">
                  {project.category}
                </div>
              </div>

              {/* Info content */}
              <div className="p-6 flex flex-col justify-between h-[210px]">
                <div>
                  <h3 className="font-display font-semibold text-lg text-zinc-900 leading-snug group-hover:text-[#007AFF] transition-colors mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-sans line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags list */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-50 text-zinc-600 border border-zinc-200/80 rounded-md px-2 py-0.5 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-[#007AFF]/5 text-[#007AFF] border border-[#007AFF]/10 rounded-md px-2 py-0.5 text-[10px] font-semibold">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Dialog for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              id="portfolio-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Body */}
            <motion.div
              id="portfolio-modal-container"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 max-h-[90vh] flex flex-col z-10"
            >
              {/* Close Button */}
              <button
                id="close-portfolio-modal"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-25 p-2 bg-white/90 backdrop-blur-xs hover:bg-white border border-zinc-200 rounded-full text-zinc-600 hover:text-zinc-900 transition-all cursor-pointer shadow-sm"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable Container */}
              <div className="overflow-y-auto">
                <div className="relative aspect-video w-full bg-zinc-50 border-b border-zinc-200">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 border border-zinc-200 px-3.5 py-1.5 rounded-full text-[10px] font-bold font-mono text-zinc-800 tracking-wider uppercase">
                    {selectedProject.category}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-display font-bold text-2xl text-zinc-900 leading-tight mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-sm text-zinc-600 font-sans leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Core Features Column */}
                  <div className="mb-8">
                    <h4 className="font-display font-semibold text-zinc-800 text-sm mb-3 uppercase tracking-wider">
                      Key Architectural Highlights
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-[#007AFF] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack used */}
                  <div className="mb-8">
                    <h4 className="font-display font-semibold text-zinc-800 text-sm mb-3 uppercase tracking-wider">
                      Technologies Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-zinc-50 text-zinc-700 border border-zinc-200/80 rounded-lg px-3 py-1.5 text-xs font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky bottom CTA */}
              <div className="p-6 bg-zinc-50 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center gap-4 justify-between">
                <span className="text-xs text-zinc-500 font-sans text-center sm:text-left">
                  Need a system or capstone similar to this project?
                </span>
                <a
                  id="portfolio-modal-whatsapp-cta"
                  href={`${whatsappUrl}&text=Hi%20NextGen%20Studio!%20I%20saw%20your%20${encodeURIComponent(selectedProject.title)}%20portfolio%20project%20and%20I%20would%20like%20to%20request%20guidance%20for%20a%20similar%20system.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#007AFF] hover:bg-[#0051C7] text-white text-xs font-bold px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
