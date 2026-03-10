'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    nav_home: 'الرئيسية',
    nav_products: 'المنتجات',
    nav_about: 'لماذا نحن؟',
    nav_contact: 'اتصل بنا',
    nav_change_lang: 'تغيير اللغة',
    hero_title: 'نبني القوة،',
    hero_subtitle: 'نشكل التقدم',
    hero_desc: 'حلول خرسانية متميزة للإنارة، سلامة الطرق، والتطوير الحضري. صُممت لتدوم، وسُلمت بدقة.',
    btn_catalog: 'استكشف الكتالوج',
    btn_contact: 'تواصل معنا',
    btn_call: 'اتصل بالمبيعات',
    section_why_title: 'لماذا نحن مختلفون؟',
    footer_desc: 'نقدم حلولاً خرسانية متكاملة لمشاريعكم بكفاءة وجودة عالية.',
    lang_switch: 'English',
    contact_title: 'تواصل معنا',
    about_title: 'لماذا نحن؟',
    products_title: 'منتجاتنا'
  },
  en: {
    nav_home: 'Home',
    nav_products: 'Products',
    nav_about: 'Why Us?',
    nav_contact: 'Contact Us',
    nav_change_lang: 'Change Language',
    hero_title: 'Building Strength,',
    hero_subtitle: 'Shaping Progress',
    hero_desc: 'Premium concrete solutions for lighting, road safety, and urban development. Built to last, delivered with precision.',
    btn_catalog: 'Explore Catalog',
    btn_contact: 'Contact Us',
    btn_call: 'Call Sales',
    section_why_title: 'Why Are We Different?',
    footer_desc: 'We provide integrated concrete solutions for your projects with high efficiency and quality.',
    lang_switch: 'العربية',
    contact_title: 'Contact Us',
    about_title: 'Why Us?',
    products_title: 'Our Products'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Language;
    if (saved) setLanguageState(saved);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  };

  const t = (key: string) => translations[language][key] || key;
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      <div dir={dir}>{children}</div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
