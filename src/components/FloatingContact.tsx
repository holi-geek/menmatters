import { useEffect, useState } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import chatAvatar from '@/assets/chat-avatar.png';

export default function FloatingContact(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messageIndex, setMessageIndex] = useState<number>(0);

  const messages: string[] = ['Talk to someone?', 'Here for you...'];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const toggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  const close = (): void => {
    setIsOpen(false);
  };

  const whatsappNumber = '254721302058';
  const callNumber = '+254721302058';

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=Hello%20I%20need%20help%21`;

  const currentMessage = messages[messageIndex];
  const isAlternative = messageIndex === 1;

  const avatarSrc = `${import.meta.env.BASE_URL}chat-avatar.png`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&display=swap');

        .therapeutic-font {
          font-family: 'Caveat', cursive, sans-serif;
          letter-spacing: 0.5px;
        }

        @keyframes avatarListening {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
          }

          50% {
            transform: scale(1.04);
            box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
          }
        }

        .animate-listening {
          animation: avatarListening 2s infinite ease-in-out;
        }

        @keyframes bubbleIn {
          from {
            opacity: 0;
            transform: translateX(10px) scale(0.95);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .bubble-in {
          animation: bubbleIn 0.3s ease-out;
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        <div
          className={`
            flex flex-col items-end gap-3
            transition-all duration-300
            ${
              isOpen
                ? 'opacity-100 translate-y-0 visible'
                : 'opacity-0 translate-y-4 invisible'
            }
          `}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            aria-label="Chat with us on WhatsApp"
            className="
              flex items-center gap-3
              bg-white px-5 py-3 rounded-full
              shadow-lg border border-gray-100
              transition-all duration-200
              hover:shadow-xl hover:scale-105
            "
          >
            <FaWhatsapp
              className="text-2xl text-green-500"
              aria-hidden="true"
            />

            <span className="font-medium text-gray-800">
              WhatsApp
            </span>
          </a>

          <a
            href={`tel:${callNumber}`}
            onClick={close}
            aria-label="Call us"
            className="
              flex items-center gap-3
              bg-white px-5 py-3 rounded-full
              shadow-lg border border-gray-100
              transition-all duration-200
              hover:shadow-xl hover:scale-105
            "
          >
            <FaPhoneAlt
              className="text-2xl text-blue-600"
              aria-hidden="true"
            />

            <span className="font-medium text-gray-800">
              Call us
            </span>
          </a>
        </div>

        <div className="flex items-center justify-end gap-3">

          <button
            type="button"
            onClick={toggle}
            aria-label="Talk to someone"
            className="
              bubble-in
              relative
              flex items-center gap-2.5
              bg-white px-4 py-2.5
              rounded-2xl
              shadow-md
              border border-gray-100
              backdrop-blur-sm
              transition-all duration-300
              hover:shadow-lg hover:scale-105
            "
          >
            <span
              className="
                absolute
                right-[-6px]
                top-1/2
                -translate-y-1/2
                w-3 h-3
                bg-white
                border-r border-t border-gray-100
                rotate-45
              "
            />

            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute inline-flex
                  h-full w-full
                  rounded-full
                  bg-emerald-400
                  opacity-75
                  animate-ping
                "
              />

              <span
                className="
                  relative inline-flex
                  rounded-full
                  h-2 w-2
                  bg-emerald-500
                "
              />
            </span>

            <span
              className={`
                relative z-10
                whitespace-nowrap
                text-gray-800
                transition-all duration-300
                ${
                  isAlternative
                    ? 'therapeutic-font text-xl text-emerald-700 font-semibold'
                    : 'text-xs font-semibold'
                }
              `}
            >
              {currentMessage}
            </span>
          </button>

          <button
            type="button"
            onClick={toggle}
            aria-label={
              isOpen
                ? 'Close contact options'
                : 'Open contact options'
            }
            aria-expanded={isOpen}
            className={`
              relative flex-shrink-0
              w-14 h-14
              sm:w-16 sm:h-16
              rounded-full
              shadow-xl
              hover:shadow-2xl
              transition-all duration-300
              active:scale-95
              overflow-hidden
              border-2 border-white
              ${
                isAlternative
                  ? 'animate-listening border-emerald-400'
                  : 'hover:scale-105'
              }
            `}
          >
            <img
              src={avatarSrc}
              alt="Friendly peer supporter avatar"
              width={64}
              height={64}
              loading="eager"
              decoding="async"
              className={`
                w-full h-full
                object-cover
                transition-transform duration-300
                ${isOpen ? 'rotate-12 scale-110' : 'scale-100'}
              `}
            />

            <span
              className="
                absolute
                bottom-0.5
                right-0.5
                w-3 h-3
                bg-emerald-500
                border-2 border-white
                rounded-full
              "
            />
          </button>

        </div>
      </div>
    </>
  );
}