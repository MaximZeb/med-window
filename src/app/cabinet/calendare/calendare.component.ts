import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface CalendarCell {
  date: number | null;
  isWeekend: boolean;
}

@Component({
  selector: 'app-calendare',
  templateUrl: './calendare.component.html',
  styleUrls: ['./calendare.component.scss']
})
export class CalendareComponent implements OnInit {
  @Output() selectedDate = new EventEmitter<Date>();
  public currentMonth: string;
  public currentYear: number;
  public weekDays: string[] = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  public calendarDays: CalendarCell[] = [];

  constructor() {
    const today = new Date();
    this.currentMonth = today.toLocaleString('ru', { month: 'long' });
    this.currentYear = today.getFullYear();
  }

  ngOnInit(): void {
    this.generateCalendar();
  }

  public generateCalendar(): void {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const startDay = startOfMonth.getDay();
    const totalDays = endOfMonth.getDate();

    // Clear previous calendar
    this.calendarDays = [];

    // Fill initial empty cells
    for (let i = 0; i < startDay; i++) {
      this.calendarDays.push({ date: null, isWeekend: false });
    }

    // Fill calendar with days
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), i);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      this.calendarDays.push({ date: i, isWeekend });
    }
  }

  public onDateClick(date: number | null): void {
    if (date) {
      const selectedDate: Date = new Date(this.currentYear, new Date().getMonth(), date);
      this.selectedDate.emit(selectedDate);
      console.log('Selected Date:', selectedDate);
    }
  }
}
