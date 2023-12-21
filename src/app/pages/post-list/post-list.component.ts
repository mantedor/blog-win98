import { Component, OnInit, Input} from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostService } from './../../services/post/post.service';
import { Post } from './../../models/post.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent, CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent{
  posts: Post[] = [];
  pages: number[] = [];
  currentPage: number = 0;

  @Input()
  set page(current: number){
    this.currentPage = current - 1 || 0;

    this.changePostsPage(this.currentPage);
  }

  constructor(private postService: PostService){}

  changePostsPage(n: number): void {
    const postsObservable = this.postService.fetchBulkPosts(n);

    postsObservable.subscribe(posts => {
      this.posts = posts.content;

      this.pages = [];
      for(let x = 1; x <= posts.totalPages; x++){
        this.pages.push(x);
      }
      this.currentPage = posts.number;
    })
  }
}
