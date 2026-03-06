import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400 py-6 scroll-mt-32 sm:scroll-mt-40 lg:scroll-mt-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/логотип_новыи.svg" alt="United Chance" className="h-10 w-auto" />
            <span className="text-gray-500 text-sm">2026 United Chance</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:contact@unitedchance.com" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>contact@unitedchance.com</span>
            </a>
            <a href="tel:+15551234567" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 text-center text-xs text-gray-500">
          Securities offered through United Chance LLC, Member FINRA/SIPC.
        </div>
      </div>
    </footer>
  );
}
