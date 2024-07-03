import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  @Input() time: string = '';
  @Output() choseTime = new EventEmitter<{ hour: number, minute: number }>();
  public hours: number[] = [];
  public minutes: number[] = [0, 30]; // Intervals of 30 minutes

  public selectedTime: { hour: number, minute: number } | null = null;

  constructor() { }

  ngOnInit(): void {
    this.generateHours();
  }

  ngOnChanges(): void {
    this.generateHours();
  }

  private generateHours(): void {
    const [start, end] = this.time.split(' - ').map(t => t.split(':').map(Number));
    if (start && end && start.length === 2 && end.length === 2) {
      const [startHour] = start;
      const [endHour] = end;
      this.hours = Array.from({ length: endHour - startHour + 1 }, (_, i) => i + startHour);
    }
  }

  public isSelected(hour: number, minute: number): boolean {
    return this.selectedTime !== null && this.selectedTime.hour === hour && this.selectedTime.minute === minute;
  }

  public logTime(hour: number, minute: number): void {
    console.log(`Selected time: ${hour}:${minute}`);
    this.selectedTime = { hour, minute };
    this.choseTime.emit(this.selectedTime);
  }
}
