import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'food-list',
  template: `
  <div *ngFor="let currentFood of childFoodList">
    <p> {{currentFood.name}} </p>
    <p> {{currentFood.description}} </p>
    <p> {{currentFood.calories}} </p>
    <button (click)="editButtonClicked(currentFood)">Edit</button>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(currentFood: Food){
    this.clickSender.emit(currentFood);
  }
}
