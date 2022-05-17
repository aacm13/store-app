import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/core/modules/home/components/interfaces/category';
import { GetResponse } from 'src/app/core/modules/home/components/interfaces/getResponse';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http
      .get<GetResponse>(
        'https://trainee-program-api.applaudostudios.com/api/v1/categories'
      )
      .pipe(
        map((data) => {
          const categories: Category[] = [];
          for (const k of Object.entries(data.data)) {
            categories.push(k[1] as Category);
          }

          return categories;
        })
      );
  }
}
