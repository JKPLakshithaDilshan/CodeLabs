import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/websiteData';
import {
  GraduationCap,
  BugOff,
  Compass,
  Database,
  FileText,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Coffee
} from 'lucide-react';

// Custom Map for specific icons to avoid dynamically importing all of lucide
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  BugOff,
  Compass,
  Database,
  Figma: Cpu, // fallback to Cpu or another relevant icon if Figma isn't directly imported
  FileText,
  Cpu,
  Sparkles,
  Coffee
};

interface ServicesProps {
  whatsappUrl: string;
}

export default function Services({ whatsappUrl }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-white border-y border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-zinc-900 tracking-tight">
            Comprehensive Tech Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 font-sans">
            Whether you need to pass an exam, fix a critical error, design a system schema, or build a complex portfolio project, we have you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Sparkles;

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-white border border-zinc-200/80 rounded-2xl p-8 hover:border-[#007AFF]/30 hover:shadow-xl hover:shadow-zinc-200/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-700 group-hover:bg-[#007AFF]/5 group-hover:text-[#007AFF] group-hover:border-[#007AFF]/20 transition-all mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-semibold text-xl text-zinc-900 group-hover:text-zinc-950 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 border-t border-zinc-100 pt-5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-600 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#007AFF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Link CTA */}
                <a
                  id={`service-cta-${service.id}`}
                  href={`${whatsappUrl}&text=Hi%20CodeLabs!%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007AFF] hover:text-[#0051C7] group/link cursor-pointer"
                >
                  <span>Request session</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
