import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import cafeInterior from '@/assets/cafe-interior.jpg';
import dessertsCollection from '@/assets/desserts-collection.jpg';
import beveragesCollection from '@/assets/beverages-collection.jpg';

const GallerySection = () => {
  const { t } = useLanguage();

  const galleryImages = [
    {
      src: cafeInterior,
      alt: 'Cafe Interior',
      altAr: 'داخل المقهى',
      title: 'Cozy Interior',
      titleAr: 'داخل مريح'
    },
    {
      src: dessertsCollection,
      alt: 'Desserts Collection',
      altAr: 'مجموعة الحلويات',
      title: 'Fresh Desserts',
      titleAr: 'حلويات طازجة'
    },
    {
      src: beveragesCollection,
      alt: 'Beverages Collection',
      altAr: 'مجموعة المشروبات',
      title: 'Premium Beverages',
      titleAr: 'مشروبات مميزة'
    },
    {
      src: cafeInterior,
      alt: 'Cafe Atmosphere',
      altAr: 'أجواء المقهى',
      title: 'Warm Atmosphere',
      titleAr: 'أجواء دافئة'
    },
    {
      src: dessertsCollection,
      alt: 'Arabic Sweets',
      altAr: 'حلويات عربية',
      title: 'Traditional Sweets',
      titleAr: 'حلويات تقليدية'
    },
    {
      src: beveragesCollection,
      alt: 'Coffee Art',
      altAr: 'فن القهوة',
      title: 'Coffee Art',
      titleAr: 'فن القهوة'
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            {t('ourGallery')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('language') === 'ar'
              ? 'استمتع بجولة بصرية داخل مقهانا واكتشف أجواء المكان الساحرة'
              : 'Take a visual tour of our cafe and discover the enchanting atmosphere'
            }
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square bg-cafe-cream/30 hover:shadow-cafe transition-all duration-300"
            >
              <img
                src={image.src}
                alt={t('language') === 'ar' ? image.altAr : image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">
                    {t('language') === 'ar' ? image.titleAr : image.title}
                  </h3>
                </div>
              </div>
              
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-cafe-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Instagram Link */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t('language') === 'ar'
              ? 'تابعونا على انستجرام لمزيد من الصور'
              : 'Follow us on Instagram for more photos'
            }
          </p>
          <a
            href="https://instagram.com/wishdessert_sharjah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse text-primary hover:text-cafe-pink transition-colors duration-200 font-semibold"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@wishdessert_sharjah</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;