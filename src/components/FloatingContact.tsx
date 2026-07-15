import { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaCommentDots } from 'react-icons/fa';

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

      {/* Main toggle button */}
      <button
        onClick={toggle}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform active:scale-95 flex items-center justify-center text-white text-3xl"
        aria-label="Toggle contact options"
      >
        <FaCommentDots className={`transition-transform duration-300 ${isOpen ? 'rotate-135' : ''}`} />
        {/* Optional tooltip – hidden on mobile */}
        <span className="absolute right-20 hidden sm:block bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Contact
        </span>
      </button>
    </div>
  );
}