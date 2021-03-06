import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products/products.service';
import { AppState } from 'src/app/store/app.state';
import { Product } from '../../home/components/interfaces/product';
import { postLike } from '../../home/components/products/state/like.action';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  ngUnsubscribe$ = new Subject();
  products!: Product[];
  title = '';
  up = 'up';
  down = 'down';
  search = '';
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((params) => {
        if (params.has('value')) {
          this.search = params.get('value')!;
          this.title = 'Search';
          this.productService
            .searchGetProducts(this.search)
            .subscribe((response) => {
              this.products = response;
            });
        } else if (params.has('cat')) {
          this.search = params.get('cat')!;
          this.title = 'Category';
          this.productService
            .filterGetProducts(this.search)
            .subscribe((response) => {
              this.products = response;
            });
        }
      });
  }

  likeAndNotBtn(id: string, state: string) {
    this.store.dispatch(postLike({ product_id: id, kind: state }));
  }
}
