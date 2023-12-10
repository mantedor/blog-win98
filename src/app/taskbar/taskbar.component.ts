import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
  }
}
