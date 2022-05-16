import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState } from './categories.state';

const getCategoriesState = createFeatureSelector<CategoryState>('category');

export const getCategory = createSelector(getCategoriesState, (state) => {
  return state.category;
});

export const CATEGORY_STATE_NAME = 'category';
