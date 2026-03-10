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
import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Link href="/catalog" className="text-sm font-medium hover:text-accent transition-colors">
              المنتجات
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              لماذا نحن؟
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">
              اتصل بنا
            </Link>
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

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 text-right">
          <Link href="/catalog" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>المنتجات</Link>
          <Link href="/about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>لماذا نحن؟</Link>
          <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>اتصل بنا</Link>
        </div>
      )}
    </nav>
  );
}
