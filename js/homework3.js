// task1
var min = 5;
var max = 15;
var random = Math.floor(Math.random() * (max - min + 1)) + min;

function getNumber(min, max) {
    if (random % 2 == 0) {
        return ('Random number is even');
    } else {
        return ('Random number is odd');
    }
}
console.log(getNumber());


// task2
var fruits = ['Apple', 'banana', 'pear', 'plum', 'peach', 'apricot', 'avocado'];
for (var fruit of fruits) {
    console.log(fruit);
}

var tmp = '';
for (var fruit of fruits) {
    if (fruit[0] == fruit[0].toUpperCase()) {
        tmp += fruit;
    }
}
console.log(tmp);



// task3
function strings(str1, str2) {
    console.log(strings());
}
var str1 = 'This is the first line.';
var str2 = 'And this is the second line.';

if (str1.length > str2.length) {
    console.log('This is the first line.');
} else if (str1.length < str2.length) {
    console.log('This is the second line.');
} else {
    console.log('Both lines of the same length');
}