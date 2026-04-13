'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';

export function FloatingActions() {
  const { t } = useLanguage();
  const phoneNumber = '0537034897';
  const whatsappNumber = '966537034897';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
      <Button
        asChild
        size="lg"
        className="pointer-events-auto h-12 md:h-14 px-4 md:px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center gap-3 transition-transform hover:scale-105"
      >
        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <span className="font-bold text-sm md:text-lg">{t('float_whatsapp')}</span>
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        </a>
      </Button>

      <Button
        asChild
        size="lg"
        className="pointer-events-auto h-12 md:h-14 px-4 md:px-6 rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl flex items-center gap-3 transition-transform hover:scale-105"
      >
        <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
          <span className="font-bold text-sm md:text-lg">{t('float_call')}</span>
          <Phone className="h-5 w-5 md:h-6 md:w-6" />
        </a>
      </Button>
    </div>
  );
}
