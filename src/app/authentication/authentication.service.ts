import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/user/login', {
      userName: username,
      password,
    });
  }
}
