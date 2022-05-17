import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleProductRoutingModule } from './single-product-routing.module';
import { SingleProductComponent } from './components/single-product.component';
import { StoreModule } from '@ngrx/store';
import { SINGLE_PRODUCT_STATE_NAME } from './components/state/single.selector';
import { singleProductReducer } from './components/state/single.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SingleProductEffects } from './components/state/single.effects';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SingleProductComponent],
  imports: [
    CommonModule,
    SingleProductRoutingModule,
    MatIconModule,
    StoreModule.forFeature(SINGLE_PRODUCT_STATE_NAME, singleProductReducer),
    EffectsModule.forFeature([SingleProductEffects]),
  ],
})
export class SingleProductModule {}
