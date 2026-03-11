
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { useLanguage } from '@/components/LanguageProvider';
import { Truck, Zap, Shield, ArrowLeft, ArrowRight, Construction, Images, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';

const GALLERY_IMAGES = [
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-31.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-32.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-33.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-34.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-1.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-2.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-4.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-3.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-13.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-14.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-5.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-7.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-8.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-9.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-10.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-11.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-12.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-15.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-16.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-17.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-18.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-19.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-20.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-21.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-22.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-23.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-24.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-25.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-26.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-27.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-28.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-29.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-30.jpeg",
  "https://xn--ogbhrq.vip/wp-content/uploads/2026/03/conc-6.jpeg"
];

export default function Home() {
  const { language, t, dir } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const heroImg = 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete4.png';
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

      {/* Our Work / Gallery Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary flex items-center justify-center gap-3">
              {t('our_work_title')} <Images className="h-8 w-8 text-accent" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {language === 'ar' 
                ? 'فخورون بتنفيذ أرقى المشاريع الخرسانية والإنشائية في مختلف أنحاء المملكة، بجودة تضمن الاستدامة والتميز.'
                : 'Proud to execute the finest concrete and construction projects across the Kingdom, with quality ensuring sustainability and excellence.'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((src, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button 
                    className="group relative aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in"
                  >
                    <Image 
                      src={src} 
                      alt={`Work ${index + 1}`} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Maximize2 className="text-white h-5 w-5" />
                       </div>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                  <DialogTitle className="sr-only">مشاهدة العمل</DialogTitle>
                  <div className="relative aspect-[4/3] w-full">
                    <Image 
                      src={src} 
                      alt={`Full Work ${index + 1}`} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Button size="lg" className="bg-primary hover:bg-primary/90 px-12 h-14 text-lg font-bold" asChild>
                <Link href="/contact">{t('btn_contact')}</Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
