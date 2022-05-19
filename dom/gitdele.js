const form = document.getElementById("form");
// form.style.backgroundColor = "red";
form.classList.add("form");

// focus effect 
document.getElementById("input").addEventListener('focus', function () {
    document.body.style.backgroundColor = "green";
});

// blue effect 
document.getElementById("input").addEventListener('blur', function () {
    document.body.style.backgroundColor = "yellow";
});

const btn = document.getElementById("btn");


// get input from form 
document.getElementById("input").addEventListener('keyup', function (event) {
    console.log(event.target.value);

    if (event.target.value == "delete") {
        btn.removeAttribute('disabled');
    }

    else {
        btn.setAttribute('disabled', true);
    }

});