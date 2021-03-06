export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  active: string;
  likes_count: string;
  likes_up_count: string;
  likes_down_count: string;
  published_at: string;
  image: {
    id: number;
    url: string;
  };
  master: {
    price: number;
    sku: string;
  };
  category: {
    name: string;
  };
}
