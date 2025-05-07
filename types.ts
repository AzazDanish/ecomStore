export type Billboard = {
  id: string;
  imageURL: string;
  label: string;
};

export type Category = {
  id: string;
  name: string;
  billboard: Billboard;
};

export type Product = {
  id: string;
  name: string;
  price: string;
  isFeatured: boolean;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
};

export type Size = {
  id: string;
  name: string;
  value: string;
};

export type Color = {
  id: string;
  name: string;
  value: string;
};

export type Image = {
  id: string;
  url: string;
};

export type OrderItem = {
  id: string;
  orderId: string;
  productId: string;
  product: Product;
};

export type Order = {
  id: string;
  storeId: string;
  orderItems: OrderItem[];
  orderAmount: number;
  razorpayOrderId: string;
  isPaid: boolean;
  phone: string;
  address: string;
  createdAt: string; // or Date, depending on how you fetch it
  updatedAt: string; // or Date
};
