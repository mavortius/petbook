import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Comment, Comments } from './comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  findById(id: number): Observable<Comments> {
    return this.http.get<Comments>(
      `${environment.apiUrl}/photos/${id}/comments`
    );
  }

  add(id: number, commentText: string): Observable<Comment> {
    return this.http.post<Comment>(
      `${environment.apiUrl}/photos/${id}/comments`,
      { commentText }
    );
  }
}
