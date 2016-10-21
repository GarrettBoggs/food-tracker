import {Component, Output, EventEmitter } from "@angular/core";
import { Food } from "./food.model";

@Component ({
  selector: "new-food" ,
  template: `
    <h1>Add a New Food</h1>
    <div>
      <label>Food Name</label>
      <input #foodName>
      <label>Description</label>
      <input #foodDescription>
      <label>Calories</label>
      <input #foodCalories>
      <button (click)="createButtonClicked(foodName.value, foodDescription.value, foodCalories.value); foodName.value=''; foodDescription.value=''; foodCalories.value=''; "> Create Food </button>
    </div>

    `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter()

  createButtonClicked(name: string, des: string, calories: number ){
    var newFood = new Food( name, des, calories);
    this.newFoodSender.emit(newFood);
  }
}
