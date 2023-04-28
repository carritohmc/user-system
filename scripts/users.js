
function displayUsers() {
  let userDisplay="";
  let users = readUsers();
  let table = document.getElementById("tableUsers");

  while (table.rows.length > 1) {
      table.deleteRow(1);
    }
    let headerRow = table.insertRow(0);
  for (let i = 0; i < users.length; i++) {
      let user = users[i];
      let row = table.insertRow(0 + 1);
      let values = [user.email, user.first, user.last, user.age, user.phone, user.address, user.payment];
  
      for (let j = 0; j < values.length; j++) {
        let cell = row.insertCell(j);
        cell.innerHTML = values[j];
      }
  }

  DIV.innerHTML=userDisplay;
    }




function init() {
console.log("listing the users")
let usersList = readUsers();
//console.log(usersList);
displayUsers();
}


window.onload=init;
