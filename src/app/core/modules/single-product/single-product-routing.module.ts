import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SingleProductComponent } from './components/single-product.component';
import { singleProductReducer } from './components/state/single.reducer';
import { SINGLE_PRODUCT_STATE_NAME } from './components/state/single.selector';

const routes: Routes = [{ path: '', component: SingleProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleProductRoutingModule {}
