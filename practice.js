// 1) Multiply
function multiply(a, b) {
  return a * b;
}
console.log("1)", multiply(5, 4));



// 2) Reverse String
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log("2)", reverseString("Hello"));



// 3) Even or Odd
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log("3)", evenOrOdd(7));




// 4) Get Planet Name
function getPlanetName(id) {
  const planets = [
    "",
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
  ];
  return planets[id];
}
console.log("4)", getPlanetName(3));




// 5) Vowel Count
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log("5)", getCount("hello world"));



// 6) Secret Message
function greet(name) {
  return 'Hello, ${name}!';
}
console.log("6)", greet("Omkar"));



// 7) Divisible by x and y
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
console.log("7)", isDivisible(12, 3, 4));



// 8) Return Negative
function makeNegative(num) {
  return num < 0 ? num : -num;
}
console.log("8)", makeNegative(10));



// 9) Smallest Integer
function findSmallestInt(arr) {
  return Math.min(...arr);
}
console.log("9)", findSmallestInt([34, 15, 88, 2]));



// 10) Summation
function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) sum += i;
  return sum;
}
console.log("10)", summation(5));



// 11) Average of Array
function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log("11)", average([10, 20, 30]));



// 12) Rock Paper Scissors
function rps(p1, p2) {
  if (p1 === p2) return "Draw!";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
  ) {
    return "Player 1 won!";
  }
  return "Player 2 won!";
}
console.log("12)", rps("rock", "scissors"));



// 13) Remove Characters
function removeChar(str) {
  return str.slice(1, -1);
}
console.log("13)", removeChar("hello"));



// 14) Sum of Positive
function positiveSum(arr) {
  return arr.filter(n => n > 0).reduce((a, b) => a + b, 0);
}
console.log("14)", positiveSum([1, -2, 3, 4, -5]));



// 15) Math Operations
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+': return value1 + value2;
    case '-': return value1 - value2;
    case '*': return value1 * value2;
    case '/': return value1 / value2;
  }
}
console.log("15)", basicOp('+', 4, 7));



// 16) String Repeat
function repeatStr(n, s) {
  return s.repeat(n);
}
console.log("16)", repeatStr(3, "Hi "));



// 17) String to Array
function stringToArray(str) {
  return str.split(' ');
}
console.log("17)", stringToArray("I love JavaScript"));



// 18) Remove Spaces
function noSpace(str) {
  return str.replace(/\s/g, '');
}
console.log("18)", noSpace("H e l l o"));



// 19) Lost Without a Map
function maps(arr) {
  return arr.map(x => x * 2);
}
console.log("19)", maps([1, 2, 3]));



// 20) Hero vs Dragons
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}
console.log("20)", hero(10, 5));



// 21) Array Addition
function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
console.log("21)", sumArray([1, 2, 3, 4]));



// 22) Century From Year
function century(year) {
  return Math.ceil(year / 100);
}
console.log("22)", century(1905));



// 23) Cat Years Dog Years
function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 15;
  let dogYears = 15;

  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }

  if (humanYears > 2) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
}
console.log("23)", humanYearsCatYearsDogYears(3));



// 24) Total Points
function points(games) {
  let total = 0;

  for (let game of games) {
    let [x, y] = game.split(':').map(Number);

    if (x > y) total += 3;
    else if (x === y) total += 1;
  }

  return total;
}
console.log("24)", points(["1:0", "2:2", "0:1"]));



// 25) Counting Sheep
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}
console.log("25)", countSheeps([true, true, false, true]));