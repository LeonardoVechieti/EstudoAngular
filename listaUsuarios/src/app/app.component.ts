import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOption } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
    }, 2000);
  }

  usersList: IUser[] = [];
  showUserDetails: boolean = false;
  userSelected: IUser = {} as IUser;

  onUserSelected: (user: IUser) => void = (user: IUser) => {
    this.showUserDetails = true;
    this.userSelected = user;
  }

  onFilter(filterOptions: IFilterOption) {
    console.log('filterOptions', filterOptions);
  }
}
