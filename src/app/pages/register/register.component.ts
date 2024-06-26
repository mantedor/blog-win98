import { Component } from '@angular/core';
import { ExitComponent } from '../../buttons/exit/exit.component';
import { ContinueComponent } from '../../buttons/continue/continue.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ExitComponent, ContinueComponent, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
}
