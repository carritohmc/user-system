
function displayUsers(usersArrays) {
let tableRow="";

for(let i=0; i <usersArrays.length; i++) {
  let user = usersArrays[i];

tableRow=`
<tr>
<td>${user.email} </td>
<td>${user.first}</td>
<td>${user.last}</td>
<td>${user.age}</td>
<td>${user.address} </td>
<td>${user.phone} </td>
<td>${user.payment} </td>
<td style="background-color:${user.color}"></td>
</tr>
`;

$("#tableUsers").append(tableRow);
}


}


    




function init() {
console.log("listing the users")
let usersList = readUsers();
console.log(usersList);
displayUsers(usersList);

}


window.onload=init;

