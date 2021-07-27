import * as shamsi from 'shamsi';
declare type MonthType = shamsi.MonthType;
declare type DayType = shamsi.DayType;
export declare const jalaliToGregorian: typeof shamsi.jalaliToGregorian;
export declare function gregorianToJalali(yearOrDate: string | Date): [number, number, number];
export declare function gregorianToJalali(yearOrDate: number, month: MonthType, date: DayType): [number, number, number];
export {};
