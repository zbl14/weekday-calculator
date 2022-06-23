import { Date } from '../src/js/date.js';

describe('date', () => {

  test('should return Date object with four propertis for day, month, y and c'), () => {
    const date = new Date(1, 1);
    expect(date.day).toEqual(1);
    expect(date.month).toEqual(1);
    expect(date.y).toEqual(lastTwoDigsOfYear);
    expect(date.c).toEqual(firstTwoDigsOfYear);
  }
});