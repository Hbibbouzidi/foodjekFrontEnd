
import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../restaurants';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allRestaurants: Restaurants[] = [];
  
  constructor(private restaurantsService: RestaurantsService) { }
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.restaurantsService.getAll().subscribe((data) => {
      this.allRestaurants = data;
    })
  }

}
