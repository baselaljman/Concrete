
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, MessageCircle } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 text-right">
      <Link href={`/products/${product.id}`} className="block relative aspect-video overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
        <Badge className="absolute top-2 right-2 bg-primary/90 hover:bg-primary capitalize">
          {product.category.replace('-', ' ')}
        </Badge>
      </Link>
      <CardContent className="p-4">
        <Link href={`/products/${product.id}`} className="hover:text-accent transition-colors">
          <h3 className="font-headline font-bold text-lg line-clamp-1">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-end flex-row-reverse">
          <span className="text-xs text-muted-foreground">{product.material}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          variant="outline"
          size="sm" 
          className="flex-1 gap-2"
          asChild
        >
          <Link href={`/products/${product.id}`}>
            <Eye className="h-4 w-4" /> التفاصيل
          </Link>
        </Button>
        <Button 
          size="sm" 
          className="flex-1 gap-2 bg-accent hover:bg-accent/90"
          asChild
        >
          <Link href="/contact">
            <MessageCircle className="h-4 w-4" /> طلب عرض سعر
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
