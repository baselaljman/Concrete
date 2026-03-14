
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
    nav_change_lang: 'Change Language',
    brand_name: 'للأعمال الخرسانية',
    brand_full_name: 'للأعمال والحلول الخرسانية المتقدمة',
    hero_title: 'نبني القوة،',
    hero_subtitle: 'نشكل التقدم',
    hero_desc: 'حلول خرسانية متميزة للإنارة، سلامة الطرق، والتطوير الحضري. صُممت لتدوم، وسُلمت بدقة.',
    btn_catalog: 'استكشف الكتالوج',
    btn_contact: 'تواصل معنا',
    btn_call: 'اتصل بالمبيعات',
    float_whatsapp: 'واتساب',
    float_call: 'اتصال',
    section_why_title: 'لماذا نحن؟',
    footer_desc: 'نقدم حلولاً خرسانية متكاملة لمشاريعكم بكفاءة وجودة عالية. نحن نضمن تجربة فريدة من اختيار المنتج إلى التسليم من خلال فريق هندسي متخصص.',
    footer_quick_links: 'روابط سريعة',
    footer_categories: 'الفئات',
    footer_contact_us: 'اتصل بنا',
    footer_rights: 'جميع الحقوق محفوظة - للأعمال والحلول الخرسانية',
    footer_location: 'الرياض، المملكة العربية السعودية',
    footer_catalog: 'كتالوج المنتجات',
    footer_company_profile: 'من نحن',
    footer_customer_support: 'دعم العملاء',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'الشروط والأحكام',
    cat_lighting: 'قواعد الإنارة',
    cat_manholes: 'المناهل والحلقات',
    cat_barriers: 'حواجز الطرق',
    cat_benches: 'المقاعد الحضرية',
    lang_switch: 'English',
    contact_title: 'تواصل معنا',
    about_title: 'لماذا نحن؟',
    products_title: 'المنتجات والحلول',
    our_work_title: 'أعمالنا'
  },
  en: {
    nav_home: 'Home',
    nav_products: 'Products',
    nav_about: 'Why Us?',
    nav_contact: 'Contact Us',
    nav_change_lang: 'العربية',
    brand_name: 'Concrete Works',
    brand_full_name: 'Concrete Works & Advanced Solutions',
    hero_title: 'Building Strength,',
    hero_subtitle: 'Shaping Progress',
    hero_desc: 'Premium concrete solutions for lighting, road safety, and urban development. Built to last, delivered with precision.',
    btn_catalog: 'Explore Catalog',
    btn_contact: 'Contact Us',
    btn_call: 'Call Sales',
    float_whatsapp: 'WhatsApp',
    float_call: 'Call',
    section_why_title: 'Why Us?',
    footer_desc: 'We provide integrated concrete solutions for your projects with high efficiency and quality. We guarantee a unique experience with an expert engineering team.',
    footer_quick_links: 'Quick Links',
    footer_categories: 'Categories',
    footer_contact_us: 'Contact Us',
    footer_rights: 'All rights reserved - Concrete Works & Solutions',
    footer_location: 'Riyadh, Saudi Arabia',
    footer_catalog: 'Product Catalog',
    footer_company_profile: 'About Us',
    footer_customer_support: 'Customer Support',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms & Conditions',
    cat_lighting: 'Lighting Bases',
    cat_manholes: 'Manholes & Rings',
    cat_barriers: 'Road Barriers',
    cat_benches: 'Urban Benches',
    lang_switch: 'العربية',
    contact_title: 'Contact Us',
    about_title: 'Why Us?',
    products_title: 'Products & Solutions',
    our_work_title: 'Our Work'
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
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
