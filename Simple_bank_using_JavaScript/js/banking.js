// get input from the input field 
function getInput(input) {
    const inputId = document.getElementById(input);
    const inputValue = parseFloat(inputId.value);
    inputId.value = ' ';
    return inputValue;
}


// update the value thats we get from the inputfield
function updateField(depositeId, newDepositeValue) {

    const totalId = document.getElementById(depositeId);
    const oldValue = parseFloat(totalId.innerText);
    const newValue = oldValue + newDepositeValue;
    totalId.innerText = newValue;

}



// add deposite function 
document.getElementById('add-deposite').addEventListener('click', function () {
    const depositeValue = getInput('deposite-input');
    console.log(depositeValue);
    updateField('total-deposite', depositeValue);

});



// add withdraw function 

document.getElementById('add-withdraw').addEventListener('click', function () {
    const withdrawValue = getInput('withdraw-input');
    console.log(withdrawValue);
    updateField('total-withdraw', withdrawValue);
});

















// // add deposite value

// document.getElementById('add-deposite').addEventListener('click', function () {  //deposite button id = add-deposite

//     const totalDeposite = document.getElementById('total-deposite');
//     const addDeposite = document.getElementById('deposite-input');

//     totalDeposite.innerText = parseFloat(totalDeposite.innerText) + parseFloat(addDeposite.value);
//     addDeposite.value = " ";
//     //total balance

//     const totalBalance = document.getElementById('total-balance');
//     totalBalance.innerText = parseFloat(totalBalance.innerText) + parseFloat(totalDeposite.innerText);
// });





// // add witdraw

// document.getElementById('add-withdraw').addEventListener('click', function () {  //deposite button id = add-deposite

//     const totalWithdraw = document.getElementById('total-withdraw');
//     const addWithdraw = document.getElementById('withdraw-input');



//     totalWithdraw.innerText = parseFloat(totalWithdraw.innerText) + parseFloat(addWithdraw.value);

//     //Reduce From total balance
//     const totalBalance = document.getElementById('total-balance');
//     totalBalance.innerText = parseFloat(totalBalance.innerText) - parseFloat(totalWithdraw.innerText);

//     addWithdraw.value = " ";


// });
