import { Component, OnInit } from '@angular/core';
import { ShortcutComponent } from './shortcut/shortcut.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [ShortcutComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent implements OnInit{
  private selected: HTMLElement | null = null;

  ngOnInit(): void {
    const shortcuts: NodeListOf<HTMLElement> = document.querySelectorAll("app-shortcut")!;


    shortcuts.forEach(el => {
      el.addEventListener("click", () => this.handleClick(el))
    })
  }

  handleClick(s: HTMLElement): HTMLElement{
    this.selected?.classList.remove("shortcut-selected");

    this.selected = s;
    s.classList.add("shortcut-selected")

    setTimeout(()=> s.classList.remove("shortcut-selected"), 3000)
    return s;
  }
}
