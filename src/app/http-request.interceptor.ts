import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private inject: Injector, private snackBar: MatSnackBar) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authService = this.inject.get(AuthService);

    request = this.addTokenHeader(request, authService.getToken());

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            this.snackBar.open('email and/or password incorrect', 'close', {
              duration: 3000,
            });
            break;
          case 404:
            this.snackBar.open('Error 404 Not Found', 'close', {
              duration: 3000,
            });
            break;
          case 400:
            this.snackBar.open('Error 400 Bad Request', 'close', {
              duration: 3000,
            });
            break;
          default:
            this.snackBar.open('Unknown Error', 'close', {
              duration: 3000,
            });
            break;
        }
        console.log(error.message);
        return throwError(error.error.message);
      })
    );
  }

  addTokenHeader(request: HttpRequest<any>, token: any) {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });
  }
}
