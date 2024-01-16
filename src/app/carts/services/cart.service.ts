import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private Http_Carts: HttpClient) {}
  Send_item_to_BackEnd(model: any) {
    return this.Http_Carts.post(environment.baseApi + 'carts', model);
  }
}
