import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Animal, Animals } from './animal';

const NOT_MODIFIED = '304';

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

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/photos/${id}`);
  }

  like(id: number): Observable<boolean> {
    return this.http
      .post(
        `${environment.apiUrl}/photos/${id}/like`,
        {},
        { observe: 'response' }
      )
      .pipe(
        mapTo(true),
        catchError((err) =>
          err.status === NOT_MODIFIED ? of(false) : throwError(err)
        )
      );
  }
}
