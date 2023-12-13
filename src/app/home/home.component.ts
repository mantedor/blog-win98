import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PostListComponent } from '../pages/post-list/post-list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, PostListComponent, SearchbarComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
