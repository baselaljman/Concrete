
import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingActions } from '@/components/FloatingActions';
import { LanguageProvider } from '@/components/LanguageProvider';
import { CartProvider } from '@/components/CartProvider';

export const metadata: Metadata = {
  title: {
    default: 'شركة للأعمال والحلول الخرسانية | توريد خرسانة مسبقة الصب',
    template: '%s | شركة للأعمال الخرسانية'
  },
  description: 'المصنع الرائد للأعمال والمنتجات الخرسانية مسبقة الصب في الرياض. نوفر قواعد إنارة، حواجز نيوجيرسي، مناهل، وكراسي تجميلية بجودة هندسية عالية وتوصيل لكافة أنحاء المملكة.',
  keywords: ['شركة اعمال خرسانية', 'خرسانة مسبقة الصب', 'قواعد انارة خرسانية', 'حواجز نيوجيرسي', 'مناهل خرسانية', 'كراسي حدائق خرسانية', 'مصدات سيارات', 'Precast Concrete Saudi Arabia', 'Concrete Solutions Riyadh'],
  authors: [{ name: 'Concrete Works' }],
  creator: 'Concrete Works',
  publisher: 'Concrete Works',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'شركة للأعمال والحلول الخرسانية | مسبق الصب',
    description: 'حلول خرسانية متكاملة لمشاريعكم بكفاءة وجودة عالية في المملكة العربية السعودية.',
    url: 'https://concreate-solutions.com',
    siteName: 'شركة الأعمال الخرسانية',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة للأعمال والحلول الخرسانية | توريد مباشر',
    description: 'نوفر أجود المنتجات الخرسانية للمشاريع الإنشائية والبنية التحتية في السعودية.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <FloatingActions />
            <Toaster />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
