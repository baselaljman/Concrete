
import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'concrete-barriers-nj',
    name: 'حواجز خرسانية',
    enName: 'Concrete Barriers',
    category: 'barriers',
    description: 'حواجز نيوجيرسي مصنعة من خرسانة معتمدة مع حديد تسليح، تستخدم لتنظيم السير وحماية المواقع الأمنية.',
    enDescription: 'New Jersey barriers made of certified concrete with reinforcement, used for traffic organization and security site protection.',
    specifications: [
      'خرسانة معتمدة عالية الجودة',
      'تدعيم بحديد التسليح',
      'مقاومة عالية للصدمات'
    ],
    enSpecifications: [
      'High-quality certified concrete',
      'Steel reinforcement',
      'High impact resistance'
    ],
    imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete6.png',
    material: 'خرسانة مسلحة معتمدة',
    enMaterial: 'Reinforced Certified Concrete'
  },
  {
    id: 'concrete-lighting-bases',
    name: 'قواعد انارة',
    enName: 'Lighting Bases',
    category: 'lighting',
    description: 'قواعد خرسانية مسلحة لتثبيت أعمدة الإنارة، معزولة تماماً ضد الرطوبة والمياه.',
    enDescription: 'Reinforced concrete bases for fixing lighting poles, fully insulated against moisture and water.',
    specifications: [
      'خرسانة مسلحة معتمدة',
      'مقاومة عالية للضغط',
      'عزل كامل ضد المياه'
    ],
    enSpecifications: [
      'Certified reinforced concrete',
      'High pressure resistance',
      'Full water insulation'
    ],
    imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete5.png',
    material: 'خرسانة مسلحة معتمدة',
    enMaterial: 'Reinforced Certified Concrete'
  },
  {
    id: 'concrete-manholes',
    name: 'مناهل ارضية',
    enName: 'Concrete Manholes',
    category: 'manholes',
    description: 'مناهل خرسانية للصرف الصحي وتمديدات الكهرباء، مصنعة وفق المعايير الهندسية الدقيقة.',
    enDescription: 'Concrete manholes for sewage and electrical installations, manufactured according to precise engineering standards.',
    specifications: [
      'صب في قوالب مخصصة',
      'حديد تسليح عالي المتانة',
      'مطابقة للمواصفات الفنية'
    ],
    enSpecifications: [
      'Cast in custom molds',
      'High durability reinforcement',
      'Compliant with technical specifications'
    ],
    imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete1.png',
    material: 'خرسانة مسلحة معتمدة',
    enMaterial: 'Reinforced Certified Concrete'
  }
];

export const CATEGORIES: Category[] = [
  { id: 'barriers', name: 'حواجز الطرق', enName: 'Road Barriers', imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete6.png' },
  { id: 'lighting', name: 'قواعد الإنارة', enName: 'Lighting Bases', imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete5.png' },
  { id: 'manholes', name: 'المناهل والحلقات', enName: 'Manholes & Rings', imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete1.png' },
  { id: 'benches', name: 'كراسي تجميلية', enName: 'Decorative Benches', imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete2.png' }
];
