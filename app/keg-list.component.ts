import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div id="filter">
    <label>Filter by: </label>
    <select (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="emptyKegs">Empty Kegs</option>
      <option value="almostEmptyKegs">Almost Empty Kegs</option>
      <option value="fullKegs" selected="selected">Full Kegs</option>
    </select>
  </div>

  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Empty</th>
          <th>Details</th>
          <th>Edit</th>
          <th>Sell</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let currentKeg of childKegList | fullness: filterByFullness"><th [class]="alcoholContentColor(currentKeg)">{{currentKeg.name}}</th>
          <th><span [class]="priceColor(currentKeg)">{{currentKeg.price}}</span></th>
          <th>
          <input *ngIf="currentKeg.empty === true" type="checkbox" checked (click)="toggleDone(currentKeg, false)"/>
          <input *ngIf="currentKeg.empty === false" type="checkbox" (click)="toggleDone(currentKeg, true)"/></th>
          <th><button class="btn btn-default" (click)="detailsButtonHasBeenClicked(currentKeg)">Details</button></th>
          <th><button class="btn btn-default" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button></th>
          <th><button class="btn btn-default" (click)="pintSold(currentKeg)">Pint</button>
          <button class="btn btn-default" (click)="growlerSold(currentKeg)">Growler</button>
          <button class="btn btn-default" (click)="largeGrowlerSold(currentKeg)">Large Growler</button></th>
          <th><button class="btn btn-default" (click)="restock(currentKeg)">Restock</button></th>
        </tr>
      </tbody>
    </table>
  </div>

  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSenderEdit = new EventEmitter();
  @Output() clickSenderDetails = new EventEmitter();

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

  growlerSold(currentKeg) {
    if (currentKeg.pints > 1) {
      currentKeg.pints -= 2;
      if(currentKeg.pints === 0) {
        currentKeg.empty = true;
      }
    } else {
      alert("There isn't enough in here to fill a growler.");
    }
  }

  largeGrowlerSold(currentKeg) {
    if (currentKeg.pints > 3) {
      currentKeg.pints -= 4;
      if(currentKeg.pints === 0) {
        currentKeg.empty = true;
      }
    } else {
      alert("There isn't enough in here to fill a large growler.");
    }
  }

  restock(currentKeg) {
    if (currentKeg.pints === 0) {
      currentKeg.pints = 124;
      currentKeg.empty = false;
    } else if (currentKeg.pints === 124) {
      alert("This keg is currently full and doesn't need to be restocked.");
    } else {
      alert("This doesn't need to be restocked yet. Sell the rest first.");
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

  priceColor(currentKeg) {
    if (currentKeg.price > 6) {
      return "badge badge-danger";
    } else if (currentKeg.price > 4) {
      return "badge badge-warning";
    } else {
      return "badge badge-info";
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
