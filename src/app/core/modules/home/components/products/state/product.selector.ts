import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

const getProductsState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(getProductsState, (state) => {
  return state.products;
});

export const PRODUCT_STATE_NAME = 'products';
