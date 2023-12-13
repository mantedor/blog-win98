import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.interface';

interface resBody{
  results: Post[];
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  fetchBulkPosts(limit: number, offset: number): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseUrl}/posts?limit=${limit}&offset=${offset}`);
  }
  fetchPost(id: string): Observable<Post>{
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }
}
