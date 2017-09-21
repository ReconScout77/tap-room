import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <button class="btn btn-default" (click)="show=!show">New Keg</button>

    <div *ngIf="show">
      <h1>New Keg</h1>
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
                <input #newName>
              </th>
              <th>
                <input #newBrand>
              </th>
              <th>
                <input #newPrice>
              </th>
              <th>
                <input #newAlcoholContent>
              </th>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-lg btn-block" (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newName.value=' '; newBrand.value=' '; newPrice.value=' '; newAlcoholContent.value=' '; show=!show">Add</button>
      </div>
    </div>

    `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }


}
