'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Truck, Zap, Shield, ArrowLeft, Construction } from 'lucide-react';

export default function Home() {
  const heroImg = 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete4.png';
  const qualityImg = 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete9.png';
  const phoneNumber = '0552076668';
  const whatsappNumber = '966552076668';

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <Image 
          src={heroImg} 
          alt="Concrete" 
          fill 
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 to-primary/40" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight text-right">
              نبني القوة، <br/><span className="text-accent">نشكل التقدم</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed text-right">
              حلول خرسانية متميزة للإنارة، سلامة الطرق، والتطوير الحضري. صُممت لتدوم، وسُلمت بدقة.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-end">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 h-14 text-lg" asChild>
                <Link href="/catalog">استكشف الكتالوج</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 h-14 text-lg" asChild>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">تواصل معنا</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-headline font-bold text-primary">حلول متكاملة</h2>
          <p className="text-muted-foreground">مجموعة شاملة من المنتجات الخرسانية مسبقة الصب لكل احتياجات المشاريع.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.slice(0, 4).map((cat) => (
            <Link 
              key={cat.id} 
              href={`/catalog?category=${cat.id}`}
              className="group bg-card border p-4 rounded-xl text-center hover:border-accent hover:shadow-lg transition-all flex flex-col items-center gap-4"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-muted">
                <Image 
                  src={cat.imageUrl} 
                  alt={cat.name} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
                />
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-2 group-hover:text-accent transition-colors">عرض المجموعة <ArrowLeft className="inline h-3 w-3" /></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-4xl font-headline font-bold text-right">لماذا نحن مختلفون؟</h2>
              <div className="grid gap-6">
                <div className="flex gap-4 justify-end">
                  <div className="text-right">
                    <h4 className="font-bold text-xl mb-1">تنوع هائل</h4>
                    <p className="text-primary-foreground/70">من قواعد الإنارة إلى مقاعد الحدائق، نقدم جميع الأحجام والأنواع المصممة حسب المعايير الهندسية.</p>
                  </div>
                  <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <div className="text-right">
                    <h4 className="font-bold text-xl mb-1">جودة معتمدة</h4>
                    <p className="text-primary-foreground/70">منتجاتنا تتبع أعلى المعايير الهندسية للمتانة والأداء طويل الأمد.</p>
                  </div>
                  <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <div className="text-right">
                    <h4 className="font-bold text-xl mb-1">سهولة الطلب والتوصيل</h4>
                    <p className="text-primary-foreground/70">تواصل مباشر وسريع مع قسم المبيعات وتوصيل آمن للموقع مباشرة.</p>
                  </div>
                  <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image 
                src={qualityImg} 
                alt="جودة الإنتاج" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2 text-right">
            <h2 className="text-3xl font-headline font-bold text-primary">منتجات مميزة</h2>
            <p className="text-muted-foreground">اكتشف حلولنا الخرسانية الأكثر رواجاً.</p>
          </div>
          <Button variant="link" className="text-accent text-lg" asChild>
            <Link href="/catalog" className="group">
              عرض كل المنتجات <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-accent rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden text-right">
          <div className="absolute top-0 left-0 opacity-10 -translate-x-1/4 -translate-y-1/4">
             <Construction className="h-[400px] w-[400px]" />
          </div>
          <div className="relative z-10 space-y-4 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">هل تحتاج إلى استشارة لمشروعك؟</h2>
            <p className="text-lg opacity-90">فريقنا الهندسي جاهز لمساعدتك في اختيار المنتجات الأنسب لمواصفات مشروعك الفنية.</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-white border-none px-8 h-14 font-bold" asChild>
              <a href={`tel:${phoneNumber}`}>اتصل بالمبيعات</a>
            </Button>
            <Button size="lg" variant="secondary" className="px-8 h-14 font-bold text-primary" asChild>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">تواصل معنا</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
