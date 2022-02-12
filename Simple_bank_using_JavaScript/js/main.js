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


// add deposite value 

document.getElementById('add-deposite').addEventListener('click', function () {  //deposite button id = add-deposite
    // const totalDeposite = document.getElementById('total-deposite');

    // const addDeposite = document.getElementById('dedeposite-input');
    console.log("addDepositvalue");



});





