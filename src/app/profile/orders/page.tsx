
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Truck, Package, Clock, ExternalLink } from 'lucide-react';

const MOCK_ORDERS = [
  {
    id: 'CS-92834',
    date: 'Oct 24, 2023',
    status: 'In Transit',
    total: 1450.00,
    items: ['Standard Lighting Base LB-500 x 3', 'Heavy Duty Car Stopper x 10'],
    deliveryDate: 'Expected Tomorrow'
  },
  {
    id: 'CS-91022',
    date: 'Sep 15, 2023',
    status: 'Delivered',
    total: 3200.00,
    items: ['Jersey Barrier Type A x 5'],
    deliveryDate: 'Delivered Sep 18'
  }
];

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-headline font-bold">My Orders</h1>
        <Button variant="outline" className="gap-2">
           Track Shipments <ExternalLink className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-6">
        {MOCK_ORDERS.map((order) => (
          <Card key={order.id} className="overflow-hidden">
            <CardHeader className="bg-muted/30 border-b flex flex-row items-center justify-between">
               <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Order Number</p>
                  <p className="font-headline font-bold text-lg">{order.id}</p>
               </div>
               <Badge className={order.status === 'Delivered' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-blue-100 text-blue-700 hover:bg-blue-100'}>
                  {order.status}
               </Badge>
            </CardHeader>
            <CardContent className="p-6">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                     <div className="flex items-start gap-3">
                        <Package className="h-5 w-5 text-accent shrink-0 mt-1" />
                        <div>
                           <p className="text-sm font-bold">Items Ordered</p>
                           <ul className="text-sm text-muted-foreground list-disc list-inside mt-1">
                              {order.items.map((item, i) => <li key={i}>{item}</li>)}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-start gap-3">
                        <Truck className="h-5 w-5 text-accent shrink-0 mt-1" />
                        <div>
                           <p className="text-sm font-bold">Delivery Status</p>
                           <p className="text-sm text-muted-foreground">{order.deliveryDate}</p>
                           <div className="w-full bg-muted h-2 rounded-full mt-2 overflow-hidden">
                              <div className={`h-full bg-accent ${order.status === 'Delivered' ? 'w-full' : 'w-2/3'}`} />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="space-y-4 text-right">
                     <p className="text-sm text-muted-foreground">Ordered on {order.date}</p>
                     <p className="text-2xl font-bold text-primary">${order.total.toFixed(2)}</p>
                     <Button variant="outline" size="sm" className="w-full">Download Invoice</Button>
                  </div>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
