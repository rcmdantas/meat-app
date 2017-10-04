import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

export class ShoppingCartService {
    public items: CartItem[] = [];

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
    }
}
