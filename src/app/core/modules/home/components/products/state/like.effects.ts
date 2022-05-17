import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products/products.service';
import { postLike, postLikeSuccess } from './like.action';

@Injectable()
export class LikeEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  likeProduct$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(postLike),
        mergeMap((action) => {
          return this.productService
            .likeAndNotProduct(action.product_id, action.kind)
            .pipe(
              map((data) => {
                console.log(data);
                //return postLikeSuccess(data);
              })
            );
        })
      );
    },
    { dispatch: false }
  );
}
