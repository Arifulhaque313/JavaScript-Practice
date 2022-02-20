
// add deposite value

document.getElementById('add-deposite').addEventListener('click', function () {  //deposite button id = add-deposite

    const totalDeposite = document.getElementById('total-deposite');
    const addDeposite = document.getElementById('deposite-input');

    totalDeposite.innerText = parseFloat(totalDeposite.innerText) + parseFloat(addDeposite.value);
    addDeposite.value = " ";
    //total balance

    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = parseFloat(totalBalance.innerText) + parseFloat(totalDeposite.innerText);
});





// add witdraw

document.getElementById('add-withdraw').addEventListener('click', function () {  //deposite button id = add-deposite

    const totalWithdraw = document.getElementById('total-withdraw');
    const addWithdraw = document.getElementById('withdraw-input');



    totalWithdraw.innerText = parseFloat(totalWithdraw.innerText) + parseFloat(addWithdraw.value);

    //Reduce From total balance 
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = parseFloat(totalBalance.innerText) - parseFloat(totalWithdraw.innerText);

    addWithdraw.value = " ";


});
