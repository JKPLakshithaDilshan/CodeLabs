import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import advertisementImage from '../images/advertisement1.png';

interface AdvertisementModalProps {
  whatsappUrl: string;
}

export default function AdvertisementModal({ whatsappUrl }: AdvertisementModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="ad-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Featured project advertisement"
      onClick={() => setIsOpen(false)}
    >
      <div className="ad-modal-card" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="ad-modal-close"
          aria-label="Close advertisement"
          onClick={() => setIsOpen(false)}
        >
          <X size={22} strokeWidth={2.5} />
        </button>

        <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact CodeLabs about this offer">
          <img
            src={advertisementImage}
            alt="CodeLabs OOP Java project support advertisement"
            className="ad-modal-image"
          />
        </a>

        <div className="ad-modal-footer">
          <span>Need help with your project?</span>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="ad-modal-action">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
