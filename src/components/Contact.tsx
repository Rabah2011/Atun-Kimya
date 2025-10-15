import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  language: 'tr' | 'en';
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const content = {
    tr: {
      title: 'İletişim',
      subtitle: 'Bizimle İletişime Geçin',
      form: {
        title: 'Mesaj Gönderin',
        name: 'Ad Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        subject: 'Konu',
        message: 'Mesajınız',
        send: 'Gönder',
        success: 'Mesajınız başarıyla gönderildi!'
      },
      offices: {
        title: 'Ofislerimiz',
        istanbul: {
          title: 'İstanbul Ofis',
          address: 'Atatürk Mahallesi, Sanayi Caddesi No:123, Ümraniye, İstanbul',
          phone: '+90 216 555 0123',
          fax: '+90 216 555 0124'
        },
        kocaeli: {
          title: 'Kocaeli Üretim Tesisi',
          address: 'Organize Sanayi Bölgesi, 45. Sokak No:67, Gebze, Kocaeli',
          phone: '+90 262 555 0125',
          fax: '+90 262 555 0126'
        }
      },
      info: {
        title: 'İletişim Bilgileri',
        email: 'info@atunkimya.com',
        sales: 'satis@atunkimya.com',
        support: 'destek@atunkimya.com',
        workHours: 'Çalışma Saatleri',
        hours: 'Pazartesi - Cuma: 08:00 - 18:00',
        saturday: 'Cumartesi: 09:00 - 14:00',
        sunday: 'Pazar: Kapalı'
      }
    },
    en: {
      title: 'Contact',
      subtitle: 'Get In Touch With Us',
      form: {
        title: 'Send a Message',
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send',
        success: 'Your message has been sent successfully!'
      },
      offices: {
        title: 'Our Offices',
        istanbul: {
          title: 'Istanbul Office',
          address: 'Atatürk Mahallesi, Sanayi Caddesi No:123, Ümraniye, Istanbul',
          phone: '+90 216 555 0123',
          fax: '+90 216 555 0124'
        },
        kocaeli: {
          title: 'Kocaeli Production Facility',
          address: 'Organize Sanayi Bölgesi, 45. Sokak No:67, Gebze, Kocaeli',
          phone: '+90 262 555 0125',
          fax: '+90 262 555 0126'
        }
      },
      info: {
        title: 'Contact Information',
        email: 'info@atunkimya.com',
        sales: 'sales@atunkimya.com',
        support: 'support@atunkimya.com',
        workHours: 'Work Hours',
        hours: 'Monday - Friday: 08:00 - 18:00',
        saturday: 'Saturday: 09:00 - 14:00',
        sunday: 'Sunday: Closed'
      }
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.form.success);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.form.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                {t.form.send}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.offices.title}</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t.offices.istanbul.title}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-blue-600" />
                      {t.offices.istanbul.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-blue-600" />
                      {t.offices.istanbul.phone}
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t.offices.kocaeli.title}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-green-600" />
                      {t.offices.kocaeli.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-green-600" />
                      {t.offices.kocaeli.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">{t.info.title}</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  {t.info.email}
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  {t.info.sales}
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  {t.info.support}
                </p>
                <div className="pt-4 mt-4 border-t border-blue-400">
                  <p className="flex items-center font-semibold mb-2">
                    <Clock className="w-5 h-5 mr-3" />
                    {t.info.workHours}
                  </p>
                  <p className="ml-8 text-blue-100">{t.info.hours}</p>
                  <p className="ml-8 text-blue-100">{t.info.saturday}</p>
                  <p className="ml-8 text-blue-100">{t.info.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2918454960174!2d29.11!3d41.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzM2LjAiTiAyOcKwMDYnMzYuMCJF!5e0!3m2!1sen!2str!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
