import { MessageCircle } from 'lucide-react';
import { content as c } from '../../data/content';
/** Public business WhatsApp destination; no data is sent until the visitor sends it. */
export default function WhatsAppButton() {
  return (
    <a
      href={c.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={c.ui.whatsapp}
      className="fixed right-5 bottom-5 z-40 flex size-13 items-center justify-center rounded-full border-2 border-white bg-green-700 text-white shadow-lg transition hover:scale-105 motion-reduce:transform-none"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
