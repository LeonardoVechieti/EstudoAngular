import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showUserDetails: boolean = false;
  userSelected: IUser = {} as IUser;
  onUserSelected: (user: IUser) => void = (user: IUser) => {
    this.showUserDetails = true;
    this.userSelected = user;
  }
}
