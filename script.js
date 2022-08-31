let arr = [
  {name: 'Champ', age: 18, gender: 'male'},
  {name: 'Ali', age: 17, gender: 'male'},
  {name: 'Saad', age: 16, gender: 'male'},
  {name: 'Uzair', age: 15, gender: 'male'},
  {name: 'Asher', age: 14, gender: 'male'},
  {name: 'Chander', age: 13, gender: 'male'},
  {name: 'Zain', age: 12, gender: 'male'},
  {name: 'Affan', age: 4, gender: 'male'},
  {name: 'Bilal', age: 23, gender: 'male'},
  {name: 'Umar', age: 5, gender: 'male'},
  {name: 'Imaiel', age: 3, gender: 'male'},
  {name: 'Fahad', age: 2, gender: 'male'},
];

let data = arr.map((item) => {
    return `
        <div class="cell">
            <p>${item.name}</p>
            <p>${item.age}</p>
            <p>${item.gender}</p>
        </div>
    `;
})


var values = "";

for (let arg of data){
    values += arg;
}

document.getElementById("body").innerHTML = values;
