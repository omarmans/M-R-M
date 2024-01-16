import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../../environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsServicesService implements OnInit {
  constructor(private Http_products: HttpClient) {}
  ngOnInit(): void {}

  getAllProudctsFromApi() {
    return this.Http_products.get(environment.baseApi + 'products');
  }
  getAllCatigoresFromApi() {
    return this.Http_products.get(environment.baseApi + 'products/categories');
  }

  GetKeywordOfCatigoresFromApi(key: string) {
    console.log(key);
    return this.Http_products.get(
      environment.baseApi + 'products/category/' + key
    );
  }
  get_product_by_id(id: any) {
    return this.Http_products.get(environment.baseApi + 'products/' + id);
  }
}
