"use strict";

// Using a 24hr clock, add the time by 1 second
/**let hour = Number(prompt("Enter the hour in 24hr format: "));
let minute = Number(prompt("Enter the minute: "));
let seconds = Number(prompt("Enter the second: "));

if ((hour > 24) || (minute > 59) || (seconds > 59)) {
    alert(`The time should be displayed where:\n
        - hour is between 0 and 24\n
        - minute and seconds is between 0 and 59`);
} else if ((hour < 0) || (minute < 0) || (seconds < 0)) {
    alert(`The time should be displayed where:\n
        - hour is between 0 and 24\n
        - minute and seconds is between 0 and 59`);
} else if (seconds == 59 && minute == 59 && hour == 23) {
    hour = 0;
    minute = 0;
    seconds = 0;
    alert(`New Time: ${hour}h${minute}m${seconds}s`);
} else if (minute == 59 && seconds == 59) {
    hour += 1;
    minute = 0;
    seconds = 0;
    alert(`New Time: ${hour}h${minute}m${seconds}s`);
} else if (seconds == 59) {
    minute += 1;
    seconds = 0;
    alert(`New Time: ${hour}h${minute}m${seconds}s`);
} else {
    seconds += 1;
    alert(`New Time: ${hour}h${minute}m${seconds}s`);
} */

/*let data = [5, -13, 3, 21, 0, 9]
let total = data.reduce(
  (checkAll, num) => {
    return checkAll + num
  }, 0
);

console.log(isFinite(total));*/

/*let data = [11, null, NaN, 'Hello', 24]
let count = 0;

for (let value of data) {
  if (!isNaN(value)) {
    count++;
  }
}

console.log(count);*/
const cities = ["London",, "",  "Paris",, "Rome"];
cities.forEach(function(value, index) {
  console.log(index, value);
});