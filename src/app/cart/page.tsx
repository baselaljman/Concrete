
'use client';

import { useCart } from '@/components/CartProvider';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-6">
        <ShoppingBag className="h-20 w-20 mx-auto text-muted-foreground opacity-20" />
        <h1 className="text-3xl font-headline font-bold">Your cart is empty</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Looks like you haven't added any concrete products to your order yet. Explore our catalog to find what you need.
        </p>
        <Button size="lg" className="bg-accent" asChild>
          <Link href="/catalog">Go to Catalog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-headline font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-card rounded-2xl border shadow-sm">
              <div className="relative h-24 w-40 rounded-lg overflow-hidden shrink-0">
                <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <h3 className="font-headline font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.category} • {item.dimensions}</p>
                <p className="text-lg font-bold text-primary">${item.price}</p>
              </div>
              <div className="flex items-center gap-4 bg-muted p-1 rounded-lg">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-bold w-8 text-center">{item.quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-destructive hover:bg-destructive/10"
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          ))}

          <Button variant="ghost" asChild className="gap-2">
            <Link href="/catalog"><ArrowLeft className="h-4 w-4" /> Continue Shopping</Link>
          </Button>
        </div>

        <div className="space-y-6">
          <div className="bg-primary text-white p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-headline font-bold">Order Summary</h3>
            <div className="space-y-4 text-sm opacity-90">
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Est.</span>
                <span>Calculated at next step</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-accent">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg font-bold" asChild>
              <Link href="/checkout">Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
          <div className="bg-muted p-6 rounded-2xl border flex items-center gap-4">
            <Truck className="h-8 w-8 text-primary" />
            <div>
              <h4 className="font-bold text-sm">Site Delivery Available</h4>
              <p className="text-xs text-muted-foreground">We deliver directly to your project location.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Truck } from 'lucide-react';
