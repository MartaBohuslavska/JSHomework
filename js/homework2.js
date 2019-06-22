// task1
var result = prompt("Input your digit", 0);
if (result > 0) {
  console.log('1');
} else if (result < 0) {
  console.log('-1');
} else {
  console.log('0');
}

var a = 1;
var n;
if (a > 0) {
  n = true;
} else {
  n = false;
}
var n = a > 0 ? true : false;

// task2
var num;
switch (num) {
  case 1:
    console.log('a');
    break;
  case 2:
    console.log('b');
    break;
  case 3:
    console.log('c');
    break;
  default:
    console.log('z');
}

// task3
var num = "";
for (i = 1; i <= 9; i++) {
  num += i ** 2 + " ";
}
console.log(num);

//або (відображення квадратів чисел у вертикальному порядку)
// for (i = 1; i <= 9; i++) {
//   console.log(i ** 2);
// }

// task4
var num = "";
var i = 1;
while (i <= 9) {
  num += i ** 2 + " ";
  i++;
}
console.log(num);

//або (відображення квадратів чисел у вертикальному порядку)
// var i = 1;
// while (i <= 9) {
//   console.log(i ** 2);
//   i++;
// }

// task5
function twoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return 'The numbers are equal';
  }
}

var num1 = 9;
var num2 = 12;

var result = twoNumbers(num1, num2);
alert(result);