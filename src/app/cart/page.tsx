
'use client';

import { useCart } from '@/components/CartProvider';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ArrowRight, Truck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-6">
        <ShoppingBag className="h-20 w-20 mx-auto text-muted-foreground opacity-20" />
        <h1 className="text-3xl font-headline font-bold">سلة التسوق فارغة</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          يبدو أنك لم تضف أي منتجات خرسانية إلى طلبك بعد. استكشف الكتالوج الخاص بنا للعثور على ما تحتاجه.
        </p>
        <Button size="lg" className="bg-accent" asChild>
          <Link href="/catalog">انتقل إلى الكتالوج</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 text-right">
      <h1 className="text-3xl font-headline font-bold mb-8">سلة التسوق</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-card rounded-2xl border shadow-sm">
              <div className="relative h-24 w-40 rounded-lg overflow-hidden shrink-0">
                <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 space-y-1 text-center sm:text-right">
                <h3 className="font-headline font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.category} • {item.dimensions}</p>
                <p className="text-lg font-bold text-primary">{item.price} ريال</p>
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
            <Link href="/catalog"><ArrowRight className="h-4 w-4" /> متابعة التسوق</Link>
          </Button>
        </div>

        <div className="space-y-6">
          <div className="bg-primary text-white p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-headline font-bold text-right">ملخص الطلب</h3>
            <div className="space-y-4 text-sm opacity-90 text-right">
              <div className="flex justify-between flex-row-reverse">
                <span>المجموع الفرعي ({totalItems} قطع)</span>
                <span>{totalPrice.toFixed(2)} ريال</span>
              </div>
              <div className="flex justify-between flex-row-reverse">
                <span>تقدير التوصيل</span>
                <span>يُحسب في الخطوة التالية</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between flex-row-reverse text-lg font-bold">
                <span>الإجمالي</span>
                <span className="text-accent">{totalPrice.toFixed(2)} ريال</span>
              </div>
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg font-bold" asChild>
              <Link href="/checkout">المتابعة للدفع <ArrowLeft className="mr-2 h-5 w-5" /></Link>
            </Button>
          </div>
          <div className="bg-muted p-6 rounded-2xl border flex items-center gap-4 justify-end">
            <div className="text-right">
              <h4 className="font-bold text-sm">التوصيل للموقع متاح</h4>
              <p className="text-xs text-muted-foreground">نقوم بالتوصيل مباشرة إلى موقع مشروعك.</p>
            </div>
            <Truck className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
