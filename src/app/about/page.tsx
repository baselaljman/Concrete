
'use client';

import Image from 'next/image';
import { ShieldCheck, Target, Award, Users, CheckCircle2, Factory, Truck, HardHat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function AboutPage() {
  const { t, language } = useLanguage();
  const qualityImg = 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete9.png';
  const factoryImg = 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete4.png';

  const values = [
    {
      title: 'الجودة والاتقان',
      description: 'نلتزم بأعلى المعايير الهندسية في صب وتشكيل الخرسانة لضمان منتجات تدوم طويلاً.',
      icon: ShieldCheck,
    },
    {
      title: 'رؤية طموحة',
      description: 'نسعى لأن نكون الشريك الأول لمشاريع البنية التحتية والتطوير العمراني في المملكة.',
      icon: Target,
    },
    {
      title: 'خبرة فنية',
      description: 'فريقنا يمتلك خبرة واسعة في التعامل مع مختلف أنواع الخرسانة والمنتجات مسبقة الصب.',
      icon: Award,
    },
    {
      title: 'خدمة العملاء',
      description: 'نضع رضا العميل في مقدمة أولوياتنا من خلال التواصل المستمر والدعم الفني.',
      icon: Users,
    },
  ];

  const features = [
    'استخدام خرسانة معتمدة ذات إجهاد عالي.',
    'تسليح حديدي وفق المخططات الهندسية المعتمدة.',
    'عزل مائي وحماية ضد الظروف الجوية القاسية.',
    'دقة في الأبعاد والمقاسات باستخدام قوالب حديثة.',
    'قدرة إنتاجية عالية لتلبية المشاريع الضخمة.',
    'التزام تام بجداول التوريد المتفق عليها.',
  ];

  return (
    <div className="flex flex-col gap-16 pb-20 text-right">
      {/* Header Section */}
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl ml-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">{t('about_title')}</h1>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed">
              {language === 'ar' 
                ? 'نحن في دالية الفرات للأعمال والحلول الخرسانية نؤمن بأن القوة تبدأ من الأساس. نقدم حلولاً خرسانية مسبقة الصب تجمع بين المتانة الهندسية والجمال المعماري.'
                : 'At Daliat Al Furat for Concrete Works & Solutions, we believe strength starts from the foundation. We provide precast concrete solutions combining engineering durability with architectural beauty.'}
            </p>
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-1/3 bg-accent opacity-10 skew-x-12 -translate-x-1/2" />
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image src={qualityImg} alt="جودة دالية الفرات" fill className="object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-headline font-bold text-primary">قصة التميز</h2>
            <p className="text-muted-foreground leading-relaxed">
              تأسست دالية الفرات للأعمال والحلول الخرسانية لتلبية الطلب المتزايد على المنتجات الخرسانية عالية الجودة في السوق السعودي. ومنذ البداية، ركزنا على الاستثمار في أفضل القوالب والمعدات لضمان أعلى معايير الجودة.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              نحن لا نبيع منتجات خرسانية فحسب، بل نقدم استشارات هندسية وحلولاً مخصصة لكل مشروع، سواء كان ذلك لإنارة الطرق، أو أنظمة الصرف الصحي، أو تجميل الحدائق والمستشفيات.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-end gap-2 text-sm font-medium">
                  <span>{feature}</span>
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-headline font-bold text-primary">قيمنا الأساسية</h2>
            <p className="text-muted-foreground">المبادئ التي تقودنا في كل قطعة خرسانية ننتجها.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:-translate-y-2 transition-transform">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="h-16 w-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto text-accent">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-headline font-bold text-xl">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-headline font-bold">عملية الإنتاج والجودة</h2>
              <div className="space-y-6">
                <div className="flex gap-4 justify-end">
                  <div className="text-right">
                    <h4 className="font-bold text-lg mb-1">المواد الخام المعتمدة</h4>
                    <p className="text-primary-foreground/70 text-sm">نستخدم أفضل أنواع الأسمنت والبحص المعتمد من المختبرات لضمان قوة التحمل.</p>
                  </div>
                  <Factory className="h-8 w-8 text-accent shrink-0" />
                </div>
                <div className="flex gap-4 justify-end">
                  <div className="text-right">
                    <h4 className="font-bold text-lg mb-1">الرقابة الهندسية</h4>
                    <p className="text-primary-foreground/70 text-sm">تخضع كافة المنتجات لفحوصات الضغط والجودة قبل اعتمادها للتوريد.</p>
                  </div>
                  <HardHat className="h-8 w-8 text-accent shrink-0" />
                </div>
                <div className="flex gap-4 justify-end">
                  <div className="text-right">
                    <h4 className="font-bold text-lg mb-1">خدمات النقل والرفع</h4>
                    <p className="text-primary-foreground/70 text-sm">أسطولنا مجهز برافعات متخصصة لتوصيل وتنزيل المنتجات في موقعكم بكل أمان.</p>
                  </div>
                  <Truck className="h-8 w-8 text-accent shrink-0" />
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 w-full md:w-auto" asChild>
                <Link href="/catalog">عرض المنتجات المتوفرة</Link>
              </Button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border-8 border-white/10 shadow-2xl">
              <Image src={factoryImg} alt="مصنع دالية الفرات" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
