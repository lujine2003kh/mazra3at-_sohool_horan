var registerForm = document.getElementById('form');
var userEmail = document.getElementById('emailID')
var password = document.getElementById('passwordID')

form.addEventListener('submit',function (e){
    e.preventDefault();
    var allUsers = JSON.parse(localStorage.getItem('userDataFromLocal'));
    
    for (var i = 0 ; i<allUsers.length;i++){
        if(allUsers[i].userEmail == userEmail.value && allUsers[i].password == password.value){
            console.log('email already exists');
            alert('login successful');
            localStorage.setItem('isLoggedIn',true);
            window.location.href='index.html';
        }
        else {
            console.log('email do not exists');
            alert('login failed check your email and password');
        }
    }
})