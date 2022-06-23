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
    expect(date.month).toEqual(1);
    expect(date.year).toEqual(2000);
  });

  test('should return first 2 digs of adjusted year',() => {
    const date = new Date(1, 1, 2000);
    date.dateAdjust();
    date.first2DigsOfYear();
    expect(date.first2DigsOfYear()).toEqual(19);
  });

  test('should return last 2 digs of adjusted year',() => {
    const date = new Date(1, 1, 2000);
    date.dateAdjust();
    date.last2DigsOfYear();
    expect(date.last2DigsOfYear()).toEqual(99);
  });

  test('should return last 2 digs of adjusted year',() => {
    const date = new Date(1, 1, 2001);
    date.last2DigsOfYear();
    expect(date.last2DigsOfYear()).toEqual(0);
  });

  test('should return Saturday',() => {
    const date = new Date(1, 1, 2000);
    expect(date.dayOfWeek()).toEqual("Saturday");
  });

  test('should return day of week',() => {
    const date = new Date(31, 12, 2000);
    expect(date.dayOfWeek()).toEqual("Sunday");
  });

  test('should return day of week in the past',() => {
    const date = new Date(30, 4, 1777);
    expect(date.dayOfWeek()).toEqual("Wednesday");
  });

  test('should return day of week in the future',() => {
    const date = new Date(29, 2, 2024);
    expect(date.dayOfWeek()).toEqual("Thursday");
  });
});