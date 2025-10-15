import { Factory, Shield, Truck, Users } from 'lucide-react';

interface HeroProps {
  language: 'tr' | 'en';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    tr: {
      title: 'Kimya Sektöründe Güvenilir Çözüm Ortağınız',
      subtitle: 'Sıcak Daldırma Galvaniz Kaplama Kimyasalları, Hammaddeler ve Metal Ürünlerinde Uzman',
      cta: 'Bize Ulaşın',
      stats: [
        { value: '25+', label: 'Yıllık Deneyim' },
        { value: '500+', label: 'Mutlu Müşteri' },
        { value: '1000+', label: 'Tamamlanan Proje' },
        { value: '24/7', label: 'Teknik Destek' }
      ],
      aboutTitle: 'Atun Kimya Hakkında',
      aboutText: 'Atun Kimya, kimya sektöründe uzun yıllara dayanan deneyimi ile sıcak daldırma galvaniz kaplama kimyasalları, hammaddeler ve metal ürünlerinde öncü bir firmadır. Müşterilerimize en kaliteli ürünleri sunmak ve mükemmel hizmet sağlamak bizim önceliğimizdir.',
      features: [
        { icon: Factory, title: 'Üretim Gücü', text: 'Modern tesislerimizde yüksek kapasiteli üretim' },
        { icon: Shield, title: 'Kalite Güvencesi', text: 'ISO sertifikalı kalite kontrol süreçleri' },
        { icon: Truck, title: 'Hızlı Teslimat', text: 'Güçlü stok ve lojistik altyapısı' },
        { icon: Users, title: 'Uzman Kadro', text: 'Deneyimli mühendis ve teknik ekip' }
      ]
    },
    en: {
      title: 'Your Trusted Partner in the Chemical Industry',
      subtitle: 'Experts in Hot Dip Galvanizing Chemicals, Raw Materials, and Metal Products',
      cta: 'Contact Us',
      stats: [
        { value: '25+', label: 'Years Experience' },
        { value: '500+', label: 'Happy Clients' },
        { value: '1000+', label: 'Projects Completed' },
        { value: '24/7', label: 'Technical Support' }
      ],
      aboutTitle: 'About Atun Kimya',
      aboutText: 'Atun Kimya is a leading company in hot dip galvanizing chemicals, raw materials, and metal products with years of experience in the chemical industry. Our priority is to provide our customers with the highest quality products and excellent service.',
      features: [
        { icon: Factory, title: 'Production Power', text: 'High capacity production in modern facilities' },
        { icon: Shield, title: 'Quality Assurance', text: 'ISO certified quality control processes' },
        { icon: Truck, title: 'Fast Delivery', text: 'Strong stock and logistics infrastructure' },
        { icon: Users, title: 'Expert Team', text: 'Experienced engineers and technical staff' }
      ]
    }
  };

  const t = content[language];

  return (
    <div>
      <section className="relative h-[600px] md:h-[700px] overflow-hidden text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/src/assets/realFactory.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              {t.title}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
              {t.subtitle}
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
              {t.cta}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 backdrop-blur-sm bg-white/10 rounded-2xl p-8">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">{stat.value}</div>
                <div className="text-white/90 drop-shadow-md">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.aboutTitle}</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.aboutText}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
