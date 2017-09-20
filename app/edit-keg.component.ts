import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
      <div *ngIf="childSelectedKeg">
        <h2>{{childSelectedKeg.name}}</h2>
        <hr>
        <h3>Edit Keg</h3>
        <div>
          <label>Enter Keg Name: </label>
          <input [(ngModel)]="childSelectedKeg.name">
        </div>
        <div>
          <label>Enter Keg Brand: </label>
          <input [(ngModel)]="childSelectedKeg.brand">
        </div>
        <div>
          <label>Enter Keg Pint Price: </label>
          <input [(ngModel)]="childSelectedKeg.price">
        </div>
        <div>
          <label>Enter Keg Alcohol Content: </label>
          <input [(ngModel)]="childSelectedKeg.alcoholContent">
        </div>
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
