// first problem

function seerToMon(seer) {
    var datatype = typeof seer;

    if (seer > 0 && datatype == "number") { //check datatype and check integer number
        var mon = seer / 40;
    } else {
        console.log("Please insert number which is greater than 0");
    }

    return mon;
}

console.log(seerToMon(80));



// second problem

function totalSales(numOfShirt, numOfpant, numOfshoes) {
    var shirtPrice = 100;
    var pantPrice = 200;
    var shoePrice = 500;

    if (typeof numOfShirt == "number" && typeof numOfpant == "number" && typeof numOfshoes == "number"
        && numOfShirt >= 0 && numOfpant >= 0 && numOfshoes >= 0) {

        var totalSale = shirtPrice * numOfShirt + pantPrice * numOfpant + shoePrice * numOfshoes;
    }

    else {
        console.log("Insert positive number");
    }

    return totalSale;
}

console.log(totalSales(1, 2, 3));



// Third Problem 

function deliveryCost(amountOfProduct) {
    var totalCost = 0;
    if (typeof amountOfProduct == "number" && amountOfProduct > 0) {
        for (var i = 1; i <= amountOfProduct; i++) {
            if (i <= 100) {
                totalCost = totalCost + 100;
            }
            else if (i > 100 && i <= 200) {
                totalCost = totalCost + 80;
            }
            else if (i > 200) {
                totalCost = totalCost + 50;
            }
        }
    }
    else {
        console.log("Please insert a positive number");
    }
    return totalCost;
}


console.log(deliveryCost(205));



// fourth problem 

function perfectFriend(nameOfFriends) {
    var friendName = nameOfFriends;

    for (var i = 0; i < friendName.length; i++) {
        if (friendName[i].length == 5) {
            var perfectfriend = friendName[i]
            break;
        }
    }

    return perfectfriend;

}


console.log(perfectFriend(["arif", "ariful", "akash", "rifat"]));
