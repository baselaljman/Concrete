'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export default function ContactPage() {
  const { t, language, dir } = useLanguage();
  const phoneNumber = '0552076668';
  const whatsappNumber = '966552076668';
  const email = 'he1991mo@gmail.com';

  return (
    <div className="flex flex-col gap-12 pb-20 text-right">
      {/* Hero Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">{t('contact_title')}</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'نحن هنا للإجابة على استفساراتكم وتلبية احتياجات مشاريعكم من الحلول الخرسانية المتميزة عبر قنوات التواصل المباشرة.'
              : 'We are here to answer your inquiries and meet your project needs with premium concrete solutions through direct communication channels.'}
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
                  <h3 className="text-2xl font-headline font-bold mb-6">
                    {language === 'ar' ? 'قنوات التواصل المباشر' : 'Direct Contact Channels'}
                  </h3>
                  
                  <div className={`flex gap-4 items-start ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                    <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                      <h4 className="font-bold">{language === 'ar' ? 'الموقع' : 'Location'}</h4>
                      <p className="text-sm opacity-90">{t('footer_location')}</p>
                    </div>
                    <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>

                  <div className={`flex gap-4 items-start ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                    <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                      <h4 className="font-bold">{language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</h4>
                      <p className="text-sm opacity-90" dir="ltr">{phoneNumber}</p>
                    </div>
                    <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>

                  <div className={`flex gap-4 items-start ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                    <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                      <h4 className="font-bold">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h4>
                      <p className="text-sm opacity-90">{email}</p>
                    </div>
                    <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center gap-6 bg-white text-primary">
                  <h3 className={`text-2xl font-headline font-bold text-center ${dir === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>
                    {language === 'ar' ? 'ابدأ محادثة الآن' : 'Start a Conversation'}
                  </h3>
                  <p className={`text-muted-foreground text-sm text-center leading-relaxed ${dir === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>
                    {language === 'ar' 
                      ? 'فريق المبيعات والدعم الفني لدينا متاح للرد على كافة استفساراتكم وتزويدكم بعروض الأسعار المطلوبة لمشاريعكم.'
                      : 'Our sales and technical support team is available to respond to all your inquiries and provide you with the required quotes for your projects.'}
                  </p>
                  <div className="flex flex-col gap-4">
                    <Button className="w-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-bold h-14 text-lg" asChild>
                      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        {language === 'ar' ? 'تواصل عبر واتساب' : 'Chat via WhatsApp'} <MessageCircle className="mr-2 h-6 w-6" />
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 font-bold h-14 text-lg" asChild>
                      <a href={`tel:${phoneNumber}`}>
                        {language === 'ar' ? 'اتصل بنا مباشرة' : 'Call us Direct'} <Phone className="mr-2 h-6 w-6" />
                      </a>
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
            <h4 className="font-bold text-lg">{language === 'ar' ? 'ساعات العمل' : 'Working Hours'}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === 'ar' ? 'نحن في خدمتكم على مدار 24 ساعة' : 'We are at your service 24 hours a day'}
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-card border rounded-2xl text-center space-y-4 shadow-sm">
            <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <Globe className="h-7 w-7" />
            </div>
            <h4 className="font-bold text-lg">{language === 'ar' ? 'خدمة التوريد' : 'Supply Service'}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === 'ar' ? 'نغطي كافة مناطق المملكة بأسطول نقل متخصص' : 'We cover all regions of the Kingdom with a specialized transport fleet'}
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-card border rounded-2xl text-center space-y-4 shadow-sm">
            <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h4 className="font-bold text-lg">{language === 'ar' ? 'الدعم الفني' : 'Technical Support'}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === 'ar' ? 'استشارات هندسية مجانية لمواصفات مشروعك' : 'Free engineering consultations for your project specifications'}
            </p>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-4 mb-20">
        <div className="w-full h-[400px] bg-muted rounded-[2rem] overflow-hidden relative flex items-center justify-center border border-muted-foreground/10 shadow-inner">
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1F447A_1px,transparent_1px)] [background-size:20px_20px]" />
           <div className="text-center space-y-4 relative z-10 px-4">
              <MapPin className="h-12 w-12 text-primary mx-auto opacity-50" />
              <h3 className="text-xl font-bold text-primary">
                {language === 'ar' ? 'موقعنا في الرياض' : 'Our Location in Riyadh'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ar' ? 'تفضل بزيارة مصنعنا للاطلاع على جودة المنتجات عن قرب' : 'Visit our factory to see the product quality up close'}
              </p>
              <Button variant="outline" className="border-primary text-primary">
                {language === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps'}
              </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
