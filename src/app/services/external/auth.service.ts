import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CLIENT_ID, DEFAULT_LOCALE, DEFAULT_PASSWORD, Endpoints, SECRET } from 'src/app/constants/constants';
import { UserAuthResponse } from 'src/app/model/auth.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceExternal {
  constructor(private http: HttpClient) {}

  signupUser(email: string): Observable<any> {
    const options: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        secret: SECRET,
      }),
    };

    const body = {
      url: environment.frontendUrl,
      username: email,
      password: DEFAULT_PASSWORD,
      locale: DEFAULT_LOCALE,
    };

    const result = this.http.post<any>(
      environment.backendUrl + Endpoints.AUTH.REGISTRATION + `?client=${CLIENT_ID}`,
      body,
      options
    );

    return result;
  }

  getUserAuth(email: string, password: string): Observable<UserAuthResponse> {
    const options: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(email + ':' + password),
        secret: SECRET,
      }),
    };

    const response = this.http.get<UserAuthResponse>(
      environment.backendUrl + Endpoints.AUTH.AUTHENTICATION + `?client=${CLIENT_ID}`,
      options
    );

    return response;
  }
}
