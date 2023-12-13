import { Component, Input, OnInit } from '@angular/core';
import { PostService } from './../../services/post/post.service';
import { Post } from './../../models/post.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit{
  currentPost: Post = {id: "", title: "", content: "", timestamp: new Date(), tags: []};
  postId: string = "";

  @Input()
  set id(id: string){
    this.postId = id;
  }

  constructor(private postService: PostService){}

  ngOnInit(): void {
    const postObservable = this.postService.fetchPost(this.postId);

    postObservable.subscribe(post => {
      this.currentPost = post;
    })
  }
}
