import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const LOGIN_URL = 'https://terminal.unitedchance.info/auth/login';
const REGISTER_URL = 'https://terminal.unitedchance.info/auth/registration';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 sm:h-36 lg:h-44">
          <div className="flex items-center gap-3">
            <img src="/логотип_новыи.svg" alt="United Chance" className="h-20 sm:h-24 lg:h-28 w-auto" />
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base">
              About
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a
              href={LOGIN_URL}
              className="px-4 xl:px-5 py-2 xl:py-2.5 text-gray-700 font-medium hover:text-gray-900 transition-colors text-sm lg:text-base"
            >
              Login
            </a>
            <a
              href={REGISTER_URL}
              className="px-4 xl:px-5 py-2 xl:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/25 text-sm lg:text-base"
            >
              Register
            </a>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-1 text-center">
            <a
              href="#services"
              className="block py-3 px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg transition-colors text-base sm:text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block py-3 px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg transition-colors text-base sm:text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="block py-3 px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg transition-colors text-base sm:text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block py-3 px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg transition-colors text-base sm:text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-gray-100">
              <a
                href={LOGIN_URL}
                className="w-full px-5 py-3 text-gray-700 font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-base sm:text-lg text-center"
              >
                Login
              </a>
              <a
                href={REGISTER_URL}
                className="w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/25 text-base sm:text-lg text-center"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
