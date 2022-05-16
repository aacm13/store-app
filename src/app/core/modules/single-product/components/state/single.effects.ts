import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products/products.service';
import { loadSingleProductSuccess } from './single.actions';

import { loadSingleProduct } from './single.actions';

@Injectable()
export class SingleProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  loadSingleProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSingleProduct),
      mergeMap((action) => {
        return this.productService.getSingleProduct(action.slug).pipe(
          map((singleProduct) => {
            return loadSingleProductSuccess({ singleProduct });
          })
        );
      })
    );
  });
}
