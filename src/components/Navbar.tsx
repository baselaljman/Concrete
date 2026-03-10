'use client';

import Link from 'next/link';
import { Languages, Search, Construction, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();

  const navLinks = [
    { href: '/catalog', label: t('nav_products') },
    { href: '/about', label: t('nav_about') },
    { href: '/contact', label: t('nav_contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Construction className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-headline font-bold text-xl tracking-tight text-primary">
              {language === 'ar' ? 'كونكريت' : 'Concrete'}
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-bold text-primary border-primary/20 hover:bg-primary/5 hover:border-primary transition-all px-4"
          >
            <Languages className="h-5 w-5 text-accent" />
            <span className="text-sm">{t('lang_switch')}</span>
          </Button>

          <Link href="/catalog">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={dir === 'rtl' ? 'right' : 'left'} className={`w-[300px] ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
              <SheetHeader>
                <SheetTitle className={`${dir === 'rtl' ? 'text-right' : 'text-left'} font-headline text-primary border-b pb-4`}>
                  {language === 'ar' ? 'القائمة' : 'Menu'}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium py-2 border-b border-transparent hover:border-accent hover:text-accent transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <button 
                  onClick={() => { toggleLanguage(); setIsOpen(false); }}
                  className="text-lg font-medium py-2 flex items-center gap-2 border-t mt-4 pt-4"
                  style={{ justifyContent: dir === 'rtl' ? 'flex-end' : 'flex-start' }}
                >
                   {t('lang_switch')} <Languages className="h-5 w-5 text-accent" />
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
