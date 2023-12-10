import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PostListComponent } from './post-list/post-list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, PostListComponent, SearchbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
