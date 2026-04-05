
'use client';

import { useLanguage } from '@/components/LanguageProvider';

export default function PrivacyPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-headline font-bold mb-8 text-primary">
        {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
      </h1>
      <div className="prose prose-blue max-w-none space-y-6 text-muted-foreground leading-relaxed text-right">
        <section className={language === 'ar' ? 'text-right' : 'text-left'}>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '1. جمع المعلومات' : '1. Information Collection'}
          </h2>
          <p>
            {language === 'ar' 
              ? 'نلتزم في دالية الفرات للأعمال والحلول الخرسانية بحماية خصوصيتك. نحن نجمع المعلومات التي تقدمها لنا مباشرة عند طلب عرض سعر أو التواصل معنا، مثل الاسم، رقم الهاتف، والبريد الإلكتروني، وذلك لغرض تقديم الخدمة الفنية والتجارية فقط.'
              : 'We are committed to protecting your privacy at Daliat Al Furat for Concrete Works & Solutions. We collect information you provide directly to us when requesting a quote or contacting us, such as name, phone number, and email, solely for providing technical and commercial services.'}
          </p>
        </section>
        <section className={language === 'ar' ? 'text-right' : 'text-left'}>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '2. استخدام المعلومات' : '2. Use of Information'}
          </h2>
          <p>
            {language === 'ar'
              ? 'نستخدم المعلومات لتقديم عروض الأسعار، وتحسين جودة المنتجات الخرسانية، والتواصل معك بخصوص جدول التوريد والمواصفات الهندسية المطلوبة.'
              : 'We use information to provide quotes, improve the quality of concrete products, and communicate with you regarding supply schedules and required engineering specifications.'}
          </p>
        </section>
        <section className={language === 'ar' ? 'text-right' : 'text-left'}>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '3. حماية البيانات' : '3. Data Protection'}
          </h2>
          <p>
            {language === 'ar'
              ? 'نحن نطبق إجراءات أمنية وإدارية صارمة لضمان حماية بياناتك الشخصية من الوصول غير المصرح به، ولا نقوم بمشاركة أي معلومات مع أطراف ثالثة دون موافقتك الصريحة.'
              : 'We implement strict security and administrative measures to ensure your personal data is protected from unauthorized access, and we do not share any information with third parties without your explicit consent.'}
          </p>
        </section>
        <section className={language === 'ar' ? 'text-right' : 'text-left'}>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '4. ملفات تعريف الارتباط (Cookies)' : '4. Cookies'}
          </h2>
          <p>
            {language === 'ar'
              ? 'يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة التصفح وجمع إحصاءات عامة حول استخدام الموقع لتحسين خدماتنا.'
              : 'The website uses cookies to enhance the browsing experience and gather general statistics about website usage to improve our services.'}
          </p>
        </section>
      </div>
    </div>
  );
}
