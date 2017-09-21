import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
      <div *ngIf="childSelectedKeg">
        <h1>Edit {{childSelectedKeg.name}}</h1>
        <div class="well">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Price per pint</th>
                <th>Alcohol Content</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <input [(ngModel)]="childSelectedKeg.name">
                </th>
                <th>
                  <input [(ngModel)]="childSelectedKeg.brand">
                </th>
                <th>
                  <input [(ngModel)]="childSelectedKeg.price">
                </th>
                <th>
                  <input [(ngModel)]="childSelectedKeg.alcoholContent">
                </th>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-success btn-lg btn-block" (click)="doneButtonClicked()">Done</button>
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
