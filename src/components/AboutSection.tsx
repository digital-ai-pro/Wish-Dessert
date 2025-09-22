import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee, Heart, Users, Award } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Coffee,
      titleAr: 'قهوة عالية الجودة',
      titleEn: 'Premium Coffee',
      descriptionAr: 'نستخدم أجود أنواع القهوة المحمصة طازجة يومياً',
      descriptionEn: 'We use the finest coffee beans, freshly roasted daily'
    },
    {
      icon: Heart,
      titleAr: 'صنع بحب',
      titleEn: 'Made with Love',
      descriptionAr: 'كل شيء في مقهانا يُحضر بعناية وحب حقيقي',
      descriptionEn: 'Everything in our cafe is prepared with care and genuine love'
    },
    {
      icon: Users,
      titleAr: 'أجواء عائلية',
      titleEn: 'Family Atmosphere',
      descriptionAr: 'مكان مثالي للعائلات والأصدقاء للاستمتاع بوقت مميز',
      descriptionEn: 'Perfect place for families and friends to enjoy quality time'
    },
    {
      icon: Award,
      titleAr: 'جودة مضمونة',
      titleEn: 'Quality Guaranteed',
      descriptionAr: 'نلتزم بأعلى معايير الجودة في جميع منتجاتنا',
      descriptionEn: 'We maintain the highest quality standards in all our products'
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            {t('ourStory')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-cafe transition-all duration-300 hover:-translate-y-1 bg-card border-cafe-pink/20 group"
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cafe-gradient rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {language === 'ar' ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {language === 'ar' ? feature.descriptionAr : feature.descriptionEn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto bg-card rounded-lg p-8 shadow-cafe border border-cafe-pink/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {language === 'ar' ? 'قصة ويش ديزرت' : 'The Wish Dessert Story'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {language === 'ar'
                  ? 'بدأت رحلتنا في قلب الشارقة بحلم بسيط: إنشاء مكان حيث تتحقق الأمنيات الحلوة. منذ افتتاحنا، نسعى جاهدين لتقديم تجربة فريدة تجمع بين التقاليد العربية الأصيلة والذوق العصري.'
                  : 'Our journey began in the heart of Sharjah with a simple dream: to create a place where sweet wishes come true. Since our opening, we strive to provide a unique experience that combines authentic Arabic traditions with modern taste.'
                }
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'ar'
                  ? 'نفخر بخدمة عملائنا الكرام بأرقى أنواع القهوة والحلويات، في أجواء دافئة ومريحة تجعل كل زيارة ذكرى جميلة.'
                  : 'We take pride in serving our valued customers with the finest coffee and desserts, in a warm and comfortable atmosphere that makes every visit a beautiful memory.'
                }
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-cafe-gradient p-1">
                <div className="w-full h-full bg-cafe-cream rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <Coffee className="h-16 w-16 text-cafe-brown mx-auto mb-4" />
                    <p className="text-cafe-brown font-semibold text-lg">
                      {language === 'ar' ? 'تجربة لا تُنسى' : 'Unforgettable Experience'}
                    </p>
                    <p className="text-cafe-brown/70 text-sm mt-2">
                      {language === 'ar' ? 'منذ ٢٠٢٠' : 'Since 2020'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;