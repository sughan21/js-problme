"use strict";

// problem-1

const array = ["red", "green", "white", "black"];
let finalstr = "";
for (let i = 0; i < array.length; i += 1) {
  if (i === array.length - 1) {
    finalstr += array[i];
  } else {
    finalstr = finalstr + array[i] + ",";
  }
}

console.log(finalstr);

// problem-2

const difference = function (arr1, arr2) {
  let uniqueArray = [];
  uniqueArray = uniqueArray.concat(comparingArray(arr1, arr2));
  uniqueArray = uniqueArray.concat(comparingArray(arr2, arr1));
  return uniqueArray;
};

const comparingArray = function (arr1, arr2) {
  let originalArray = [];
  for (let i = 0; i < arr1.length; i++) {
    let count = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] === arr2[j]) {
        count += 1;
      }
    }
    if (count === 0) {
      originalArray.push(arr1[i]);
    }
  }
  return originalArray;
};

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// problem-3

const unzip = function (arr1) {
  let finalArray = [];
  let strArr = [],
    numArr = [],
    booleanArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j += 1) {
      if (typeof arr1[i][j] === "string") {
        strArr.push(arr1[i][j]);
      } else if (typeof arr1[i][j] === "number") {
        numArr.push(arr1[i][j]);
      } else if (typeof arr1[i][j] === "boolean") {
        booleanArr.push(arr1[i][j]);
      }
    }
  }
  finalArray.push(strArr, numArr, booleanArr);
  console.log(finalArray);
};

unzip([
  ["a", 1, true],
  ["b", 2, false],
]);
unzip([
  ["a", 1, true],
  ["b", 2],
]);

// problem-4

const frequentItem = function (arr) {
  let repeatedNumber = 0;
  let repeatedCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    if (repeatedCount === 0) {
      repeatedCount = count;
      repeatedNumber = arr[i];
    } else if (count > repeatedCount) {
      repeatedCount = count;
      repeatedNumber = arr[i];
    }
  }
  return `${repeatedNumber} (${repeatedCount}times)`;
};

console.log(frequentItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

// problem-5

const uniqueValue = function (arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let flag = false;
    for (let j = 0; j < finalArr.length; j++) {
      if (arr[i] === finalArr[j]) {
        flag = true;
        count += 1;
      }
    }
    if (count === 0 && flag === false) {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
};

console.log(uniqueValue([1, 2, 2, 3, 4, 4, 5]));
console.log(uniqueValue([1, 2, 3, 4, 5]));
console.log(uniqueValue([1, -2, -2, 3, 4, -5, -6, -5]));

// problem-6

class cyclinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  volume() {
    return Math.PI * this.radius ** 2 * this.height;
  }
}
let cyclinder1 = new cyclinder(5, 15);
console.log(cyclinder1.volume().toFixed(4));

// problem - 7

let objLength = 0;
let obj = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
console.log(obj);
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    objLength += 1;
  }
}
console.log(objLength);

// problem - 8

const bubbleAlgorithm = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleAlgorithm([6, 4, 0, 3, -2, 1]));
