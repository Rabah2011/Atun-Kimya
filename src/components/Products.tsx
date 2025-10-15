import { Droplets, Package, Layers, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ProductsProps {
  language: 'tr' | 'en';
}

const Products = ({ language }: ProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const content = {
    tr: {
      title: 'Ürünlerimiz',
      subtitle: 'Yüksek Kaliteli Kimyasal Ürünler ve Hammaddeler',
      categories: [
        {
          id: 'galvaniz',
          icon: Droplets,
          title: 'Sıcak Daldırma Galvaniz Kaplama Kimyasalları',
          description: 'Galvanizleme süreçleri için özel formüle edilmiş kimyasallar',
          products: [
            'Yağ Giderici (Degreaser)',
            'Asit (Hydrochloric Acid)',
            'Flux (Amonyum Klorür)',
            'Çinko Klorür',
            'Galvaniz Parlat',
            'Pasivasyonlar'
          ]
        },
        {
          id: 'hammadde',
          icon: Package,
          title: 'Hammaddeler',
          description: 'Endüstriyel kullanım için yüksek saflıkta hammaddeler',
          products: [
            'Amonyum Klorür',
            'Çinko Klorür',
            'Amonyum Sülfat',
            'Hidroklorik Asit',
            'Kostik Soda',
            'Sodyum Hidroksit'
          ]
        },
        {
          id: 'metal',
          icon: Layers,
          title: 'Metaller',
          description: 'Galvanizleme ve metal işleme için metal ürünler',
          products: [
            'Çinko İngot',
            'Çinko Külçe',
            'Alüminyum İngot',
            'Kurşun',
            'Kalay',
            'Alaşımlı Metaller'
          ]
        }
      ],
      viewProducts: 'Ürünleri Görüntüle',
      backToCategories: 'Kategorilere Dön'
    },
    en: {
      title: 'Our Products',
      subtitle: 'High Quality Chemical Products and Raw Materials',
      categories: [
        {
          id: 'galvaniz',
          icon: Droplets,
          title: 'Hot Dip Galvanizing Chemicals',
          description: 'Specially formulated chemicals for galvanizing processes',
          products: [
            'Degreaser',
            'Acid (Hydrochloric Acid)',
            'Flux (Ammonium Chloride)',
            'Zinc Chloride',
            'Galvanizing Brightener',
            'Passivations'
          ]
        },
        {
          id: 'hammadde',
          icon: Package,
          title: 'Raw Materials',
          description: 'High purity raw materials for industrial use',
          products: [
            'Ammonium Chloride',
            'Zinc Chloride',
            'Ammonium Sulfate',
            'Hydrochloric Acid',
            'Caustic Soda',
            'Sodium Hydroxide'
          ]
        },
        {
          id: 'metal',
          icon: Layers,
          title: 'Metals',
          description: 'Metal products for galvanizing and metal processing',
          products: [
            'Zinc Ingot',
            'Zinc Bullion',
            'Aluminum Ingot',
            'Lead',
            'Tin',
            'Alloyed Metals'
          ]
        }
      ],
      viewProducts: 'View Products',
      backToCategories: 'Back to Categories'
    }
  };

  const t = content[language];

  if (selectedCategory) {
    const category = t.categories.find(c => c.id === selectedCategory);
    if (!category) return null;

    const Icon = category.icon;

    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ChevronRight className="w-5 h-5 rotate-180 mr-1" />
            {t.backToCategories}
          </button>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-blue-600"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {language === 'tr' ? 'Yüksek Saflık' : 'High Purity'}
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {language === 'tr' ? 'Hızlı Teslimat' : 'Fast Delivery'}
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {language === 'tr' ? 'Teknik Destek' : 'Technical Support'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="mb-12 relative rounded-2xl overflow-hidden shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[300px] md:h-[400px] object-cover"
          >
            <source src="/src/assets/realFactory.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="max-w-2xl px-8 md:px-12">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {language === 'tr' ? 'Modern Üretim Tesislerimiz' : 'Our Modern Production Facilities'}
              </h3>
              <p className="text-white/90 text-lg drop-shadow-md">
                {language === 'tr'
                  ? 'Son teknoloji ekipmanlarla donatılmış tesislerimizde üretilen yüksek kaliteli ürünler'
                  : 'High quality products manufactured in our facilities equipped with state-of-the-art equipment'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-blue-100">{category.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {category.products.slice(0, 4).map((product, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                        {product}
                      </li>
                    ))}
                    {category.products.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{category.products.length - 4} {language === 'tr' ? 'daha fazla' : 'more'}
                      </li>
                    )}
                  </ul>
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    {t.viewProducts}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
