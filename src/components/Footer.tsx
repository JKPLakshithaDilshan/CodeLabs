interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const links = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Technologies', id: 'technologies' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="app-footer" className="bg-zinc-50 border-t border-zinc-200/60 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Top Segment */}
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#007AFF] flex items-center justify-center text-white font-display font-bold text-sm">
              N
            </div>
            <span className="font-display font-bold text-lg text-zinc-900 tracking-tight">
              NextGen<span className="text-[#007AFF]">Studio</span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-mono tracking-widest uppercase">
            Build • Learn • Innovate
          </p>
        </div>

        {/* Navigation Link Line */}
        <nav id="footer-navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8 max-w-2xl">
          {links.map((link) => (
            <button
              key={link.id}
              id={`footer-link-${link.id}`}
              onClick={() => onNavigate(link.id)}
              className="text-sm font-medium text-zinc-500 hover:text-[#007AFF] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full max-w-md border-t border-zinc-200/60 mb-8" />

        {/* Copyright and signature */}
        <div className="text-center space-y-1">
          <p className="text-xs text-zinc-400 font-sans">
            &copy; 2026 NextGen Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
