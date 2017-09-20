import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{title}}</h1>

      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <hr>

      <keg-details [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finished()"></keg-details>

      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finished()"></edit-keg>



    </div>
  `
})


export class AppComponent {
  title: string = 'Tap Room';
  selectedKeg: null;

  masterKegList: Keg[] = [
    new Keg('Bere', 'BereBere', 2.50, 0.06),
    new Keg('Juice', 'Snapple', 2, 0.01),
    new Keg('Wodka', 'SimplyAlcohol', 6, 0.5)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finished() {
    this.selectedKeg = null;
  }

  // onSelect(keg: Keg): void {
  //   this.selectedKeg = keg;
  // }
}
