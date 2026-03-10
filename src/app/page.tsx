
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { useLanguage } from '@/components/LanguageProvider';
import { Truck, Zap, Shield, ArrowLeft, ArrowRight, Construction } from 'lucide-react';

export default function Home() {
  const { language, t, dir } = useLanguage();
  const heroImg = 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete4.png';
  const qualityImg = 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete9.png';
  const phoneNumber = '0552076668';
  const whatsappNumber = '966552076668';

  return (
    <div className="flex flex-col gap-12 md:gap-20 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[85vh] flex items-center overflow-hidden">
        <Image 
          src={heroImg} 
          alt="Concrete" 
          fill 
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 to-primary/40" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className={`max-w-2xl space-y-6 ${dir === 'rtl' ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold leading-tight">
              {t('hero_title')} <br/><span className="text-accent">{t('hero_subtitle')}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              {t('hero_desc')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 h-14 text-lg font-bold w-full sm:w-auto" asChild>
                <Link href="/catalog">{t('btn_catalog')}</Link>
              </Button>
              <Button size="lg" variant="secondary" className="px-8 h-14 text-lg font-bold text-primary w-full sm:w-auto bg-white hover:bg-white/90" asChild>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">{t('btn_contact')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 space-y-2">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary">
            {language === 'ar' ? 'حلول متكاملة' : 'Integrated Solutions'}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.slice(0, 4).map((cat) => (
            <Link 
              key={cat.id} 
              href={`/catalog?category=${cat.id}`}
              className="group bg-card border p-3 md:p-4 rounded-xl text-center hover:border-accent hover:shadow-lg transition-all flex flex-col items-center gap-3 md:gap-4"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-muted">
                <Image 
                  src={cat.imageUrl} 
                  alt={cat.name} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-110" 
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-headline font-bold text-sm md:text-lg">{language === 'ar' ? cat.name : cat.enName}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-4">
        <div className={`flex flex-col sm:flex-row justify-between items-end mb-8 md:mb-12 gap-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div className="space-y-2 w-full">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary">{t('products_title')}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
