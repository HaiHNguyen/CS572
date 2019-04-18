import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <div class="content">
      
      <table border = "1">
          <tr>
            <td class="id">{{user.uuid}}</td>
            <td clsss ="name">{{user.name}}</td>
            <td class="email">{{user.email}}</td>
            <td> <a [routerLink]="['/users' , user.uuid ]">View Details</a> </td>

        </tr>
      </table>
    </div>
  `,
  styles: [` `]
})
export class UserComponent implements OnInit {
  @Input()
    user;
  constructor() { }
  ngOnInit() {

  }

}
