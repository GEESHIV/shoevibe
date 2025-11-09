export interface Product {
  id: string;
  name: string;
  rating: number;
  sellingPrice: number;
  mrp: number;
  images: string[];
  category: string;
  sizes?: number[];
  description: string;
}

export interface Order {
  id: string;
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
  productDescription: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  deliveryAddress: string;
  pincode: string;
  size?: string;
  quantity?: number;
  timestamp: number;
  status: 'placed' | 'cancelled';
}