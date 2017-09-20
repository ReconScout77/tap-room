import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li [class]="alcoholContentColor(currentKeg)" (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList">{{currentKeg.name}} <button (click)="detailsButtonHasBeenClicked(currentKeg)">Details</button> <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  detailsButtonHasBeenClicked(kegToSee: Keg) {
    this.clickSender.emit(kegToSee);
  }

  isEmpty(clickedKeg: Keg) {
    if(clickedKeg.empty) {
      alert("Empty keg alert!");
    } else {
      alert("There's still more to sell in here.");
    }
  }

  alcoholContentColor(currentKeg) {
    if (currentKeg.alcoholContent > .4) {
      return "bg-danger";
    } else if (currentKeg.alcoholContent >.25) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
