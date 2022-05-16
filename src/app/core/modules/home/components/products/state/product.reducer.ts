import { Action, createReducer, on } from '@ngrx/store';
import { loadProductsSuccess } from './product.actions';
import { initialState, ProductState } from './product.state';

const _productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
    };
  })
);
export function productReducer(state: ProductState, action: Action) {
  return _productReducer(state, action);
}
