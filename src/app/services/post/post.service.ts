import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  fetchBulkPosts(limit: number, offset: number): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseUrl}/posts?limit=${limit}&offset=${offset}`);
  }
  fetchPost(id: string): Observable<Post>{
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }
}
