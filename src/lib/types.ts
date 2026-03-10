
export interface Product {
  id: string;
  name: string;
  category: 'lighting' | 'manholes' | 'barriers' | 'benches' | 'car-stoppers' | 'planters';
  description: string;
  price?: number; // Price optional since it's a catalog
  specifications: string[];
  imageUrl: string;
  material: string;
}
