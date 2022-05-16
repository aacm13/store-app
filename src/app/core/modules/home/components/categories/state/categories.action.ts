import { createAction, props } from '@ngrx/store';
import { Category } from '../../interfaces/category';

export const LOAD_CATEGORIES = '[categories page] load products';
export const LOAD_CATEGORIES_SUCCESS =
  '[categories page] load products success';

export const loadCategories = createAction(LOAD_CATEGORIES);

export const loadCategoriesSuccess = createAction(
  LOAD_CATEGORIES_SUCCESS,
  props<{ category: Category[] }>()
);
