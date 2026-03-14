
'use client';

import { useLanguage } from '@/components/LanguageProvider';

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-headline font-bold mb-8 text-primary">
        {language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
      </h1>
      <div className="prose prose-blue max-w-none space-y-6 text-muted-foreground leading-relaxed">
        <section className={language === 'ar' ? 'text-right' : 'text-left'}>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '1. الاتفاقية القانونية' : '1. Legal Agreement'}
          </h2>
          <p>
            {language === 'ar'
              ? 'باستخدامك لموقع شركة للأعمال والحلول الخرسانية، فإنك توافق على الالتزام بهذه الشروط والأحكام وجميع القوانين واللوائح المعمول بها في المملكة العربية السعودية.'
              : 'By using the Concrete Works & Solutions Co. website, you agree to be bound by these terms and conditions and all applicable laws and regulations in the Kingdom of Saudi Arabia.'}
          </p>
        </section>
        <section className={language === 'ar' ? 'text-right' : 'text-left'}>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '2. عروض الأسعار والتوريد' : '2. Quotes & Supply'}
          </h2>
          <p>
            {language === 'ar'
              ? 'جميع عروض الأسعار الصادرة عبر الموقع هي تقديرية أولية، وتخضع للمراجعة النهائية بناءً على الفحص الهندسي للموقع ومواصفات المشروع النهائية. التوريد يتم بناءً على جداول زمنية متفق عليها مسبقاً.'
              : 'All quotes issued through the website are preliminary estimates and are subject to final review based on site engineering inspection and final project specifications. Supply is based on pre-agreed timelines.'}
          </p>
        </section>
        <section className={language === 'ar' ? 'text-right' : 'text-left'}>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '3. المسؤولية والقوة القاهرة' : '3. Liability & Force Majeure'}
          </h2>
          <p>
            {language === 'ar'
              ? 'تلتزم الشركة بتوريد منتجات خرسانية مطابقة للمواصفات السعودية، ولا تتحمل الشركة مسؤولية التأخير الناتج عن ظروف خارجة عن إرادتها (مثل سوء الأحوال الجوية أو القوة القاهرة).'
              : 'The company is committed to supplying concrete products that comply with Saudi specifications, and the company is not responsible for delays resulting from circumstances beyond its control (such as bad weather or force majeure).'}
          </p>
        </section>
        <section className={language === 'ar' ? 'text-right' : 'text-left'}>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '4. حقوق الملكية' : '4. Intellectual Property'}
          </h2>
          <p>
            {language === 'ar'
              ? 'جميع المحتويات الموجودة على هذا الموقع، بما في ذلك الصور والوصف الفني والشعارات، هي ملك حصري لشركة للأعمال والحلول الخرسانية.'
              : 'All content on this website, including images, technical descriptions, and logos, is the exclusive property of Concrete Works & Solutions Co.'}
          </p>
        </section>
      </div>
    </div>
  );
}
