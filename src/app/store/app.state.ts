import { AuthReducer } from '../core/modules/authentication/state/auth.reducer';
import { AuthState } from '../core/modules/authentication/state/auth.state';
import { ProductState } from '../core/modules/home/components/products/state/product.state';
import { productReducer } from '../core/modules/home/components/products/state/product.reducer';
import { CategoryState } from '../core/modules/home/components/categories/state/categories.state';
import { categoryReducer } from '../core/modules/home/components/categories/state/categories.reducer';

export interface AppState {
  auth: AuthState;
  products: ProductState;
  category: CategoryState;
}
export const appReducer = {
  auth: AuthReducer,
  products: productReducer,
  category: categoryReducer,
};
