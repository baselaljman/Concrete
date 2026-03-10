
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { CheckCircle, Truck, Zap, Shield, ArrowRight, Construction } from 'lucide-react';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg')?.imageUrl || '';

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <Image 
          src={heroImg} 
          alt="Concrete Solutions" 
          fill 
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
              Building Strength, <br/><span className="text-accent">Shaping Progress</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Premium concrete solutions for lighting, road safety, and urban development. Engineered for durability, delivered with precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 h-14 text-lg" asChild>
                <Link href="/catalog">Explore Catalog</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 h-14 text-lg" asChild>
                <Link href="/custom-request">Custom Request</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-headline font-bold text-primary">Integrated Solutions</h2>
          <p className="text-muted-foreground">Comprehensive range of precast concrete products for every project need.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/catalog?category=${cat.id}`}
              className="group bg-card border p-6 rounded-xl text-center hover:border-accent hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                <Zap className="h-8 w-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-headline font-bold text-lg">{cat.name}</h3>
              <p className="text-xs text-muted-foreground mt-2">View Collection <ArrowRight className="inline h-3 w-3" /></p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold">Why We Are Different?</h2>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Enormous Variety</h4>
                    <p className="text-primary-foreground/70">From lighting bases to park benches, we offer all sizes and types custom-made to order.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Certified Quality</h4>
                    <p className="text-primary-foreground/70">Our products follow the highest engineering standards for durability and long-term performance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Ease of Ordering</h4>
                    <p className="text-primary-foreground/70">Smooth online ordering interface with fast and secure delivery directly to your site.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/concreate-quality/800/600" 
                alt="Quality production" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold text-primary">Featured Products</h2>
            <p className="text-muted-foreground">Discover our most popular concrete solutions.</p>
          </div>
          <Button variant="link" className="text-accent text-lg" asChild>
            <Link href="/catalog" className="group">
              View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-accent rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
             <Construction className="h-[400px] w-[400px]" />
          </div>
          <div className="relative z-10 space-y-4 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Have Specific Requirements?</h2>
            <p className="text-lg opacity-90">Our AI-powered custom tool helps you define exact specifications and check feasibility in seconds.</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="px-8 h-14 font-bold text-primary" asChild>
              <Link href="/custom-request">Try Custom Tool</Link>
            </Button>
            <Button size="lg" className="bg-primary text-white border-none px-8 h-14 font-bold" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
