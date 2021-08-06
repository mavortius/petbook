import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Animal, Animals } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient) {}

  getListForUser(username: string): Observable<Animals> {
    return this.http.get<Animals>(`${environment.apiUrl}/${username}/photos`);
  }

  findById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${environment.apiUrl}/photos/${id}`);
  }
}
