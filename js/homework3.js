// task1
var min = 5;
var max = 15;
var random = Math.floor(Math.random() * (max - min + 1)) + min;
function getNumber(min, max){
  if (random%2 == 0){
    return ('Random number is even');
  } else {
    return ('Random number is odd');
  }
}
console.log(getNumber());


// task2
var fruits = ['Apple', 'banana', 'pear', 'plum', 'peach', 'apricot', 'avocado'];
for (var fruit of fruits){
  console.log(fruit);
}
console.log( fruits.toString() );
console.log( fruit[0].toUpperCase() );
// ... і об’єднати в строку в якій кожне слово з великої літери
// не знаю як далі

// task3 (працює неправильно!!! - завжди 2 строка більша)
var str1 = 'This is the first line.';
var str2 = 'And this is the second line.';

function strings (str1, str2) {
  console.log(strings());
}

if ( str1.length > str2.length ) {
  function strings (str1, str2){
    return ('This is the second line.');
  }
  console.log(str1);
}
else if ( str1.length < str2.length ) {
  function strings (str1, str2){
    return ('This is the second line.');
  }
  console.log(str2);
}
else{
  function strings (str1, str2){
    return ('Both lines of the same length');
  }
  console.log('Both lines of the same length');
}

