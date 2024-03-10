import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({ required: true }) user: IUser = { } as IUser;
}
