import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import NewUser from './new-user';
import { environment } from '../../../environments/environment';

const RESOURCE_URL = `${environment.apiUrl}/user`;

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  registerNewUser(user: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(`${RESOURCE_URL}/signup`, user);
  }

  // tslint:disable-next-line:typedef
  checkExistingUser(username: string) {
    return this.http.get(`${RESOURCE_URL}/exists/${username}`);
  }
}
