import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  Cart_OF_Items: any[] = [];
  total: any = 0;
  showMsg = false;
  constructor(private Cart_ser: CartService) {}
  ngOnInit(): void {
    this.Get_products_toCard();
    // this.AddCart();
  }

  Get_products_toCard() {
    if ('cartItem' in localStorage) {
      this.Cart_OF_Items = JSON.parse(localStorage.getItem('cartItem')!);
    }
    this.GetTotalPrice();
  }

  GetTotalPrice() {
    //     let sum = 0;
    //     for (let i = 0; i < this.Cart_OF_Items.length; i++) {
    //       this.total =
    //         this.Cart_OF_Items[i].Chsoen_item.price *
    //         this.Cart_OF_Items[i].quantity;
    //       sum += this.total;
    //     }
    //     this.total = Math.floor(sum);
    // }
    this.total = 0;
    for (let i in this.Cart_OF_Items) {
      this.total +=
        this.Cart_OF_Items[i].Chsoen_item.price *
        this.Cart_OF_Items[i].quantity;
    }
  }
  plusplus(e: any) {
    // e.value++;
    this.Cart_OF_Items[e].quantity++;
    this.GetTotalPrice();
    localStorage.setItem('cartItem', JSON.stringify(this.Cart_OF_Items));
  }
  minsmins(e: any) {
    // e.quantity--;
    // // e.value--;
    // if (e.quantity === '0') {
    //   e.disabled = false;
    // }
    this.Cart_OF_Items[e].quantity--;
    this.GetTotalPrice();
    localStorage.setItem('cartItem', JSON.stringify(this.Cart_OF_Items));
  }

  DetectChange() {
    //its happening when you blur with mouse and click
    localStorage.setItem('cartItem', JSON.stringify(this.Cart_OF_Items));
  }
  Del_Item(e: any) {
    // localStorage.removeItem(this.Cart_OF_Items[e]);
    this.Cart_OF_Items.splice(e, 1);
    this.GetTotalPrice();
    localStorage.setItem('cartItem', JSON.stringify(this.Cart_OF_Items));
    //local(cartItem) is still there
  }
  ClearAll() {
    // localStorage.clear();
    this.Cart_OF_Items = [];
    this.GetTotalPrice();
    localStorage.setItem('cartItem', JSON.stringify(this.Cart_OF_Items));
  }
  AddCart() {
    let Items = this.Cart_OF_Items.map((item) => {
      return {
        productId: item.Chsoen_item.id,
        quantity: item.quantity,
      };
    });
    //here we made a model who represnt the items will send
    let model = {
      userId: 5, //static no dynamic
      date: new Date(),
      products: Items,
    };

    this.Cart_ser.Send_item_to_BackEnd(model).subscribe((res) => {
      console.log(res);
      console.log(`success`);
      this.showMsg = true;
    });
  }
}
