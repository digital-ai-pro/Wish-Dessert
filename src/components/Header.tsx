import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useLanguage } from '@/hooks/useLanguage';
import wishLogo from '@/assets/wish-dessert-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'menu', href: '#menu' },
    { key: 'about', href: '#about' },
    { key: 'reviews', href: '#reviews' },
    { key: 'gallery', href: '#gallery' },
    { key: 'contact', href: '#contact' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-cafe">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={wishLogo} alt="Wish Dessert Logo" className="h-12 w-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-primary">
                {language === 'ar' ? 'ويش ديزرت' : 'Wish Dessert'}
              </h1>
              <p className="text-sm text-muted-foreground">
                {language === 'ar' ? 'هنا تصير الأمنيات حلوة' : 'Where Wishes Come Sweet'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              className="border-cafe-pink/20 hover:bg-cafe-pink/10"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <Button
              variant="default"
              className="hidden sm:flex bg-cafe-gradient text-white border-0 hover:shadow-cafe-glow transition-all duration-300"
              onClick={() => window.open(`https://wa.me/971501234567`, '_blank')}
            >
              {t('orderNow')}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-cafe-pink/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <Button
                variant="default"
                className="w-full bg-cafe-gradient text-white border-0 hover:shadow-cafe-glow transition-all duration-300 mt-4"
                onClick={() => {
                  window.open(`https://wa.me/971501234567`, '_blank');
                  setIsMenuOpen(false);
                }}
              >
                {t('orderNow')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;