var isLogin = JSON.parse(localStorage.getItem('isLoggedIn'));


if (isLogin == false){
    alert('please login first');
    window.location.href = 'login.html';
}
else{
    console.log(isLogin);
}