import {Component} from "@angular/core";
import {map} from "rxjs";
import {UsersQuery} from "../state/users.query";
import {UsersService} from "../state/users.service";

@Component({
  templateUrl: 'users-page.component.html',
  selector: 'app-users',
  styleUrls: ['users-page.component.scss']
})
export class UsersPageComponent {

  private usersLimit = 5

  showModal$ = this.usersQuery.showModal$
  users$ = this.usersQuery.users$

  isAddButtonEnabled$ = this.users$.pipe(
    map(users =>
      users.every(u => u.active)
      && users.length < this.usersLimit)
  )

  constructor(
    private usersQuery: UsersQuery,
    private usersService: UsersService
  ) {
  }

  showModal = () => {
    this.usersService.setModal(true)
  }
}
