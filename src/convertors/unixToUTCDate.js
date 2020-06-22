/**
 *  File: unixToUTCDate.js
 *  Author: Devin Ekadeni <devinekadeni@gmail.com>
 *  Description:  Encodes Unix Timestamp --> UTC Date
 *  UTC Date format: [Day], [Date] [Month] [Year] [Hour]:[Minute]:[Second] GMT
 *  ex: Sun, 21 Jun 2020 22:15:35 GMT
 */

define(function(require, exports) {
  const encodeUnixToUTCDate = (unixTimestamp) => {
    if (!validateTimestamp(unixTimestamp)) throw new Error('Invalid Unix Timestamp');

    const DAYS_ARR = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const MONTHS_ARR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
    const date = new Date(unixTimestamp * 1000); // * 1000 because JS compiles until milliseconds

    const utcYear = date.getUTCFullYear();
    const utcMonth = MONTHS_ARR[date.getUTCMonth()];
    const utcDate = date.getUTCDate();
    const utcDay = DAYS_ARR[date.getUTCDay()];
    const utcHour = date.getUTCHours();
    const utcMinute = date.getUTCMinutes();
    const utcSecond = date.getUTCSeconds();

    const UTCDate = `${utcDay}, ${utcDate} ${utcMonth} ${utcYear} ${utcHour}:${utcMinute}:${utcSecond} GMT`;
    return UTCDate;
  };

  const validateTimestamp = (unixTimestamp) => {
    return new Date(unixTimestamp * 1000).getTime() > 0;
  };

  exports.encodeUnixToUTCDate = encodeUnixToUTCDate;
});
