import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    menu: 'المنيو',
    about: 'عن المقهى',
    reviews: 'التقييمات',
    contact: 'التواصل',
    gallery: 'المعرض',
    
    // Buttons
    orderNow: 'اطلب الآن',
    viewMenu: 'شاهد المنيو',
    addReview: 'إضافة تقييم',
    submitReview: 'إرسال التقييم',
    viewOnMap: 'عرض على الخريطة',
    callNow: 'اتصل الآن',
    whatsapp: 'واتساب',
    instagram: 'انستجرام',
    
    // Sections
    ourMenu: 'منيونا',
    ourStory: 'قصتنا',
    customerReviews: 'آراء عملائنا',
    contactUs: 'تواصل معنا',
    ourGallery: 'معرض الصور',
    
    // Forms
    yourName: 'اسمك',
    yourReview: 'تقييمك',
    rating: 'التقييم',
    
    // Info
    workingHours: 'ساعات العمل',
    location: 'الموقع',
    phone: 'الهاتف',
    price: 'السعر',
    aed: 'درهم',
    
    // Messages
    thankYou: 'شكراً لك!',
    reviewSubmitted: 'تم إرسال تقييمك بنجاح',
    
    // Menu categories
    hotDrinks: 'المشروبات الساخنة',
    coldDrinks: 'المشروبات الباردة',
    desserts: 'الحلويات',
    breakfast: 'الفطور',
    snacks: 'الوجبات الخفيفة',
    
    // About
    aboutDescription: 'مقهى مريح في قلب الشارقة، يقدم أفضل أنواع القهوة والحلويات مع الضيافة الدافئة. استمتع بالمزيج المثالي من الحلويات العربية التقليدية وثقافة المقاهي العصرية.',
    
    // Features
    freshIngredients: 'مكونات طازجة',
    cozyAtmosphere: 'أجواء مريحة',
    expertBaristas: 'باريستا محترفون',
    traditionalSweets: 'حلويات تقليدية'
  },
  en: {
    // Navigation
    home: 'Home',
    menu: 'Menu',
    about: 'About',
    reviews: 'Reviews',
    contact: 'Contact',
    gallery: 'Gallery',
    
    // Buttons
    orderNow: 'Order Now',
    viewMenu: 'View Menu',
    addReview: 'Add Review',
    submitReview: 'Submit Review',
    viewOnMap: 'View on Map',
    callNow: 'Call Now',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    
    // Sections
    ourMenu: 'Our Menu',
    ourStory: 'Our Story',
    customerReviews: 'Customer Reviews',
    contactUs: 'Contact Us',
    ourGallery: 'Our Gallery',
    
    // Forms
    yourName: 'Your Name',
    yourReview: 'Your Review',
    rating: 'Rating',
    
    // Info
    workingHours: 'Working Hours',
    location: 'Location',
    phone: 'Phone',
    price: 'Price',
    aed: 'AED',
    
    // Messages
    thankYou: 'Thank You!',
    reviewSubmitted: 'Your review has been submitted successfully',
    
    // Menu categories
    hotDrinks: 'Hot Drinks',
    coldDrinks: 'Cold Drinks',
    desserts: 'Desserts',
    breakfast: 'Breakfast',
    snacks: 'Snacks',
    
    // About
    aboutDescription: 'A cozy cafe in the heart of Sharjah, offering the finest coffee, desserts, and warm hospitality. Experience the perfect blend of traditional Arabic sweets and modern cafe culture.',
    
    // Features
    freshIngredients: 'Fresh Ingredients',
    cozyAtmosphere: 'Cozy Atmosphere',
    expertBaristas: 'Expert Baristas',
    traditionalSweets: 'Traditional Sweets'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={`${language === 'ar' ? 'font-arabic' : 'font-sans'} ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};