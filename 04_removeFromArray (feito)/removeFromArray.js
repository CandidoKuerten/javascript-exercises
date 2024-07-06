const removeFromArray = function(value, ...aux) {
    const novoArray = [];
    let count = 0;

    while (count < value.length) {
        if (!aux.includes(value[count])) {
            novoArray.push(value[count]);
        }
        count++;
    }
    
    return novoArray;
};

module.exports = removeFromArray;
