import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-details',
  template: `


    <div *ngIf="childSelectedKeg">
      <h1>{{childSelectedKeg.name}} Details</h1>
      <div class="well">
        <table class="table">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Price per pint</th>
              <th>Alcohol Content</th>
              <th>Pints Available</th>
              <th>Empty?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                {{childSelectedKeg.brand}}
              </th>
              <th>
                {{childSelectedKeg.price}}
              </th>
              <th>
                {{childSelectedKeg.alcoholContent}}
              </th>
              <th>
                {{childSelectedKeg.pints}}
              </th>
              <th>
                {{childSelectedKeg.empty}}
              </th>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-lg btn-block" (click)="doneButtonClicked()">Done</button>
      </div>
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
