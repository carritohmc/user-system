function captureInput() {

    let userName= $("#txtLoginName").val();
    let passWord= $("#txtPassword").val();

    let usersList=readUsers();


for (let i=0;i<usersList.length;i++) {
    let user=usersList[i];   

    if (user.email===userName && user.password===passWord) {
        window.location="users.html";
        break;
    } else {
        $("#txtLoginName").css({'background-color': 'rgb(250, 163, 163)'});
        $("#txtPassword").css({'background-color': 'rgb(250, 163, 163)'});
  

        alertDiv.innerHTML =`<div class ="alert">
       Incorrect credentials
        </div>`
        setTimeout(function(){
            alertDiv.innerHTML ="";
        },3000)

    }
    


}


}

function init(){
    $("#btnLogin").click(captureInput);

}

window.onload=init; 


