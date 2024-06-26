import { Routes } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "posts"},

    {path: "posts", component: PostListComponent},
    {path: "posts/:page", component: PostListComponent},

    {path: "post/:id", component: BlogPostComponent},

    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent}
]
