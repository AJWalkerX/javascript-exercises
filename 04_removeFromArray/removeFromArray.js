const removeFromArray = function(Array, ...items) {
    return Array.filter(x=> !items.includes(x));    
};

// Do not edit below this line
module.exports = removeFromArray;
