import { ContactInfo, Review } from '../types';

export const contactInfo: ContactInfo = {
  address: 'Al Majaz, Sharjah, UAE',
  addressAr: 'مويلح، الشارقة، الإمارات العربية المتحدة',
  phone: '+971501234567',
  whatsapp: '+971501234567',
  instagram: '@wishdessert_sharjah',
  workingHours: 'Daily: 8:00 AM - 12:00 AM',
  workingHoursAr: 'يومياً: ٨:٠٠ ص - ١٢:٠٠ م',
  mapUrl: 'https://maps.google.com/maps?ll=25.308614,55.453204&z=17&t=m&hl=en&gl=AE&mapclient=embed&cid=16502077396075332035'
};

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Ahmed Al-Mansouri',
    nameAr: 'أحمد المنصوري',
    rating: 5,
    comment: 'Amazing coffee and desserts! The atmosphere is so cozy and welcoming.',
    commentAr: 'قهوة وحلويات رائعة! الأجواء مريحة ومرحبة جداً.',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Best cheesecake in Sharjah! Highly recommend this place.',
    commentAr: 'أفضل تشيز كيك في الشارقة! أنصح بهذا المكان بشدة.',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Fatima Al-Zahra',
    nameAr: 'فاطمة الزهراء',
    rating: 4,
    comment: 'Great service and delicious Arabic sweets. Will definitely come back!',
    commentAr: 'خدمة ممتازة وحلويات عربية لذيذة. سأعود بالتأكيد!',
    date: '2024-01-05'
  },
  {
    id: '4',
    name: 'Mohammad Hassan',
    nameAr: 'محمد حسن',
    rating: 5,
    comment: 'Perfect place for family gatherings. Kids love the desserts here.',
    commentAr: 'مكان مثالي للتجمعات العائلية. الأطفال يحبون الحلويات هنا.',
    date: '2023-12-28'
  }
];

export const cafeInfo = {
  name: 'Wish Dessert',
  nameAr: 'ويش ديزرت',
  tagline: 'Where Wishes Come Sweet',
  taglineAr: 'هنا تصير الأمنيات حلوة',
  description: 'A cozy cafe in the heart of Sharjah, offering the finest coffee, desserts, and warm hospitality. Experience the perfect blend of traditional Arabic sweets and modern cafe culture.',
  descriptionAr: 'مقهى مريح في قلب الشارقة، يقدم أفضل أنواع القهوة والحلويات مع الضيافة الدافئة. استمتع بالمزيج المثالي من الحلويات العربية التقليدية وثقافة المقاهي العصرية.',
  rating: 4.8,
  totalReviews: 127
};