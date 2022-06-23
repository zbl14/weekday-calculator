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
    this.dateAdjust();
    let yearArr = this.year.toString().split("");
    this.y = parseInt(yearArr[0] + yearArr[1])
    return this.y
  }

  last2DigsOfYear () {
    this.dateAdjust();
    let yearArr = this.year.toString().split("");
    if (yearArr[3] !== "1" ) {
      this.Y = parseInt(yearArr[2] + yearArr[3]);
    } else {
      this.Y = 0;
    }
    return this.Y;
  }

  dayOfWeek () {
    this.first2DigsOfYear();
    this.last2DigsOfYear();
    this.w = (this.day + Math.round(2.6 * this.month - 0.2) + 5 * (this.Y % 4) + 3 * this.Y + 5 * (this.y % 4)) % 7;
    return this.w = this.w === 0 ? "Sunday"
      : this.w === 1 ? "Monday"
      : this.w === 6 ? "Saturday"
      : "Sunday"
  }
}