import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/websiteData';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-zinc-200/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-zinc-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 font-sans">
            Got questions? We have direct, honest answers to help you feel confident.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`border border-zinc-200/80 rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'bg-zinc-50/50 border-zinc-300' : 'bg-white hover:border-zinc-300'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 sm:px-8 sm:py-6 cursor-pointer"
                >
                  <span className="font-display font-semibold text-zinc-900 text-base sm:text-lg pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-zinc-100/80 flex items-center justify-center text-zinc-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#007AFF]/10 text-[#007AFF]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 text-sm sm:text-base text-zinc-600 font-sans leading-relaxed border-t border-zinc-100/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
