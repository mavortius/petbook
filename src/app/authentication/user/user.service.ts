import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

import { TokenService } from '../token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeToken();
    }
  }

  private decodeToken(): void {
    const token = this.tokenService.getToken();
    let user: User;
    if (token) {
      user = jwt_decode(token) as User;
      this.userSubject.next(user);
    } else {
      this.userSubject.next({});
    }
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  saveToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeToken();
  }

  logout(): void {
    this.tokenService.clearToken();
    this.userSubject.next({});
  }

  isLoggedIn(): boolean {
    return this.tokenService.hasToken();
  }
}
