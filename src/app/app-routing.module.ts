import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './proudcts/components/all-products/all-products.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ProductsDetailsComponent } from './proudcts/components/products-details/products-details.component';
import { ErrorPageComponent } from './404/error-page/error-page.component';

const routes: Routes = [
  { path: 'products', component: AllProductsComponent, title: 'Products' },
  { path: '', component: AllProductsComponent, title: 'M-R-M' },
  {
    path: 'details/:id',
    component: ProductsDetailsComponent,
    title: 'Product-Details',
  },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: '**', component: ErrorPageComponent, title: '404 Not-Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
