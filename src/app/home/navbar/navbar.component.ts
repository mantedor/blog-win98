import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  private mainWindow: HTMLElement = document.querySelector<HTMLElement>("app-home")!;
  private navbar: HTMLElement;

  private dragging: boolean = false;
  private offsetX: number = 0;
  private offsetY: number = 0;

  constructor(navbar: ElementRef){
    const navEl = navbar.nativeElement as HTMLElement;

    this.navbar = navEl;
  }

  private updatePosition(newX: number, newY: number){
    this.mainWindow.style.left = `${newX}px`;
    this.mainWindow.style.top = `${newY}px`;
  
  }

  ngOnInit(): void {
    this.navbar.addEventListener("mousedown", e => {
      this.dragging = true;

      const {left, top} = this.navbar.getBoundingClientRect();
      this.offsetX = e.clientX - left;
      this.offsetY = e.clientY - top;
    })
    this.navbar.addEventListener("dblclick", ()=>{
      this.mainWindow.style.left = "50%";
      this.mainWindow.style.top = "50%";
    })


    document.addEventListener("mousemove", (e)=>{
      if(!this.dragging){return}

      const posNavbar = this.navbar.getBoundingClientRect();
      const posMainWindow = this.mainWindow.getBoundingClientRect();

      const posYNav: number = posNavbar.top + posNavbar.height / 2;
      const posYMain: number = posMainWindow.top + posMainWindow.height / 2;

      const distance: number = posYNav - posYMain;

      this.updatePosition(e.clientX - this.offsetY, e.clientY - this.offsetY - distance)
    })
    document.addEventListener("mouseup", ()=>{
      this.dragging = false;
    })
  }

}
