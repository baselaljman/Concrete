'use client';

import Link from 'next/link';
import { User, Search, Construction, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/catalog', label: 'المنتجات' },
    { href: '/about', label: 'لماذا نحن؟' },
    { href: '/contact', label: 'اتصل بنا' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Construction className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-headline font-bold text-xl tracking-tight text-primary">
              كونكريت
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/catalog">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/contact" className="text-right w-full">تواصل مع الدعم</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] text-right">
              <SheetHeader>
                <SheetTitle className="text-right font-headline text-primary border-b pb-4">القائمة</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium py-2 border-b border-transparent hover:border-accent hover:text-accent transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link 
                  href="/catalog" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium py-2 flex items-center justify-end gap-2"
                >
                  البحث عن منتج <Search className="h-5 w-5" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
