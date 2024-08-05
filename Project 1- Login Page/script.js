
function validateForm(event) {
    event.preventDefault();

    var username = document.forms["signupForm"]["username"].value;
    var email = document.forms["signupForm"]["email"].value;
    var mobile = document.forms["signupForm"]["mobile"].value;
    var password = document.forms["signupForm"]["password"].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var age = document.forms["signupForm"]["age"].value;
    var terms = document.forms["signupForm"]["terms"].checked;

    if (username == "" || email == "" || mobile == "" || password == "" || !gender || age == "") {
        alert("Please fill in all fields.");
        return false;
    }
    else if (!terms) {
        alert("Please agree to the terms and conditions.");
        return false;
    }
    else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        alert("Username must contain only letters and numbers.");
        return false;
    }
    else if (!/^\d+$/.test(mobile)) {
        alert("Mobile number must contain only numbers.");
        return false;
    }
    
    document.getElementById("successMessage").style.display = "block";
    return true;
}