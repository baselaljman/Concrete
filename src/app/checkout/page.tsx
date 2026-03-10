
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
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function CheckoutPage() {
  const { totalPrice, clearCart } = useCart();
  const [date, setDate] = useState<Date>();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-6 max-w-lg">
        <div className="h-24 w-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="h-12 w-12" />
        </div>
        <h1 className="text-4xl font-headline font-bold text-primary">Order Successful!</h1>
        <p className="text-lg text-muted-foreground">
          Your request has been received. Our logistics team will contact you shortly to confirm the delivery schedule to your site.
        </p>
        <div className="bg-muted p-6 rounded-2xl text-left">
          <p className="text-sm font-bold mb-2">Order ID: CS-92834</p>
          <p className="text-sm text-muted-foreground">Tracking updates will be sent to your email.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="flex-1" asChild>
            <Link href="/profile/orders">View Order</Link>
          </Button>
          <Button className="flex-1 bg-primary" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-headline font-bold mb-8">Checkout</h1>
      
      <form onSubmit={handleOrder} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-accent"/> Site Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Project Contact Person</Label>
                  <Input id="firstName" placeholder="Full Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+966 5..." required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Site Delivery Address</Label>
                <Input id="address" placeholder="Main Street, Building No, Area" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Special Offloading Instructions</Label>
                <Input id="notes" placeholder="e.g. Needs crane access, restrictive gate height" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Truck className="h-5 w-5 text-accent"/> Delivery Scheduling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-2">
                <Label>Preferred Delivery Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal h-12",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
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
                 <Button type="button" variant="outline" className="h-16 text-xs flex flex-col items-center justify-center border-accent bg-accent/5">
                    <span className="font-bold">Morning Slot</span>
                    <span className="opacity-70">8:00 AM - 12:00 PM</span>
                 </Button>
                 <Button type="button" variant="outline" className="h-16 text-xs flex flex-col items-center justify-center">
                    <span className="font-bold">Afternoon Slot</span>
                    <span className="opacity-70">1:00 PM - 5:00 PM</span>
                 </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5 text-accent"/> Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 mb-4">
                  <p className="text-sm font-bold text-primary">Project Billing: Corporate Account</p>
                  <p className="text-xs text-muted-foreground">This order will be added to your monthly statement.</p>
               </div>
               <div className="space-y-2">
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input id="cardName" placeholder="NAME ON CARD" />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
               </div>
            </CardContent>
          </Card>

          <div className="bg-muted p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-headline font-bold">Review Order</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Site Delivery & Handling</span>
                <span className="text-green-600 font-bold">FREE (Bulk Promotion)</span>
              </div>
              <div className="pt-4 border-t flex justify-between text-2xl font-bold text-primary">
                <span>Total Due</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-16 text-lg font-bold">
              Place Site Order
            </Button>
            <p className="text-[10px] text-center text-muted-foreground">
              By placing the order, you agree to Concreate Solutions' terms of service and delivery conditions.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
