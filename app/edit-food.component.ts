import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
 selector: 'edit-food',
 template: `
   <div *ngIf="childSelectedFood">
     <h2>Edit Food</h2>
     <div>
       <label>Name:</label>
       <input [(ngModel)]="childSelectedFood.name">
     </div>
     <div>
       <label>Description:</label>
       <input [(ngModel)]="childSelectedFood.description">
     </div>
     <div>
       <label>Description:</label>
       <input type= "number" [(ngModel)]= "childSelectedFood.calories">
       <button (click)="doneClicked()">Done</button>
     </div>
   </div>
 `
})

export class EditFoodComponent{
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
