import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss'
})
export class TaskbarComponent implements OnInit{
  currentDate: Date = new Date();

  updateTimer(): void{
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    setInterval(() => this.updateTimer(), 1000);

    const selectedElementWindow: HTMLElement = document.querySelector<HTMLElement>(".current-selected")!;
    const mainWindow: HTMLElement = document.querySelector<HTMLElement>("app-home")!;

    selectedElementWindow.addEventListener("click", ()=>{
        const newDisplay = mainWindow.style.display !== "none" ? "none" : "initial";
        const newBg = selectedElementWindow.style.backgroundColor === "transparent" ? "#eeeeef" : "transparent";
        const newBorderClass = selectedElementWindow.classList.contains("bordered") ? "inverse-bordered" : "bordered";

        mainWindow.style.display = newDisplay;
        selectedElementWindow.style.backgroundColor = newBg;

        selectedElementWindow.classList.remove("bordered");
        selectedElementWindow.classList.remove("inverse-bordered");

        selectedElementWindow.classList.add(newBorderClass)
    
    })
  }
}
