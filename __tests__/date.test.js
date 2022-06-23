import { Date } from '../src/js/date.js';

describe('Date', () => {

  test('should return Date object with four propertis for day, month, y and c', () => {
    const date = new Date(3, 1, 2000);
    expect(date.day).toEqual(3);
    expect(date.month).toEqual(1);
    expect(date.year).toEqual(2000);
  });

  test('should adjust date when month is Jan',() => {
    const date = new Date(1, 1, 2000);
    date.dateAdjust();
    expect(date.day).toEqual(1);
    expect(date.month).toEqual(11);
    expect(date.year).toEqual(1999);
  });

  test('should adjust date when month is Feb',() => {
    const date = new Date(1, 2, 2000);
    date.dateAdjust();
    expect(date.day).toEqual(1);
    expect(date.month).toEqual(12);
    expect(date.year).toEqual(1999);
  });

  test('should not adjust date if the month is not Jan or Feb',() => {
    const date = new Date(1, 3, 2000);
    date.dateAdjust();
    expect(date.day).toEqual(1);
    expect(date.month).toEqual(3);
    expect(date.year).toEqual(2000);
  });

  test('should return adjust',() => {
    const date = new Date(1, 1, 2000)
    date.first2DigsOfYear();
    expect(date.year).toEqual(1999)
  })
});