import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Post, Pageable } from '../../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  fetchPage(page: number): Observable<Pageable>{
    return this.http.get<Pageable>(`${this.baseUrl}/posts?page=${page}&size=8`);
  }
  fetchPost(id: string): Observable<Post>{
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }
}
