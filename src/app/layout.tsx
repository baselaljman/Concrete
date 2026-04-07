
import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingActions } from '@/components/FloatingActions';
import { LanguageProvider } from '@/components/LanguageProvider';
import { CartProvider } from '@/components/CartProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=AW-18065033910" 
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18065033910');
          `}
        </Script>
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

export const metadata: Metadata = {
  title: {
    default: 'الفرات للأعمال الخرسانية | توريد خرسانة مسبقة الصب',
    template: '%s | الفرات للأعمال الخرسانية'
  },
  description: 'الفرات للأعمال الخرسانية توفر حلول احترافية للأعمال والمنتجات الخرسانية مسبقة الصب في الرياض. نوفر قواعد إنارة، حواجز نيوجيرسي، ومناهل بجودة هندسية عالية وتوصيل لكافة أنحاء المملكة.',
  keywords: ['الفرات', 'الفرات للأعمال الخرسانية', 'اعمال خرسانية', 'حلول خرسانية', 'خرسانة مسبقة الصب', 'قواعد انارة خرسانية', 'حواجز نيوجيرسي', 'مناهل خرسانية', 'Al Furat', 'Concrete Works Saudi Arabia'],
  authors: [{ name: 'الفرات للأعمال الخرسانية' }],
  creator: 'الفرات',
  publisher: 'الفرات',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'الفرات للأعمال الخرسانية | مسبق الصب',
    description: 'حلول خرسانية متكاملة لمشاريعكم بكفاءة وجودة عالية في المملكة العربية السعودية.',
    url: 'https://al-furat-concrete.com',
    siteName: 'الفرات',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الفرات للأعمال الخرسانية | توريد مباشر',
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
