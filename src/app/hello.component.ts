import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert',
  template: `<h1 (click)="alert()">{{type}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
   @Input() type: string = "success";
   alert() {
    console.log("alert");
  }
}
