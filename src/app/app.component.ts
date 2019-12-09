import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import {HelloComponent} from './hello.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
 @ViewChildren(HelloComponent) 
 alerts: QueryList<HelloComponent>
  
  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));
  }
}
