
'use client';

import { useParams, useRouter } from 'next/navigation';
import { PRODUCTS } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Truck, ShieldCheck, Construction, FileText, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const product = PRODUCTS.find(p => p.id === params.id);

  if (!product) {
    return <div className="container mx-auto px-4 py-20 text-center">المنتج غير موجود</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 text-right">
      <Button variant="ghost" onClick={() => router.back()} className="mb-8 gap-2">
        <ArrowRight className="h-4 w-4" /> عودة للكتالوج
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
          <Image 
            src={product.imageUrl} 
            alt={product.name} 
            fill 
            className="object-cover" 
          />
        </div>

        <div className="flex flex-col gap-6 order-1 lg:order-2">
          <div className="space-y-2">
            <div className="flex justify-end">
              <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 border-none px-4 py-1">
                 حل خرساني متميز
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{product.name}</h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-muted rounded-xl flex items-center justify-end gap-3">
                <div className="text-right">
                   <p className="text-xs text-muted-foreground">المادة</p>
                   <p className="font-bold">{product.material}</p>
                </div>
                <ShieldCheck className="h-6 w-6 text-primary" />
             </div>
             <div className="p-4 bg-muted rounded-xl flex items-center justify-end gap-3">
                <div className="text-right">
                   <p className="text-xs text-muted-foreground">الأبعاد</p>
                   <p className="font-bold">{product.dimensions}</p>
                </div>
                <Construction className="h-6 w-6 text-primary" />
             </div>
          </div>

          <div className="flex gap-4 mt-4">
            <Button size="lg" className="flex-1 h-14 text-lg bg-primary gap-2" asChild>
              <Link href="/contact">
                <MessageCircle className="h-5 w-5" /> تواصل لطلب عرض سعر
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mt-4">
            <span>توصيل آمن للموقع متاح لجميع المشاريع.</span>
            <Truck className="h-4 w-4" /> 
          </div>
        </div>
      </div>

      <Tabs defaultValue="specs" className="w-full">
        <TabsList className="bg-transparent border-b rounded-none w-full justify-end gap-8 h-12">
          <TabsTrigger value="downloads" className="data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none bg-transparent">ملفات البيانات</TabsTrigger>
          <TabsTrigger value="shipping" className="data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none bg-transparent">الشحن والخدمات اللوجستية</TabsTrigger>
          <TabsTrigger value="specs" className="data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none bg-transparent">المواصفات الفنية</TabsTrigger>
        </TabsList>
        <TabsContent value="specs" className="py-8">
           <div className="max-w-3xl space-y-6 mr-auto">
              <h3 className="text-2xl font-headline font-bold">المواصفات الهندسية</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications.map((spec, i) => (
                  <li key={i} className="flex items-center justify-end gap-2 p-3 bg-card border rounded-lg">
                    <span className="text-sm font-medium">{spec}</span>
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </li>
                ))}
              </ul>
           </div>
        </TabsContent>
        <TabsContent value="shipping" className="py-8">
           <div className="max-w-2xl space-y-4 text-muted-foreground mr-auto">
              <p>نحن نوفر خدمة التوصيل لجميع أنحاء المملكة باستخدام مركبات ثقيلة متخصصة مجهزة برافعات للتفريغ الآمن. يتولى فريقنا اللوجستي جميع التصاريح اللازمة للوصول إلى الموقع.</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-right">
                <li>خصومات متاحة للطلبات الكبيرة</li>
                <li>فحص وصول الموقع متضمن للمشاريع الضخمة</li>
                <li>إخطار جدولة قياسي قبل 48 ساعة</li>
              </ul>
           </div>
        </TabsContent>
        <TabsContent value="downloads" className="py-8">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mr-auto">
              <Button variant="outline" className="justify-end gap-3 h-16">
                 <div className="text-right">
                    <p className="font-bold">دليل التركيب</p>
                    <p className="text-[10px] text-muted-foreground">PDF (2.5MB)</p>
                 </div>
                 <FileText className="h-5 w-5 text-accent" />
              </Button>
              <Button variant="outline" className="justify-end gap-3 h-16">
                 <div className="text-right">
                    <p className="font-bold">ورقة البيانات الإنشائية</p>
                    <p className="text-[10px] text-muted-foreground">PDF (1.2MB)</p>
                 </div>
                 <FileText className="h-5 w-5 text-accent" />
              </Button>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
