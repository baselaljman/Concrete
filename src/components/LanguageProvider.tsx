
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
    brand_name: 'دالية الفرات',
    brand_full_name: 'دالية الفرات للأعمال والحلول الخرسانية',
    hero_title: 'نبني القوة،',
    hero_subtitle: 'نشكل التقدم',
    hero_desc: 'حلول خرسانية متميزة من دالية الفرات للإنارة، سلامة الطرق، والتطوير الحضري. صُممت لتدوم، وسُلمت بدقة.',
    btn_catalog: 'استكشف الكتالوج',
    btn_contact: 'تواصل معنا',
    btn_call: 'اتصل بالمبيعات',
    float_whatsapp: 'واتساب',
    float_call: 'اتصال',
    section_why_title: 'لماذا نحن؟',
    footer_desc: 'نقدم حلولاً خرسانية متكاملة لمشاريعكم بكفاءة وجودة عالية في دالية الفرات للأعمال والحلول الخرسانية. نحن نضمن تجربة فريدة من اختيار المنتج إلى التسليم من خلال فريق هندسي متخصص.',
    footer_quick_links: 'روابط سريعة',
    footer_categories: 'الفئات',
    footer_contact_us: 'اتصل بنا',
    footer_rights: 'جميع الحقوق محفوظة - دالية الفرات للأعمال والحلول الخرسانية',
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
    our_work_title: 'أعمالنا',
    bot_welcome: 'مرحباً بك في دالية الفرات. كيف يمكننا مساعدتك اليوم في مشروعك الخرساني؟',
    bot_title: 'الدعم الفني لدالية الفرات',
    bot_thinking: 'جاري مراجعة المواصفات...',
    bot_placeholder: 'اسأل عن الأسعار أو المواصفات...',
    bot_error: 'نعتذر، حدث خطأ. يمكنك التواصل معنا مباشرة عبر واتساب.'
  },
  en: {
    nav_home: 'Home',
    nav_products: 'Products',
    nav_about: 'Why Us?',
    nav_contact: 'Contact Us',
    nav_change_lang: 'العربية',
    brand_name: 'Daliat Al Furat',
    brand_full_name: 'Daliat Al Furat for Concrete Works & Solutions',
    hero_title: 'Building Strength,',
    hero_subtitle: 'Shaping Progress',
    hero_desc: 'Premium concrete solutions from Daliat Al Furat for lighting, road safety, and urban development. Built to last, delivered with precision.',
    btn_catalog: 'Explore Catalog',
    btn_contact: 'Contact Us',
    btn_call: 'Call Sales',
    float_whatsapp: 'WhatsApp',
    float_call: 'Call',
    section_why_title: 'Why Us?',
    footer_desc: 'We provide integrated concrete solutions for your projects with high efficiency and quality at Daliat Al Furat. We guarantee a unique experience with an expert engineering team.',
    footer_quick_links: 'Quick Links',
    footer_categories: 'Categories',
    footer_contact_us: 'Contact Us',
    footer_rights: 'All rights reserved - Daliat Al Furat for Concrete Works & Solutions',
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
    our_work_title: 'Our Work',
    bot_welcome: 'Welcome to Daliat Al Furat. How can we help you with your concrete project today?',
    bot_title: 'Daliat Al Furat Support',
    bot_thinking: 'Reviewing specifications...',
    bot_placeholder: 'Ask about prices or specs...',
    bot_error: 'Sorry, an error occurred. Please contact us via WhatsApp.'
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
