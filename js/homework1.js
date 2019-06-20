var a = 'some',
  b = "Text";
c = a + b;
c += a;
console.log(c);

var name = "Marta";
var student;
student = name;
console.log(student);

var a = 11;
var b = 2;
var c = 36;
var d = 3;
var e;
e = c % d;
console.log(a % b);
console.log(e);

var a = "5",
  b = 2;
console.log(a + b);

var str = "Hello";
var a = 5;
console.log(str + a);

var a = 4;
var b = 6;
var c = ++a;
console.log(c);
var c = a++;
console.log(c);

var a = 6, b = 3;
//console.log(a > b);
if (a > b){
  console.log(a);
}
else{
  console.log(b);
}

var a = 3, b = 6;
if (a != b) {
  console.log(a);
}
else{
  console.log(b);
}

var a = 1, b = "";
if (a === b) {
  console.log(a);
}
else{
  console.log(b);
}

if ('B' > 'A') {
  console.log('B');
}

if ('a' > 'Z') {
  console.log('a');
}

var a = false, b = 0;
console.log(a >= b);

var a = 2 > 1 ? 'ok' : 'not';
console.log(a);

var a = 5, b = 3;
if ((a > b) && (a === b)) {
  console.log('Yes');
}
else {
  console.log('No');
}

// || (або) затинається на «правді»,
// && (і) затинається на «брехні» - має вищий пріоритет

console.log(true && 0 && ('a' < 'Z'));

console.log((a > b) || true || ('2' == 2) || (false == ''));
// (5>3 - true), or true, or (2=2 - true), or (0=0 - true)

console.log((a < b) && (0 == false));
// false and true = false

//???????????????????????????????????????????????
console.log(!(2 == 2) || (true && ''));
//false or false = false (зявляється пусто)