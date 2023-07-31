import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm'] != undefined) {
        this.foods = this.foodService.getAllFoodbySearchTerm(
          params['searchTerm']
        );
      } else if (params['tag'] != undefined) {
        this.foods = this.foodService.getAllFoodByTag(params['tag']);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
