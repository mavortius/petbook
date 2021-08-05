import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import NewUser from './new-user';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  registerNewUser(user: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>('http:localhost:3000/user/signup', user);
  }
}
