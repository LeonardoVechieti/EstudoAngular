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
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: IFilterOption, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];
    filteredList = this.filterUserListByName(filterOptions.name, usersList);
    console.log('Por nome', filteredList);
    // filteredList = this.filterUserListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    filteredList = this.filterUserListByStatus(filterOptions.status, filteredList);
    console.log('Por status', filteredList);
    return filteredList;
  }

  filterUserListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    return usersList;
  }

  filterUserListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_TYPPED = status === undefined;
    if (STATUS_NOT_TYPPED) {
      return usersList;
    }
    const filteredList = usersList.filter((user) => user.ativo.toString() === status.toString());
    return filteredList;
  }

  filterUserListByName(name: string, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined || name === '';

    if (NAME_NOT_TYPPED) {
      return usersList;
    }
    const filteredList = usersList.filter((user: IUser) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
  }
}
