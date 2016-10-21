import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
 selector: 'edit-food',
 template: `
   <div *ngIf="childSelectedFood">
     <h1>Edit Food</h1>
     <div>
       <label>Name:</label>
       <input [(ngModel)]="childSelectedFood.name">
     </div>
     <div>
       <label>Description:</label>
       <input [(ngModel)]="childSelectedFood.description">
       <button (click)="doneClicked()">Done</button>
     </div>
     <div>
       <label>Description:</label>
       <input [(ngModel)]="childSelectedFood.calories">
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
