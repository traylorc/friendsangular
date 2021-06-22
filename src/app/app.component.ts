import { Component } from '@angular/core';
import { Friends } from './friend.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Friends List';

    friends: Friends[] = 
    [
      new Friends('Mattea', 30, 'mmswain@tql.com', true),
      new Friends('Jeff', 45, 'jnorth@tql.com', false),
      new Friends('Z', 25, 'zpoindexter@tql.com', false),
      new Friends('Matt', 30, 'mluedke@tql.com', false),
      new Friends('John', 30, 'jadkins@tql.com', false)
    ]
    stripedrows: string = "table table-striped table-sm";

}
