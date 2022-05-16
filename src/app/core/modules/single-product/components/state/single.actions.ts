import { createAction, props } from '@ngrx/store';
import { Product } from '../../../home/components/interfaces/product';

export const LOAD_SINGLE_PRODUCT = '[single products page] load single product';
export const LOAD_SINGLE_PRODUCT_SUCCESS =
  '[single product page] load single product success';

export const loadSingleProduct = createAction(
  LOAD_SINGLE_PRODUCT,
  props<{ slug: string }>()
);

export const loadSingleProductSuccess = createAction(
  LOAD_SINGLE_PRODUCT_SUCCESS,
  props<{ singleProduct: Product }>()
);
