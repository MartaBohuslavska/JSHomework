//Є об’єкт який складається з масиву і він описує поля форми,
// де 1 позиція - назва поля (name)
// 2 - тип поля (type)
// 3 - значення поля (value)
// Завдання створити і вставити за допомогою javascript поля форми в <form class=”form”></form>

var fields = {
    field_1: ["firstName", "text", "Іван"],
    field_2: ["lastName", "text", "Шевченко"],
    field_3: ["birthday", "date", "1993-07-22"],
    field_4: ["position", "text", "Front-end"],
    field_5: ["experience", "number", "2"],
}

var form = document.querySelector('.login');

for (var key in fields) {
    var div = document.createElement('div');
    var input = document.createElement('input');
    input.setAttribute('name', fields[key][0]);
    input.setAttribute('type', fields[key][1]);
    input.value = fields[key][2]
    div.appendChild(input);
    form.appendChild(div)
}