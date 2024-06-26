import { Component, EventEmitter, Output} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'button-continue',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './continue.component.html',
  styleUrl: './continue.component.scss'
})
export class ContinueComponent {
  @Output()
  clickOutput = new EventEmitter<MouseEvent>();

  sendClick(e: MouseEvent){
    this.clickOutput.emit(e);
  }
}
