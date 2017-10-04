import { Http, Headers, RequestOptions } from '@angular/http';
import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order, OrderItem } from 'app/order/order.model';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http) {}

    itemsValue(): number {
        return this.cartService.total();
    }

    clear() {
      this.cartService.clear();
    }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    incQty(item: CartItem) {
        this.cartService.incQty(item);
    }

    decQty(item: CartItem) {
        this.cartService.decQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(  `${ MEAT_API }/orders`,
                                JSON.stringify(order),
                                new RequestOptions({headers: headers}))
                                .map(response => response.json());
    }
}
