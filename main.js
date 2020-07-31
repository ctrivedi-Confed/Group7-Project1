// validating user inputs in login and register forms
function validateRegisterForm(e) {
    e.preventDefault();

    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;
    var error = document.getElementById("error");
    var stn = document.getElementById("stn").value;

    if (pass2 !== pass) {
        error.innerHTML = "The passwords must match.";
    } else if (pass.length < 8) {
        error.innerHTML = "Password must be at least 8 characters long.";
    } else if(!stn.match(/^\d+/)) {
        error.innerHTML = "Street number must be a number.";
    } else {
        window.location.href = "index.html";
    }
}