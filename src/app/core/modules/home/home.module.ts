import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsComponent } from './components/products/products.component';
import { StoreModule } from '@ngrx/store';
import { PRODUCT_STATE_NAME } from './components/products/state/product.selector';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './components/products/state/product.effects';
import { productReducer } from './components/products/state/product.reducer';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesEffects } from './components/categories/state/categories.effects';
import { CATEGORY_STATE_NAME } from './components/categories/state/categories.selector';
import { categoryReducer } from './components/categories/state/categories.reducer';

@NgModule({
  declarations: [HomeComponent, ProductsComponent, CategoriesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    StoreModule.forFeature(PRODUCT_STATE_NAME, productReducer),
    StoreModule.forFeature(CATEGORY_STATE_NAME, categoryReducer),
    EffectsModule.forFeature([ProductsEffects, CategoriesEffects]),
  ],
})
export class HomeModule {}
