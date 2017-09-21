import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
    <div class="jumbotron">
      <h1 id=title><img src="./resources/img/Bar.png"> </h1>
    </div>

      <keg-list [childKegList]="masterKegList" (clickSenderEdit)="editKeg($event)" (clickSenderDetails)="detailKeg($event)" ></keg-list>

      <new-keg (newKegSender)="addKeg($event)"></new-keg>

      <keg-details [childSelectedKeg]="selectedDetailsKeg" (doneButtonClickedSender)="finishedDetails()"></keg-details>

      <edit-keg [childSelectedKeg]="selectedEditKeg" (doneButtonClickedSender)="finishedEdit()"></edit-keg>

    </div>
  `
})


export class AppComponent {
  title: string = 'Tap Room';
  selectedDetailsKeg: null;
  selectedEditKeg: null;

  masterKegList: Keg[] = [
    new Keg('Bere', 'BereBere', 5, 0.3),
    new Keg('Juice', 'Snapple', 2, 0.01),
    new Keg('Wodka', 'SimplyAlcohol', 6, 0.5),
    new Keg('Blue Moon', 'Miller Coors', 6, 0.054)
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

}
