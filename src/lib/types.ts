
export interface Product {
  id: string;
  name: string;
  enName: string;
  category: 'lighting' | 'manholes' | 'barriers' | 'benches' | 'car-stoppers' | 'planters';
  description: string;
  enDescription: string;
  price?: number;
  specifications: string[];
  enSpecifications: string[];
  imageUrl: string;
  material: string;
  enMaterial: string;
}

export interface Category {
  id: string;
  name: string;
  enName: string;
  imageUrl: string;
}
