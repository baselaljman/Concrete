import { Product } from './types';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/600/400';

export const PRODUCTS: Product[] = [
  {
    id: 'concrete-barriers-nj',
    name: 'حواجز خرسانية',
    category: 'barriers',
    description: 'هي عبارة عن حواجز نيوجيرسي يستخدم في صناعتها الخرسانة المعتمدة مع حديد التسليح. تستخدم هذه الحواجز لعدة اشياء منها تنظيم حركة السير المروري في اثناء اعمال الطرقات و تستخدم لبناء سور حول مكان ما يتم عمل صيانات داخل هذا المكان وتستخدم في منصفات الطريق و تعرف باسم حواجز الهاي واي وتستخدم ايضاً لحماية المواقع الامنية و تنظيم حركات السير لديها لذلك نحن نوفرها بجميع انواعها و اشكالها وكمياتها حسب طلب العميل و البنود المتفق عليها داخل العقد.',
    specifications: [
      'خرسانة معتمدة عالية الجودة',
      'تدعيم بحديد التسليح',
      'مقاومة عالية للصدمات',
      'متوفرة بجميع الأنواع والأشكال'
    ],
    imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete6.png',
    material: 'خرسانة مسلحة معتمدة'
  },
  {
    id: 'concrete-lighting-bases',
    name: 'قواعد انارة',
    category: 'lighting',
    description: 'تختلف احجامها وانواعها حسب الطلب، تستخدم هذه القواعد لتثبيت اعمدة الانارة في الطرقات و المباني الخاصة والعامة. وهي قواعد مصنوعة من الخرسانة المسلحة و لها قدرة تحمل ضغط ويتم عزلها بمواد مانعة لدخول الماء لها.',
    specifications: [
      'خرسانة مسلحة معتمدة',
      'مقاومة عالية للضغط',
      'معزولة بمواد مانعة لتسرب المياه',
      'تثبيت آمن وقوي لأعمدة الإنارة'
    ],
    imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete5.png',
    material: 'خرسانة مسلحة معتمدة'
  }
];

export const CATEGORIES = [
  { id: 'barriers', name: 'حواجز الطرق', imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete6.png' },
  { id: 'lighting', name: 'قواعد الإنارة', imageUrl: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/03/concrete5.png' },
  { id: 'manholes', name: 'المناهل والحلقات', imageUrl: getImg('manhole') },
  { id: 'benches', name: 'مقاعد الحدائق', imageUrl: getImg('bench') },
  { id: 'car-stoppers', name: 'مصدات السيارات', imageUrl: getImg('car-stopper') }
];
