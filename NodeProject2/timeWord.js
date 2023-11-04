let hours = {
  0: "Twelve",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
};

let tenthMin = {
  0: "o'",
  1: "ten",
  2: "twenty",
  3: "thirty",
  4: "fourty",
  5: "fifty",
};
let tens = {
  0: "ten",
  1: "eleven",
  2: "twelve",
  3: "thirteen",
  4: "fourteen",
  5: "fifteen",
  6: "sixteen",
  7: "seventeen",
  8: "eighteen",
  9: "nineteen",
};

let minutes = {
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

function timeWord(time) {
  if (time === "00:00") {
    return "midnight";
  } else if (time === "12:00") {
    return "noon";
  } else if (time.slice(3) == "00") {
    let hour = getHour(time);
    let converted;
    hour < 12
      ? (converted = `${hour} o'clock am `)
      : (converted = `${hour} o'clock pm`);
    return converted;
  }
  return createWord(time);
}

function getHour(time) {
  let hour = time.slice(0, 2);
  hour = Number(hour);
  hour > 12 ? (hour -= 12) : hour;

  return hours[hour];
}

console.log(timeWord("21:00"));

function getTenthMin(time) {
  let min = time.slice(3, 4);
  min = Number(min);

  let word = tenthMin[min];

  if (word === "ten") {
    return findTen(time);
  }
  return word;
}

function findTen(time) {
  let min = time.slice(4);
  min = Number(min);
  return tens[min];
}

function getMin(time) {
  let min = time.slice(4);
  min = Number(min);
  return minutes[min];
}

function createWord(time) {
  let hourWord = getHour(time);
  let tenthWord = getTenthMin(time);
  let minWord = "";

  if (!Object.values(tens).includes(tenthWord)) {
    minWord = getMin(time);
  }

  let hour = time.slice(0, 2);
  if (Number(hour) < 12) {
    return `${hourWord} ${tenthWord} ${minWord} am`;
  } else {
    return `${hourWord} ${tenthWord} ${minWord} pm`;
  }
}

module.exports = {
  timeWord: timeWord,
  getHour: getHour,
  getTenthMin: getTenthMin,
  getMin: getMin,
  createWord: createWord,
};
