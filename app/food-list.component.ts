import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'food-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show all Calories</option>
      <option value="high">High Calorie foods</option>
      <option value="low">Low Calorie foods</option>
    </select>
    <div *ngFor="let currentFood of childFoodList | caloriesRank:selectedCalories">
      <p> Name: {{currentFood.name}} </p>
      <p> Description: {{currentFood.description}} </p>
      <p> Calories: {{currentFood.calories}} </p>
      <button (click)="editButtonClicked(currentFood)">Edit</button>
      <button (click)="deleteButtonClicked(currentFood)">Delete</button>
      <edit-food *ngIf="selectedFood == currentFood" [childSelectedFood]="currentFood" (doneClickedSender)="finishedEditing()"></edit-food>
    </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  @Output() deleteClickSender = new EventEmitter();

  editButtonClicked(currentFood: Food){
    this.clickSender.emit(currentFood);
    this.selectedFood = currentFood;
  }

  deleteButtonClicked(currentFood: Food){
    this.deleteClickSender.emit(currentFood);
  }

  public selectedCalories: string = "all";

  onChange(optionFromMenu){
    this.selectedCalories = optionFromMenu;
  }

  public selectedFood: Food = null;

  finishedEditing(){
    this.selectedFood = null;
  }

}
