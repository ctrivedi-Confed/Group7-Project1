// validating user inputs in login and register forms
function validateLoginForm(e) {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    if (email === "" || pass === "") {
        document.getElementById("error").innerHTML = "Please fill out all the fields and enter valid email address.";
    } else {
        window.location.href = "index.html";
    }
}