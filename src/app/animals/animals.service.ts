import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Animals } from './animal';
import { TokenService } from '../authentication/token.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getListForUser(username: string): Observable<Animals> {
    const token = this.tokenService.getToken() || '';
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animals>(`${environment.apiUrl}/${username}/photos`, {
      headers,
    });
  }
}
