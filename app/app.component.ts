import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Food Tracker</h1>
    <food-list [childFoodList]="masterFoodList"> </food-list>
    <new-food (newFoodSender)="createFood($event)"></new-food>
  </div>

  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Hot Dog", "Pretty average", 150),
    new Food("Hamburger", "Too much pickles", 324)
  ]
}
