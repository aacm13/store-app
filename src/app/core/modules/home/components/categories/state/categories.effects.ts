import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { loadCategories, loadCategoriesSuccess } from './categories.action';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCategories),
      mergeMap((action) => {
        return this.categoriesService.getCategories().pipe(
          map((category) => {
            return loadCategoriesSuccess({ category });
          })
        );
      })
    );
  });
}
