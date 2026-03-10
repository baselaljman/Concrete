
import { Product } from './types';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/600/400';

export const PRODUCTS: Product[] = [
  {
    id: 'lb-1',
    name: 'قاعدة إنارة قياسية LB-500',
    category: 'lighting',
    description: 'قاعدة خرسانية عالية القوة مصممة لأعمدة إنارة الشوارع الحضرية. توفر ثباتاً ممتازاً ومقاومة للاهتزاز.',
    price: 450,
    specifications: ['فئة الخرسانة: C35/45', 'التسليح: فولاذ عالي الشد', 'التشطيب: خرسانة طبيعية ناعمة'],
    imageUrl: getImg('lighting-base'),
    dimensions: '500x500x1200 مم',
    material: 'خرسانة مسلحة'
  },
  {
    id: 'mh-1',
    name: 'حلقة منهل صرف صحي SM-1000',
    category: 'manholes',
    description: 'قسم منهل صرف صحي معياري مع وصلات لسان وأخدود لسهولة التركيب وأداء مانع للتسرب.',
    price: 320,
    specifications: ['امتصاص الماء: <5%', 'فئة التحميل: D400', 'طلاء داخلي: إيبوكسي اختياري'],
    imageUrl: getImg('manhole'),
    dimensions: 'قطر داخلي 1000 مم',
    material: 'خرسانة شديدة التحمل'
  },
  {
    id: 'br-1',
    name: 'حاجز جيرسي نوع A',
    category: 'barriers',
    description: 'حاجز طريق قياسي يستخدم لفصل حارات المرور وحماية مناطق العمل. متوافق مع أنظمة السلامة.',
    price: 680,
    specifications: ['مقاومة الصدمات: عالية', 'تصميم متداخل', 'مسبق الصب للنشر السريع'],
    imageUrl: getImg('barrier'),
    dimensions: '3000x600x810 مم',
    material: 'خرسانة C40/50'
  },
  {
    id: 'bn-1',
    name: 'مقعد الراحة الحضري',
    category: 'benches',
    description: 'مقعد خرساني بسيط مثالي للحدائق العامة الحديثة ومراكز المدن. متين ومقاوم للعوامل الجوية.',
    price: 1200,
    specifications: ['تصميم مريح', 'طلاء مضاد للكتابة', 'لا يتطلب صيانة'],
    imageUrl: getImg('bench'),
    dimensions: '1800x450x450 مم',
    material: 'خرسانة معمارية مصقولة'
  },
  {
    id: 'cs-1',
    name: 'مصد سيارات شديد التحمل',
    category: 'car-stoppers',
    description: 'مصد عجلات خرساني مسلح لمواقف السيارات التجارية. يمنع تلف المباني والمركبات.',
    price: 85,
    specifications: ['علامات رؤية عالية', 'ثقوب تثبيت متضمنة', 'مقاوم للكبريتات'],
    imageUrl: getImg('car-stopper'),
    dimensions: '1500x150x120 مم',
    material: 'خرسانة معززة بالألياف'
  },
  {
    id: 'lb-2',
    name: 'قاعدة ديكورية برو',
    category: 'lighting',
    description: 'قاعدة خرسانية جمالية لإنارة الحدائق ومناطق المشاة.',
    price: 550,
    specifications: ['تشطيب جمالي', 'مدخل كابل متكامل', 'ألوان مخصصة متاحة'],
    imageUrl: getImg('lighting-base'),
    dimensions: '400x400x1000 مم',
    material: 'خرسانة معمارية'
  }
];

export const CATEGORIES = [
  { id: 'lighting', name: 'قواعد الإنارة', icon: 'Zap' },
  { id: 'manholes', name: 'المناهل والحلقات', icon: 'Construction' },
  { id: 'barriers', name: 'حواجز الطرق', icon: 'Shield' },
  { id: 'benches', name: 'مقاعد الحدائق', icon: 'Armchair' },
  { id: 'car-stoppers', name: 'مصدات السيارات', icon: 'Square' }
];
