import { createAction, props } from '@ngrx/store';
import { Product } from '../../interfaces/product';

export const LOAD_PRODUCTS = '[home page] load products';
export const LOAD_PRODUCTS_SUCCESS = '[home page] load products success';

export const loadProducts = createAction(LOAD_PRODUCTS);

export const loadProductsSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);
