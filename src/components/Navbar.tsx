
'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';
import { ShoppingCart, User, Search, Construction, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

export function Navbar() {
  const { totalItems } = useCart();
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
              Concreate Solutions
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/catalog" className="text-sm font-medium hover:text-accent transition-colors">
              Products
            </Link>
            <Link href="/custom-request" className="text-sm font-medium hover:text-accent transition-colors">
              Custom Request
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              Why Us?
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/catalog?search=true">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-accent">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/orders">My Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
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
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4">
          <Link href="/catalog" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
          <Link href="/custom-request" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Custom Request</Link>
          <Link href="/about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
}
