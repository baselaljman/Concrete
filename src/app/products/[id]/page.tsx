
'use client';

import { useParams, useRouter } from 'next/navigation';
import { PRODUCTS } from '@/lib/data';
import Image from 'next/image';
import { useCart } from '@/components/CartProvider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, ArrowLeft, Truck, ShieldCheck, Construction, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === params.id);

  if (!product) {
    return <div className="container mx-auto px-4 py-20 text-center">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" onClick={() => router.back()} className="mb-8 gap-2">
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src={product.imageUrl} 
            alt={product.name} 
            fill 
            className="object-cover" 
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 border-none px-4 py-1">
               Premium Concrete Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{product.name}</h1>
            <p className="text-xl font-bold text-accent">${product.price}.00 per unit</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-muted rounded-xl flex items-center gap-3">
                <Construction className="h-6 w-6 text-primary" />
                <div>
                   <p className="text-xs text-muted-foreground">Dimensions</p>
                   <p className="font-bold">{product.dimensions}</p>
                </div>
             </div>
             <div className="p-4 bg-muted rounded-xl flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <div>
                   <p className="text-xs text-muted-foreground">Material</p>
                   <p className="font-bold">{product.material}</p>
                </div>
             </div>
          </div>

          <div className="flex gap-4 mt-4">
            <Button size="lg" className="flex-1 h-14 text-lg bg-primary gap-2" onClick={() => addToCart(product)}>
              <ShoppingCart className="h-5 w-5" /> Add to Cart
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
            <Truck className="h-4 w-4" /> 
            <span>Secure site delivery within 3-5 business days.</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="specs" className="w-full">
        <TabsList className="bg-transparent border-b rounded-none w-full justify-start gap-8 h-12">
          <TabsTrigger value="specs" className="data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none bg-transparent">Technical Specs</TabsTrigger>
          <TabsTrigger value="shipping" className="data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none bg-transparent">Shipping & Logistics</TabsTrigger>
          <TabsTrigger value="downloads" className="data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none bg-transparent">Data Sheets</TabsTrigger>
        </TabsList>
        <TabsContent value="specs" className="py-8">
           <div className="max-w-3xl space-y-6">
              <h3 className="text-2xl font-headline font-bold">Engineering Specifications</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 p-3 bg-card border rounded-lg">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
           </div>
        </TabsContent>
        <TabsContent value="shipping" className="py-8">
           <div className="max-w-2xl space-y-4 text-muted-foreground">
              <p>We provide nationwide delivery using specialized heavy-duty vehicles equipped with cranes for safe offloading. Our logistics team handles all permissions for site access.</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Bulk delivery discounts available</li>
                <li>Site access survey included for large orders</li>
                <li>Standard 48h scheduling notice</li>
              </ul>
           </div>
        </TabsContent>
        <TabsContent value="downloads" className="py-8">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <Button variant="outline" className="justify-start gap-3 h-16">
                 <FileText className="h-5 w-5 text-accent" />
                 <div className="text-left">
                    <p className="font-bold">Structural Data Sheet</p>
                    <p className="text-[10px] text-muted-foreground">PDF (1.2MB)</p>
                 </div>
              </Button>
              <Button variant="outline" className="justify-start gap-3 h-16">
                 <FileText className="h-5 w-5 text-accent" />
                 <div className="text-left">
                    <p className="font-bold">Installation Guide</p>
                    <p className="text-[10px] text-muted-foreground">PDF (2.5MB)</p>
                 </div>
              </Button>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
