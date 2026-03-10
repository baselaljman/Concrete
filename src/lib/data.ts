import { Product } from './types';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/600/400';

export const PRODUCTS: Product[] = [
  {
    id: 'lb-1',
    name: 'Standard Lighting Base LB-500',
    category: 'lighting',
    description: 'High-strength concrete base designed for urban street lighting poles. Provides excellent stability and vibration resistance.',
    price: 450,
    specifications: ['Concrete Class: C35/45', 'Reinforcement: High-tensile steel', 'Finish: Smooth natural concrete'],
    imageUrl: getImg('lighting-base'),
    dimensions: '500x500x1200mm',
    material: 'Reinforced Concrete'
  },
  {
    id: 'mh-1',
    name: 'Sewage Manhole Ring SM-1000',
    category: 'manholes',
    description: 'Modular sewage manhole section with tongue and groove joints for easy installation and leak-proof performance.',
    price: 320,
    specifications: ['Water absorption: <5%', 'Load Class: D400', 'Internal coating: Optional epoxy'],
    imageUrl: getImg('manhole'),
    dimensions: '1000mm Internal Diameter',
    material: 'Heavy Duty Concrete'
  },
  {
    id: 'br-1',
    name: 'Jersey Barrier Type A',
    category: 'barriers',
    description: 'Standard highway barrier used to separate traffic lanes and protect work zones. Complies with safety regulations.',
    price: 680,
    specifications: ['Impact resistance: High', 'Interlocking design', 'Precast for quick deployment'],
    imageUrl: getImg('barrier'),
    dimensions: '3000x600x810mm',
    material: 'C40/50 Concrete'
  },
  {
    id: 'bn-1',
    name: 'Urban Comfort Bench',
    category: 'benches',
    description: 'Minimalist concrete bench perfect for modern public parks and city centers. Durable and weather-resistant.',
    price: 1200,
    specifications: ['Ergonomic design', 'Anti-graffiti coating', 'No maintenance required'],
    imageUrl: getImg('bench'),
    dimensions: '1800x450x450mm',
    material: 'Polished Architectural Concrete'
  },
  {
    id: 'cs-1',
    name: 'Heavy Duty Car Stopper',
    category: 'car-stoppers',
    description: 'Reinforced concrete wheel stopper for commercial parking lots. Prevents damage to buildings and vehicles.',
    price: 85,
    specifications: ['High visibility markers', 'Anchor holes included', 'Sulphate resistant'],
    imageUrl: getImg('car-stopper'),
    dimensions: '1500x150x120mm',
    material: 'Fibre Reinforced Concrete'
  },
  {
    id: 'lb-2',
    name: 'Decorative Base Pro',
    category: 'lighting',
    description: 'Aesthetically pleasing concrete base for garden and pedestrian area lighting.',
    price: 550,
    specifications: ['Aesthetic finish', 'Integrated cable entry', 'Custom colors available'],
    imageUrl: getImg('lighting-base'),
    dimensions: '400x400x1000mm',
    material: 'Architectural Concrete'
  }
];

export const CATEGORIES = [
  { id: 'lighting', name: 'Lighting Bases', icon: 'Zap' },
  { id: 'manholes', name: 'Manholes & Rings', icon: 'Construction' },
  { id: 'barriers', name: 'Road Barriers', icon: 'Shield' },
  { id: 'benches', name: 'Park Benches', icon: 'Armchair' },
  { id: 'car-stoppers', name: 'Car Stoppers', icon: 'Square' }
];
