
'use client';

import { useState } from 'react';
import { useCart } from '@/components/CartProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Truck, MapPin, CreditCard, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function CheckoutPage() {
  const { totalPrice, clearCart } = useCart();
  const [date, setDate] = useState<Date>();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-6 max-w-lg">
        <div className="h-24 w-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="h-12 w-12" />
        </div>
        <h1 className="text-4xl font-headline font-bold text-primary">تم الطلب بنجاح!</h1>
        <p className="text-lg text-muted-foreground">
          لقد استلمنا طلبك. سيتصل بك فريق الخدمات اللوجستية لدينا قريباً لتأكيد جدول التوصيل إلى موقعك.
        </p>
        <div className="bg-muted p-6 rounded-2xl text-right">
          <p className="text-sm font-bold mb-2">رقم الطلب: CS-92834</p>
          <p className="text-sm text-muted-foreground">سيتم إرسال تحديثات التتبع إلى بريدك الإلكتروني.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="flex-1" asChild>
            <Link href="/profile/orders">عرض الطلب</Link>
          </Button>
          <Button className="flex-1 bg-primary" asChild>
            <Link href="/">العودة للرئيسية</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl text-right">
      <h1 className="text-3xl font-headline font-bold mb-8">الدفع وإتمام الطلب</h1>
      
      <form onSubmit={handleOrder} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8 order-2 lg:order-1">
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-end gap-2">تفاصيل الدفع <CreditCard className="h-5 w-5 text-accent"/></CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 mb-4">
                  <p className="text-sm font-bold text-primary text-right">فوترة المشروع: حساب الشركة</p>
                  <p className="text-xs text-muted-foreground text-right">سيتم إضافة هذا الطلب إلى كشف حسابك الشهري.</p>
               </div>
               <div className="space-y-2">
                  <Label htmlFor="cardName">اسم صاحب البطاقة</Label>
                  <Input id="cardName" placeholder="الاسم كما يظهر على البطاقة" className="text-right" />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="cardNumber">رقم البطاقة</Label>
                  <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="text-right" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cvv">رمز التحقق (CVV)</Label>
                    <Input id="cvv" placeholder="123" className="text-right" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiry">تاريخ الانتهاء</Label>
                    <Input id="expiry" placeholder="MM/YY" className="text-right" />
                  </div>
               </div>
            </CardContent>
          </Card>

          <div className="bg-muted p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-headline font-bold">مراجعة الطلب</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between flex-row-reverse">
                <span>المجموع الفرعي للمنتجات</span>
                <span>{totalPrice.toFixed(2)} ريال</span>
              </div>
              <div className="flex justify-between flex-row-reverse">
                <span>التوصيل والمناولة للموقع</span>
                <span className="text-green-600 font-bold">مجاني (عرض الكميات)</span>
              </div>
              <div className="pt-4 border-t flex justify-between flex-row-reverse text-2xl font-bold text-primary">
                <span>الإجمالي المستحق</span>
                <span>{totalPrice.toFixed(2)} ريال</span>
              </div>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-16 text-lg font-bold">
              إرسال طلب الموقع
            </Button>
            <p className="text-[10px] text-center text-muted-foreground">
              بوضع الطلب، فإنك توافق على شروط خدمة كونكريت سولوشنز وظروف التوصيل.
            </p>
          </div>
        </div>

        <div className="space-y-8 order-1 lg:order-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-end gap-2">معلومات الموقع <MapPin className="h-5 w-5 text-accent"/></CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الجوال</Label>
                  <Input id="phone" placeholder="+966 5..." required className="text-right" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName">شخص التواصل في المشروع</Label>
                  <Input id="firstName" placeholder="الاسم الكامل" required className="text-right" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">عنوان التوصيل للموقع</Label>
                <Input id="address" placeholder="الشارع الرئيسي، رقم المبنى، الحي" required className="text-right" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">تعليمات تفريغ خاصة</Label>
                <Input id="notes" placeholder="مثال: يحتاج وصول رافعة، ارتفاع بوابة محدود" className="text-right" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-end gap-2">جدولة التوصيل <Truck className="h-5 w-5 text-accent"/></CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-2">
                <Label>تاريخ التوصيل المفضل</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-end text-right font-normal h-12",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {date ? format(date, "PPP", { locale: ar }) : <span>اختر تاريخاً</span>}
                      <CalendarIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <Button type="button" variant="outline" className="h-16 text-xs flex flex-col items-center justify-center">
                    <span className="font-bold">فترة بعد الظهر</span>
                    <span className="opacity-70">1:00 م - 5:00 م</span>
                 </Button>
                 <Button type="button" variant="outline" className="h-16 text-xs flex flex-col items-center justify-center border-accent bg-accent/5">
                    <span className="font-bold">فترة صباحية</span>
                    <span className="opacity-70">8:00 ص - 12:00 م</span>
                 </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
}
