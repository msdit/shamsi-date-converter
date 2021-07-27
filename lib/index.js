"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gregorianToJalali = exports.jalaliToGregorian = void 0;
var shamsi = require("shamsi");
var gtj = shamsi.gregorianToJalali, jtg = shamsi.jalaliToGregorian;
exports.jalaliToGregorian = jtg;
function gregorianToJalali(yearOrDate, month, day) {
    if (typeof yearOrDate !== 'number') {
        var date = new Date(yearOrDate);
        var y = date.getFullYear();
        var m = (date.getMonth() + 1);
        var d = date.getDate();
        return gtj(y, m, d);
    }
    else {
        return gtj(yearOrDate, month, day);
    }
}
exports.gregorianToJalali = gregorianToJalali;
