var registerForm = document.getElementById('form');
var userEmail = document.getElementById('emailID')
var password = document.getElementById('passwordID')

form.addEventListener('submit',function (e){
    e.preventDefault();
    var allUsers = JSON.parse(localStorage.getItem('userDataFromLocal'));
    var isExisted=false;
    for (var i = 0 ; i<allUsers.length;i++){
        console.log("login");
        console.log(allUsers[i]);
        if(allUsers[i].email == userEmail.value && allUsers[i].password == password.value){
            console.log('email already exists');
            alert('login successful');
            localStorage.setItem('isLoggedIn',true);
            isExisted=true;
            window.location.href='index.html';
        }
        else {
            console.log('email do not exists');
        }

    }
    if(isExisted==false){
        alert("user does not exist");
    }
})