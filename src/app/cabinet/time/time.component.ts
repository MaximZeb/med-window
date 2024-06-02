import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  public hours: number[] = Array.from({ length: 9 }, (_, i) => i + 12); // 12:00 to 20:00
  public minutes: number[] = [0, 30]; // Intervals of 30 minutes

  public selectedTime: { hour: number, minute: number } | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public isSelected(hour: number, minute: number): boolean {
    return this.selectedTime !== null && this.selectedTime.hour === hour && this.selectedTime.minute === minute;
  }

  public logTime(hour: number, minute: number): void {
    console.log(`Selected time: ${hour}:${minute}`);
    this.selectedTime = { hour, minute };
  }
}
