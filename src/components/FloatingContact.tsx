import { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import chatAvatar from '@/assets/chat-avatar.png';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  // Replace these with your actual numbers
  const whatsappNumber = '254721302058';
  const callNumber = '+254721302058';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20I%20need%20help%21`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={close}
        className={`
          flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-lg
          border border-gray-100/50 backdrop-blur-sm
          transition-all duration-200 ease-out
          hover:shadow-xl hover:scale-105
          ${isOpen ? 'opacity-100 translate-y-0 scale-100 visible' : 'opacity-0 translate-y-4 scale-95 invisible'}
        `}
        style={{ transitionDelay: isOpen ? '50ms' : '0ms' }}
      >
        <FaWhatsapp className="text-2xl text-green-500" />
        <span className="font-medium text-gray-800">WhatsApp</span>
      </a>

      {/* Call button */}
      <a
        href={`tel:${callNumber}`}
        onClick={close}
        className={`
          flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-lg
          border border-gray-100/50 backdrop-blur-sm
          transition-all duration-200 ease-out
          hover:shadow-xl hover:scale-105
          ${isOpen ? 'opacity-100 translate-y-0 scale-100 visible' : 'opacity-0 translate-y-4 scale-95 invisible'}
        `}
        style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}
      >
        <FaPhoneAlt className="text-2xl text-blue-600" />
        <span className="font-medium text-gray-800">Call us</span>
      </a>

      {/* Bottom row: prompt and main toggle */}
      <div className="flex items-center gap-3">
        {/* Talk-to-someone prompt bubble */}
        <button
          onClick={toggle}
          className="group flex items-center gap-2 bg-white pl-4 pr-5 py-3 rounded-full shadow-lg border border-gray-100/50 backdrop-blur-sm transition-all duration-200 ease-out hover:shadow-xl hover:scale-105"
          aria-label="Talk to someone"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-gray-800 text-sm whitespace-nowrap">
            Talk to someone?
          </span>
        </button>

        {/* Main toggle button — avatar */}
        <button
          onClick={toggle}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform active:scale-95 overflow-hidden border-2 border-white"
          aria-label="Toggle contact options"
        >
          <img
            src={chatAvatar}
            alt="Friendly peer supporter avatar"
            width={64}
            height={64}
            loading="lazy"
            className={`w-full h-full object-cover transition-transform duration-300 ${isOpen ? 'rotate-12 scale-110' : 'scale-100'}`}
          />
        </button>
      </div>
    </div>
  );
}