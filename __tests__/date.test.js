import { Date } from '../src/js/date.js';

describe('Date', () => {

  test('should return Date object with four propertis for day, month, y and c', () => {
    const date = new Date(3, 1, 0, 20);
    expect(date.day).toEqual(3);
    expect(date.month).toEqual(1);
    expect(date.y).toEqual(0);
    expect(date.c).toEqual(20);
  });
});