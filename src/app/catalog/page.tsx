
'use client';

import { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        <aside className="w-full md:w-64 space-y-8 shrink-0">
          <div>
            <h3 className="font-headline font-bold text-xl mb-4 flex items-center gap-2">
              <Filter className="h-5 w-5 text-accent" /> Categories
            </h3>
            <div className="flex flex-col gap-2">
              <Button 
                variant={selectedCategory === null ? 'default' : 'ghost'} 
                className="justify-start"
                onClick={() => setSelectedCategory(null)}
              >
                All Products
              </Button>
              {CATEGORIES.map(cat => (
                <Button 
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'ghost'} 
                  className="justify-start capitalize"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
            <h4 className="font-bold mb-2">Need a custom size?</h4>
            <p className="text-sm text-muted-foreground mb-4">Our engineers can create custom concrete products based on your specs.</p>
            <Button size="sm" className="w-full" asChild>
              <Link href="/custom-request">Custom Tool</Link>
            </Button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 h-12 rounded-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              Showing <span className="font-bold text-foreground">{filteredProducts.length}</span> products
            </p>
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
              <h3 className="text-2xl font-headline font-bold">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters.</p>
              <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedCategory(null); }}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { Construction } from 'lucide-react';
import Link from 'next/link';
