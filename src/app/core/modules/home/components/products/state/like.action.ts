import { createAction, props } from '@ngrx/store';

export const POST_PRODUCT_LIKE = '[home page] post like';
export const POST_PRODUCT_LIKE_SUCCESS = '[home page] post like success';

export const postLike = createAction(
  POST_PRODUCT_LIKE,
  props<{ product_id: string; kind: string }>()
);

export const postLikeSuccess = createAction(
  POST_PRODUCT_LIKE_SUCCESS,
  props<{
    id: string;
    user_id: string;
    product_id: string;
    kind: string;
  }>()
);
