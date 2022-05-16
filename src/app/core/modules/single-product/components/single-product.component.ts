import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, pipe, Subject, Subscriber, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { Product } from '../../home/components/interfaces/product';
import { loadSingleProduct } from './state/single.actions';
import { getSingleProduct } from './state/single.selector';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit, OnDestroy {
  ngUnsubscribe$ = new Subject();
  prod!: Product;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((params) => {
        const slug1: string = params.get('slug')!;
        this.store.dispatch(loadSingleProduct({ slug: slug1 }));
      });
    this.store
      .select(getSingleProduct)
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((data) => {
        this.prod = data!;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
