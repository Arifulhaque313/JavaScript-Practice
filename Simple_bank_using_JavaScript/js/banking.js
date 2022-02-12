// add deposite value 

document.getElementById('add-deposite').addEventListener('click', function () {  //deposite button id = add-deposite

    const totalDeposite = document.getElementById('total-deposite');
    const addDeposite = document.getElementById('deposite-input');

    totalDeposite.innerText = addDeposite.value;
});


// add witdraw 

document.getElementById('add-withdraw').addEventListener('click', function () {  //deposite button id = add-deposite

    const totalWithdraw = document.getElementById('total-withdraw');
    const addWithdraw = document.getElementById('withdraw-input');

    totalWithdraw.innerText = addWithdraw.value;
});
