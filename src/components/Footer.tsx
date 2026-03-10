
import Link from 'next/link';
import { Construction, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Construction className="h-6 w-6 text-accent" />
              <span className="font-headline font-bold text-xl">Concreate Solutions</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              We provide integrated concrete solutions for your projects with high efficiency and quality. We don't just sell, we guarantee a unique experience from product choice to delivery.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/catalog" className="hover:text-accent transition-colors">Product Catalog</Link></li>
              <li><Link href="/custom-request" className="hover:text-accent transition-colors">Custom Specifications</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">Company Profile</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/catalog?cat=lighting" className="hover:text-accent transition-colors">Lighting Bases</Link></li>
              <li><Link href="/catalog?cat=manholes" className="hover:text-accent transition-colors">Manholes & Rings</Link></li>
              <li><Link href="/catalog?cat=barriers" className="hover:text-accent transition-colors">Road Barriers</Link></li>
              <li><Link href="/catalog?cat=benches" className="hover:text-accent transition-colors">Urban Benches</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-headline font-bold text-lg mb-4">Contact Us</h3>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
              <MapPin className="h-5 w-5 text-accent shrink-0" />
              <span>Industrial Area, Riyadh, Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
              <Phone className="h-5 w-5 text-accent shrink-0" />
              <span>+966 50 000 0000</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
              <Mail className="h-5 w-5 text-accent shrink-0" />
              <span>info@concreatesolutions.com</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Concreate Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
