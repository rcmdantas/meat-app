import { NotificationService } from './messages/notification.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [InputComponent, RadioComponent,
        RatingComponent, FormsModule,
        ReactiveFormsModule, CommonModule, SnackbarComponent]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, OrderService, RestaurantsService, NotificationService]
        }
    }
}
