'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
  const phoneNumber = '0552076668';
  const whatsappNumber = '966552076668';
  const email = 'he1991mo@gmail.com';

  return (
    <div className="flex flex-col gap-12 pb-20 text-right">
      {/* Hero Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">تواصل معنا</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتكم وتلبية احتياجات مشاريعكم من الحلول الخرسانية المتميزة عبر قنوات التواصل المباشرة.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <Card className="border-none shadow-xl bg-accent text-white overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 space-y-8 bg-accent/90">
                  <h3 className="text-2xl font-headline font-bold mb-6">قنوات التواصل المباشر</h3>
                  
                  <div className="flex gap-4 justify-end items-start">
                    <div className="text-right">
                      <h4 className="font-bold">الموقع</h4>
                      <p className="text-sm opacity-90">المنطقة الصناعية، الرياض، المملكة العربية السعودية</p>
                    </div>
                    <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end items-start">
                    <div className="text-right">
                      <h4 className="font-bold">رقم الهاتف</h4>
                      <p className="text-sm opacity-90" dir="ltr">{phoneNumber}</p>
                    </div>
                    <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end items-start">
                    <div className="text-right">
                      <h4 className="font-bold">البريد الإلكتروني</h4>
                      <p className="text-sm opacity-90">{email}</p>
                    </div>
                    <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center gap-6 bg-white text-primary">
                  <h3 className="text-2xl font-headline font-bold text-center md:text-right">ابدأ محادثة الآن</h3>
                  <p className="text-muted-foreground text-sm text-center md:text-right leading-relaxed">
                    فريق المبيعات والدعم الفني لدينا متاح للرد على كافة استفساراتكم وتزويدكم بعروض الأسعار المطلوبة لمشاريعكم.
                  </p>
                  <div className="flex flex-col gap-4">
                    <Button className="w-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-bold h-14 text-lg" asChild>
                      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        تواصل عبر واتساب <MessageCircle className="mr-2 h-6 w-6" />
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 font-bold h-14 text-lg" asChild>
                      <a href={`tel:${phoneNumber}`}>اتصل بنا مباشرة <Phone className="mr-2 h-6 w-6" /></a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-8 bg-card border rounded-2xl text-center space-y-4 shadow-sm">
            <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <Clock className="h-7 w-7" />
            </div>
            <h4 className="font-bold text-lg">ساعات العمل</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">السبت - الخميس<br />8:00 صباحاً - 5:00 مساءً</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-card border rounded-2xl text-center space-y-4 shadow-sm">
            <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <Globe className="h-7 w-7" />
            </div>
            <h4 className="font-bold text-lg">خدمة التوريد</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">نغطي كافة مناطق المملكة<br />بأسطول نقل متخصص</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-card border rounded-2xl text-center space-y-4 shadow-sm">
            <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h4 className="font-bold text-lg">الدعم الفني</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">استشارات هندسية مجانية<br />لمواصفات مشروعك</p>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-4 mb-20">
        <div className="w-full h-[400px] bg-muted rounded-[2rem] overflow-hidden relative flex items-center justify-center border border-muted-foreground/10 shadow-inner">
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1F447A_1px,transparent_1px)] [background-size:20px_20px]" />
           <div className="text-center space-y-4 relative z-10 px-4">
              <MapPin className="h-12 w-12 text-primary mx-auto opacity-50" />
              <h3 className="text-xl font-bold text-primary">موقعنا في الرياض</h3>
              <p className="text-muted-foreground">تفضل بزيارة مصنعنا للاطلاع على جودة المنتجات عن قرب</p>
              <Button variant="outline" className="border-primary text-primary">فتح في خرائط جوجل</Button>
           </div>
        </div>
      </section>
    </div>
  );
}
