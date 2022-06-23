import { Date } from '../src/js/date.js';

describe('Date', () => {

  test('should return Date object with four propertis for day, month, y and c', () => {
    const date = new Date(3, 1, 2000);
    expect(date.day).toEqual(3);
    expect(date.month).toEqual(1);
    expect(date.year).toEqual(2000);
  });

  test('should adjust date when month is Jan or Feb',() => {
    const date = new Date(1, 1, 2000);
    date.dateAdjust();
    expect(date.day).toEqual(1);
    expect(date.month).toEqual(11);
    expect(date.year).toEqual(1999);
  });

});