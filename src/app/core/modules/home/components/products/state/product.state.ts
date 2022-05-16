import { Product } from '../../interfaces/product';

export interface ProductState {
  products: Product[];
}
export const initialState: ProductState = {
  products: [],
};
