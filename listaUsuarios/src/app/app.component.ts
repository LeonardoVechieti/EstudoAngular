import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOption } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  showUserDetails: boolean = false;
  userSelected: IUser = {} as IUser;

  ngOnInit(): void {
    
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 2000);
  }

  onUserSelected: (user: IUser) => void = (user: IUser) => {
    this.showUserDetails = true;
    this.userSelected = user;
  }

  onFilter(filterOptions: IFilterOption) {
    console.log('filterOptions', filterOptions);
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }



}
