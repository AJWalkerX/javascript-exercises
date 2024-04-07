const sumAll = function(num1, num2) {
    let sum = 0;
    let jokerNumber
    if (num1 > num2){
        jokerNumber = num2
        num2 = num1
        num1 = jokerNumber
    }
    else if(num1 < 0 || num2 < 0){
        return "ERROR";
    }
    else if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    while(num1 <= num2){
        sum += num1;
        num1++
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
