import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})

export class ReviewsComponent implements OnInit {

  reviews: Observable<any>
  constructor(private restaurantService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService
    .reviewsOfrestaurant(this.route.parent.snapshot.params['id']);
  }

}