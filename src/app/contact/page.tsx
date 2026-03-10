'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const phoneNumber = '0552076668';
  const whatsappNumber = '966552076668';
  const email = 'he1991mo@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال الطلب
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سيتواصل معك فريق المبيعات لدينا في أقرب وقت ممكن.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-12 pb-20 text-right">
      {/* Hero Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">تواصل معنا</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتكم وتلبية احتياجات مشاريعكم من الحلول الخرسانية المتميزة.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <Card className="border-none shadow-xl bg-accent text-white">
            <CardContent className="p-8 space-y-8">
              <h3 className="text-2xl font-headline font-bold mb-6">معلومات التواصل</h3>
              
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

              <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                <Button className="w-full bg-white text-accent hover:bg-white/90 font-bold h-12" asChild>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    تواصل عبر واتساب <MessageCircle className="mr-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 font-bold h-12" asChild>
                  <a href={`tel:${phoneNumber}`}>اتصل بنا الآن <Phone className="mr-2 h-5 w-5" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-headline font-bold text-primary mb-8">أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input id="name" placeholder="أدخل اسمك هنا" required className="text-right h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="email@example.com" required className="text-right h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">الموضوع</Label>
                  <Input id="subject" placeholder="عن ماذا تود الاستفسار؟" required className="text-right h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea id="message" placeholder="اكتب تفاصيل استفسارك هنا..." required className="text-right min-h-[150px]" />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto px-12 h-12 bg-primary font-bold" disabled={isSubmitting}>
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'} <Send className="mr-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-muted/30 rounded-2xl text-center space-y-3">
            <Clock className="h-8 w-8 text-accent" />
            <h4 className="font-bold text-lg">ساعات العمل</h4>
            <p className="text-sm text-muted-foreground">السبت - الخميس<br />8:00 صباحاً - 5:00 مساءً</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-muted/30 rounded-2xl text-center space-y-3">
            <Globe className="h-8 w-8 text-accent" />
            <h4 className="font-bold text-lg">خدمة التوريد</h4>
            <p className="text-sm text-muted-foreground">نغطي كافة مناطق المملكة<br />بأسطول نقل متخصص</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-muted/30 rounded-2xl text-center space-y-3">
            <MessageCircle className="h-8 w-8 text-accent" />
            <h4 className="font-bold text-lg">الدعم الفني</h4>
            <p className="text-sm text-muted-foreground">استشارات هندسية مجانية<br />لمواصفات مشروعك</p>
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