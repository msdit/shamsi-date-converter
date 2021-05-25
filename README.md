# shamsi-date-converter

A Jalali to Gregorian and Gregorian to Jalali converter with no dependency!

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![NPM version](https://img.shields.io/npm/v/shamsi-date-converter.svg?style=flat)](https://npmjs.org/package/shamsi-date-converter)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f447e66b1f5c4c7898e9dfda3cef6ef9)](https://www.codacy.com/gh/msdit/shamsi-date-converter/dashboard?utm_source=github.com&utm_medium=referral&utm_content=msdit/shamsi-date-converter&utm_campaign=Badge_Grade)

<!-- [![Package Quality](https://npm.packagequality.com/shield/shamsi.svg)](https://packagequality.com/#?package=shamsi) -->

## How to

- [Install](#install)
- Use Shamsi Date Converter in:
  - [Node.js](#using-in-nodejs)
  - [React](#react)
  - [Es5](#es5)
  - [Jquery](#jquery)
- [Zero dependency](#zero-dependency)
- [Format date](#format-date)

This plugin convert jalali to gregorian and gregorian to jalali in the most simple way

Convert gregorian to jalali

```js
shamsi.gregorianToJalali(1989, 1, 24); //[1367, 11, 4]
// OR
shamsi.gregorianToJalali('July 17, 1995 03:24:00'); //[1374, 4, 26]
// OR
const date = new Date('July 17, 1995 03:24:00');
shamsi.gregorianToJalali(date); //[1374, 4, 26]
```

Convert jalali to gregorian

```js
shamsi.jalaliToGregorian(1367, 11, 4); //[1989, 1, 24]
```

## Install

Install via **npm**

```shell
npm install shamsi-date-converter -S
```

Install via **yarn**

```shell
yarn add shamsi-date-converter
```

## Using in Node.js

Install it via npm or yarn then use it as the following code

```js
var shamsi = require('shamsi-date-converter');
shamsi.gregorianToJalali('July 17, 1995 03:24:00'); //[1374, 4, 26]
```

## Using in browser

#### ES5

get library using bower, npm, cdn, or cloning the repository

```HTML
<script src="https://unpkg.com/shamsi-date-converter"></script>

<script>
  shamsi.gregorianToJalali(1989, 1, 24);
</script>
```

#### React

```js
import * as shamsi from 'shamsi-date-converter';
...
render() {
  return (<p>{shamsi.gregorianToJalali(1989, 1, 24).join('/')}</p>);
}

```

#### Jquery

get library using bower, npm, cdn, or cloning the repository

```HTML
<script src="https://unpkg.com/shamsi-date-converter"></script>

<script>
  $("#date").text(shamsi.gregorianToJalali(1989, 1, 24).join('/'));
</script>
```

## Zero dependency

#### [shamsi](https://www.npmjs.com/package/shamsi)

If you don't need to pass date as input and you just want to pass `year`, `month` and `date`, you have to use [shamsi](https://www.npmjs.com/package/shamsi)

## Format date

#### [shamsi-formatter](https://www.npmjs.com/package/shamsi-formatter)

If you want to pass formatted date as input or get formatted date from output like:

```js
gregorianToJalali('1995/7/17'); // => 1374/4/26
// OR
jalaliToGregorian('1374/4/26'); // => 1995/7/17
// OR other formats as input or outputs
```

you have to use [shamsi-formatter](https://www.npmjs.com/package/shamsi-formatter)
