import { NotificationService } from './../../shared/messages/notification.service';
import { Injectable } from '@angular/core';
import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

@Injectable()
export class ShoppingCartService {
    public items: CartItem[] = [];

    constructor(private notificationService: NotificationService) {}

    clear() {
        this.items = [];
    }

    total(): number {
        return this.items
        .map(item => item.value())
        .reduce((prev, value) => prev + value, 0);
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        if (foundItem) {
            this.incQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`);
    }

    incQty(item: CartItem) {
        item.quantity++;
    }

    decQty(item: CartItem) {
        item.quantity--;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);
    }
}
