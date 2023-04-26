//create user constructor
class User {
    constructor(email, password, first, last, age, phone, address,payment, color) {
        this.email = email;
        this.password = password;
        this.first = first;
        this.last = last;
        this.age = age;
        this.phone = phone;
        this.address = address;
        this.payment=payment;
        this.color=color; 
    }
}


function validation(user){

    let valid=true;

    if(user.email=="") {
        valid=false;
        alert("Please enter an email");
    }
    if(user.password=="") {
        valid=false;
        alert("Please enter a password");
    }
    if(user.payment=="") {
        valid=false;
        alert("Please enter a valid payment method");
    }



    return valid; 
}


//create the register function
function register(){
    let inputEmail =$("#txtEmail").val();
    let inputPassword =$("#txtPassword").val();
    let inputFirst =$("#txtFirstName").val();
    let inputLast =$("#txtLastName").val();
    let inputAge =$("#txtAge").val();
    let inputPhone=$("#txtPhone").val();
    let inputAddress=$("#txtAddress").val();
    let inputPayment =$("#selPayment").val();
    let inputColor=$("#txtColor").val();


    let newUser= new User(inputEmail, inputPassword, inputFirst,inputLast, inputAge, inputPhone, inputAddress, inputPayment, inputColor);

     $('input').val("");
    validation(newUser);
    console.log(newUser);
}

