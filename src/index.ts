import * as shamsi from 'shamsi';
type MonthType = shamsi.MonthType;
type DayType = shamsi.DayType;

const { gregorianToJalali: gtj, jalaliToGregorian: jtg } = shamsi;

export const jalaliToGregorian = jtg;

export function gregorianToJalali(yearOrDate: string | Date): [number, number, number];
export function gregorianToJalali(yearOrDate: number, month: MonthType, date: DayType): [number, number, number];
export function gregorianToJalali(
  yearOrDate: number | string | Date,
  month?: MonthType,
  day?: DayType,
): [number, number, number] {
  if (typeof yearOrDate !== 'number') {
    const date = new Date(yearOrDate);
    const y = date.getFullYear();
    const m: MonthType = (date.getMonth() + 1) as MonthType;
    const d: DayType = date.getDate() as DayType;

    return gtj(y, m, d);
  } else {
    return gtj(yearOrDate, month as MonthType, day as DayType);
  }
}
