import { Settings, PenTool, Beaker, Package2 } from 'lucide-react';

interface ServicesProps {
  language: 'tr' | 'en';
}

const Services = ({ language }: ServicesProps) => {
  const content = {
    tr: {
      title: 'Hizmetlerimiz',
      subtitle: 'Kapsamlı Çözümler ve Profesyonel Destek',
      services: [
        {
          icon: Settings,
          title: 'Proses Kurulum Hizmeti',
          description: 'Galvanizleme tesisleriniz için komple proses kurulum ve optimizasyon hizmetleri',
          features: [
            'Tesis planlama ve tasarım',
            'Ekipman seçimi ve tedariki',
            'Kurulum ve devreye alma',
            'Proses optimizasyonu'
          ]
        },
        {
          icon: PenTool,
          title: 'Mühendislik Hizmeti',
          description: 'Deneyimli mühendislerimizle teknik danışmanlık ve proje yönetimi',
          features: [
            'Teknik danışmanlık',
            'Proje yönetimi',
            'Süreç iyileştirme',
            'Eğitim ve dokümantasyon'
          ]
        },
        {
          icon: Beaker,
          title: 'Laboratuvar Hizmeti',
          description: 'Tam donanımlı laboratuvarımızda kalite kontrol ve analiz hizmetleri',
          features: [
            'Ürün analizi',
            'Kalite kontrol testleri',
            'Malzeme karakterizasyonu',
            'Raporlama'
          ]
        },
        {
          icon: Package2,
          title: 'Güçlü Stok ve Hızlı Sevkiyat',
          description: 'Kesintisiz üretim için güçlü stok kapasitesi ve hızlı teslimat',
          features: [
            'Geniş ürün stoğu',
            'Acil teslimat seçenekleri',
            'Lojistik yönetimi',
            '7/24 sipariş takibi'
          ]
        }
      ]
    },
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive Solutions and Professional Support',
      services: [
        {
          icon: Settings,
          title: 'Process Installation Service',
          description: 'Complete process installation and optimization services for your galvanizing facilities',
          features: [
            'Facility planning and design',
            'Equipment selection and procurement',
            'Installation and commissioning',
            'Process optimization'
          ]
        },
        {
          icon: PenTool,
          title: 'Engineering Service',
          description: 'Technical consulting and project management with our experienced engineers',
          features: [
            'Technical consulting',
            'Project management',
            'Process improvement',
            'Training and documentation'
          ]
        },
        {
          icon: Beaker,
          title: 'Laboratory Service',
          description: 'Quality control and analysis services in our fully equipped laboratory',
          features: [
            'Product analysis',
            'Quality control tests',
            'Material characterization',
            'Reporting'
          ]
        },
        {
          icon: Package2,
          title: 'Strong Stock and Fast Delivery',
          description: 'Strong stock capacity and fast delivery for uninterrupted production',
          features: [
            'Wide product inventory',
            'Emergency delivery options',
            'Logistics management',
            '24/7 order tracking'
          ]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = [
              { bg: 'from-blue-600 to-blue-800', icon: 'bg-blue-100 text-blue-600' },
              { bg: 'from-gray-700 to-gray-900', icon: 'bg-gray-100 text-gray-700' },
              { bg: 'from-green-600 to-green-800', icon: 'bg-green-100 text-green-600' },
              { bg: 'from-orange-600 to-orange-800', icon: 'bg-orange-100 text-orange-600' }
            ];
            const colors = colorClasses[index % colorClasses.length];

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border-2 border-gray-100"
              >
                <div className={`bg-gradient-to-br ${colors.bg} p-8 text-white`}>
                  <div className={`w-16 h-16 ${colors.icon} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white text-opacity-90">{service.description}</p>
                </div>

                <div className="p-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'tr' ? 'Projeleriniz İçin Destek Alın' : 'Get Support for Your Projects'}
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            {language === 'tr'
              ? 'Uzman ekibimiz, projelerinizin her aşamasında sizinle birlikte çalışmaya hazır. Teknik destek ve danışmanlık için bizimle iletişime geçin.'
              : 'Our expert team is ready to work with you at every stage of your projects. Contact us for technical support and consulting.'}
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            {language === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
