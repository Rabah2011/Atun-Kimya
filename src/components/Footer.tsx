import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'tr' | 'en';
  setCurrentPage: (page: string) => void;
}

const Footer = ({ language, setCurrentPage }: FooterProps) => {
  const content = {
    tr: {
      about: {
        title: 'Atun Kimya',
        text: 'Kimya sektöründe güvenilir çözüm ortağınız. Kaliteli ürünler ve profesyonel hizmet.'
      },
      quickLinks: {
        title: 'Hızlı Bağlantılar',
        links: [
          { id: 'home', label: 'Ana Sayfa' },
          { id: 'about', label: 'Hakkımızda' },
          { id: 'products', label: 'Ürünler' },
          { id: 'services', label: 'Hizmetler' }
        ]
      },
      products: {
        title: 'Ürün Kategorileri',
        items: [
          'Galvaniz Kimyasalları',
          'Hammaddeler',
          'Metaller',
          'Diğer Ürünler'
        ]
      },
      contact: {
        title: 'İletişim',
        address: 'Atatürk Mah. Sanayi Cad. No:123, Ümraniye, İstanbul',
        phone: '+90 216 555 0123',
        email: 'info@atunkimya.com'
      },
      social: {
        title: 'Bizi Takip Edin'
      },
      copyright: '© 2025 Atun Kimya. Tüm hakları saklıdır.'
    },
    en: {
      about: {
        title: 'Atun Kimya',
        text: 'Your trusted partner in the chemical industry. Quality products and professional service.'
      },
      quickLinks: {
        title: 'Quick Links',
        links: [
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About Us' },
          { id: 'products', label: 'Products' },
          { id: 'services', label: 'Services' }
        ]
      },
      products: {
        title: 'Product Categories',
        items: [
          'Galvanizing Chemicals',
          'Raw Materials',
          'Metals',
          'Other Products'
        ]
      },
      contact: {
        title: 'Contact',
        address: 'Atatürk Mah. Sanayi Cad. No:123, Ümraniye, Istanbul',
        phone: '+90 216 555 0123',
        email: 'info@atunkimya.com'
      },
      social: {
        title: 'Follow Us'
      },
      copyright: '© 2025 Atun Kimya. All rights reserved.'
    }
  };

  const t = content[language];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">AK</span>
              </div>
              <h3 className="text-xl font-bold text-white">{t.about.title}</h3>
            </div>
            <p className="text-gray-400 mb-4">{t.about.text}</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.quickLinks.title}</h4>
            <ul className="space-y-2">
              {t.quickLinks.links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.products.title}</h4>
            <ul className="space-y-2">
              {t.products.items.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage('products')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.contact.title}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-blue-400" />
                <span className="text-sm">{t.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm">{t.contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm">{t.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
