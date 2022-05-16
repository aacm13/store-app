import { Action, createReducer, on } from '@ngrx/store';
import { loadSingleProductSuccess } from './single.actions';
import { initialState, SingleProductState } from './single.state';

const _singleProductReducer = createReducer(
  initialState,
  on(loadSingleProductSuccess, (state, action) => {
    return {
      ...state,
      singleProduct: action.singleProduct,
    };
  })
);
export function singleProductReducer(
  state: SingleProductState,
  action: Action
) {
  return _singleProductReducer(state, action);
}
