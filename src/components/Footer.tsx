import React from 'react';
import { Heart, Coffee, MapPin, Phone, MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { contactInfo, cafeInfo } from '@/data/siteData';
import wishLogo from '@/assets/wish-dessert-logo.png';

const Footer = () => {
  const { language, t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cafe-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={wishLogo} alt="Wish Dessert Logo" className="h-12 w-12 sm:h-8 sm:w-8 object-contain" />
              <div>
                <h3 className="text-xl font-bold">
                  {language === 'ar' ? cafeInfo.nameAr : cafeInfo.name}
                </h3>
                <p className="text-sm text-cafe-gold">
                  {language === 'ar' ? cafeInfo.taglineAr : cafeInfo.tagline}
                </p>
              </div>
            </div>
            <p className="text-cafe-cream text-sm leading-relaxed">
              {language === 'ar'
                ? 'مقهى مريح في قلب الشارقة يقدم أفضل أنواع القهوة والحلويات'
                : 'A cozy cafe in the heart of Sharjah offering the finest coffee and desserts'
              }
            </p>
            <div className="flex items-center space-x-1 rtl:space-x-reverse text-cafe-gold">
              <Heart className="h-4 w-4 sm:h-3 sm:w-3 fill-current" />
              <span className="text-sm">
                {language === 'ar' ? 'صُنع بحب في الشارقة' : 'Made with love in Sharjah'}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cafe-gold">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {[
                { key: 'home', href: '#home' },
                { key: 'menu', href: '#menu' },
                { key: 'about', href: '#about' },
                { key: 'reviews', href: '#reviews' },
                { key: 'gallery', href: '#gallery' },
                { key: 'contact', href: '#contact' }
              ].map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-cafe-cream hover:text-cafe-gold transition-colors duration-200 text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cafe-gold">
              {language === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 sm:h-3 sm:w-3 text-cafe-gold mt-1 flex-shrink-0" />
                <span className="text-cafe-cream text-sm">
                  {language === 'ar' ? contactInfo.addressAr : contactInfo.address}
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-4 w-4 sm:h-3 sm:w-3 text-cafe-gold flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-cafe-cream hover:text-cafe-gold transition-colors duration-200 text-sm"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Coffee className="h-4 w-4 sm:h-3 sm:w-3 text-cafe-gold flex-shrink-0" />
                <span className="text-cafe-cream text-sm">
                  {language === 'ar' ? contactInfo.workingHoursAr : contactInfo.workingHours}
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Orders */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cafe-gold">
              {language === 'ar' ? 'تابعنا واطلب' : 'Follow & Order'}
            </h4>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 rtl:space-x-reverse text-cafe-cream hover:text-cafe-gold transition-colors duration-200 group"
              >
                <MessageCircle className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm">{t('whatsapp')}</span>
              </a>
              <a
                href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 rtl:space-x-reverse text-cafe-cream hover:text-cafe-gold transition-colors duration-200 group"
              >
                <Instagram className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm">{contactInfo.instagram}</span>
              </a>
            </div>
            
            {/* Order Button */}
            <div className="mt-6">
              <button
                onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(language === 'ar' ? 'مرحباً، أود طلب من مقهى Wish Dessert' : 'Hello, I would like to order from Wish Dessert')}`, '_blank')}
                className="w-full bg-cafe-gradient text-white py-2 px-4 rounded-lg hover:shadow-cafe-glow transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
              >
                {t('orderNow')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cafe-gold/30 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-cafe-cream text-sm text-center md:text-left">
              © {currentYear} {language === 'ar' ? cafeInfo.nameAr : cafeInfo.name}. 
              {language === 'ar' ? ' جميع الحقوق محفوظة.' : ' All rights reserved.'}
            </p>
            <p className="text-cafe-cream text-sm text-center md:text-right">
              {language === 'ar'
                ? 'تم التطوير بـ'
                : 'Developed with'
              } <Heart className="inline h-3 w-3 text-cafe-pink fill-current mx-1" />
              {language === 'ar' ? 'في الإمارات' : 'in UAE'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;