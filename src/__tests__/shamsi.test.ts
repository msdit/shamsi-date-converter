import * as shamsi from '../index';

const { gregorianToJalali: g2j, jalaliToGregorian: j2g } = shamsi;

test('jalali to gregorian 1374, 4, 26', () => {
  expect(j2g(1374, 4, 26).join('/')).toBe('1995/7/17');
});

test('jalali to gregorian leap 1300, 12, 30', () => {
  expect(j2g(1300, 12, 30).join('/')).toBe('1922/3/21');
});

test('jalali to gregorian invalid 1300, 12, 31', () => {
  expect(j2g(1300, 12, 31).join('/')).toBe('1922/3/22');
});

test('gregorian to jalali 1995, 7, 17', () => {
  expect(g2j(1995, 7, 17).join('/')).toBe('1374/4/26');
});

test('gregorian to jalali leap 1920, 2, 29', () => {
  expect(g2j(1920, 2, 29).join('/')).toBe('1298/12/9');
});

test('gregorian to jalali invalid 1920, 2, 30', () => {
  expect(g2j(1920, 2, 30).join('/')).toBe('1298/12/10');
});

test('gregorian to jalali July 17, 1995 03:24:00', () => {
  expect(g2j('July 17, 1995 03:24:00').join('/')).toBe('1374/4/26');
});

test('gregorian to jalali new Date July 17, 1995 03:24:00', () => {
  expect(g2j(new Date('July 17, 1995 03:24:00')).join('/')).toBe('1374/4/26');
});
