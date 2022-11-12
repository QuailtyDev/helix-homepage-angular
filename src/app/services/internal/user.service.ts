import { Injectable } from '@angular/core';
import { UserServiceExternal } from '@servicesext/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly userServiceExternal: UserServiceExternal) {}

  getUser(): Observable<User> {
    return this.userServiceExternal.getUser();
  }

  updateUser(user: User): Observable<boolean> {
    return this.userServiceExternal.updateUser(user);
  }
}
