import { CartItem } from './../../restaurant-detail/shopping-cart/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() incQty = new EventEmitter<CartItem>();
  @Output() decQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncQty(item: CartItem) {
    this.incQty.emit(item);
  }

  emitDecQty(item: CartItem) {
    this.decQty.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }
}
