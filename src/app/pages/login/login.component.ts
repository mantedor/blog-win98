import { Component } from '@angular/core';
import { ExitComponent } from '../../buttons/exit/exit.component';
import { ContinueComponent } from '../../buttons/continue/continue.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ExitComponent, ContinueComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
