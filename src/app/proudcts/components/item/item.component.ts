import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: any = {};
  // @Input() item!: product;
  @Output() senditem = new EventEmitter();
  addbutton: boolean = false;
  amount: number = 0;
  //child to parent
  AddItemToCart() {
    this.senditem.emit({ Chsoen_item: this.item, quantity: this.amount });
  }
}
