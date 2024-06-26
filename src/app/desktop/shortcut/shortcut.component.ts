import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shortcut',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './shortcut.component.html',
  styleUrl: './shortcut.component.scss'
})
export class ShortcutComponent {
  @Input() path: string = "";

  @Input() name: string = "";
  @Input() shortcutIcon: string = "";
}
