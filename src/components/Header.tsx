import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  language: 'tr' | 'en';
  toggleLanguage: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header = ({ language, toggleLanguage, currentPage, setCurrentPage }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = {
    tr: [
      { id: 'home', label: 'Ana Sayfa' },
      { id: 'about', label: 'Hakkımızda' },
      { id: 'products', label: 'Ürünler' },
      { id: 'services', label: 'Hizmetler' },
      { id: 'news', label: 'Haberler' },
      { id: 'contact', label: 'İletişim' }
    ],
    en: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About Us' },
      { id: 'products', label: 'Products' },
      { id: 'services', label: 'Services' },
      { id: 'news', label: 'News' },
      { id: 'contact', label: 'Contact' }
    ]
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AK</span>
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900">Atun Kimya</h1>
              <p className="text-xs text-gray-600">{language === 'tr' ? 'Kimya Çözümleri' : 'Chemical Solutions'}</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems[language].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'tr' ? 'EN' : 'TR'}</span>
            </button>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {menuItems[language].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
