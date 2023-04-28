const KEY = 'users';

function saveUser(user){
    let oldUsers = readUsers();
    oldUsers.push(user);
    console.log(oldUsers);
    let val =JSON.stringify(oldUsers);

    console.log(val);
    localStorage.setItem(KEY, val);

}

function readUsers(){
    let users = localStorage.getItem(KEY);
    if (!users){
        console.log("no users");
        return [];
    }
    else {
    console.log("we have users");
    let objList = JSON.parse(users);
    return objList;
    }

}