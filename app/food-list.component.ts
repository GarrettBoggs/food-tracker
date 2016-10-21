import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'food-list',
  template: `
  <div *ngFor="let currentFood of childFoodList">
    <p> {{currentFood.name}} </p>
    <p> {{currentFood.description}} </p>
    <p> {{currentFood.calories}} </p>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
}
