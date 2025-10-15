import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface NewsProps {
  language: 'tr' | 'en';
}

const News = ({ language }: NewsProps) => {
  const content = {
    tr: {
      title: 'Bizden Haberler',
      subtitle: 'Etkinlikler ve Duyurular',
      news: [
        {
          date: '15 Ekim 2025',
          title: 'Metal İşleme Fuarı 2025',
          location: 'İstanbul Fuar Merkezi',
          description: 'Atun Kimya, 20-25 Ekim tarihleri arasında düzenlenecek Metal İşleme Fuarı\'nda yerini alacak. Son teknoloji ürünlerimizi ve yenilikçi çözümlerimizi sizlerle buluşturmaktan mutluluk duyacağız.',
          category: 'Etkinlik'
        },
        {
          date: '10 Eylül 2025',
          title: 'Yeni Üretim Tesisimiz Açıldı',
          location: 'Kocaeli, Türkiye',
          description: 'Artan taleplere cevap vermek ve müşterilerimize daha hızlı hizmet sunmak için Kocaeli\'deki yeni üretim tesisimiz faaliyete geçti. Modern ekipmanlarla donatılmış tesisimiz, üretim kapasitemizi %40 artırdı.',
          category: 'Duyuru'
        },
        {
          date: '5 Ağustos 2025',
          title: 'ISO 14001:2015 Sertifikası Aldık',
          location: 'Atun Kimya',
          description: 'Çevre yönetim sistemimiz, uluslararası standartlara uygunluğunu kanıtlayarak ISO 14001:2015 sertifikasını aldı. Sürdürülebilir üretim ve çevre dostu yaklaşımımızı sürdürmeye devam ediyoruz.',
          category: 'Başarı'
        },
        {
          date: '20 Haziran 2025',
          title: 'Kimya Sektörü Konferansı',
          location: 'Ankara Kongre Merkezi',
          description: 'Sektörün öncü firmalarının katılımıyla gerçekleşen konferansta, galvanizleme teknolojilerindeki son gelişmeler hakkında sunum yaptık.',
          category: 'Etkinlik'
        }
      ],
      readMore: 'Devamını Oku'
    },
    en: {
      title: 'News From Us',
      subtitle: 'Events and Announcements',
      news: [
        {
          date: 'October 15, 2025',
          title: 'Metal Processing Fair 2025',
          location: 'Istanbul Exhibition Center',
          description: 'Atun Kimya will participate in the Metal Processing Fair to be held between October 20-25. We will be delighted to share our latest products and innovative solutions with you.',
          category: 'Event'
        },
        {
          date: 'September 10, 2025',
          title: 'Our New Production Facility Opened',
          location: 'Kocaeli, Turkey',
          description: 'Our new production facility in Kocaeli has started operations to meet increasing demand and provide faster service to our customers. Our facility equipped with modern equipment has increased our production capacity by 40%.',
          category: 'Announcement'
        },
        {
          date: 'August 5, 2025',
          title: 'We Received ISO 14001:2015 Certificate',
          location: 'Atun Kimya',
          description: 'Our environmental management system has received ISO 14001:2015 certification proving compliance with international standards. We continue our sustainable production and environmentally friendly approach.',
          category: 'Achievement'
        },
        {
          date: 'June 20, 2025',
          title: 'Chemical Industry Conference',
          location: 'Ankara Congress Center',
          description: 'At the conference attended by leading companies in the sector, we presented on the latest developments in galvanizing technologies.',
          category: 'Event'
        }
      ],
      readMore: 'Read More'
    }
  };

  const t = content[language];

  const getCategoryColor = (category: string) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('event') || categoryLower.includes('etkinlik')) {
      return 'bg-blue-100 text-blue-700';
    }
    if (categoryLower.includes('announcement') || categoryLower.includes('duyuru')) {
      return 'bg-green-100 text-green-700';
    }
    return 'bg-orange-100 text-orange-700';
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(item.category).replace('text-', 'text-white ')}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center text-blue-100 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className="flex items-center text-blue-100 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {item.location}
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  {t.readMore}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'tr' ? 'Gelişmelerden Haberdar Olun' : 'Stay Updated'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'tr'
                ? 'Yeni ürünler, etkinlikler ve duyurular hakkında bilgi almak için bizi takip edin.'
                : 'Follow us to get information about new products, events and announcements.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                LinkedIn
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors">
                Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
