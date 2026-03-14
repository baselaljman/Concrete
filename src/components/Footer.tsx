
'use client';

import Link from 'next/link';
import { Construction, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export function Footer() {
  const { t, language, dir } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className={`container mx-auto px-4 py-12 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className={`flex items-center gap-2 ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
              <span className="font-headline font-bold text-xl">{t('brand_name')}</span>
              <Construction className="h-6 w-6 text-accent" />
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {t('footer_desc')}
            </p>
            <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
              <Link href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-bold text-lg mb-4">{t('footer_quick_links')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/catalog" className="hover:text-accent transition-colors">{t('footer_catalog')}</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">{t('footer_company_profile')}</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">{t('footer_customer_support')}</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors">{t('footer_privacy')}</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors">{t('footer_terms')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-lg mb-4">{t('footer_categories')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/catalog?category=lighting" className="hover:text-accent transition-colors">{t('cat_lighting')}</Link></li>
              <li><Link href="/catalog?category=manholes" className="hover:text-accent transition-colors">{t('cat_manholes')}</Link></li>
              <li><Link href="/catalog?category=barriers" className="hover:text-accent transition-colors">{t('cat_barriers')}</Link></li>
              <li><Link href="/catalog?category=benches" className="hover:text-accent transition-colors">{t('cat_benches')}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-headline font-bold text-lg mb-4">{t('footer_contact_us')}</h3>
            <div className={`flex items-start gap-3 text-sm text-primary-foreground/70 ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
              <span>{t('footer_location')}</span>
              <MapPin className="h-5 w-5 text-accent shrink-0" />
            </div>
            <div className={`flex items-center gap-3 text-sm text-primary-foreground/70 ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
              <span dir="ltr">0552076668</span>
              <Phone className="h-5 w-5 text-accent shrink-0" />
            </div>
            <div className={`flex items-center gap-3 text-sm text-primary-foreground/70 ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
              <span>he1991mo@gmail.com</span>
              <Mail className="h-5 w-5 text-accent shrink-0" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
}
