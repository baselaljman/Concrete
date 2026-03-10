
export interface Product {
  id: string;
  name: string;
  category: 'lighting' | 'manholes' | 'barriers' | 'benches' | 'car-stoppers';
  description: string;
  price: number;
  specifications: string[];
  imageUrl: string;
  dimensions: string;
  material: string;
}

export interface CartItem extends Product {
  quantity: number;
}
