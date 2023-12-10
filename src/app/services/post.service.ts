import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = "http://localhost:8080/posts"

  constructor() { }
}
