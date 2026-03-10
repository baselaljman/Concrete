
'use client';

import { useState } from 'react';
import { customProductSpecification, type CustomProductSpecificationOutput } from '@/ai/flows/custom-product-specification-flow';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Sparkles, CheckCircle, Info, Construction, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function CustomRequest() {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CustomProductSpecificationOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const data = await customProductSpecification({ description });
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Custom Specification Tool</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Describe your unique concrete requirements—dimensions, special materials, or specific use cases—and our AI will guide you through feasibility and options.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        <Card className="border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              What are you building?
            </CardTitle>
            <CardDescription>
              Example: "I need a reinforced concrete manhole with a square 80cm opening and 2m depth, suitable for heavy traffic areas."
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea 
                placeholder="Describe your product in detail..." 
                className="min-h-[150px] bg-background text-lg"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90" 
                disabled={isLoading || !description.trim()}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing Specifications...
                  </>
                ) : (
                  'Analyze Feasibility'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-500 space-y-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Info className="h-5 w-5" /> Technical Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <div className="whitespace-pre-line text-muted-foreground">
                    {result.preciseSpecifications}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-green-100 bg-green-50/30">
                  <CardHeader>
                    <CardTitle className="text-green-700 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" /> Feasible Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {result.feasibleOptions.map((opt, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg border border-green-100">
                        <h4 className="font-bold text-green-800">{opt.optionName}</h4>
                        <p className="text-sm text-green-600/80 mt-1">{opt.details}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-primary/10 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                      <Construction className="h-5 w-5" /> Catalog Matches
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {result.matchingExistingProducts.map((prod, i) => (
                      <div key={i} className="flex justify-between items-center bg-white p-4 rounded-lg border">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-primary">{prod.productName}</h4>
                            <Badge variant="secondary">{prod.similarityScore}% Match</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{prod.reason}</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                           <Link href={`/catalog?search=${prod.productName}`}><ArrowRight className="h-4 w-4"/></Link>
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="text-center py-8">
              <Button size="lg" className="bg-primary px-12 h-14 text-lg">
                Submit for Final Engineering Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
