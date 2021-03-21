import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

import { KeycloakService } from 'keycloak-angular';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(protected keycloak: KeycloakService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.keycloak.getToken()).pipe(
      mergeMap(token => {
        const headers: HttpHeaders = req.headers;
        const hedersWithAuthorization: HttpHeaders = headers.append('Authorization', 'Bearer ' + token);
        const requestWithAuthorizationHeader = req.clone({ headers: hedersWithAuthorization });
        return next.handle(requestWithAuthorizationHeader);
      }
    ));
  }
}
