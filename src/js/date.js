export class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month= month;
    this.year = year;
  }

  dateAdjust () {
    if (this.month === 1) {
      this.month = 11;
      this.year -= 1 
    } else if (this.month === 2) {
      this.month = 12;
      this.year -= 1;
    }
  }

  first2DigsOfYear () {
    this.dateAdjust()
    this.year = this.year
  }
}