import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/core/modules/home/components/interfaces/product';
import { GetResponse } from 'src/app/core/modules/home/components/interfaces/getResponse';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<GetResponse>(
        'https://trainee-program-api.applaudostudios.com/api/v1/products?include=image_attachment.blob,master&page[size]=38'
      )
      .pipe(
        map((data) => {
          const products: Product[] = [];
          for (const k of Object.entries(data.data)) {
            products.push(k[1] as Product);
          }

          return products;
        })
      );
  }

  getSingleProduct(slug: string): Observable<Product> {
    return this.http
      .get<GetResponse>(
        `https://trainee-program-api.applaudostudios.com/api/v1/products/${slug}?include=image_attachment.blob,master,category`
      )
      .pipe(
        map((data) => {
          const product: Product = data.data as Product;
          return product;
        })
      );
  }

  likeAndNotProduct(id: string, state: string) {
    return this.http.post(
      'https://trainee-program-api.applaudostudios.com/api/v1/likes',
      { data: { product_id: id, kind: state } }
    );
  }

  searchGetProducts(search: string): Observable<Product[]> {
    return this.http
      .get<GetResponse>(
        `https://trainee-program-api.applaudostudios.com/api/v1/products/?[filter][name_cont]=${search}&include=image_attachment.blob,category,master&page[size]=42`
      )
      .pipe(
        map((data) => {
          const products: Product[] = [];
          for (const k of Object.entries(data.data)) {
            products.push(k[1] as Product);
          }
          console.log(products);
          return products;
        })
      );
  }
  filterGetProducts(cat: string) {
    return this.http.get(
      `https://trainee-program-api.applaudostudios.com/api/v1/products/?[filter][category_in]=${cat}&include=image_attachment.blob,category,master&page[size]=42`
    );
  }
}
