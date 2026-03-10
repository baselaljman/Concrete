
import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'concrete-lighting-bases',
    name: 'قواعد انارة',
    enName: 'Lighting Bases',
    category: 'lighting',
    description: 'قواعد خرسانية مسلحة لتثبيت أعمدة الإنارة، معزولة تماماً ضد الرطوبة والمياه ومصنعة بأعلى جودة.',
    enDescription: 'Reinforced concrete bases for fixing lighting poles, fully insulated against moisture and water, manufactured with top quality.',
    specifications: [
      'خرسانة مسلحة معتمدة إجهاد 4000',
      'حديد تسليح عالي القوة',
      'عزل مائي بيتوميني'
    ],
    enSpecifications: [
      'Certified 4000 PSI reinforced concrete',
      'High-strength steel reinforcement',
      'Bituminous water insulation'
    ],
    imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete5.png',
    material: 'خرسانة مسلحة معتمدة',
    enMaterial: 'Reinforced Certified Concrete'
  },
  {
    id: 'concrete-barriers-nj',
    name: 'حواجز خرسانية نيوجيرسي',
    enName: 'New Jersey Barriers',
    category: 'barriers',
    description: 'حواجز طرق شديدة التحمل لتنظيم السير وحماية المواقع، تتوفر بمقاسات وأطوال مختلفة حسب الطلب.',
    enDescription: 'Heavy-duty road barriers for traffic regulation and site protection, available in various sizes and lengths.',
    specifications: [
      'تصميم هندسي مقاوم للصدمات',
      'فتحات للرفع والتحميل السهل',
      'سطح أملس معالج'
    ],
    enSpecifications: [
      'Impact-resistant engineering design',
      'Slots for easy lifting and loading',
      'Smooth treated surface'
    ],
    imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete6.png',
    material: 'خرسانة مسلحة معتمدة',
    enMaterial: 'Reinforced Certified Concrete'
  },
  {
    id: 'concrete-manholes',
    name: 'مناهل ارضية وغرف تفتيش',
    enName: 'Concrete Manholes',
    category: 'manholes',
    description: 'مناهل خرسانية متكاملة للصرف الصحي وتمديدات الكهرباء والاتصالات بمقاسات قياسية.',
    enDescription: 'Integrated concrete manholes for sewage, electricity, and telecommunications with standard sizes.',
    specifications: [
      'صب آلي دقيق',
      'مقاومة للأملاح والكبريتات',
      'سهولة التركيب والتوصيل'
    ],
    enSpecifications: [
      'Precise machine casting',
      'Resistant to salts and sulfates',
      'Easy installation and connection'
    ],
    imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete1.png',
    material: 'خرسانة مسلحة معتمدة',
    enMaterial: 'Reinforced Certified Concrete'
  },
  {
    id: 'concrete-bench-modern',
    name: 'كراسي حدائق تجميلية',
    enName: 'Decorative Benches',
    category: 'benches',
    description: 'مقاعد خرسانية بتصاميم عصرية تناسب الحدائق والمجمعات السكنية والمستشفيات، تجمع بين القوة والجمال.',
    enDescription: 'Concrete benches with modern designs suitable for parks, residential complexes, and hospitals, combining strength and aesthetics.',
    specifications: [
      'تشطيب ناعم (فير فيس)',
      'مقاومة للعوامل الجوية القاسية',
      'تصميم مريح وثابت'
    ],
    enSpecifications: [
      'Fair-face smooth finish',
      'Resistant to harsh weather conditions',
      'Comfortable and stable design'
    ],
    imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete2.png',
    material: 'خرسانة ديكورية معالجة',
    enMaterial: 'Treated Decorative Concrete'
  },
  {
    id: 'concrete-car-stopper',
    name: 'مصدات سيارات أرضية',
    enName: 'Car Stoppers',
    category: 'car-stoppers',
    description: 'مصدات خرسانية لمواقف السيارات تضمن تنظيم الاصطفاف وحماية الجدران والمساحات الخضراء.',
    enDescription: 'Concrete car stoppers for parking lots ensuring organized parking and protecting walls and green spaces.',
    specifications: [
      'تثبيت محكم بالمسامير',
      'ألوان تحذيرية حسب الطلب',
      'متانة عالية ضد الدهس'
    ],
    enSpecifications: [
      'Secure bolt fastening',
      'Custom warning colors',
      'High durability against impact'
    ],
    imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete7.png',
    material: 'خرسانة صلبة عالية الكثافة',
    enMaterial: 'High-density Solid Concrete'
  },
  {
    id: 'concrete-planter-large',
    name: 'أحواض زهور خرسانية',
    enName: 'Concrete Planters',
    category: 'planters',
    description: 'أحواض زهور بأحجام كبيرة لتجميل المداخل والشوارع، توفر بيئة مثالية لنمو النباتات مع قوة تحمل عالية.',
    enDescription: 'Large planters for beautifying entrances and streets, providing an ideal environment for plant growth with high durability.',
    specifications: [
      'نظام تصريف مياه مدمج',
      'عزل داخلي للرطوبة',
      'متوفرة بأشكال هندسية متنوعة'
    ],
    enSpecifications: [
      'Built-in drainage system',
      'Internal moisture insulation',
      'Available in various geometric shapes'
    ],
    imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete1.png',
    material: 'خرسانة مسلحة بالألياف',
    enMaterial: 'Fiber Reinforced Concrete'
  }
];

export const CATEGORIES: Category[] = [
  { id: 'lighting', name: 'قواعد الإنارة', enName: 'Lighting Bases', imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete5.png' },
  { id: 'barriers', name: 'حواجز الطرق', enName: 'Road Barriers', imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete6.png' },
  { id: 'manholes', name: 'المناهل والحلقات', enName: 'Manholes & Rings', imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete1.png' },
  { id: 'benches', name: 'كراسي تجميلية', enName: 'Decorative Benches', imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete2.png' }
];
