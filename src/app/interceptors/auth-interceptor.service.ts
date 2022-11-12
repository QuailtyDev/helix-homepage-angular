import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '@servicesint/utils.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');

    let request = req;

    if (token && UtilsService.doesEndpointNeedToken(req.url)) {
      request = req.clone({
        setHeaders: {
          authorization: `Auth-Token ${token}`,
        },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let finalError: HttpErrorResponse;
        if (error.status === HttpStatusCode.Unauthorized) {
          finalError = new HttpErrorResponse({
            status: error.status,
            error: 'INVALID_CREDENTIALS',
          });
        }

        return throwError(() => finalError || error);
      })
    );
  }
}
