
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Truck, Package, Clock, ExternalLink } from 'lucide-react';

const MOCK_ORDERS = [
  {
    id: 'CS-92834',
    date: '24 أكتوبر 2023',
    status: 'في الطريق',
    total: 1450.00,
    items: ['قاعدة إنارة قياسية LB-500 x 3', 'مصد سيارات شديد التحمل x 10'],
    deliveryDate: 'متوقع غداً'
  },
  {
    id: 'CS-91022',
    date: '15 سبتمبر 2023',
    status: 'تم التسليم',
    total: 3200.00,
    items: ['حاجز جيرسي نوع A x 5'],
    deliveryDate: 'سُلم في 18 سبتمبر'
  }
];

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-right">
      <div className="flex justify-between items-center mb-8">
        <Button variant="outline" className="gap-2">
           <ExternalLink className="h-4 w-4" /> تتبع الشحنات
        </Button>
        <h1 className="text-3xl font-headline font-bold">طلباتي</h1>
      </div>

      <div className="space-y-6">
        {MOCK_ORDERS.map((order) => (
          <Card key={order.id} className="overflow-hidden">
            <CardHeader className="bg-muted/30 border-b flex flex-row items-center justify-between">
               <Badge className={order.status === 'تم التسليم' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-blue-100 text-blue-700 hover:bg-blue-100'}>
                  {order.status}
               </Badge>
               <div className="text-right">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">رقم الطلب</p>
                  <p className="font-headline font-bold text-lg">{order.id}</p>
               </div>
            </CardHeader>
            <CardContent className="p-6">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
                  <div className="space-y-4 order-3 md:order-1">
                     <p className="text-sm text-muted-foreground">تم الطلب في {order.date}</p>
                     <p className="text-2xl font-bold text-primary">{order.total.toFixed(2)} ريال</p>
                     <Button variant="outline" size="sm" className="w-full">تحميل الفاتورة</Button>
                  </div>
                  <div className="space-y-4 order-2 md:order-2">
                     <div className="flex items-start gap-3 justify-end">
                        <div className="text-right">
                           <p className="text-sm font-bold">حالة التوصيل</p>
                           <p className="text-sm text-muted-foreground">{order.deliveryDate}</p>
                           <div className="w-full bg-muted h-2 rounded-full mt-2 overflow-hidden">
                              <div className={`h-full bg-accent ${order.status === 'تم التسليم' ? 'w-full' : 'w-2/3'}`} />
                           </div>
                        </div>
                        <Truck className="h-5 w-5 text-accent shrink-0 mt-1" />
                     </div>
                  </div>
                  <div className="space-y-4 order-1 md:order-3">
                     <div className="flex items-start gap-3 justify-end">
                        <div className="text-right">
                           <p className="text-sm font-bold">المنتجات المطلوبة</p>
                           <ul className="text-sm text-muted-foreground list-disc list-inside mt-1">
                              {order.items.map((item, i) => <li key={i}>{item}</li>)}
                           </ul>
                        </div>
                        <Package className="h-5 w-5 text-accent shrink-0 mt-1" />
                     </div>
                  </div>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
