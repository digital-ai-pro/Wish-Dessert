import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, MessageCircle, Instagram, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { contactInfo } from '@/data/siteData';

const ContactSection = () => {
  const { language, t } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      title: t('phone'),
      value: contactInfo.phone,
      action: () => window.open(`tel:${contactInfo.phone}`),
      color: 'text-green-600'
    },
    {
      icon: MessageCircle,
      title: t('whatsapp'),
      value: contactInfo.whatsapp,
      action: () => window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`),
      color: 'text-green-500'
    },
    {
      icon: Instagram,
      title: t('instagram'),
      value: contactInfo.instagram,
      action: () => window.open(`https://instagram.com/${contactInfo.instagram.replace('@', '')}`),
      color: 'text-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-cafe-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            {t('contactUs')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تواصل معنا للحجز أو الاستفسار، نحن هنا لخدمتك'
              : 'Contact us for reservations or inquiries, we are here to serve you'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location */}
            <Card className="hover:shadow-cafe transition-all duration-300 bg-card border-cafe-pink/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 rtl:space-x-reverse text-foreground">
                  <MapPin className="h-5 w-5 text-cafe-pink" />
                  <span>{t('location')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' ? contactInfo.addressAr : contactInfo.address}
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.open(contactInfo.mapUrl, '_blank')}
                  className="border-cafe-pink/20 hover:bg-cafe-pink/10"
                >
                  <ExternalLink className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t('viewOnMap')}
                </Button>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="hover:shadow-cafe transition-all duration-300 bg-card border-cafe-pink/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 rtl:space-x-reverse text-foreground">
                  <Clock className="h-5 w-5 text-cafe-pink" />
                  <span>{t('workingHours')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  {language === 'ar' ? contactInfo.workingHoursAr : contactInfo.workingHours}
                </p>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="cursor-pointer hover:shadow-cafe transition-all duration-300 hover:-translate-y-1 bg-card border-cafe-pink/20 group"
                  onClick={method.action}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-cafe-gradient mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="h-96 lg:h-full min-h-[400px]">
            <Card className="h-full overflow-hidden shadow-cafe border-cafe-pink/20">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4956147040744!2d55.45206720000001!3d25.30861360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f4c427ac097%3A0xe5fbbcee8e61d1c3!2sWish%20Dessert!5e0!3m2!1sen!2s!4v1701234567890!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wish Dessert Location"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="inline-block bg-cafe-gradient text-white shadow-cafe-glow border-0 animate-pulse-soft">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {language === 'ar' ? 'جاهزون لاستقبالكم!' : 'Ready to Welcome You!'}
              </h3>
              <p className="mb-4 opacity-90">
                {language === 'ar'
                  ? 'احجز طاولتك الآن أو اطلب للتوصيل'
                  : 'Book your table now or order for delivery'
                }
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse justify-center">
                <Button
                  variant="outline"
                  className="bg-white text-cafe-brown hover:bg-cafe-cream border-0"
                  onClick={() => window.open(`tel:${contactInfo.phone}`)}
                >
                  <Phone className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t('callNow')}
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-cafe-brown hover:bg-cafe-cream border-0"
                  onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(language === 'ar' ? 'مرحباً، أود الحجز في مقهى Wish Dessert' : 'Hello, I would like to make a reservation at Wish Dessert')}`, '_blank')}
                >
                  <MessageCircle className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t('whatsapp')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;