import { MessageSquare, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactProps {
  whatsappUrl: string;
}

export default function Contact({ whatsappUrl }: ContactProps) {
  const emailAddress = 'info.jkplakshitha@gmail.com';

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#007AFF]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Main CTA Container Card */}
        <motion.div
          id="contact-cta-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65 }}
          className="bg-linear-to-b from-zinc-900 to-zinc-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-zinc-800 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Subtle design element */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#007AFF]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto flex flex-col items-center">
            {/* Top Icon Badge */}
            <div className="w-12 h-12 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center text-[#007AFF] mb-8">
              <MessageSquare className="w-6 h-6 animate-pulse" />
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Ready to lift your<br />grades & code quality?
            </h2>

            {/* Paragraph */}
            <p className="mt-6 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
              Do not suffer in silence over failing build compilation logs or cryptic database ERDs. Reach out directly on WhatsApp to coordinate an interactive, virtual mentoring session today.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              {/* WhatsApp CTA */}
              <a
                id="contact-whatsapp-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#007AFF] hover:bg-[#0051C7] text-white text-base font-semibold px-8 py-4 rounded-full shadow-md shadow-[#007AFF]/20 transition-all cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Message on WhatsApp</span>
              </a>

              {/* Email CTA */}
              <a
                id="contact-email-secondary"
                href={`mailto:${emailAddress}?subject=Inquiry%20from%20CodeLabs`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-750 text-white border border-zinc-700 text-base font-semibold px-8 py-4 rounded-full transition-all cursor-pointer active:scale-95"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>Email Us</span>
              </a>
            </div>

            {/* Verification Line */}
            <div className="mt-10 flex items-center gap-2 text-xs text-zinc-500 font-sans">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Free initial technical triage & response in under 2 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
