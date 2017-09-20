import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allKegs">All Kegs</option>
    <option value="emptyKegs">Empty Kegs</option>
    <option value="almostEmptyKegs">Almost Empty Kegs</option>
    <option value="fullKegs" selected="selected">Full Kegs</option>
  </select>

  
    <tr [class]="alcoholContentColor(currentKeg)" *ngFor="let currentKeg of childKegList | fullness: filterByFullness">{{currentKeg.name}}
    <th><label>Empty</label>
    <input *ngIf="currentKeg.empty === true" type="checkbox" checked (click)="toggleDone(currentKeg, false)"/>
    <input *ngIf="currentKeg.empty === false" type="checkbox" (click)="toggleDone(currentKeg, true)"/></th>
    <th><button class="btn btn-default" (click)="detailsButtonHasBeenClicked(currentKeg)">Details</button></th>
    <th><button class="btn btn-default" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button></th>
    <th><button class="btn btn-default" (click)="pintSold(currentKeg)">Pint Sold</button></th>
  </tr>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSenderEdit = new EventEmitter();
  @Output() clickSenderDetails = new EventEmitter();
  @Output() clickSenderPints = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSenderEdit.emit(kegToEdit);
  }

  detailsButtonHasBeenClicked(kegToSee: Keg) {
    this.clickSenderDetails.emit(kegToSee);
  }

  pintSold(currentKeg) {
    if (currentKeg.pints > 0) {
      currentKeg.pints -= 1;
      if(currentKeg.pints === 0) {
        currentKeg.empty = true;
      }
    } else {
      alert("Keg is empty.");
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

  filterByFullness: string = "fullKegs";

  onChange(optionFromMenu) {
    this.filterByFullness = optionFromMenu;
  }

  toggleDone(clickedKeg: Keg, setFullness: boolean) {
    clickedKeg.empty = setFullness;
  }

}
