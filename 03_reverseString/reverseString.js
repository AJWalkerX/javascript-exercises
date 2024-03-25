const reverseString = function(string) {
    let reversedString = "";
    let lengthOfString = string.length;
    let stringToArray = new Array();
    
    for(let i = 0; i < lengthOfString; i++){
        let char = string.charAt(i);
        stringToArray.push(char);
    }
    
    let reverseArray = stringToArray.reverse();
   
    for(let i = 0; i < lengthOfString; i++){
        reversedString += reverseArray[i];
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
