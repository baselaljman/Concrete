import Link from 'next/link';
import { Construction, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container mx-auto px-4 py-12 text-right">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 justify-end">
              <span className="font-headline font-bold text-xl">كونكريت</span>
              <Construction className="h-6 w-6 text-accent" />
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              نقدم حلولاً خرسانية متكاملة لمشاريعكم بكفاءة وجودة عالية. نحن نضمن تجربة فريدة من اختيار المنتج إلى التسليم.
            </p>
            <div className="flex items-center gap-4 justify-end">
              <Link href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/catalog" className="hover:text-accent transition-colors">كتالوج المنتجات</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">ملف الشركة</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">دعم العملاء</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-lg mb-4">الفئات</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/catalog?category=lighting" className="hover:text-accent transition-colors">قواعد الإنارة</Link></li>
              <li><Link href="/catalog?category=manholes" className="hover:text-accent transition-colors">المناهل والحلقات</Link></li>
              <li><Link href="/catalog?category=barriers" className="hover:text-accent transition-colors">حواجز الطرق</Link></li>
              <li><Link href="/catalog?category=benches" className="hover:text-accent transition-colors">المقاعد الحضرية</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-headline font-bold text-lg mb-4">اتصل بنا</h3>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/70 justify-end">
              <span>المنطقة الصناعية، الرياض، المملكة العربية السعودية</span>
              <MapPin className="h-5 w-5 text-accent shrink-0" />
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/70 justify-end">
              <span>0552076668</span>
              <Phone className="h-5 w-5 text-accent shrink-0" />
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/70 justify-end">
              <span>info@concreate.com</span>
              <Mail className="h-5 w-5 text-accent shrink-0" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} كونكريت. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
