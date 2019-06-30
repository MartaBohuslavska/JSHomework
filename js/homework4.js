//task1
//додавати елементи в масив через метод prompt() поки користувавч ненатисне cancel
var arr = [];
for (i = 0; true; i++){
  var num = prompt('Input your digit', '0');
  if (num == null){
    break;
  }
  else {
    arr.push(num);
  }
}
console.log(arr);


//task2
//знайти суму елементів двовимірного масиву
var numbers = [ [12, 11, 16, 17], [2, 6, 5, 8, 8], [254, 122, 110] ];
var sum = 0;
for (num of numbers){
  sum += num.length;
}
console.log(sum);


//task3
//розбити строку lorem по розділювачу ‘ ’ і вивести в консоль слова довжиною більше 5
var str = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure eligendi officiis ducimus voluptate totam, vero animi itaque id placeat dolore recusandae libero iste veniam ipsa optio ullam nam cupiditate inventore?';
strArr = str.split(' ');
for (var word of strArr) {
    if (word.length > 5) {
        console.log(word);
    }
}


//task4
//дано масив [1, 9, 22, 7, 6] додати число 8 після 22
var arr = [1, 9, 22, 7, 6];
console.log(arr);
arr.splice(3, 0, 8); 
console.log(arr);


//task5 (ніби-то виконано, але без використання функції, як потрібно було)
//написати функцію randomNumber(number) яка наповнює масив
//випадковими числами від 0 до 100, де number довжина масиву
var min = 0;
var max = 100;
var mas = new Array();
var n = 2, m = 3;

for(i = 0; i < n; i++)
mas[i] = new Array (m);
for(i = 0; i < n; i++)
for(j = 0; j < m; j++)
mas[i][j]= Math.floor ( Math.random() * ( max-min + 1 ) ) + min; 

console.log( mas );


//task6
//перевірити чи в масивові є число, яке вводиться через prompt()
var mas1 = [2, 5, prompt(), 8, 10];
console.log(mas1.indexOf(prompt()));
var mas2 = [2, 5, 12, 8, 10];
console.log(mas2.indexOf(prompt()));


//task7
//за допомогою методу forEach знайти найдовше слово в строці lorem
var str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia beatae voluptate quos quod, consectetur saepe nihil consequatur ipsa animi sint ipsam, enim quasi eveniet dolorem cumque libero modi. Nisi, voluptatum.';
var arr = str.split(' ');
arr.forEach(function(item, i, arr) {
   arr.sort(function(a, b){
     return b.length - a.length;
   });
   console.log(arr [0] + ' - найдовше слово в строці lorem');
});

//task8
//за допомогою методу map створити масив квадратів масиву arr = [8, 6, 12, 10];
var numbers = [8, 6, 12, 10];
var numbersInTheSquare = numbers.map(function(number) {
  return number ** 2;
});
console.log(numbersInTheSquare);












