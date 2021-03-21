import { AuthenticationService } from 'src/app/core/services/user/authentication.service';
import { Router } from '@angular/router';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authenticationService.getToken();
    let interceptedRequest = req;

    if (token) {
      interceptedRequest = interceptedRequest.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
    }

    return next.handle(interceptedRequest).pipe(
      tap(
        () => {},
        (err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.router.navigate(['login']);
          }
        }
      )
    );
  }
}
