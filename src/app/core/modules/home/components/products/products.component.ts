import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Product } from '../interfaces/product';
import { loadProducts } from './state/product.actions';
import { getProducts } from './state/product.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Observable<Product[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.products = this.store.select(getProducts);
    this.store.dispatch(loadProducts());
  }
}
