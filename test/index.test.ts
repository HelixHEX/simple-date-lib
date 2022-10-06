/*
Test class functions from src/index.ts
*/

import { D } from '../src/index';

test('D class', () => {
  const d = new D(2022, 9, 6);
  expect(d.year).toBe(2022);
  expect(d.yr).toBe(22);
  expect(d.month).toBe('October');
  expect(d.mon).toBe('Oct');
  expect(d.date).toBe(6);
  expect(d.day).toBe('Friday');
  expect(d.dy).toBe('Fri');
  expect(d.format('Y-M-d')).toBe('2022-October-6');
  expect(d.format('y-m-d')).toBe('22-Oct-6');
  expect(d.format('Y-M-d W')).toBe('2022-October-6 Friday');
  expect(d.format('y-m-d w')).toBe('22-Oct-6 Fri');
  expect(d.format('Y-M-d W w')).toBe('2022-October-6 Friday Fri');
  expect(d.when('1st January 2019')).toBe('today');
});
