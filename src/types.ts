export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'electrical' | 'paint' | 'sanitary';
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
}
