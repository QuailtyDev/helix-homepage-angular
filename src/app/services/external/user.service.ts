import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/app/constants/constants';
import { User } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceExternal {
  constructor(private readonly http: HttpClient) {}

  getUser(): Observable<User> {
    const options: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<User>(environment.backendUrl + Endpoints.USER.GET, options);
  }

  updateUser(user: User): Observable<any> {
    const options: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text',
    };

    const body = user;

    return this.http.post<any>(environment.backendUrl + Endpoints.USER.UPDATE, body, options);
  }
}
