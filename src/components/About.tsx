import { Award, Target, Eye, CheckCircle } from 'lucide-react';

interface AboutProps {
  language: 'tr' | 'en';
}

const About = ({ language }: AboutProps) => {
  const content = {
    tr: {
      title: 'Hakkımızda',
      subtitle: 'Kimya Sektöründe Öncü Firma',
      intro: 'Atun Kimya, 1998 yılından bu yana kimya sektöründe faaliyet göstermekte ve müşterilerine en kaliteli ürün ve hizmetleri sunmaktadır. Sıcak daldırma galvaniz kaplama kimyasalları, hammaddeler ve metal ürünlerinde uzmanlaşmış olan firmamız, sektördeki deneyimi ve güçlü altyapısıyla müşterilerine güvenilir çözümler sunmaktadır.',
      vision: {
        title: 'Vizyonumuz',
        text: 'Kimya sektöründe Türkiye\'nin en güvenilir ve yenilikçi firması olmak, uluslararası pazarlarda lider konuma gelmek.'
      },
      mission: {
        title: 'Misyonumuz',
        text: 'Müşterilerimize en yüksek kalitede ürün ve hizmet sunarak, sürdürülebilir büyüme sağlamak ve sektörde fark yaratmak.'
      },
      quality: {
        title: 'Kalite Politikamız',
        text: 'ISO 9001:2015 Kalite Yönetim Sistemi çerçevesinde, müşteri memnuniyetini en üst seviyede tutarak, sürekli gelişim ve iyileştirme prensibi ile çalışmaktayız.'
      },
      values: {
        title: 'Değerlerimiz',
        items: [
          'Müşteri odaklı yaklaşım',
          'Kalite ve güvenilirlik',
          'Yenilikçi çözümler',
          'Çevre ve iş güvenliği',
          'Sürekli gelişim',
          'Etik değerler'
        ]
      },
      certificates: {
        title: 'Sertifikalarımız',
        items: ['ISO 9001:2015', 'ISO 14001:2015', 'OHSAS 18001', 'CE Belgesi']
      }
    },
    en: {
      title: 'About Us',
      subtitle: 'Leading Company in the Chemical Industry',
      intro: 'Since 1998, Atun Kimya has been operating in the chemical industry, providing its customers with the highest quality products and services. Specialized in hot dip galvanizing chemicals, raw materials, and metal products, our company offers reliable solutions to its customers with industry experience and strong infrastructure.',
      vision: {
        title: 'Our Vision',
        text: 'To be Turkey\'s most trusted and innovative company in the chemical industry and become a leader in international markets.'
      },
      mission: {
        title: 'Our Mission',
        text: 'To provide our customers with the highest quality products and services, ensure sustainable growth, and make a difference in the industry.'
      },
      quality: {
        title: 'Our Quality Policy',
        text: 'Within the framework of ISO 9001:2015 Quality Management System, we work with the principle of continuous development and improvement, keeping customer satisfaction at the highest level.'
      },
      values: {
        title: 'Our Values',
        items: [
          'Customer-focused approach',
          'Quality and reliability',
          'Innovative solutions',
          'Environment and occupational safety',
          'Continuous improvement',
          'Ethical values'
        ]
      },
      certificates: {
        title: 'Our Certificates',
        items: ['ISO 9001:2015', 'ISO 14001:2015', 'OHSAS 18001', 'CE Certificate']
      }
    }
  };

  const t = content[language];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-blue-600 font-semibold">{t.subtitle}</p>
        </div>

        <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="/src/assets/smoke.png"
              alt="Industrial Manufacturing"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-semibold tracking-wide uppercase">{language === 'tr' ? 'Üretim Tesisimiz' : 'Our Production Facility'}</p>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.intro}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <p className="text-3xl font-bold text-blue-600">1998</p>
                <p className="text-sm text-gray-600">{language === 'tr' ? 'Kuruluş Yılı' : 'Founded'}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <p className="text-3xl font-bold text-green-600">ISO</p>
                <p className="text-sm text-gray-600">{language === 'tr' ? 'Sertifikalı' : 'Certified'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.vision.title}</h3>
            <p className="text-gray-700">{t.vision.text}</p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
            <div className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.mission.title}</h3>
            <p className="text-gray-700">{t.mission.text}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
            <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.quality.title}</h3>
            <p className="text-gray-700">{t.quality.text}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.values.title}</h3>
            <ul className="space-y-3">
              {t.values.items.map((value, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">{t.certificates.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {t.certificates.items.map((cert, index) => (
                <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4 text-center backdrop-blur-sm">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
