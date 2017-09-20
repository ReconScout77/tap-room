import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-details',
  template: `

    <ul>
      <li *ngFor="let currentKeg of childKegList" (click)="onSelect(keg)" [class.selected]="keg === childSelectedKeg">{{keg.name}}</li>
    </ul>
    <div *ngIf="childSelectedKeg">
      <h2>{{childSelectedKeg.name}} details</h2>
      <li><label>Brand: </label> {{childSelectedKeg.brand}}</li>
      <li><label>Price per pint: </label> {{childSelectedKeg.price}}</li>
      <li><label>Alcohol Content: </label> {{childSelectedKeg.alcoholContent}}</li>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
  })

  export class KegDetailsComponent {
    @Input() childSelectedKeg: Keg[];
    @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked() {
      this.doneButtonClickedSender.emit();
    }

  }
