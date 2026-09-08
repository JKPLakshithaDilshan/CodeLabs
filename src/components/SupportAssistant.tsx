import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, MessageCircle, X } from 'lucide-react';
import petImage from '../images/support-pet.webp';

interface SupportAssistantProps {
  whatsappUrl: string;
}

type AssistantStep = 'welcome' | 'service' | 'question' | 'details';

const serviceOptions = [
  { label: 'OOP Java support', message: 'I am interested in OOP Java Project Support.' },
  { label: 'Programming tutoring', message: 'I am interested in Programming Tutoring.' },
  { label: 'Debugging & fixes', message: 'I need help with Code Debugging & Fixes.' },
  { label: 'Project guidance', message: 'I am interested in Project Guidance.' },
];

const questionOptions = [
  { label: 'Product info', message: 'I would like to learn more about your services.' },
  { label: 'Pricing', message: 'I would like to ask about your student-friendly pricing.' },
  { label: 'Demo', message: 'I would like to request a demo or consultation.' },
  { label: 'Contact sales', message: 'I would like to speak with someone about my project.' },
];

export default function SupportAssistant({ whatsappUrl }: SupportAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<AssistantStep>('welcome');
  const [selectedMessage, setSelectedMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const whatsappBaseUrl = whatsappUrl.split('?')[0];
  const buildWhatsAppUrl = (message: string) =>
    `${whatsappBaseUrl}?text=${encodeURIComponent(`Hi CodeLabs \u{1F916}\n\n${message}`)}`;

  const handleQuestion = (message: string, needsDetails = false) => {
    setSelectedMessage(message);
    setStep(needsDetails ? 'details' : 'question');
  };

  const openWhatsApp = (message = selectedMessage) => {
    const details = [name && `Name: ${name}`, email && `Email: ${email}`].filter(Boolean).join('\n');
    window.open(buildWhatsAppUrl([message, details].filter(Boolean).join('\n\n')), '_blank', 'noopener,noreferrer');
  };

  const reset = () => {
    setStep('welcome');
    setSelectedMessage('');
    setName('');
    setEmail('');
  };

  return (
    <div className="support-assistant" aria-live="polite">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="support-assistant-panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            aria-label="CodeLabs support assistant"
          >
            <div className="support-assistant-header">
              <div>
                <span className="support-assistant-kicker">CodeLabs helper</span>
                <strong>How can I help?</strong>
              </div>
              <button className="support-assistant-icon-button" onClick={() => setIsOpen(false)} aria-label="Close support assistant">
                <X size={17} />
              </button>
            </div>

            <div className="support-assistant-body">
              {step === 'welcome' && (
                <>
                  <p className="support-assistant-message">Hi, how can I help you today?</p>
                  <div className="support-assistant-options">
                    <button onClick={() => setStep('service')}>Explore services <ArrowRight size={14} /></button>
                    <button onClick={() => setStep('question')}>Want a quick quote? <ArrowRight size={14} /></button>
                  </div>
                </>
              )}

              {step === 'service' && (
                <>
                  <p className="support-assistant-message">Which kind of support are you looking for?</p>
                  <div className="support-assistant-options">
                    {serviceOptions.map((option) => (
                      <button key={option.label} onClick={() => handleQuestion(option.message)}>{option.label} <ArrowRight size={14} /></button>
                    ))}
                  </div>
                  <button className="support-assistant-back" onClick={reset}>Start over</button>
                </>
              )}

              {step === 'question' && (
                <>
                  <p className="support-assistant-message">Choose an option and I’ll prepare the right WhatsApp message.</p>
                  <div className="support-assistant-options">
                    {questionOptions.map((option) => (
                      <button key={option.label} onClick={() => handleQuestion(option.message, option.label === 'Demo' || option.label === 'Contact sales')}>
                        {option.label} <ArrowRight size={14} />
                      </button>
                    ))}
                  </div>
                  {selectedMessage && <button className="support-assistant-whatsapp" onClick={() => openWhatsApp()}><MessageCircle size={16} /> Open WhatsApp</button>}
                </>
              )}

              {step === 'details' && (
                <>
                  <p className="support-assistant-message">Share your details so our mentor can reply with the best next step.</p>
                  <div className="support-assistant-form">
                    <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" aria-label="Your name" />
                    <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email (optional)" type="email" aria-label="Email address" />
                  </div>
                  <button className="support-assistant-whatsapp" onClick={() => openWhatsApp()}><MessageCircle size={16} /> Continue to WhatsApp</button>
                  <button className="support-assistant-back" onClick={() => setStep('question')}>Back to options</button>
                </>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <div className="support-assistant-launcher-wrap">
        <motion.button
          className="support-assistant-pet-button"
          onClick={() => setIsOpen((open) => !open)}
          animate={{ y: [0, -6, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          aria-label={isOpen ? 'Close support assistant' : 'Open support assistant'}
        >
          <span className="support-assistant-sparkle sparkle-one" />
          <span className="support-assistant-sparkle sparkle-two" />
          <img src={petImage} alt="CodeLabs support assistant" />
        </motion.button>
      </div>
    </div>
  );
}
