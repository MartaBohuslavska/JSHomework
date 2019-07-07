// task1
// Знайти в об’єкті city, місто з найбільшою кількістю населення
var city = {
  "Zarephath": 728375,
  "Reinerton": 864402,
  "Spelter": 340533,
  "Henrietta": 932557,
  "Dyckesville": 421758,
  "Yettem": 250492,
  "Gracey": 551885,
  "Floris": 216435,
  "Davenport": 290139,
  "Tioga": 653031
}

var sortableCity = [];
for (var place in city) {
  sortableCity.push([place, city[place]]);
}
sortableCity.sort(function(a, b) {
  return b[1] - a[1];
});
console.log(sortableCity [0] [0]);

// the second way
citySorted = Object.keys(city).sort(function(a, b) {
  return city[b] - city[a]
});
console.log(citySorted[0]);


// the third way
var max = 0;
var maxCity = '';
for (var key in city) {
  if(city[key] > max) {
    max = city[key];
    maxCity = key;
  }
}
console.log(maxCity);


// task2
class Worker {
  constructor(name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

var worker = new Worker ('Ivan', 'Ivanov', 10, 31);
console.log (worker.name);
console.log (worker.surname); 
console.log (worker.rate); 
console.log (worker.days); 
console.log (worker.getSalary ());