import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
} from '@angular/router';
import { UserProfileRepresentation } from '../../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  jwtHelper: JwtHelperService;
  currentUser: string;

  constructor(private router: Router, private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
    this.currentUser = '';
    this.http.get<UserProfileRepresentation>(`${environment.baseUrl}user/me`).subscribe(data => this.currentUser = data.name)
  }

  login(username: string, password: string) {
    return this.http.post<any>('https://mikolajk.dev/auth/realms/WatchNext/protocol/openid-connect/auth', {
      "username": username,
      "password": password,
      "client_id": "backend-service",
      "grant_type": "password"
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
