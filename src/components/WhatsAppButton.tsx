import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  whatsappUrl: string;
}

export default function WhatsAppButton({ whatsappUrl }: WhatsAppButtonProps) {
  return (
    <motion.div
      id="floating-whatsapp-container"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        id="floating-whatsapp-anchor"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-90"
        aria-label="Contact NextGen Studio on WhatsApp"
      >
        {/* Pulsing visual halo ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none group-hover:scale-105" />

        {/* Dynamic conversion badge notification circle */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full animate-bounce" />

        {/* Message bubble icon */}
        <MessageCircle className="w-7 h-7" />

        {/* Hover message bubble */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-zinc-800 text-xs font-semibold px-4 py-2.5 rounded-xl border border-zinc-200 shadow-md whitespace-nowrap opacity-0 scale-90 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 font-sans">
          Message us on WhatsApp
        </div>
      </a>
    </motion.div>
  );
}
