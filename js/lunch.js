let food = [
  { Dag: "Måndag", Normal: "Pyttipanna, serveras med rödbetor", Vegetariskt: "Vegetarisk pytt, serveras med rödbetor" },
  { Dag: "Tisdag", Normal: "Pasta Bolognese, serveras med riven ost", Vegetariskt: "Linssoppa, serveras med bröd och pålägg" },
  { Dag: "Onsdag", Normal: "Potatisbullar, serveras med keso och lingonsylt", Vegetariskt: ""},
  { Dag: "Torsdag", Normal: "Panerad fisk, serveras med kokt potatis och sås", Vegetariskt: "Rödbetsbiffar, serveras med kokt potatis och kall sås" },
  { Dag: "Fredag", Normal: "Färsbiffar, serveras med bulgur och tomatsalsa", Vegetariskt: "Sojabiffar, serveras med bulgur och tomatsalsa" },
  { Dag: "Lördag", Normal: "Stängt", Vegetariskt: ""},
  { Dag: "Söndag", Normal: "Stängt", Vegetariskt: ""} //lämnar blank för att aligna rätt 
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