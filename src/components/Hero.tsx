import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Terminal, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  whatsappUrl: string;
  onExploreServices: () => void;
}

export default function Hero({ whatsappUrl, onExploreServices }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-radial from-white via-zinc-50 to-zinc-100 overflow-hidden"
    >
      {/* Dynamic Background Mesh Grid */}
      <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#007AFF]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Apple-style floating badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-xs mb-8"
        >
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-zinc-900 tracking-tight leading-[1.08] max-w-4xl"
        >
          Build your ideas.<br />
          <span className="bg-gradient-to-r from-[#007AFF] to-[#0051C7] bg-clip-text text-transparent">
            Learn with expert clarity.
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          id="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 text-base sm:text-lg lg:text-xl text-zinc-600 font-sans max-w-2xl leading-relaxed"
        >
          Premium, 1-on-1 programming tutoring, database design support, and complete project guidance
          tailored exclusively for students who want to build, debug, and innovate.
        </motion.p>

        {/* CTAs */}
        <motion.div
          id="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <a
            id="hero-whatsapp-button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#007AFF] hover:bg-[#0051C7] text-white text-base font-semibold px-8 py-4 rounded-full shadow-md shadow-[#007AFF]/15 transition-all cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Contact on WhatsApp</span>
          </a>

          <button
            id="hero-explore-button"
            onClick={onExploreServices}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 text-base font-semibold px-8 py-4 rounded-full shadow-xs transition-all cursor-pointer active:scale-95"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </button>
        </motion.div>

        {/* Interactive Mock Workspace / Graphical Feature */}
        <motion.div
          id="hero-mock-workspace"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-16 w-full max-w-4xl bg-white border border-zinc-200/80 rounded-2xl shadow-xl overflow-hidden text-left"
        >
          {/* Header Bar */}
          <div className="bg-zinc-50 px-5 py-4 border-b border-zinc-200/80 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-400"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 bg-white border border-zinc-200 px-3 py-1.5 rounded-lg shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-[#007AFF]" />
              <span>CodeLabs // Tutoring Session</span>
            </div>
            <div className="w-14"></div>
          </div>

          {/* Editor Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-linear-to-b from-white to-zinc-50/50">
            {/* Visual representation card */}
            <div className="md:col-span-7 space-y-4 font-mono text-xs sm:text-sm text-zinc-800 bg-zinc-950 text-zinc-100 p-5 rounded-xl shadow-inner border border-zinc-800 overflow-x-auto">
              <p className="text-zinc-500">// 1. Structure your data models cleanly</p>
              <p><span className="text-purple-400">interface</span> <span className="text-blue-400">Project</span> &#123;</p>
              <p className="pl-4">id: <span className="text-emerald-400">string</span>;</p>
              <p className="pl-4">title: <span className="text-emerald-400">string</span>;</p>
              <p className="pl-4">isOptimized: <span className="text-emerald-400">boolean</span>;</p>
              <p>&#125;</p>
              <p className="text-zinc-500 mt-4">// 2. Learn React states, databases, & architectures</p>
              <p><span className="text-purple-400">const</span> [<span className="text-amber-400">success</span>, <span className="text-blue-400">setSuccess</span>] = <span className="text-cyan-400">useState</span>(<span className="text-amber-400">true</span>);</p>
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg mt-4 flex items-center justify-between">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Build Compiled Successfully
                </span>
                <span className="text-[10px] text-zinc-500">Node v20.x</span>
              </div>
            </div>

            {/* Quick Benefits Sidebar inside mock */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-6 pl-0 md:pl-4">
              <div className="space-y-1">
                <h3 className="font-display font-semibold text-lg text-zinc-900">CodeLabs Standard</h3>
                <p className="text-sm text-zinc-500">We do not just hand over code. We guide you step-by-step so you gain lifelong confidence.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-blue-50 text-[#007AFF] flex items-center justify-center mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-800 block">Expert Explanations</span>
                    <span className="text-[11px] text-zinc-500">Full code line-by-line walkthroughs.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-800 block">Fast Response Times</span>
                    <span className="text-[11px] text-zinc-500">Get assistance when you need it most.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-800 block">Student-Friendly Approach</span>
                    <span className="text-[11px] text-zinc-500">Catering to both absolute beginners & pro learners.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
