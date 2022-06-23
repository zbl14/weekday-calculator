export class Date {
  constructor(day, month, last2DigsOfYear, first2DigsOfYear) {
    this.day = day;
    this.month= month;
    this.y = last2DigsOfYear;
    this.c = first2DigsOfYear;
  }
}