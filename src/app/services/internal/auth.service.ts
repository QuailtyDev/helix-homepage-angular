import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceExternal } from '@servicesext/auth.service';
import { catchError, map, Observable, of } from 'rxjs';
import { UserAuthResponse } from 'src/app/model/auth.model';
import { User } from 'src/app/model/user.model';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authServiceExternal: AuthServiceExternal, private userService: UserService) {}

  isAuthenticated(): Observable<boolean> {
    return this.userService.getUser().pipe(
      map((_) => true),
      catchError((err: HttpErrorResponse) => {
        return of(false);
      })
    );
  }

  loginUser(email: string, password: string): Observable<string> {
    return this.authServiceExternal
      .getUserAuth(email, password)
      .pipe(map((response: UserAuthResponse) => response.token));
  }

  signupUser(email: string): Observable<User> {
    return this.authServiceExternal.signupUser(email);
  }
}
