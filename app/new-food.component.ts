import {Component, Output, EventEmitter } from "@angular/core";
import { Food } from "./food.model";

@Component ({
  selector: "new-food" ,
  template: `
    <h2>Add a New Food</h2>
    <div>
      <label>Name: </label>
      <input class="NewFoodBar" #foodName>
      <label>Description: </label>
      <input class="NewFoodBar" #foodDescription>
      <label>Calories: </label>
      <input class="NewFoodBar" #foodCalories>
      <button (click)="createButtonClicked(foodName.value, foodDescription.value, foodCalories.value); foodName.value=''; foodDescription.value=''; foodCalories.value=''; "> Create Food </button>
    </div>

    `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter()

  createButtonClicked(name: string, des: string, calories: string ){
    var caloriesInteger = parseInt(calories);
    var newFood = new Food( name, des, caloriesInteger);
    this.newFoodSender.emit(newFood);
  }
}
