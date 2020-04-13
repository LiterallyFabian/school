let food = [
  { Dag: "M�ndag", Normal: "Pyttipanna, serveras med r�dbetor", Vegetariskt: "Vegetarisk pytt, serveras med r�dbetor" },
  { Dag: "Tisdag", Normal: "Pasta Bolognese, serveras med riven ost", Vegetariskt: "Linssoppa, serveras med br�d och p�l�gg" },
  { Dag: "Onsdag", Normal: "Potatisbullar, serveras med keso och lingonsylt", Vegetariskt: ""},
  { Dag: "Torsdag", Normal: "Panerad fisk, serveras med kokt potatis och s�s", Vegetariskt: "R�dbetsbiffar, serveras med kokt potatis och kall s�s" },
  { Dag: "Fredag", Normal: "F�rsbiffar, serveras med bulgur och tomatsalsa", Vegetariskt: "Sojabiffar, serveras med bulgur och tomatsalsa" },
  { Dag: "L�rdag", Normal: "St�ngt", Vegetariskt: ""},
  { Dag: "S�ndag", Normal: "St�ngt", Vegetariskt: ""} //l�mnar blank f�r att aligna r�tt 
];

function generateTableHead(table, data) {

  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(food[0]);
generateTableHead(table, data);
generateTable(table, food);