import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { UserService } from './user/user.service';
import { User } from './user/user';

const RESOURCE_URL = `${environment.apiUrl}/user`;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate(
    username: string,
    password: string
  ): Observable<HttpResponse<User>> {
    return this.http
      .post<User>(
        `${RESOURCE_URL}/login`,
        {
          userName: username,
          password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const token = response.headers.get('x-access-token') ?? '';
          this.userService.saveToken(token);
        })
      );
  }
}
