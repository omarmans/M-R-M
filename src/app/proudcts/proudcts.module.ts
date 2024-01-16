import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllProductsComponent, ProductsDetailsComponent, ItemComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class ProudctsModule {}
