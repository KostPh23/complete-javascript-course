// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temperatures, [
  -4,
  -7,
  "error",
  10,
  6,
]);
console.log(amplitudeNew);
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",

    // C) FIX
    // value: Number(prompt("Degrees celsius: ")),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/

//////////////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17℃ in 1 day ... 21℃ in 2 days ... 23℃ in 3 days ..."

Create a function 'printForecast' which takes an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - What are the maximum temperatures? Answer: the maximum temperatures calculated from our thermometer
// - What if the argument is not an array?
// - What type of elements should the array have?
// - How to count the days in the string?
// - How to print on the same line?
// - How to print 'day' when it is 1, otherwise 'days' when it is 2+?

// 2) Breaking up into sub-problems
// 1st group of sub-problems
// - What if the argument is not an array?
// - What to do if an element is of type 'number'?
// - What to do if an element is of other type? Answer: skip it
// - How to count the days in the string? Answer: use a counter for them in the for loop [1..len(arr)]
// - How to print on the same line?
// - Separate the string with ...

// 2nd group of sub-problems
// - What if the argument is not an array?
// - What to do if an element is of type 'number'?
// - What to do if an element is of other type? Answer: skip it
// - What to do with the counter if the element is skipped? Answer: don't increase the number of days
// - Use a counter for them in the for loop [1..len(arr)]
// - Use strings and then concatenate them to log them to the console
// - How to print 'day' when it is 1, otherwise 'days' when it is 2+? Answer: use ternary operator for this
// - Add ... between the elements and start and end of string
// - Add the ℃ on every element

/*
function printForecast(arr) {
  if arr not 'array' {
    // handle the argument
  }

  day = 1
  for every elem in arr {
    if elem is a 'number' {
      // handle the number
      // log the results on the same line
      day = day + 1
    }
    if elem not 'number' {
      // skip it
    }
  }
}
*/

/*
const printForecast = function (arr) {
  if (!Array.isArray(arr)) {
    console.error("Must pass an array as argument");
    return;
  }

  let day = 1;
  let forecastString = "";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      forecastString += `${day === 1 ? "... " : ""}${arr[i]}℃ in ${day} ${
        day === 1 ? "day" : "days"
      } ... `;
      day++;
    }
  }
  console.log(forecastString);
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/

///////////////////////////////////////
// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

/*
// Written by ChatGPT
function analyzeWorkWeek(workHours) {
  if (!Array.isArray(workHours) || workHours.length !== 7) {
    throw new Error(
      "Input must be an array of exactly 7 numbers representing daily work hours."
    );
  }

  const totalHours = workHours.reduce((sum, hours) => sum + hours, 0);
  const avgDailyHours = parseFloat((totalHours / workHours.length).toFixed(1));
  const maxHours = Math.max(...workHours);
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const mostWorkedDay = daysOfWeek[workHours.indexOf(maxHours)];
  const daysWorked = workHours.filter((hours) => hours > 0).length;
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    avgDailyHours,
    mostWorkedDay,
    daysWorked,
    isFullTime,
  };
}

// Example usage:
const workWeek = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(analyzeWorkWeek(workWeek));

const workWeek2 = [7.5, 8, 6.5, 0, 8.5];
console.log(analyzeWorkWeek(workWeek2));
*/
