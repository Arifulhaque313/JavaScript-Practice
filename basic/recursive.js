function sum(i) {

    if (i == 1) {
        return 1;
    }

    else {
        return sum(i - 1) + i;
    }



}


console.log(sum(10));


function factorial(i) {

    if (i == 1) {
        return 1;

    }

    else {
        return factorial(i - 1) * i;
    }
}


console.log((factorial(5)));