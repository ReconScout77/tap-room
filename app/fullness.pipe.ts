import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';


@Pipe({
  name: "fullness",
  pure: false
})

export class FullnessPipe implements PipeTransform {
  transform(input: Keg[], desiredFullness) {
    let output: Keg[] = [];
    if(desiredFullness === "fullKegs") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].empty === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFullness === "emptyKegs") {
      for(let i = 0; i < input.length; i++) {
        if (input[i].empty === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFullness === "almostEmptyKegs") {
      for(let i = 0; i < input.length; i++) {
        if (input[i].pints <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
