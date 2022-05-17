import { Action, createReducer, on } from '@ngrx/store';
import { postLikeSuccess } from './like.action';
import { initialState, LikeState } from './like.state';

const _likeReducer = createReducer(
  initialState,
  on(postLikeSuccess, (state, action) => {
    return {
      ...state,
      kind: action.kind,
      product_id: action.id,
      user_id: action.user_id,
    };
  })
);
export function likeReducer(state: LikeState, action: Action) {
  return _likeReducer(state, action);
}
