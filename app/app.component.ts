import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Empty</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          <keg-list [childKegList]="masterKegList" (clickSenderEdit)="editKeg($event)" (clickSenderDetails)="detailKeg($event)" ></keg-list>
        </tbody>
      </table>

      <keg-details [childSelectedKeg]="selectedDetailsKeg" (doneButtonClickedSender)="finishedDetails()"></keg-details>

      <edit-keg [childSelectedKeg]="selectedEditKeg" (doneButtonClickedSender)="finishedEdit()"></edit-keg>

      <new-keg (newKegSender)="addKeg($event)"></new-keg>

    </div>
  `
})


export class AppComponent {
  title: string = 'Tap Room';
  selectedDetailsKeg: null;
  selectedEditKeg: null;

  masterKegList: Keg[] = [
    new Keg('Bere', 'BereBere', 2.50, 0.06),
    new Keg('Juice', 'Snapple', 2, 0.01),
    new Keg('Wodka', 'SimplyAlcohol', 6, 0.5)
  ];


  editKeg(clickedKeg) {
    this.selectedEditKeg = clickedKeg;
  }

  detailKeg(clickedKeg) {
    this.selectedDetailsKeg = clickedKeg;
  }

  finishedEdit() {
    this.selectedEditKeg = null;
  }

  finishedDetails() {
    this.selectedDetailsKeg = null;
  }


  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
  // onSelect(keg: Keg): void {
  //   this.selectedKeg = keg;
  // }
}
