
'use client';

import { useLanguage } from '@/components/LanguageProvider';

export default function PrivacyPage() {
  const { language, t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-headline font-bold mb-8 text-primary">
        {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
      </h1>
      <div className="prose prose-blue max-w-none space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '1. جمع المعلومات' : '1. Information Collection'}
          </h2>
          <p>
            {language === 'ar' 
              ? 'نحن نجمع المعلومات التي تقدمها لنا مباشرة عند طلب عرض سعر أو التواصل معنا، مثل الاسم، رقم الهاتف، والبريد الإلكتروني.'
              : 'We collect information you provide directly to us when requesting a quote or contacting us, such as name, phone number, and email.'}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '2. استخدام المعلومات' : '2. Use of Information'}
          </h2>
          <p>
            {language === 'ar'
              ? 'نستخدم المعلومات لتقديم خدماتنا، وتحسين تجربة المستخدم، والتواصل معك بخصوص طلباتك.'
              : 'We use the information to provide our services, improve user experience, and communicate with you regarding your requests.'}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '3. حماية البيانات' : '3. Data Protection'}
          </h2>
          <p>
            {language === 'ar'
              ? 'نحن نطبق إجراءات أمنية صارمة لحماية بياناتك من الوصول غير المصرح به.'
              : 'We implement strict security measures to protect your data from unauthorized access.'}
          </p>
        </section>
      </div>
    </div>
  );
}
