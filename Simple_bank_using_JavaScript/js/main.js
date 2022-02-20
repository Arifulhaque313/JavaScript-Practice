document.getElementById('submit').addEventListener('click', function () {

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (email.value == "asajib7654@gmail.com" && password.value == "password") {
        alert("Valid user")
        window.location.href = "banking.html";
    }
    else {
        alert("Invalid Email and password")
        window.location.href = "index.html";
    }

});







