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
    float_whatsapp: 'واتساب',
    float_call: 'اتصال',
    bot_title: 'دعم كونكريت الذكي',
    bot_welcome: 'مرحباً بكم في كونكريت! كيف يمكنني مساعدتكم اليوم فيما يخص منتجاتنا وخدماتنا الخرسانية؟',
    bot_placeholder: 'اسأل عن المنتجات...',
    bot_thinking: 'جاري التفكير...',
    bot_error: 'عذراً، حدث خطأ ما. يرجى المحاولة لاحقاً.',
    section_why_title: 'لماذا نحن مختلفون؟',
    footer_desc: 'نقدم حلولاً خرسانية متكاملة لمشاريعكم بكفاءة وجودة عالية. نحن نضمن تجربة فريدة من اختيار المنتج إلى التسليم.',
    footer_quick_links: 'روابط سريعة',
    footer_categories: 'الفئات',
    footer_contact_us: 'اتصل بنا',
    footer_rights: 'جميع الحقوق محفوظة',
    footer_location: 'الرياض، المملكة العربية السعودية',
    footer_catalog: 'كتالوج المنتجات',
    footer_company_profile: 'ملف الشركة',
    footer_customer_support: 'دعم العملاء',
    cat_lighting: 'قواعد الإنارة',
    cat_manholes: 'المناهل والحلقات',
    cat_barriers: 'حواجز الطرق',
    cat_benches: 'المقاعد الحضرية',
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
    float_whatsapp: 'WhatsApp',
    float_call: 'Call',
    bot_title: 'Concrete AI Support',
    bot_welcome: 'Welcome to Concrete! How can I help you today with our concrete products and services?',
    bot_placeholder: 'Ask about products...',
    bot_thinking: 'Thinking...',
    bot_error: 'Sorry, something went wrong. Please try again later.',
    section_why_title: 'Why Are We Different?',
    footer_desc: 'We provide integrated concrete solutions for your projects with high efficiency and quality. We guarantee a unique experience from product selection to delivery.',
    footer_quick_links: 'Quick Links',
    footer_categories: 'Categories',
    footer_contact_us: 'Contact Us',
    footer_rights: 'All rights reserved',
    footer_location: 'Riyadh, Saudi Arabia',
    footer_catalog: 'Product Catalog',
    footer_company_profile: 'Company Profile',
    footer_customer_support: 'Customer Support',
    cat_lighting: 'Lighting Bases',
    cat_manholes: 'Manholes & Rings',
    cat_barriers: 'Road Barriers',
    cat_benches: 'Urban Benches',
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
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
