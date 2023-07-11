export interface PayResponse {
  products: Pay[];
  total: number;
  skip: number;
  limit: number;
}

export interface Pay {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
