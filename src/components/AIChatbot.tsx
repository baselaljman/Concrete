'use client';

import React, { useState, useRef, useEffect } from 'react';
import { aiChatbotSupport } from '@/ai/flows/ai-chatbot-support';
import { Button } from '@/components/ui/button';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: 'مرحباً بكم في كونكريت! كيف يمكنني مساعدتكم اليوم فيما يخص منتجاتنا وخدماتنا الخرسانية؟' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim() || isLoading) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const { response } = await aiChatbotSupport({ query: userMsg });
      setMessages(prev => [...prev, { role: 'ai', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: 'عذراً، حدث خطأ ما. يرجى المحاولة لاحقاً.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!isOpen ? (
        <Button 
          onClick={() => setIsOpen(true)}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-2xl bg-accent hover:bg-accent/90 animate-bounce"
        >
          <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      ) : (
        <div className="bg-card border rounded-xl shadow-2xl w-[85vw] sm:w-[350px] md:w-[400px] flex flex-col h-[70vh] md:h-[500px] overflow-hidden animate-in slide-in-from-bottom-5 text-right">
          <div className="bg-primary p-3 md:p-4 flex items-center justify-between text-primary-foreground">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="font-headline font-bold text-sm md:text-base">دعم كونكريت الذكي</span>
              <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-accent" />
            </div>
          </div>

          <ScrollArea className="flex-1 p-3 md:p-4" ref={scrollRef}>
            <div className="flex flex-col gap-3 md:gap-4">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "max-w-[85%] rounded-lg p-2.5 md:p-3 text-xs md:text-sm",
                    msg.role === 'user' 
                      ? "mr-auto bg-accent text-accent-foreground ml-0" 
                      : "ml-auto bg-muted text-muted-foreground mr-0"
                  )}
                >
                  {msg.content}
                </div>
              ))}
              {isLoading && (
                <div className="ml-auto bg-muted rounded-lg p-2.5 md:p-3 flex items-center gap-2">
                  <span className="text-[10px] md:text-xs">جاري التفكير...</span>
                  <Loader2 className="h-3 w-3 md:h-4 md:w-4 animate-spin text-accent" />
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-3 md:p-4 border-t flex gap-2">
            <Button size="icon" className="h-9 w-9 md:h-10 md:w-10" onClick={handleSend} disabled={isLoading || !query.trim()}>
              <Send className="h-4 w-4 rotate-180" />
            </Button>
            <Input 
              placeholder="اسأل عن المنتجات..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 text-right h-9 md:h-10 text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}
