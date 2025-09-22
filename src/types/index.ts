// Types for Wish Dessert Cafe

export interface MenuItem {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  description?: string;
  descriptionAr?: string;
  category: string;
  image?: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  nameAr: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  name: string;
  nameAr?: string;
  rating: number;
  comment: string;
  commentAr?: string;
  date: string;
}

export interface ContactInfo {
  address: string;
  addressAr: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  workingHours: string;
  workingHoursAr: string;
  mapUrl: string;
}

export type Language = 'ar' | 'en';