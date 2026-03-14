
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
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '1. قبول الشروط' : '1. Acceptance of Terms'}
          </h2>
          <p>
            {language === 'ar'
              ? 'باستخدامك لموقعنا، فإنك توافق على الالتزام بهذه الشروط والأحكام وجميع القوانين واللوائح المعمول بها في المملكة العربية السعودية.'
              : 'By using our website, you agree to be bound by these terms and conditions and all applicable laws and regulations in the Kingdom of Saudi Arabia.'}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '2. خدمات التوريد' : '2. Supply Services'}
          </h2>
          <p>
            {language === 'ar'
              ? 'جميع عروض الأسعار المقدمة عبر الموقع هي تقديرية وتخضع للمراجعة النهائية من قبل فريقنا الهندسي بناءً على مواصفات الموقع.'
              : 'All quotes provided through the website are estimates and are subject to final review by our engineering team based on site specifications.'}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {language === 'ar' ? '3. حقوق الملكية الفكرية' : '3. Intellectual Property Rights'}
          </h2>
          <p>
            {language === 'ar'
              ? 'جميع المحتويات الموجودة على هذا الموقع، بما في ذلك الصور والوصف الفني، هي ملك لشركة كونكريت سولوشنز.'
              : 'All content on this website, including images and technical descriptions, is the property of Concreate Solutions.'}
          </p>
        </section>
      </div>
    </div>
  );
}
