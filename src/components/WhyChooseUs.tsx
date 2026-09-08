import { motion } from 'motion/react';
import { Award, Zap, Lightbulb, Cpu, Smile, Compass } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: 'Premium Quality',
      description: 'We adhere to the highest standard of visual polish, architectural modularity, and pristine execution. No messy code, no cutting corners.',
      icon: Award,
      color: 'bg-blue-50 text-[#007AFF] border-[#007AFF]/10'
    },
    {
      title: 'Fast Response',
      description: 'Your deadlines matter. We respond immediately to resolve blockers, compile errors, or handle urgent milestone updates.',
      icon: Zap,
      color: 'bg-amber-50 text-amber-600 border-amber-500/10'
    },
    {
      title: 'Modern Solutions',
      description: 'We work with modern, production-ready tech stacks (React, Vite, Next.js, Spring Boot) to teach you future-proof standards.',
      icon: Lightbulb,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-500/10'
    },
    {
      title: 'Technical Expertise',
      description: 'Experienced full-stack development professionals delivering secure databases, structured models, and performant APIs.',
      icon: Cpu,
      color: 'bg-purple-50 text-purple-600 border-purple-500/10'
    },
    {
      title: 'Student-Friendly Support',
      description: 'No technical jargon or condescending tone. We explain complex CS concepts using simple analogies that stick.',
      icon: Smile,
      color: 'bg-rose-50 text-rose-600 border-rose-500/10'
    },
    {
      title: 'Reliable Guidance',
      description: 'From syllabus breakdown to preparing your defense presentation, we walk with you from day one to submission.',
      icon: Compass,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-500/10'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-zinc-50/50 border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-zinc-900 tracking-tight">
            Why Choose CodeLabs?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 font-sans">
            We bridge the gap between abstract academic theories and actual real-world software craftsmanship.
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                id={`why-us-card-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white border border-zinc-200/80 rounded-2xl p-8 hover:border-zinc-300 hover:shadow-lg transition-all"
              >
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${benefit.color} group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display font-semibold text-lg text-zinc-900 mb-3 group-hover:text-zinc-950">
                  {benefit.title}
                </h3>

                <p className="text-sm text-zinc-500 font-sans leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
