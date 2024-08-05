function validateLoginForm(event) {
    event.preventDefault();

    var loginEmail = document.getElementById("email").value;
    var loginPassword = document.getElementById("password").value;

    if (loginEmail === signupEmail && loginPassword === signupPassword) {
        document.getElementById("loginSuccessMessage").style.display = "block";
        document.getElementById("invalidCredentialsMessage").style.display = "none";
    } else {
        document.getElementById("invalidCredentialsMessage").style.display = "block";
        document.getElementById("loginSuccessMessage").style.display = "none";
    }

    return true;
}


