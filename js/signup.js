var registerForm = document.getElementById('registerForm');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('emailAddress');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
var phoneNumber = document.getElementById('phoneNumber');
var dataFromStorage = JSON.parse(localStorage.getItem('userDataFromLocal'));
console.log(dataFromStorage);
if (dataFromStorage ==null) {
    var allUsers=[];
}
else {
    var allUsers=dataFromStorage;
}

registerForm.addEventListener('submit',function (e){
    e.preventDefault();
    var userData={
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value,
        confirmPassword:confirmPassword.value,
        phoneNumber:phoneNumber.value
    }
    function checkPassword() {
        if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return false;
        }
      
        return true;
      }
    allUsers.push(userData);
    console.log(allUsers);
    localStorage.setItem('userDataFromLocal',JSON.stringify(allUsers));
    
})