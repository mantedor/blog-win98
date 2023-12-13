import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  @Input() title: string = "";
  @Input() publishDate: string = "";

  @Input() id: string = "";
  @Input() desc: string  = "";

  ngOnInit(): void {
    //Only keep the first 20 words
    const newDesc = this.desc.split(" ").slice(0, 10).join(" ")

    this.desc = newDesc;
  }
}
