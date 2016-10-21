import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Food Tracker</h1>
    <food-list [childFoodList]="masterFoodList" (clickSender)='showDetails($event)' (deleteClickSender)='deleteFood($event)'> </food-list>
    <h2> Total Calories: {{ calTotal }} </h2>
    <button (click)="calculateTotalCal()"> Calculate Total Calories </button>
    <new-food (newFoodSender)="createFood($event)"></new-food>
  </div>
  `
})

export class AppComponent {

  public calTotal: number = 0;

  public masterFoodList: Food[] = [
    new Food("Hot Dog", "Pretty average", 150),
    new Food("Hamburger", "Too many pickles", 324),
    new Food("Steak Dinner", "Steak, eggs, hasbrowns, and a Red Bull", 1012)
  ]

  calculateTotalCal(){
    this.calTotal = 0;
    for(var i = 0; i < this.masterFoodList.length ; i ++)
    {
      this.calTotal += this.masterFoodList[i].calories;
    }
  }

  selectedFood: Food = null;

  showDetails(clickedFood: Food){
    this.selectedFood = clickedFood;
  }

  createFood(newFoodFromChild: Food){
    this.masterFoodList.push(newFoodFromChild);
  }

  deleteFood(clickedFood: Food){
    this.masterFoodList.splice(this.masterFoodList.indexOf(clickedFood),1);
  }

}
