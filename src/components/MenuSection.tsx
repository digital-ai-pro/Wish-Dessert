import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { menuCategories } from '@/data/menuData';
import { MenuItem } from '@/types';
import dessertsImage from '@/assets/desserts-collection.jpg';
import beveragesImage from '@/assets/beverages-collection.jpg';

const MenuSection = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].id);

  const getCategoryImage = (categoryId: string) => {
    if (categoryId.includes('drink')) return beveragesImage;
    if (categoryId === 'desserts') return dessertsImage;
    return beveragesImage; // Default
  };

  const handleOrderItem = (item: MenuItem) => {
    const itemName = language === 'ar' ? item.nameAr : item.name;
    const message = language === 'ar' 
      ? `مرحباً، أود طلب: ${itemName} (${item.price} درهم)`
      : `Hello, I would like to order: ${itemName} (${item.price} AED)`;
    
    window.open(`https://wa.me/971501234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="menu" className="py-16 bg-cafe-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            {t('ourMenu')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'اكتشف مجموعة متنوعة من المشروبات الساخنة والباردة والحلويات الشهية'
              : 'Discover our variety of hot and cold beverages and delicious desserts'
            }
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-cafe-gradient text-white shadow-cafe'
                  : 'border-cafe-pink/20 hover:bg-cafe-pink/10'
              }`}
            >
              {language === 'ar' ? category.nameAr : category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories
            .find(cat => cat.id === selectedCategory)
            ?.items.map((item) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-cafe transition-all duration-300 hover:-translate-y-1 bg-card border-cafe-pink/20"
              >
                <CardHeader className="relative pb-2">
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <img
                      src={getCategoryImage(selectedCategory)}
                      alt={language === 'ar' ? item.nameAr : item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground mb-1">
                        {language === 'ar' ? item.nameAr : item.name}
                      </CardTitle>
                      {item.description && (
                        <p className="text-sm text-muted-foreground">
                          {language === 'ar' ? item.descriptionAr : item.description}
                        </p>
                      )}
                    </div>
                    {item.popular && (
                      <Badge variant="secondary" className="bg-cafe-gold/20 text-cafe-brown">
                        <Star className="h-3 w-3 mr-1 rtl:mr-0 rtl:ml-1" />
                        {language === 'ar' ? 'مشهور' : 'Popular'}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {item.price} {t('aed')}
                    </span>
                    <Button
                      size="sm"
                      onClick={() => handleOrderItem(item)}
                      className="bg-cafe-gradient text-white hover:shadow-cafe-glow transition-all duration-300"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                      {t('orderNow')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-cafe-pink hover:bg-cafe-pink/10 transition-all duration-300"
            onClick={() => window.open(`https://wa.me/971501234567?text=${encodeURIComponent(language === 'ar' ? 'مرحباً، أود مشاهدة المنيو الكامل' : 'Hello, I would like to see the full menu')}`, '_blank')}
          >
            {language === 'ar' ? 'شاهد المنيو الكامل' : 'View Full Menu'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;