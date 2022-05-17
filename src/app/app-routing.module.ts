import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'product/:slug',
    loadChildren: () =>
      import('./core/modules/single-product/single-product.module').then(
        (m) => m.SingleProductModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./core/modules/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'search/:value',
    loadChildren: () =>
      import('./core/modules/search-results/search-results.module').then(
        (m) => m.SearchResultsModule
      ),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./core/modules/notfound/notfound.module').then(
        (m) => m.NotfoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
