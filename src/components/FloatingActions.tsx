'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingActions() {
  const phoneNumber = '0552076668';
  const whatsappNumber = '966552076668';

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 pointer-events-none">
      <Button
        asChild
        size="lg"
        className="pointer-events-auto h-14 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center gap-3 transition-transform hover:scale-105"
      >
        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <span className="font-bold text-lg">واتساب</span>
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>

      <Button
        asChild
        size="lg"
        className="pointer-events-auto h-14 px-6 rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl flex items-center gap-3 transition-transform hover:scale-105"
      >
        <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
          <span className="font-bold text-lg">اتصال</span>
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
}
