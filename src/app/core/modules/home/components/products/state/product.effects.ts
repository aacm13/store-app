import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products/products.service';
import { loadProducts, loadProductsSuccess } from './product.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProducts),
      mergeMap((action) => {
        return this.productService.getProducts().pipe(
          map((products) => {
            return loadProductsSuccess({ products });
          })
        );
      })
    );
  });
}
