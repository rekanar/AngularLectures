import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // templateUrl: './user.component.html',
  template: `<h3>Users Data</h3>`,
  // styleUrls: ['./user.component.css'],
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class UserComponent {}
