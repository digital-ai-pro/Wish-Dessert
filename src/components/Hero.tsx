import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cafeInfo } from '@/data/siteData';
import cafeInterior from '@/assets/cafe-interior.jpg';

const Hero = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(232, 121, 164, 0.85), rgba(251, 191, 116, 0.75)), url(${cafeInterior})`
      }}
    >
      <div className="absolute inset-0 bg-cafe-hero opacity-90"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white drop-shadow-lg">
              {language === 'ar' ? cafeInfo.nameAr : cafeInfo.name}
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-cafe-gold font-normal">
              {language === 'ar' ? cafeInfo.taglineAr : cafeInfo.tagline}
            </span>
          </h1>

          {/* Rating */}
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse mb-6">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 sm:h-4 sm:w-4 ${
                    i < Math.floor(cafeInfo.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{cafeInfo.rating}</span>
            <span className="text-sm opacity-90">({cafeInfo.totalReviews} {t('reviews')})</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
            {language === 'ar' ? cafeInfo.descriptionAr : cafeInfo.description}
          </p>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 rtl:space-x-reverse mb-8 text-sm">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <MapPin className="h-4 w-4 sm:h-3 sm:w-3 text-cafe-gold" />
              <span>{language === 'ar' ? 'مويلح، الشارقة' : ' Muweilah, Sharjah'}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Clock className="h-4 w-4 sm:h-3 sm:w-3 text-cafe-gold" />
              <span>{language === 'ar' ? 'يومياً ٨ص - ١٢م' : 'Daily 8AM - 12AM'}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <Button
              size="lg"
              className="bg-white text-cafe-brown hover:bg-cafe-cream transition-all duration-300 transform hover:scale-105 shadow-cafe font-semibold px-8 py-3 text-lg animate-pulse-soft"
              onClick={() => window.open(`https://wa.me/971501234567`, '_blank')}
            >
              {t('orderNow')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cafe-brown transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('viewMenu')}
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-cafe-gold/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-white/15 rounded-full animate-float hidden lg:block" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default Hero;