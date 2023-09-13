const isPrime = (n) => {
  let flag = false;
  let i = 2;

  while (!flag && i <= n - 1) {
    if (n % i === 0) {
      flag = true;
    }
    i++;
  }
  return !flag;
};

const getLargestPrime = (n) => {
  let i = n - 1;
  let flag = false;

  while (!flag && i >= 2) {
    if (isPrime(i)) {
      if (n % i === 0) {
        flag = true;
      } else {
        i--;
      }
    } else {
      i--;
    }
  }
  return i;
};


// console.log(getLargestPrime(7));

function largestPrimeFactor(n) {
  let i = 2;
  while (i * i < n) {
    while (n % i === 0) {
      n /= i;
    }
    i++;
  }
  return n;
}

// console.log(largestPrimeFactor(600851475143));

const numbers = [2, 5, 7, 3, 4, 2, 6, 9, 7, 2];
const uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  let count = 0;
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      count++;
    }
  }
  if (count === 1) {
    uniqueNumbers.push(numbers[i]);
  }
}

// console.log(uniqueNumbers);

// Похожие элементы A*B доработать повторы

const A = [10, 10, 15, 5, 6];
const B = [3, 10, 6, 6, 18, 32];

const copyArrA = [...new Set([...A])];
const copyArrB = [...new Set([...B])];

const arr = [];

for (let i = 0; i < copyArrA.length; i++) {
  let count = 0;
  for (let j = 0; j < copyArrB.length; j++) {
    if (copyArrA[i] === copyArrB[j]) {
      count++;
    }
  }
  if (count === 1) {
    arr.push(copyArrA[i]);
  }
}

// console.log(arr);

// Элементы из массива А, не включая совпадения с массивом В, A-B

const A1 = [10, 15, 5, 6];
const B1 = [3, 10, 6, 18, 32];

const arr1 = [];

for (let i = 0; i < A1.length; i++) {
  let count = 1;
  for (let j = 0; j < B1.length; j++) {
    if (B1[j] === A1[i]) {
      count++;
    }
  }
  if (count === 1) {
    arr1.push(A1[i]);
  }
}

// console.log(arr1);

// A+B

const A2 = [10, 15, 5, 6];
const B2 = [3, 10, 6, 18, 32];

const arr2 = [...new Set([...A2, ...B2])];

// console.log(arr2);

// Палиндром умножения 3х значных чисел

const isPalidrom = (n) => {
  const rightString = n.toString();
  const reverseString = n.toString().split('').reverse().join('');
  return rightString === reverseString;
};


const getLargestPalindrom = (digit) => {
  let flag = true;
  let limit = 0;

  for (let i = 1; i <= digit; i++) {
    limit = limit + (9 * (10 ** i));
  }
  let i = limit;
  let minVolume = 10 ** (digit - 1);
  let result;

  while (flag && i >= minVolume) {
    let j = limit;
    while (flag && j > minVolume) {
      if (isPalidrom(i * j)) {
        flag = false;
        result = i * j;
        // console.log(`${i} * ${j}`);
      }
      j--;
    }
    i--;
  }

  return result;
};

// console.log(getLargestPalindrom(6));

// 2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.

// Какое самое маленькое число делится нацело на все числа от 1 до 20?

const getSmallestDeviderByEachOfNumbersofRange = (start, end) => {
  if (start > end) {
    [start, end] = [end, start]; // деструктуризация, поменять значения местами
  }

  let flag = true;
  let n = end;

  while (flag) {
    let flagDevider = true;
    for (let i = start; i <= end; i++) {
      if (n % i !== 0) {
        flagDevider = false;
      }
    }
    if (!flagDevider) {
      n++;
    } else {
      flag = false;
    }
  }
  return n;
};

// console.log(getSmallestDeviderByEachOfNumbersofRange(1, 20));


// Разность между суммой квадратов и квадратом суммы

let sum1 = 0;
let sum2 = 0;


const squareSum = (start, end) => {
  for (let i = start; i <= end; i++) {
    sum1 = sum1 + (i ** 2);
    sum2 = sum2 + i;
  }
  return (sum2 ** 2) - sum1;
};
// console.log(squareSum(1, 20));


// const isPrime = (n) => {
//   let flag = false;
//   let i = 2;

//   while (!flag && i <= n - 1) {
//     if (n % i === 0) {
//       flag = true;
//     }
//     i++;
//   }
//   return !flag;
// };


