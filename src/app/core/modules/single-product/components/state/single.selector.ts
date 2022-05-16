import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SingleProductState } from './single.state';

const getSingleProductState =
  createFeatureSelector<SingleProductState>('singleProduct');

export const getSingleProduct = createSelector(
  getSingleProductState,
  (state) => {
    return state.singleProduct;
  }
);

export const SINGLE_PRODUCT_STATE_NAME = 'singleProduct';
