function clicked() {
    var user = document.getElementById('username');
    var password = document.getElementById('password');
    var coruser = "test";
    var corpass = "123";
    if (user.value == coruser) {
        
        if (password.value == corpass) {
            Window.alert("you are logged in" + user.value);
        }
        else {
            window.alert("incorrect username or password");
        }
    }
    else {
        window.alert("incorrect username or password");
    }
}
