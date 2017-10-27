import { Restaurant } from './restaurant.model';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [
    trigger('restaurant-appear', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  restaurantState = 'ready';

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
