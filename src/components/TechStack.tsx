import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TECHNOLOGIES } from '../data/websiteData';
import { Layers, Terminal, Database, ShieldCheck, Cpu } from 'lucide-react';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'languages' | 'frontend' | 'backend' | 'tools'>('all');

  const categories = [
    { label: 'All Tech', id: 'all', icon: Cpu },
    { label: 'Languages', id: 'languages', icon: Terminal },
    { label: 'Frontend', id: 'frontend', icon: Layers },
    { label: 'Backend', id: 'backend', icon: Database },
    { label: 'Tools', id: 'tools', icon: ShieldCheck }
  ] as const;

  const filteredTech = selectedCategory === 'all'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter(tech => tech.category === selectedCategory);

  return (
    <section id="technologies" className="py-24 bg-zinc-50 border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-zinc-900 tracking-tight">
            Supported Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 font-sans">
            We specialize in the core languages, frameworks, and tools taught in top-tier computer science modules and university curricula worldwide.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div id="tech-categories-tabs" className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                id={`tech-tab-${category.id}`}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#007AFF] text-white shadow-xs'
                    : 'bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-600'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <motion.div
          id="tech-grid"
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                id={`tech-badge-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white border border-zinc-200/80 rounded-2xl p-6 text-center shadow-2xs hover:shadow-md hover:border-zinc-300 transition-all flex flex-col items-center justify-center gap-3"
              >
                {/* Tech Colored Indicator Dot */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                  style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
                >
                  {tech.name.substring(0, 2).toUpperCase()}
                </div>

                <div>
                  <span className="font-display font-semibold text-sm text-zinc-800 block">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider mt-0.5 block">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
