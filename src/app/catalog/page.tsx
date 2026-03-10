
'use client';

import { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X, Construction } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-8 shrink-0 text-right">
          <div>
            <h3 className="font-headline font-bold text-xl mb-4 flex items-center justify-end gap-2">
              الفئات <Filter className="h-5 w-5 text-accent" />
            </h3>
            <div className="flex flex-col gap-2">
              <Button 
                variant={selectedCategory === null ? 'default' : 'ghost'} 
                className="justify-end"
                onClick={() => setSelectedCategory(null)}
              >
                جميع المنتجات
              </Button>
              {CATEGORIES.map(cat => (
                <Button 
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'ghost'} 
                  className="justify-end capitalize"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
            <h4 className="font-bold mb-2">طلب أسعار خاصة</h4>
            <p className="text-sm text-muted-foreground mb-4">للمشاريع الكبرى والكميات الضخمة، يرجى التواصل مع قسم المبيعات مباشرة.</p>
            <Button size="sm" className="w-full" asChild>
              <Link href="/contact">تواصل معنا</Link>
            </Button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <p className="text-sm text-muted-foreground whitespace-nowrap order-2 sm:order-1">
              عرض <span className="font-bold text-foreground">{filteredProducts.length}</span> منتج
            </p>
            <div className="relative w-full max-w-md order-1 sm:order-2">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="ابحث عن المنتجات..." 
                className="pr-10 h-12 rounded-xl text-right"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-4 bg-muted/30 rounded-3xl">
              <Construction className="h-16 w-16 mx-auto text-muted-foreground opacity-50" />
              <h3 className="text-2xl font-headline font-bold">لم يتم العثور على منتجات</h3>
              <p className="text-muted-foreground">حاول تعديل البحث أو الفلاتر.</p>
              <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedCategory(null); }}>
                مسح جميع الفلاتر
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
