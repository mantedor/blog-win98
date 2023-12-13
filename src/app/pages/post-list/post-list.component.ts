import { Component, OnInit, Input} from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostService } from './../../services/post/post.service';
import { Post } from './../../models/post.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit{
  posts: Post[] = [];

  offsetMultiplier: number = 0;

  @Input()
  set page(currentMultiplier: number){

    this.offsetMultiplier = currentMultiplier - 1;
  }

  constructor(private postService: PostService){}

  ngOnInit(): void {
    const multiplier = this.offsetMultiplier > 0 ? this.offsetMultiplier : 0;
    const postsObservable = this.postService.fetchBulkPosts(20, 20 * multiplier);

    postsObservable.subscribe(posts => {
      this.posts = posts;
    })
  }
}
