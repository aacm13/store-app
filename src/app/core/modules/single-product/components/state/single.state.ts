import { Product } from '../../../home/components/interfaces/product';

export interface SingleProductState {
  singleProduct: Product | null;
}
export const initialState: SingleProductState = {
  singleProduct: null,
};
