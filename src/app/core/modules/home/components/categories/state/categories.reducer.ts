import { Action, createReducer, on } from '@ngrx/store';
import { loadCategoriesSuccess } from './categories.action';
import { CategoryState, initialState } from './categories.state';

const _categoryReducer = createReducer(
  initialState,
  on(loadCategoriesSuccess, (state, action) => {
    return {
      ...state,
      category: action.category,
    };
  })
);
export function categoryReducer(state: CategoryState, action: Action) {
  return _categoryReducer(state, action);
}
