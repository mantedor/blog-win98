import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() title: string = "";
  @Input() publishDate: string = "";

  @Input() id: string = "";
  @Input() desc: string  = "";
}
